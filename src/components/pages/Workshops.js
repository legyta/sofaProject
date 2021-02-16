import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import workshops from "../stylesheets/workshops.css";
import workshopsImage from "../images/workshopsImage.svg";
import Banner from "../pieces/Banner";

function Workshops() {
  return (
    <Grid container style={{ backgroundColor: "#F69863" }}>
      <Link to="/workshops"></Link>
      <Box className="photoAndDescription">
        <Box
          className="workshopPhoto"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={workshopsImage} alt="soundtracks" id="workshopPhoto" />
        </Box>
        <Box className="description">
          <h1>
            Here you can find the list of workshops which explore the ontology
            of sofanity. The workshops can be held both physically and online,
            during special events or casual situations.{" "}
          </h1>
        </Box>
      </Box>
      <Banner />
    </Grid>
  );
}

export default Workshops;
