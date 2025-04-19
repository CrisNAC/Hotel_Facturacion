import { Router } from "express";
import { getAllIngresos } from '../controllers/ingreso.controller'

const router = Router();

router.get('/ingresos', getAllIngresos);

export default router;