import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutArtist from "../stylesheets/aboutArtist.css";
import sofaHeadNoGrass from "../images/sofaHeadNoGrass.png";

function AboutArtist() {
  return (
    <Grid style={{ backgroundColor: "#56cfe1" }}>
      <Link to="/aboutartist"></Link>
      <Box className="aboutArtist">
        <Box>
          <img src={sofaHeadNoGrass} alt="aboutArtist" />
        </Box>
      </Box>
    </Grid>
  );
}

export default AboutArtist;
