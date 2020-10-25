import React from "react";
import TimeAgo from "react-timeago";
import likesIcon from "../../assets/heart.png";
import "./unsplashImage.css";

// Component to display images and caption
const UnsplashImage = ({
  url,
  desc,
  showPost,
  profilePicture,
  bordered,
  username,
  created_at,
  likes,
}) => (
  <div
    className={"card" + (bordered === true ? " bordered" : "-modal")}
    onClick={showPost}
  >
    <div className="user-details">
      <img
        alt="user profile pic"
        className="user-avatar"
        src={profilePicture}
      />
      <span className="username">{"@" + username}</span> •{" "}
      <TimeAgo date={created_at} />
    </div>
    <div
      title={desc == null ? "N/A" : desc}
      className={"caption" + (bordered === true ? " cardview" : "")}
    >
      {desc == null ? "N/A" : desc}
    </div>
    <img
      className={"image" + (bordered === false ? "-modal" : "")}
      src={url}
      alt={desc}
    />
    <div className="likes">
      <img alt="" className="likes-icon" src={likesIcon} />
      {likes}
    </div>
  </div>
);
export default UnsplashImage;
