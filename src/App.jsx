import React from "react";
import { Contato, Footer, Navbar, Parceiros, Servicos } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Servicos />
      <Parceiros />
      <Contato />
      <Footer />
    </>
  );
};

export default App;
