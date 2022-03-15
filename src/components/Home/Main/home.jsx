import React from "react";
import Logo from "../Logo/logo";
import Settings from "../Settings/Settings";
import Button from "../Button/button";
import "./home.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <Logo />
        <Settings />
        <Button />
        <span className="stick"></span>
      </div>
    </>
  );
}
export default Home;
