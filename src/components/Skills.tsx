import { FunctionComponent, useRef, useLayoutEffect } from "react";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
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
        const timelineMainMerge = self.selector(
          ".skills__timeline__main--merge"
        );

        const timelineDotBranch = self.selector(
          ".skills__timeline__dot--branch"
        );

        const timelineMainCheckout = self.selector(
          ".skills__timeline__main--checkout"
        );

        const timelineDotCheckout = self.selector(
          ".skills__timeline__dot--checkout"
        );

        const timelineSecondary = self.selector(".skills__timeline__secondary");

        const timelineDotMerge = self.selector(".skills__timeline__dot--merge");

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "top bottom",
              end: "80% 20%",
              scrub: 0.5,
            },
            scaleY: 1,
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotBranch, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "15% center",
              end: "20% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "33% center",
              end: "38% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondary, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "top top",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotMerge, {
            scrollTrigger: {
              trigger: skillsSection.current,
              start: "83% 60%",
              end: "90% 65%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          });
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
        xmlns="http://www.w3.org/2000/svg"
        className="skills__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 250"
      >
        <path
          className="skills__timeline__main skills__timeline__main--merge"
          d="M0,0 L 0,250"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="skills__timeline__main skills__timeline__main--checkout"
          d="M0,10 C 0,25 10,35 50,35"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="skills__timeline__secondary"
          d="M50,35 L 50,210 C 50,220 50,230 0,240"
          fill="transparent"
          strokeWidth="1"
        />
        <circle
          className="skills__timeline__dot skills__timeline__dot--branch"
          cx="0"
          cy="10"
          r="2"
          fill="transparent"
        />
        <circle
          className="skills__timeline__dot skills__timeline__dot--checkout"
          cx="50"
          cy="35"
          r="2"
          fill="transparent"
        />
        <circle
          className="skills__timeline__dot skills__timeline__dot--merge"
          cx="0"
          cy="240"
          r="2"
          fill="transparent"
        />
      </svg>
      <div className="skills__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Compétences</h2>
        <ul className="flex flex-col items-center text-base py-10">
          <li>
            HTML <FaHtml5 fill="#e06e3b" size="3em"/>
          </li>
          <li>
            CSS (Sass) <FaCss3Alt fill="#55a8da" size="3em"/>
          </li>
          <li>
            React <FaReact fill="#68d3fa" size="3em"/>
          </li>
          <li>
            Nodejs (API Rest) <FaNode fill="#649c4f" size="3em"/>
          </li>
          <li>
            Git <FaGitAlt fill="#de5c41" size="3em"/>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
