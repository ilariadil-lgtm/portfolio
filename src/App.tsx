import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

// ─────────────────────────────────────────────────────────────────────────────
import { Navigate } from "react-router-dom";
import { editorialRoutes, nebulaRoutes, NotFoundComponent } from "./routes";
import { useDesign, DesignProvider } from "./context/DesignContext";
import { conPrefisso, linguaDi } from "./lib/lingua";
import i18n, { cambiaLingua } from "./lib/i18n";
import { useThemeFavicon } from "./hooks/useThemeFavicon";
import { PageTransition } from "./components/PageTransition";
import { Preloader } from "./components/Preloader";
import { NebulaPreloader } from "./pages/nebula/components/NebulaPreloader";
import { CustomCursor } from "./components/CustomCursor";
import { LenisScroller } from "./components/LenisScroller";
import { DesignSwitcher } from "./components/DesignSwitcher";
import { SoundProvider } from "./context/SoundContext";
import { ErrorBoundary } from "./components/ErrorBoundary";

const PageFallback = ({ isEditorial }: { isEditorial: boolean }) => (
  <div className={`min-h-[100dvh] ${isEditorial ? 'bg-background' : 'bg-[#0a0a0a]'}`} aria-hidden="true" />
);

// ─────────────────────────────────────────────────────────────────────────────
// AnimatedRoutes: usa useLocation dentro BrowserRouter per le page transitions
// Struttura corretta: Suspense > AnimatePresence > Routes[key=pathname]
// AnimatePresence traccia Routes: quando key cambia, il vecchio unmonta (exit)
// e il nuovo monta (enter). PageTransition fornisce le animazioni motion.div.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Tiene allineati indirizzo, lingua attiva e attributo lang del documento.
 * L'indirizzo comanda: e lui che i motori di ricerca leggono.
 */
const useLinguaDaIndirizzo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const voluta = linguaDi(pathname);
    document.documentElement.lang = voluta;
    if (i18n.language !== voluta) void cambiaLingua(voluta);
  }, [pathname]);
};

const AnimatedRoutes = () => {
  const location = useLocation();
  useLinguaDaIndirizzo();
  const { design } = useDesign();
  const isEditorial = design === "editorial";
  const activeRoutes = isEditorial ? editorialRoutes : nebulaRoutes;

  useThemeFavicon(design as 'editorial' | 'nebula');

  return (
    <Suspense fallback={<PageFallback isEditorial={isEditorial} />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {activeRoutes.flatMap((route) => {
            const Component = route.component;
            const pagina = (
              <PageTransition>
                <Component />
              </PageTransition>
            );
            // La stessa pagina risponde a /servizi e a /en/servizi: e la lingua
            // a cambiare, non il componente.
            return [
              <Route key={route.path} path={route.path} element={pagina} />,
              <Route
                key={conPrefisso(route.path)}
                path={conPrefisso(route.path)}
                element={pagina}
              />,
            ];
          })}
          {/* Rotta storica: evita contenuto duplicato. Vale in entrambe le lingue. */}
          <Route
            path="/progetti/brand-identity"
            element={<Navigate to="/progetti/loghi" replace />}
          />
          <Route
            path={conPrefisso("/progetti/brand-identity")}
            element={<Navigate to={conPrefisso("/progetti/loghi")} replace />}
          />
          
          <Route path="*" element={<PageTransition><NotFoundComponent /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// AppContent: gestisce preloader e layout root
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// Il preloader e un elemento di marca, non un indicatore di caricamento: dura
// circa 5,6 s a prescindere da quanto ci mette il sito. Va mostrato una volta
// per sessione, e mai a chi ha chiesto meno animazioni al sistema operativo.
// ─────────────────────────────────────────────────────────────────────────────
const CHIAVE_PRELOADER = "preloader-visto";

const devoMostrareIlPreloader = (): boolean => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return window.sessionStorage.getItem(CHIAVE_PRELOADER) !== "1";
  } catch {
    return true; // sessionStorage negato: meglio mostrarlo che rompere
  }
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(devoMostrareIlPreloader);
  const { design } = useDesign();
  const isEditorial = design === "editorial";

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isLoading]);

  useEffect(() => {
    // I font sono self-hostati e dichiarati staticamente nel CSS.
    // Qui resta solo la classe di tema sul body.
    document.body.className = `theme-${design}`;

    // Colore della barra del browser: segue il tema scelto.
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = design === "editorial" ? "#F7F4EC" : "#080808";
  }, [design]);

  const concludiPreloader = () => {
    try {
      window.sessionStorage.setItem(CHIAVE_PRELOADER, "1");
    } catch {
      /* sessionStorage negato: pazienza, si rivedra alla prossima visita */
    }
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <LenisScroller>
        <CustomCursor />
        <AnimatePresence>
          {isLoading && (
            isEditorial 
              ? <Preloader onComplete={concludiPreloader} />
              : <NebulaPreloader onComplete={concludiPreloader} />
          )}
        </AnimatePresence>
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
        <DesignSwitcher />
      </LenisScroller>
    </BrowserRouter>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// App root
// ─────────────────────────────────────────────────────────────────────────────
const App = () => (
  <DesignProvider>
    <SoundProvider>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </SoundProvider>
  </DesignProvider>
);

export default App;
