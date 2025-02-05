import { Router } from "express";
import { deleteProducts, getProduct, getProducts, postProduct, updateProduct } from "../controller/product.controller.js";

let router = Router();

router.post("/", postProduct);
router.get("/", getProducts);

router.get("/:id", getProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProducts);

export default router;
