import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";

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

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box
				component="nav"
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

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<form>
					<Box sx={style}>
						<TextField
							id="outlined-basic"
							label="Product Name"
							variant="outlined"
							type="text"
						/>
						<TextField
							id="outlined-basic"
							label="Price"
							variant="outlined"
						/>
						<TextField
							id="outlined-basic"
							variant="outlined"
							type="file"
						/>
						<Button variant="contained">Submit</Button>
					</Box>
				</form>
			</Modal>
		</>
	);
};

export default Navbar;
