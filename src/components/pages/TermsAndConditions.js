import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import blankets2 from "../images/blankets2.png";
import noConfirm from "../images/noConfirm.jpg";
import termsAndConditions from "../stylesheets/termsAndConditions.css";

function TermsAndConditions() {
  return (
    <Grid className="termsAndConditions" style={{ margin: "40px" }}>
      <Box>
        <h1>The Sofa Project</h1>
        <p>
          The Sofa Project is a continuous, international and interdisciplinary
          artistic research oriented towards performing for sofas around the
          world. The audience of this project is <b>non-human.</b> The work is
          created <b>for furniture.</b>
        </p>
        <p>
          The creator of the project is Marija Baranauskaite. Due to the global
          pandemic in 2020 she opened up her research and is inviting other
          humans and artists{" "}
          <b>to create and perform for their type of furniture or objects. </b>
        </p>
        <p>
          The project is <b>human friendly</b>, but is always oriented towards
          giving for objects. So, if you are a human, before entering this
          website created for sofas, please read and confirm the following terms
          and conditions:
        </p>
      </Box>
      <Box>
        <h2>Terms and Conditions</h2>
        <p>Entering the website made for sofas </p>
        <ol>
          <li>
            I understand that this website is not for humans, but for sofas.{" "}
          </li>
          <li>
            I confirm that I am entering this website for the benefit of sofas.
          </li>
          <li>
            Upon entering the website, I am recommended to act as little human
            as possible and as much as I can as a sofa: staying still, present,
            passive, taking time, putting a blanket on my head, inviting someone
            to sit on me and without too many human thoughts or feelings.{" "}
          </li>
          <li>
            I understand that sofas always depend on me, so it’s up to me to
            decide if art made for furniture will reach my couch.
          </li>
          <li>
            I understand that this project is human friendly so I will do my
            best to be sofa friendly too.
          </li>
          <li>
            I will put a soundtrack created for sofas for my couch or for me
            being a sofa.{" "}
          </li>
          <li>
            I will invite or I will consider the possibility of inviting Marija
            to perform for sofas in my community. Or other artists experienced
            in performances for different types of objects to come and perform
            for my furniture.
          </li>
        </ol>
      </Box>
      <Box
        className="buttons"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Box
          className="agreeButton"
          style={{ width: "30%", display: "flex", flexDirection: "column" }}
        >
          {" "}
          <p>Yes, I confirm</p>
          <a href="/home">
            <img src={blankets2} alt="agree" id="agreeButton" />
          </a>
        </Box>

        <Box
          className="disagreeButton"
          style={{ width: "30%", display: "flex", flexDirection: "column" }}
        >
          {" "}
          <p> No, I do not confirm</p>
          <a href="/home">
            <img src={noConfirm} alt="agree" id="notAgreeButton" />
          </a>
        </Box>
      </Box>
    </Grid>
  );
}

export default TermsAndConditions;
