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
            error: "Debe ingresar nombre de usuario y contraseña",
        });
    }

    try {
        const user = await prisma.usuario.findUnique({
            where: {
                nombre_usuario,
                activo: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Credenciales incorrectas",
            });
        }

        //Comparamos la password plana con la hasheada
        const passwordMatch = await bcrypt.compare(
            contrasena,
            user.contrasena_hash
        );

        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                error: "Credenciales incorrectas",
            });
        }

        //Generamos el token
        const token = jwt.sign(
            { id_usuario: user.id_usuario, nombre_usuario: user.nombre_usuario },
            process.env.JWT_SECRET,
            { expiresIn: "50m" }
        );

        //Enviar token en cookie o json
        res.cookie('userToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        });
        res.status(200).json({
            success: true,
            message: "Login exitoso " + token,
            user: {
                id_usuario: user.id_usuario,
                nombre_usuario: user.nombre_usuario,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error: Error al iniciar sesion",
        });
    }
};

export const logout = async (req, res) => {
    res.clearCookie("userToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    }).json({ message: "Hasta luego!" });
};

export const userSession = async (req, res) => {
    try {
        const token = req.cookies.userToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                error: "No se encontro el token de autenticacion",
            });
        }

        const token_decodificado = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.usuario.findUnique({
            where: {
                id_usuario: token_decodificado.id_usuario,
                activo: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Usuario no encontrado",
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                id_usuario: user.id_usuario,
                nombre_usuario: user.nombre_usuario,
                nombre: user.nombre,
                apellido: user.apellido,
            },
        });
    } catch (error) {
        console.error("Error al verificar sesion:", error);
        return res.status(401).json({
            success: false,
            error: "Sesión inválida o expirada",
        });
    }
};
