import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import sofaGreenMaria from "../images/sofaGreenMaria.PNG";
import chairStreetMaria from "../images/chairStreetMaria.PNG";
// import sofaMariaHead from "../images/sofaMariaHead.png";
import sofaMariaHead2 from "../images/sofaMariaHead2.png";
import mariaBlanket from "../images/mariaBlanket.png";
import sofaBrown from "../images/sofaBrown.png";
import lempa from "../images/lempa.png";
import spinta from "../images/spinta.png";
import cello from "../images/cello.png";
import mariaOnSofa from "../images/mariaOnSofa.png";
import carpet from "../images/carpet.png";
import home from "../stylesheets/home.css";

function Home() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      className="index"
      id="index"
    >
      <div class="parent">
        <div class="child">
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Box style={{ width: "50%" }}>
                <a href="/recommendations">
                  <img
                    src={lempa}
                    alt="recommendations"
                    id="recommendationsImage"
                  />
                </a>
              </Box>
              <Box style={{ width: "50%" }}>
                <a href="/theworldaroundsofa">
                  <img
                    src={spinta}
                    alt="theworldaroundsofa"
                    id="theworldaroundsofaImage"
                  />
                </a>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Box style={{ width: "30%" }}>
                {" "}
                <a href="/cello">
                  <img src={cello} alt="cello" id="celloImage" />
                </a>
              </Box>
              <Box style={{ width: "80%" }}>
                {" "}
                <a href="/aboutartist">
                  <img
                    src={mariaOnSofa}
                    alt="aboutartist"
                    id="aboutArtistImage"
                  />
                </a>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Box style={{ width: "80%" }}>
                {" "}
                <a href="/soundtracks">
                  <img src={carpet} alt="soundtracks" id="soundtracksImage" />
                </a>
              </Box>
              <Box style={{ width: "40%" }} className="aboutProjectBox">
                {" "}
                <a href="/aboutproject">
                  <img
                    src={sofaBrown}
                    alt="aboutproject"
                    id="aboutprojectImage"
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </Grid>
  );
}

export default Home;
