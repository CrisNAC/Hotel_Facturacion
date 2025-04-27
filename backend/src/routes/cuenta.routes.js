import { Router } from "express";
import cuentaController from "../controllers/cuenta.controllers.js";
const { postCuenta, closeCuenta } = cuentaController;

const router = Router();

router.post('/', postCuenta);
router.patch('/:id', closeCuenta);

export default router;