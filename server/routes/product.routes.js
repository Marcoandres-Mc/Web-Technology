import { Router } from "express";

import { getProductsLaptos, getProductsCelulares, getProductsGaming, getProductsComponentes, getProduct } from "../controllers/product.controllers.js";

const router = Router();

router.get("/products/laptos",getProductsLaptos);
router.get("/products/celulares",getProductsCelulares);
router.get("/products/gaming",getProductsGaming);
router.get("/products/componentes",getProductsComponentes);
router.get("/product/:id",getProduct);



export default router;