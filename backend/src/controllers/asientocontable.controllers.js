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

