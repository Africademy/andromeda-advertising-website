import React from "react";
import Hero from "./hero";
import Clients from "./clients";
import AboutUs from "./aboutus";
import Services from "./services";
import Testimonials from "./testimonials";
import Excellence from "./excellence";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
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
};

export default Home;
