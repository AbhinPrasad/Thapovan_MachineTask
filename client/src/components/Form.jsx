import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { addProduct } from "../api/productRequests";

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
			image: ""
		},
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			addProduct(values);
			// resetForm({values:""})
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
					name="image"
					variant="outlined"
					type="file"
					onChange={formik.handleChange}
					value={formik.values.image}
				/>
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Box>
		</form>
	);
};

export default Form;
