import { Router } from "express";
import huespedController from "../controllers/huesped.controllers.js";
const { getAllHuespedes, getHuespedesFrecuentes, getHuesped, postHuesped, deleteHuesped, putHuesped, patchHuesped } = huespedController;
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get('/', authenticate, getAllHuespedes);
router.get('/frecuentes', authenticate, getHuespedesFrecuentes);
router.get('/:id', authenticate, getHuesped);
router.post('/', authenticate, postHuesped);
router.delete('/:id', authenticate, deleteHuesped);
router.put('/:id', authenticate, putHuesped);
router.patch('/:id', authenticate, patchHuesped);

export default router;
