import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import aboutProjectGallery from "../stylesheets/aboutProjectGallery.css";
import sofaMariaHead2 from "../images/sofaMariaHead2.png";
import mariaBlanket from "../images/mariaBlanket.png";
import sofaBrown from "../images/sofaBrown.png";
import sofaHeadGrass from "../images/sofaHeadGrass.jpg";

const images = [{ original: { sofaHeadGrass }, thumbnail: { sofaHeadGrass } }];

class AboutProjectGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default AboutProjectGallery;
