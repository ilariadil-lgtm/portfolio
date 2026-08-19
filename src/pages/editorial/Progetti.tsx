import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const fallbackProjects = [
  {
    id: "storagehub",
    title: "StorageHub",
    type: "WEBAPP_SAAS",
    technologies:
      "React.js, Node.js (Express), AWS S3 / CloudFront, PostgreSQL, REST API, UX Strategy",
    year: "2026",
    image: "/assets/projects/storage-hub/dashboard.webp",
    project_url: "https://storagehub.com",
    description:
      "Una web app intelligente di storage e inventory management che semplifica e automatizza la gestione dell'inventario su scala enterprise.",
  },
  {
    id: "villamasami",
    title: "Villa Masami",
    type: "WEB_ECOMMERCE BRAND_IDENTITY",
    technologies:
      "Brand & Logo Design, UI/UX Design, Copywriting, WordPress (Bilingual)",
    year: "2025",
    image: "/assets/projects/villa-masami/struttura.webp",
    project_url: "",
    description:
      "Un progetto digitale completo realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress.",
  },
  {
    id: "pattiforniture",
    title: "Patti Forniture",
    type: "WEB_ECOMMERCE",
    technologies:
      "UI/UX Design, Information Architecture, Copywriting, WordPress Corporate",
    year: "2024",
    image: "/assets/projects/patti-forniture/homepage.webp",
    project_url: "",
    description:
      "Un restyling web corporate realizzato in collaborazione con l'agenzia Carnova per una storica azienda leader nel Sud Italia di forniture industriali.",
  },
  {
    id: "sicilcosmetic",
    title: "SicilCosmetic",
    type: "WEB_ECOMMERCE",
    technologies:
      "PrestaShop Configuration, E-commerce UI/UX, Catalog Management, Copywriting & Layout",
    year: "2025",
    image: "/assets/projects/sicil-cosmetic/homepage.webp",
    project_url: "",
    description:
      "Un progetto e-commerce end-to-end realizzato su piattaforma PrestaShop per l'agenzia Carnova. Gestione ed organizzazione dell'intero catalogo beauty.",
  },
  {
    id: "newpop",
    title: "Newpop",
    type: "WEB_ECOMMERCE",
    technologies:
      "PrestaShop Integration, UI/UX Design, Visual Merchandising, Information Architecture",
    year: "2024",
    image: "/assets/projects/newpop/homepage.webp",
    project_url: "",
    description:
      "Boutique digitale per il design e l'arredamento d'interni, realizzata per l'agenzia Carnova. UI/UX curata e configurazione PrestaShop.",
  },
  {
    id: "vinigambino",
    title: "Vini Gambino",
    type: "WEB_ECOMMERCE",
    technologies:
      "UI/UX & Graphic Layout, WordPress Environment, Hospitality & E-commerce, Visual Storytelling",
    year: "2024",
    image: "/assets/projects/vini-gambino/homepage.webp",
    project_url: "",
    description:
      "L'essenza del terroir vulcanico tradotta in un'esperienza digitale immersiva. Progetto realizzato in collaborazione con l'agenzia Carnova.",
  },
  {
    id: "bagliolauria",
    title: "Baglio Lauria",
    type: "WEB_ECOMMERCE",
    technologies:
      "UI/UX Design, Copywriting & Content, WordPress Layout, Hospitality Design",
    year: "2023",
    image: "/assets/projects/baglio-lauria/homepage.webp",
    project_url: "",
    description:
      "Un progetto digitale realizzato in collaborazione con l'agenzia Carnova, dedicato a un incantevole agriturismo e location per eventi in Sicilia.",
  },
  {
    id: "villamima",
    title: "Villa Mima",
    type: "WEB_ECOMMERCE",
    technologies:
      "UI/UX Design, WordPress Environment, Copywriting & Storytelling, Wedding & Event Industry",
    year: "2023",
    image: "/assets/projects/villa-mima/home.webp",
    project_url: "",
    description:
      "Un progetto digitale raffinato realizzato in collaborazione con l'agenzia Carnova. Cura dell'interfaccia utente, della narrazione visiva e dello sviluppo su WordPress per una location d'eccellenza dedicata a matrimoni e ricevimenti in Sicilia.",
  },
  {
    id: "loghi",
    title: "Branding & Loghi",
    type: "BRAND_IDENTITY",
    technologies:
      "Logo Design, Brand Identity, Visual Guidelines, Art Direction",
    year: "2022-2025",
    image: "/assets/loghi/sicef/logo_1.webp",
    project_url: "",
    description:
      "Una selezione curata di identità visive, marchi e loghi d'autore disegnati per dare forma, coerenza e valore a storie ed aziende leader.",
  },
];

