import React from "react";
import "./parceiros.css";

import { Carousel } from "react-bootstrap";

import parceiro1 from "../../assets/images/parceiro1.png";
import parceiro2 from "../../assets/images/parceiro2.png";
import parceiro3 from "../../assets/images/parceiro3.png";
import parceiro4 from "../../assets/images/parceiro4.png";
import parceiro5 from "../../assets/images/parceiro5.png";

const Parceiros = () => {
  return (
    <section id="parceiros" className="leadsup__parceiros">
      <div className="leadsup__parceiros-container">
        <div className="leadsup__parceiros-text">
          <h1>Parceiros</h1>
          <p>Conheça algumas das empresas que já impulsionaram conosco:</p>
        </div>
        <Carousel
          className="leadsup__parceiros-carousel"
          indicators={false}
          controls={false}
        >
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={parceiro1} alt="Parceiro 1" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={parceiro2} alt="Parceiro 2" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={parceiro3} alt="Parceiro 3" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={parceiro4} alt="Parceiro 4" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={parceiro5} alt="Parceiro 5" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Parceiros;
