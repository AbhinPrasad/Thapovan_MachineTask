import Product from "../models/productModel.js";
import cloudinary from "../utils/cloudinary.js";

//ADD PRODUCT
export const addProduct = async (req, res) => {
	// console.log(req.body);
	// console.log(req.file);
	try {
		const { productName, price } = req.body;

		if (req.file && req.file.path) {
			const imgUrl = await cloudinary.uploader.upload(req.file.path);

			const product = new Product({
				productName: productName,
				price: price,
				image: imgUrl.url
			});

			const newProduct = await product.save();
			res.status(201).json(newProduct);
		} else {
			const product = new Product({
				productName: productName,
				price: price,
				image: "no image"
			});

			const newProduct = await product.save();
			res.status(201).json(newProduct);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
	// console.log(req.body);
	// console.log(req.params.id);
	try {
		const { productName, price } = req.body;

		if (req.file && req.file.path) {
			const imgUrl = await cloudinary.uploader.upload(req.file.path);
			const update = await Product.findByIdAndUpdate(req.params.id, {
				productName: productName,
				price: price,
				image: imgUrl.url
			});
			res.status(200).json(update);
		} else {
			const update = await Product.findByIdAndUpdate(req.params.id, {
				productName: productName,
				price: price,
				image: "no image"
			});
			res.status(200).json(update);
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
};

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
	// console.log(req.params.id);
	try {
		const id = req.params.id;
		await Product.findByIdAndDelete(id);
		res.status(200).json({ message: "product deleted" });
	} catch (error) {
		res.status(500).json(error.message);
		console.log(error);
	}
};
