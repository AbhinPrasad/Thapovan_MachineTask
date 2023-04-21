import React, { useState, useEffect } from "react";
import { Button, Modal } from "@mui/material";
import { deleteProduct, getAllProducts } from "../api/productRequests";
import Update from "./Update";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [open, setOpen] = useState(false);

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

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			{Array.isArray(products) && products.length > 0 ? (
				products.map((product) => (
					<div
						style={{ display: "flex", flexDirection: "column" }}
						key={product._id}>
						<div className="card">
							<div className="image">
								<img src={product.image} alt="" />
							</div>
							<span className="title">{product.productName}</span>
							<span className="price">${product.price}</span>
						</div>
						<div className="btns">
							<Button variant="outlined" onClick={handleOpen}>
								update
							</Button>
							<Button
								variant="outlined"
								onClick={() => handleDelete(product._id)}>
								delete
							</Button>
						</div>
						<Modal open={open} onClose={handleClose}>
							<Update
								id={product._id}
								products={products}
								setProducts={setProducts}
							/>
						</Modal>
					</div>
				))
			) : (
				<p>No products found.</p>
			)}
		</>
	);
};

export default Products;
