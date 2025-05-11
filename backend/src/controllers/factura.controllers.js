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
            orderBy: { fecha_emision: 'asc' },
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

const getFacturaById = async (req, res) => {
    const { id } = req.params;

    try {
        const factura = await prisma.factura.findUnique({
            where: { id: Number(id) },
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
                // Asumiendo que tengas una relación con items:
                items: true
            }
        });

        if (!factura) {
            return res.status(404).json({ error: "Factura no encontrada" });
        }

        // Armamos el objeto esperado por el frontend
        const response = {
            hotelName: "Hotel Central",
            activity: "Servicios de hospedaje",
            address: "Av. Principal 123",
            ruc: "80012345-6",
            timbrado: factura.timbrado.numero,
            vigencia: factura.timbrado.fecha_inicio,
            invoiceNumber: `${factura.timbrado.codigo_sucursal}-${factura.timbrado.codigo_punto_facturacion}-${String(factura.timbrado.numero_secuencial).padStart(7, '0')}`,
            customer: {
                name: factura.cuenta?.ingreso?.huesped?.nombre ?? "N/A",
                document: factura.cuenta?.ingreso?.huesped?.documento ?? "N/A",
                email: factura.cuenta?.ingreso?.huesped?.email ?? "N/A",
                phone: factura.cuenta?.ingreso?.huesped?.telefono ?? "N/A"
            },
            invoiceDetails: {
                date: factura.fecha_emision,
                condition: factura.condicion_venta,
                currency: "PYG"
            },
            items: factura.items.map(item => ({
                code: item.codigo,
                description: item.descripcion,
                unit: item.unidad_medida,
                quantity: item.cantidad,
                unitPrice: item.precio_unitario,
                discount: item.descuento,
                exempt: item.exentas,
                tax5: item.iva5,
                tax10: item.iva10
            })),
            totals: {
                subtotal: factura.total,
                totalOperation: factura.total,
                totalGuaranies: factura.total,
                taxLiquidation: factura.iva_total
            }
        };

        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener la factura" });
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
    getFacturaById,
    postfactura
};
