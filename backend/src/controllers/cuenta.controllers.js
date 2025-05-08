import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

const postCuenta = async (req, res) => {
    try {
        const result = await prisma.cuenta.create({
            data: {
                estado: true
            }
        });
        if (!result) return res.status(404).json({ error: "Cuenta no creada" });
        res.status(201).end();//.end()
    } catch (error) {
        res.status(500).json({ error: "Error al crear cuenta" });
    }
};

const closeCuenta = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.cuenta.update({
            where: { id_cuenta: id },
            data: { estado: false }
        });
        if (!result) return res.status(404).json({ error: "Cuenta no eliminada" });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar cuenta" });
    }
};

const getCuentaPorIngreso = async (req, res) => {
    try {
        const { id } = req.params;
        const cuenta = await prisma.cuenta.findFirst({
            where: {
                fk_ingreso: Number(id),
                activo: true
            },
            include: {
                consumos: true,
                factura: true,
                ingreso: {
                    include: {
                        reserva: {
                            include: {
                                huesped: true
                            }
                        }
                    }
                }
            }
        });

        if (!cuenta) return res.status(404).json({ error: "Cuenta no encontrada" });

        

        res.json(cuenta);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener cuenta" });
    }
};


export default {
    postCuenta,
    closeCuenta,
    getCuentaPorIngreso
};