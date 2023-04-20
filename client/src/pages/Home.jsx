import React from "react";
import { Navbar, Products } from "../components";
import { Box } from "@mui/material";

const Home = () => {
	return (
		<Box>
			<Navbar />
			<Box sx={{display:"flex",marginTop:"20px"}}>
			<Products />
			</Box>
		</Box>
	);
};

export default Home;
