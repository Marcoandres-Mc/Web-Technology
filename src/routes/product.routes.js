import { Router } from "express";

import { getProductsLaptos, getProductsCelulares, getProductsGaming, getProductsComponentes } from "../controllers/product.controllers.js";

const router = Router();

router.get("/products/laptos",getProductsLaptos);
router.get("/products/celulares",getProductsCelulares);
router.get("/products/gaming",getProductsGaming);
router.get("/products/componentes",getProductsComponentes);


export default router;