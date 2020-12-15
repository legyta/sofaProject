import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import aboutProject from "../stylesheets/aboutProject.css";
import sofaHead from "../images/sofaHead.jpg";
import AboutProjectGallery from "../photoGallery/AboutProjectGallery";
import aboutProject0 from "../images/aboutProject0.JPG";
import aboutProject1 from "../images/aboutProject1.JPG";
import aboutProject2 from "../images/aboutProject2.JPG";

function AboutProject() {
  return (
    <Grid className="aboutproject" style={{ backgroundColor: "#ffe66d" }}>
      <Link to="/aboutproject"></Link>
      <Box className="aboutProject">
        <Box>
          <h1>PERFORMING FOR SOFAS AROUND THE WORLD</h1>
          <p>By Marija Baranauskaite</p>
          <img
            src={sofaHead}
            alt="aboutProject"
            className="aboutProjectImage"
          />
        </Box>

        <Box>
          <p>
            „The Sofa Project“ is a continious international project consisting
            of the creative labaratories and it‘s presentations{" "}
            <b>publicly and non-publicly</b> all around the world. According to
            the artist, the audience of this project is{" "}
            <b>non-human: she performs for sofas.</b> One of the main goals of
            the project is to research how are we as human beings related to
            sofas? What can we discover about ourselves and others (humans and
            non-humans) in these relationships? How much consiousness is needed
            to be an audience member or a performer?
          </p>
          <p>
            After graduating from Lithuanian Academy of Music and Theatre as a
            contemporary dance artist, Marija studied clownery at École Philippe
            Gaulier in Paris, France. Always eager to challenge herself, Marija
            was inspired by contemporary artists who are already making shows
            for pets or plants and decided to take one little step further while
            researching audiences without any consiousness at all.{" "}
          </p>
        </Box>
        <Box
          // style={{ display: "flex", flexDirection: "row" }}
          className="aboutProjectImagesGallery"
        >
          <img
            src={aboutProject0}
            alt="aboutProject"
            className="aboutProjectImage0"
          />
          <img
            src={aboutProject1}
            alt="aboutProject"
            className="aboutProjectImage1"
          />
          <img
            src={aboutProject2}
            alt="aboutProject"
            className="aboutProjectImage2"
          />
        </Box>
        {/* fix photo display and add photo gallery */}
        {/* <AboutProjectGallery /> */}
        <Box style={{ paddingBottom: "40px" }}>
          <h2>
            <b>Products:</b>
          </h2>
          <p>
            <b>Workshops (1-3h)</b>
          </p>
          <p>
            <b>Solo performance (45-60min)</b>
          </p>
        </Box>
      </Box>
    </Grid>
  );
}
export default AboutProject;
