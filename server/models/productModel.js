import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		productName: { type: "String", required: true },
		price: { type: "String", required: true },
		image: { type: "String" }
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
