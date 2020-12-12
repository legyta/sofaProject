import React from "react";
import { Link } from "react-router-dom";
import worldAround from "../stylesheets/worldAround.css";
import circus from "../images/circus.png";

function WorldAround() {
  return (
    <div className="theworldaroundsofa">
      <Link to="/theworldaroundsofa"></Link>

      {/* <div className="tracksList">
        <h1>The World Around Sofa</h1>
        <p>
          This project has united so many different and crazy artists from all
          around the world who wanted to experience what it is to give your
          attention to furniture. 17 artists from different inches of the planet
          were gathering in our already beloved Zoom and trying different
          techniques
        </p>
      </div> */}
      <div>
        <img src={circus} alt="circus" />
        <h1>The World Around Sofa</h1>
        <p>
          This project has united so many different and crazy artists from all
          around the world who wanted to experience what it is to give your
          attention to furniture. 17 artists from different inches of the planet
          were gathering in our already beloved Zoom and trying different
          techniques
        </p>
      </div>
    </div>
  );
}

export default WorldAround;
