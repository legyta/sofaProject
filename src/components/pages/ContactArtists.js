import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import workshops from "../stylesheets/workshops.css";
import workshopsImage from "../images/workshopsImage.svg";
import contactArtists from "../images/contactArtists.svg";

function ContactArtists() {
  return (
    <Grid container style={{ backgroundColor: "#F9D65C" }}>
      <Link to="/contact-artists"></Link>
      <Box className="photoAndDescription">
        <Box
          className="workshopPhoto"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={contactArtists} alt="soundtracks" id="workshopPhoto" />
        </Box>
        <Box className="description">
          <p>
            If you have human opinions to share or you are considering the
            possibility of inviting artists to perform for your sofas or other
            furniture - here you have the list of creators working for objects
            and their professional object-oriented specializations. You can
            contact the email of Performing for Sofas for further inquiries.
            <br></br>
            <br></br>
          </p>
        </Box>
      </Box>
    </Grid>
  );
}

export default ContactArtists;
