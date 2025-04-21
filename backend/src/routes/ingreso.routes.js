import { Router } from "express";
import ingresoController from '../controllers/ingreso.controllers.js';
const { getAllIngresos } = ingresoController;

const router = Router();

router.get('/', getAllIngresos);

export default router;