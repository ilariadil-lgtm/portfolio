import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";
import { ArrowRight, Hexagon, Maximize2 } from "lucide-react";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { RevealText } from "@/components/RevealText";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

const HeroCanvas = React.lazy(() => import("./components/HeroCanvas").then(module => ({ default: module.HeroCanvas })));

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const getFallbackProjects = (t: any) => [
  {
    id: "storagehub",
    title: t('projects_data.storagehub.title', 'StorageHub'),
    type: "WEBAPP_SAAS",
    technologies: t('projects_data.storagehub.technologies', 'React.js, Node.js (Express), AWS S3 / CloudFront, PostgreSQL, REST API, UX Strategy'),
    year: "2024",
    image: "/assets/projects/storage-hub/dashboard.webp",
    project_url: "https://storagehub.com",
    description: t('projects_data.storagehub.description')
  },
  {
    id: "freelens",
    title: t('projects_data.freelens.title', 'Freelens'),
    type: "WEBAPP_SAAS",
    technologies: t('projects_data.freelens.technologies', 'Figma, React, Framer Motion, Product Strategy'),
    year: "2024",
    image: "/assets/projects/freelens/home.webp",
    project_url: "https://freelens.app",
    description: t('projects_data.freelens.description')
  },
  {
    id: "villamasami",
    title: t('projects_data.villamasami.title', 'Villa Masami'),
    type: "WEB_ECOMMERCE BRAND_IDENTITY",
    technologies: t('projects_data.villamasami.technologies', 'Brand & Logo Design, UI/UX Design, Copywriting, WordPress (Bilingual)'),
    year: "2026",
    image: "/assets/projects/villa-masami/homepage.webp",
    project_url: "",
    description: t('projects_data.villamasami.description')
  },
  {
    id: "pattiforniture",
    title: t('projects_data.pattiforniture.title', 'Patti Forniture'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.pattiforniture.technologies', 'UI/UX Design, Information Architecture, Copywriting, WordPress Corporate'),
    year: "2026",
    image: "/assets/projects/patti-forniture/homepage.webp",
    project_url: "",
    description: t('projects_data.pattiforniture.description')
  },
  {
    id: "sicilcosmetic",
    title: t('projects_data.sicilcosmetic.title', 'SicilCosmetic'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.sicilcosmetic.technologies', 'PrestaShop Configuration, E-commerce UI/UX, Catalog Management, Copywriting & Layout'),
    year: "2026",
    image: "/assets/projects/sicil-cosmetic/homepage.webp",
    project_url: "",
    description: t('projects_data.sicilcosmetic.description')
  },
  {
    id: "newpop",
    title: t('projects_data.newpop.title', 'Newpop'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.newpop.technologies', 'PrestaShop Integration, UI/UX Design, Visual Merchandising, Information Architecture'),
    year: "2026",
    image: "/assets/projects/newpop/homepage.webp",
    project_url: "",
    description: t('projects_data.newpop.description')
  },
  {
    id: "vinigambino",
    title: t('projects_data.vinigambino.title', 'Vini Gambino'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.vinigambino.technologies', 'UI/UX & Graphic Layout, WordPress Environment, Hospitality & E-commerce, Visual Storytelling'),
    year: "2026",
    image: "/assets/projects/vini-gambino/homepage.webp",
    project_url: "",
    description: t('projects_data.vinigambino.description')
  },
  {
    id: "bagliolauria",
    title: t('projects_data.bagliolauria.title', 'Baglio Lauria'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.bagliolauria.technologies', 'UI/UX Design, Copywriting & Content, WordPress Layout, Hospitality Design'),
    year: "2026",
    image: "/assets/projects/baglio-lauria/homepage.webp",
    project_url: "",
    description: t('projects_data.bagliolauria.description')
  },
  {
    id: "villamima",
    title: t('projects_data.villamima.title', 'Villa Mima'),
    type: "WEB_ECOMMERCE",
    technologies: t('projects_data.villamima.technologies', 'UI/UX Design, WordPress Environment, Copywriting & Storytelling, Wedding & Event Industry'),
    year: "2026",
    image: "/assets/projects/villa-mima/homepage.webp",
    project_url: "",
    description: t('projects_data.villamima.description')
  },
  {
    id: "loghi",
    title: t('projects_data.loghi.title', 'Branding & Loghi'),
    type: "BRAND_IDENTITY",
    technologies: t('projects_data.loghi.technologies', 'Logo Design, Brand Identity, Visual Guidelines, Art Direction'),
    year: "2026",
    image: "/assets/projects/loghi/1.webp",
    project_url: "",
    description: t('projects_data.loghi.description')
  }
];

const getCategories = (t: any) => [
  { id: "ALL", label: t('projects.cat_all'), count: null },
  { id: "WEB_ECOMMERCE", label: "Web & E-Commerce", count: null },
  { id: "WEBAPP_SAAS", label: "Web App & SaaS", count: null },
  // { id: "SOPHIA_THEME", label: "Sophia Theme", count: null },
  { id: "BRAND_IDENTITY", label: "Brand Identity", count: null },
];

const TYPE_LABELS: Record<string, string> = {
  WEB_ECOMMERCE: "Web & E-Commerce",
  WEBAPP_SAAS: "Web App & SaaS",
  // SOPHIA_THEME: "Sophia Theme",
  BRAND_IDENTITY: "Brand Identity",
};

const getProjectLabel = (typeStr: string, t: any): string => {
  if (!typeStr) return t('projects.default_label');
  return typeStr
    .split(" ")
    .map(t_str => TYPE_LABELS[t_str] || t_str.replace(/_/g, ' '))
    .join(" • ");
};

const projectMatchesCategory = (project: any, categoryId: string): boolean => {
  if (categoryId === "ALL") return true;
  const searchIn = [
    project.type || "",
    project.technologies || "",
    project.category || "",
  ].join(" ").toUpperCase();
  return searchIn.includes(categoryId.toUpperCase());
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD (NEBULA DASHBOARD STYLE)
// ─────────────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  const { t } = useTranslation();
  const isLarge = idx % 3 === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-700 ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <Link
        to={project.id === "loghi" ? "/progetti/loghi" : `/progetti/${project.slug || project.id}`}
        className="flex flex-col h-full"
      >
        {/* Spotlight Effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

        {/* ── Image Header ── */}
        <div className="relative overflow-hidden aspect-[16/9] w-full border-b border-white/10 z-10">
          <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
          
          {/* Telemetry Dots */}
          <div className="absolute top-4 left-4 z-20 flex gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
             <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>

          <motion.img
            src={
              project.image?.startsWith('http') || project.image?.startsWith('/')
                ? project.image
                : `${BASE_URL}${project.image}`
            }
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          />

          <div className="absolute bottom-4 right-4 z-20 text-[#d4af37] bg-black/40 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-500 border border-white/10">
             <Maximize2 size={16} />
          </div>
        </div>

        {/* ── Data Panel (Body) ── */}
        <div className="flex flex-col flex-1 p-8 relative z-10">
          
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              {getProjectLabel(project.type || project.project_type, t)}
            </span>
            <span className="font-mono text-[9px] text-white/30 tracking-[0.2em]">{project.year || "2025"}</span>
          </div>

          <h2 className="font-bricolage font-black tracking-tight text-3xl md:text-4xl text-white group-hover:text-[#d4af37] transition-colors duration-500 mb-4">
            {t(`projects_data.${project.id}.title`, { defaultValue: project.title })}
          </h2>

          <p className="font-outfit font-light text-white/50 text-[15px] leading-relaxed line-clamp-2 mb-8 flex-1">
            {t(`projects_data.${project.id}.description`, { defaultValue: project.description })}
          </p>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {typeof project.technologies === 'string' 
              ? project.technologies.split(',').slice(0, 3).map((tech: string) => (
                 <span key={tech} className="px-3 py-1 border border-white/10 bg-white/[0.02] text-white/60 text-[8px] uppercase tracking-[0.1em] font-mono rounded-full">
                    {tech.trim()}
                 </span>
              ))
              : project.technologies?.slice(0, 3).map((tech: string) => (
                 <span key={tech} className="px-3 py-1 border border-white/10 bg-white/[0.02] text-white/60 text-[8px] uppercase tracking-[0.1em] font-mono rounded-full">
                    {tech}
                 </span>
              ))
            }
          </div>

        </div>
      </Link>
    </motion.article>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const NebulaProgetti = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: t('projects.title_1') + " " + t('projects.title_2'),
    description: t('projects.description'),
  });

  const [projects, setProjects] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const fallbackProjects = getFallbackProjects(t);
  const CATEGORIES = getCategories(t);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        const results = data.results || data;
        const filtered = results.filter((p: any) => p.id !== 'SOPHIA_THEME' && p.id !== 'sophiatheme');
        setProjects(filtered && filtered.length > 0 ? filtered : fallbackProjects);
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [t]); // Added t dependency to re-fetch fallback if language changes

  const categoriesWithCount = CATEGORIES.map(cat => ({
    ...cat,
    count: cat.id === "ALL"
      ? projects.length
      : projects.filter(p => projectMatchesCategory(p, cat.id)).length,
  }));

  const filtered = projects.filter(p => projectMatchesCategory(p, activeCategory));

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative md:pl-20">
      <NebulaNav />

      {/* ═════════════════════════════════════════════════════
          GLOBAL BACKGROUNDS (NEBULA AESTHETIC)
          ═════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <Suspense fallback={<div className="absolute inset-0 bg-[#080808]" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-70">
        <motion.div 
          animate={{ x: ["0%", "10%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.15, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#d4af37]/10 to-[#3d0f1a]/10 blur-[130px]" 
        />
        <motion.div 
          animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "-5%", "0%"], scale: [1, 1.1, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-900/10 to-[#3d0f1a]/5 blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-rose-900/5 blur-[120px] mix-blend-screen" 
        />
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          HERO SECTION
          ─────────────────────────────────────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="lg:col-span-7 space-y-8">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
             >
               <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4af37] flex items-center gap-2">
                    <span className="text-[10px]">✦</span> {t('projects.subtitle')}
                  </span>
               </div>
               <div className="flex flex-wrap items-baseline gap-x-6 pb-4">
                  <RevealText 
                    text={t('projects.title_1')} 
                    delay={0.1} 
                    className="font-bricolage font-bold tracking-wider text-6xl md:text-7xl lg:text-[6.5vw] leading-[1.1] text-white whitespace-nowrap uppercase" 
                  />
                  <RevealText 
                    text={t('projects.title_2')} 
                    delay={0.2} 
                    className="font-fraunces italic font-light tracking-wider text-6xl md:text-7xl lg:text-[6.5vw] leading-[1.1] text-[#d4af37] whitespace-nowrap" 
                  />
               </div>
             </motion.div>
          </div>
          <div className="lg:col-span-5 space-y-6 md:pb-4">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="font-outfit font-light text-white/60 text-lg leading-relaxed border-l border-[#d4af37]/30 pl-8 backdrop-blur-sm"
             >
               {t('projects.description')}
             </motion.p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          CATEGORY FILTER BAR (Glassmorphism)
          ─────────────────────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-40 bg-[#080808]/80 backdrop-blur-xl border-y border-white/5 px-6 md:px-12 lg:px-24 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">

            {/* Category buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {categoriesWithCount.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(8);
                  }}
                  className={`relative px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                    ? 'text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/40 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] font-bold'
                    : 'text-white/40 border border-transparent hover:text-white hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Status / Count */}
            <div className="shrink-0 flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full">
               <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
               <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#d4af37]/70 font-bold">
                 {filtered.length} {filtered.length === 1 ? t('projects.count_singular') : t('projects.count_plural')}
               </span>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          PROJECT GRID (Bento Style)
          ─────────────────────────────────────────────────────────────────── */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          
          {loading ? (
            <div className="w-full py-32 flex flex-col items-center justify-center font-mono text-[10px] text-[#d4af37] animate-pulse uppercase tracking-[0.2em] gap-4">
               <Hexagon size={24} className="animate-spin-slow opacity-50" />
               {t('projects.loading')}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-32 text-center"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40">
                    {t('projects.no_projects')}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filtered.slice(0, visibleCount).map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Load More Button */}
          {!loading && filtered.length > visibleCount && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="group relative flex items-center justify-center px-10 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/40 overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 group-hover:text-[#d4af37] font-bold transition-colors">
                  {t('projects.load_more')}
                </span>
              </button>
            </motion.div>
          )}

        </div>
      </main>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default NebulaProgetti;
