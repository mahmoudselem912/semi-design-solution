import React from "react";
import logo from "../assets/semi2.png";
import BtnText from "../buttons/btn-text";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-main">
      <img src={logo} alt="logo" className="nav-main__img" />

      <BtnText name="HOME" href="home"/>
      <BtnText name="ABOUT US" href="about"/>
      <BtnText name="DIGITAL SERVICES" href="degital-services"/>
      <BtnText name="OUR PORTFOLIO" href="portfolio"/>
      <BtnText name="PARTTNERS" href="parttners"/>
      <BtnText name="BLOG" href="blog"/>
    </div>
  );
};

export default Nav;
