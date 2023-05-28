import * as React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Opening from "../assets/Open.gif";
import "../style/Welcome.css";

function Welcome() {
  //for route "Let's Explore button" => login page
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };
  const topicStyle = {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    paddingTop: "30px",
    fontFamily: "Rubik",
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0D63A5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Opening} style={{ width: "18%" }} />

      <Box sx={topicStyle}>
        <h1>Welcom to LottoBoo!</h1>
      </Box>
      <div
        style={{
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          fontFamily: "Rubik",
        }}
      ></div>
      <button
        className="letsgetstart"
        sx={{ fontFamily: "Rubik" }}
        onClick={() => handleClick("/login")}
      >
        Let's Start !
      </button>
    </div>
  );
}

export default Welcome;
