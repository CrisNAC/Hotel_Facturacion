import { Router } from "express";
import { getAllIngresos, getIngresoById, createIngreso, cancelarIngreso } from '../controllers/ingreso.controllers.js';
import authenticate from "../../config/jwt.config.js"
const router = Router();

router.get('/', authenticate, getAllIngresos);
router.get('/:id', authenticate, getIngresoById);
router.post('/', authenticate, createIngreso);
router.patch('/:id', authenticate, cancelarIngreso);

export default router;