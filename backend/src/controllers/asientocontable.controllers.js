import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

// Obtener todos los Asientos Contables
export const getAllAsientos = async (req, res) => {
  try {
    const asientos = await prisma.asientoContable.findMany({
      orderBy: {
        id_asiento: 'asc'
      },
      select: {
        id_asiento: true,
        fecha: true,
        concepto: true,
        debe: true,
        haber: true
      }
    });
    res.status(200).json(asientos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los asientos" });
  }
};

// Crear uno o varios asientos contables
export const crearAsiento = async (req, res) => {
  try {
    const asientos = req.body;

    if (!Array.isArray(asientos) || asientos.length === 0) {
      return res.status(400).json({ error: "Se requiere un arreglo de asientos contables" });
    }

    // Validación rápida
    for (const asiento of asientos) {
      if (!asiento.concepto) {
        return res.status(400).json({ error: "Todos los asientos deben tener un concepto" });
      }
    }

    // Mapear datos (prisma.createMany no convierte tipos automáticamente)
    const data = asientos.map(a => ({
      created_at: a.fecha ? new Date(a.fecha) : null,
      fecha: a.fecha ? new Date(a.fecha) : null,
      concepto: a.concepto,
      debe: a.debe !== null ? parseInt(a.debe) : null,
      haber: a.haber !== null ? parseInt(a.haber) : null,
      activo: true
    }));

    // Crear muchos asientos de una sola vez
    const resultado = await prisma.asientoContable.createMany({
      data
    });

    res.status(201).json({ mensaje: "Asientos contables creados", cantidad: resultado.count });
  } catch (error) {
    console.error('Error al crear asientos contables:', error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
