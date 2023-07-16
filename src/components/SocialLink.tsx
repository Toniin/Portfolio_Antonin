import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <>
      <a
        className="z-0 github-color dark:github-color--dark hover:scale-110 duration-300 ease-out"
        href="https://github.com/Toniin"
        target="_blank"
      >
        <FaSquareGithub size="3em" />
      </a>
      <a
        className="z-0 linkedin-color dark:linkedin-color--dark hover:scale-110 duration-300 ease-out"
        href="https://www.linkedin.com/in/antonin-chaudiere/"
        target="_blank"
      >
        <FaLinkedin size="3em" />
      </a>
    </>
  );
};

export default SocialLink;
