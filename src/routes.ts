import { lazy } from "react";

// --- Editorial ---
export const editorialRoutes = [
  { path: "/", component: lazy(() => import("./pages/editorial/Index")) },

  // Portfolio (ex "Progetti" — PIANO-RIVOLUZIONE-SITO.md, Fase 1)
  { path: "/portfolio", component: lazy(() => import("./pages/editorial/Progetti")) },
  { path: "/portfolio/storagehub", component: lazy(() => import("./pages/editorial/StorageHub")) },
  { path: "/portfolio/freelens", component: lazy(() => import("./pages/editorial/Freelens")) },
  { path: "/portfolio/portfolio", component: lazy(() => import("./pages/editorial/Portfolio")) },
  { path: "/portfolio/villamasami", component: lazy(() => import("./pages/editorial/VillaMasami")) },
  { path: "/portfolio/pattiforniture", component: lazy(() => import("./pages/editorial/PattiForniture")) },
  { path: "/portfolio/sicilcosmetic", component: lazy(() => import("./pages/editorial/SicilCosmetic")) },
  { path: "/portfolio/newpop", component: lazy(() => import("./pages/editorial/Newpop")) },
  { path: "/portfolio/vinigambino", component: lazy(() => import("./pages/editorial/ViniGambino")) },
  { path: "/portfolio/bagliolauria", component: lazy(() => import("./pages/editorial/BaglioLauria")) },
  { path: "/portfolio/villamima", component: lazy(() => import("./pages/editorial/VillaMima")) },
  { path: "/portfolio/:id", component: lazy(() => import("./pages/editorial/ProjectDetail")) },
  // Indirizzo storico /progetti/:id: stesso slug, nuovo contenitore.
  { path: "/progetti/:id", component: lazy(() => import("./components/RedirectProgettiId")) },

  { path: "/chisono", component: lazy(() => import("./pages/editorial/Chisono")) },

  // Servizi — hub + 3 pagine dirette (clienti)
  { path: "/servizi", component: lazy(() => import("./pages/editorial/Servizi")) },
  { path: "/servizi/wordpress", component: lazy(() => import("./pages/editorial/SitoAziendale")) },
  { path: "/servizi/e-commerce", component: lazy(() => import("./pages/editorial/Ecommerce")) },
  { path: "/servizi/brand-identity", component: lazy(() => import("./pages/editorial/BrandIdentity")) },

  // White Label — hub + 3 pagine (agenzie/professionisti)
  { path: "/white-label", component: lazy(() => import("./pages/editorial/WhiteLabel")) },
  { path: "/white-label/wordpress", component: lazy(() => import("./pages/editorial/WhiteLabelWordPress")) },
  { path: "/white-label/e-commerce", component: lazy(() => import("./pages/editorial/WhiteLabelEcommerce")) },
  { path: "/white-label/graphic-design", component: lazy(() => import("./pages/editorial/WhiteLabelGraphicDesign")) },

  { path: "/contatti", component: lazy(() => import("./pages/editorial/Contatti")) },
  { path: "/consulenza-gratuita", component: lazy(() => import("./pages/editorial/ConsulenzaGratuita")) },
  { path: "/blog", component: lazy(() => import("./pages/editorial/Blog")) },
  { path: "/faq", component: lazy(() => import("./pages/editorial/FAQ")) },
  { path: "/privacy", component: lazy(() => import("./pages/editorial/Privacy")) },
  { path: "/cookies", component: lazy(() => import("./pages/editorial/Cookies")) },
];

// --- Nebula ---
export const nebulaRoutes = [
  { path: "/", component: lazy(() => import("./pages/nebula/Index")) },

  { path: "/portfolio", component: lazy(() => import("./pages/nebula/Progetti")) },
  { path: "/portfolio/storagehub", component: lazy(() => import("./pages/nebula/StorageHub")) },
  { path: "/portfolio/freelens", component: lazy(() => import("./pages/nebula/Freelens")) },
  { path: "/portfolio/portfolio", component: lazy(() => import("./pages/nebula/Portfolio")) },
  { path: "/portfolio/villamasami", component: lazy(() => import("./pages/nebula/VillaMasami")) },
  { path: "/portfolio/pattiforniture", component: lazy(() => import("./pages/nebula/PattiForniture")) },
  { path: "/portfolio/sicilcosmetic", component: lazy(() => import("./pages/nebula/SicilCosmetic")) },
  { path: "/portfolio/newpop", component: lazy(() => import("./pages/nebula/Newpop")) },
  { path: "/portfolio/vinigambino", component: lazy(() => import("./pages/nebula/ViniGambino")) },
  { path: "/portfolio/bagliolauria", component: lazy(() => import("./pages/nebula/BaglioLauria")) },
  { path: "/portfolio/villamima", component: lazy(() => import("./pages/nebula/VillaMima")) },
  { path: "/portfolio/:id", component: lazy(() => import("./pages/nebula/ProjectDetail")) },
  { path: "/progetti/:id", component: lazy(() => import("./components/RedirectProgettiId")) },

  { path: "/chisono", component: lazy(() => import("./pages/nebula/Chisono")) },

  { path: "/servizi", component: lazy(() => import("./pages/nebula/Servizi")) },
  { path: "/servizi/wordpress", component: lazy(() => import("./pages/nebula/SitoAziendale")) },
  { path: "/servizi/e-commerce", component: lazy(() => import("./pages/nebula/Ecommerce")) },
  { path: "/servizi/brand-identity", component: lazy(() => import("./pages/nebula/BrandIdentity")) },

  { path: "/white-label", component: lazy(() => import("./pages/nebula/WhiteLabel")) },
  { path: "/white-label/wordpress", component: lazy(() => import("./pages/nebula/WhiteLabelWordPress")) },
  { path: "/white-label/e-commerce", component: lazy(() => import("./pages/nebula/WhiteLabelEcommerce")) },
  { path: "/white-label/graphic-design", component: lazy(() => import("./pages/nebula/WhiteLabelGraphicDesign")) },

  { path: "/contatti", component: lazy(() => import("./pages/nebula/Contatti")) },
  { path: "/consulenza-gratuita", component: lazy(() => import("./pages/nebula/ConsulenzaGratuita")) },
  { path: "/blog", component: lazy(() => import("./pages/nebula/Blog")) },
  { path: "/faq", component: lazy(() => import("./pages/nebula/FAQ")) },
  { path: "/privacy", component: lazy(() => import("./pages/nebula/Privacy")) },
  { path: "/cookies", component: lazy(() => import("./pages/nebula/Cookies")) },
];

export const NotFoundComponent = lazy(() => import("./pages/NotFound"));
