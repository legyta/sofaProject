import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import yesConfirm from "../images/yesConfirm.jpg";
import noConfirm from "../images/noConfirm.jpg";
import sofa from "../images/sofa.svg";
import Button from "@material-ui/core/Button";
import { shadows } from "@material-ui/system";
import termsAndConditions from "../stylesheets/termsAndConditions.css";

function TermsAndConditions() {
  return (
    <Grid
      container
      className="termsAndConditions"
      style={{
        backgroundColor: "#d2d2d2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        className="termsAndConditionsPage"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px 20px",
        }}
      >
        <h1>The Sofa Project</h1>
        <img src={sofa} alt="sofa" id="sofa" />
        <p>
          The Sofa Project is a continuous, international and interdisciplinary
          artistic research oriented towards performing for sofas around the
          world. The audience of this project is <b>non-human.</b> The work is
          created <b>for furniture.</b>
          <br></br> <br></br>
          The creator of the project is Marija Baranauskaite. Due to the global
          pandemic in 2020 she opened up her research and is inviting other
          humans and artists{" "}
          <b>to create and perform for their type of furniture or objects. </b>
          <br></br> <br></br>
          The project is <b>human friendly</b>, but is always oriented towards
          giving for objects. So, if you are a human, before entering this
          website created for sofas, please read and confirm the following terms
          and conditions:
        </p>

        <Grid
          className="termsAndConditionsSheet"
          style={{
            marginTop: "40px",
          }}
        >
          <Paper
            className="termsAndConditionsSheetPaper"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0px",
            }}
          >
            <h2>Terms and Conditions</h2>
            <p>For entering the website made for sofas </p>
            <hr
              style={{
                height: 0.5,
                width: 280,
                backgroundColor: "#000",
                margin: "20px",
              }}
            />
            <ol>
              <li>
                I understand that this website is not for humans, but for sofas.
              </li>
              <li>
                I confirm that I am entering this website for the benefit of
                sofas.
              </li>
              <li>
                Upon entering the website, I am recommended to act as little
                human as possible and as much as I can as a sofa: staying still,
                present, passive, taking time, putting a blanket on my head,
                inviting someone to sit on me and without too many human
                thoughts or feelings.
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
                I will invite or I will consider the possibility of inviting
                Marija to perform for sofas in my community. Or other artists
                experienced in performances for different types of objects to
                come and perform for my furniture.
              </li>
            </ol>

            <Grid
              className="buttons"
              style={{ display: "flex", flexDirection: "row", margin: "25px" }}
            >
              <Grid
                className="agreeButton"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href="/home"
                >
                  Confirm
                </Button>
                <img
                  src={yesConfirm}
                  alt="agree"
                  id="agreeButton"
                  style={{
                    margin: "10px",
                  }}
                />
              </Grid>

              <Grid
                className="disagreeButton"
                style={{
                  //width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="default"
                  href="/home"
                >
                  Don't confirm
                </Button>
                <img
                  src={noConfirm}
                  alt="agree"
                  id="notAgreeButton"
                  style={{
                    margin: "10px",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </Grid>
  );
}

export default TermsAndConditions;

//

{
  /* <Grid className="termsAndConditionsPage">
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
<Grid
  className="termsAndConditionsSheet"
  style={{ backgroundColor: "white", height: "90px" }}
>
  <h2>Terms and Conditions</h2>
  <p>Entering the website made for sofas </p>
  <ol>
    <li>
      I understand that this website is not for humans, but for sofas.{" "}
    </li>
    <li>
      I confirm that I am entering this website for the benefit of
      sofas.
    </li>
    <li>
      Upon entering the website, I am recommended to act as little human
      as possible and as much as I can as a sofa: staying still,
      present, passive, taking time, putting a blanket on my head,
      inviting someone to sit on me and without too many human thoughts
      or feelings.{" "}
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
      I will invite or I will consider the possibility of inviting
      Marija to perform for sofas in my community. Or other artists
      experienced in performances for different types of objects to come
      and perform for my furniture.
    </li>
  </ol>
  <Grid
    className="buttons"
    style={{ display: "flex", flexDirection: "row" }}
  >
    <Grid
      className="agreeButton"
      style={{ width: "30%", display: "flex", flexDirection: "column" }}
    >
      {" "}
      <p>Yes, I confirm</p>
      <a href="/home">
        <img src={yesConfirm} alt="agree" id="agreeButton" />
      </a>
    </Grid>

    <Grid
      className="disagreeButton"
      style={{ width: "30%", display: "flex", flexDirection: "column" }}
    >
      {" "}
      <p> No, I do not confirm</p>
      <a href="/home">
        <img src={noConfirm} alt="agree" id="notAgreeButton" />
      </a>
    </Grid>
  </Grid>
</Grid>
</Grid> */
}
