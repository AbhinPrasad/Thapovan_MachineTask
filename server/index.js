import express from "express";
import cors from "cors";
import colors from "colors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", productRoutes);

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
	console.log(`server connected:${PORT}`.bgCyan);
});
