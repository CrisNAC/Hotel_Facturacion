import { Router } from "express";
import { getAllIngresos, createIngreso, cancelarIngreso } from '../controllers/ingreso.controllers.js';

const router = Router();

router.get('/', getAllIngresos);
router.post('/', createIngreso);
router.patch('/', cancelarIngreso);

export default router;