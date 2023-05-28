import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../component/Navbar";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../style/EditProfile.css";
import FormControl from "@mui/material/FormControl";
import getCookie from "../util/getCookie";

function EditProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch user data from the server
    axios
      .get(`http://localhost:8888/user/${getCookie("userId")}`)
      .then((response) => {
        const { username, email, bio } = response.data;
        setUserName(username);
        setEmail(email);
        setBio(bio);
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  }, [userId]);

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleSave = () => {
    // Create an object with the updated data
    const updatedData = {
      username,
      email,
      bio,
    };

    // Perform form validation
    const validationErrors = validateForm(updatedData);

    if (Object.keys(validationErrors).length > 0) {
      // Set validation errors
      setErrors(validationErrors);
    } else {
      // Make a PATCH request to update the profile data
      axios
        .patch(
          `http://localhost:8888/editProfile/${getCookie("userId")}`,
          updatedData
        )
        .then((response) => {
          console.log(response.data);
          // Navigate to the /profile path
          navigate("/profile");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    }

    return errors;
  };

  return (
    <div>
      <NavBar />
      <div className="bodyEditPro">
        <Typography
          className="profileTopic"
          component="h1"
          variant="h4"
          sx={{ fontFamily: "Rubik", color: "black" }}
        >
          Edit Profile
        </Typography>
        <div className="centeredContainer">
          <div className="containerLargest">
            <div className="profileContainer">
              <form>
                <h5 className="profileInfoTopic">Username</h5>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    sx={{ mb: "10px" }}
                    id="standard-helperText"
                    value={username}
                    error={errors.username ? true : false}
                    helperText={errors.username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormControl>
                <h5 className="profileInfoTopic">Email</h5>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    sx={{ mb: "10px" }}
                    id="standard-helperText"
                    value={email}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <br />
                <h5 className="profileInfoTopic">Bio</h5>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    sx={{ mb: "10px" }}
                    id="standard-helperText"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </FormControl>
              </form>
            </div>
            <div className="ButtonContainer">
              <button
                className="buttonEditEdit"
                onClick={handleCancel}
                style={{ marginRight: "5rem" }}
              >
                Cancel
              </button>
              <button
                className="buttonLogoutOut"
                onClick={handleSave}
                style={{ marginLeft: "5rem" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
