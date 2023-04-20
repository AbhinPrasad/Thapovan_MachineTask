import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { getAllProducts } from "../api/productRequests";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts()
			.then((res) => {
				console.log(res);
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return products.map((product) => {
		return (
			<>
				<div className="card">
					<div className="image">
            <img src={product.image} alt="" />
					</div>
					<span className="title">{product.productName}</span>
					<span className="price">${product.price}</span>
				</div>
			</>
		);
	});
};

export default Products;
