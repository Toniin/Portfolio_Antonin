import { FunctionComponent, useEffect } from "react";
import Timeline from "./Timeline";
import projectsData from "../mockdata/projectsData.json";

const projects: Array<ProjectData> = [...projectsData];

const Projects: FunctionComponent = () => {
  useEffect(() => {
    const projectsCard = document.querySelectorAll(".projects__content__card");

    projectsCard.forEach((project: any) => {
      project.addEventListener("mousemove", (event: any) => {
        const CardRect = project.getBoundingClientRect();

        const x = event.clientX - CardRect.x;
        const y = event.clientY - CardRect.y;

        const midCardWidth = CardRect.width / 2;
        const midCardHeight = CardRect.height / 2;

        const angleY = -(x - midCardWidth) / 10;
        const angleX = (y - midCardHeight) / 10;

        project.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(2)`;
      });

      project.addEventListener("mouseleave", () => {
        project.children[0].style.transform = `rotateX(0) rotateY(0)`;
      });
      project.addEventListener("click", () => {
        project.children[0].style.transform = `rotateX(0) rotateY(0)`;
      });
    });
  }, []);

  return (
    <section className="projects min-h-screen">
      <Timeline />
      <div className="projects__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl">PROJETS</h2>

        <div className="flex flex-col items-center mt-24 gap-10 lg:flex-row lg:gap-6 lg:mt-48 mx-3">
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
