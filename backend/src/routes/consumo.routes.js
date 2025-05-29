import { Router } from "express";
import { getAllConsumos, postConsumo, deleteConsumo, actualizarCantidadConsumo } from "../controllers/consumo.controllers.js";
import authenticate from "../../config/jwt.config.js";
const router = Router();

router.get('/', authenticate, getAllConsumos);
router.post('/', authenticate, postConsumo);
router.put('/:id', authenticate, deleteConsumo);
router.patch('/:id', authenticate, actualizarCantidadConsumo);

export default router;
