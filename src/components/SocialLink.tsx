import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <>
      <a
        className="social social__git__bg z-0 duration-300 ease-out p-2 rounded-lg social-git__neomorphism--light"
        href="https://github.com/Toniin"
        target="_blank"
      >
        <FaGithub className="social__git" size="2em" />
      </a>
      <a
        className="social social__linkedin__bg z-0 duration-300 ease-out p-2 rounded-lg social-linkedin__neomorphism--light"
        href="https://www.linkedin.com/in/antonin-chaudiere/"
        target="_blank"
      >
        <FaLinkedinIn className="social__linkedin" size="2em" />
      </a>
    </>
  );
};

export default SocialLink;
