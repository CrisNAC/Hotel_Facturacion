import { Router } from "express";
import { getAllTimbrados, createTimbrado } from "../controllers/timbrado.controllers.js";
import authenticate from "../../config/jwt.config.js";

const router = Router();

router.get("/", authenticate, getAllTimbrados);
router.post("/", authenticate, createTimbrado);

export default router;
