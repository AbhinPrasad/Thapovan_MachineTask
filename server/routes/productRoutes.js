import express from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post("/add-product",upload.single('product_image'), addProduct);

export default router;
