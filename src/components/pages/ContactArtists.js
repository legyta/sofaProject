import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import contactArtistsImage from "../images/contactArtistsImage.svg";
import ContactDetails from "../pieces/ContactDetails";
import ArtistsList from "../pieces/ArtistsList";
import doors from "../images/doors.PNG";

function ContactArtists() {
  return (
    <Grid container style={{ backgroundColor: "#599CD9" }}>
      <Link to="/about-creator"></Link>
      <Box className="photoAndDescription">
        <Box
          className="photo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            style={{ marginTop: "40px" }}
            src={contactArtistsImage}
            alt="soundtracks"
            id="contactArtistsPhoto"
          />
        </Box>
        <Box className="description">
          <h1>
            If you have human opinions to share or you are considering the
            possibility of inviting artists to perform for your sofas or other
            furniture - here you have the list of creators working for objects
            and their professional object-oriented specializations.
            <br></br>
            <br></br>
            You can contact us for further inquiries
            <ContactDetails />
          </h1>
        </Box>
      </Box>
      <ArtistsList />
      <a href="/home">
        <img src={doors} alt="doors" id="doors" />
      </a>
    </Grid>
  );
}

export default ContactArtists;
