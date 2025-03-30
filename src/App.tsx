
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create a context for the portfolio mode
export type PortfolioMode = "design" | "dev";
export const PortfolioModeContext = createContext<{
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
}>({
  mode: "design",
  setMode: () => {},
});

const App = () => {
  const [mode, setMode] = useState<PortfolioMode>("design");

  return (
    <QueryClientProvider client={queryClient}>
      <PortfolioModeContext.Provider value={{ mode, setMode }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PortfolioModeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
