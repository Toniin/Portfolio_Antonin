import { FunctionComponent } from "react";
import {
  FaReact,
  FaNodeJs,
  FaNode,
  FaHtml5,
  FaCss3,
  FaCss3Alt,
  FaGit,
} from "react-icons/fa6";

const Skills: FunctionComponent = () => {
  return (
    <section className="about flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl">Compétences</h2>
      <ul className="text-base py-10">
        <li>HTML <FaHtml5 /></li>
        <li>CSS (Sass) <FaCss3 /> <FaCss3Alt /></li>
        <li>React <FaReact /></li>
        <li>Nodejs (API Rest) <FaNode /><FaNodeJs /></li>
        <li>Git <FaGit /></li>
      </ul>
    </section>
  );
};
export default Skills;
