import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <>
      <a
        className="z-0 github-color hover:github-color--hover dark:github-color--dark dark:hover:github-color--dark--hover"
        href="https://github.com/Toniin"
        target="_blank"
      >
        <FaSquareGithub size="3em" />
      </a>
      <a
        className="z-0 linkedin-color hover:linkedin-color--hover dark:linkedin-color--dark dark:hover:linkedin-color--dark--hover"
        href="https://www.linkedin.com/in/antonin-chaudiere/"
        target="_blank"
      >
        <FaLinkedin size="3em" />
      </a>
    </>
  );
};

export default SocialLink;
