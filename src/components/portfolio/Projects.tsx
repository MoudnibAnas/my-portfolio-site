
import { useContext } from "react";
import { PortfolioModeContext } from "@/App";
import { ExternalLink, Github } from "lucide-react";

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
    title: "Vegan Scanner App",
    description: "A mobile app design for scanning product barcodes to check if they're vegan-friendly.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Mobile App", "Figma", "Wireframe", "Prototype"],
    type: "design",
    links: {
      figma: "#"
    }
  },
  {
    id: 2,
    title: "Invoice Maker",
    description: "A responsive web design for creating and managing invoices with custom templates.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Web App", "Figma", "UI Kit", "Prototype"],
    type: "design",
    links: {
      figma: "#"
    }
  },
  {
    id: 3,
    title: "BypassGPT",
    description: "A web application that helps bypass content filters in AI language models.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "TypeScript", "API", "Node.js"],
    type: "dev",
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A dual-mode portfolio website showcasing both design and development skills.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Tailwind CSS", "TypeScript", "Figma"],
    type: "both",
    links: {
      demo: "#",
      code: "#",
      figma: "#"
    }
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A collaborative task management app with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Firebase", "Tailwind CSS"],
    type: "dev",
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: 6,
    title: "E-commerce UI Kit",
    description: "A comprehensive UI kit for e-commerce platforms with 50+ components.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["UI Kit", "Figma", "Design System"],
    type: "design",
    links: {
      figma: "#"
    }
  }
];

const Projects = () => {
  const { mode } = useContext(PortfolioModeContext);
  
  // Filter projects based on current mode
  const filteredProjects = projectsData.filter(
    project => project.type === mode || project.type === "both"
  );
  
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl font-bold mb-2 text-center ${
          mode === "design" ? "text-design-primary" : "text-dev-primary"
        }`}>
          {mode === "design" ? "Design Projects" : "Development Projects"}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {mode === "design" 
            ? "Explore my UI/UX design work, including wireframes, prototypes, and user research." 
            : "Check out my web development projects built with modern frameworks and best practices."}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { mode } = useContext(PortfolioModeContext);
  
  return (
    <div className="glass-card card-hover overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} 
              className={`badge ${
                mode === "design" ? "bg-design-accent/20 text-design-secondary" : "bg-dev-accent/20 text-dev-secondary"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4 flex-wrap">
          {project.links?.demo && (
            <a href={project.links.demo} 
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design" ? "text-design-primary" : "text-dev-primary"
              } hover:underline`}
              target="_blank" rel="noopener noreferrer"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          
          {project.links?.code && (
            <a href={project.links.code} 
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design" ? "text-design-primary" : "text-dev-primary"
              } hover:underline`}
              target="_blank" rel="noopener noreferrer"
            >
              <Github size={14} /> View Code
            </a>
          )}
          
          {project.links?.figma && (
            <a href={project.links.figma} 
              className={`inline-flex items-center gap-1 text-sm font-medium ${
                mode === "design" ? "text-design-primary" : "text-dev-primary"
              } hover:underline`}
              target="_blank" rel="noopener noreferrer"
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
