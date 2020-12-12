import React from "react";
import { Link } from "react-router-dom";
import soundtracks from "../stylesheets/soundtracks.css";
import mariaBlanket from "../images/mariaBlanket.png";

function Soundtracks() {
  return (
    <div className="soundtracks">
      <Link to="/soundtracks"></Link>
      <div>
        <img src={mariaBlanket} alt="soundtracks" />
      </div>
      <div className="tracksList">
        <h1>Soundtrack For Sofas</h1>
        <p>1 I wanna COudle you</p>
        <p>2 Doors are you ok?</p>
        <p>3 Hip hop</p>
      </div>
    </div>
  );
}

export default Soundtracks;
