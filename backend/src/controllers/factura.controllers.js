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
        const facturas = await prisma.factura.findMany({
            include: {
                cuenta: {
                    include: {
                        ingreso: {
                            include: {
                                huesped: true
                            }
                        }
                    }
                },
                timbrado: true,
                usuario: true,
            }
        });

        if (!facturas || facturas.length === 0) {
            return res.status(404).json({ error: "Facturas no encontradas" });
        }

        const facturasFormateadas = facturas.map(f => ({
            huesped: f.cuenta?.ingreso?.huesped
                ? `${f.cuenta.ingreso.huesped.nombre} ${f.cuenta.ingreso.huesped.apellido}`
                : "Huésped desconocido",
            numero: f.timbrado 
                ? `${String(f.timbrado.codigo_sucursal).padStart(3, '0')}-${String(f.timbrado.codigo_punto_facturacion).padStart(3, '0')}-${String(f.timbrado.numero_secuencial).padStart(7, '0')}`
                : "Sin timbrado",
            fecha: f.fecha_emision ? f.fecha_emision.toISOString().split('T')[0] : "Fecha desconocida",
            monto: f.total,
            condicion: f.condicion_venta
        }));

        res.status(200).json(facturasFormateadas);
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
