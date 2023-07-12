import { FunctionComponent } from "react";
import {
  FaRegFilePdf,
  FaDownload,
  FaLinkedin,
} from "react-icons/fa6";
import { useTheme } from "../utils/Hook/useTheme";
import SocialLink from "./SocialLink";

const Banner: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <section className="banner flex items-center h-screen">
      {theme === "dark" ? (
        <div className="banner__stars">
          <div className="banner__stars__little"></div>
          <div className="banner__stars__medium"></div>
          <div className="banner__stars__big"></div>
        </div>
      ) : (
        <></>
      )}

      <div className="banner__content flex flex-col items-center gap-y-5">
        <h1 className="text-5xl tracking-wider">ANTONIN</h1>
        <p className="text-xl mb-5 text-center">Développeur web front-end. Autodidacte.</p>
        <button className="neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg">
          <span className="flex items-center font-bold gap-4">
            <FaRegFilePdf />
            Télécharger le CV
            <FaDownload />
          </span>
        </button>
        <ul className="flex justify-center gap-4">
          <li>
            <SocialLink />
          </li>
          <li>
            {/* <SocialLink social="Linkedin"/> */}
            <a
              className="z-0 linkedin-color hover:linkedin-color--hover dark:linkedin-color--dark dark:hover:linkedin-color--dark--hover"
              href="https://www.linkedin.com/in/antonin-chaudiere/"
              target="_blank"
            >
              <FaLinkedin size="3em" />
            </a>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="banner__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 250"
      >
        <path
          className="stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M0,200 L 0,250"
          fill="transparent"
          strokeWidth="1"
        />
        {theme === "dark" ? (
          <>
            <g className="banner__timeline__hyperspace banner__timeline__hyperspace__right">
              <path
                className="banner__timeline__hyperspace__right__1"
                d="M0,211 1,210.5"
                fill="transparent"
                strokeWidth="0.5"
              />
              <path
                className="banner__timeline__hyperspace__right__2"
                d="M0,210 1,209.5"
                fill="transparent"
                strokeWidth="0.9"
              />
              <path
                className="banner__timeline__hyperspace__right__3"
                d="M0,208 1,207.5"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="banner__timeline__hyperspace__right__4"
                d="M0,214 1,213.5"
                fill="transparent"
                strokeWidth="0.7"
              />
              <path
                className="banner__timeline__hyperspace__right__5"
                d="M0,205 1,204.5"
                fill="transparent"
                strokeWidth="0.6"
              />
            </g>

            <g className="banner__timeline__hyperspace banner__timeline__hyperspace__left">
              <path
                className="banner__timeline__hyperspace__left__1"
                d="M0,211 -1,210.5"
                fill="transparent"
                strokeWidth="0.5"
              />
              <path
                className="banner__timeline__hyperspace__left__2"
                d="M0,210 -1,209.5"
                fill="transparent"
                strokeWidth="0.9"
              />
              <path
                className="banner__timeline__hyperspace__left__3"
                d="M0,208 -1,207.5"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="banner__timeline__hyperspace__left__4"
                d="M0,214 -1,213.5"
                fill="transparent"
                strokeWidth="0.7"
              />
              <path
                className="banner__timeline__hyperspace__left__5"
                d="M0,205 -1,204.5"
                fill="transparent"
                strokeWidth="0.6"
              />
            </g>
          </>
        ) : (
          <>
            <g className="banner__timeline__leaf">
              <path
                d="M0,220 C 0,215 5,215 7,207"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="banner__timeline__leaf--fill"
                d="M5,212 C 5,210 2,205 10,200 C 10,200 15,205 5,212"
                fill="transparent"
                strokeWidth="1"
              />
              <circle
                cx="0"
                cy="220"
                r="0.5"
                fill="transparent"
                strokeWidth="1"
              />
            </g>
            <g className="banner__timeline__leaf">
              <path
                d="M0,215 C 0,210 -5,210 -5,204"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="banner__timeline__leaf--fill"
                d="M-5.5,198 C -5,200 0,205 -3,210 C -7.5,211 -10,200 -5,198"
                fill="transparent"
                strokeWidth="1"
              />
              <circle
                cx="0"
                cy="215"
                r="0.5"
                fill="transparent"
                strokeWidth="1"
              />
            </g>
          </>
        )}
      </svg>
    </section>
  );
};

export default Banner;
