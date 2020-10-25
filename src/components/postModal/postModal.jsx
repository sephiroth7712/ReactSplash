import React, { useEffect } from "react";
import ReactDom from "react-dom";
import UnsplashImage from "../unsplashImage/unsplashImage";
import "./postModal.css";

// Component for displaying specific image post as a modal
const Modal = ({ handleClose, show, image, index }) => {
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    window.onclick = function (event) {
      if (event.target === document.getElementById("modal")) {
        handleClose();
      }
    };
  });

  const handleKeyUp = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        handleClose();
        window.removeEventListener("keyup", handleKeyUp, false);
      },
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };
  return show === index
    ? ReactDom.createPortal(
        <>
          <div className="modal" id="modal">
            <section className="modal-main">
              <UnsplashImage
                url={image.urls.regular}
                username={image.user.username}
                profilePicture={image.user.profile_image.small}
                desc={image.description || image.alt_description}
                created_at={image.created_at}
                likes={image.likes}
                bordered={false}
                showPost={null}
              />
              <button
                type="button"
                className="modal-button"
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </section>
          </div>
        </>,
        document.getElementById("portal")
      )
    : null;
};
export default Modal;
