import React from "react";
import ReactDom from "react-dom";
import UnsplashImage from "./unsplashImage";
import "./postModal.css";
const Modal = ({ handleClose, show, content, index }) => {
  const showHideClassName =
    show === index ? "modal display-block" : "modal display-none";

  return ReactDom.createPortal(
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <UnsplashImage
            url={content.urls.regular}
            index={null}
            key={null}
            desc={content.alt_description}
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
