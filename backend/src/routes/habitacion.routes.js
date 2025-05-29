import Router from "express";
import { getHabitaciones, getHabitacionById, createHabitacion, updateHabitacion, deleteHabitacion } from "../controllers/habitacion.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', authenticate, getHabitaciones);
router.get('/:id', authenticate, getHabitacionById);
router.post('/', authenticate, createHabitacion);
router.delete('/:id', authenticate, deleteHabitacion);
router.put('/:id', authenticate, updateHabitacion);

export default router;