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
            <h1>Inbound Marketing</h1>
            <div className="leadsup__servicos-card_text">
              <p>
                Automações e robôs para construir uma base de leads ﬁel e
                engajada.
              </p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={mkt} alt="" />
            </div>
            <h1>Marketing de Conteúdo</h1>
            <div className="leadsup__servicos-card_text">
              <p>
                Criação de conteúdos focados em sua persona (cliente ideal) e
                otimizados para os mecanismos de busca.
              </p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={seo} alt="" />
            </div>
            <h1>SEO</h1>
            <div className="leadsup__servicos-card_text">
              <p>Seu site e conteúdos nas primeiras páginas do Google.</p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={ads} alt="" />
            </div>
            <h1>ADS</h1>
            <div className="leadsup__servicos-card_text">
              <p>Aumento no volume de tráfego focado na sua persona.</p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={datascience} alt="" />
            </div>
            <h1>Data Science</h1>
            <div className="leadsup__servicos-card_text">
              <p>
                Os projetos passam por uma equipe especializada de análise de
                dados para adquirir sempre a melhor performance.
              </p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
          <div className="leadsup__servicos-card">
            <div className="leadsup__servicos-card_img">
              <img src={prevenda} alt="" />
            </div>
            <h1>Pré-vendas</h1>
            <div className="leadsup__servicos-card_text">
              <p>
                SDRs com habilidades e técnicas de vendas com objetivo de
                agendar o máximo de reuniões qualificadas.
              </p>
            </div>
            <div className="leadsup__servicos-card_arrow">
              <AiOutlineArrowDown
                size={25}
                style={{ color: "var(--color-white)" }}
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Servicos;
