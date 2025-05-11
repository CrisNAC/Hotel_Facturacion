import { Router } from "express";
import { getAllIngresos, createIngreso, cancelarIngreso } from '../controllers/ingreso.controllers.js';
import authenticate from "../../config/jwt.config.js"; 

const router = Router();

router.get('/', getAllIngresos);
router.post('/', createIngreso);
router.patch('/:id', cancelarIngreso);

export default router;