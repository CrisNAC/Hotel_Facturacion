import { PrismaClient, DocumentoIdentidad, Nacionalidad } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

const getAllHuespedes = async (req, res) => {
    try {
        const result = await prisma.huesped.findMany({
            where: {
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: "Huespedes no encontrados" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huespedes" });
    }
};

const getHuespedesFrecuentes = async (req, res) => {
    try {
        const { desde, hasta } = req.query;

        const fechaDesde = desde ? new Date(desde) : null;
        const fechaHasta = hasta ? new Date(hasta) : null;

        const huespedes = await prisma.huesped.findMany({
            where: { activo: true },
            select: {
                id_huesped: true,
                nombre: true,
                apellido: true,
                numero_documento: true,
                nacionalidad: true,
                email: true,
                telefono: true,
                ingresos: {
                    where: {
                        AND: [
                            fechaDesde ? { checkIn: { gte: fechaDesde } } : {},
                            fechaHasta ? { checkIn: { lte: fechaHasta } } : {},
                        ],
                    },
                    select: {
                        checkIn: true,
                        // Ahora seleccionamos las cuentas, y dentro de cada cuenta, agregamos las facturas
                        cuenta: {
                            select: {
                                // Aquí calculamos la suma de los totales de las facturas directamente en la consulta
                                factura: {
                                    select: {
                                        total: true
                                    }
                                }
                            }
                        }
                    }
                },
                reservas: {
                    where: {
                        AND: [
                            fechaDesde ? { checkIn: { gte: fechaDesde } } : {},
                            fechaHasta ? { checkIn: { lte: fechaHasta } } : {},
                        ],
                    },
                    select: { id_reserva: true },
                },
            },
        });

        const data = huespedes.map(h => {
            let totalFacturado = 0;
            h.ingresos.forEach(ingreso => {
                ingreso.cuenta.forEach(cuenta => { // Itera sobre las cuentas de un ingreso
                    cuenta.factura.forEach(factura => { // Itera sobre las facturas de una cuenta
                        totalFacturado += factura.total || 0;
                    });
                });
            });

            return {
                id: h.id_huesped,
                nombre_completo: `${h.nombre} ${h.apellido}`,
                numero_documento: h.numero_documento,
                nacionalidad: h.nacionalidad,
                email: h.email,
                telefono: h.telefono,
                total_ingresos: h.ingresos.length,
                total_reservas: h.reservas.length,
                ultimo_checkin: h.ingresos
                    .map(i => new Date(i.checkIn))
                    .sort((a, b) => b - a)[0] || null,
                total_facturado: totalFacturado
            };
        });

        const ordenado = data.sort((a, b) =>
            (b.total_ingresos + b.total_reservas) - (a.total_ingresos + a.total_reservas)
        );

        res.status(200).json(ordenado);
    } catch (error) {
        console.error("Error al obtener huéspedes frecuentes:", error);
        res.status(500).json({ error: "Error al obtener huéspedes frecuentes" });
    }
};

const getHuesped = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const result = await prisma.huesped.findFirst({
            where: {
                id_huesped: id,
                activo: true
            }
        });

        if (!result) return res.status(404).json({ error: "Huésped no encontrado" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huésped" });
    }
};

const getHuespedDocumento = async (req, res) => {
    try {
        const { dato } = req.params;
        const response = await prisma.huesped.findFirst({
            where: {
                numero_documento: dato,
                activo: true
            }
        });
        if (!response) return res.status(404).json({ error: "Huésped no encontrado" });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huésped" });
    }
};

const postHuesped = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            documento_identidad,
            numero_documento,
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;

        // Validaciones básicas
        if (!nombre || !apellido || !documento_identidad || !numero_documento || !nacionalidad) {
            return res.status(400).json({ error: "Faltan campos requeridos" });
        }

        // Validar que el número de documento no esté repetido
        const exists_number_document = await prisma.huesped.findUnique({
            where: { numero_documento }
        });

        if (exists_number_document) {
            return res.status(400).json({ error: "Número de documento ya existente" });
        }

        // Validar enums válidos desde Prisma
        if (!Object.values(DocumentoIdentidad).includes(documento_identidad)) {
            return res.status(400).json({ error: "Documento de identidad inválido" });
        }

        if (!Object.values(Nacionalidad).includes(nacionalidad)) {
            return res.status(400).json({ error: "Nacionalidad inválida" });
        }

        // Crear el huésped
        const result = await prisma.huesped.create({
            data: {
                nombre,
                apellido,
                documento_identidad,
                numero_documento,
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
                fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null
            }
        });

        if (!result) {
            return res.status(400).json({ error: "Huésped no creado" });
        }

        res.status(201).json(result);
    } catch (error) {
        console.error("Error al crear huésped:", error);
        res.status(500).json({ error: "Error interno al crear huésped" });
    }
};

const deleteHuesped = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const result = await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: {
                activo: false
            }
        });

        res.status(200).json({ message: "Huésped eliminado con éxito" });
    } catch (error) {
        if (error.code === 'P2025') {
            // Prisma no encontró el registro
            return res.status(404).json({ error: "Huésped no encontrado" });
        }

        res.status(500).json({ error: "Error al eliminar huésped" });
    }
};

const putHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        const id_huesped = Number(id); // Convertir id a un número
        const {
            nombre,
            apellido,
            documento_identidad,
            numero_documento,
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;

        // Validación básica
        if (!nombre || !apellido || !documento_identidad || !numero_documento) {
            return res.status(400).json({ error: "Faltan campos requeridos" });
        }

        const existingHuesped = await prisma.huesped.findFirst({
            where: {
                numero_documento,
                NOT: { id_huesped }
            }
        });

        if (existingHuesped) {
            return res.status(400).json({ error: "El número de documento ya está en uso por otro huésped" });
        }

        const result = await prisma.huesped.update({
            where: {
                id_huesped: id_huesped // Usar el id convertido
            },
            data: {
                nombre,
                apellido,
                documento_identidad,
                numero_documento,
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
                fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null
            }
        });

        res.status(200).json({ message: "Huésped actualizado", data: result });
    } catch (error) {
        console.error("Error al editar huésped:", error);
        res.status(500).json({ error: "Error al editar huéspedes", details: error.message });
    }
};

const patchHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: req.body
        });
        if (!result) return res.status(400).json({ error: "Huesped no editado" });
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Error al editar huespedes" });
    }
};

export default {
    getAllHuespedes,
    getHuespedesFrecuentes,
    getHuesped,
    getHuespedDocumento,
    postHuesped,
    deleteHuesped,
    putHuesped,
    patchHuesped
};
