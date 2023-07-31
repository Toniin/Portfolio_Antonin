import { FunctionComponent, useRef, useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline: FunctionComponent = () => {
  const timeline: React.RefObject<HTMLDivElement> =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  const [horizontal, setHorizontal] = useState(false);

  useLayoutEffect(() => {
    if (
      timeline.current &&
      timeline.current.clientWidth > timeline.current.clientHeight
    ) {
      setHorizontal(true);
    } else {
      setHorizontal(false);
    }

    const ctx = gsap.context((self) => {
      if (self.selector) {
        const timelineMainMerge = self.selector(".timeline__main--merge");
        const timelineDotBranch = self.selector(".timeline__dot--branch");
        const timelineMainCheckout = self.selector(".timeline__main--checkout");
        const timelineDotCheckout = self.selector(".timeline__dot--checkout");
        const timelineSecondary = self.selector(".timeline__secondary");
        const timelineDotMerge = self.selector(".timeline__dot--merge");

        if (horizontal === true || window.innerWidth >= 975) {
          const timelineTextCheckout = self.selector(
            ".timeline__text--checkout"
          );
          const timelineTextMerge = self.selector(".timeline__text--merge");

          gsap
            .timeline()
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
                start: "9% 50%",
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
            .to(timelineDotMerge, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "46% center",
                end: "48% center",
                scrub: true,
              },
              opacity: 1,
              ease: "power3.inOut",
            })
            .to(timelineSecondary, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "5% center",
                end: "85% center",
                scrub: 0.5,
              },
              strokeDashoffset: 0,
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
        } else {
          gsap
            .timeline()
            .to(timelineDotBranch, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "15% center",
                end: "17% center",
                scrub: true,
              },
              opacity: 1,
              ease: "power3.inOut",
            })
            .to(timelineMainCheckout, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "15% center",
                end: "25% center",
                scrub: 1,
              },
              strokeDashoffset: 0,
              ease: "power3.inOut",
            })
            .to(timelineDotCheckout, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "21% center",
                end: "23% center",
                scrub: true,
              },
              opacity: 1,
              ease: "power3.inOut",
            })
            .to(timelineSecondary, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "15% center",
                end: "65% center",
                scrub: 0.5,
              },
              strokeDashoffset: 0,
              ease: "power3.inOut",
            })
            .to(timelineDotMerge, {
              scrollTrigger: {
                trigger: timeline.current,
                start: "52% center",
                end: "54% center",
                scrub: true,
              },
              opacity: 1,
              ease: "power3.inOut",
            });
        }

        gsap.timeline().to(timelineMainMerge, {
          scrollTrigger: {
            trigger: timeline.current,
            start: "top bottom",
            end: "75% 35%",
            scrub: 0.5,
          },
          scaleY: 1,
          strokeDashoffset: 0,
          ease: "power3.inOut",
        });
      }
    }, timeline); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, [horizontal]);

  return (
    <div ref={timeline} className="timeline w-full h-full">
      {horizontal === true || window.innerWidth >= 975 ? (
        // HORIZONTAL SCREEN || SCREEN >= 975px
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 150 150"
          preserveAspectRatio="none"
        >
          <path
            className="timeline__main timeline__main--merge first__branch__stroke--light dark:first__branch__stroke--dark first__branch__shadow--light dark:first__branch__shadow--dark"
            d="M10,0 L 10,150"
            fill="transparent"
            strokeWidth="0.75"
          />
          <path
            className="timeline__main timeline__main--checkout second__branch__stroke second__branch__checkout__shadow"
            d="M10,15 C 10,35 15,35 75,37"
            fill="transparent"
            strokeWidth="0.75"
          />
          <path
            className="timeline__secondary second__branch__stroke second__branch__shadow"
            d="M75,37 L 75,120 C 75,130 50,135 10,140"
            fill="transparent"
            strokeWidth="0.75"
          />
          <circle
            className="timeline__dot timeline__dot--branch second__branch__fill"
            cx="10"
            cy="15"
            r="1.25"
            fill="transparent"
          />
          <circle
            className="timeline__dot timeline__dot--checkout second__branch__fill"
            cx="75"
            cy="37"
            r="1.25"
            fill="transparent"
          />
          <circle
            className="timeline__dot timeline__dot--merge second__branch__fill"
            cx="10"
            cy="140"
            r="1.25"
            fill="transparent"
          />
          {/* Add text : checkout */}
          <g className="timeline__text--checkout">
            <path
              id="text--checkout"
              d="M10,14 C 12,35 15,35 75,37"
              fill="transparent"
            />
            <text className="timeline__text second__branch__fill">
              <textPath href="#text--checkout" startOffset="10%">
                Checkout
              </textPath>
            </text>
          </g>
          {/* Add text : merge */}
          <g className="timeline__text--merge">
            <path
              id="text--merge"
              d="M10,139 C 10,139 50,134 75,129"
              fill="transparent"
            />
            <text className="timeline__text second__branch__fill">
              <textPath href="#text--merge" startOffset="5%">
                Merge
              </textPath>
            </text>
          </g>
        </svg>
      ) : (
        // VERTICAL SCREEN
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 150 300"
          preserveAspectRatio="none"
        >
          <path
            className="timeline__main timeline__main--merge first__branch__stroke--light dark:first__branch__stroke--dark first__branch__shadow--light dark:first__branch__shadow--dark"
            d="M10,0 L 10,300"
            fill="transparent"
            strokeWidth="1.5"
          />
          <path
            className="timeline__main timeline__main--checkout second__branch__stroke second__branch__checkout__shadow"
            d="M10,25 C 10,45 15,50 75,50"
            fill="transparent"
            strokeWidth="1.5"
          />
          <path
            className="timeline__secondary second__branch__stroke second__branch__shadow"
            d="M75,50 L 75,235 C 75,250 50,265 10,275"
            fill="transparent"
            strokeWidth="1.5"
          />
          <circle
            className="timeline__dot timeline__dot--branch second__branch__fill"
            cx="10"
            cy="25"
            r="3"
            fill="transparent"
          />
          <circle
            className="timeline__dot timeline__dot--checkout second__branch__fill"
            cx="75"
            cy="50"
            r="3"
            fill="transparent"
          />
          <circle
            className="timeline__dot timeline__dot--merge second__branch__fill"
            cx="10"
            cy="275"
            r="3"
            fill="transparent"
          />
        </svg>
      )}
      <Outlet />
    </div>
  );
};

export default Timeline;
