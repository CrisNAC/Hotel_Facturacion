import { Router } from "express";
import { getAllIngresos } from '../controllers/ingreso.controllers.js'

const router = Router();

router.get('/ingresos', getAllIngresos);

export default router;