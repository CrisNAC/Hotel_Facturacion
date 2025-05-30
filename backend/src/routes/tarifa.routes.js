import Router from "express";
import { getTarifas, getTarifaById, createTarifa, deleteTarifa, updateTarifa } from "../controllers/tarifa.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', authenticate, getTarifas);
router.get('/:id', authenticate, getTarifaById);
router.post('/', authenticate, createTarifa);
router.delete('/:id', authenticate, deleteTarifa);
router.put('/:id', authenticate, updateTarifa);

export default router;