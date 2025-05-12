import { Router } from "express";
import { getAllTimbrados, createTimbrado } from "../controllers/timbrado.controllers.js";

const router = Router();

router.get("/", getAllTimbrados);
router.post("/", createTimbrado);

export default router;
