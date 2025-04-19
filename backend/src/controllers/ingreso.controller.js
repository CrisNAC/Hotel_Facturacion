import { prisma } from "../../prisma/client";

const getAllIngresos = async (req, res) => {
    try {
        const ingresos = await prisma.ingreso.findMany();
    } catch (error) {

    }
};

module.exports = {
    getAllIngresos
};