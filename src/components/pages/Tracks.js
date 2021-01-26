import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import play from "../images/play.svg";
import pause from "../images/pause.svg";
import tracks from "../stylesheets/tracks.css";
import allAround from "../tracks/allAround.mp3";
import ReactPlayer from "react-player";
import doorsAreYouOk from "../tracks/doorsAreYouOk.mp3";
import PlayerControlers from "../playerControlers/PlayerControlers";

const useStyles = makeStyles({
  playerWrapper: {
    width: "50%",
    position: "relative",
  },
});

function Tracks() {
  const classes = useStyles();

  // let audio = new Audio(allAround);

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
          <Box
            className="trackTitle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
              onClick={() => audio.play()}
            />

            <img
              src={pause}
              alt="pause"
              id="play"
              style={{ marginRight: "10px" }}
              onClick={() => audio.pause()}
            /> */}

            <h2 style={{ marginRight: "10px" }}>Cuddle You</h2>
            {/* <h2 style={{ fontWeight: "100" }}>5:00 min</h2> */}
          </Box>

          <Box className={classes.playerWrapper}>
            <ReactPlayer
              url={allAround}
              width="400px"
              height="50px"
              playing={false}
              controls={true}
            />
          </Box>
          <Box className="trackDescription">
            <p>
              This song was made in France by Marija. In this song she expresses
              her feelings towards and dreams about sofas of the world.{" "}
            </p>
          </Box>
        </Box>
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
            {/* <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
            /> */}
            <h2 style={{ marginRight: "10px" }}>Doors, are you ok?</h2>
            {/* <h2 style={{ fontWeight: "100" }}>2:00 min</h2> */}
          </Box>

          <ReactPlayer
            url={doorsAreYouOk}
            width="400px"
            height="50px"
            playing={false}
            controls={true}
          />

          <Box className="trackDescription">
            <p>
              This song is a collaboration between Marija, Mark and the doors of
              PAF (Performing Arts Forum). Marija always felt like sofa-type
              personality, whilst Mark found out he is a door type personality.
              Thus, they have decided to invite the doors of PAF to help with
              the Soundtrack for Sofas. It is never clear what objects are
              feeling or saying, or whether they have any consciousness at all.
              Because of this not-knowing, the music of doors is melancholic and
              sad.
            </p>
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
          <Box
            className="trackTitle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
            />
            <h2 style={{ marginRight: "10px" }}>
              Party of doors with a bit of whales and babies
            </h2>
            <h2 style={{ fontWeight: "100" }}>3:00 min</h2>
          </Box>

          <Box className="trackDescription">
            <p>
              Whilst exploring door sounds, Marija’s friend shared the
              soundtrack of her baby. This made Marija and Mark recognize the
              intrinsic similarity between the sounds of doors and babies (and
              later on, whales) – we don’t know what they say, but we can party.
            </p>
          </Box>
        </Box>
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
            <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
            />
            <h2 style={{ marginRight: "10px" }}>
              Human feedbacks and opinions on the sofa project
            </h2>
            <h2 style={{ fontWeight: "100" }}>2:59 min</h2>
          </Box>
          <Box className="trackDescription">
            <p>
              People always have a lot of questions and feedback about the sofa
              project. During her solo show, Marija began collecting these human
              opinions, which she decided to share with the sofas of the world.
            </p>
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
            <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
            />
            <h2 style={{ marginRight: "10px" }}>
              Sofas and Human Touch Party{" "}
            </h2>
            <h2 style={{ fontWeight: "100" }}>6:06 min</h2>
          </Box>
          <Box className="trackDescription">
            <p>
              Humans are always interested in words and ideas. Sofas don’t care
              about words and ideas (most probably). Marija discovered that it
              is easier to connect with the public of sofas through touch and
              physicality. While doing contemporary dance contact improvisation
              research with sofas she has found that the sounds made by the
              touch of humans and sofas reveals a lot about their relationship.
              This was the moment when the idea of the soundtrack was conceived.
              With the help of object-composer Mikas, she turned these sounds
              into another party song.
            </p>
          </Box>
        </Box>
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
            <img
              src={play}
              alt="play"
              id="play"
              style={{ marginRight: "10px" }}
            />
            <h2 style={{ marginRight: "10px" }}>
              Guided Meditation towards stillness for sofas and half sofas half
              humans
            </h2>
            <h2 style={{ fontWeight: "100" }}>5:00 min</h2>
          </Box>
          <Box className="trackDescription">
            <p>
              Relax. Make yourself as comfy as you can. Dive in. This is a
              meditation made for both sofas and humans or half sofas half
              humans. The intention of this meditation is to guide the audience
              to total stillness and experience the pleasure of this state.
            </p>
          </Box>
        </Box>

        <Box className={classes.playerWrapper}>
          {/* <ReactPlayer
            url={allAround}
            width="400px"
            height="50px"
            playing={true}
            controls={true}
          /> */}
          <PlayerControlers />
        </Box>
      </Box>
    </Grid>
  );
}

export default Tracks;
