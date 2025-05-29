import { Router } from "express";
import { getAllFacturas, createFactura, getFacturaById, obtenerUltimoNumeroFactura, enviarFacturaDesdeArchivo, getFacturasPorFechas } from "../controllers/factura.controllers.js";
import upload from '../services/multer.js';
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get("/ultimafactura", authenticate, obtenerUltimoNumeroFactura)
router.get("/", authenticate, getAllFacturas);
router.post("/", authenticate, createFactura);
router.get("/fechas", authenticate, getFacturasPorFechas);
router.get('/:id', authenticate, getFacturaById);
router.post("/enviar", authenticate, upload.single("archivo"), enviarFacturaDesdeArchivo);

export default router;



