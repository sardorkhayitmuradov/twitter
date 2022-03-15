import React from "react";
import Images from "../../../utils/images/twitterlogo.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <>
      <a href="index.html" className="header-logo">
        <img src={Images} alt="Twitter Logo" width="40" height="33" />
      </a>
    </>
  );
};

export default Logo;
