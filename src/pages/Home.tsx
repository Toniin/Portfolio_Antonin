import { FunctionComponent } from "react";
import Banner from '../components/Banner';
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home: FunctionComponent = () => {
  return (
    <main>
      <Banner />
      <Skills />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
