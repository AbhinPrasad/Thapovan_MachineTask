import mongoose from "mongoose";

const productSchema = mongoose.Schema({
	productName: { type: "String", required: true },
	price: { type: "String", required: true },
	image: { type: "String", required: true }
});

const productModel = mongoose.model("Product", productSchema);
export default productModel;
