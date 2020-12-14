import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import sofaGreenMaria from "../images/sofaGreenMaria.PNG";
import chairStreetMaria from "../images/chairStreetMaria.PNG";
// import sofaMariaHead from "../images/sofaMariaHead.png";
import sofaMariaHead2 from "../images/sofaMariaHead2.png";
import mariaBlanket from "../images/mariaBlanket.png";
import sofaBrown from "../images/sofaBrown.png";
import sofaHeadNoGrass from "../images/sofaHeadNoGrass.png";
import blankets2 from "../images/blankets2.png";
import index from "../stylesheets/index.css";

function Index() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      className="index"
      style={{ width: "94%" }}
    >
      <Box
        style={{ display: "flex", flexDirection: "row" }}
        class="aboutArtistBox"
      >
        <Box
          className="aboutArtistBox"
          style={{ display: "flex", flexDirection: "column", width: "40%" }}
        >
          <Box className="aboutTheArtistText">
            <b>
              <a href="/aboutartist" id="aboutartist">
                About The Artist{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="aboutTheArtist" id="aboutTheArtist">
            {" "}
            <a href="/aboutartist">
              <img
                src={sofaMariaHead2}
                alt="aboutartist"
                id="aboutArtistImage"
              />
            </a>
          </Box>{" "}
        </Box>
        <Box style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <Box className="soundtracksText">
            <b>
              <a href="/soundtracks" id="soundtracksMenu">
                Soundtracks{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="soundtracksIndex">
            {" "}
            <a href="/soundtracks">
              <img src={mariaBlanket} alt="soundtracks" id="soundtracksImage" />
            </a>
          </Box>
        </Box>
      </Box>

      <Box
        className="worldAroundBox"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Box
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box className="theworldaroundsofaText" style={{ width: "50%" }}>
            <b>
              <a href="/theworldaroundsofa" id="theworldaroundsofaIndex">
                The World Around Sofa{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="theworldaroundsofaIndex">
            {" "}
            <a href="/theworldaroundsofa">
              <img
                src={sofaHeadNoGrass}
                alt="theworldaroundsofa"
                id="theworldaroundsofaImage"
              />
            </a>
          </Box>{" "}
        </Box>
        <Box style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Box className="aboutproject">
            <b>
              <a href="/sofaproject" id="sofaproject">
                The Sofa Project{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="sofaproject">
            {" "}
            <a href="/aboutproject">
              <img src={sofaBrown} alt="sofaproject" id="sofaprojectImage" />
            </a>
          </Box>
        </Box>
      </Box>

      <Box
        className="recommendationsBox"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Box
          className="recommendations"
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          <Box className="recommendationsText">
            <b>
              <a href="/recommendations" id="recommendations">
                Recommendations{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="recommendations">
            {" "}
            <a href="/recommendations">
              <img
                src={blankets2}
                alt="recommendations"
                id="recommendationsImage"
              />
            </a>
          </Box>{" "}
        </Box>
        <Box
          className="celloBox"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            width: "50%",
          }}
        >
          <Box className="celloText">
            <b>
              <a href="/cello" id="cello">
                Cello{" "}
              </a>
            </b>{" "}
          </Box>
          <Box className="cello">
            {" "}
            <a href="/cello">
              <img src={sofaBrown} alt="cello" id="celloImage" />
            </a>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Index;

// <div className="lineOne">
// <b>
//   <a
//     href="/recommendations"
//     id="recommendations"
//     style={{ fontSize: "1.4rem", margin: "80px" }}
//   >
//     Recommendations
//   </a>
// </b>
//
// </div>
// <div className="lineTwo">

// </div>
// <div className="lineThree">
// <a href="/cello" style={{ fontSize: "1.4rem", margin: "140px" }}>
//   Cello
// </a>

// </div>
