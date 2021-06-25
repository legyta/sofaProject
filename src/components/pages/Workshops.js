import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import workshops from "../stylesheets/workshops.css";
import workshopsImage from "../images/workshopsImage.svg";
import workshops1 from "../images/workshops1.png";
import workshops_titleResized from "../images/workshops_titleResized.png";
import ContactImpro from "../pieces/ContactImpro";
import PerformForObjects from "../pieces/PerformForObjects";
import PlayPhilosophy from "../pieces/PlayPhilosophy";
import doors from "../images/doors.PNG";

function Workshops() {
  return (
    <Grid container style={{ backgroundColor: "#F69863" }}>
      <Link to="/workshops"></Link>
      <Box className="photoAndDescription">
        <Box
          className="workshopPhoto"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={workshops_titleResized}
            alt="soundtracks"
            id="workshopPhoto"
          />
        </Box>
        <Box
          className="description"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h1>
            Here you can find the list of workshops which explore the ontology
            of sofanity. The workshops can be held both physically and online,
            during special events or casual situations.{" "}
          </h1>
        </Box>
      </Box>
      <ContactImpro />
      <PerformForObjects />
      <PlayPhilosophy />
      <a href="/home">
        <img src={doors} alt="doors" id="doors" />
      </a>
    </Grid>
  );
}

export default Workshops;
