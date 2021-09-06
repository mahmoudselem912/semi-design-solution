import React from "react";
import "./footer.css";
import facebookLogo from "../assets/facebook.png";
import instgramLogo from "../assets/instgram.png";
import twitterLogo from '../assets/twitter.png';
import callLogo from '../assets/call.jpg';
import sdsLogo from '../assets/sds.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-container">
        <img src={facebookLogo} alt="facebook" className="icon" />
        <img src={instgramLogo} alt="instgram" className="icon" />
        <img src={twitterLogo} alt="twitter" className="icon" />
        <img src={callLogo} alt="call" className="icon" />
      </div>

      <div className="info-container">
          <div className="info">About Us</div>
          <div className="info">Accessibility</div>
          <div className="info">Privacy</div>
          <div className="info">Location</div>
          <div className="info">Jobs</div>
      </div>

      <img src={sdsLogo} alt="logo" className="logo"/>

      <div className="copyRight">All CopyRights Saved @2021</div>
    </div>
  );
};

export default Footer;
