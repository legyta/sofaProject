import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import soundtracks from "../stylesheets/soundtracks.css";
import mariaBlanket from "../images/mariaBlanket.png";
import soundtrack from "../images/soundtrack.svg";
import play from "../images/play.svg";
import Tracks from "../pages/Tracks";
import doors from "../images/doors.PNG";
import Banner from "../pieces/Banner";

function Soundtracks() {
  return (
    <Grid container style={{ backgroundColor: "#D95959" }}>
      <Link to="/soundtracks"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={soundtrack} alt="soundtracks" id="soundtrackPhoto" />
        </Box>
        <Box className="description">
          <h1>
            This is a soundtrack made for sofas created by object-music
            composers – Mark Liberman, Mikas Zabulionis, doors of PAF, sofas of
            Vyturys Hotel, human opinions and Marija Baranauskaitė.
            <br></br>
            <br></br>Please, put this soundtrack on for your sofas and become a
            sofa yourself to receive the music in its intended way.{" "}
          </h1>
          <a href="/home">
            <img src={doors} alt="doors" id="doors" />
          </a>
        </Box>
      </Box>
      <Tracks />
      <Banner />
    </Grid>
  );
}

export default Soundtracks;
