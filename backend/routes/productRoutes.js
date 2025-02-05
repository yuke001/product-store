import { Router } from "express";
import { postProduct } from "../controller/productController.js";

let router = Router();

router.post("/products", postProduct);

export default router;
