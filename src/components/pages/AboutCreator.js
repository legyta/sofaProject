import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutArtist from "../stylesheets/aboutArtist.css";
import sofaHeadNoGrass from "../images/sofaHeadNoGrass.png";
import aboutCreator from "../images/aboutCreator.svg";

function AboutCreator() {
  return (
    <Grid container style={{ backgroundColor: "#F9D65C" }}>
      <Link to="/about-creator"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={aboutCreator} alt="soundtracks" id="soundtrackPhoto" />
        </Box>
        <Box className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            eleifend suscipit felis non tempor. Proin neque ex, convallis
            viverra ipsum tempor, aliquet tempor felis. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            <br></br>
            <br></br>Vivamus non magna tempor, volutpat ante non, faucibus
            lacus. Nullam eleifend ligula sed arcu mattis interdum. Cras sed
            bibendum est, nec lobortis nisi. Ut placerat malesuada nunc ac
            molestie.
          </p>
        </Box>
      </Box>
    </Grid>
  );
}

export default AboutCreator;
