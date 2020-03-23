import React from 'react';
import Hero from "./components/hero"
import Clients from "./components/clients"
import AboutUs from "./components/aboutus"
import Services from "./components/services"

import './App.scss';
import "./styles/mobile.scss"


function App() {
  return (
    <>
      <Hero />
      <Clients/>
      <AboutUs />
      <Services />
    </>
  );
}

export default App;
