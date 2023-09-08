import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Services";
import Mentors from "./components/Mentors";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Mentors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
