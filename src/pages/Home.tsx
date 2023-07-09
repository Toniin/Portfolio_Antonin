import { FunctionComponent } from "react";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: FunctionComponent = () => {
  return (
    <main>
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
