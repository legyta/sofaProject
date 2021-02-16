import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import worldAroundSofaPhoto from "../images/worldAroundSofaPhoto.jpg";
import FbContact from "./FbContact";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InfoIcon from "@material-ui/icons/Info";

const morePhotos =
  "https://drive.google.com/drive/folders/1aIaV7Jn-2LRWO6vsLJcgd7FQbdh23jAb?fbclid=IwAR3VugxOwQoU3RLquKTtWJubotUWbW5LpvOSB8B9hrAFQF-wzagUOVjzPjo";
const techReq = "https://bit.ly/3dVmcHg";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}
function WorldAroundSofa() {
  return (
    <Grid className="theSofaProject">
      <Box className="title">
        <h1>„THE WORLD AROUND SOFA“</h1>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={worldAroundSofaPhoto}
            alt="sofaProject"
            id="soundtrackPhoto"
            style={{ marginTop: "20px" }}
          />

          <p style={{ margin: "40px 40px 0px 0px" }}>
            The creative process of “The World Around Sofa” began with the
            global pandemic. This is a continuous creative process of the solo
            project “The Sofa Project“ launched by Marija Baranauskaitė in 2018,
            which explores the possibilities of creating performances for
            audiences comprised of furniture instead of people. One of the main
            goals of the project is to visit local sofas from different
            countries, but once the pandemic struck, a quick solution has been
            found - 7 artists from different continents are taking care of the
            well-being of local furniture in their countries. How to travel
            around the world after a pandemic starts? Is it possible to create
            not only for sofas but also for other things? Could this alleviate
            the anxiety of artists who are afraid of losing their audience? How
            and why should we create together? During the performance, live
            audience watches how artists present their art for furniture online
            (through the screen in the space).
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
          <h3>Performers:</h3>
          <p>
            Amada Méndez-Piedra Paredes, Dávid Fekete, Danielo Amaya, Estela
            Lapponi, James Adamson, Leonie Kuipers, Vincent Owoko
          </p>
          <h3>Manager: </h3>
          <p>Evita Mikalkėnaitė </p>
          <h3>Movement assistant:</h3>
          <p>Eglė Nešukaitytė</p>
          <h3>Technical assistant:</h3>
          <p>Mark Liberman</p>
          <h3>Recommended age:</h3>
          <p>
            human-public - 14 + <br></br> object-public – not restricted
          </p>
          <h3>Duration:</h3>
          <p> 1 hour, can last 1 week too as an installation </p>
          <h3>Language: </h3>
          <p>English </p>

          <h3>Venue options:</h3>
          <p>Inside, with a possibility to have a complete darkness</p>

          <h3>People on tour:</h3>
          <p>4</p>

          <h3>People online:</h3>
          <p>7</p>
          <h3 style={{ marginBottom: "5px" }}>Technical requirements:</h3>
          <InfoIcon
            onMouseOver={changeBackground}
            onMouseLeave={usualBackground}
            onClick={() => window.open(techReq, "_blank")}
          />
          <h3>Additional information:</h3>
          <FbContact />
          <h3>More photos:</h3>
          <PhotoLibraryIcon
            style={{ marginBottom: "40px" }}
            onMouseOver={changeBackground}
            onMouseLeave={usualBackground}
            onClick={() => window.open(morePhotos, "_blank")}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default WorldAroundSofa;
