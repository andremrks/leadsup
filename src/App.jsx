import React from "react";
import {
  Contato,
  Footer,
  Navbar,
  Parceiros,
  Servicos,
  Hero,
  Estrategia,
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
      <Contato />
      <Footer />
    </>
  );
};

export default App;
