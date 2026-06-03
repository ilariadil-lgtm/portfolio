import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Lazy imports — code splitting per ridurre il bundle iniziale
// ─────────────────────────────────────────────────────────────────────────────
const EditorialIndex        = lazy(() => import("./pages/editorial/Index"));
const EditorialChisono      = lazy(() => import("./pages/editorial/Chisono"));
const EditorialProgetti     = lazy(() => import("./pages/editorial/Progetti"));
const EditorialContatti     = lazy(() => import("./pages/editorial/Contatti"));
const EditorialBlog         = lazy(() => import("./pages/editorial/Blog"));
const EditorialFAQ          = lazy(() => import("./pages/editorial/FAQ"));
const EditorialServizi      = lazy(() => import("./pages/editorial/Servizi"));
const EditorialPrivacy      = lazy(() => import("./pages/editorial/Privacy"));
const EditorialCookies      = lazy(() => import("./pages/editorial/Cookies"));
const EditorialProjectDetail = lazy(() => import("./pages/editorial/ProjectDetail"));
const EditorialCharioHifi   = lazy(() => import("./pages/editorial/CharioHifi"));
const EditorialSophiaTheme  = lazy(() => import("./pages/editorial/SophiaTheme"));
const EditorialStorageHub   = lazy(() => import("./pages/editorial/StorageHub"));
const EditorialFreelens     = lazy(() => import("./pages/editorial/Freelens"));
const EditorialVillaMasami  = lazy(() => import("./pages/editorial/VillaMasami"));
const EditorialPattiForniture = lazy(() => import("./pages/editorial/PattiForniture"));
const EditorialSicilCosmetic = lazy(() => import("./pages/editorial/SicilCosmetic"));
const EditorialNewpop       = lazy(() => import("./pages/editorial/Newpop"));
const EditorialViniGambino  = lazy(() => import("./pages/editorial/ViniGambino"));
const EditorialBaglioLauria = lazy(() => import("./pages/editorial/BaglioLauria"));
const EditorialVillaMima    = lazy(() => import("./pages/editorial/VillaMima"));
const EditorialLoghi        = lazy(() => import("./pages/editorial/Loghi"));

const NebulaIndex        = lazy(() => import("./pages/nebula/Index"));
const NebulaChisono      = lazy(() => import("./pages/nebula/Chisono"));
const NebulaProgetti     = lazy(() => import("./pages/nebula/Progetti"));
const NebulaContatti     = lazy(() => import("./pages/nebula/Contatti"));
const NebulaBlog         = lazy(() => import("./pages/nebula/Blog"));
const NebulaFAQ          = lazy(() => import("./pages/nebula/FAQ"));
const NebulaServizi      = lazy(() => import("./pages/nebula/Servizi"));
const NebulaPrivacy      = lazy(() => import("./pages/nebula/Privacy"));
const NebulaCookies      = lazy(() => import("./pages/nebula/Cookies"));
const NebulaProjectDetail = lazy(() => import("./pages/nebula/ProjectDetail"));
const NebulaCharioHifi   = lazy(() => import("./pages/nebula/CharioHifi"));
const NebulaSophiaTheme  = lazy(() => import("./pages/nebula/SophiaTheme"));
const NebulaStorageHub   = lazy(() => import("./pages/nebula/StorageHub"));
const NebulaFreelens     = lazy(() => import("./pages/nebula/Freelens"));
const NebulaVillaMasami  = lazy(() => import("./pages/nebula/VillaMasami"));
const NebulaPattiForniture = lazy(() => import("./pages/nebula/PattiForniture"));
const NebulaSicilCosmetic = lazy(() => import("./pages/nebula/SicilCosmetic"));
const NebulaNewpop       = lazy(() => import("./pages/nebula/Newpop"));
const NebulaViniGambino  = lazy(() => import("./pages/nebula/ViniGambino"));
const NebulaBaglioLauria = lazy(() => import("./pages/nebula/BaglioLauria"));
const NebulaVillaMima    = lazy(() => import("./pages/nebula/VillaMima"));
const NebulaLoghi        = lazy(() => import("./pages/nebula/Loghi"));

const NotFound = lazy(() => import("./pages/NotFound"));

import { DesignProvider, useDesign } from "./context/DesignContext";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { Preloader } from "./components/Preloader";
import { NebulaPreloader } from "./pages/nebula/components/NebulaPreloader";
import { CustomCursor } from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { LenisScroller } from "./components/LenisScroller";

const queryClient = new QueryClient();

