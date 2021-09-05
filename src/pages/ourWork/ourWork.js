import React from "react";
import { Card } from "react-bootstrap";
import "./ourWork.css";
import logo1 from "../../assets/photo1.jpg";
import logo2 from "../../assets/photo2.jpg";
import logo3 from "../../assets/photo3.jpg";
import logo4 from "../../assets/photo4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurWork = () => {
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
    <div className="ourWork-page" id="portfolio">
      <h2 className="heading-work">OUR WORK</h2>
      <p className="text-work">Our Latest Creative Work</p>

      <Carousel responsive={responsive} infinite={true}>
        <Card>
          <Card.Img
            variant="top"
            className="card-img"
            src={logo1}
          />
          <Card.Body>
            <Card.Title style={{ color: "gray", fontSize: "1.5rem" }}>
              Live Work Create
            </Card.Title>

            <Card.Text style={{ color: "gray", fontSize: "1rem" }}>
              Graphic design
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            className="card-img"
            src={logo2}
          />
          <Card.Body>
            <Card.Title style={{ color: "gray", fontSize: "1.5rem" }}>
              Life is easy
            </Card.Title>
            <Card.Text style={{ color: "gray", fontSize: "1rem" }}>
              Graphic design
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            className="card-img"
            src={logo3}
          />
          <Card.Body>
            <Card.Title style={{ color: "gray", fontSize: "1.5rem" }}>
              Live Work Create
            </Card.Title>

            <Card.Text style={{ color: "gray", fontSize: "1rem" }}>
              Graphic design
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            className="card-img"
            src={logo4}
          />
          <Card.Body>
            <Card.Title style={{ color: "gray", fontSize: "1.5rem" }}>
              Live Work Create
            </Card.Title>

            <Card.Text style={{ color: "gray", fontSize: "1rem" }}>
              Web Site
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </div>
  );
};

export default OurWork;
