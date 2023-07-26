import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../utils/Hook/useTheme";
import projectsData from "../mockdata/projectsData.json";

const projects: Array<ProjectData> = [...projectsData];

const ProjectDetails: FunctionComponent = () => {
  const { theme } = useTheme();
  const { idUrlProject } = useParams<{ idUrlProject: string }>();

  const indexProject = parseInt(idUrlProject as string);
  const project = projects[indexProject - 1];

  useEffect(() => {
    const projectImages = document.querySelectorAll(
      ".project__page__content__image"
    );

    projectImages.forEach((projectImage) => {
      const projectCard = projectImage.children[0] as HTMLElement;
      projectImage.addEventListener("mousemove", (event) => {
        const mouseEvent = event as MouseEvent;

        const CardRect = projectImage.getBoundingClientRect();
        const x = mouseEvent.clientX - CardRect.x;
        const y = mouseEvent.clientY - CardRect.y;
        const middleCardWidth = CardRect.width / 2;
        const middleCardHeight = CardRect.height / 2;
        const angleY = -(x - middleCardWidth) / 10;
        const angleX = (y - middleCardHeight) / 10;
        projectCard.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.5)`;
      });
      projectImage.addEventListener("mouseleave", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
      projectImage.addEventListener("click", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
    });
  }, []);

  return (
    <>
      {theme === "dark" ? (
        <div className="hero__stars">
          <div className="hero__stars__little"></div>
          <div className="hero__stars__medium"></div>
          <div className="hero__stars__big"></div>
        </div>
      ) : (
        <div className="project__page__background">
          <div>
            <svg
              className="hero__background__waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="hero__background__waves__parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      )}
      <main className="project__page flex flex-col items-center justify-between">
        <h1 className="text-4xl tracking-wider secondary-color">
          {project.name}
        </h1>
        <h2>{project.description}</h2>
        {/* FAIRE : FIL D'ARIANNE => ACCUEIL / NOM DU PROJET */}

        {/* Les problématiques rencontrées sur chaque projet et les outils pour les surmonter */}
        <div className="project__page__content flex">
          <div className="basis-1/2 flex flex-col justify-center px-2">
            <ul className="flex justify-evenly gap-4 flex-wrap">
              {project.technologies.map((technologie) => (
                <li
                  key={`${project.name} | ${technologie.name}`}
                  className="basis-2/5 grow border-t-2"
                >
                  <h3 className="py-2">{technologie.name}</h3>
                  <p>{technologie.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-evenly py-5">
              <a
                href={project.git}
                target="_blank"
                className="w-fit neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg"
              >
                Voir le projet github
              </a>
              <a
                href={project.href}
                target="_blank"
                className="w-fit neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg"
              >
                Voir le projet
              </a>
            </div>
          </div>
          <div className="basis-1/2 flex flex-row items-center gap-x-2 flex-wrap px-2">
            {project.images.map((image) => (
              <div
                key={`${project.name} | ${image.alt}`}
                className="basis-2/5 project__page__content__image neomorphism--light dark:neomorphism--dark"
              >
                <img
                  className="w-full aspect-video rounded-lg"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;

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
