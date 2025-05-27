import { Router } from "express";
import { getAllFacturas, createFactura, getFacturaById, obtenerUltimoNumeroFactura, enviarFacturaDesdeArchivo } from "../controllers/factura.controllers.js";
import upload from '../services/multer.js';
import {  } from '../controllers/factura.controllers.js';

const router = Router();

router.get("/ultimafactura",obtenerUltimoNumeroFactura)
router.get("/", getAllFacturas);
router.post("/", createFactura);
router.get("/fechas", getFacturasPorFechas);
router.get('/:id', getFacturaById);
router.post("/enviar", upload.single("archivo"), enviarFacturaDesdeArchivo);

export default router;



