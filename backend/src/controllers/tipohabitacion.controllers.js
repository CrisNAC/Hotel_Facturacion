import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getTiposHabitacion = async (req, res) => {
	try {
		const tipos = await prisma.tipoHabitacion.findMany({
			where: { activo: true },
		});
		res.status(200).json(tipos);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener los tipos de habitacion" });
	}
};

export const getTipoHabitacionById = async (req, res) => {
	const {id} = req.params;

	try {
		const type = await prisma.tipoHabitacion.findUnique({
			where: { id_tipo_habitacion: parseInt(id) }
		});

		if (!type) return res.status(404).json({ error: "Usuario no encontrado" }); 

		res.status(200).json(type);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener tipo de habitacion" })
	}
};

export const createTipoHabitacion = async (req, res) => {
	const { nombre, descripcion, capacidad } = req.body;

	try {
		const newType = await prisma.tipoHabitacion.create({
			data: {
				nombre,
				descripcion,
				capacidad
			}
		});
		res.status(201).json(newType);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear el tipo de habitacion" });
	}
};

export const deleteTipoHabitacion = async (req, res) => {
	const { id } = req.params;
	
	try {
		const tipoHabitacion = await prisma.tipoHabitacion.findUnique({
			where: { id_tipo_habitacion: parseInt(id) }
		});

		if (!tipoHabitacion) return res.status(404).json({ error: "Tipo de habitacion no encontrada" });

		await prisma.tipoHabitacion.update({
			where: {id_tipo_habitacion: parseInt(id) },
			data: { activo: false }
		});

		res.status(200).json( { message: "Tipo de habitacion eliminada con exito" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al desactivar tipo de habitacion" });
	}
};