// Fallback minimale per Suspense (invisibile all'utente grazie al preloader/page transition)
const PageFallback = () => (
  <div className="min-h-screen bg-[#f5f2ed]" aria-hidden="true" />
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

  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={isEditorial ? <PageTransition><EditorialIndex /></PageTransition> : <PageTransition><NebulaIndex /></PageTransition>} />
          <Route path="/progetti" element={isEditorial ? <PageTransition><EditorialProgetti /></PageTransition> : <PageTransition><NebulaProgetti /></PageTransition>} />
          <Route path="/progetti/chariohifi" element={isEditorial ? <PageTransition><EditorialCharioHifi /></PageTransition> : <PageTransition><NebulaCharioHifi /></PageTransition>} />
          <Route path="/progetti/sophiatheme" element={isEditorial ? <PageTransition><EditorialSophiaTheme /></PageTransition> : <PageTransition><NebulaSophiaTheme /></PageTransition>} />
          <Route path="/progetti/storagehub" element={isEditorial ? <PageTransition><EditorialStorageHub /></PageTransition> : <PageTransition><NebulaStorageHub /></PageTransition>} />
          <Route path="/progetti/freelens" element={isEditorial ? <PageTransition><EditorialFreelens /></PageTransition> : <PageTransition><NebulaFreelens /></PageTransition>} />
          <Route path="/progetti/villamasami" element={isEditorial ? <PageTransition><EditorialVillaMasami /></PageTransition> : <PageTransition><NebulaVillaMasami /></PageTransition>} />
          <Route path="/progetti/pattiforniture" element={isEditorial ? <PageTransition><EditorialPattiForniture /></PageTransition> : <PageTransition><NebulaPattiForniture /></PageTransition>} />
          <Route path="/progetti/sicilcosmetic" element={isEditorial ? <PageTransition><EditorialSicilCosmetic /></PageTransition> : <PageTransition><NebulaSicilCosmetic /></PageTransition>} />
          <Route path="/progetti/newpop" element={isEditorial ? <PageTransition><EditorialNewpop /></PageTransition> : <PageTransition><NebulaNewpop /></PageTransition>} />
          <Route path="/progetti/vinigambino" element={isEditorial ? <PageTransition><EditorialViniGambino /></PageTransition> : <PageTransition><NebulaViniGambino /></PageTransition>} />
          <Route path="/progetti/bagliolauria" element={isEditorial ? <PageTransition><EditorialBaglioLauria /></PageTransition> : <PageTransition><NebulaBaglioLauria /></PageTransition>} />
          <Route path="/progetti/villamima" element={isEditorial ? <PageTransition><EditorialVillaMima /></PageTransition> : <PageTransition><NebulaVillaMima /></PageTransition>} />
          <Route path="/progetti/loghi" element={isEditorial ? <PageTransition><EditorialLoghi /></PageTransition> : <PageTransition><NebulaLoghi /></PageTransition>} />
          <Route path="/progetti/brand-identity" element={isEditorial ? <PageTransition><EditorialLoghi /></PageTransition> : <PageTransition><NebulaLoghi /></PageTransition>} />
          <Route path="/progetti/:id" element={isEditorial ? <PageTransition><EditorialProjectDetail /></PageTransition> : <PageTransition><NebulaProjectDetail /></PageTransition>} />
          <Route path="/chisono"  element={isEditorial ? <PageTransition><EditorialChisono /></PageTransition> : <PageTransition><NebulaChisono /></PageTransition>} />
          <Route path="/servizi"  element={isEditorial ? <PageTransition><EditorialServizi /></PageTransition> : <PageTransition><NebulaServizi /></PageTransition>} />
          <Route path="/contatti" element={isEditorial ? <PageTransition><EditorialContatti /></PageTransition> : <PageTransition><NebulaContatti /></PageTransition>} />
          <Route path="/blog"     element={isEditorial ? <PageTransition><EditorialBlog /></PageTransition> : <PageTransition><NebulaBlog /></PageTransition>} />
          <Route path="/faq"      element={isEditorial ? <PageTransition><EditorialFAQ /></PageTransition> : <PageTransition><NebulaFAQ /></PageTransition>} />
          <Route path="/privacy"  element={isEditorial ? <PageTransition><EditorialPrivacy /></PageTransition> : <PageTransition><NebulaPrivacy /></PageTransition>} />
          <Route path="/cookies"  element={isEditorial ? <PageTransition><EditorialCookies /></PageTransition> : <PageTransition><NebulaCookies /></PageTransition>} />
          <Route path="*"         element={<PageTransition><NotFound /></PageTransition>} />
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </DesignProvider>
  </QueryClientProvider>
);

export default App;
