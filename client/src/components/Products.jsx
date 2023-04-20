import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { deleteProduct, getAllProducts } from "../api/productRequests";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts()
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [products]);

	const handleDelete = (id) => {
		deleteProduct(id);
	};

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
				<div className="btns">
					<Button variant="outlined">update</Button>
					<Button
						variant="outlined"
						onClick={() => handleDelete(product._id)}>
						delete
					</Button>
				</div>
			</>
		);
	});
};

export default Products;
