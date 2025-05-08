import { Router } from 'express'
import { actualizarDetalleFactura, crearDetalleFactura, eliminarDetalleFactura, obtenerDetallesFactura, obtenerDetallesPorFactura } from '../controllers/detallefactura.controllers.js'
const router = Router()

router.post('/',crearDetalleFactura)
router.get('/',obtenerDetallesFactura)
router.get('/:idFactura', obtenerDetallesPorFactura)
router.put('/:id', actualizarDetalleFactura)
router.delete('/:id', eliminarDetalleFactura)

export default router