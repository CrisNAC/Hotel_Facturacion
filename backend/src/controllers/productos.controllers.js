import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAllProductos = async (req, res) => {
    try {
        const productos = await prisma.productos.findMany({
            where: { activo: true },
            select: {
                id_producto: true,
                descripcion: true,
                precio_unitario: true,
                porcentaje_iva:true 
            }
        });

        res.status(200).json(productos);
    } catch (error) {
    console.error(error); // Mostrar el error en consola
    res.status(500).json({ error: "Internal Server Error: Error al listar productos "});
}}
