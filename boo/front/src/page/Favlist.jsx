import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import NavBar from "../component/Navbar";
import FavlistCard from "../component/FavlistCard";
import axios from "axios";
import getCookie from "../util/getCookie";
import '../style/Favlist.css';

function Favlist() {
  const [fav, setFavs] = useState([]);

  useEffect(() => {
    fetchFavs();
  }, []);

  const fetchFavs = async () => {
    try {
      const userId = getCookie("userId");
      const response = await axios.get(`http://localhost:8888/fav/${userId}`);
      setFavs(response.data.user);
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
    }
  };

  const handleDelete = async (userId, lottoId) => {
    try {
      await axios.delete(`/deleteFav/${userId}/${lottoId}`);
      setFavs((prevFavs) => prevFavs.filter((fav) => fav.lotto_id !== lottoId));
      // Handle success or display a success message
    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bodyFavlist">
        <Box sx={{ height: "50px" }}></Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 2 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item md={10}>
            <Box className="favTopic">
              <Typography
                sx={{
                  fontSize: "2rem",
                  textAlign: "center",
                  fontFamily: "Rubik",
                }}
              >
                Favorite
              </Typography>
            </Box>
            <Box sx={{ height: "40px" }}></Box>
            <Grid
              container
              direction="column"
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              className="favIcon"
            >
              {fav.map((favs) => (
                <Grid item xs={6} key={favs.user_id}>
                  <FavlistCard
                    user_id={favs.user_id}
                    lotto_id={favs.lotto_id}
                    lottoNumber={favs.lottoNumber}
                    meaning={favs.meaning}
                    event={favs.event}
                    onDelete={() => handleDelete(favs.user_id, favs.lotto_id)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Favlist;
