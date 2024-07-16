import React from "react";
import "./App.scss";
import Navbar from "./Components/NavigationBar/Navbar";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="scroll-container">
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <Parallax type="About" />
      </section>

      <section className="about-no-snap">
        <About />
      </section>

      <section id="Skills" className="skills-no-snap">
        <Skills />
      </section>

      <section id="Projects">
        <Parallax type="Projects" />
      </section>

      <div className="no-snap">
      <Projects />
      </div>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
