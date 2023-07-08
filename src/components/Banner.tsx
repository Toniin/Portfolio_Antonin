import { FunctionComponent } from "react";
import { FaRegFilePdf, FaDownload } from "react-icons/fa6";
import { useTheme } from "../utils/Hook/useTheme";

const Banner: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <section className="banner flex items-center h-screen">
      <article className="banner__content flex justify-center items-center flex-wrap">
        <img
          className="banner__content__image md:basis-1/4 sm:basis-9/12"
          src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-600x600.png"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-center py-5 text-2xl">Antonin</h1>
          <p className="banner__content__text basis-1/2">
            Porro quidem dicta cumque beatae quis repellat, odit sed obcaecati.
            Expedita. Ut quisquam consectetur laboriosam doloribus ullam
            praesentium aspernatur sequi quae dolor eveniet sapiente sint
            facilis eius commodi, necessitatibus laborum tempore sit architecto!
          </p>
          <button className="flex items-center gap-2 border-yellow-500 dark:bg-dark dark:border-white hover:bg-gray-500 hover:text-white mx-auto px-4 py-3 rounded-3xl border-2">
            Télécharger le CV
            <div className="flex flex-col gap-2 p-2">
              <FaRegFilePdf />
              <FaDownload />
            </div>
          </button>
        </div>
      </article>
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
        {theme === "light" ? (
          <>
            <path
              className="banner__timeline__leaf"
              d="M0,220 C 0,215 5,215 7,207"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__leaf banner__timeline__leaf--fill"
              d="M5,212 C 5,210 2,205 10,200 C 10,200 15,205 5,212"
              fill="transparent"
              strokeWidth="1"
            />
            <circle
              className="banner__timeline__leaf"
              cx="0"
              cy="220"
              r="0.5"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__leaf"
              d="M0,215 C 0,210 -5,210 -5,204"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__leaf banner__timeline__leaf--fill"
              d="M-5.5,198 C -5,200 0,205 -3,210 C -7.5,211 -10,200 -5,198"
              fill="transparent"
              strokeWidth="1"
            />
            <circle
              className="banner__timeline__leaf"
              cx="0"
              cy="215"
              r="0.5"
              fill="transparent"
              strokeWidth="1"
            />
          </>
        ) : (
          <>
            {/* <path
              className="banner__timeline__hyperspace"
              d="M0,210 C 0,208 0,208 5,205"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__hyperspace"
              d="M0,220 C 0,217 0,213 10,210"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__hyperspace"
              d="M0,230 C 0,225 0,225 10,215"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__hyperspace"
              d="M0,215 C 0,213 0,207 -10,205"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__hyperspace"
              d="M0,225 C -2,220 -5,217 -10,215"
              fill="transparent"
              strokeWidth="1"
            /> */}
            <path
              className="banner__timeline__hyperspace"
              d="M1,210 1.5,209.5 M2,209 2.5,208.5 M3,208 3.5,207.5 M4,207 4.5,206.5"
              fill="transparent"
              strokeWidth="1"
            />
            <path
              className="banner__timeline__hyperspace"
              d="M-1,214 -1.5,213.5 M-2,213 -2.5,212.5 M-3,212 -3.5,211.5 M-4,211 -4.5,210.5"
              fill="transparent"
              strokeWidth="1"
            />
          </>
        )}
      </svg>
    </section>
  );
};
export default Banner;
