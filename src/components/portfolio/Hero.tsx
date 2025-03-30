
import { useContext } from "react";
import { PortfolioModeContext } from "@/App";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const { mode } = useContext(PortfolioModeContext);
  const isMobile = useIsMobile();
  
  const titleDesign = "UI/UX Designer | Figma Specialist";
  const titleDev = "Software Engineer";
  
  const subtitleDesign = "I create delightful user experiences through intuitive and user-centered design approaches.";
  const subtitleDev = "I build robust and scalable applications with a focus on clean code and best practices.";
  
  return (
    <section 
      className={`relative py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[90vh] ${
        mode === "design" ? "bg-design-accent/5" : "bg-dev-accent/5"
      }`}
    >
      {/* Background overlay with more professional image */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: mode === "design" 
            ? "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
            : "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-0">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/lovable-uploads/45bcaabd-9e36-4ec7-aba2-7ffba2104213.png" 
              alt="Anas Moudnib" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 animate-fade-in ${
          mode === "design" ? "text-design-dark" : "text-dev-dark"
        }`}>
          {mode === "design" ? titleDesign : titleDev}
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 transition-all duration-500 max-w-2xl mx-auto">
          {mode === "design" ? subtitleDesign : subtitleDev}
        </p>
        
        <div className="mb-10">
          <p className={`inline-block font-medium px-4 py-2 rounded-full text-white ${
            mode === "design" ? "design-gradient" : "dev-gradient"
          }`}>
            Creating Impactful Digital Solutions
          </p>
        </div>
        
        <div className="mt-12 animate-bounce">
          <a href="#projects" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
