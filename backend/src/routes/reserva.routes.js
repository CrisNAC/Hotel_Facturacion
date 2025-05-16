import Router from "express";
import { createReserva, getReservas, getReservaPorId, getReservasPorHuesped, deleteReserva } from "../controllers/reserva.controllers.js";
import authenticate from "../../config/jwt.config.js";
const router = Router();

router.post("/", authenticate, createReserva);
router.get("/", authenticate, getReservas);
router.get("/:id_reserva", authenticate, getReservaPorId);
router.get("/huesped/:id_huesped", authenticate, getReservasPorHuesped);
router.delete("/:id_reserva", authenticate, deleteReserva);

export default router;
