import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import tracks from "../stylesheets/tracks.css";
import allAround from "../tracks/allAround.mp3";
import ReactPlayer from "react-player";
import doorsAreYouOk from "../tracks/doorsAreYouOk.mp3";
import babiesAndWhales from "../tracks/babiesAndWhales.mp3";
import feedbacks from "../tracks/feedbacks.mp3";
import sofasAndHuman from "../tracks/sofasAndHuman.mp3";
import sofaMeditation from "../tracks/sofaMeditation.mp3";
import CuddleYou from "../tracksDescription/CuddleYou";
import DoorsAreYouOkay from "../tracksDescription/DoorsAreYouOkay";
import PartyOfDoors from "../tracksDescription/PartyOfDoors";
import HumanFeedback from "../tracksDescription/HumanFeedback";
import SofasAndHuman from "../tracksDescription/SofasAndHuman";
import GuidedMeditation from "../tracksDescription/GuidedMeditation";

function Tracks() {
  return (
    <Grid style={{ margin: "40px 0px" }}>
      <Box className="tracks1">
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box className="trackTitle">
            <h2 style={{ marginBottom: " 10px" }}>Cuddle You</h2>
          </Box>
          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={allAround}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>

          <Box className="trackDescription">
            <CuddleYou />
          </Box>
        </Box>
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box className="trackTitle">
            <h2 style={{ marginBottom: " 10px" }}>Doors, are you ok?</h2>
          </Box>
          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={doorsAreYouOk}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>

          <Box className="trackDescription">
            <DoorsAreYouOkay />
          </Box>
        </Box>
      </Box>

      <Box className="tracks1">
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box className="trackTitle">
            <h2 style={{ marginBottom: "10px" }}>
              Party of doors with a bit of whales and babies
            </h2>
          </Box>

          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={babiesAndWhales}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>

          <Box className="trackDescription">
            <PartyOfDoors />
          </Box>
        </Box>
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box className="trackTitle">
            <h2 style={{ marginBottom: "10px" }}>
              Human feedbacks and opinions on the sofa project
            </h2>
          </Box>

          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={feedbacks}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>
          <Box className="trackDescription">
            <HumanFeedback />
          </Box>
        </Box>
      </Box>

      <Box className="tracks1" style={{ marginTop: "0px" }}>
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box
            className="trackTitle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h2 style={{ marginBottom: "10px" }}>
              Sofas and Human Touch Party{" "}
            </h2>
          </Box>

          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={sofasAndHuman}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>
          <Box className="trackDescription">
            <SofasAndHuman />
          </Box>
        </Box>
        <Box
          className="track1"
          style={{
            padding: "20px",
            margin: "20px",
          }}
        >
          <Box className="trackTitle">
            <h2 style={{ marginBottom: "10px" }}>
              Guided Meditation towards stillness for sofas and half sofas half
              humans
            </h2>
          </Box>

          <Box className="player-wrap">
            <ReactPlayer
              className="reactPlayer"
              url={sofaMeditation}
              width="280px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>
          <Box className="trackDescription">
            <GuidedMeditation />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Tracks;
