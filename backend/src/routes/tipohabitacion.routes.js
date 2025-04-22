import Router from "express";
import { getTiposHabitacion, getTipoHabitacionById, createTipoHabitacion, deleteTipoHabitacion } from "../controllers/tipohabitacion.controllers.js";

const router = Router();

router.get('/', getTiposHabitacion);
router.get('/:id', getTipoHabitacionById);
router.post('/', createTipoHabitacion);
router.delete('/:id', deleteTipoHabitacion);

export default router;