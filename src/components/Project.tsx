import { FunctionComponent, useEffect, useRef, useLayoutEffect } from "react";
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

const Project: FunctionComponent = () => {
  const projectSection: React.RefObject<HTMLElement> =
    useRef<HTMLElement | null>(null);
  const timelineMain: React.RefObject<SVGRectElement> =
    useRef<SVGRectElement | null>(null);
  const timelineRight: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (projectSection.current != null) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (timelineMain.current != null && timelineRight.current != null) {
              timelineMain.current.classList.add("timeline-active");
              timelineRight.current.classList.add("active");
            }
          }

          if (!entries[0].isIntersecting) {
            if (timelineMain.current != null && timelineRight.current != null) {
              timelineMain.current.classList.remove("timeline-active");
            }
          }
        },
        {
          threshold: 0.45,
        }
      );

      observer.observe(projectSection.current);

      return () => observer.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (projectSection.current != null && self.selector) {
        const projects = self.selector(".wrapper__project");
        const containerWidth: number = projectSection.current.clientWidth;

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
    }, projectSection); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section ref={projectSection} className="project-section">
      <svg
        className="timeline-main"
        width="100%"
        height="100%"
        viewBox="0 0 1 150"
      >
        <rect ref={timelineMain} width="100%" height="0" x="0" y="0" />
      </svg>

      <div ref={timelineRight} className="timeline-right">
        <h2 className="text-2xl font-bold text-gray-900">PROJETS</h2>
      </div>

      <div>
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

export default Project;

interface ProjectData {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}
