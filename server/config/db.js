import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://localhost:27017/productsdb");
		console.log(`MongoDB connected:${conn.connection.host}`.bgMagenta);
	} catch (error) {
		console.log(error);
	}
};
