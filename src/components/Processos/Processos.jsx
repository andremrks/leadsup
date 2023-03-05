import React from "react";
import "./processos.css";

import { Fade } from "react-awesome-reveal";

import kickoff from "../../assets/images/kickoff.png";
import fluxo from "../../assets/images/fluxo.png";
import validacao from "../../assets/images/validacao.png";
import start from "../../assets/images/start.png";

const Processos = () => {
  return (
    <section id="processos" className="leadsup__processos">
      <div className="leadsup__processos-container">
        <div className="leadsup__processos-etapa">
          <div className="leadsup__processos-img">
            <img src={kickoff} alt="Kickoff" />
          </div>
          <div className="leadsup__processos-text">
            <p>Reunião estratégica focada em resultados.</p>
          </div>
        </div>
        <div className="leadsup__processos-etapa">
          <div className="leadsup__processos-img">
            <img src={fluxo} alt="Fluxo" />
          </div>
          <div className="leadsup__processos-text">
            <p>Criação de um fluxo de comunicação eficaz.</p>
          </div>
        </div>
        <div className="leadsup__processos-etapa">
          <div className="leadsup__processos-img">
            <img src={validacao} alt="Validação" />
          </div>
          <div className="leadsup__processos-text">
            <p>Otimização da geração de leads.</p>
          </div>
        </div>
        <div className="leadsup__processos-etapa">
          <div className="leadsup__processos-img">
            <img src={start} alt="Start" />
          </div>
          <div className="leadsup__processos-text">
            <p>Resultados imediatos!</p>
          </div>
        </div>
      </div>
      <Fade />
    </section>
  );
};

export default Processos;
