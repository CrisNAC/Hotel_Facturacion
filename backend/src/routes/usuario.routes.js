import Router from "express";
<<<<<<< HEAD
import { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";
=======
import { getUsuarios, getUsuarioById, createUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1
import authenticate from "../../config/jwt.config.js";

const router = Router();

<<<<<<< HEAD
router.get('/', authenticate, getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.delete('/:id', deleteUsuario);
router.put('/:id', updateUsuario);
=======
router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.delete('/:id', deleteUsuario);
/*router.put('/:id', updateUsuario);*/
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

export default router;