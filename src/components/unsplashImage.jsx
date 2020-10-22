import React from "react";
const UnsplashImage = ({ url, index, desc, showPost, bordered }) => (
  <div
    className={"card " + (bordered === true ? "bordered" : "")}
    key={index}
    onClick={showPost}
  >
    <div className="caption">{desc == null ? "N/A" : desc}</div>
    <img className="image" src={url} alt={desc} />
  </div>
);
export default UnsplashImage;
