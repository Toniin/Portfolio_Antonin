import { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFileCode } from "react-icons/fa6";
import Timeline from "./Timeline";
import Timeline3Branchs from "./Timeline3Branchs";
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
        const middleCardWidth = CardRect.width / 2;
        const middleCardHeight = CardRect.height / 2;
        const angleY = -(x - middleCardWidth) / 10;
        const angleX = (y - middleCardHeight) / 10;
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
    <section id="projects" className="projects min-h-screen">
      {window.innerWidth <= 975 ? <Timeline /> : <Timeline3Branchs />}
      <div className="projects__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl flex gap-4 items-center">
          <FaFileCode size="1.2em" />
          PROJETS
        </h2>
        <div className="flex flex-col items-center mt-20 gap-10 lg:flex-row lg:gap-6 lg:mt-32 mx-3">
          {projects.map((project, index) => (
            <Link
              to={`projects/${index + 1}`}
              key={`${project.name} - ${index}}`}
              className="projects__content__card max-w-sm w-9/12 lg:w-1/3 neomorphism--light dark:neomorphism--dark"
            >
              <div className="projects__content__card__content w-full h-full overflow-hidden rounded-md">
                <img
                  className="w-full aspect-video object-cover"
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                />
                <div className="p-2 bg--light dark:primary-color shadow-inner">
                  <h3 className="text-lg text-center">{project.name}</h3>
                  <p className="text-base font-semibold">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
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
  images: Array<projectImages>;
  technologies: Array<projectTechnologies>;
  href: string;
  git: string;
}

interface projectImages {
  src: string;
  alt: string;
}

interface projectTechnologies {
  name: string;
  description: string;
}
