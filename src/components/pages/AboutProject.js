import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutCreator from "../stylesheets/aboutCreator.css";
import theSofaProject from "../images/theSofaProject.svg";
import TheSofaProject from "../pieces/TheSofaProject";
import WorldAroundSofa from "../pieces/WorldAroundSofa";
import TheCelloProject from "../pieces/TheCelloProject";
import doors from "../images/doors.PNG";

function AboutArtist() {
  return (
    <Grid container style={{ backgroundColor: "#59D98C" }}>
      <Link to="/performances-for-objects"></Link>
      <Box className="photoAndDescription">
        <Box
          className="workshopPhoto"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={theSofaProject} alt="soundtracks" id="workshopPhoto" />
        </Box>
        <Box
          className="description"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h1>
            The Sofa Project is a continuous, international and
            interdisciplinary artistic research oriented towards performing for
            sofas around the world.
          </h1>
        </Box>
      </Box>
      <TheSofaProject />
      <WorldAroundSofa />
      <TheCelloProject />
      <a href="/home">
        <img src={doors} alt="doors" id="doors" />
      </a>
    </Grid>
  );
}

export default AboutArtist;
