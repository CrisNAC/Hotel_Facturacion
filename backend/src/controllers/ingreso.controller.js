import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();


const getAllIngresos = async (req, res) => {
    try {
        const ingresos = await prisma.ingreso.findMany();
        if (!ingresos) return res.status(404).json({ error: 'Tareas no enontradas' });
        res.json(ingresos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
};

export default {
    getAllIngresos
};