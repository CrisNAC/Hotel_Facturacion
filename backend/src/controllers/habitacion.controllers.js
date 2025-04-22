import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getHabitaciones = async (req, res) => {
	try {
		const rooms = await prisma.habitacion.findMany({
			where: { activo: true },
			include: { tipoHabitacion: true }
		});
		res.status(200).json(rooms);
	
	} catch (error) {
		console.error(error); //Debugging prisma errors on server console
		res.status(500).json({ error: "Internal Server Error: Error al obtener habitaciones" })
	}
}

export const getHabitacionById = async (req, res) => {
	const {id} = req.params;

	try {
		const room = await prisma.habitacion.findUnique({
			where: { id_habitacion: parseInt(id) },
			include: { tipoHabitacion: true }
		});

		if (!room) return res.status(404).json({ error: "Habitacion no encontrada" });

		res.status(200).json(room);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al obtener habitacion" })
	}
}

export const createHabitacion = async (req, res) => {
	const { numero, fk_tipo_habitacion, piso, estado } = req.body;

	try {
		const exists_number_room = await prisma.habitacion.findUnique({
			where: { numero }
		});

		if(exists_number_room) return res.status(400).json({ error: "Numero de habitacion ya existente" })

		const newRoom = await prisma.habitacion.create({
			data: {
				numero,
				fk_tipo_habitacion,
				piso,
				estado
			}
		});
		res.status(201).json(newRoom);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al crear la habitacion" })
	}
}

export const updateHabitacion = async (req, res) => {
	const {id} = req.params;
	const { numero, fk_tipo_habitacion, piso, estado, activo } = req.body;

	try {
		const updatedRoom = await prisma.habitacion.update({
			where: { id_habitacion: parseInt(id) },
			data: {
				numero,
				fk_tipo_habitacion,
				piso,
				estado,
				activo
			}
		});
		res.status(200).json(updatedRoom);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al actualizar la habitacion" })
	}
}

export const deleteHabitacion = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedRoom = await prisma.habitacion.findUnique({
			where: { id_habitacion: parseInt(id) }
		});

		if (!deletedRoom) return res.status(404).json({ error: "Habitacion no encontrada" });

		await prisma.habitacion.update({
			where: { id_usuario: parseInt(id) },
			data: { activo: false}
		});

		res.status(200).json( { message: "Habitacion eliminada con exito" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al eliminar habitacion" });
	}
};