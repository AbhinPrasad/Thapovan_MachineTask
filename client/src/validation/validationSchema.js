import * as Yup from "yup";

const validationSchema = Yup.object({
	productName: Yup.string().required("product name is required"),
	price: Yup.string().required("price is required")
});

export default validationSchema;
