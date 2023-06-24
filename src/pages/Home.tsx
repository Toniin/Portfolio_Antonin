import { FunctionComponent } from "react";
import About from "../components/About";
import { Project } from "../components/Project";

const Home: FunctionComponent = () => {
  return (
    <main>
      <About />
      <Project />
    </main>
  );
};

export default Home;
