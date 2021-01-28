import React from "react";
import "../stylesheets/bannerItem.css";

function BannerItem(props) {
  return <div className="bannerItem">{props.text}</div>;
}

export default BannerItem;
