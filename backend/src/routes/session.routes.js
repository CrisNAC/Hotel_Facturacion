import Router from "express";
import { login, logout } from "../controllers/session.controllers.js";

const router = Router();

/*---------------------RUTAS PUBLICAS------------------------------*/
router.post('/', login);

router.delete('/', logout);
/*-----------------------------------------------------------------*/

export default router;