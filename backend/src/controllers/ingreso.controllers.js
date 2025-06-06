import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllIngresos = async (req, res) => {
    try {
        const { desde, hasta } = req.query;

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
                        checkIn: true,
                        checkOut: true,
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
                                        porcentaje_iva: true
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

export const getIngresoById = async (req, res) => {
    try {
        const { id } = req.params;
        const idIngreso = Number(id);

        if (isNaN(idIngreso)) {
            return res.status(400).json({ error: "ID de ingreso inválido" });
        }

        const ingreso = await prisma.ingreso.findUnique({
            where: {
                id_ingreso: idIngreso,
                activo: true
            },
            select: {
                id_ingreso: true,
                estado: true,
                checkIn: true,
                checkOut: true,
                reserva: {
                    select: {
                        id_reserva: true,
                        checkIn: true,
                        checkOut: true,
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
                                        porcentaje_iva: true
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

        if (!ingreso) {
            return res.status(404).json({ error: "Ingreso no encontrado" });
        }

        const safeIngreso = JSON.parse(JSON.stringify(ingreso, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));

        res.status(200).json(safeIngreso);

    } catch (error) {
        console.error("Error al obtener el ingreso", error);
        res.status(500).json({
            error: "Internal Server Error: Error en el ingreso",
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
            checkOut,
            companions
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
                },
                huespedesHabitaciones: {
                    create: [
                        { fk_huesped },
                        ...companions.map(h => ({ fk_huesped: h.id_huesped }))
                    ]
                }
            },

            include: {
                reserva: {
                    select: {
                        id_reserva: true,
                        checkIn: true,
                        checkOut: true,
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

export const updateIngresoConReserva = async (req, res) => {
	try {
		const id_ingreso = parseInt(req.params.id);

		const {
			fk_reserva,
			fk_habitacion,
			fk_huesped,
			fk_tarifa,
			fk_usuario,
			checkIn,
			checkOut,
			companions
		} = req.body;

		const ingresoActualizado = await prisma.ingreso.update({
			where: { id_ingreso },
			data: {
				fk_reserva,
				fk_habitacion,
				fk_huesped,
				fk_tarifa,
				fk_usuario,
				checkIn,
				checkOut,
				estado: "Activo",
				updated_at: new Date(),
				huespedesHabitaciones: {
					create: [
						{ fk_huesped },
						...companions.map(h => ({ fk_huesped: h.id_huesped }))
					]
				}
			},
			include: {
                reserva: {
                    select: {
                        id_reserva: true,
                        checkIn: true,
                        checkOut: true,
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

		//La cuenta no deberia existir sin un ingreso, pero en caso de existir incluimos sus datos
		const cuentaExistente = await prisma.cuenta.findFirst({
			where: {
				fk_ingreso: id_ingreso
			}
		});

		if (!cuentaExistente) {
			await prisma.cuenta.create({
				data: {
					fk_ingreso: id_ingreso
				}
			});
		}

		//Actualizamos el estado de la habitacion a no disponible
        if (fk_habitacion) {
            await prisma.habitacion.update({
                where: { id_habitacion: fk_habitacion },
                data: { estado: false }
            });
        }

		if (fk_reserva) {
            await prisma.reserva.update({
                where: { id_reserva: fk_reserva },
                data: { estado: "Confirmada" }
            });
        }

		res.status(200).json(ingresoActualizado);

	} catch(error) {
		console.error(error);
        res.status(500).json({
            error: "Internal Server Error: Error al actualizar el ingreso",
        });
	}
};
