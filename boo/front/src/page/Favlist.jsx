import NavBar from "../component/Navbar";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Favlist(params) {
  return (
    <div>
      <NavBar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item md={6}>
          <Box className="favTopic">
            <Typography>Favorite</Typography>
          </Box>
          <Box className="favIcon">
        
            <FavoriteIcon />
          
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Favlist;
