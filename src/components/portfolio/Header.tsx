
import { useContext, useState } from "react";
import { PortfolioModeContext, type PortfolioMode } from "@/App";
import { Palette, Code, Languages } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { mode, setMode } = useContext(PortfolioModeContext);
  // const [language, setLanguage] = useState<"en" | "fr">("en");
  // const [language, setLanguage] = useState<"en" | "fr">("en");


  const toggleMode = () => {
    setMode(mode === "design" ? "dev" : "design");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold">
            <span className={mode === "design" ? "text-design-primary" : "text-dev-primary"}>
              {mode === "design" ? "UI/UX Designer" : "Software Engineer"}
            </span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-sm font-medium hover:opacity-80 transition-opacity">Projects</a>
          <a href="#skills" className="text-sm font-medium hover:opacity-80 transition-opacity">Skills</a>
          <a href="#about" className="text-sm font-medium hover:opacity-80 transition-opacity">About</a>
          <a href="#contact" className="text-sm font-medium hover:opacity-80 transition-opacity">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* <LanguageSelector language={language} setLanguage={setLanguage} /> */}
          <ModeToggle currentMode={mode} onToggle={toggleMode} />
        </div>
      </div>
    </header>
  );
};

type LanguageSelectorProps = {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
};

const LanguageSelector = ({ language, setLanguage }: LanguageSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors">
        <Languages size={16} />
        <span>{language === "en" ? "EN" : "FR"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-gray-100" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("fr")}
          className={language === "fr" ? "bg-gray-100" : ""}
        >
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type ModeToggleProps = {
  currentMode: PortfolioMode;
  onToggle: () => void;
};

const ModeToggle = ({ currentMode, onToggle }: ModeToggleProps) => {
  return (
    <div className="relative flex items-center p-1 rounded-full border shadow-sm">
      <button
        className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          currentMode === "design"
            ? "bg-design-primary text-white"
            : "bg-transparent text-gray-500"
        }`}
        onClick={currentMode === "dev" ? onToggle : undefined}
      >
        <Palette size={16} />
        <span>Design</span>
      </button>
      <button
        className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          currentMode === "dev"
            ? "bg-dev-primary text-white"
            : "bg-transparent text-gray-500"
        }`}
        onClick={currentMode === "design" ? onToggle : undefined}
      >
        <Code size={16} />
        <span>Dev</span>
      </button>
    </div>
  );
};

export default Header;
