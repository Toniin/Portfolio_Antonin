import { FunctionComponent } from "react";
import Timeline from "./Timeline";
import experiencesData from "../mockdata/experiencesData.json";

const About: FunctionComponent = () => {
  const experiences: Array<ExperiencesData> = [...experiencesData];
  
  return (
    <section className="about items-center h-screen">
      <Timeline />
      <div className="about__content w-full h-screen flex flex-col items-center">
        <h2 className="text-2xl">EXPÉRIENCES</h2>
        {experiences.map((experience) => (
          <article className="about__content__xp mt-6 p-5">
            <a href={experience.href} target="_blank">
              <h3 className="text-xl underline underline-offset-4">
                {experience.name}
              </h3>
            </a>
            <p className="text-lg py-2">
              {experience.organisme}
              <br />
              {experience.date}
              <br />
              {experience.zone}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default About;

interface ExperiencesData {
  name: string;
  organisme: string;
  date: string;
  zone: string;
  href: string;
}
