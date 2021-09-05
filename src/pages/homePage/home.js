import React from "react";
import video from "../../assets/video.mp4";
import Btn from "../../buttons/btn";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-page">
        <div className="content">
          <h2 className="heading-home">
            We believe that digital world is the solution to all obstacles
          </h2>
          <p className="heading-sub">
            Semi-Design Solutions is an information technology company that
            provides modern solutions for software development, design and
            development of websites and smart applications, advanced e-commerce
            solutions, corporate branding, security and access control systems,
            corporate training, consulting, information technology and digital
            marketing services.
          </p>
        </div>
        <div className="bg-video">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="btn-container">
        <Btn text="GET STARTED" />
      </div>
    </div>
  );
};

export default Home;
