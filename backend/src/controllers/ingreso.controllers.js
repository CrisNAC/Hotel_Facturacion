import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

/*const getAllIngresos = async (req, res) => {
	try {
		const result = await prisma.ingreso.findMany({
			where: {
				activo: true
			}
		});
		if (!result) return res.status(404).json({ error: 'Ingresos no enontrados' });
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener Ingresos' });
	}
};*/

export const getAllIngresos = async (req, res) => {
	try {
		const ingresos = await prisma.ingreso.findMany({
			where: { activo: true },
			orderBy: {
				reserva: {
					check_in: 'asc'
				}
			},
			select: {
				id_ingreso: true,
				estado: true,

				reserva: {
					select: {
						check_in: true,
						check_out: true
					}
				},
				huesped: {
					select: {
						id_huesped: true,
						nombre: true,
						apellido: true,
						nacionalidad: true,
						telefono: true,
						email: true,
						ruc: true
					}
				},

				habitacion: {
					select: {
						numero: true
					}
				},
				tarifa: {
					select: {
						descripcion: true,
						precio: true
					}
				},

				cuenta: {
					select: {
						id_cuenta: true,
						consumos: {
							select: {
								id_consumo: true,
								descripcion:true,
								cantidad: true,
								monto: true,
								activo: true
							}
						}
					}
				},
				usuario: {
					select: {
						id_usuario: true
					}
				}

			}
		});
		res.status(200).json(ingresos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al listar ingresos" });
	}
}

export const createIngreso = async (req, res) => {
	try {
		const {
			fk_reserva,
			fk_habitacion,
			fk_huesped,
			fk_tarifa,
			fecha_ingreso,
			estado,
			fk_usuario
		} = req.body;

		const nuevoIngreso = await prisma.ingreso.create({
			data: {
				fk_reserva,
				fk_habitacion,
				fk_huesped,
				fk_tarifa,
				fecha_ingreso: new Date(fecha_ingreso),
				estado,
				fk_usuario
			},

			include: {
				reserva: {
					select: {
						check_in: true,
						check_out: true
					}
				},
				habitacion: {
					select: {
						numero: true
					}
				},
				tarifa: {
					select: {
						descripcion: true,
						precio: true
					}
				},
				huesped: {
					select: {
						nombre: true,
						apellido: true
					}
				},
				usuario: {
					select: {
						nombre_usuario: true
					}
				}
			},
		});

		res.status(201).json(nuevoIngreso);

	} catch (error) {
		res.status(500).json({ error: "Internal Server Error: Error al crear el ingreso" });
	}
}

export const cancelarIngreso = async (req, res) => {
	try {
		const { id } = req.params;
		await prisma.ingreso.update({
			where: {
				id_ingreso: parseInt(id)
			},
			data: {
				estado: "Cancelado"
			}
		});
		res.status(200).end();
	} catch (error) {
		if (error.code === 'P2025') {
            res.status(404).json({ error: "Ingreso no encontrado" });
        } else {
            console.error(error);
            res.status(500).json({ error: "Error al cancelar el ingreso" });
        }
	}
};