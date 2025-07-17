import { useContext, useRef } from "react";
import { PortfolioModeContext } from "@/App";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "design" | "dev" | "both";
  links?: {
    demo?: string;
    code?: string;
    figma?: string;
  };
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Mira Ofertas",
    description: "an innovative website combining the features of an e-commerce platform with an affiliate marketing system",
    image: "/uploads/miraOfertas.png",
    tags: ["Web App", "Figma", "Wireframe", "Prototype"],
    type: "design",
    links: { figma: "https://www.figma.com/design/KoijMizDu8YrgYAu4srzd6/Baltasar-(Copy)?node-id=0-1&t=qc2KsQPaHJT0fIeh-1" }
  },
  {
    id: 2,
    title: "SAAS - Course creator hub",
    description: "A responsive web design to revolutionize online education through the creation of a Course Creator Platform ",
    image: "/uploads/Learning.png",
    tags: ["SAAS System", "Figma", "UI Kit", "UI/UX Design"],
    type: "design",
    links: { figma: "https://www.figma.com/design/ocQMUShNh5ddZBSxYTsAhJ/SAAS---Course-creator-hub?node-id=0-1&t=Vd8gXW0i0egKnEsE-1" }
  },
  {
    id: 3,
    title: "Mobile App Insect Scanner",
    description: "A mobile application designed to detect and identify traces of insect activity",
    image: "/uploads/Insect Scanner.png",
    tags: ["Mobile Design", "Figma", "Cross Platform", "UI/UX Design"],
    type: "design",
    links: { figma:"https://www.figma.com/design/0pIDky8A8SaWoWswaWJoZc/Moudnib-Anas----Designs?node-id=241-10960&t=qpjP2zo6wwCUGj1D-1"}
  },
  {
    id: 4,
    title: "AI Video Generator",
    description: "This project involved designing a sleek for an AI-powered video generation app.",
    image: "/uploads/AI video Generator.jpg",
    tags: ["Mobile Design", "Figma", "Cross Platform", "UI/UX Design"],
    type: "design",
    links: { figma:"https://www.figma.com/design/0pIDky8A8SaWoWswaWJoZc/Moudnib-Anas----Designs?node-id=241-10960&t=qpjP2zo6wwCUGj1D-1"}
  },
  {
    id: 5,
    title: "Fusemi Landing Page",
    description: "A fully responsive landing page was designed and developed to support the launch of Fusemi",
    image: "/uploads/Fusemi.png",
    tags: ["React", "Framer", "Tailwind CSS", "figma"],
    type: "both",
    links: { demo: "https://fusemi.io/" }
  },
  {
    id: 6,
    title: "Product-Management",
    description: "It allows users to manage a catalog of products through a modern, scalable, and structured system.",
    image: "/uploads/Product-Management.png",
    tags: ["Java", "SpringBoot", "XML","JavaScript"],
    type: "dev",
    links: { code:"https://github.com/helva-agent/helva-agent.github.io" }
  },
  {
    id: 7,
    title: "Helfa Agent Website",
    description: "Helva is an Agent designed to access the entire Polygon & Quickswap Ecosystem ",
    image: "/uploads/Helfa.png",
    tags: ["React", "Typescript", "Tailwind CSS", "Vite"],
    type: "dev",
    links: { demo: "https://fusemi.io/" ,code:"https://github.com/helva-agent/helva-agent.github.io" }
  },


];

const Projects = () => {
  const { mode } = useContext(PortfolioModeContext);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsData.filter(
    (project) => project.type === mode || project.type === "both"
  );

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth / 3;
    containerRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section id="projects" className="py-16 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-2 text-center ${
            mode === "design" ? "text-design-primary" : "text-dev-primary"
          }`}
        >
          {mode === "design" ? "Design Projects" : "Development Projects"}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {mode === "design"
            ? "Explore my UI/UX design work, including wireframes, prototypes, and user research."
            : "Check out my web development projects built with modern frameworks and best practices."}
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            <ChevronLeft />
          </button>

          <div
            ref={containerRef}
            className="overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div className="flex h-full gap-6 md:gap-8 px-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full sm:w-[300px] md:w-[360px]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { mode } = useContext(PortfolioModeContext);

  return (
    <div className="glass-card card-hover overflow-hidden cursor-pointer">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`badge ${
                mode === "design"
                  ? "bg-design-accent/20 text-design-secondary"
                  : "bg-dev-accent/20 text-dev-secondary"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2 flex-wrap">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design"
                  ? "text-design-primary"
                  : "text-dev-primary"
              } hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.links?.code && (
            <a
              href={project.links.code}
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design"
                  ? "text-design-primary"
                  : "text-dev-primary"
              } hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.links?.figma && (
            <a
              href={project.links.figma}
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design"
                  ? "text-design-primary"
                  : "text-dev-primary"
              } hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} /> Figma
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
