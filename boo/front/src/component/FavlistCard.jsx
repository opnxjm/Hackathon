import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Delete } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

import "./FavlistCard.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const TypographyWrap = styled(Typography)(({ theme }) => ({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto",
  "-ms-hyphens": "auto",
  "-moz-hyphens": "auto",
  "-webkit-hyphens": "auto",
  marginBottom: theme.spacing(1),
}));

function FavlistCard({
  user_id,
  lotto_id,
  lottoNumber,
  meaning,
  event,
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(user_id, lotto_id);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        width: { xs: "40%", sm: "100%" },
        overflow: "hidden",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <TypographyWrap
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontFamily: "Rubik" }}
              >
                {lottoNumber}
              </TypographyWrap>
              <TypographyWrap
                variant="body2"
                gutterBottom
                sx={{ fontFamily: "Rubik" }}
              >
                Meaning
              </TypographyWrap>
              <TypographyWrap
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Mono" }}
              >
                {meaning}
              </TypographyWrap>
              <TypographyWrap
                variant="body2"
                gutterBottom
                sx={{ fontFamily: "Rubik" }}
              >
                Linked Event
              </TypographyWrap>
              <TypographyWrap
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Mono" }}
              >
                {event}
              </TypographyWrap>
            </Grid>
            <Grid item>
              <ColorButton
                className="deleteButton"
                variant="contained"
                onClick={handleDelete}
              >
                <Delete /> delete
              </ColorButton>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div"></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FavlistCard;
