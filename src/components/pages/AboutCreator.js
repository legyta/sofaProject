import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutCreator from "../stylesheets/aboutCreator.css";
import aboutArtistImage from "../images/aboutArtistImage.png";
import aboutCreatorImage from "../images/aboutCreatorImage.svg";
import ArtistBio from "../pieces/ArtistBio";
import ArtistBio2 from "../pieces/ArtistBio2";
import doors from "../images/doors.PNG";
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
            Sometimes it was as if the sofa and I were extra much connected. As
            if our cosiness, softness, cuteness, ignorance and heaviness were
            one.
            <br></br>
            <br></br>Sofa has always invited me to sit, to take a nap, to make
            out, to relax and stay still. And why should I ever move away? But,
            being in such an intense relationship made the issues of the
            miserable life pop up.
          </h1>
          <a href="/home">
            <img src={doors} alt="doors" id="doors" />
          </a>
        </Box>
      </Box>
      <ArtistBio />
      <ArtistBio2 />
      <Banner />
    </Grid>
  );
}

export default AboutCreator;
