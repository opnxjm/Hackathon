import React, { useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

function Profile(params) {
  let navigate = useNavigate();
  const handleClick = (destination) => {
    if (destination === "/") {
      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });
    }
    navigate(destination);
  };
  const [userData, setUserData] = useState([]);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

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

  const handleOpenLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  useEffect(() => {
    // Fetch lotto data when the component mounts
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Box sx={{ height: "50px", backgroundColor: "#ADDCE4" }}></Box>
      <div className="bodyProfile">
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
              <Typography sx={{ fontFamily: "Roboto Mono" }}>
                {userData.username}
              </Typography>
              <br />
              <h5 className="profileInfoTopic">Email</h5>
              <Typography sx={{ fontFamily: "Roboto Mono" }}>
                {userData.email}
              </Typography>
              <br />
              <h5 className="profileInfoTopic">Bio</h5>
              <Typography sx={{ fontFamily: "Roboto Mono" }}>
                {userData.bio}
              </Typography>
              <br />
            </div>
            <div className="ButtonContainer">
              <button
                className="buttonEdit"
                onClick={() => handleClick("/editprofile")}
                style={{ marginRight: "5rem" }}
              >
                Edit
              </button>
              <button
                className="buttonLogout"
                onClick={handleOpenLogoutModal}
                style={{ marginLeft: "5rem" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={logoutModalOpen} onClose={handleCloseLogoutModal}>
        <DialogTitle sx={{ fontFamily: "Rubik", fontWeight: "800" }}>
          Do you want to logout ?
        </DialogTitle>
        <DialogActions>
          <div>
            <button
              className="buttonProfileCancel"
              onClick={handleCloseLogoutModal}
            >
              Cancel
            </button>
            <button
              style={{ marginLeft: "50px" }}
              className="buttonProfileLogout"
              onClick={() => handleClick("/")}
            >
              Logout
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Profile;
