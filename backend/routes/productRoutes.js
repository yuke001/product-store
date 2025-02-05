import { Router } from "express";
import { deleteProducts, getProduct, getProducts, postProduct, updateProduct } from "../controller/productController.js";

let router = Router();

router.post("/products", postProduct);
router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.patch("/products/:id", updateProduct);

router.delete("/products/:id", deleteProducts);

export default router;
