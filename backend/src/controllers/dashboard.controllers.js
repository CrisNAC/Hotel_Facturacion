import { PrismaClient } from "../../generated/prisma/index.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

const prisma = new PrismaClient();

export const dashboard = async (req, res) => {
    try {
        const fechaHoy = new Date();
        const fechaInicio = new Date(fechaHoy);
        fechaInicio.setHours(0, 0, 0, 0);
        const fechaFin = new Date(fechaHoy);
        fechaFin.setHours(23, 59, 59, 999);

        const libres = await prisma.habitacion.count({
            where: { estado: true, activo: true },
        });

        const reservadas = await prisma.reserva.count({
            where: { estado: 'Pendiente', activo: true }
        });

        const ocupadas = await prisma.habitacion.count({
            where: { estado: false, activo: true },
        });

        const huespedesActivos = await prisma.huespedHabitacion.count({
            where: {
                ingreso: {
                    estado: 'Activo'
                },
                activo: true
            },
        });

        const ingresosHoy = await prisma.reserva.findMany({
            where: {
                checkIn: {
                    gte: fechaInicio,
                    lte: fechaFin,
                }, activo: true
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
                }, activo: true
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
                hora: dayjs(reserva.checkIn).tz("America/Asuncion").format("HH:mm")
            })),
            egresosHoy: egresosHoy.map(ingreso => ({
                id: ingreso.id_ingreso,
                nombre: ingreso.huesped.nombre,
                apellido: ingreso.huesped.apellido,
                hora: dayjs(ingreso.checkOut).tz("America/Asuncion").format("HH:mm")
            })),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener datos del dashboard' });
    }
};
