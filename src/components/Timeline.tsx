import { FunctionComponent, useRef, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline: FunctionComponent = () => {
  const timeline: React.RefObject<HTMLDivElement> =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (self.selector) {
        const timelineMainMerge = self.selector(".timeline__main--merge");

        const timelineDotBranch = self.selector(".timeline__dot--branch");
        const timelineMainCheckout = self.selector(".timeline__main--checkout");
        const timelineDotCheckout = self.selector(".timeline__dot--checkout");
        const timelineSecondary = self.selector(".timeline__secondary");
        const timelineDotMerge = self.selector(".timeline__dot--merge");

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: timeline.current,
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
              trigger: timeline.current,
              start: "15% center",
              end: "20% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "33% center",
              end: "38% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondary, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "top top",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "83% 60%",
              end: "90% 65%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          });
      }
    }, timeline); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={timeline} className="timeline w-full h-full">
      {/* X < sm(480) */}
      <svg
      className="sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 150 300"
        preserveAspectRatio="none"
      >
        <path
          className="timeline__main timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M10,0 L 10,300"
          fill="transparent"
          strokeWidth="1.5"
        />
        <path
          className="timeline__main timeline__main--checkout stroke-branch-second-light"
          d="M10,25 C 10,45 15,50 75,50"
          fill="transparent"
          strokeWidth="1.5"
        />
        <path
          className="timeline__secondary stroke-branch-second-light"
          d="M75,50 L 75,235 C 75,250 50,265 10,275"
          fill="transparent"
          strokeWidth="1.5"
        />
        <circle
          className="timeline__dot timeline__dot--branch fill-branch-second-light"
          cx="10"
          cy="25"
          r="3"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--checkout fill-branch-second-light"
          cx="75"
          cy="50"
          r="3"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="10"
          cy="275"
          r="3"
          fill="transparent"
        />
      </svg>

      {/* sm(480) < X < md(768) */}
      <svg
      className="hidden sm:block md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 150 200"
        preserveAspectRatio="none"
      >
        <path
          className="timeline__main timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M5,0 L 5,200"
          fill="transparent"
          strokeWidth="1.5"
        />
        <path
          className="timeline__main timeline__main--checkout stroke-branch-second-light"
          d="M5,15 C 5,35 15,35 75,37"
          fill="transparent"
          strokeWidth="1.5"
        />
        <path
          className="timeline__secondary stroke-branch-second-light"
          d="M75,37 L 75,150 C 75,160 50,170 5,175"
          fill="transparent"
          strokeWidth="1.5"
        />
        <circle
          className="timeline__dot timeline__dot--branch fill-branch-second-light"
          cx="5"
          cy="15"
          r="2"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--checkout fill-branch-second-light"
          cx="75"
          cy="37"
          r="2"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="5"
          cy="175"
          r="2"
          fill="transparent"
        />
      </svg>

      {/* md(768) < X */}
      <svg
      className="hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 150 150"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className="timeline__main timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark"
          d="M0,0 L 0,150"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="timeline__main timeline__main--checkout stroke-branch-second-light"
          d="M0,15 C 0,35 15,35 75,37"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="timeline__secondary stroke-branch-second-light"
          d="M75,37 L 75,120 C 75,130 50,135 0,140"
          fill="transparent"
          strokeWidth="1"
        />
        <circle
          className="timeline__dot timeline__dot--branch fill-branch-second-light"
          cx="0"
          cy="15"
          r="1"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--checkout fill-branch-second-light"
          cx="75"
          cy="37"
          r="1"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="0"
          cy="140"
          r="1"
          fill="transparent"
        />
      </svg>

      <Outlet />
    </div>
  );
};

export default Timeline;
