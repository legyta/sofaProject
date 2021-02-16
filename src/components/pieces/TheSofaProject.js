import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import sofaProjectPhoto from "../images/sofaProjectPhoto.jpg";
import ReactPlayer from "react-player";

const sofaTrailer = "https://www.youtube.com/watch?v=DYtkUHnUMNQ";

function TheSofaProject() {
  return (
    <Grid className="theSofaProject">
      <Box className="title">
        <h1>„THE SOFA PROJECT“</h1>
        <h2>Solo Performance</h2>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={sofaProjectPhoto}
            alt="sofaProject"
            id="soundtrackPhoto"
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
          <h3>Concept & performance:</h3>
          <p>Marija Baranauskaitė </p>
          <h3>Main collaborators:</h3>
          <p>
            Blue Sofa (FR), Green Sofa (BE), Brown Sofa, Red Sofa, Yellow Sofa,
            Yellowish Sofa (LT), 24 black Sofas (CAC){" "}
          </p>
          <h3>Premier:</h3>
          <p>2018</p>
          <h3>Duration:</h3>
          <p>45-60 min</p>
          <p>Performance is in ENG language </p>
          <h3>Amount of audience is strictly limited: </h3>
          <p>recommended 20-50 sofas or half-humans half-sofas per show</p>
          <h3>Recommended age:</h3>
          <p>
            human-sofas - +14<br></br> sofas – no restrictions
          </p>
          <p style={{ marginTop: "5px" }}>
            Performance is suitable for indoors and outdoors, can be adapted to
            perform in private human houses, furniture stores as well as
            conventional stages or gallery spaces
          </p>
          <h3>People on tour:</h3>
          <p>2 people </p>
          <h3 style={{ marginBottom: "5px" }}>Trailer:</h3>
          <ReactPlayer
            className="reactPlayer"
            url={sofaTrailer}
            width="320px"
            height="220px"
            playing={false}
            controls={true}
          />
        </Box>
      </Box>
      <hr
        style={{
          height: 0.5,
          backgroundColor: "#000",
          margin: "40px 0px",
        }}
      />
    </Grid>
  );
}

export default TheSofaProject;
