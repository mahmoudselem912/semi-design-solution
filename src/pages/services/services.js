import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import video from "../../assets/mobile-marketing.mp4";
import video1 from "../../assets/social-media.mp4";
import video2 from "../../assets/e-commerce.mp4";
import video3 from "../../assets/mobile-app-icon.mp4";
import video4 from "../../assets/hosting.mp4";
import "./services.css";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="services-page" id="degital-services">
      <h2 className="heading-services">OUR SERVICES</h2>
      <p className="text-services">LEARN ABOUT OUR SERVICES</p>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
      >
        <div className="bg-video">
          <video className="video-carousel" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <p className="video-text-special">social media marketing</p>
        </div>

        <div className="bg-video">
          <video className="video-carousel" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
          <p className="video-text">Digital Marketing Solutions</p>
        </div>

        <div className="bg-video">
          <video className="video-carousel" autoPlay loop muted>
            <source src={video2} type="video/mp4" />
          </video>
          <p className="video-text">E-commerce Solutions</p>
        </div>

        <div className="bg-video">
          <video className="video-carousel" autoPlay loop muted>
            <source src={video3} type="video/mp4" />
          </video>
          <p className="video-text">Mobile App Development</p>
        </div>

        <div className="bg-video">
          <video className="video-carousel" autoPlay loop muted>
            <source src={video4} type="video/mp4" />
          </video>
          <p className="video-text">Hosting Services</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
