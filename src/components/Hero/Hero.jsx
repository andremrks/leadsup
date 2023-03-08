import React from "react";
import "./hero.css";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="leadsup__hero-container">
      <Fade delay={1e2} direction="up" cascade damping={1e-1}>
        <div className="leadsup__hero-info">
          <p>Quer impulsionar o seu negócio?</p>
          <h1>
            Comece agora a gerar
            <br />
            <span> mais vendas</span>
            <br /> para sua empresa!
          </h1>
          <a href="#contato">
            <button>Quero Aumentar Minha Vendas </button>
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
