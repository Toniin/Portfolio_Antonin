import { FunctionComponent, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "./Timeline";
import projectsData from "../mockdata/projectsData.json"

const projects: Array<ProjectData> = [...projectsData];

gsap.registerPlugin(ScrollTrigger);

const Projects: FunctionComponent = () => {
  const projectsSection: React.RefObject<HTMLElement> =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (projectsSection.current != null && self.selector) {
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
      <Timeline />
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
