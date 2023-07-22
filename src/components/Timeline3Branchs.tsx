import { FunctionComponent, useRef, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline3Branchs: FunctionComponent = () => {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 150 150"
        preserveAspectRatio="none"
      >
        <path
          className="timeline__main timeline__main--merge stroke-branch-first-light dark:stroke-branch-first-dark shadow-branch-first-light dark:shadow-branch-first-dark"
          d="M10,0 L 10,150"
          fill="transparent"
          strokeWidth="0.75"
        />
        <path
          className="timeline__main timeline__main--checkout stroke-branch-second-light shadow-branch-second-light--checkout dark:shadow-branch-second-dark--checkout"
          d="M10,15 C 10,35 15,35 75,37"
          fill="transparent"
          strokeWidth="0.75"
        />
        {/* Add text : checkout */}
        <g>
          <path
            id="main--checkout"
            d="M10,14 C 12,35 15,35 75,37"
            fill="transparent"
          />
          <text className="timeline__text fill-branch-second-light">
            <textPath href="#main--checkout" startOffset="10%">
              Checkout
            </textPath>
          </text>
        </g>
        <path
          className="timeline__secondary stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 C 75,45 25,37 25,50 L 25,90 C 25,100 40,105 75,110"
          fill="transparent"
          strokeWidth="0.75"
          stroke="red"
        />
        <path
          className="timeline__secondary stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 L 75,120 C 75,130 50,135 10,140"
          fill="transparent"
          strokeWidth="0.75"
        />
        <path
          className="timeline__secondary stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 C 75,45 125,37 125,50 L 125,100 C 125,110 110,115 75,120"
          fill="transparent"
          strokeWidth="0.75"
        />
        {/* Add text : merge */}
        <g>
          <path
            id="main--merge"
            d="M10,139 C 10,139 50,134 75,129"
            fill="transparent"
          />
          <text className="timeline__text fill-branch-second-light">
            <textPath href="#main--merge" startOffset="5%">
              Merge
            </textPath>
          </text>
        </g>

        <circle
          className="timeline__dot timeline__dot--branch fill-branch-second-light"
          cx="10"
          cy="15"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--checkout fill-branch-second-light"
          cx="75"
          cy="37"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="75"
          cy="110"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="75"
          cy="120"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot--merge fill-branch-second-light"
          cx="10"
          cy="140"
          r="1.25"
          fill="transparent"
        />
      </svg>
      <Outlet />
    </div>
  );
};

export default Timeline3Branchs;
