import { Router } from "express";
import { getAllHuespedHabitacion } from '../controllers/huespedhabitacion.controllers.js';

const router = Router();

router.get('/:id', getAllHuespedHabitacion);

export default router;