import { Router } from "express";
import facturaController from "../controllers/factura.controllers.js";
const { getAllfacturas, getFacturaById, postfactura } = facturaController;

const router = Router();

router.get('/', getAllfacturas);
router.get('/:id', getFacturaById); // Obtener una factura por ID
router.post('/', postfactura);

export default router;
