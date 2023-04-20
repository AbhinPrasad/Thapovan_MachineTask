import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const addProduct = async (formdata) => {
	const result = await API.post("/add-product", formdata);
	return result;
};

export const getAllProducts = async () => {
	const result = await API.get("/get-product");
	return result;
};

export const updateProduct = async (formdata) => {
	const result = await API.post("/update-product/:id");
	return result;
};

export const deleteProduct = async (id) => {
	const result = await API.delete(`/delete-product/${id}`);
	return result;
};
