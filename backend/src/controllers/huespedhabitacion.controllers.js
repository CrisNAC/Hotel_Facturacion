import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

// Crear una relación entre huésped e ingreso
const crearRelacion = async(req, res) => {
	const { fk_huesped, fk_ingreso } = req.body;

	try {
		const relacion = await prisma.huespedHabitacion.create({
			data: {
				fk_huesped,
				fk_ingreso
			}
		});
		res.status(201).json(relacion);
    } catch (error) {
		console.error("Error al crear HuespedHabitacion:", error);
		res.status(500).json({ error: "Error al crear la relación huésped-habitación" });
	}
};

// Obtener todas las relaciones
const obtenerTodas = async(req, res) => {
    try {
		const relaciones = await prisma.huespedHabitacion.findMany({
			include: {
				huesped: true,
				ingreso: true
			}
		});
        res.status(200).json(relaciones);
    } catch (error) {
		console.error("Error al obtener HuespedHabitacion:", error);
		res.status(500).json({ error: "Error al obtener las relaciones" });
	}
};

// Eliminar o desactivar una relación
const eliminar = async(req, res) => {
	const { id } = req.params;

	try {
		const relacion = await prisma.huespedHabitacion.update({
			where: { id_huesped_habitacion: parseInt(id) },
			data: { activo: false }
        });
		res.status(200).json({ message: "Relación desactivada correctamente", relacion });
    } catch (error) {
		console.error("Error al eliminar HuespedHabitacion:", error);
		res.status(500).json({ error: "Error al eliminar la relación" });
    }
};

export default {
    crearRelacion,
    obtenerTodas,
    eliminar
};
