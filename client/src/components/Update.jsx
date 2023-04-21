import React from "react";
import { TextField, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { updateProduct } from "../api/productRequests";

const style = {
	position: "absolute",
	display: "flex",
	gap: "5px",
	flexDirection: "column",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4
};

const Update = (props) => {
	const { id, products, setProducts } = props;

	const formik = useFormik({
		initialValues: {
			productName: "",
			price: "",
			product_image: ""
		},
		onSubmit: (values, { resetForm }) => {
			const formData = new FormData();
			formData.append("productName", values.productName);
			formData.append("price", values.price);
			formData.append("product_image", values.product_image);
			updateProduct(formData, id)
				.then((res) => {
					setProducts(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
			resetForm({ values: "" });
		}
	});

	return (
		<form
			encType="multipart/form-data"
			onSubmit={formik.handleSubmit}
			noValidate>
			<Box sx={style}>
				<TextField
					name="productName"
					label="Product Name"
					variant="outlined"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.productName}
				/>
				<TextField
					name="price"
					label="Price"
					variant="outlined"
					onChange={formik.handleChange}
					value={formik.values.price}
				/>
				<TextField
					name="product_image"
					variant="outlined"
					type="file"
					onChange={(event) => {
						formik.setValues({
							...formik.values,
							product_image: event.currentTarget.files[0]
						});
					}}
				/>
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Box>
		</form>
	);
};

export default Update;
