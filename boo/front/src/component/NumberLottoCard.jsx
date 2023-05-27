import * as React from "react";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Favorite } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));
const numberTopicStyle = {
  textAlign: "center",
  paddingTop: "3em",
};

function NumberLottoCard() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width={400}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "white",
              borderRadius: "40px",
              height: "30em",
              width: "120eem",
            }}
          >
            <Box>
              <div className="numberTopic" style={numberTopicStyle}>
                <h2>00</h2>
              </div>
              <div style={{ marginLeft: "5vh" }}>
                <h3>Meaning</h3>
                <p>Lucky</p>
                <br />
                <h3>Linked Event</h3>
                <p>The beginning</p>
              </div>
            </Box>

            <Grid
              xs={12}
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              sx={{ fontSize: "12px" }}
            >
              <Grid sx={{ order: { xs: 2, sm: 1 } }}></Grid>
              <Grid
                container
                columnSpacing={1}
                sx={{ order: { xs: 1, sm: 2 } }}
              >
                <Grid>
                  <Button>yu</Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Grid>
    </>
  );
}

export default NumberLottoCard;
