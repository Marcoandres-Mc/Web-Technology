import { Router } from "express";
import {getUser, getUserNombre, loginUser} from "../controllers/user.controllers.js";

const router = Router();

router.post("/login", loginUser)
router.get("/cuentas/usuarios",getUser);
router.get("/cuentas/usuarios/:id",getUserNombre);

export default router;