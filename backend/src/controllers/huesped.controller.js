import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

const getAllHuespedes = async (req, res) => {
    try {
        const result = await prisma.huesped.findMany({
            where: {
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: "Huespedes no encontrados" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huespedes" });
    }
};

const getHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.huesped.findFirst({
            where: {
                id_huesped: id,
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: "Huesped no encontrado" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huesped" });
    }
};

const postHuesped = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            documento_identidad,
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;
        const result = await prisma.huesped.create({
            data: {
                nombre,
                apellido,
                documento_identidad,
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
                fecha_nacimiento,
            }
        });
        if (!result) return res.status(400).json({ error: "Huesped no creado" });
        res.status(201).end();
    } catch (error) {
        res.status(500).json({ error: "Error al crear huesped" });
    }
};

const deleteHuesped = async (req, res) => {
    try {

        const { id } = req.params;
        const result = await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: {
                activo: false
            }
        });
        if (!result) return res.status(404).json({ error: "Huesped no encontrado" });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar huespedes" });
    }
};

const putHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nombre,
            apellido,
            documento_identidad,
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;
        await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: {
                nombre,
                apellido,
                documento_identidad,
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
                fecha_nacimiento,
            }
        });
        if (!result) return res.status(400).json({ error: "Huesped no editado" });
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Error al editar huespedes" });
    }
};

const patchHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: req.body
        });
        if (!result) return res.status(400).json({ error: "Huesped no editado" });
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Error al editar huespedes" });
    }
};

export default {
    getAllHuespedes,
    getHuesped,
    postHuesped,
    deleteHuesped,
    putHuesped,
    patchHuesped
};
