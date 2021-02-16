import React from "react";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";

const fbURL = "https://www.facebook.com/performingforsofas";

function changeBackground(e) {
  e.target.style.color = "#F9D65C";
}

function usualBackground(e) {
  e.target.style.color = "#000";
}

function FbContact() {
  return (
    <Grid>
      <FacebookIcon
        style={{ margin: "0px 5px" }}
        onMouseOver={changeBackground}
        onMouseLeave={usualBackground}
        onClick={() => window.open(fbURL, "_blank")}
      />
    </Grid>
  );
}

export default FbContact;
