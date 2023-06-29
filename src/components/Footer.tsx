import { FunctionComponent } from "react";
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Footer: FunctionComponent = () => {
  return (
    <div className="py-24 sm:py-32">
      <nav aria-label="footer navigation">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8">
            Plus d'informations sur mes réseaux
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://github.com/Toniin" target="_blank">
              <FaSquareGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/antonin-chaudiere/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
