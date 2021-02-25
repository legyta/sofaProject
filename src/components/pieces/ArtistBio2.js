import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import authorBio2 from "../images/authorBio2.jpg";

function ArtistBio() {
  return (
    <Grid className="theSofaProject" style={{ marginBottom: "40px" }}>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={authorBio2}
            alt="sofaProject"
            id="soundtrackPhoto"
            style={{ marginTop: "20px" }}
          />
        </Box>
        <Box
          className="sofaProjectDescription"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <p style={{ marginTop: "40px" }}>
            {" "}
            After graduating from the Lithuanian Academy of Music and Theatre
            (contemporary dance and theatre), Marija Baranauskaite studied
            clownery at the International Theatre School “École Philippe
            Gaullier” in France. She has taught in the Lithuanian Academy of
            Music and Theatre and was the artistic director of the Red Noses
            Clown Doctors Lithuania. She is also the cofounder of the New Circus
            association in Lithuania who currently works as a freelancer while
            travelling around the world. <br></br>
            <br></br>
          </p>
        </Box>
      </Box>
    </Grid>
  );
}

export default ArtistBio;
