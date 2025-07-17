import { useContext } from "react";
import { PortfolioModeContext } from "@/App";

const About = () => {
  const { mode } = useContext(PortfolioModeContext);

  return (
    <>
      {/* DESIGN SECTION */}
      {mode === "design" && (
        <section id="about-design" className="py-16 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center text-design-primary">
              About Me – Designer
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Designing intuitive, modern interfaces for mobile and web with a strong focus on user experience, usability, and responsiveness.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-2/5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl opacity-20 design-gradient"></div>
                  <img
                    src="/uploads/156e5e31-0d68-4f4f-b37e-1f60c576550f.png"
                    alt="Anas Moudnib - Design Focus"
                    className="rounded-xl relative z-10 object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg design-gradient"></div>
                </div>
              </div>

              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl font-bold mb-4">Creative Technologist</h3>
                <p className="text-gray-700 mb-4">
                  I specialize in crafting visually engaging and highly functional interfaces for both mobile and desktop experiences. My process starts with research and ideation, flows through wireframes and prototypes, and ends in pixel-perfect handoffs.
                </p>
                <p className="text-gray-700 mb-6">
                  From system architecture to visual storytelling, I ensure every screen delivers clarity, delight, and purpose. Whether it's a landing page, SaaS dashboard, or mobile app, I create designs that scale beautifully across platforms.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2 text-design-primary">Design Skills</h4>
                    <p className="text-sm text-gray-600">
                      Mobile & Web UI/UX Design, Responsive Layouts, Design Systems, Accessibility, and Interactive Prototyping.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      I use a variety of design tools to bring ideas to life and streamline the design process, including <strong>Figma</strong> for high-fidelity UI design, <strong>FigJam</strong> for collaborative brainstorming, <strong>Adobe Illustrator</strong> and <strong>Adobe XD</strong> for detailed vector work and prototypes, as well as <strong>Framer</strong> and <strong>Webflow</strong> for motion design and no-code interactive experiences.
                    </p>

                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-2 rounded-full text-white font-medium design-gradient hover:shadow-lg hover:shadow-design-primary/20"
                  >
                    Work With Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
                  >
                    Design Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* DEV SECTION */}
      {mode === "dev" && (
        <section id="about-dev" className="py-16 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center text-dev-primary">
              About Me – Developer
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              I turn ideas into efficient, reliable, and scalable software systems.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-2/5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl opacity-20 dev-gradient"></div>
                  <img
                    src="/uploads/156e5e31-0d68-4f4f-b37e-1f60c576550f.png"
                    alt="Anas Moudnib - Dev Focus"
                    className="rounded-xl relative z-10 object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg dev-gradient"></div>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl font-bold mb-4">Full Stack Engineer</h3>
                <p className="text-gray-700 mb-4">
                  I build robust frontend and backend systems with React, Node.js, Java, and modern frameworks.
                </p>
                <p className="text-gray-700 mb-6">
                  I ensure performance, security, and maintainability through best development practices.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2 text-dev-primary">
                      Technologies
                    </h4>
                    <p className="text-sm text-gray-600">
                      React, TypeScript, Spring Boot, MongoDB, PostgreSQL, Docker, and more.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-dev-primary">
                      Dev Principles
                    </h4>
                    <p className="text-sm text-gray-600">
                      Clean code, API architecture, test-driven development, and scalability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-2 rounded-full text-white font-medium dev-gradient hover:shadow-lg hover:shadow-dev-primary/20"
                  >
                    Let’s Connect
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
                  >
                    Dev Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
