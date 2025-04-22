import { Router } from "express";
import {getAllIngresos, createIngreso} from '../controllers/ingreso.controllers.js';

const router = Router();

router.get('/', getAllIngresos);
router.post('/', createIngreso);

export default router;