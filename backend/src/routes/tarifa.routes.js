import Router from "express";
import { getTarifas, getTarifaById, createTarifa, deleteTarifa, updateTarifa } from "../controllers/tarifa.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', getTarifas);
router.get('/:id', getTarifaById);
router.post('/', createTarifa);
router.delete('/:id', deleteTarifa);
router.put('/:id', updateTarifa);

export default router;