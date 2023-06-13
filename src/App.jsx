import React from "react";
import './App.css'
import { Sobre } from './components/Sobre.jsx'
import { Projetos } from './components/Projetos.jsx'
import { Tecnologias } from './components/Tecnologias.jsx'
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="">
      <Nav></Nav>
      <Intro></Intro>
      <Projetos></Projetos>
      <Tecnologias></Tecnologias>
      <Sobre></Sobre>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App;



