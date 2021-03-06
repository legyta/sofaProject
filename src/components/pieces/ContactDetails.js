import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import FbContact from "./FbContact";
import contactDetails from "../stylesheets/contactDetails.css";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}

function ContactDetails() {
  return (
    <Grid>
      <Box
        className="contactDetails"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <EmailIcon
          onMouseOver={changeBackground}
          onMouseLeave={usualBackground}
          onClick={(event) =>
            (window.location.href =
              "mailto:performingforsofas@gmail.com?subject=Performing for Sofas")
          }
        />
        <FbContact />
        <CallIcon
          style={{ margin: "0px 5px 0px 0px" }}
          onMouseOver={changeBackground}
          onMouseLeave={usualBackground}
        />{" "}
        <p> +37065295560</p>
      </Box>
    </Grid>
  );
}

export default ContactDetails;
