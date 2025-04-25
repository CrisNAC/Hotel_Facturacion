import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const getUsuarios = async (req, res) => {
	try {
		const users = await prisma.usuario.findMany({
			where: { activo: true },
			select: {
				id_usuario: true,
				nombre: true,
				apellido: true,
				nombre_usuario: true,
				activo: true,
				created_at: true,
				updated_at: true
			}
		});

		res.status(200).json(users);
	} catch (error) {
		console.error(error); //Debugging prisma errors on server console
		res.status(500).json({ error: "Internal Server Error: Error al obtener usuarios" })
	}
};

export const getUsuarioById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await prisma.usuario.findUnique({
			where: { id_usuario: parseInt(id) },
			select: {
				id_usuario: true,
				nombre: true,
				apellido: true,
				nombre_usuario: true,
				activo: true,
				created_at: true,
				updated_at: true
			}
		});

		if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al obtener usuario" })
	}
};

export const createUsuario = async (req, res) => {
	const { nombre, apellido, nombre_usuario, contrasena } = req.body; //contrasena: la password en texto plano

	try {
		const exists_username = await prisma.usuario.findUnique({
			where: { nombre_usuario }
		});

		if (exists_username) return res.status(400).json({ error: "Nombre de usuario ya existente" });

		//Encriptando password
		const contrasena_hash = await bcrypt.hash(contrasena, 10);

		//Creamos el usuario con la password encriptada
		const newUser = await prisma.usuario.create({
			data: {
				nombre,
				apellido,
				nombre_usuario,
				contrasena_hash
			},
			select: {
				id_usuario: true,
				nombre: true,
				apellido: true,
				nombre_usuario: true,
				activo: true,
				created_at: true,
				updated_at: true
			}
		});

		res.status(201).json(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al crear el usuario" })
	}
};

<<<<<<< HEAD
export const updateUsuario = async (req, res) => {
	const { id } = req.params;
	const { nombre, apellido, nombre_usuario, contrasena_hash } = req.body;
=======
/*export const updateUsuario = async (req, res) => {
	const { id } = req.params;
	const { nombre, apellido, nombre_usuario } = req.body;
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
	try {
		const user = await prisma.usuario.update({
			where: { id_usuario: parseInt(id) },
			data: {
				nombre,
				apellido,
<<<<<<< HEAD
				nombre_usuario,
				contrasena_hash
=======
				nombre_usuario
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
			}
		});

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al actualizar el usuario" })
	}
<<<<<<< HEAD
};
=======
};*/
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

export const deleteUsuario = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await prisma.usuario.findUnique({
			where: { id_usuario: parseInt(id) }
		});

		if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

		await prisma.usuario.update({
			where: { id_usuario: parseInt(id) },
			data: { activo: false}
		});

		res.status(200).json( { message: "Usuario eliminado con exito" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error: Error al desactivar usuario" });
	}
};
