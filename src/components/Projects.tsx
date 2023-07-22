import { FunctionComponent, useEffect } from "react";
import { FaFileCode } from "react-icons/fa6";
import Timeline from "./Timeline";
import Timeline3Branchs from './Timeline3Branchs';
import projectsData from "../mockdata/projectsData.json";

const projects: Array<ProjectData> = [...projectsData];

const Projects: FunctionComponent = () => {
  useEffect(() => {
    const projectsCard = document.querySelectorAll(".projects__content__card");

    projectsCard.forEach((projectLink) => {
      const projectCard = projectLink.children[0] as HTMLElement;
      projectLink.addEventListener("mousemove", (event) => {
        const mouseEvent = event as MouseEvent;

        const CardRect = projectLink.getBoundingClientRect();
        const x = mouseEvent.clientX - CardRect.x;
        const y = mouseEvent.clientY - CardRect.y;
        const midCardWidth = CardRect.width / 2;
        const midCardHeight = CardRect.height / 2;
        const angleY = -(x - midCardWidth) / 10;
        const angleX = (y - midCardHeight) / 10;
        projectCard.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(2)`;
      });
      projectLink.addEventListener("mouseleave", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
      projectLink.addEventListener("click", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
    });
  }, []);

  return (
    <section className="projects min-h-screen">
      {window.innerWidth <= 975 ? <Timeline /> : <Timeline3Branchs />}
      <div className="projects__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl flex gap-4 items-center">
          <FaFileCode size="1.2em" />
          PROJETS
        </h2>

        {/* 
          À FAIRE
          Si écran horizontal => flex-row (règle le soucis de déformation sur petit écran horizontal)
          Sinon => flex-col items-center mt-24 gap-10 lg:flex-row lg:gap-6 lg:mt-48 mx-3
        */}
        <div className="flex flex-col items-center mt-20 gap-10 lg:flex-row lg:gap-6 lg:mt-32 mx-3">
          {projects.map((project, index) => (
            <a
              href={project.href}
              target="_blank"
              key={`${project.name} - ${index}}`}
              className="projects__content__card w-9/12 lg:w-1/3 neomorphism--light dark:neomorphism--dark"
            >
              <div className="projects__content__card__content w-full h-full overflow-hidden rounded-md">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full object-cover"
                />
                {/* 
                  À FAIRE
                  Mettre un box shadow au niveau texte (effet ombre) 
                */}
                <div className="p-2 bg-light dark:primary-color">
                  <h3 className="text-lg text-center">{project.name}</h3>
                  <p className="text-base font-semibold">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

interface ProjectData {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}
