import { Router } from "express";
import { getAllHuespedHabitacion } from '../controllers/huespedhabitacion.controllers.js';
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/:id', authenticate, getAllHuespedHabitacion);

export default router;