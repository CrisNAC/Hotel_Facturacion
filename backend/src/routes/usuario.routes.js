import Router from "express";
import { getUsuarios, getUsuarioById, createUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.delete('/:id', deleteUsuario);
/*router.put('/:id', updateUsuario);*/

export default router;