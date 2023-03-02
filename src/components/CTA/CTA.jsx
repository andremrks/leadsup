import React from "react";
import "./cta.css";
import ctaImg from "../../assets/images/ilustração1.png";

const CTA = () => {
  return (
    <section className="leadsups__cta">
      <div className="leadsup__cta-container">
        <div className="leadsup__cta-content">
          <h1>Inteligência comercial ao seu dispor!</h1>
          <p>
            Se você está buscando uma maneira de aumentar sua presença no
            mercado e alcançar resultados reais, você veio ao lugar certo!
            <br /> Somos uma equipe especializada em inteligência comercial, que
            está dedicada a trazer soluções sob medida para atender às suas
            necessidades específicas.
            <br />
            Com nosso serviço especializado, você pode contar com resultados
            tangíveis e um aumento na sua base de clientes. Não perca mais
            tempo, nós podemos ajudar a alcançar o sucesso que você merece!
          </p>
          <button>Contato</button>
        </div>
        <div className="leadsup__cta-image">
          <img src={ctaImg} alt="ilustração" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
