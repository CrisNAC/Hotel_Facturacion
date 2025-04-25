<<<<<<< HEAD
import { PrismaClient } from "../../generated/prisma/index.js";
=======
import { PrismaClient, DocumentoIdentidad, Nacionalidad } from "../../generated/prisma/index.js";
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
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

const getHuesped = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.huesped.findFirst({
            where: {
                id_huesped: id,
                activo: true
            }
        });
        if (!result) return res.status(404).json({ error: "Huesped no encontrado" });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener huesped" });
    }
};

const postHuesped = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            documento_identidad,
<<<<<<< HEAD
=======
			numero_documento,
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;
<<<<<<< HEAD
=======

		const exists_number_document = await prisma.huesped.findUnique({
			where: { numero_documento }
		});

		if(exists_number_document) return res.status(400).json({ error: "Numero de habitacion ya existente" })

		// Validar enums válidos desde Prisma
		if (!Object.values(DocumentoIdentidad).includes(documento_identidad)) {
			return res.status(400).json({ error: "Documento de identidad inválido" });
		}
	
		if (!Object.values(Nacionalidad).includes(nacionalidad)) {
			return res.status(400).json({ error: "Nacionalidad inválida" });
		}

>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
        const result = await prisma.huesped.create({
            data: {
                nombre,
                apellido,
                documento_identidad,
<<<<<<< HEAD
=======
				numero_documento,
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
<<<<<<< HEAD
                fecha_nacimiento,
            }
        });
        if (!result) return res.status(400).json({ error: "Huesped no creado" });
        res.status(201).end();
    } catch (error) {
=======
                fecha_nacimiento: new Date(fecha_nacimiento)
            }
        });
        if (!result) return res.status(400).json({ error: "Huesped no creado" });
        res.status(201).json(result);
    } catch (error) {
		console.error(error);
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
        res.status(500).json({ error: "Error al crear huesped" });
    }
};

const deleteHuesped = async (req, res) => {
    try {

        const { id } = req.params;
        const result = await prisma.huesped.update({
            where: {
                id_huesped: id
            },
            data: {
                activo: false
            }
        });
        if (!result) return res.status(404).json({ error: "Huesped no encontrado" });
<<<<<<< HEAD
        res.status(204).end();
=======
        res.status(204).json({message: "Huesped eliminado con exito" });
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar huespedes" });
    }
};

const putHuesped = async (req, res) => {
    try {
        const { id } = req.params;
<<<<<<< HEAD
=======
        const id_huesped = Number(id); // Convertir id a un número
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
        const {
            nombre,
            apellido,
            documento_identidad,
<<<<<<< HEAD
=======
            numero_documento,
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
            ruc,
            nacionalidad,
            telefono,
            email,
            fecha_nacimiento
        } = req.body;
<<<<<<< HEAD
        await prisma.huesped.update({
            where: {
                id_huesped: id
=======

        // Validación básica
        if (!nombre || !apellido || !documento_identidad || !numero_documento) {
            return res.status(400).json({ error: "Faltan campos requeridos" });
        }

        // Validar si el número de documento ya existe
        const existingHuesped = await prisma.huesped.findUnique({
            where: { numero_documento }
        });

        if (existingHuesped && existingHuesped.id_huesped !== id_huesped) {
            return res.status(400).json({ error: "El número de documento ya está en uso" });
        }

        const result = await prisma.huesped.update({
            where: {
                id_huesped: id_huesped // Usar el id convertido
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
            },
            data: {
                nombre,
                apellido,
                documento_identidad,
<<<<<<< HEAD
=======
                numero_documento,
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
                ruc: ruc || null,
                nacionalidad,
                telefono: telefono || null,
                email: email || null,
<<<<<<< HEAD
                fecha_nacimiento,
            }
        });
        if (!result) return res.status(400).json({ error: "Huesped no editado" });
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Error al editar huespedes" });
=======
                fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null
            }
        });

        res.status(200).json({ message: "Huésped actualizado", data: result });
    } catch (error) {
        console.error("Error al editar huésped:", error);
        res.status(500).json({ error: "Error al editar huéspedes", details: error.message });
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
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
    getHuesped,
    postHuesped,
    deleteHuesped,
    putHuesped,
    patchHuesped
};