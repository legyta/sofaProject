import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import background from "../images/background.png";
import lempa from "../images/lempa.png";
import spinta from "../images/spinta.png";
import aboutthecreatorfinal from "../images/aboutthecreatorfinal.png";
import Soundtrackforsofafinal from "../images/Soundtrackforsofafinal.png";
import workshopsfinal from "../images/workshopsfinal.png";
import contacttheartistsfinal from "../images/contacttheartistsfinal.png";
import PerformancesforObjectsfinal from "../images/PerformancesforObjectsfinal.png";
import homePage from "../stylesheets/homePage.css";

function Cello() {
  return (
    <div container>
      <div
        className="cello"
        style={{
          backgroundImage: `url(${background})`,
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
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ width: "50%" }}>
              <a href="/workshops">
                <img
                  src={aboutthecreatorfinal}
                  alt="recommendations"
                  id="fourthImage"
                />
              </a>
            </Box>
            <Box style={{ width: "50%" }}>
              <a href="/contact-artists">
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
                  src={workshopsfinal}
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
              <a href="/contact-artists">
                <img
                  src={PerformancesforObjectsfinal}
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

export default Cello;
