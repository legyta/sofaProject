import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import playPhilosophy1 from "../images/playPhilosophy1.png";
import playPhilosophy2 from "../images/playPhilosophy2.png";
import playPhilosophy3 from "../images/playPhilosophy3.png";
import InfoIcon from "@material-ui/icons/Info";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}

function PlayPhilosophy() {
  return (
    <Grid className="theSofaProject" style={{ marginBottom: "40px" }}>
      <Box className="title">
        <h1>Philosophy of Play</h1>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={playPhilosophy2}
            alt="sofaProject"
            id="contactImproPhoto1"
            style={{ marginTop: "20px", marginRight: "5px" }}
          />
          <img
            src={playPhilosophy3}
            alt="sofaProject"
            id="contactImproPhoto2"
            style={{ marginTop: "20px" }}
          />

          <caption
            style={{ display: "flex", flexDirection: "row", fontSize: "14px" }}
          >
            Photo: Dainius Putinas
          </caption>
        </Box>
        <Box
          className="sofaProjectDescription"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <h3>For whom:</h3>
          <p>For humans who are overly human centered and highly critical. </p>
          <h3>Duration:</h3>
          <p>Minimum 1h, optimal 12h, maximum 26h. </p>
          <h3 style={{ marginBottom: "5px" }}>Book the show:</h3>
          <InfoIcon
            onMouseOver={changeBackground}
            onMouseLeave={usualBackground}
            onClick={() => window.open("/contact-artists", "_blank")}
          />
          <p style={{ margin: "40px 40px 0px 0px" }}>
            Are you one of those thinking that performing for objects is just a
            naive idea and that nothing real is possible in this field? Then
            this workshop is for you. It’s not always easy to take things
            seriously, thus experiencing them through the perspective of
            playfulness can be radically helpful.
          </p>
          <img
            src={playPhilosophy1}
            alt="sofaProject"
            id="contactImproPhoto2"
            style={{ marginTop: "20px" }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default PlayPhilosophy;
