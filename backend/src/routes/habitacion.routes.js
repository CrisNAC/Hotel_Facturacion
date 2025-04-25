import Router from "express";
import { getHabitaciones, getHabitacionById, createHabitacion, updateHabitacion, deleteHabitacion } from "../controllers/habitacion.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', getHabitaciones);
router.get('/:id', getHabitacionById);
router.post('/', createHabitacion);
router.delete('/:id', deleteHabitacion);
router.put('/:id', updateHabitacion);

export default router;