import { FunctionComponent } from "react";
import { FaRegFilePdf, FaDownload } from "react-icons/fa6";
import { useTheme } from "../utils/Hook/useTheme";
import SocialLink from "./SocialLink";

const Hero: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <section className="hero flex items-center h-screen">
      {theme === "dark" ? (
        <div className="hero__stars">
          <div className="hero__stars__little"></div>
          <div className="hero__stars__medium"></div>
          <div className="hero__stars__big"></div>
        </div>
      ) : (
        <></>
      )}

      <div className="hero__content flex flex-col items-center gap-y-5">
        <h1 className="text-5xl tracking-wider">ANTONIN</h1>
        <p className="text-xl mb-5 text-center">
          Développeur web front-end. Autodidacte.
        </p>
        <button className="neomorphism--light dark:neomorphism--dark flex p-3 rounded-lg">
          <span className="flex items-center font-bold gap-4">
            <FaRegFilePdf />
            Télécharger le CV
            <FaDownload />
          </span>
        </button>
        <div className="flex justify-center gap-4">
          <SocialLink />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hero__timeline"
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
            <g className="hero__timeline__hyperspace hero__timeline__hyperspace__right">
              <circle
                className="hero__timeline__hyperspace__right__1"
                cx="0"
                cy="211"
                r="0.5"
              />
              <circle
                className="hero__timeline__hyperspace__right__2"
                cx="0"
                cy="210"
                r="0.4"
              />
              <circle
                className="hero__timeline__hyperspace__right__3"
                cx="0"
                cy="208"
                r="0.7"
              />
              <circle
                className="hero__timeline__hyperspace__right__4"
                cx="0"
                cy="214"
                r="0.6"
              />
              <circle
                className="hero__timeline__hyperspace__right__5"
                cx="0"
                cy="205"
                r="0.9"
              />
            </g>

            <g className="hero__timeline__hyperspace hero__timeline__hyperspace__left">
              <circle
                className="hero__timeline__hyperspace__left__1"
                cx="0"
                cy="211"
                r="0.5"
              />
              <circle
                className="hero__timeline__hyperspace__left__2"
                cx="0"
                cy="210"
                r="0.4"
              />
              <circle
                className="hero__timeline__hyperspace__left__3"
                cx="0"
                cy="208"
                r="0.7"
              />
              <circle
                className="hero__timeline__hyperspace__left__4"
                cx="0"
                cy="214"
                r="0.6"
              />
              <circle
                className="hero__timeline__hyperspace__left__5"
                cx="0"
                cy="205"
                r="0.9"
              />
            </g>
          </>
        ) : (
          <>
            <g className="hero__timeline__leaf">
              <path
                d="M0,220 C 0,215 5,215 7,207"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="hero__timeline__leaf--fill"
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
            <g className="hero__timeline__leaf">
              <path
                d="M0,215 C 0,210 -5,210 -5,204"
                fill="transparent"
                strokeWidth="1"
              />
              <path
                className="hero__timeline__leaf--fill"
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

export default Hero;