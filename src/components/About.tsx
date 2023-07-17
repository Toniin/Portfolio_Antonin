import { FunctionComponent } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import Timeline from "./Timeline";
import experiencesData from "../mockdata/experiencesData.json";

const experiences: Array<ExperiencesData> = [...experiencesData];

const About: FunctionComponent = () => {
  return (
    <section className="about items-center min-h-screen">
      <Timeline />
      <div className="about__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl flex gap-4 items-center">
          <FaUserGraduate size="1.2em" />
          EXPÉRIENCES
        </h2>
        <div className="flex flex-col mt-20 gap-7">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.name} - ${index}}`}
              className="about__content__xp glass dark:glass--dark mt-6 p-7"
            >
              <a href={experience.href} target="_blank">
                <h3 className="text-xl underline underline-offset-4 hover:scale-105 duration-300 ease-out">
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
