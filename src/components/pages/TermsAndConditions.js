import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import yesConfirm from "../images/yesConfirm.jpg";
import noConfirm from "../images/noConfirm.jpg";
import sofa from "../images/sofa.svg";
import Button from "@material-ui/core/Button";
import PopUp from "../pieces/PopUp";
//import NoConfirmText from "../pieces/NoConfirmText"
import termsAndConditions from "../stylesheets/termsAndConditions.css";
class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
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
            The Sofa Project is a continuous, international and
            interdisciplinary artistic research oriented towards performing for
            sofas around the world. If you are a human, before entering the
            website created for sofas, please read and confirm the following
            terms and conditions:
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
              <p className="tc">Entering the website for sofas </p>
              <hr
                style={{
                  height: 0.5,
                  width: 280,
                  backgroundColor: "#000",
                  margin: "20px",
                }}
              />
              <ol>
                <li>I understand that this website is not for humans.</li>
                <li>
                  I confirm that I am entering this website for the benefit of
                  objects and furniture.
                </li>
                <li>
                  Upon entering the website, I am recommended to act as little
                  human as possible and as much as I can as an object: staying
                  still, present, taking time, maybe putting a blanket on my
                  head if I feel like a couch and without too many human
                  thoughts or feelings.
                </li>
                <li>
                  I understand that objects depend on me, so it’s up to me to
                  decide if art made for non-human publics will reach my
                  objects.
                </li>
                <li>
                  I understand that this project is human friendly so I will do
                  my best to be object friendly too.
                </li>
                <li>
                  I will put a soundtrack created for objects for my objects.
                </li>
                <li>
                  I will invite or I will consider the possibility of inviting
                  Marija or other artists experienced in performances for
                  objects to come and perform for my things.
                </li>
              </ol>

              <Grid
                className="buttons"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "25px",
                }}
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
                    Yes, I confirm
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={this.togglePopup.bind(this)}
                    size="small"
                    variant="contained"
                    color="default"
                    rel="noopener"
                    data-do-default="true"
                  >
                    I don't confirm
                  </Button>
                  <img
                    src={noConfirm}
                    alt="agree"
                    id="notAgreeButton"
                    style={{
                      margin: "10px",
                    }}
                  />
                  {this.state.showPopup ? (
                    <PopUp
                      text="We kindly ask you to leave the website open for your furniture and go
        for a walk if you wish to do so."
                    />
                  ) : null}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      </Grid>
    );
  }
}

export default TermsAndConditions;
