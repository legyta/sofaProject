import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import worldAround from "../stylesheets/worldAround.css";
import circus from "../images/circus.png";

function WorldAround() {
  return (
    <Grid className="theworldaroundsofa" style={{ backgroundColor: "#06d6a0" }}>
      <Link to="/theworldaroundsofa"></Link>
      <Box className="theworldaroundsofa">
        <Box>
          <h1>PERFORMING FOR SOFAS AROUND THE WORLD</h1>
          <p>By Marija Baranauskaite</p>
          <img src={circus} alt="circus" className="theworldaroundsofaImage" />
        </Box>

        <Box>
          <p>
            This project has united so many different and crazy artists from all
            around the world who wanted to experience what it is to give your
            attention to furniture. 17 artists from different inches of the
            planet were gathering in our already beloved Zoom and trying
            different techniques
          </p>
        </Box>
      </Box>
    </Grid>
  );
}

export default WorldAround;
