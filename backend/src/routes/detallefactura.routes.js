import { Router } from 'express'
import { actualizarDetalleFactura, crearDetalleFactura, eliminarDetalleFactura, obtenerDetallesFactura, obtenerDetallesPorFactura } from '../controllers/detallefactura.controllers.js'
import authenticate from "../../config/jwt.config.js";

const router = Router()

router.post('/', authenticate, crearDetalleFactura)
router.get('/', authenticate, obtenerDetallesFactura)
router.get('/:idFactura', authenticate, obtenerDetallesPorFactura)
router.put('/:id', authenticate, actualizarDetalleFactura)
router.delete('/:id', authenticate, eliminarDetalleFactura)

export default router