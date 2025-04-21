import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const login = async (req, res) => {
	const { nombre_usuario, contrasena } = req.body;

	if (!nombre_usuario || !contrasena) {
		return res.status(400).json({
			success: false,
			error: "Debe ingresar nombre de usuario y contraseña"
		});
	}

	try { 
		const user = await prisma.usuario.findUnique({
			where: { 
				nombre_usuario,
				activo: true
			}
		});

		if (!user) {
			return res.status(404).json({
				success: false,
				error: "Usuario no encontrado" 
			});
		}
		
		//Comparamos la password plana con la hasheada
		const passwordMatch = await bcrypt.compare(contrasena, user.contrasena_hash);

		if (!passwordMatch) {
			return res.status(400).json({
				success: false,
				error: "Contraseña incorrecta" 
			});
		}
		
		//Generamos el token
		const token = jwt.sign(
			{ id_usuario: user.id_usuario, nombre_usuario: user.nombre_usuario },
			process.env.JWT_SECRET,
			{ expiresIn: '20m' }
		);

		//Enviar token en cookie o json
		res.cookie('userToken', token, { httpOnly: true });
		res.status(200).json({ 
			success: true,
			message: 'Login exitoso ' + token,
			user: {
				id_usuario: user.id_usuario,
				nombre_usuario: user.nombre_usuario
			}
		});

	} catch (error) {
		console.error(error);
		res.status(500).json({ 
			success: false,
			error: "Internal Server Error: Error al iniciar sesion"
		});
	}
};

export const logout = async (req, res) => {
	res.status(200).clearCookie('userToken').json({ message: 'Hasta luego!'});
};



