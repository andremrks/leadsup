import { useRef } from "react";
import "./contato.css";

import emailjs from "@emailjs/browser";

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3kyyorn",
        "template_fe8v7me",
        form.current,
        "RIRBoiRM5_u4twJKk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contato" className="leadsup__contato">
      <div className="leadsup__contato-container">
        <h1>Vamos juntos escalar o seu negócio!</h1>
        <p>Contato</p>
        <div className="leadsup__contato-formContainer">
          <form
            className="leadsup__contato-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" name="name" placeholder="Digite seu nome" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Digite seu telefone"
            />
            <input
              id="website"
              type="text"
              name="website"
              placeholder="Qual o site da sua empresa?"
            />

            <select className="leadsup__contato-option" id="type" name="type">
              <option value="" selected="" disabled="">
                Sua empresa é B2B ou B2C?
              </option>
              <option value="B2B">B2B</option>
              <option value="B2C">B2C</option>
            </select>
            <select
              className="leadsup__contato-option"
              id="number"
              name="number"
            >
              <option value="" selected="" disabled="">
                Quantos funcionários sua empresa possui?
              </option>
              <option value="1-10">1-10</option>
              <option value="10-30">10-30</option>
              <option value="30-50">30-50</option>
              <option value="30-50">50-100</option>
              <option value="30-50">100+</option>
            </select>
            <select
              className="leadsup__contato-option"
              id="solution"
              name="solution"
            >
              <option value="" selected="" disabled="">
                Que tipo de solução você necessita para sua empresa?
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
              <option value="Ambas soluções">Ambas soluções</option>
            </select>
            <input
              id="button"
              type="submit"
              value="Enviar"
              onSubmit={sendEmail}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
