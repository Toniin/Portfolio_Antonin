import { FunctionComponent, useRef, useLayoutEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaNode,
  FaHtml5,
  FaCss3,
  FaCss3Alt,
  FaGit,
} from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills: FunctionComponent = () => {
  const skillsSection: React.RefObject<HTMLElement> =
    useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (skillsSection.current != null && self.selector) {
        const timelineDown = self.selector(".skills__timeline");
        const timelineRight = self.selector(".skills__timeline--right");

        gsap
          .timeline()
          .to(timelineDown, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "top bottom",
              end: "bottom 20%",
              scrub: 1,
            },
            scale: 1,
            ease: "power3.inOut",
          })
          .to(
            timelineRight,
            {
              scrollTrigger: {
                trigger: skillsSection.current,
                start: "20% center",
                end: "40% center",
                scrub: 0.5,
              },
              scale: 1,
              ease: "power3.inOut",
            },
          );
      }
    }, skillsSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={skillsSection}
      className="skills flex flex-col items-center h-screen"
    >
      <svg
        className="skills__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 1 150"
      >
        <rect width="100%" height="100%" x="0" y="0" />
      </svg>
      <svg
        className="skills__timeline--right"
        width="100%"
        height="100%"
        viewBox="0 0 200 1"
      >
        <rect width="37.5%" height="100%" x="0" y="0" />
      </svg>
      <h2 className="text-xl">Compétences</h2>
      <ul className="text-base py-10">
        <li>
          HTML <FaHtml5 />
        </li>
        <li>
          CSS (Sass) <FaCss3 /> <FaCss3Alt />
        </li>
        <li>
          React <FaReact />
        </li>
        <li>
          Nodejs (API Rest) <FaNode />
          <FaNodeJs />
        </li>
        <li>
          Git <FaGit />
        </li>
      </ul>
    </section>
  );
};
export default Skills;
