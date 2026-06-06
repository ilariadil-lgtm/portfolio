import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

// ─────────────────────────────────────────────────────────────────────────────
import { Navigate } from "react-router-dom";
import { editorialRoutes, nebulaRoutes, NotFoundComponent } from "./routes";
import { useDesign, DesignProvider } from "./context/DesignContext";
import { useThemeFavicon } from "./hooks/useThemeFavicon";
import { PageTransition } from "./components/PageTransition";
import { Preloader } from "./components/Preloader";
import { NebulaPreloader } from "./pages/nebula/components/NebulaPreloader";
import { CustomCursor } from "./components/CustomCursor";
import { LenisScroller } from "./components/LenisScroller";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { SoundProvider } from "./context/SoundContext";

const queryClient = new QueryClient();

const PageFallback = ({ isEditorial }: { isEditorial: boolean }) => (
  <div className={`min-h-screen ${isEditorial ? 'bg-background' : 'bg-[#0a0a0a]'}`} aria-hidden="true" />
);

// ─────────────────────────────────────────────────────────────────────────────
// AnimatedRoutes: usa useLocation dentro BrowserRouter per le page transitions
// Struttura corretta: Suspense > AnimatePresence > Routes[key=pathname]
// AnimatePresence traccia Routes: quando key cambia, il vecchio unmonta (exit)
// e il nuovo monta (enter). PageTransition fornisce le animazioni motion.div.
// ─────────────────────────────────────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();
  const { design } = useDesign();
  const isEditorial = design === "editorial";
  const activeRoutes = isEditorial ? editorialRoutes : nebulaRoutes;

  useThemeFavicon(design as 'editorial' | 'nebula');

  return (
    <Suspense fallback={<PageFallback isEditorial={isEditorial} />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {activeRoutes.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PageTransition>
                    <Component />
                  </PageTransition>
                }
              />
            );
          })}
          {/* Redirect to avoid duplicate SEO content */}
          <Route path="/progetti/brand-identity" element={<Navigate to="/progetti/loghi" replace />} />
          
          <Route path="*" element={<PageTransition><NotFoundComponent /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// AppContent: gestisce preloader e layout root
// ─────────────────────────────────────────────────────────────────────────────
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { design } = useDesign();
  const isEditorial = design === "editorial";

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isLoading]);

  useEffect(() => {
    // Aggiungi la classe del tema al body per gestire i font dinamici
    document.body.className = `theme-${design}`;
  }, [design]);

  return (
    <BrowserRouter>
      <LenisScroller>
        <CustomCursor />
        <AnimatePresence>
          {isLoading && (
            isEditorial 
              ? <Preloader onComplete={() => setIsLoading(false)} />
              : <NebulaPreloader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>
        <AnimatedRoutes />
        <DesignSwitcher />
      </LenisScroller>
    </BrowserRouter>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// App root
// ─────────────────────────────────────────────────────────────────────────────
const App = () => (
  <QueryClientProvider client={queryClient}>
    <DesignProvider>
      <SoundProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </SoundProvider>
    </DesignProvider>
  </QueryClientProvider>
);

export default App;
