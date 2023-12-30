import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useTheme } from "../utils/Hook/useTheme";
import projectsData from "../mockdata/projectsData.json";
import {
  FaSquareGithub,
  FaUpRightFromSquare,
  FaXmark,
  FaReact,
  FaGitAlt,
  FaSass,
  FaAws,
  FaMailchimp,
  FaStripe
} from "react-icons/fa6";
import { SiGatsby, SiContentful, SiTailwindcss, SiNextdotjs, SiPostgresql, SiPrisma,  } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import BreadCrumb from "../components/BreadCrumb";
import { Tooltip } from "@material-tailwind/react";

const projects: Array<ProjectData> = [...projectsData];

const ProjectDetails: FunctionComponent = () => {
  const { theme } = useTheme();
  const { idUrlProject } = useParams<{ idUrlProject: string }>();

  const indexProject = parseInt(idUrlProject as string);
  const project = projects[indexProject - 1];

  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("hero__waves", "true");
    } else {
      localStorage.setItem("hero__waves", "false");
    }

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
  }, [theme]);

  const svgTechnologie = (technologie: string) => {
    let svg;
    const size = "2em";
    if (technologie === "React") {
      svg = <FaReact size={size} />;
    } else if (technologie === "NextJS") {
      svg = <SiNextdotjs size={size} />;
    } else if (technologie === "Tailwind CSS") {
      svg = <SiTailwindcss size={size} />;
    } else if (technologie === "PostgreSQL") {
      svg = <SiPostgresql size={size} />;
    } else if (technologie === "Prisma") {
      svg = <SiPrisma size={size} />;
    } else if (technologie === "Resend") {
      svg = <CiMail size={size} />;
    } else if (technologie === "Stripe") {
      svg = <FaStripe size={size} />;
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
      <main className="flex flex-col items-center justify-between px-2 project__page">
        <div className="flex flex-col items-center gap-2 mb-24">
          <h1 className="text-4xl tracking-wider text__shadow--light secondary-color">
            {project.name}
          </h1>
          <h2 className="text__shadow--dark">{project.description}</h2>
        </div>

        <div className="flex items-center justify-between w-full">
          <BreadCrumb actualPath={project.name} />
          <Tooltip
            className="tooltip tooltip--light dark:tooltip--dark"
            content="Retourner à la liste des projets"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Link
              to="/#projects"
              className="p-2 rounded-lg neomorphism__secondary--light dark:neomorphism__secondary--dark"
            >
              <FaXmark size="1.3em" />
            </Link>
          </Tooltip>
        </div>

        <div className="flex flex-col w-full gap-2 mt-10">
          <h3 className="underline underline-offset-4">PROBLÉMATIQUE :</h3>
          {project.name === "Racine Éclairée" && (
            <p>
              Blog où les utilisateurs peuvent lire les
              <strong> articles</strong>, écrire des
              <strong> commentaires </strong>et
              <strong> contacter le support </strong>.
            </p>
          )}
          {project.name === "Skribe" && (
            <p>
              Blog où les utilisateurs peuvent lire les
              <strong> résumé de livres </strong>et
              <strong> contacter le support </strong>.
            </p>
          )}
          {project.name === "RendezView" && (
            <p>
              Site où les utilisateurs peuvent partager des
              <strong> calendriers </strong> et permettre de voir les
              <strong> disponibilités </strong> des partenaires pour
              <strong> se retrouver </strong>.
            </p>
          )}
        </div>

        <div className="flex flex-col items-start mt-10 project__page__content lg:flex-row">
          <div className="flex flex-col basis-1/2">
            {/* TECHNOLOGIES */}
            <ul className="flex flex-wrap gap-4 justify-evenly">
              {project.technologies.map((technologie) => (
                <li
                  key={`${project.name} | ${technologie.name}`}
                  className="px-4 py-2 rounded-md glass--light glass--light--off dark:glass--dark dark:glass--dark--off basis-full sm:basis-2/5 grow"
                >
                  <div className="flex items-center py-2 gap-x-4">
                    <h3 className="text-lg">{technologie.name}</h3>
                    {svgTechnologie(technologie.name)}
                  </div>
                  <p>{technologie.description}</p>
                </li>
              ))}
            </ul>
            {/* BUTTON GIT / BUTTON VISIT PROJECT */}
            <div className="flex py-5 justify-evenly">
              {project.git === "private" ? (
                <></>
              ) : (
                <a
                  href={project.git}
                  target="_blank"
                  className="flex items-center gap-2 p-3 rounded-lg w-fit neomorphism__secondary--light dark:neomorphism__secondary--dark"
                >
                  Voir le projet github
                  <FaSquareGithub size="1.8em" />
                </a>
              )}
              <a
                href={project.href}
                target="_blank"
                className="flex items-center gap-2 p-3 rounded-lg w-fit neomorphism__primary--light dark:neomorphism__primary--dark secondary-color dark:primary-color"
              >
                Voir le projet
                <FaUpRightFromSquare size="1.3em" />
              </a>
            </div>
          </div>
          {/* IMAGES */}
          <div className="flex flex-col pb-4 pl-2 lg:basis-1/2 lg:flex-row justify-evenly gap-x-4 gap-y-8 lg:flex-wrap">
            {project.images.map((image) => (
              <div
                key={`${project.name} | ${image.alt}`}
                className="basis-2/5 h-fit grow project__page__content__image neomorphism__secondary--light dark:neomorphism__secondary--dark"
              >
                <div>
                  <img
                    className="object-cover w-full rounded-lg aspect-video"
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
