import {PrismaClient} from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllIngresos = async (req, res) => {
    try {
        const {desde, hasta} = req.query;

        const ingresos = await prisma.ingreso.findMany({
            where: {
                activo: true,
                checkIn: {
                    gte: desde ? new Date(desde) : undefined,
                    lte: hasta ? new Date(hasta) : undefined,
                },
            },
            orderBy: {
                checkIn: "asc",
            },
            select: {
                id_ingreso: true,
                estado: true,
                checkIn: true,
                checkOut: true,
                reserva: {
                    select: {
                        id_reserva: true,
                        check_in: true,
                        check_out: true,
                    },
                },
                huesped: {
                    select: {
                        id_huesped: true,
                        nombre: true,
                        apellido: true,
                        nacionalidad: true,
                        telefono: true,
                        email: true,
                        ruc: true,
                    },
                },

                habitacion: {
                    select: {
                        id_habitacion: true,
                        numero: true,
                        tipoHabitacion: {
                            select: {
                                nombre: true,
                            },
                        },
                    },
                },
                tarifa: {
                    select: {
                        descripcion: true,
                        precio: true,
                    },
                },

				cuenta: {
					select: {
						id_cuenta: true,
						consumos: {
							where: { activo: true },
							select: {
								id_consumo: true,
								cantidad: true,
								monto: true,
								activo: true,
								Productos: {
									select: {
										descripcion: true,
										precio_unitario: true,
										porcentaje_iva:true  
									}
								},
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
		const safeIngresos = JSON.parse(JSON.stringify(ingresos, (_, value) =>
			typeof value === 'bigint' ? value.toString() : value
		));

        res.status(200).json(safeIngresos);
    } catch (error) {
        console.error("Error al obtener todos los ingresos", error);
        res.status(500).json({
            error: "Internal Server Error: Error al listar ingresos",
        });
    }
};

export const createIngreso = async (req, res) => {
    try {
        const {
            fk_reserva,
            fk_habitacion,
            fk_huesped,
            fk_tarifa,
            estado,
            fk_usuario,
			checkIn,
			checkOut
        } = req.body;

        const nuevoIngreso = await prisma.ingreso.create({
            data: {
                fk_reserva: req.body.fk_reserva ? req.body.fk_reserva : null,
                fk_habitacion: req.body.fk_habitacion ? req.body.fk_habitacion : null,
                fk_huesped,
                fk_tarifa,
				estado,
                fk_usuario,
				checkIn,
				checkOut,
				cuenta: {
					create: [{}], //Apertura de cuenta vinculada al ingreso
				}
            },

            include: {
                reserva: {
                    select: {
						id_reserva: true,
                        check_in: true,
                        check_out: true,
                    },
                },
                habitacion: {
                    select: {
						id_habitacion: true,
                        numero: true,
						tipoHabitacion: {
							select: {
								nombre: true,
							}
						},
                    },
                },
                tarifa: {
                    select: {
                        descripcion: true,
                        precio: true,
                    },
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
                    },
                },
				cuenta: {
					include: {
						consumos: {
							include: {
								Productos: {
									select: {
										descripcion: true,
										precio_unitario: true,
										porcentaje_iva: true,
									},
								},
							},
						},
					},
				},
                usuario: {
                    select: {
						id_usuario: true,
                        nombre_usuario: true,
                    },
                },
            },
        });

		//Actualizamos el estado de la habitacion a no disponible
		if (fk_habitacion) {
			await prisma.habitacion.update({
				where: { id_habitacion: fk_habitacion },
				data: { estado: false }
			});
		}

        res.status(201).json(nuevoIngreso);
    } catch (error) {
		console.error(error);
        res.status(500).json({
            error: "Internal Server Error: Error al crear el ingreso",
        });
    }
};

export const cancelarIngreso = async (req, res) => {
	try {
		const { id } = req.params;

		// 1. Buscar el ingreso
		const ingreso = await prisma.ingreso.findUnique({
			where: { id_ingreso: parseInt(id) },
			include: { habitacion: true }
		});

		if (!ingreso) {
			return res.status(404).json({ error: "Ingreso no encontrado" });
		}
		
		// 2. Liberar la habitación
		if (ingreso.fk_habitacion) {
			await prisma.habitacion.update({
				where: { id_habitacion: ingreso.fk_habitacion },
				data: { estado: true } // asumimos que true = libre
			});
		}

		// 3. Actualizar el ingreso
		await prisma.ingreso.update({
			where: { id_ingreso: parseInt(id) },
			data: {
				fk_habitacion: null,
				estado: "Cancelado"
			}
		});


		res.status(200).end();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al cancelar el ingreso" });
	}
};
