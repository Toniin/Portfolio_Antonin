import { FunctionComponent } from "react";
import TopSide from './../components/TopSide';
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home: FunctionComponent = () => {
  return (
    <main>
      <TopSide />
      <Skills />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
