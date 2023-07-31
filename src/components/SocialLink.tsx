import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SocialLink = ({ background }: SocialLinkProps) => {
  let socialStyle;

  if (background === "hero") {
    socialStyle =
      "social neomorphism__hero--light dark:neomorphism__secondary--dark secondary-color z-0 duration-300 ease-out p-2 rounded-lg";
  }

  if (background === "glass") {
    socialStyle =
      "social neomorphism__secondary--light dark:neomorphism__secondary--dark z-0 duration-300 ease-out p-2 rounded-lg";
  }

  return (
    <>
      <a
        className={socialStyle}
        href="https://github.com/Toniin"
        target="_blank"
      >
        <FaGithub className="social__git" size="2em" />
      </a>
      <a
        className={socialStyle}
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
