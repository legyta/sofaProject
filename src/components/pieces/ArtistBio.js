import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import aboutArtistImage from "../images/aboutArtistImage.png";
import threeSofas from "../images/threeSofas.jpg";
import afterShow1 from "../images/afterShow1.jpg";
import afterShow2 from "../images/afterShow2.jpg";
import afterShow3 from "../images/afterShow3.jpg";

function ArtistBio() {
  return (
    <Grid className="theSofaProject">
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={aboutArtistImage}
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
          <p style={{ marginTop: "10px" }}>
            We did not have friends. We could not go and see new beautiful
            countries, nor work on our career and try to become famous,
            well-known, someone who did truly important things for the humanity!
            <br></br>
            <br></br>
          </p>
          <p>
            "Please let me go..." I asked. "There are more sofas I can meet in
            my life. You are not the only one!!!" I kept telling her. But sofas
            can't talk. They just stand still as they are and that’s it.
            <br></br>
            <br></br>
          </p>
          <p>
            But love is love and I was not the stupid one, so I managed to come
            up with the best idea ever: If I can't go away from sofa, then sofa
            can go around the world with me. <br></br>
            <br></br>
          </p>
          <p>
            {" "}
            So, sofa started traveling through the streets, venues, the best
            performing festivals around the world. Famous people do not need to
            travel themselves to visit me, as sofa and I arrive straight to
            them. Now they talk, they have fun, they can enjoy the cosiness of
            this legendary heavy, but flying all around the world piece of
            furniture. <br></br>
            <br></br>
          </p>
          <p>
            {" "}
            On the 10th of March 2018, at the Performing Arts Forum (PAF,
            France) the first experiment to perform and share the work in
            progress with sofa-audience happened. Three of them came:<br></br>
            <br></br>
          </p>
          <Box className="photo">
            <img
              src={threeSofas}
              alt="sofaProject"
              id="threeSofas"
              style={{ marginTop: "20px" }}
            />
          </Box>
          <p className="afterShowText">
            {" "}
            And that is how they looked after the show :<br></br>
            <br></br>
          </p>
          <Box
            className="photoAfterShow"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={afterShow1}
              alt="sofaProject"
              id="threeSofas"
              style={{ marginTop: "20px" }}
            />
            <img
              src={afterShow3}
              alt="sofaProject"
              id="threeSofas"
              style={{ margin: "20px" }}
            />
            <img
              src={afterShow2}
              alt="sofaProject"
              id="threeSofas"
              style={{ marginTop: "20px" }}
            />
          </Box>
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

export default ArtistBio;
