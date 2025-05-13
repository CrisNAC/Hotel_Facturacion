import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllTimbrados = async (req, res) => {
	try {
		const timbrados = await prisma.timbrado.findMany({
			orderBy: { fecha_inicio: 'desc' }
		});
		res.status(200).json(timbrados);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al obtener timbrados" });
	}
};

export const createTimbrado = async (req, res) => {
	try {
		const {
			fecha_inicio,
			fecha_fin,
			codigo_sucursal,
			codigo_punto_facturacion
		} = req.body;

		const nuevo = await prisma.timbrado.create({
			data: {
				fecha_inicio: new Date(fecha_inicio),
				fecha_fin: new Date(fecha_fin),
				codigo_sucursal,
				codigo_punto_facturacion
			}
		});
		res.status(201).json(nuevo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al crear el timbrado" });
	}
};
