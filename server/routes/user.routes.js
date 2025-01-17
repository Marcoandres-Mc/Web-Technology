import { Router } from "express";
import {getUser, getUserNombre,getUserByEmail, postUser, deleteUser, updateUser, loginUser} from "../controllers/user.controllers.js";

const router = Router();

router.post("/cuentas/login", loginUser)
router.get("/cuentas/usuarios",getUser);
router.get("/cuentas/usuarios/:id",getUserNombre);
router.post("/cuentas/usuarios",postUser);
router.put("/cuentas/usuarios/:id",updateUser);
router.delete("/cuentas/usuarios/:id",deleteUser);
router.get('/cuentas/usuarios/:email', getUserByEmail);


export default router;