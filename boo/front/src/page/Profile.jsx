import React, { useState, useEffect } from "react";
import NavBar from "../component/Navbar";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";
import axios from "axios";
import getCookie from "../util/getCookie";

function Profile(params) {
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };
  const [userData, setUserData] = useState([]);

  const fetchUser = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:8888/user/${getCookie("userId")}`
      );
      if (response.data.success) {
        setUserData(response.data.user[0]);
        console.log("Debug => " + response.data.user[0]);
        console.log(userData);
      } else {
        // Handle error response
        console.log(response.data.message);
      }
    } catch (error) {
      // Handle network or server error
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    // Fetch lotto data when the component mounts
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Box sx={{ height: "50px" }}></Box>
      <div className="body">
        <Typography
          className="profileTopic"
          component="h1"
          variant="h4"
          sx={{ fontFamily: "Rubik" }}
        >
          Profile
        </Typography>
        <div className="centeredContainer">
          <div className="containerLargest">
            <div className="profileContainer">
              <h5 className="profileInfoTopic">Username</h5>
              <Typography>{userData.username}</Typography>
              <br />
              <h5 className="profileInfoTopic">Email</h5>
              <Typography>{userData.email}</Typography>
              <br />
              <h5 className="profileInfoTopic">Bio</h5>
              <Typography>{userData.bio}</Typography>
              <br />
            </div>
            <div className="ButtonContainer">
              <Button
                className="buttonEdit"
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "1rem",
                  margin: "4px 2px",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Rubik",
                }}
                onClick={() => handleClick("/editprofile")}
              >
                Edit
              </Button>
              <Button
                className="buttonLogout"
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "1rem",
                  margin: "4px 2px",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Rubik",
                  marginLeft: "15vh",
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
