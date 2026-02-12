import { verifyToken } from "../config/middleware/verifyToken.js";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductById,
	updateProduct,
} from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.post("/create/product", verifyToken, createProduct);
router.put("/edit/product/:id", verifyToken, updateProduct);
router.delete("/delete/product/:id", verifyToken, deleteProduct);
router.get("/get/product", getAllProducts);
router.get("/get/product/:id", getProductById);

export default router;
