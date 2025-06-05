import { Router } from "express";
import { crearAsiento, getAllAsientos} from "../controllers/asientocontable.controllers.js"
import authenticate from "../../config/jwt.config.js";
const router = Router();

router.get('/', getAllAsientos);
router.post('/', crearAsiento);

export default router;
