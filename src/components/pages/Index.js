import React from "react";
import sofaGreenMaria from "../images/sofaGreenMaria.PNG";
import chairStreetMaria from "../images/chairStreetMaria.PNG";
import sofaOwlMaria from "../images/sofaOwlMaria.PNG";
import index from "../stylesheets/index.css";

function Index() {
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: `url(${sofaGreenMaria})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="index-nav">
        <div className="lineOne">
          <b>
            <a
              href="/recommendations"
              id="recommendations"
              style={{ fontSize: "1.4rem", margin: "80px" }}
            >
              Recommendations
            </a>
          </b>
          <a
            href="/soundtracks"
            id="soundtracks"
            style={{ fontSize: "1.4rem", margin: "60px" }}
          >
            Soundtracks For Sofas
          </a>
        </div>
        <div className="lineTwo">
          <a
            href="/aboutproject"
            id="sofaproject"
            style={{ fontSize: "2rem", margin: "60px" }}
          >
            The Sofa Project
          </a>
          <b>
            <a
              href="/theworldaroundsofa"
              id="theworldaroundsofa"
              style={{ fontSize: "1.2rem", margin: "120px" }}
            >
              The World Around Sofa
            </a>
          </b>
        </div>
        <div className="lineThree">
          <a href="/cello" style={{ fontSize: "1.4rem", margin: "140px" }}>
            Cello
          </a>
          <b>
            <a
              href="/aboutartist"
              id="aboutartist"
              style={{
                fontSize: "1.6rem",
                marginLeft: "150px",
              }}
            >
              About The Artist
            </a>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Index;
