import { FunctionComponent } from "react";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa6";
import Timeline from "./Timeline";

const Skills: FunctionComponent = () => {
  return (
    <section className="skills flex flex-col items-center h-screen">
      <Timeline />
      <div className="skills__content w-full h-screen flex flex-col items-center">
        {/* 
          À FAIRE
          Effet background opaque, voir image idée CV 
        */}
        <h2 className="text-2xl">COMPÉTENCES</h2>
        <ul className="flex flex-col sm:flex-row justify-center items-center mt-20 gap-5 py-10 flex-wrap">
          <li className="w-full flex sm:basis-1/4 sm:justify-center items-center justify-between gap-2">
            HTML <FaHtml5 fill="#e06e3b" size="3em" />
          </li>
          <li className="w-full flex sm:basis-1/4 sm:justify-center items-center justify-between gap-2">
            CSS (Sass) <FaCss3Alt fill="#55a8da" size="3em" />
          </li>
          <li className="w-full flex sm:basis-1/4 sm:justify-center items-center justify-between gap-2">
            React <FaReact fill="#68d3fa" size="3em" />
          </li>
          <li className="w-full flex sm:basis-1/4 sm:justify-center items-center justify-between gap-2">
            Nodejs <FaNode fill="#649c4f" size="3em" />
          </li>
          <li className="w-full flex sm:basis-1/4 sm:justify-center items-center justify-between gap-2">
            Git <FaGitAlt fill="#de5c41" size="3em" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
