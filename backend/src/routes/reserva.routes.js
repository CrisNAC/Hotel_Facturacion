import Router from "express";
import { createReserva, getReservas, getReservaPorId, getReservasPorHuesped, deleteReserva } from "../controllers/reserva.controllers.js";
import authenticate from "../../config/jwt.config.js";
const router = Router();

router.post("/", createReserva);
router.get("/", getReservas);
router.get("/:id_reserva", authenticate, getReservaPorId);
router.get("/huesped/:id_huesped", getReservasPorHuesped);
router.delete("/:id_reserva", deleteReserva);

export default router;
