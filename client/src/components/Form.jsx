import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { addProduct } from "../api/productRequests";
import validationSchema from "../validation/validationSchema";

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

const Form = () => {
	const formik = useFormik({
		initialValues: {
			productName: "",
			price: "",
			product_image: ""
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			// console.log(values);
			const formData = new FormData();
			formData.append("productName", values.productName);
			formData.append("price", values.price);
			formData.append("product_image", values.product_image);
			addProduct(formData);
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
				{formik.touched.productName && formik.errors.productName ? (
					<Typography
						sx={{
							color: "red",
							lineHeight: "0",
							margin: "5px",
							fontWeight: "500",
							fontSize: "12px"
						}}>
						{formik.errors.productName}
					</Typography>
				) : null}
				<TextField
					name="price"
					label="Price"
					variant="outlined"
					onChange={formik.handleChange}
					value={formik.values.price}
				/>
				{formik.touched.price && formik.errors.price ? (
					<Typography
						sx={{
							color: "red",
							lineHeight: "0",
							margin: "5px",
							fontWeight: "500",
							fontSize: "12px"
						}}>
						{formik.errors.price}
					</Typography>
				) : null}
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

export default Form;
