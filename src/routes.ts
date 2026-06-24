import { lazy } from "react";

// --- Editorial ---
export const editorialRoutes = [
  { path: "/", component: lazy(() => import("./pages/editorial/Index")) },
  { path: "/progetti", component: lazy(() => import("./pages/editorial/Progetti")) },
//  { path: "/progetti/chariohifi", component: lazy(() => import("./pages/editorial/CharioHifi")) },
//  { path: "/progetti/sophiatheme", component: lazy(() => import("./pages/editorial/SophiaTheme")) },
  { path: "/progetti/storagehub", component: lazy(() => import("./pages/editorial/StorageHub")) },
  { path: "/progetti/freelens", component: lazy(() => import("./pages/editorial/Freelens")) },
  { path: "/progetti/portfolio", component: lazy(() => import("./pages/editorial/Portfolio")) },
  { path: "/progetti/villamasami", component: lazy(() => import("./pages/editorial/VillaMasami")) },
  { path: "/progetti/pattiforniture", component: lazy(() => import("./pages/editorial/PattiForniture")) },
  { path: "/progetti/sicilcosmetic", component: lazy(() => import("./pages/editorial/SicilCosmetic")) },
  { path: "/progetti/newpop", component: lazy(() => import("./pages/editorial/Newpop")) },
  { path: "/progetti/vinigambino", component: lazy(() => import("./pages/editorial/ViniGambino")) },
  { path: "/progetti/bagliolauria", component: lazy(() => import("./pages/editorial/BaglioLauria")) },
  { path: "/progetti/villamima", component: lazy(() => import("./pages/editorial/VillaMima")) },
  { path: "/progetti/loghi", component: lazy(() => import("./pages/editorial/Loghi")) },
  // Rimossa la rotta duplicata /progetti/brand-identity, sarà gestita in App.tsx tramite redirect se necessario
  { path: "/progetti/:id", component: lazy(() => import("./pages/editorial/ProjectDetail")) },
  { path: "/chisono", component: lazy(() => import("./pages/editorial/Chisono")) },
  { path: "/servizi", component: lazy(() => import("./pages/editorial/Servizi")) },
  { path: "/cms-details", component: lazy(() => import("./pages/editorial/CMSDetails")) },
  { path: "/mvp-details", component: lazy(() => import("./pages/editorial/MVPDetails")) },
  { path: "/custom-details", component: lazy(() => import("./pages/editorial/CustomDetails")) },
  { path: "/contatti", component: lazy(() => import("./pages/editorial/Contatti")) },
  { path: "/blog", component: lazy(() => import("./pages/editorial/Blog")) },
  { path: "/faq", component: lazy(() => import("./pages/editorial/FAQ")) },
  { path: "/privacy", component: lazy(() => import("./pages/editorial/Privacy")) },
  { path: "/cookies", component: lazy(() => import("./pages/editorial/Cookies")) },
];

// --- Nebula ---
export const nebulaRoutes = [
  { path: "/", component: lazy(() => import("./pages/nebula/Index")) },
  { path: "/progetti", component: lazy(() => import("./pages/nebula/Progetti")) },
//  { path: "/progetti/chariohifi", component: lazy(() => import("./pages/nebula/CharioHifi")) },
//  { path: "/progetti/sophiatheme", component: lazy(() => import("./pages/nebula/SophiaTheme")) },
  { path: "/progetti/storagehub", component: lazy(() => import("./pages/nebula/StorageHub")) },
  { path: "/progetti/freelens", component: lazy(() => import("./pages/nebula/Freelens")) },
  { path: "/progetti/portfolio", component: lazy(() => import("./pages/nebula/Portfolio")) },
  { path: "/progetti/villamasami", component: lazy(() => import("./pages/nebula/VillaMasami")) },
  { path: "/progetti/pattiforniture", component: lazy(() => import("./pages/nebula/PattiForniture")) },
  { path: "/progetti/sicilcosmetic", component: lazy(() => import("./pages/nebula/SicilCosmetic")) },
  { path: "/progetti/newpop", component: lazy(() => import("./pages/nebula/Newpop")) },
  { path: "/progetti/vinigambino", component: lazy(() => import("./pages/nebula/ViniGambino")) },
  { path: "/progetti/bagliolauria", component: lazy(() => import("./pages/nebula/BaglioLauria")) },
  { path: "/progetti/villamima", component: lazy(() => import("./pages/nebula/VillaMima")) },
  { path: "/progetti/loghi", component: lazy(() => import("./pages/nebula/Loghi")) },
  { path: "/progetti/:id", component: lazy(() => import("./pages/nebula/ProjectDetail")) },
  { path: "/chisono", component: lazy(() => import("./pages/nebula/Chisono")) },
  { path: "/servizi", component: lazy(() => import("./pages/nebula/Servizi")) },
  { path: "/cms-details", component: lazy(() => import("./pages/nebula/CMSDetails")) },
  { path: "/mvp-details", component: lazy(() => import("./pages/nebula/MVPDetails")) },
  { path: "/custom-details", component: lazy(() => import("./pages/nebula/CustomDetails")) },
  { path: "/contatti", component: lazy(() => import("./pages/nebula/Contatti")) },
  { path: "/blog", component: lazy(() => import("./pages/nebula/Blog")) },
  { path: "/faq", component: lazy(() => import("./pages/nebula/FAQ")) },
  { path: "/privacy", component: lazy(() => import("./pages/nebula/Privacy")) },
  { path: "/cookies", component: lazy(() => import("./pages/nebula/Cookies")) },
];

export const NotFoundComponent = lazy(() => import("./pages/NotFound"));