// Categories mapping — values must match what comes from the API or fallback type field
const CATEGORIES = [
  { id: "ALL", label: "Tutti", count: null },
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
  if (!typeStr) return t("projects.default_label");
  return typeStr
    .split(" ")
    .map((t_str) => TYPE_LABELS[t_str] || t_str.replace(/_/g, " "))
    .join(" • ");
};

// Determine if a project belongs to a category
const projectMatchesCategory = (project: any, categoryId: string): boolean => {
  if (categoryId === "ALL") return true;
  const searchIn = [
    project.type || "",
    project.technologies || "",
    project.category || "",
  ]
    .join(" ")
    .toUpperCase();
  return searchIn.includes(categoryId.toUpperCase());
};

// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT CARD — editorial, compact, scalable
// ─────────────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{
        duration: 0.6,
        delay: (idx % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col h-full bg-white border border-ink shadow-[10px_10px_0px_rgba(61,15,26,0.05)] hover:shadow-[10px_10px_0px_#c0392b] transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image block ── */}
      <Link
        to={
          project.id === "loghi" ? "/progetti/loghi" : `/progetti/${project.id}`
        }
        className="block relative overflow-hidden bg-cream aspect-[4/3] border-b border-ink/10"
        data-cursor="view"
      >
        {/* Numero indice sovrapposto */}
        <span className="absolute top-6 left-6 z-20 font-typewriter text-[9px] uppercase tracking-[0.4em] text-ink/80 select-none bg-white/80 px-2 py-1 border border-ink/20">
          {String(idx + 1).padStart(2, "0")}
        </span>

        {/* Image */}
        <motion.img
          src={
            project.image?.startsWith("http") || project.image?.startsWith("/")
              ? project.image
              : `${BASE_URL}${project.image}`
          }
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Corner brackets */}
        <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-ink/20 pointer-events-none transition-all duration-500 group-hover:border-primary" />
        <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-ink/20 pointer-events-none transition-all duration-500 group-hover:border-primary" />
      </Link>

      {/* ── Text block ── */}
      <div className="flex flex-col flex-1 p-6 transition-colors duration-500">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-primary font-bold leading-relaxed">
            {getProjectLabel(project.type, t)}
          </span>
          <span className="font-typewriter text-[9px] text-ink/65 shrink-0 font-bold">
            {project.year || "2025"}
          </span>
        </div>

        <h2
          className="font-display font-black text-ink tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
        >
          {t(`projects_data.${project.id}.title`, {
            defaultValue: project.title,
          })}
        </h2>

        <p className="font-body text-[14px] text-ink/70 leading-relaxed line-clamp-2 mb-8 flex-1">
          {t(`projects_data.${project.id}.description`, {
            defaultValue: project.description,
          })}
        </p>

        <Link
          to={
            project.id === "loghi"
              ? "/progetti/loghi"
              : `/progetti/${project.id}`
          }
          data-cursor="pointer"
          className="inline-flex items-center justify-between font-typewriter text-[9px] uppercase tracking-[0.35em] text-ink font-bold group/link border-t border-ink/10 pt-4"
        >
          <span className="relative overflow-hidden group-hover/link:text-primary transition-colors">
            {t("projects.explore")}
          </span>
          <ArrowRight
            size={14}
            className="group-hover/link:text-primary group-hover/link:translate-x-1 transition-all duration-400"
          />
        </Link>
      </div>
    </motion.article>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Progetti = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Progetti",
    description:
      "Archivio dei progetti di Ilaria Diliberto: siti web, e-commerce, web app e design system realizzati con estrema precisione e attenzione al dettaglio.",
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
        const filtered = results.filter(
          (p: any) =>
            p.id !== "SOPHIA_THEME" &&
            p.id !== "sophiatheme" &&
            p.id !== "CHARIO_HIFI" &&
            p.id !== "chariohifi" &&
            p.id !== "portfolio" &&
            p.id !== "freelens",
        );
        setProjects(
          filtered && filtered.length > 0 ? filtered : fallbackProjects,
        );
      } catch {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categoriesWithCount = CATEGORIES.map((cat) => ({
    ...cat,
    label: cat.id === "ALL" ? t("projects.cat_all") : cat.label,
    count:
      cat.id === "ALL"
        ? projects.length
        : projects.filter((p) => projectMatchesCategory(p, cat.id)).length,
  }));

  const filtered = projects.filter((p) =>
    projectMatchesCategory(p, activeCategory),
  );

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-cream flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary"
        >
          {t("projects.loading")}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-cream text-ink overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-52 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-display font-black text-ink/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            {t("projects.watermark")}
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
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                  {t("projects.subtitle")}
                </span>
                <div className="w-10 h-[1px] bg-primary/25" />
              </div>
              <h1
                className="font-display font-black leading-[1.1] md:leading-[0.85] tracking-tighter text-ink"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                <RevealText text={t("projects.title_1")} delay={0.1} />
                <RevealText
                  text={t("projects.title_2")}
                  delay={0.2}
                  className="text-primary italic pr-2"
                />
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-body text-xl text-ink/70 leading-relaxed border-l border-primary/25 pl-8">
                {t("projects.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CATEGORY FILTER BAR
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-y border-ink/10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
            {/* Category buttons */}
            <div className="flex overflow-x-auto no-scrollbar md:flex-wrap items-center justify-start gap-2 pb-2 md:pb-0 max-w-[100vw] -mx-6 px-6 md:mx-0 md:px-0">
              {categoriesWithCount.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(6); // Reset pagination on category change
                  }}
                  data-cursor="pointer"
                  className={`relative px-5 py-2.5 font-typewriter text-[10px] uppercase tracking-[0.3em] transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "text-white bg-ink font-bold shadow-sm"
                      : "text-ink/65 hover:text-ink hover:bg-ink/5 font-semibold"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="shrink-0 flex items-center gap-2 opacity-50">
              <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] font-bold">
                {filtered.length}{" "}
                {filtered.length === 1
                  ? t("projects.count_singular")
                  : t("projects.count_plural")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           PROJECT GRID
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 min-h-[50vh]">
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
                <p className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary/40 font-bold">
                  {t("projects.no_projects")}
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
                onClick={() => setVisibleCount((prev) => prev + 6)}
                data-cursor="pointer"
                className="group relative flex items-center justify-center px-12 py-5 border border-ink bg-white hover:shadow-[8px_8px_0px_#c0392b] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink transition-colors font-bold group-hover:text-primary">
                  {t("projects.load_more")}
                </span>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           MANIFESTO — PHILOSOPHY BREAK (Refactored Light Mode)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white border-y border-ink/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-8">
                {t("projects.manifesto_label")}
              </span>
              <blockquote
                className="font-display font-black leading-[0.9] tracking-tighter text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
              >
                "{t("projects.manifesto_title_1")} <br />
                <span className="text-primary italic pr-2">
                  {t("projects.manifesto_title_2")}"
                </span>
              </blockquote>
              <p className="font-body text-lg text-ink/70 leading-relaxed mt-8 max-w-xl">
                {t("projects.manifesto_desc")}
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5 lg:pl-12 lg:border-l border-ink/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="space-y-8">
                {[
                  { label: t("projects.stat1_label"), value: "12+" },
                  { label: t("projects.stat2_label"), value: "100%" },
                  {
                    label: t("projects.stat3_label"),
                    value: t("projects.stat3_val"),
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between border-b border-ink/5 pb-5"
                  >
                    <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink/65 font-bold">
                      {stat.label}
                    </span>
                    <span
                      className={`font-display text-2xl font-black ${i === 2 ? "text-primary italic" : "text-ink"}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Progetti;
