import React from "react";
import "./servicos.css";

import { Fade } from "react-awesome-reveal";
import { AiOutlineArrowDown } from "react-icons/ai";

import inbound from "../../assets/images/1--inbound-marketing.png";
import mkt from "../../assets/images/2--marketing-de-conteudo.png";
import seo from "../../assets/images/3--SEO.png";
import ads from "../../assets/images/4--Ads.png";
import datascience from "../../assets/images/1- ícone data science.png";
import prevenda from "../../assets/images/2- ícone pré-vendas.png";

const Servicos = () => {
  return (
    <section id="servicos" className="leadsup__servicos">
      <h1>Veja como podemos atuar no seu negócio:</h1>
      <p>Gere mais leads qualificados, agendamentos de reuniões e vendas!</p>
      <Fade Fade delay={1e3} direction="left" cascade damping={1e-1}>
        <div className="leadsup__servios-container">
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={inbound} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={mkt} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={seo} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={ads} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={datascience} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={prevenda} alt="" />
            </div>
            <AiOutlineArrowDown
              size={25}
              style={{ color: "var(--color-white)" }}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Servicos;
