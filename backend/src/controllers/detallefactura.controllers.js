// controllers/detalleFacturaController.js
import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

// Crear un nuevo detalle de factura
export const crearDetalleFactura = async (req, res) => {
    try {
        const nuevoDetalle = await prisma.detalleFactura.create({
            data: req.body,
        });
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear detalle de factura', detalles: error.message });
    }
};

// Obtener todos los detalles de factura
export const obtenerDetallesFactura = async (req, res) => {
    try {
        const detalles = await prisma.detalleFactura.findMany();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener detalles de factura' });
    }
};

// Obtener detalles de factura por ID de factura (útil para ver los ítems de una factura específica)
export const obtenerDetallesPorFactura = async (req, res) => {
    const { idFactura } = req.params;
    try {
        const detalles = await prisma.detalleFactura.findMany({
            where: { fk_factura: Number(idFactura) },
        });
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener detalles por factura' });
    }
};

// Actualizar un detalle de factura
export const actualizarDetalleFactura = async (req, res) => {
    const { id } = req.params;
    try {
        const actualizado = await prisma.detalleFactura.update({
            where: { id_detalle_factura: Number(id) },
            data: req.body,
        });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar detalle de factura', detalles: error.message });
    }
};

// Eliminar un detalle de factura
export const eliminarDetalleFactura = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.detalleFactura.delete({
            where: { id_detalle_factura: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar detalle de factura', detalles: error.message });
    }
};
