import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

const getAllIngresos = async (req, res) => {
    try {
        const result = await prisma.ingreso.findMany({
            where: {
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: 'Ingresos no enontrados' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Ingresos' });
    }
};

export default {
    getAllIngresos
};