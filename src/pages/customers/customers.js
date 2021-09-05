import React from "react";
import "./customers.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo1 from '../../assets/apple-logo.png';
import logo2 from '../../assets/ge-logo.png';
import logo3 from '../../assets/nike-logo.png'
import logo4 from '../../assets/pepsi-logo.png'
import logo5 from '../../assets/verizon-logo.png';
import logo6 from '../../assets/walt-disney-logo.png'

const Customers = () => {
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
    <div className="customers-page" id="parttners">
      <h2 className="heading-customers">OUR HAPPY CUSTOMERS</h2>
      <p className="text-customers">Some of our Clients</p>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
      >
          <img src={logo1} alt="logo" className="company-logo"/>
          <img src={logo2} alt="logo" className="company-logo"/>
          <img src={logo3} alt="logo" className="company-logo"/>
          <img src={logo4} alt="logo" className="company-logo"/>
          <img src={logo5} alt="logo" className="company-logo"/>
          <img src={logo6} alt="logo" className="company-logo"/>
      </Carousel>
    </div>
  );
};

export default Customers;
