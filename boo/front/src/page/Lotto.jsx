import React, { useState, useEffect } from "react";
import NavBar from "../component/Navbar";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./Lotto.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import getCookie from "../util/getCookie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "300px",
  border: "solid 1px transparent",
  borderRadius: "20px",
};

function Lotto() {
  const [counter, setCounter] = useState(Math.round(Math.random() * 100));
  const [lottoData, setLottoData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const lotto = counter;

  useEffect(() => {
    // Fetch lotto data when the component mounts
    fetchLottoData();
  }, [open]);
  const handleAdd = async () => {
    try {
      const response = await axios.post(`http://localhost:8888/addFav`, {
        userId: getCookie("userId"),
        lottoId: lottoData.lottoId,
      });
      console.log("success");
      handleClose();
    } catch (error) {
      // Handle network or server error
      console.error("Error fav:", error);
    }
  };
  console.log(getCookie("userId"));
  const fetchLottoData = async () => {
    // setCounter(Math.round(Math.random() * 100));
    try {
      const random = Math.round(Math.random() * 100);
      const data = await axios.get(`http://localhost:8888/lotto/${random}`);
      // console.log("DATA => ");
      // console.log(data);
      if (data.data.success) {
        setLottoData(data.data.lotto[0]);
        // console.log("Debug => ");
        console.log(lottoData);
      } else {
        // Handle error response
        console.log(response.data.message);
      }
    } catch (error) {
      // Handle network or server error
      console.error("Error fetching lotto data:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(lotto);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box className="allPage">
      <NavBar />
      <Box sx={{ height: "100px" }}></Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item md={6}>
          <Box className="ghostImage">
            <img style={{width:"30vw"}} src="../ghost.png" alt="little ghost"></img>
          </Box>
        </Grid>
        <Grid item md={6}>
          <div>
            <button className="randomButton" onClick={handleOpen}>
              Random
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                >
                  {lottoData.lottoNumber}
                </Typography>

                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <h3 style={{ fontFamily: "Rubik" }}>Meaning</h3>
                    <p style={{ fontFamily: "Roboto Mono" }}>
                      {lottoData.meaning}
                    </p>
                    <br />
                    <h3 style={{ fontFamily: "Rubik" }}>Linked Event</h3>
                    <p style={{ fontFamily: "Roboto Mono" }}>
                      {lottoData.event}
                    </p>
                    <br />
                    <button
                      onClick={handleAdd}
                      className="AddFav"
                      style={{
                        position: "fixed",
                        bottom: "10px",
                      }}
                    >
                      Add to favorite
                    </button>
                  </>
                )}
              </Box>
            </Modal>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Lotto;
