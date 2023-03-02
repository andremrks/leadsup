import React from "react";
import "./hero.css";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="leadsup__hero-container">
      <Fade Fade delay={1e3} direction="up" cascade damping={1e-1}>
        <div className="leadsup__hero-info">
          <p>Quer impulsionar o seu negócio?</p>
          <h1>
            Comece agora a gerar
            <br />
            <span> mais vendas</span>
            <br /> para sua empresa!
          </h1>
          <button>Quero Aumentar Minha Vendas</button>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
