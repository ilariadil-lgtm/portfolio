import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import EditorialIndex from "./pages/editorial/Index";
import EditorialChisono from "./pages/editorial/Chisono";
import EditorialProgetti from "./pages/editorial/Progetti";
import EditorialContatti from "./pages/editorial/Contatti";
import EditorialBlog from "./pages/editorial/Blog";
import EditorialFAQ from "./pages/editorial/FAQ";
import EditorialServizi from "./pages/editorial/Servizi";
import { EditorialProjectDetail } from "./pages/editorial/ProjectDetail";

import NebulaIndex from "./pages/nebula/Index";
import NebulaProgetti from "./pages/nebula/Progetti";
import { NebulaProjectDetail } from "./pages/nebula/ProjectDetail";

import NotFound from "./pages/NotFound";

import { DesignProvider, useDesign } from "./context/DesignContext";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const { design } = useDesign();
  const [isLoading, setIsLoading] = useState(true);
  const isEditorial = design === 'editorial';

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <Routes>
        {/* DESIGN SWITCHER LOGIC - All paths respond to theme */}
        <Route path="/" element={isEditorial ? <EditorialIndex /> : <NebulaIndex />} />
        <Route path="/progetti" element={isEditorial ? <EditorialProgetti /> : <NebulaProgetti />} />
        <Route path="/progetti/:id" element={isEditorial ? <EditorialProjectDetail /> : <NebulaProjectDetail />} />
        
        {/* Shared or placeholder paths - You can create glass versions for these too! */}
        <Route path="/chisono" element={isEditorial ? <EditorialChisono /> : <EditorialChisono />} />
        <Route path="/servizi" element={isEditorial ? <EditorialServizi /> : <EditorialServizi />} />
        <Route path="/contatti" element={isEditorial ? <EditorialContatti /> : <EditorialContatti />} />
        <Route path="/blog" element={isEditorial ? <EditorialBlog /> : <EditorialBlog />} />
        <Route path="/faq" element={isEditorial ? <EditorialFAQ /> : <EditorialFAQ />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <DesignSwitcher />
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DesignProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </DesignProvider>
  </QueryClientProvider>
);

export default App;
