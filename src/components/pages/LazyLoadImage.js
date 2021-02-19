// import React from "react";

// const LazyLoadImage = (lowQualitySrc, highQualitySrc) => {
//   const [src, setSrc] = React.useState(lowQualitySrc);
//   React.useEffect(() => {
//     setSrc(lowQualitySrc);
//     const img = new Image();
//     img.src = highQualitySrc;
//     img.onload = () => {
//       setSrc(highQualitySrc);
//     };
//   }, [lowQualitySrc, highQualitySrc]);
//   return [src, { blur: src === lowQualitySrc }];
// };
// export default LazyLoadImage;
import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// (() => {
//   "use strict";
//   // Page is loaded
//   const objects = document.getElementsByClassName("asyncImage");
//   Array.from(objects).map((item) => {
//     // Start loading image
//     const img = new Image();
//     img.src = item.dataset.src;
//     // Once image is loaded replace the src of the HTML element
//     img.onload = () => {
//       item.classList.remove("asyncImage");
//       return item.nodeName === "IMG"
//         ? (item.src = item.dataset.src)
//         : (item.style.backgroundImage = `url(${item.dataset.src})`);
//     };
//   });
// })();

function LazyLoadImage() {
  return (
    <Grid>
      <Link to="/picture"></Link>
      <h1>hi</h1>
      {/* <img
        class="asyncImage"
        src="../images/backgroundResized.png"
        data-src="../images/workshops_title.png"
        alt="Beautiful landscape sunrise"
      ></img> */}
    </Grid>
  );
}

export default LazyLoadImage;
