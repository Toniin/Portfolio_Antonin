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
        const timelineTextCheckout = self.selector(".timeline__text--checkout");
        const timelineSecondaryFirstBranch = self.selector(
          ".timeline__secondary--first"
        );
        const timelineSecondarySecondBranch = self.selector(
          ".timeline__secondary--second"
        );
        const timelineSecondaryThirdBranch = self.selector(
          ".timeline__secondary--third"
        );
        const timelineDotFirstBranchMerge = self.selector(
          ".timeline__dot__first_branch--merge"
        );
        const timelineDotSecondBranchMerge = self.selector(
          ".timeline__dot__second_branch--merge"
        );
        const timelineDotThirdBranchMerge = self.selector(
          ".timeline__dot__third_branch--merge"
        );
        const timelineTextMerge = self.selector(".timeline__text--merge");

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "top bottom",
              end: "75% 35%",
              scrub: 0.5,
            },
            scaleY: 1,
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotBranch, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "5% center",
              end: "10% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "8% 50%",
              end: "15% center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "13% center",
              end: "15% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineTextCheckout, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "10% center",
              end: "14% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondaryFirstBranch, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "5% center",
              end: "72% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineSecondarySecondBranch, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "5% center",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineSecondaryThirdBranch, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "5% center",
              end: "73% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotFirstBranchMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "39% 50%",
              end: "41% 50%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineDotThirdBranchMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "40% center",
              end: "42% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineDotSecondBranchMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "46% center",
              end: "48% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineTextMerge, {
            scrollTrigger: {
              trigger: timeline.current,
              start: "45% center",
              end: "49% center",
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
        <g className="timeline__text--checkout">
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
          className="timeline__secondary timeline__secondary--first stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 C 75,45 25,37 25,50 L 25,90 C 25,100 40,105 75,110"
          fill="transparent"
          strokeWidth="0.75"
          stroke="red"
        />
        <path
          className="timeline__secondary timeline__secondary--second stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 L 75,120 C 75,130 50,135 10,140"
          fill="transparent"
          strokeWidth="0.75"
        />
        <path
          className="timeline__secondary timeline__secondary--third stroke-branch-second-light shadow-branch-second-light dark:shadow-branch-second-dark"
          d="M75,37 C 75,45 125,37 125,50 L 125,100 C 125,110 110,115 75,120"
          fill="transparent"
          strokeWidth="0.75"
        />
        {/* Add text : merge */}
        <g className="timeline__text--merge">
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
          className="timeline__dot timeline__dot__first_branch--merge fill-branch-second-light"
          cx="75"
          cy="110"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot__third_branch--merge fill-branch-second-light"
          cx="75"
          cy="120"
          r="1.25"
          fill="transparent"
        />
        <circle
          className="timeline__dot timeline__dot__second_branch--merge fill-branch-second-light"
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
