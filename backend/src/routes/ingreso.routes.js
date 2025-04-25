import { Router } from "express";
<<<<<<< HEAD
import ingresoController from '../controllers/ingreso.controllers.js';
const { getAllIngresos } = ingresoController;
=======
import {getAllIngresos, createIngreso} from '../controllers/ingreso.controllers.js';
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

const router = Router();

router.get('/', getAllIngresos);
<<<<<<< HEAD
=======
router.post('/', createIngreso);
>>>>>>> 2d2cff4063d654bb974da5cd325cd3fde12e60d1

export default router;