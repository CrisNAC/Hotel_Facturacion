import { Router } from "express";
import { getAllProductos } from '../controllers/productos.controllers.js';
import authenticate from "../../config/jwt.config.js"; 

const router = Router();

router.get('/', getAllProductos);


export default router;