import React from "react";
import "./estrategia.css";

import { GiChart } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiOnTarget } from "react-icons/gi";

const Estrategia = () => {
  return (
    <section id="estrategia" className="leadsup__estrategia">
      <div className="leadsup__estrategia-container">
        <h1>Nossas estratégias abrangem:</h1>
        <div className="leadsup__estrategia-cards">
          <div className="leadsup__estrategia-card">
            <div className="leadsup__estrategia-card_img">
              <GiChart />
            </div>
            <h1>Prospector</h1>
            <div className="leadsup__estrategia-card_text">
              <p>
                Os projetos passam constantemente por uma equipe especializada
                de análise de dados para adquirir sempre a melhor performance.
              </p>
            </div>
          </div>
          <div className="leadsup__estrategia-card">
            <div className="leadsup__estrategia-card_img">
              <HiOutlineLightBulb />
            </div>
            <h1>Inteligência Comercial</h1>
            <div className="leadsup__estrategia-card_text">
              <p>
                Consultores com habilidades e técnicas de vendas com o objetivo
                de gerar o máximo de oportunidades qualiﬁcadas.
              </p>
            </div>
          </div>
          <div className="leadsup__estrategia-card">
            <div className="leadsup__estrategia-card_img">
              <GiOnTarget />
            </div>
            <h1>Data Science</h1>
            <div className="leadsup__estrategia-card_text">
              <p>
                Através do ProspectNow, Utilizamos uma tecnologia própria de IA
                que nos permite prospectar o ICP ideal para o seu negócio e
                gerar oportunidades inteligentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estrategia;
