import { Router } from "express";
import { dashboard } from "../controllers/dashboard.controllers.js";
import authenticate from "../../config/jwt.config.js"; 
const router = Router();

router.get('/', authenticate, dashboard);

export default router;