import "./App.scss"
import Navbar from "./Components/NavigationBar/Navbar"
import Hero from "./Components/hero/Hero"
import Parallax from "./Components/parallax/Parallax"
import About from "./Components/about/About"

function App() {

  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><Parallax type="About" /></section>
      <section>
        <About />
      </section>
      <section>Skills</section>
      <section id="Projects"><Parallax type="Projects" /></section>
      <section>Projects</section>
      <section>Contact</section>

      {/* <Test /> */}
    </div>
  )
}

export default App
