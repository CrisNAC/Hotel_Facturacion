import { Router } from "express";
import huespedController from "../controllers/huesped.controllers.js";
const { getAllHuespedes, getHuespedesFrecuentes, getHuesped, postHuesped, deleteHuesped, putHuesped, patchHuesped } = huespedController;

const router = Router();

router.get('/', getAllHuespedes);
router.get('/frecuentes', getHuespedesFrecuentes);
router.get('/:id', getHuesped);
router.post('/', postHuesped);
router.delete('/:id', deleteHuesped);
router.put('/:id', putHuesped);
router.patch('/:id', patchHuesped);

export default router;
