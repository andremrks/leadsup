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
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CTA />
      <Servicos />
      <Estrategia />
      <Parceiros />
      <Resultados />
      <Contato />
      <Footer />
    </>
  );
};

export default App;
