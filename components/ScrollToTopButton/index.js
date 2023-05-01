import React, { useState, useEffect } from "react";
import styles from "./style.module.css"; // Optional: for styling
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(scrollTop > 2000); // Adjust the scroll position threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${showButton ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      <ExpandLessIcon />
    </button>
  );
};

export default ScrollToTopButton;
