import Product from "../models/productModel.js";
import cloudinary from "../utils/cloudinary.js";

export const addProduct = async (req, res) => {
	// console.log(req.body);
	// console.log(req.file);
	try {
		const { productName, price } = req.body;
		const imgUrl = await cloudinary.uploader.upload(req.file.path);

		const product = new Product({
			productName: productName,
			price: price,
			image: imgUrl.url
		});

		const data = await product.save();
		res.status(201).json({ message: "Product added successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
