import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutCreator from "../stylesheets/aboutCreator.css";
import sofaHeadNoGrass from "../images/sofaHeadNoGrass.png";
import aboutCreatorImage from "../images/aboutCreatorImage.svg";
import Banner from "../pieces/Banner";

function AboutCreator() {
  return (
    <Grid container style={{ backgroundColor: "#F9D65C" }}>
      <Link to="/about-creator"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={aboutCreatorImage} alt="soundtracks" id="soundtrackPhoto" />
        </Box>
        <Box className="description">
          <h1>
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
          </h1>
        </Box>
      </Box>
      <Banner />
    </Grid>
  );
}

export default AboutCreator;
