import { Router } from "express";
import cuentaController from "../controllers/cuenta.controllers.js";
const { postCuenta, closeCuenta, getCuentaPorIngreso} = cuentaController;

const router = Router();

router.post('/', postCuenta);
router.patch('/:id', closeCuenta);
router.get('/:id', getCuentaPorIngreso);


export default router;