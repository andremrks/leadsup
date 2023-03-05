import React from "react";
import "./vantagens.css";

import { Fade } from "react-awesome-reveal";

import vantagensImg from "../../assets/images/vantagensImg.png";

const Vantagens = () => {
  return (
    <section id="vantagens" className="leadsup__vantagens">
      <div className="leadsup__vantagens-container">
        <div className="leadsup__vantanges-img">
          <img src={vantagensImg} alt="Vendedor com Ipad na mão" />
        </div>
        <div className="leadsup__vantagens-content">
          <h1>Vantagens em terceirizar sua prospecção:</h1>
          <Fade delay={1e2} cascade damping={1e-1}>
            <ul className="leadsup__vantagens-itens">
              <li className="leadsup__vantagens-itens_item">
                Solução contínua e estratégica de prospecção.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Redução de custos de venda.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Abordagem eficiente em menos tempo.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Prospecção em larga escala.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Fale com as pessoas certas.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Ajudamos a encontrar o cliente ideal.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Acompanhe seu progresso.
              </li>
              <li className="leadsup__vantagens-itens_item">
                Expandir seu negócio com grandes player do mercado.
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Vantagens;
