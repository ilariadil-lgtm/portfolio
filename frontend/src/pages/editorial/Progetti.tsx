import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const BASE_URL = 'http://localhost:8000';

const fallbackProjects = [
  {
    id: 1,
    title: "Chario Hifi",
    type: "UX_DESIGN",
    technologies: "Sophia Theme, React, TailwindCSS, UX Design",
    year: "2025",
    image: "/assets/project-nebula.jpg",
    project_url: "https://chariohifi.it",
    description: "L'alta fedeltà digitale. Sito premium creato col mio tema proprietario Sophia per offrire un'esperienza acustica e visiva senza compromessi."
  },
  {
    id: 2,
    title: "StorageHub",
    type: "FRONTEND",
    technologies: "React, Node.js, AWS S3, CloudFront, UX Strategy",
    year: "2024",
    image: "/assets/project-zenith.jpg",
    project_url: "https://storagehub.com",
    description: "Una web app intelligente di storage e inventory management che semplifica e automatizza la gestione dell'inventario su scala enterprise."
  },
  {
    id: 3,
    title: "Freelens",
    type: "UX_DESIGN",
    technologies: "Figma, React, Framer Motion, Product Strategy",
    year: "2024",
    image: "/assets/project-freelens.jpg",
    project_url: "https://freelens.app",
    description: "Spazio digitale di project management per gestire progetti e task, riprendendo il controllo del proprio tempo con un'interfaccia focalizzata."
  }
];

// Categories mapping — values must match what comes from the API or fallback type field
const CATEGORIES = [
  { id: "ALL", label: "Tutti", count: null },
  { id: "UX_DESIGN", label: "UI & UX Design", count: null },
  { id: "FRONTEND", label: "Sviluppo Web", count: null },
  { id: "CLOUD_ARCH", label: "Tech PM", count: null },
];

