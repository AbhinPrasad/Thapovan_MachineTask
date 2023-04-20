import express from "express";
import {
	addProduct,
	deleteProduct,
	getProducts,
	updateProduct
} from "../controllers/productController.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post("/add-product", upload.single("product_image"), addProduct);
router.get("/get-product", getProducts);
router.put(
	"/update-product/:id",
	upload.single("product_image"),
	updateProduct
);
router.delete("/delete-product/:id", deleteProduct);

export default router;
