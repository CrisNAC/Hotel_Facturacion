import { Router } from "express";
import cuentaController from "../controllers/cuenta.controllers.js";
import authenticate from "../../config/jwt.config.js";
const { postCuenta, closeCuenta, getCuentaPorIngreso } = cuentaController;

const router = Router();

router.post('/', authenticate, postCuenta);
router.patch('/:id', authenticate, closeCuenta);
router.get('/:id', authenticate, getCuentaPorIngreso);


export default router;