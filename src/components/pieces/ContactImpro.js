import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import projectSections from "../stylesheets/projectSections.css";
import contactImpro1 from "../images/contactImpro1.png";
import contactImpro2 from "../images/contactImpro2.png";
import InfoIcon from "@material-ui/icons/Info";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}

function ContactImpro() {
  return (
    <Grid className="theSofaProject" style={{ marginTop: "20px" }}>
      <Box className="title">
        <h1>Contact Dance Improvisation Workshop for Sofas</h1>
      </Box>
      <Box className="sofaProjectPhotoAndDescription">
        <Box className="photo">
          <img
            src={contactImpro1}
            alt="sofaProject"
            id="contactImproPhoto1"
            style={{ marginTop: "20px", marginRight: "5px", marginLeft: "5px" }}
          />
          <img
            src={contactImpro2}
            alt="sofaProject"
            id="contactImproPhoto2"
            style={{ marginTop: "20px" }}
          />
        </Box>
        <Box
          className="sofaProjectDescription"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <h3>For whom:</h3>
          <p>
            All types of sofas and humans willing to shift from anthropocentrism
            towards sofacentrism.{" "}
          </p>
          <h3>Duration:</h3>
          <p>Minimum 1h, maximum 26h/three to five days.</p>
          <h3 style={{ marginBottom: "5px" }}>Book the workshop:</h3>
          <InfoIcon
            onMouseOver={changeBackground}
            onMouseLeave={usualBackground}
            onClick={() => window.open("/contact-artists", "_blank")}
          />
          <p style={{ margin: "40px 40px 0px 0px" }}>
            Contact dance is one of the best ways to reveal the differences and
            similarities of the human and sofa bodies and explore how both of
            them can co-exist in this world. This is done by displacing the
            human out of the centre of the world and giving space for the sofa
            to take over. <br></br>
            <br></br>This workshop is not about learning – sofas are objects and
            they don’t need to learn. They also don’t feel anything. This
            workshop will be about simply being and connecting. <br></br>
            <br></br> The workshop is led by Marija Baranauskaite. This workshop
            is recommended for couples of one human and one sofa. It can be held
            both physically and online.
          </p>
        </Box>
      </Box>
      <hr
        style={{
          height: 0.5,
          backgroundColor: "#000",
          margin: "40px 0px",
        }}
      />
    </Grid>
  );
}

export default ContactImpro;
