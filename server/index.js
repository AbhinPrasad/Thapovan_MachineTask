import express from "express";
import cors from "cors";
import colors from "colors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv"
dotenv.config()



const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", productRoutes);

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
	console.log(`server connected:${PORT}`.bgCyan);
});
