import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import soundtracks from "../stylesheets/soundtracks.css";
import mariaBlanket from "../images/mariaBlanket.png";

function Soundtracks() {
  return (
    <Grid style={{ backgroundColor: "#e5989b" }}>
      <Link to="/soundtracks"></Link>
      <Box className="soundtracks">
        <Box>
          <img src={mariaBlanket} alt="soundtracks" />
        </Box>
        <Box className="tracksList">
          <h1>Soundtrack For Sofas</h1>
          <p>1 I wanna COudle you</p>
          <p>2 Doors are you ok?</p>
          <p>3 Hip hop</p>
        </Box>
      </Box>
    </Grid>
  );
}

export default Soundtracks;
