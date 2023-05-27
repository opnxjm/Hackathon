import * as React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    marginTop: "10vh",
    fontFamily: 'Rubik',
  };

  return (
    <div>
      <Box sx={topicStyle}>
        <h1>Boo!</h1>
      </Box>
      <div
        style={{
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          fontFamily: 'Rubik',
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            border: "none",
            color: "white",
            padding: "15px 40px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
          sx={{ fontFamily: 'Rubik' }}
          onClick={() => handleClick("/login")}
        >
          Let's Start !
        </button>
      </div>
    </div>
  );
}

export default Welcome;
