import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

// Obtener todas las facturas activas
export const getAllFacturas = async (req, res) => {
	try {
		const facturas = await prisma.factura.findMany({
			orderBy: { fecha_emision: 'desc' },
			include: {
				timbrado: true,
				detalles: true,
				usuario: {
					select: { nombre: true, apellido: true }
				},
				cuenta: {
					include: {
						ingreso: {
							include: {
								huesped: {
									select: { nombre: true, apellido: true }
								}
							}
						}
					}
				}
			}
		});
		res.status(200).json(facturas);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener las facturas" });
	}
};

// Crear una nueva factura con numeración automática
export const createFactura = async (req, res) => {
	try {
		const {
			fk_cuenta,
			condicion_venta,
			total,
			fk_usuario,
			detalles
		} = req.body;

		// Buscar timbrado activo y válido por fecha
		const timbrado = await prisma.timbrado.findFirst({
			where: {
				activo: true,
				fecha_inicio: { lte: new Date() },
				fecha_fin: { gte: new Date() }
			}
		});

		if (!timbrado) {
			return res.status(400).json({ error: "No hay timbrado activo válido" });
		}

		// Calcular nuevo número secuencial
		const nuevoSecuencial = timbrado.ultimo_numero + 1;
		const numeroFactura = `${String(timbrado.codigo_sucursal).padStart(3, '0')}-${String(timbrado.codigo_punto_facturacion).padStart(3, '0')}-${String(nuevoSecuencial).padStart(7, '0')}`;

		// Crear la factura y detalles dentro de una transacción
		const nuevaFactura = await prisma.$transaction(async (tx) => {
			// Actualizar el timbrado con el nuevo número
			await tx.timbrado.update({
				where: { id_timbrado: timbrado.id_timbrado },
				data: { ultimo_numero: nuevoSecuencial }
			});

			// Crear la factura
			const factura = await tx.factura.create({
				data: {
					fk_cuenta,
					fk_timbrado: timbrado.id_timbrado,
					numero_factura: numeroFactura,
					condicion_venta,
					total,
					fk_usuario,
					detalles: {
						create: detalles
					}
				},
				include: {
					detalles: true
				}
			});

			return factura;
		});

		res.status(201).json(nuevaFactura);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear la factura" });
	}
};

// Obtener una factura por su ID
export const getFacturaById = async (req, res) => {
	const { id } = req.params;

	try {
		const factura = await prisma.factura.findUnique({
			where: { id_factura: parseInt(id) },
			include: {
				detalles: {
					select: { id_detalle_factura: true, descripcion: true, cantidad: true, precio_unitario: true, descuento: true, porcentaje_iva: true }
				},
				timbrado: true,
				usuario: {
					select: { nombre: true, apellido: true }
				},
				cuenta: {
					include: {
						ingreso: {
							include: {
								huesped: {
									select: { nombre: true, apellido: true, numero_documento: true, ruc: true, telefono: true, email: true }
								},
								habitacion: {
									include: {
										tipoHabitacion: true
									}
								},
								tarifa: true
							}
						}
					}
				}
			}
		});

		if (!factura) {
			return res.status(404).json({ error: 'Factura no encontrada' });
		}

		res.status(200).json(factura);
	} catch (error) {
		console.error('Error al obtener la factura:', error);
		res.status(500).json({ error: 'Error al obtener la factura' });
	}
};
