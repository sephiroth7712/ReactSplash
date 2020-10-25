import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scrollToTop.css";
const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  });
  const [showScroll, setShowScroll] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      console.log("happened");
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollToTop;
