import { FunctionComponent, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects: Array<ProjectData> = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Projects: FunctionComponent = () => {
  const projectsSection: React.RefObject<HTMLElement> =
    useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (projectsSection.current != null && self.selector) {
        // PROJOECTS TIMELINE ANIMATION
        const timelineMainMerge = self.selector(
          ".projects__timeline__main--merge"
        );

        const timelineDotBranch = self.selector(
          ".projects__timeline__dot--branch"
        );

        const timelineMainCheckout = self.selector(
          ".projects__timeline__main--checkout"
        );

        const timelineDotCheckout = self.selector(
          ".projects__timeline__dot--checkout"
        );

        const timelineSecondary = self.selector(".projects__timeline__secondary");

        const timelineDotMerge = self.selector(".projects__timeline__dot--merge");

        gsap
          .timeline()
          .to(timelineMainMerge, {
            scrollTrigger: {
              trigger: projectsSection.current,
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
              trigger: projectsSection.current,
              start: "15% center",
              end: "20% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineMainCheckout, {
            scrollTrigger: {
              trigger: projectsSection.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotCheckout, {
            scrollTrigger: {
              trigger: projectsSection.current,
              start: "33% center",
              end: "38% center",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          })
          .to(timelineSecondary, {
            scrollTrigger: {
              trigger: projectsSection.current,
              start: "top top",
              end: "85% center",
              scrub: 0.5,
            },
            strokeDashoffset: 0,
            ease: "power3.inOut",
          })
          .to(timelineDotMerge, {
            scrollTrigger: {
              trigger: projectsSection.current,
              start: "83% 60%",
              end: "90% 65%",
              scrub: true,
            },
            opacity: 1,
            ease: "power3.inOut",
          });

        // PROJECTS CARDS ANIMATION
        const projects = self.selector(".wrapper__project");
        const containerWidth: number = projectsSection.current.clientWidth;

        projects.forEach((project: HTMLElement, index: number) => {
          const projectCardsWidth: number = project.clientWidth;
          const remainderWidth: number =
            (containerWidth - projectCardsWidth * projects.length) / 2;

          gsap
            .timeline()
            .to(project, {
              scrollTrigger: {
                trigger: project,
                start: "bottom bottom",
                end: "top 20%",
                scrub: 1,
              },
              top: "50%",
              x: "50%",
              scale: 1,
              rotate: 0,
              left: projectCardsWidth * index + remainderWidth * index,
              ease: "power3.inOut",
            })
            .to(project.children[1], {
              scrollTrigger: {
                trigger: project.children[1],
                scrub: true,
              },
              top: "0",
              scale: 1,
            });
        });
      }
    }, projectsSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section ref={projectsSection} className="projects">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="projects__timeline"
        width="100%"
        height="100%"
        viewBox="0 0 100 250"
      >
        <path
          className="projects__timeline__main projects__timeline__main--merge"
          d="M0,0 L 0,250"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="projects__timeline__main projects__timeline__main--checkout"
          d="M0,10 C 0,25 10,35 50,35"
          fill="transparent"
          strokeWidth="1"
        />
        <path
          className="projects__timeline__secondary"
          d="M50,35 L 50,210 C 50,220 50,230 0,240"
          fill="transparent"
          strokeWidth="1"
        />
        <circle
          className="projects__timeline__dot projects__timeline__dot--branch"
          cx="0"
          cy="10"
          r="2"
          fill="transparent"
        />
        <circle
          className="projects__timeline__dot projects__timeline__dot--checkout"
          cx="50"
          cy="35"
          r="2"
          fill="transparent"
        />
        <circle
          className="projects__timeline__dot projects__timeline__dot--merge"
          cx="0"
          cy="240"
          r="2"
          fill="transparent"
        />
      </svg>

      <div className="projects__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Projets</h2>
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`wrapper__project wrapper__project__${index + 1}`}
          >
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="h-full w-full object-cover object-center"
            />
            <div className="wrapper__project__detail">
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={project.href}>
                  <span className="absolute inset-0" />
                  {project.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

interface ProjectData {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}
