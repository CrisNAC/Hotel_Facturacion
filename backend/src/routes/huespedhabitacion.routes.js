import { Router } from "express";
import huespedHabitacionController from "../controllers/huespedhabitacion.controllers.js";
const { crearRelacion, obtenerTodas, eliminar } = huespedHabitacionController;

const router = Router();

router.post('/', crearRelacion);
router.get('/', obtenerTodas);
router.delete('/:id', eliminar);

export default router;
