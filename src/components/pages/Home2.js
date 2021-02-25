import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import aboutthecreatorfinalResized from "../images/aboutthecreatorfinalResized.png";
import Soundtrackforsofafinal from "../images/Soundtrackforsofafinal.png";
import workshopsfinalResized from "../images/workshopsfinalResized.png";
import contacttheartistsfinal from "../images/contacttheartistsfinal.png";
import PerformancesforObjectsfinalResized from "../images/PerformancesforObjectsfinalResized.png";
import homePage from "../stylesheets/homePage.css";
import croppedbackgroundredblueResized from "../images/croppedbackgroundredblueResized.png";
import lampResized from "../images/lampResized.png";

function Home2() {
  return (
    <div container>
      <div
        className="cello"
        style={{
          backgroundImage: `url(${croppedbackgroundredblueResized})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "max-width",
          backgroundPosition: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <a href="/about-creator">
              <img src={lampResized} alt="recommendations" id="sixthImage" />
            </a>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ width: "50%" }}>
              <a href="/more-ideas">
                <img
                  src={aboutthecreatorfinalResized}
                  alt="recommendations"
                  id="fourthImage"
                />
              </a>
            </Box>
            <Box style={{ width: "50%" }}>
              <a href="/soundtracks">
                <img
                  src={Soundtrackforsofafinal}
                  alt="theworldaroundsofa"
                  id="fifthImage"
                />
              </a>
            </Box>
          </Box>

          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ width: "33%" }}>
              <a href="/workshops">
                <img
                  src={workshopsfinalResized}
                  alt="recommendations"
                  id="firstImage"
                />
              </a>
            </Box>
            <Box style={{ width: "33%" }}>
              <a href="/contact-artists">
                <img
                  src={contacttheartistsfinal}
                  alt="theworldaroundsofa"
                  id="secondImage"
                />
              </a>
            </Box>
            <Box style={{ width: "33%" }}>
              <a href="/performances-for-objects">
                <img
                  src={PerformancesforObjectsfinalResized}
                  alt="theworldaroundsofa"
                  id="thirdImage"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Home2;
