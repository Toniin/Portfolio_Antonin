import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../utils/Hook/useTheme";
import projectsData from "../mockdata/projectsData.json";
import {
  FaSquareGithub,
  FaUpRightFromSquare,
  FaReact,
  FaGitAlt,
  FaSass,
  FaAws,
  FaMailchimp,
} from "react-icons/fa6";
import { SiGatsby, SiContentful } from "react-icons/si";
import BreadCrumb from "../components/BreadCrumb";

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
        const middleCardWidth = CardRect.width / 5;
        const middleCardHeight = CardRect.height / 5;
        const angleY = -(x - middleCardWidth) / 30;
        const angleX = (y - middleCardHeight) / 25;
        projectCard.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(2.5)`;
      });
      projectImage.addEventListener("mouseleave", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
      projectImage.addEventListener("click", () => {
        projectCard.style.transform = `rotateX(0) rotateY(0)`;
      });
    });
  }, []);

  const svgTechnologie = (technologie: string) => {
    let svg;
    const size = "2em";
    if (technologie === "React") {
      svg = <FaReact size={size} />;
    } else if (technologie === "Gatsbyjs") {
      svg = <SiGatsby size={size} />;
    } else if (technologie === "SCSS") {
      svg = <FaSass size={size} />;
    } else if (technologie === "Contentful") {
      svg = <SiContentful size={size} />;
    } else if (technologie === "AWS") {
      svg = <FaAws size={size} />;
    } else if (technologie === "MailChimp") {
      svg = <FaMailchimp size={size} />;
    } else if (technologie === "Git") {
      svg = <FaGitAlt size={size} />;
    }

    return svg;
  };

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
      <main className="project__page flex flex-col items-center justify-between px-2">
        <div className="flex flex-col items-center gap-2 mb-24">
          <h1 className="text-4xl tracking-wider secondary-color">
            {project.name}
          </h1>
          <h2>{project.description}</h2>
        </div>

        <BreadCrumb actualPath={project.name} />

        <div className="mt-10 w-full flex flex-col gap-2">
          <h3 className="underline underline-offset-4">PROBLÉMATIQUE :</h3>
          {project.name === "Racine Éclairée" && (
            <p>
              Blog où les utilisateurs peuvent lire les{" "}
              <strong>articles</strong>, écrire des{" "}
              <strong>commentaires</strong> et{" "}
              <strong>contacter le support</strong>.
            </p>
          )}
        </div>

        <div className="project__page__content flex flex-col lg:flex-row items-start mt-10">
          <div className="basis-1/2 flex flex-col">
            <ul className="flex justify-evenly gap-4 flex-wrap">
              {project.technologies.map((technologie) => (
                <li
                  key={`${project.name} | ${technologie.name}`}
                  className="glass basis-full sm:basis-2/5 grow px-4 py-2"
                >
                  <div className="flex items-center gap-x-4 py-2">
                    <h3 className="text-lg">{technologie.name}</h3>
                    {svgTechnologie(technologie.name)}
                  </div>
                  <p>{technologie.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-evenly py-5">
              {project.git === "private" ? (
                <></>
              ) : (
                <a
                  href={project.git}
                  target="_blank"
                  className="w-fit neomorphism--light dark:neomorphism--dark flex items-center gap-2 p-3 rounded-lg"
                >
                  Voir le projet github
                  <FaSquareGithub size="1.8em" />
                </a>
              )}
              <a
                href={project.href}
                target="_blank"
                className="w-fit neomorphism--light dark:neomorphism--dark flex items-center gap-2 p-3 rounded-lg"
              >
                Voir le projet
                <FaUpRightFromSquare size="1.3em" />
              </a>
            </div>
          </div>
          <div className="lg:basis-1/2 flex flex-col lg:flex-row justify-evenly gap-x-4 gap-y-8 lg:flex-wrap pl-2 pb-4">
            {project.images.map((image) => (
              <div
                key={`${project.name} | ${image.alt}`}
                className="basis-2/5 h-fit grow project__page__content__image neomorphism--light dark:neomorphism--dark"
              >
                <div>
                  <img
                    className="w-full aspect-video object-cover rounded-lg"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
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
