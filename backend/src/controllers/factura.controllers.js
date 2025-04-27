import { PrismaClient } from "../../generated/prisma/index.js";
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

const getAllfacturas = async (req, res) => {
    try {
        const result = await prisma.factura.findMany({
            include: {
                cuenta: true,
                timbrado: true,
                usuario: true,
            }
        });
        if (!result) return res.status(404).json({ error: "Facturas no encontradas" });
        res.status(200).json(result);//.end()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener facturas" });
    }
};

const postfactura = async (req, res) => {
    try {
        const {
            condicion_venta,
            total
        } = req.body;
        const result = await prisma.factura.create({
            data: {
                condicion_venta: condicion_venta,
                total: total
            }
        });
        if (!result) return res.status(404).json({ error: "Factura no creada" });
        res.status(201).end();
    } catch (error) {
        res.status(500).json({ error: "Error al crear factura" });
    }
};

export default {
    getAllfacturas,
    postfactura
};