import React from "react";
import { Link } from "react-router-dom";
import aboutArtist from "../stylesheets/aboutArtist.css";
import sofaHeadNoGrass from "../images/sofaHeadNoGrass.png";

function AboutArtist() {
  return (
    <div className="aboutArtist">
      <Link to="/aboutartist"></Link>
      <img src={sofaHeadNoGrass} alt="aboutArtist" />
    </div>
  );
}

export default AboutArtist;
