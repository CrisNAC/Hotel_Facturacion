import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

/* const name = async (req, res) => {
    try {
        const result = await prisma
        if (!result) return res.status(404).json({ error: "Huespedes no encontrados" });
        res.status(200).json();//.end()
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huespedes" });
    }
}; */

const getAllConsumos = async (req, res) => {
    try {
        const result = await prisma.consumo.findMany();
        if (!result) return res.status(404).json({ error: "Consumos no encontrados" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener consumos" });
    }
};

const postConsumo = async (req, res) => {
    try {
        const { descripcion, cantidad, monto } = req.body;
        const result = await prisma.consumo.create({
            data: {
                descripcion: descripcion,
                cantidad: cantidad,
                monto: monto
            }
        });
        if (!result) return res.status(404).json({ error: "Consumo no creado" });
        res.status(201).end();
    } catch (error) {
        res.status(500).json({ error: "Error al crear consumo" });
    }
};

const deleteConsumo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.consumo.update({
            where: { id_consumo: id },
            data: { activo: false }
        });
        if (!result) return res.status(404).json({ error: "Consumo no eliminado" });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar consumo" });
    }
};

export default {
    getAllConsumos,
    postConsumo,
    deleteConsumo
};