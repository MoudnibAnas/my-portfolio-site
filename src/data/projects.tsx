
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
  
export const projectsData: Project[] = [
    {
      id: 1,
      title: "Vegan Scanner App",
      description: "A mobile app design for scanning product barcodes to check if they're vegan-friendly.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?...",
      tags: ["Mobile App", "Figma", "Wireframe", "Prototype"],
      type: "design",
      links: {
        figma: "#",
      },
    },
    {
      id: 2,
      title: "Invoice Maker",
      description: "A responsive web design for creating and managing invoices with custom templates.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?...",
      tags: ["Web App", "Figma", "UI Kit", "Prototype"],
      type: "design",
      links: {
        figma: "#",
      },
    },
    {
      id: 3,
      title: "BypassGPT",
      description: "A web application that helps bypass content filters in AI language models.",
      image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?...",
      tags: ["React", "TypeScript", "API", "Node.js"],
      type: "dev",
      links: {
        demo: "#",
        code: "#",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A dual-mode portfolio website showcasing both design and development skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?...",
      tags: ["React", "Tailwind CSS", "TypeScript", "Figma"],
      type: "both",
      links: {
        demo: "#",
        code: "#",
        figma: "#",
      },
    },
    {
      id: 5,
      title: "Task Management Tool",
      description: "A collaborative task management app with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?...",
      tags: ["React", "Firebase", "Tailwind CSS"],
      type: "dev",
      links: {
        demo: "#",
        code: "#",
      },
    },
    {
      id: 6,
      title: "E-commerce UI Kit",
      description: "A comprehensive UI kit for e-commerce platforms with 50+ components.",
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?...",
      tags: ["UI Kit", "Figma", "Design System"],
      type: "design",
      links: {
        figma: "#",
      },
    },
  ];
  