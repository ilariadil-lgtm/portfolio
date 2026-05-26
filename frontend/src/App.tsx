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
import { EditorialCharioHifi } from "./pages/editorial/CharioHifi";
import { EditorialSophiaTheme } from "./pages/editorial/SophiaTheme";
import { EditorialStorageHub } from "./pages/editorial/StorageHub";
import { EditorialFreelens } from "./pages/editorial/Freelens";
import { EditorialVillaMasami } from "./pages/editorial/VillaMasami";
import { EditorialPattiForniture } from "./pages/editorial/PattiForniture";
import { EditorialSicilCosmetic } from "./pages/editorial/SicilCosmetic";
import { EditorialNewpop } from "./pages/editorial/Newpop";
import { EditorialViniGambino } from "./pages/editorial/ViniGambino";
import { EditorialBaglioLauria } from "./pages/editorial/BaglioLauria";
import { EditorialVillaMima } from "./pages/editorial/VillaMima";

import NebulaIndex from "./pages/nebula/Index";
import NebulaProgetti from "./pages/nebula/Progetti";
import { NebulaProjectDetail } from "./pages/nebula/ProjectDetail";

import NotFound from "./pages/NotFound";

import { DesignProvider, useDesign } from "./context/DesignContext";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { LenisScroller } from "./components/LenisScroller";

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
          path="/progetti/chariohifi"
          element={
            <PageTransition>
              {isEditorial ? <EditorialCharioHifi /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/sophiatheme"
          element={
            <PageTransition>
              {isEditorial ? <EditorialSophiaTheme /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/storagehub"
          element={
            <PageTransition>
              {isEditorial ? <EditorialStorageHub /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/freelens"
          element={
            <PageTransition>
              {isEditorial ? <EditorialFreelens /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/villamasami"
          element={
            <PageTransition>
              {isEditorial ? <EditorialVillaMasami /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/pattiforniture"
          element={
            <PageTransition>
              {isEditorial ? <EditorialPattiForniture /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/sicilcosmetic"
          element={
            <PageTransition>
              {isEditorial ? <EditorialSicilCosmetic /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/newpop"
          element={
            <PageTransition>
              {isEditorial ? <EditorialNewpop /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/vinigambino"
          element={
            <PageTransition>
              {isEditorial ? <EditorialViniGambino /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/bagliolauria"
          element={
            <PageTransition>
              {isEditorial ? <EditorialBaglioLauria /> : <NotFound />}
            </PageTransition>
          }
        />
        <Route
          path="/progetti/villamima"
          element={
            <PageTransition>
              {isEditorial ? <EditorialVillaMima /> : <NotFound />}
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
      <LenisScroller>
        <CustomCursor />
        <AnimatePresence>
          {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </DesignProvider>
  </QueryClientProvider>
);

export default App;
