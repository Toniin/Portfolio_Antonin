import { FunctionComponent } from "react";
import Timeline from "./Timeline";

const About: FunctionComponent = () => {
  return (
    <section className="about items-center h-screen">
      <Timeline />
      <div className="about__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Mes expériences</h2>
        <p className="tooltip my-16 p-5 border-solid rounded bg-sky-900 text-white">
          <span className="font-bold">
            Formation développeur web (front-end, react)
          </span>
          <br />
          OpenClassrooms
          <br />
          déc. 2022 - août.2023 · 9 mois
          <br />À distance
        </p>
        <p className="tooltip my-4 p-5 border-solid rounded bg-sky-900 text-white">
          <span className="font-bold">
            Formation développeur web (front-end, react)
          </span>
          <br />
          Coopernet
          <br />
          oct. 2019 - nov.2019 · 2 mois
          <br />
          Région de Montpellier, France
        </p>
      </div>
    </section>
  );
};
export default About;
