
import { useContext } from "react";
import { PortfolioModeContext } from "@/App";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { mode } = useContext(PortfolioModeContext);
  
  return (
    <footer className={`mt-20 py-10 border-t ${
      mode === "design" ? "border-design-accent/20" : "border-dev-accent/20"
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className={`text-lg font-medium ${
              mode === "design" ? "text-design-primary" : "text-dev-primary"
            }`}>
              Anas Moudnib
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Software Quality Engineer
            </p>
            <p className="text-sm text-gray-500 mt-1">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/MoudnibAnas" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anas-moudnib-b795b1236/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:anasmoudnib05@gmail.com" className="text-gray-500 hover:text-gray-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 mr-4 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
