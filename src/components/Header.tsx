import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/Hook/useTheme";
import { FaSun, FaMoon } from "react-icons/fa6";

const Header: FunctionComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header flex justify-between bg-light primary-color dark:bg-dark dark:secondary-color transition duration-250 ease-out">
      <Link to="/" className="header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          width="100%"
          height="100%"
          viewBox="0 0 360 152"
          fill="none"
          aria-describedby="logo-title"
        >
          <title id="logo-title">
            Logo du portfolio de Antonin - Page d’accueil
          </title>
          <path
            d="M0.873029 148.498L85.1303 3.49667C85.517 2.83129 86.4788 2.83372 86.8621 3.50106L170.14 148.502C170.523 149.169 170.041 150 169.272 150H1.73765C0.966609 150 0.485644 149.164 0.873029 148.498Z"
            stroke="black"
            strokeWidth="5"
            className="stroke-dark dark:stroke-light animate-path-light dark:animate-path-dark"
          />
          <path
            d="M43.888 123.492L85.123 53.4889C85.5132 52.8264 86.474 52.8337 86.854 53.5022L126.651 123.506C127.03 124.172 126.548 125 125.781 125H44.7496C43.9759 125 43.4953 124.159 43.888 123.492Z"
            stroke="black"
            strokeWidth="5"
            className="stroke-dark dark:stroke-light animate-path-inside-light dark:animate-path-inside-dark"
          />
          <path
            d="M341.836 125.165C331.783 136.938 318.36 145.39 303.352 149.396C288.345 153.403 272.465 152.773 257.826 147.592C243.188 142.411 230.485 132.924 221.407 120.393C212.33 107.862 207.31 92.8823 207.014 77.4468C206.718 62.0113 211.161 46.8523 219.751 33.9873C228.342 21.1224 240.672 11.1615 255.102 5.43054C269.531 -0.300447 285.375 -1.5298 300.526 1.90609C315.676 5.34198 329.413 13.2802 339.91 24.6642L321.623 41.3062C314.529 33.6127 305.245 28.2479 295.006 25.9259C284.767 23.6039 274.06 24.4347 264.308 28.3078C254.556 32.1809 246.223 38.9126 240.417 47.607C234.612 56.3014 231.609 66.5462 231.809 76.9778C232.009 87.4094 235.402 97.5332 241.537 106.002C247.671 114.47 256.256 120.882 266.149 124.383C276.042 127.885 286.774 128.31 296.917 125.603C307.059 122.895 316.131 117.183 322.925 109.227L341.836 125.165Z"
            stroke="black"
            strokeWidth="5"
            className="stroke-dark dark:stroke-light animate-path-light dark:animate-path-dark"
          />
          <circle
            cx="284"
            cy="76"
            r="18.5"
            stroke="black"
            strokeWidth="5"
            className="stroke-dark dark:stroke-light animate-circle-light dark:animate-circle-dark"
          />
        </svg>
      </Link>
      <nav
        aria-label="header navigation"
        className="header__navbar flex items-center"
      >
        <ul className="header__navbar__links">
          <li>
            <Link to="/">Lien 1</Link>
          </li>
          <li>
            <Link to="/">Lien 2</Link>
          </li>
          <li>
            <Link to="/error">Lien 3</Link>
          </li>
        </ul>
        <button
          className="bg-fill border-yellow-500 dark:bg-dark dark:border-white mx-5 px-4 py-3 rounded-3xl border-2"
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "light" ? (
            <FaSun className="fill-yellow-500" />
          ) : (
            <FaMoon className="fill-light" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
