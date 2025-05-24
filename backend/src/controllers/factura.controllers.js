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

export const createFactura = async (req, res) => {
  try {
    const {
      fk_cuenta,
      fk_timbrado = 1,
      condicion_venta,
      fecha_emision,
      total,
      fk_usuario,
      numero_factura,
      detalles
    } = req.body;

    // Verificar si el número de factura ya existe
    const existe = await prisma.factura.findUnique({
      where: { numero_factura }
    });

    if (existe) {
      return res.status(400).json({ error: "El número de factura ya existe" });
    }

    // Transacción para crear la factura
    const nuevaFactura = await prisma.$transaction(async (tx) => {
      const cuenta = await tx.cuenta.findUnique({
        where: { id_cuenta: fk_cuenta },
        include: { ingreso: true }
      });

      if (!cuenta || !cuenta.ingreso) {
        throw new Error("Cuenta o ingreso no encontrado");
      }

      // Desactivar ingreso
      await tx.ingreso.update({
        where: { id_ingreso: cuenta.fk_ingreso},
        data: { activo: false }
      });

      await tx.habitacion.update({
        where: { id_habitacion: ingreso.fk_habitacion },
        data: { activo: true }
      });

      // Desactivar cuenta
      await tx.cuenta.update({
        where: { id_cuenta: fk_cuenta },
        data: {
          activo: false,
          estado: false
        }
      });

      // Crear la factura
      const factura = await tx.factura.create({
        data: {
          fk_cuenta,
          fk_timbrado:1,
          numero_factura,
          condicion_venta,
          fecha_emision: fecha_emision ? new Date(fecha_emision) : undefined,
          total,
          fk_usuario:1,
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

export const obtenerUltimoNumeroFactura = async (req, res) => {
  try {
    const ultimaFactura = await prisma.factura.findFirst({
      orderBy: {
        id_factura: 'desc',
      },
      select: {
        id_factura: true,
      }
    });

    const nuevoNumero = ultimaFactura ? ultimaFactura.id_factura + 1 : 1;

    res.json({ siguienteNumeroFactura: nuevoNumero });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el último número de factura" });
  }
};

import { enviarFacturaPorCorreo } from '../services/mailer.service.js';

export const enviarFacturaEmail = async (req, res) => {
  const { id } = req.params;
  const { emailDestino } = req.body;

  try {
    await enviarFacturaPorCorreo(id, emailDestino);
    res.status(200).json({ mensaje: "Factura enviada por correo" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar la factura por correo" });
  }
};
