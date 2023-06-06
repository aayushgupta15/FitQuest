import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import MyForm from "./components/form";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <MyForm />
    </div>
  );
}

export default App;
