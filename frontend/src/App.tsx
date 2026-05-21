import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
import { PageTransition } from "./components/PageTransition";

const queryClient = new QueryClient();

// ─────────────────────────────────────────────────────────────────────────────
// AnimatedRoutes: usa useLocation dentro BrowserRouter per le page transitions
// ─────────────────────────────────────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();
  const { design } = useDesign();
  const isEditorial = design === "editorial";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              {isEditorial ? <EditorialIndex /> : <NebulaIndex />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti"
          element={
            <PageTransition>
              {isEditorial ? <EditorialProgetti /> : <NebulaProgetti />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/:id"
          element={
            <PageTransition>
              {isEditorial ? <EditorialProjectDetail /> : <NebulaProjectDetail />}
            </PageTransition>
          }
        />
        <Route path="/chisono"  element={<PageTransition><EditorialChisono /></PageTransition>} />
        <Route path="/servizi"  element={<PageTransition><EditorialServizi /></PageTransition>} />
        <Route path="/contatti" element={<PageTransition><EditorialContatti /></PageTransition>} />
        <Route path="/blog"     element={<PageTransition><EditorialBlog /></PageTransition>} />
        <Route path="/faq"      element={<PageTransition><EditorialFAQ /></PageTransition>} />
        <Route path="*"         element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// AppContent: gestisce preloader e layout root
// ─────────────────────────────────────────────────────────────────────────────
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <AnimatedRoutes />
      <DesignSwitcher />
    </BrowserRouter>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// App root
// ─────────────────────────────────────────────────────────────────────────────
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
