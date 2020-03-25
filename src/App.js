import React from 'react';
import Hero from "./components/hero"
import Clients from "./components/clients"
import AboutUs from "./components/aboutus"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import Excellence from "./components/excellence";
import Contact from "./components/contact";
import Footer from "./components/footer";

import './App.scss';
import "./styles/mobile.scss"


function App() {
  return (
    <>
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Testimonials />
      <Excellence />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
