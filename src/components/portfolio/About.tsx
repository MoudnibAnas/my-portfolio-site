
import { useContext } from "react";
import { PortfolioModeContext } from "@/App";

const About = () => {
  const { mode } = useContext(PortfolioModeContext);
  
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-2 text-center ${
          mode === "design" ? "text-design-primary" : "text-dev-primary"
        }`}>
          About Me
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My journey as a Software Engineer with skills in both design and development.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className={`absolute inset-0 rounded-xl opacity-20 ${
                mode === "design" ? "design-gradient" : "dev-gradient"
              }`}></div>
              <img 
                src="/lovable-uploads/156e5e31-0d68-4f4f-b37e-1f60c576550f.png" 
                alt="Anas Moudnib presenting technologies" 
                className="rounded-xl relative z-10 transition-all object-cover w-full h-full"
              />
              <div className={`absolute -bottom-3 -right-3 w-24 h-24 rounded-lg ${
                mode === "design" ? "design-gradient" : "dev-gradient"
              }`}></div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-bold mb-4">I'm Anas Moudnib</h3>
            <p className="text-gray-700 mb-4">
              As a Software Engineer, I bring a unique perspective to both design and development. I specialize in building robust applications and creating intuitive user interfaces that deliver exceptional experiences.
            </p>
            <p className="text-gray-700 mb-6">
              With experience in frontend and backend technologies, I help bridge the gap between design requirements and technical implementation to create reliable, user-friendly applications that deliver value.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className={`font-medium mb-2 ${
                  mode === "design" ? "text-design-primary" : "text-dev-primary"
                }`}>
                  Technical Expertise
                </h4>
                <p className="text-sm text-gray-600">
                  Proficiency in React, TypeScript, Node.js, Java, and other modern technologies for creating powerful applications.
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${
                  mode === "design" ? "text-design-primary" : "text-dev-primary"
                }`}>
                  Development Approach
                </h4>
                <p className="text-sm text-gray-600">
                  Clean code, responsive design, and software development best practices for maintainable and scalable solutions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href="#contact"
                className={`px-6 py-2 rounded-full text-white font-medium transition-all ${
                  mode === "design" ? "design-gradient hover:shadow-lg hover:shadow-design-primary/20" : "dev-gradient hover:shadow-lg hover:shadow-dev-primary/20"
                }`}
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
