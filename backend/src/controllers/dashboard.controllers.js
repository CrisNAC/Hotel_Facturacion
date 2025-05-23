import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const dashboard = async (req, res) => {
    try {
        const fechaHoy = new Date();
        const fechaInicio = new Date(fechaHoy);
        fechaInicio.setHours(0, 0, 0, 0);
        const fechaFin = new Date(fechaHoy);
        fechaFin.setHours(23, 59, 59, 999);

        const libres = await prisma.habitacion.count({
            where: { estado: true },
        });

        const reservadas = await prisma.reserva.count({
            where: { estado: 'Pendiente' }
        });

        const ocupadas = await prisma.habitacion.count({
            where: { estado: false },
        });

        const huespedesActivos = await prisma.huespedHabitacion.count({
            where: {
                ingreso: {
                    estado: 'Activo',
                },
                activo: true
            },
        });

        const ingresosHoy = await prisma.reserva.findMany({
            where: {
                check_in: {
                    gte: fechaInicio,
                    lte: fechaFin,
                },
            },
            include: {
                huesped: true,
            },
        });

        const egresosHoy = await prisma.ingreso.findMany({
            where: {
                checkOut: {
                    gte: fechaInicio,
                    lte: fechaFin,
                },
            },
            include: {
                huesped: true,
            },
        });

        res.json({
            libres,
            reservadas,
            ocupadas,
            huespedesActivos,
            ingresosHoy: ingresosHoy.map(reserva => ({
                id: reserva.id_reserva,
                nombre: reserva.huesped.nombre,
                apellido: reserva.huesped.apellido,
                hora: reserva.check_in.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            })),
            egresosHoy: egresosHoy.map(ingreso => ({
                id: ingreso.id_ingreso,
                nombre: ingreso.huesped.nombre,
                apellido: ingreso.huesped.apellido,
                hora: ingreso.checkIn.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            })),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener datos del dashboard' });
    }
};
