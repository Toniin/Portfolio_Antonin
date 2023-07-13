import { FunctionComponent } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: FunctionComponent = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
