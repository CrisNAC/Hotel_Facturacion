import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Obtener todas las facturas activas
export const getAllFacturas = async (req, res) => {
  try {
    const facturas = await prisma.factura.findMany({
      orderBy: { fecha_emision: 'desc' },
      include: {
        timbrado: true,
        detalles: true,
        usuario: {
          select: { nombre: true, apellido: true }
        },
        cuenta: {
          include: {
            ingreso: {
              include: {
                huesped: {
                  select: { nombre: true, apellido: true }
                }
              }
            }
          }
        }
      }
    });
    res.status(200).json(facturas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las facturas" });
  }
};


export const createFactura = async (req, res) => {
  try {
    const {
      fk_cuenta,
      fk_timbrado = 1,
      condicion_venta,
      fecha_emision,
      total,
      fk_usuario = 1,
      numero_factura,
      detalles
    } = req.body;

    const existe = await prisma.factura.findUnique({
      where: { numero_factura }
    });

    if (existe) {
      return res.status(400).json({ error: "El número de factura ya existe" });
    }

    const nuevaFactura = await prisma.$transaction(
      async (tx) => {
        const cuenta = await tx.cuenta.findUnique({
          where: { id_cuenta: fk_cuenta },
          include: {
            ingreso: {
              include: {
                habitacion: true,
                huespedesHabitaciones: {
                  include: { huesped: true }
                }
              }
            }
          }
        });

        if (!cuenta || !cuenta.ingreso) {
          throw new Error("Cuenta o ingreso no encontrado");
        }

        const ingreso = cuenta.ingreso;

        // Desactivar ingreso
        await tx.ingreso.update({
          where: { id_ingreso: ingreso.id_ingreso },
          data: { activo: false, estado: "Cancelado" }
        });

        // Liberar habitación
        if (ingreso.fk_habitacion) {
          await tx.habitacion.update({
            where: { id_habitacion: ingreso.fk_habitacion },
            data: { estado: true , activo: true }
          });
        }

        // Desactivar HuespedHabitacion
        await Promise.all(
          ingreso.huespedesHabitaciones.map((relacion) =>
            tx.huespedHabitacion.update({
              where: { id_huesped_habitacion: relacion.id_huesped_habitacion },
              data: { activo: false }
            })
          )
        );

        // Desactivar los huéspedes involucrados
        const huespedIds = ingreso.huespedesHabitaciones.map(rel => rel.fk_huesped);
        await Promise.all(
          huespedIds.map(id =>
            tx.huesped.update({
              where: { id_huesped: id },
              data: { activo: false }
            })
          )
        );

        // Desactivar cuenta
        await tx.cuenta.update({
          where: { id_cuenta: fk_cuenta },
          data: {
            activo: false,
            estado: false
          }
        });

        // Crear factura y detalles
        const factura = await tx.factura.create({
          data: {
            fk_cuenta,
            fk_timbrado,
            numero_factura,
            condicion_venta,
            fecha_emision: fecha_emision ? new Date(fecha_emision) : undefined,
            total,
            fk_usuario,
            detalles: {
              create: detalles
            }
          },
          include: {
            detalles: true
          }
        });

        return factura;
      },
      {
        timeout: 20000 
      }
    );

    res.status(201).json(nuevaFactura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la factura" });
  }
};

// Obtener facturas por rango de fechas
export const getFacturasPorFechas = async (req, res) => {
  try {
    const { desde, hasta } = req.query;

    if (!desde || !hasta) {
      return res.status(400).json({ message: "Fechas 'desde' y 'hasta' son obligatorias." });
    }

    const facturas = await prisma.factura.findMany({
      where: {
        fecha_emision: {
          gte: new Date(desde),
          lte: new Date(hasta),
        },
      },
      include: {
        cuenta: {
          include: {
            ingreso: {
              include: {
                huesped: {
                  select: {
                    nombre: true,
                    apellido: true
                  }
                }
              }
            }
          }
        },
        detalles: true
      },
      orderBy: {
        fecha_emision: 'asc',
      }
    });

    res.json(facturas);
  } catch (error) {
    console.error("Error al obtener facturas:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// Obtener una factura por su ID
export const getFacturaById = async (req, res) => {
  const { id } = req.params;

  try {
    const factura = await prisma.factura.findUnique({
      where: { id_factura: parseInt(id) },
      include: {
        detalles: {
          select: { id_detalle_factura: true, descripcion: true, cantidad: true, precio_unitario: true, descuento: true, porcentaje_iva: true }
        },
        timbrado: true,
        usuario: {
          select: { nombre: true, apellido: true }
        },
        cuenta: {
          include: {
            ingreso: {
              include: {
                huesped: {
                  select: { nombre: true, apellido: true, numero_documento: true, ruc: true, telefono: true, email: true }
                },
                habitacion: {
                  include: {
                    tipoHabitacion: true
                  }
                },
                tarifa: true
              }
            }
          }
        }
      }
    });

    if (!factura) {
      return res.status(404).json({ error: 'Factura no encontrada' });
    }

    res.status(200).json(factura);
  } catch (error) {
    console.error('Error al obtener la factura:', error);
    res.status(500).json({ error: 'Error al obtener la factura' });
  }
};

export const obtenerUltimoNumeroFactura = async (req, res) => {
  try {
    const ultimaFactura = await prisma.factura.findFirst({
      orderBy: {
        id_factura: 'desc',
      },
      select: {
        id_factura: true,
      }
    });

    const nuevoNumero = ultimaFactura ? ultimaFactura.id_factura + 1 : 1;

    res.json({ siguienteNumeroFactura: nuevoNumero });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el último número de factura" });
  }
};

export const enviarFacturaDesdeArchivo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se ha subido ningún archivo" });
    }

    const { originalname, buffer } = req.file;
    const emailDestino = req.body.email;

    if (!emailDestino) {
      return res.status(400).json({ error: "El correo electrónico es requerido" });
    }

    // Configuración mejorada del transporter
	dotenv.config();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Solo para desarrollo, quitar en producción
      }
    });
    console.log(transporter)

    // Verificar conexión
    await transporter.verify();

    const mailOptions = {
      from: `"Hotel Gestión" <${process.env.EMAIL_USER}>`,
      to: emailDestino,
      subject: "Tu factura en PDF",
      text: "Adjunto encontrarás tu factura.",
      attachments: [{
        filename: originalname,
        content: buffer,
        contentType: 'application/pdf'
      }]
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ mensaje: "Factura enviada por correo exitosamente" });

  } catch (error) {
    console.error("Error detallado:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    let mensajeError = "Error al enviar la factura por correo";
    if (error.code === 'EAUTH') {
      mensajeError = "Error de autenticación con el servidor de correo. Verifique las credenciales.";
    }
    
    res.status(500).json({ 
      error: mensajeError,
      detalle: error.message
    });
  }
};