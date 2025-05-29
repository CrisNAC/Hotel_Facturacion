import Router from "express";
import { getTiposHabitacion, getTipoHabitacionById, createTipoHabitacion, deleteTipoHabitacion } from "../controllers/tipohabitacion.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', authenticate, getTiposHabitacion);
router.get('/:id', authenticate, getTipoHabitacionById);
router.post('/', authenticate, createTipoHabitacion);
router.delete('/:id', authenticate, deleteTipoHabitacion);

export default router;