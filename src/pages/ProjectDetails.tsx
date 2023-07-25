import { FunctionComponent } from "react";
// import { useParams } from "react-router-dom";
import { useTheme } from "../utils/Hook/useTheme";
import projectsData from "../mockdata/projectsData.json";

const projects: Array<ProjectData> = [...projectsData];

const ProjectDetails: FunctionComponent = () => {
  const { theme } = useTheme();
  // const { idUrlProject} = useParams();
  

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
      <main className="project__page flex flex-col items-center">
        <h1 className="text-4xl tracking-wider secondary-color">
          {projects[0].name}
        </h1>
        <div className="project__page__content flex">
          <div className="basis-1/2">
            <p>Description du projet</p>
            <ul className="flex">
              <li>Techo 1</li>
              <li>Techno 2</li>
            </ul>
            <a
              href={`https://racine-eclairee.netlify.app`}
              target="_blank"
              className="hero__neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg"
            >
              Voir le projet
            </a>
          </div>
          <div className="basis-1/2">
            <ul className="flex">
              <li>Photo 1</li>
              <li>Photo 2</li>
            </ul>
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
  imageSrc: string;
  imageAlt: string;
  href: string;
}
