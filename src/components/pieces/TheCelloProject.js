import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import cello from "../images/cello.jpg";
import InfoIcon from "@material-ui/icons/Info";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}
function TheCelloProject() {
  return (
    <Grid className="theSofaProject" style={{ marginBottom: "40px" }}>
      <Box className="title">
        <h1>„THE CELLO PROJECT (upcoming)“</h1>
        <h2>Performance for non-human audiences – Cellos</h2>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={cello}
            alt="sofaProject"
            id="soundtrackPhoto"
            style={{ marginTop: "20px" }}
          />
          <p style={{ margin: "40px 40px 0px 0px" }}>
            „The Cello Project“ is an artistic project which is being developed
            by Marija which is taking up a new challenge: she is choosing one
            specific object again – CELLO. <br></br>
            <br></br>Creating for humans and creating for objects is equally
            challenging, but the two are very different processes in many
            regards. <br></br>
            <br></br> So how are we, human beings, related to cellos? What can
            we discover about ourselves and others (humans and non-humans) in
            these relationships? What information is cello giving to us? Are we
            consiouss enough of it? Do we need to be consiouss of that? Do we
            need to act on something or for something here?
          </p>
        </Box>
        <Box
          className="sofaProjectDescription"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <h3>Author and director:</h3>
          <p>Marija Baranauskaitė </p>
          <h3 style={{ marginBottom: "5px" }}>Book the show:</h3>
          <InfoIcon
            onMouseOver={changeBackground}
            onMouseLeave={usualBackground}
            onClick={() => window.open("/contact-artists", "_blank")}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default TheCelloProject;
