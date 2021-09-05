import React from "react";
import video from "../../assets/using-mobile-phone.mp4";
import Btn from "../../buttons/btn";
import "./about.css";

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="bg-video">
        <video className="video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h2 className="heading-secondary">ABOUT THE INSTITUTION</h2>
        <h3 className="heading-tertiary">
          Serving all business development needs
        </h3>

        <p className="text">
          <i>Semi-Design Solutions</i> is an IT company that offers modern software
          development solutions, web design and development and smart
          applications, advanced e-commerce solutions, corporate brands,
          security and access control systems, corporate training, consulting,
          information technology and digital marketing services. Our
          organization provides cost-effective services that enable its...
        </p>

        <Btn text="Learn More" utility="btn--gray"/>
      </div>
    </div>
  );
};

export default About;
