import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutCreator from "../stylesheets/aboutCreator.css";
import theSofaProject from "../images/theSofaProject.svg";
import TheSofaProject from "../pieces/TheSofaProject";
import WorldAroundSofa from "../pieces/WorldAroundSofa";
import TheCelloProject from "../pieces/TheCelloProject";
import Banner from "../pieces/Banner";

function AboutArtist() {
  return (
    <Grid container style={{ backgroundColor: "#59D98C" }}>
      <Link to="/performances-for-objects"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={theSofaProject} alt="soundtracks" id="soundtrackPhoto" />
        </Box>
      </Box>
      <TheSofaProject />
      <WorldAroundSofa />
      <TheCelloProject />
      <Banner />
    </Grid>
  );
}

export default AboutArtist;
