import React from "react";
import ReactDom from "react-dom";
import UnsplashImage from "../unsplashImage/unsplashImage";
import "./postModal.css";

// Component for displaying specific image post as a modal
const Modal = ({ handleClose, show, image, index }) => {
  const showHideClassName =
    show === index ? "modal display-block" : "modal display-none";
  console.log(image);
  return ReactDom.createPortal(
    <>
      <div className={showHideClassName}>
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
  );
};
export default Modal;
