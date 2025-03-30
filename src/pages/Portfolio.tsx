
import { useContext, useState } from "react";
import { PortfolioModeContext } from "@/App";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  const { mode } = useContext(PortfolioModeContext);
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${
      mode === "design" ? "bg-gradient-to-b from-white to-design-accent/10" : "bg-gradient-to-b from-white to-dev-accent/10"
    }`}>
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 md:px-8">
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* HR-friendly structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Person",
          "name": "Anas Moudnib",
          "jobTitle": "Software Engineer",
          "email": "anasmoudnib05@gmail.com",
          "skills": [
            "Software Engineering", "React", "TypeScript", "JavaScript", 
            "Node.js", "Java", "Python", "Spring Boot", "UI/UX Design", 
            "Figma", "Adobe XD", "Git", "GitHub", "GitLab"
          ],
          "url": window.location.href,
          "sameAs": [
            "https://www.linkedin.com/in/anas-moudnib-b795b1236/",
            "https://github.com/MoudnibAnas"
          ]
        })
      }} />
    </div>
  );
};

export default Portfolio;
