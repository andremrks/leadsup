import React from "react";
import {
  Contato,
  Footer,
  Navbar,
  Parceiros,
  Servicos,
  Hero,
  Estrategia,
  Resultados,
  CTA,
  Vantagens,
  Processos,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CTA />
      <Servicos />
      <Vantagens />
      <Estrategia />
      <Processos />
      <Parceiros />
      <Resultados />
      <Contato />
      <Footer />
    </>
  );
};

export default App;
