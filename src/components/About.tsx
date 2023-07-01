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
        const timelineMainMerge = self.selector(".about__timeline__main--merge");

        const timelineDotBranch = self.selector(".about__timeline__dot--branch");

        const timelineMainCheckout = self.selector(".about__timeline__main--checkout");

        const timelineDotCheckout = self.selector(".about__timeline__dot--checkout");

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
          })
      }
    }, aboutSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      ref={aboutSection}
      className="about items-center h-screen"
    >
      <svg
        className="about__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="about__timeline__main about__timeline__main--merge"
          d="M5,0 L 5,100"
          fill="transparent"
          strokeWidth="0.5"
        />
        <path
          className="about__timeline__main about__timeline__main--checkout"
          d="M5,5 L 5,5 C 5,15 10,20 50,20"
          fill="transparent"
          strokeWidth="0.5"
        />
        <path
          className="about__timeline__secondary"
          d="M50,20 L 50,70 C 50,80 50,90 5,95"
          fill="transparent"
          strokeWidth="0.5"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--branch"
          cx="5"
          cy="5"
          r="1"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--checkout"
          cx="50"
          cy="20"
          r="1"
        />
        <circle
          className="about__timeline__dot about__timeline__dot--merge"
          cx="5"
          cy="95"
          r="1"
        />
      </svg>
      <div className="about__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">À propos</h2>
        <p className="py-10">Mon expérience</p>
      </div>
    </section>
  );
};
export default About;
