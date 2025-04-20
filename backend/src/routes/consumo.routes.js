import { Router } from "express";
import consumoController from "../controllers/consumo.controller";
const { getAllConsumos, postConsumo, deleteConsumo } = consumoController;

const router = Router();

router.get('/', getAllConsumos);
router.post('/', postConsumo);
router.delete('/:id', deleteConsumo);

export default router;