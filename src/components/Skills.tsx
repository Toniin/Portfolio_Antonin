import { FunctionComponent } from "react";

const Skills: FunctionComponent = () => {
  return (
    <section className="about flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl">Compétences</h2>
      <ul className="text-base py-10">
        <li>HTML</li>
        <li>CSS (Sass)</li>
        <li>React</li>
        <li>Nodejs (API Rest)</li>
      </ul>
    </section>
  );
};
export default Skills;
