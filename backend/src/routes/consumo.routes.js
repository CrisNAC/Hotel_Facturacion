import { Router } from "express";
import { getAllConsumos, postConsumo, deleteConsumo, actualizarCantidadConsumo } from "../controllers/consumo.controllers.js";
import authenticate from "../../config/jwt.config.js"; 
const router = Router();

router.get('/', getAllConsumos);
router.post('/', postConsumo);
router.put('/:id', deleteConsumo);
router.patch('/:id', actualizarCantidadConsumo); 

export default router;
