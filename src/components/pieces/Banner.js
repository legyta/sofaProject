import React from "react";
import "../stylesheets/bannerItem.css";
import BannerItem from "./BannerItem";

const info = [
  {
    text: "No Humans",
  },
  {
    text: "Only Objects!",
  },
  {
    text: "Human go away!",
  },
];

const Banner = () => (
  <main className="banner-wrap w-100">
    <div className="banner">
      {info.map((item) => (
        <BannerItem key={item.text} text={item.text} />
      ))}
    </div>
  </main>
);

export default Banner;
