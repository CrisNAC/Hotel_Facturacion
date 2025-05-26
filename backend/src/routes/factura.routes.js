import { Router } from "express";
import { getAllFacturas, createFactura, getFacturasPorFechas, getFacturaById, obtenerUltimoNumeroFactura } from "../controllers/factura.controllers.js";

const router = Router();

router.get("/ultimafactura",obtenerUltimoNumeroFactura)
router.get("/", getAllFacturas);
router.post("/", createFactura);
router.get("/fechas", getFacturasPorFechas);
router.get('/:id', getFacturaById);

export default router;
