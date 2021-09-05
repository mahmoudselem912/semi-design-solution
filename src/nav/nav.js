import React from "react";
import logo from "../assets/semi2.png";
import BtnText from "../buttons/btn-text";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-main">
      <img src={logo} alt="logo" className="nav-main__img" />

      <BtnText name="HOME" />

      <BtnText name="ABOUT US" />
      <BtnText name="DIGITAL SERVICES" />
      <BtnText name="OUR PORTFOLIO" />
      <BtnText name="PARTTNERS" />
      <BtnText name="BLOG" />
    </div>
  );
};

export default Nav;
