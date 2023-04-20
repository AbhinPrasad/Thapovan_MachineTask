import mongoose from "mongoose";

export const connectDB = async () => {
	const conn = await mongoose.connect("mongodb://localhost:27017");
	console.log(`MongoDB connected:${conn.connection.host}`.bgMagenta);
};
