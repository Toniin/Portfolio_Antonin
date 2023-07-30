import { FunctionComponent } from "react";
import {
  FaCode,
  FaReact,
  FaNode,
  FaHtml5,
  FaGitAlt,
  FaSass,
} from "react-icons/fa6";
import Timeline from "./Timeline";

const Skills: FunctionComponent = () => {
  return (
    <section className="skills flex flex-col items-center min-h-screen">
      <Timeline />
      <div className="skills__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl flex gap-4 items-center">
          <FaCode size="1.2em"/>
          COMPÉTENCES
        </h2>
        <ul className="skills__content__list glass--light glass--light--off dark:glass--dark dark:glass--dark--off rounded-md flex flex-col sm:flex-row justify-center items-center mt-20 px-10 sm:px-5 gap-y-6 sm:gap-x-5 sm:gap-y-10 py-10 flex-wrap sm:after:content-[''] sm:after:basis-1/4">
          <li className="w-full flex flex-col sm:basis-1/4 sm:justify-center items-center justify-between">
            <FaHtml5 fill="#e06e3b" size="4em" />
            <p>HTML</p>
          </li>
          <li className="w-full flex flex-col sm:basis-1/4 sm:justify-center items-center justify-between">
            <FaSass fill="#c774a1" size="4em" />
            <p>SCSS</p>
          </li>
          <li className="w-full flex flex-col sm:basis-1/4 sm:justify-center items-center justify-between">
            <FaReact fill="#68d3fa" size="4em" />
            <p>React</p>
          </li>
          <li className="w-full flex flex-col sm:basis-1/4 sm:justify-center items-center justify-between">
            <FaNode fill="#649c4f" size="4em" />
            <p>Nodejs</p>
          </li>
          <li className="w-full flex flex-col sm:basis-1/4 sm:justify-center items-center justify-between">
            <FaGitAlt fill="#de5c41" size="4em" />
            <p>Git</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
