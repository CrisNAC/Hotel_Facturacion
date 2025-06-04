import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

// Crear una reserva
export const createReserva = async (req, res) => {
	const { fk_huesped, fk_tipo_habitacion, fk_usuario, checkIn, checkOut, estado } = req.body;

	if (!fk_huesped || !fk_tipo_habitacion || !fk_usuario || !checkIn || !checkOut || !estado) {
		return res.status(400).json({ error: "Faltan campos obligatorios" });
	}

	if (new Date(checkIn) >= new Date(checkOut)) {
		return res.status(400).json({ error: "La fecha de check-in debe ser anterior a la de check-out" });
	}

	try {
		const huesped = await prisma.huesped.findUnique({ where: { id_huesped: Number(fk_huesped) } });
		if (!huesped) return res.status(404).json({ error: "Huésped no encontrado" });

		const tipoHabitacion = await prisma.tipoHabitacion.findUnique({ where: { id_tipo_habitacion: Number(fk_tipo_habitacion) } });
		if (!tipoHabitacion) return res.status(404).json({ error: "Tipo de habitación no encontrado" });

		const usuario = await prisma.usuario.findUnique({ where: { id_usuario: Number(fk_usuario) } });
		if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

		const reserva = await prisma.reserva.create({
			data: {
				fk_huesped: Number(fk_huesped),
				fk_tipo_habitacion: Number(fk_tipo_habitacion),
				fk_usuario: Number(fk_usuario),
				checkIn: new Date(checkIn),
				checkOut: new Date(checkOut),
				estado,
			}
		});

		res.status(201).json(reserva);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear la reserva" });
	}
};

// Obtener todas las reservas activas
export const getReservas = async (req, res) => {
	try {
		const reservas = await prisma.reserva.findMany({
			where: { activo: true },
			include: {
				huesped: true,
				tipoHabitacion: true,
				usuario: true
			}
		});
		res.status(200).json(reservas);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener las reservas" });
	}
};

// Obtener reservas activas por huésped
export const getReservasPorHuesped = async (req, res) => {
	const { id_huesped } = req.params;

	try {
		const reservas = await prisma.reserva.findMany({
			where: {
				fk_huesped: Number(id_huesped),
				activo: true
			},
			include: {
				tipoHabitacion: true,
				usuario: true
			}
		});
		res.status(200).json(reservas);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener las reservas del huésped" });
	}
};

// Obtener reservas activas por rango de fechas
export const getReservasPorFechas = async (req, res) => {
    try {
        const { desde, hasta } = req.query;

        if (!desde || !hasta) {
            return res.status(400).json({ message: "Fechas 'desde' y 'hasta' son obligatorias." });
        }

        const reservas = await prisma.reserva.findMany({
            where: {
                checkIn: { gte: new Date(desde) },
                checkOut: { lte: new Date(hasta) },
                activo: true,
            },
            include: {
                huesped: true,
                tipoHabitacion: true,
            },
            orderBy: {
                checkIn: 'asc',
            }
        });

        res.json(reservas);
    } catch (error) {
        console.error("Error al obtener reservas por fechas:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

// Obtener una reserva por su ID
export const getReservaPorId = async (req, res) => {
	const { id_reserva } = req.params;

	try {
		const reserva = await prisma.reserva.findUnique({
			where: { id_reserva: Number(id_reserva) },
			include: {
				huesped: true,
				tipoHabitacion: true,
				usuario: true,
				ingreso: {
					where: { activo: true },
					include: {
						huespedesHabitaciones: true,
					}
				}
			}
		});

		if (!reserva || !reserva.activo) {
			return res.status(404).json({ error: "Reserva no encontrada o inactiva" });
		}

		res.status(200).json(reserva);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener la reserva" });
	}
};

// Eliminar (soft delete) una reserva
export const deleteReserva = async (req, res) => {
	const { id_reserva } = req.params;

	try {
		const reservaExistente = await prisma.reserva.findUnique({
			where: { id_reserva: Number(id_reserva) }
		});

		if (!reservaExistente || !reservaExistente.activo) {
			return res.status(404).json({ error: "Reserva no encontrada o ya está inactiva" });
		}

		const reserva = await prisma.reserva.update({
			where: { id_reserva: Number(id_reserva) },
			data: { activo: false }
		});

		res.status(200).json({ message: "Reserva eliminada correctamente (soft delete)", reserva });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al eliminar la reserva" });
	}
};
