import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutCreatorImage from "../images/aboutCreatorImage.svg";
import Banner from "../pieces/Banner";

function OtherIdeas() {
  return (
    <Grid container style={{ backgroundColor: "#F9D65C" }}>
      <Link to="/more-ideas"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={aboutCreatorImage} alt="soundtracks" id="soundtrackPhoto" />
        </Box>
        <Box className="description">
          <h1>
            More info and additional activities will soon be presented here.
            <br></br>
            <br></br>You will be able to get your own blanket or subscribe for
            the newsletter.
          </h1>
        </Box>
      </Box>
      <Banner />
    </Grid>
  );
}

export default OtherIdeas;
