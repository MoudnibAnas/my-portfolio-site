
import { useContext } from "react";
import { PortfolioModeContext } from "@/App";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
  type: "design" | "dev" | "both";
};

const skillsData: Skill[] = [
  // Design Skills
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", type: "design" },
  { name: "FigJam", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", type: "design" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", type: "design" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", type: "design" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", type: "design" },
  { name: "Framer", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg", type: "design" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", type: "design" },
  
  // Dev Skills
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", type: "dev" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", type: "dev" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", type: "dev" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", type: "dev" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", type: "dev" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", type: "dev" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", type: "dev" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", type: "dev" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", type: "dev" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", type: "dev" },
  { name: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg", type: "dev" },
  
  // Git & Tooling (dev only)
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", type: "dev" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", type: "dev" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", type: "dev" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", type: "dev" },
];

const Skills = () => {
  const { mode } = useContext(PortfolioModeContext);
  
  // Filter skills based on current mode
  const filteredSkills = skillsData.filter(
    skill => skill.type === mode
  );
  
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className={`text-3xl font-bold mb-2 text-center ${
          mode === "design" ? "text-design-primary" : "text-dev-primary"
        }`}>
          {mode === "design" ? "Design Skills" : "Development Skills"}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {mode === "design" 
            ? "My expertise in design tools and methodologies for creating intuitive user experiences." 
            : "My technical skills in software engineering, quality assurance, and development tools."}
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { mode } = useContext(PortfolioModeContext);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`flex flex-col items-center p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md ${
        mode === "design" ? "hover:bg-design-accent/10" : "hover:bg-dev-accent/10"
      } glass-card`}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img 
          src={skill.icon} 
          alt={`${skill.name} icon`} 
          className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-sm font-medium text-center">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;
