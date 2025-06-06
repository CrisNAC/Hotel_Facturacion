import { Router } from "express";
import { getAllHuespedHabitacion, huespedEnHabitacion, eliminandoRelacion } from '../controllers/huespedhabitacion.controllers.js';
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/:id', authenticate, getAllHuespedHabitacion);
router.get('/:id/ocupacion', authenticate, huespedEnHabitacion);
router.patch('/:id', authenticate, eliminandoRelacion);

export default router;