import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import performForObjects1 from "../images/performForObjects1.png";
import performForObjects2 from "../images/performForObjects2.png";

function PerformForObjects() {
  return (
    <Grid className="theSofaProject">
      <Box className="title">
        <h1>How to perform for Objects</h1>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={performForObjects1}
            alt="sofaProject"
            id="performForObjects1"
            style={{ marginTop: "20px", marginRight: "5px" }}
          />
          <img
            src={performForObjects2}
            alt="sofaProject"
            id="performForObjects2"
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
          <p>Humans who want to learn how to perform for objects.</p>
          <h3>Duration:</h3>
          <p>Minimum 3h, maximum – never-ending continuous research. </p>
          <p style={{ margin: "40px 40px 0px 0px" }}>
            Can humans perform for different types of objects? Not only sofas?{" "}
            <br></br>
            <br></br>During these sessions, experienced artists from around the
            world, guide you to find out what your type of object is. In these
            workshops you learn how to perform for your chosen type of object,
            despite the fact that the object has no need for your performance.
            Because of this, the workshop is truly a laboratory for artistic
            liberation. <br></br>
            <br></br> Open for professional and not-yet-professional artists.
          </p>
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

export default PerformForObjects;
