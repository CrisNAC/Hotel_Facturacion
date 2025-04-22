import { Router } from "express";
import consumoController from "../controllers/consumo.controllers.js";
const { getAllConsumos, postConsumo, deleteConsumo } = consumoController;

const router = Router();

router.get('/', getAllConsumos);
router.post('/', postConsumo);
router.delete('/:id', deleteConsumo);

export default router;