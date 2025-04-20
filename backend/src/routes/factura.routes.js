import { Router } from "express";
import facturaController from "../controllers/factura.controller";
const { getAllfacturas, postfactura } = facturaController;

const router = Router();

router.get('/', getAllfacturas);
router.post('/', postfactura);

export default router;