import { Router } from "express";
import { getAllIngresos, createIngreso, getDetallesHabitacion, cancelarIngreso } from '../controllers/ingreso.controllers.js';

const router = Router();

router.get('/', getAllIngresos);
router.get('/detalleHabitacion', getDetallesHabitacion);
router.post('/', createIngreso);
router.patch('/', cancelarIngreso);

export default router;