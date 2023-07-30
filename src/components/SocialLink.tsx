import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SocialLink = ({ background }: SocialLinkProps) => {
  let buttonStyles;

  if (background === "hero") {
    buttonStyles =
      "social neomorphism__hero--light dark:neomorphism--dark secondary-color z-0 duration-300 ease-out p-2 rounded-lg";
  }

  if (background === "glass") {
    buttonStyles =
      "social neomorphism--light dark:neomorphism--dark z-0 duration-300 ease-out p-2 rounded-lg";
  }

  return (
    <>
      <a
        className={buttonStyles}
        href="https://github.com/Toniin"
        target="_blank"
      >
        <FaGithub className="social__git" size="2em" />
      </a>
      <a
        className={buttonStyles}
        href="https://www.linkedin.com/in/antonin-chaudiere/"
        target="_blank"
      >
        <FaLinkedinIn className="social__linkedin" size="2em" />
      </a>
    </>
  );
};

export default SocialLink;

interface SocialLinkProps {
  background: string;
}
