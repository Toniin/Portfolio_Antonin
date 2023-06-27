import { FunctionComponent, useEffect, useRef } from "react";

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

const Project: FunctionComponent = () => {
  const projectSection: React.RefObject<HTMLElement> =
    useRef<HTMLElement|null>(null);
  const timelineMain: React.RefObject<SVGRectElement> =
    useRef<SVGRectElement|null>(null);
  const timelineRight: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    if (projectSection.current != null) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            timelineMain.current != null &&
            timelineRight.current != null
          ) {
            timelineMain.current.classList.add("timeline-active");
            timelineRight.current.classList.add("active");
          }

          if (
            !entries[0].isIntersecting &&
            timelineMain.current != null &&
            timelineRight.current != null
          ) {
            timelineMain.current.classList.remove("timeline-active");
            timelineRight.current.classList.remove("active");
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

  return (
    <section ref={projectSection} className="project-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
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

          <div className="my-20 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project

interface ProjectData {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}
