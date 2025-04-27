import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getTarifas = async (req, res) => {
	try {
		const tarifas = await prisma.tarifa.findMany({
			where: { activo: true },
			include: {
				tipoHabitacion: true
			}
		});
		res.status(200).json(tarifas);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al obtener tarifas"})
	}
};

export const getTarifaById = async (req, res) => {
	const { id } = req.params;
	try { 
		const tarifa = await prisma.tarifa.findUnique({
			where: { id_tarifa: parseInt(id) },
			include: {
				tipoHabitacion: {
					select: {
						id_tipo_habitacion,
						nombre,
						descripcion,
						capacidad
					}
				}
			}
		});

		if(!tarifa) {
			return res.status(404).json({ error: "Tarifa no encontrada" });
		}

		res.status(200).json(tarifa);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al obtener tarifa" })
	}
};

export const createTarifa = async (req, res) => {
	const { fk_tipo_habitacion, descripcion, precio } = req.body;

	try {
		const newTarifa = await prisma.tarifa.create({
			data: {
				fk_tipo_habitacion,
				descripcion,
				precio
			}
		});

		res.status(201).json(newTarifa);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al crear la tarifa" });
	}
};

export const updateTarifa = async (req, res) => {
	const { id } = req.params;

	const { fk_tipo_habitacion, descripcion, precio } = req.body;

	try {
		const updatedTarifa = await prisma.tarifa.update({
			where: { id_tarifa: parseInt(id) },
			data: {
				fk_tipo_habitacion,
				descripcion,
				precio
			}
		});

		res.status(200).json(updatedTarifa);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al actualizar la tarifa" })
	}
};

export const deleteTarifa = async (req, res) => {
	const { id } = req.params;

	try {
		const tarifa = await prisma.tarifa.findUnique({
			where: { id_tarifa: parseInt(id) }
		});

		if (!tarifa) return res.status(404).json({ error: "Tarifa no encontrada" });

		await prisma.tarifa.update({
			where: { id_tarifa: parseInt(id) },
			data: { activo: false}
		});

		res.status(200).json( { message: "Tarifa eliminada con exito" });

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al desactivar tarifa" });
	}
};

