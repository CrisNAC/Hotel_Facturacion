import { Router } from "express";
import { getAllFacturas, createFactura, getFacturaById, obtenerUltimoNumeroFactura } from "../controllers/factura.controllers.js";

const router = Router();

router.get("/ultimafactura",obtenerUltimoNumeroFactura)
router.get("/", getAllFacturas);
router.post("/", createFactura);
router.get('/:id', getFacturaById);

export default router;
