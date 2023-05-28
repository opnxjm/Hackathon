import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../component/Navbar";

export default Error = () => {
  return (
    <Box sx={{ backgroundColor: "blue", height: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "rubik", color: "white" }}>
          404 not found
        </Typography>
        <img style={{ width: "20vw" }} src="./public/ghost.png" />
      </Box>
    </Box>
  );
};
