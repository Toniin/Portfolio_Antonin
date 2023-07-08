import { FunctionComponent, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: FunctionComponent = () => {
  const aboutSection: React.RefObject<HTMLElement> = useRef<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (aboutSection.current != null && self.selector) {
        const timelineMainMerge = self.selector(
          ".about__timeline__main--merge"
        );

        const timelineDotBranch = self.selector(
          ".about__timeline__dot--branch"
        );

        const timelineMainCheckout = self.selector(
          ".about__timeline__main--checkout"
        );

        const timelineDotCheckout = self.selector(
          ".about__timeline__dot--checkout"
        );

        const timelineSecondary = self.selector(".about__timeline__secondary");

        const timelineDotMerge = self.selector(".about__timeline__dot--merge");

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: aboutSection.current,
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
              trigger: aboutSection.current,
              start: "15% center",
              end: "20% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: aboutSection.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: aboutSection.current,
              start: "33% center",
              end: "38% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondary, {
            scrollTrigger: {
              trigger: aboutSection.current,
              start: "top top",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotMerge, {
            scrollTrigger: {
              trigger: aboutSection.current,
              start: "83% 60%",
              end: "90% 65%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          });
      }
    }, aboutSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section ref={aboutSection} className="about items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="about__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 250"
      >
        <path
          className="about__timeline__main about__timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M0,0 L 0,250"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="about__timeline__main about__timeline__main--checkout stroke-branch-second-light"
          d="M0,10 C 0,25 10,35 50,35"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="about__timeline__secondary stroke-branch-second-light"
          d="M50,35 L 50,210 C 50,220 50,230 0,240"
          fill="transparent"
          strokeWidth="1"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--branch fill-branch-second-light"
          cx="0"
          cy="10"
          r="2"
          fill="transparent"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--checkout fill-branch-second-light"
          cx="50"
          cy="35"
          r="2"
          fill="transparent"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--merge fill-branch-second-light"
          cx="0"
          cy="240"
          r="2"
          fill="transparent"
        />
      </svg>
      <div className="about__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Mes expériences</h2>
        <p className="tooltip my-16 p-5 border-solid rounded bg-sky-900 text-white">
          <span className="font-bold">
            Formation développeur web (front-end, react)
          </span>
          <br />
          OpenClassrooms
          <br />
          déc. 2022 - août.2023 · 9 mois
          <br />À distance
        </p>
        <p className="tooltip my-4 p-5 border-solid rounded bg-sky-900 text-white">
          <span className="font-bold">
            Formation développeur web (front-end, react)
          </span>
          <br />
          Coopernet
          <br />
          oct. 2019 - nov.2019 · 2 mois
          <br />
          Région de Montpellier, France
        </p>
      </div>
    </section>
  );
};
export default About;
