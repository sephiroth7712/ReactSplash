import React from "react";
const UnsplashImage = ({ url, index, desc, showPost, bordered }) => (
  <div
    className={"card" + (bordered === true ? " bordered" : "-modal")}
    key={index}
    onClick={showPost}
  >
    <div className="caption">{desc == null ? "N/A" : desc}</div>
    <img
      className={"image" + (bordered === false ? "-modal" : "")}
      src={url}
      alt={desc}
    />
  </div>
);
export default UnsplashImage;
