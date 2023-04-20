import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import Form from "./Form";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "end",
					marginTop: "10px",
					marginRight: "10px"
				}}>
				<Button
					variant="contained"
					sx={{ alignSelf: "end" }}
					onClick={handleOpen}>
					Add Product
				</Button>
			</Box>

			<Modal open={open} onClose={handleClose}>
				<Form />
			</Modal>
		</>
	);
};

export default Navbar;
