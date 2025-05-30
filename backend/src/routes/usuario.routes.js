import Router from "express";
import { getUsuarios, getUsuarioById, createUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', authenticate, getUsuarios);
router.get('/:id', authenticate, getUsuarioById);
router.post('/', authenticate, createUsuario);
router.delete('/:id', authenticate, deleteUsuario);
/*router.put('/:id', authenticate, updateUsuario);*/

export default router;