// Determine if a project belongs to a category
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
//  PROJECT CARD — editorial, compact, scalable
// ─────────────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image block ── */}
      <Link to={`/progetti/${project.id}`} className="block relative overflow-hidden bg-[#3d0f1a] aspect-[4/3]">
        {/* Numero indice sovrapposto */}
        <span className="absolute top-6 left-6 z-20 font-typewriter text-[9px] uppercase tracking-[0.4em] text-white/40 select-none">
          {String(idx + 1).padStart(2, '0')}
        </span>

        {/* Image */}
        <motion.img
          src={
            project.image?.startsWith('http') || project.image?.startsWith('/')
              ? project.image
              : `${BASE_URL}${project.image}`
          }
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
          animate={{ scale: hovered ? 1.05 : 1, opacity: hovered ? 0.7 : 0.45 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Hover overlay con link arrow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#3d0f1a]/80 via-transparent to-transparent"
          animate={{ opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        />

        {/* Corner brackets */}
        <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-white/15 pointer-events-none transition-all duration-500 group-hover:border-white/40" />
        <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-white/15 pointer-events-none transition-all duration-500 group-hover:border-white/40" />

        {/* Arrow icon bottom right, appears on hover */}
        <motion.div
          className="absolute bottom-5 right-5 w-10 h-10 border border-white/30 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowUpRight size={16} className="text-white" />
        </motion.div>
      </Link>

      {/* ── Text block ── */}
      <div className="flex flex-col flex-1 pt-6 pb-2 border-b border-primary/10 group-hover:border-primary/25 transition-colors duration-500">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-primary font-semibold leading-relaxed">
            {project.type?.replace(/_/g, ' ') || "Progetto"}
          </span>
          <span className="font-typewriter text-[9px] text-[#3d0f1a]/35 shrink-0">{project.year || "2025"}</span>
        </div>

        <h2 className="font-display font-black text-[#3d0f1a] tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
          {project.title}
        </h2>

        <p className="font-body text-[14px] text-[#3d0f1a]/60 leading-relaxed line-clamp-2 mb-5 flex-1">
          {project.description}
        </p>

        <Link
          to={`/progetti/${project.id}`}
          className="inline-flex items-center gap-3 font-typewriter text-[9px] uppercase tracking-[0.35em] text-primary font-semibold group/link self-start"
        >
          <span className="relative overflow-hidden">
            Esplora
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-400" />
          </span>
          <ArrowRight size={11} className="group-hover/link:translate-x-1.5 transition-transform duration-400" />
        </Link>
      </div>
    </motion.article>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Progetti = () => {
  usePageMeta({
    title: "Progetti",
    description: "Archivio dei progetti di Ilaria Diliberto: siti web, e-commerce, web app e design system realizzati con cura sartoriale e attenzione al dettaglio.",
  });

  const [projects, setProjects] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        const results = data.results || data;
        setProjects(results && results.length > 0 ? results : fallbackProjects);
      } catch {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categoriesWithCount = CATEGORIES.map(cat => ({
    ...cat,
    count: cat.id === "ALL"
      ? projects.length
      : projects.filter(p => projectMatchesCategory(p, cat.id)).length,
  }));

  const filtered = projects.filter(p => projectMatchesCategory(p, activeCategory));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary"
        >
          CARICAMENTO ARCHIVIO...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black text-[#3d0f1a]/[0.025] pr-4"
            style={{ fontSize: 'clamp(80px, 18vw, 240px)', lineHeight: 1 }}>
            ARCHIVIO
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
                  04 — I PROGETTI
                </span>
                <div className="w-10 h-[1px] bg-primary/25" />
              </div>
              <h1
                className="font-display font-black leading-[0.85] tracking-tighter text-[#3d0f1a]"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
              >
                Casi <br />
                <span className="text-primary italic">Studio.</span>
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-xl text-[#3d0f1a]/70 leading-relaxed border-l border-primary/25 pl-8">
                Dall'analisi del problema al rilascio sul mercato.
                Una raccolta di progetti in cui la logica dello sviluppo full-stack e
                l'empatia del design si uniscono per superare ostacoli complessi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CATEGORY FILTER BAR
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="sticky top-0 z-40 bg-[#f5f2ed]/95 backdrop-blur-md border-y border-primary/10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-5 gap-6 overflow-x-auto no-scrollbar">

            {/* Category buttons */}
            <div className="flex items-center gap-1 shrink-0">
              {categoriesWithCount.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(6); // Reset pagination on category change
                  }}
                  className={`relative px-5 py-2.5 font-typewriter text-[10px] uppercase tracking-[0.3em] transition-all duration-300 whitespace-nowrap ${activeCategory === cat.id
                    ? 'text-[#3d0f1a] font-bold'
                    : 'text-[#3d0f1a]/40 hover:text-[#3d0f1a]/70 font-semibold'
                    }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="categoryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="shrink-0 flex items-center gap-2 opacity-40">
              <span className="font-typewriter text-[9px] uppercase tracking-[0.3em]">
                {filtered.length} {filtered.length === 1 ? "progetto" : "progetti"}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           PROJECT GRID
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-32 text-center"
              >
                <p className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary/40">
                  Nessun progetto in questa categoria
                </p>
              </motion.div>
            ) : (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                >
                  {filtered.slice(0, visibleCount).map((project, idx) => (
                    <ProjectCard key={project.id} project={project} idx={idx} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filtered.length > visibleCount && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-20 flex justify-center"
              >
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="group relative flex items-center justify-center px-12 py-5 border border-primary/20 hover:border-primary/50 overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 font-typewriter text-[10px] uppercase tracking-[0.4em] text-[#3d0f1a] group-hover:text-white transition-colors font-semibold">
                    Mostra altri
                  </span>
                </button>
              </motion.div>
            )}

          </div>
        </section>

      {/* ═══════════════════════════════════════════════════════════════════
           MANIFESTO — PHILOSOPHY BREAK
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white/40 border-y border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-primary font-semibold block mb-8">
                05 — MANIFESTO
              </span>
              <blockquote
                className="font-display font-bold leading-[0.9] tracking-tighter text-[#3d0f1a]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
              >
                "Forma e funzione. <br />
                <span className="text-primary italic">L'estetica incontra il codice."</span>
              </blockquote>
              <p className="font-body text-lg text-[#3d0f1a]/60 leading-relaxed mt-8 max-w-xl">
                Ogni progetto in questo archivio è il risultato di una ricerca rigorosa del connubio tra
                estetica sartoriale e ingegneria web, volta a massimizzare le prestazioni e semplificare la complessità digitale.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5 lg:pl-12 lg:border-l border-primary/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-8">
                {[
                  { label: "Progetti completati", value: "12+" },
                  { label: "Google Lighthouse", value: "100%" },
                  { label: "Approccio", value: "Sartoriale" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-baseline justify-between border-b border-primary/8 pb-5">
                    <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-[#3d0f1a]/50">
                      {stat.label}
                    </span>
                    <span className={`font-display text-2xl font-black ${i === 2 ? 'text-primary italic' : 'text-[#3d0f1a]'}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CTA — DARK STRIP
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#3d0f1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c0392b_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-typewriter text-[12px] uppercase tracking-[0.4em] text-white font-bold block">
                06 — SYSTEM OPERATION
              </span>
              <h2
                className="font-display font-black leading-none tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
              >
                COSTRUIAMO <br />
                <span className="text-primary italic">QUALCOSA DI UNICO.</span>
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl">
                Hai un'idea per una web app, un design system sartoriale o un e-commerce ad alte prestazioni?
                Colleghiamo le nostre stazioni per concretizzare la tua visione digitale.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end justify-start items-center">
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-8 p-8 border border-white/10 hover:border-primary/40 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 w-full max-w-md justify-between"
              >
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-white font-medium group-hover:text-primary transition-colors">
                  PARLIAMONE
                </span>
                <ArrowRight size={18} className="text-white group-hover:text-primary group-hover:translate-x-4 transition-all duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Progetti;
