import { Router } from "express";
import { getAllFacturas, createFactura, getFacturaById } from "../controllers/factura.controllers.js";

const router = Router();

router.get("/", getAllFacturas);
router.post("/", createFactura);
router.get('/:id', getFacturaById);

export default router;
