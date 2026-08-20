import React, { useEffect, useState, Suspense } from "react";
import { Img } from "@/components/Img";
import { useTranslation } from "react-i18next";
import { api } from "@/lib/api";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/components/Link";
import { NebulaPackagesSection } from "./components/NebulaPackagesSection";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { RevealText } from "@/components/RevealText";
import { KineticText } from "@/components/KineticText";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { SkewWrapper } from "./components/SkewWrapper";

const HeroCanvas = React.lazy(() =>
  import("./components/HeroCanvas").then((module) => ({
    default: module.HeroCanvas,
  })),
);

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const NebulaIndex = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  // Parallax Values per Awwwards Scroll
  const parallaxSlow = useTransform(scrollY, [0, 3000], [0, -100]);
  const parallaxFast = useTransform(scrollY, [0, 3000], [0, -250]);

  // Interactive Glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, glowX: 0, glowY: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [projData, servData] = await Promise.all([
          api.getProjects(),
          api.getServices(),
        ]);
        const results = projData.results || projData;
        const filtered = results.filter(
          (p: any) =>
            p.id !== "SOPHIA_THEME" &&
            p.id !== "sophiatheme" &&
            p.id !== "CHARIO_HIFI" &&
            p.id !== "chariohifi" &&
            p.id !== "portfolio",
        );
        setProjects(filtered);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
        console.warn(
          "Utilizzo dati di fallback hardcoded per progetti e servizi. Rimuovere in produzione.",
        );
      }
    };
    fetchData();

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const glowX = (clientX / window.innerWidth - 0.5) * 100;
      const glowY = (clientY / window.innerHeight - 0.5) * 100;
      setMousePos({ x: clientX, y: clientY, glowX, glowY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Abilita lo scroll snapping nativo
    document.documentElement.classList.add("snap-y", "snap-mandatory");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  const fallbackProjects = [
    {
      id: 1,
      title: t("index_fallback.1.title", "Villa Masami"),
      type: t("index_fallback.1.type", "Brand Identity • UI/UX Design • Web"),
      image: "/assets/projects/villa-masami/struttura.webp",
      url: "/progetti/villamasami",
      description: t(
        "index_fallback.1.description",
        "Un progetto digitale completo. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress.",
      ),
    },
    {
      id: 3,
      title: t("index_fallback.3.title", "StorageHub"),
      type: t(
        "index_fallback.3.type",
        "Sviluppo Web Full-Stack • Cloud Management",
      ),
      image: "/assets/projects/storage-hub/dashboard.webp",
      url: "/progetti/storagehub",
      description: t(
        "index_fallback.3.description",
        "Una web app intelligente di storage e inventory management su scala enterprise.",
      ),
    },
  ];

  const displayProjects =
    projects.length > 0 ? projects.slice(0, 3) : fallbackProjects;

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={[
          "scroll.hero",
          "scroll.about",
          "scroll.work",
          "scroll.metrics",
          "scroll.skills",
          "scroll.contact",
        ].map((k) => t(k))}
      />

      <main className="relative z-10 w-full min-h-[100dvh] flex flex-col">
        {/* SFONDO 3D GLOBALE IMMERSIVO (Awwwards Style) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Suspense
            fallback={<div className="absolute inset-0 bg-night" />}
          >
            <HeroCanvas />
          </Suspense>
        </div>

        {/* PREMIUM MESH AURORA BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
          {/* Animated Mesh Blobs */}
          <motion.div
            animate={{
              x: ["0%", "10%", "0%"],
              y: ["0%", "5%", "0%"],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-gold/10 to-ink/10 blur-[130px]"
          />
          <motion.div
            animate={{
              x: ["0%", "-10%", "0%"],
              y: ["0%", "-5%", "0%"],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-900/10 to-ink/5 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-rose-900/5 blur-[120px] mix-blend-screen"
          />

          {/* Grana Fotografica Premium */}
          <div
            className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />
        </div>

        {/* HERO SECTION */}
        <motion.section
          style={{ y: yParallax, opacity: opacityParallax }}
          id="hero"
          className="relative min-h-[90vh] flex items-start md:items-center pt-32 md:pt-16 lg:pt-0 pb-20 overflow-hidden snap-start"
        >
          {/* Bagliore focus per i testi (sopra il 3D, dietro il testo) */}
          <div className="absolute top-[40%] left-[10%] -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none z-10" />

          {/* TESTO IN PRIMO PIANO - Riportato a sinistra */}
          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col relative z-20 pointer-events-none">
            <div className="max-w-4xl pt-10 md:pt-0">
              <div className="flex flex-col relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                    <span className="text-[10px]">✦</span> {t("hero.tags")}
                  </span>
                </div>

                <div className="flex flex-row flex-nowrap items-baseline gap-x-2 md:gap-x-4 pb-4 w-full overflow-hidden">
                  <RevealText
                    text={t("index.hero_title_1")}
                    delay={0.1}
                    className="font-bricolage font-bold tracking-wider text-[clamp(1.75rem,6.5vw,5rem)] md:text-fluid-h1 leading-[1.1] text-white whitespace-nowrap"
                  />
                  <RevealText
                    text={t("index.hero_title_2")}
                    delay={0.2}
                    className="font-fraunces italic font-light tracking-wider text-[clamp(1.75rem,6.5vw,5rem)] md:text-fluid-h1 leading-[1.1] text-gold whitespace-nowrap pr-2"
                  />
                </div>
              </div>

              <motion.p
                className="text-neutral-400 font-inter font-light text-base md:text-lg max-w-xl leading-relaxed mt-6 border-l-2 border-gold/20 pl-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12"
              >
                <MagneticWrapper>
                  <Link
                    to="/contatti"
                    className="group inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-gold transition-colors duration-300 pointer-events-auto"
                  >
                    <span className="relative">
                      {t("cta.button")}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700 ease-out" />
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-2 transition-transform duration-500"
                    />
                  </Link>
                </MagneticWrapper>
              </motion.div>
            </div>

            {/* META DATI A DESTRA - Simmetria Architetturale */}
            <div className="hidden lg:flex absolute right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 flex-col items-end text-right gap-8 opacity-60 pointer-events-none border-r-2 border-gold/20 pr-6">
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gold/70">
                  {t("footer.status_label")}
                </span>
                <span className="font-inter text-xs tracking-[0.2em] text-white font-light">
                  {t("footer.available").toUpperCase().replace(" ✓", "")}
                </span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gold/70">
                  {t("about.loc_label")}
                </span>
                <span className="font-inter text-xs tracking-[0.2em] text-white font-light">
                  {t("about.loc_val").toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gold/70">
                  {t("about.role_label")}
                </span>
                <span className="font-inter text-xs tracking-[0.2em] text-white font-light">
                  {t("about.role_val").toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────────────
             ABOUT — DRAMATIC QUOTE
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 py-32 md:py-48 overflow-hidden snap-start"
        >
          <div className="px-6 md:px-12 lg:px-24 relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-12 block">
              {t("index.approach_label")}
            </span>

            {/* Massive editorial quote */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-bricolage font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white max-w-5xl mb-16"
            >
              {t("index.approach_title_1")} <br />
              <span className="font-fraunces italic font-light text-gold pr-2">
                {t("index.approach_title_2")}
              </span>
              <br />
              <span className="text-white/70">
                {t("index.approach_title_3")}
              </span>
            </motion.h2>

            <div className="flex flex-col md:flex-row md:items-start gap-12 max-w-5xl">
              <div className="md:w-1/2 h-[1px] bg-white/10 mt-4 hidden md:block" />
              <div className="md:w-1/2 border-l-2 border-gold/20 pl-8">
                <p className="font-inter text-base text-white/60 leading-[1.9] font-light mb-8 whitespace-pre-wrap">
                  {t("index.approach_desc")}
                </p>
                <MagneticWrapper>
                  <Link
                    to="/servizi"
                    className="group inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-gold transition-colors duration-300"
                  >
                    <span className="relative">
                      {t("index.discover_services")}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700 ease-out" />
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-2 transition-transform duration-500"
                    />
                  </Link>
                </MagneticWrapper>
              </div>
            </div>
          </div>
        </motion.section>

        <NebulaPackagesSection />

      {/* ───────────────────────────────────────────────────────────────────
             PROJECTS — DRAMATIC LIST
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="py-32 relative z-20 bg-[#0a0a0a] snap-start"
        >
          <div className="px-6 md:px-12 lg:px-24 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6 block">
              {t("index.projects_label")}
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              {t("index.projects_title_1")}{" "}
              <span className="font-fraunces text-gold italic font-light tracking-wide pr-2">
                {t("index.projects_title_2")}
              </span>
            </motion.h2>
          </div>

          <div className="w-full border-t border-white/10">
            <div className="relative">
              <motion.div
                className="hidden lg:block fixed pointer-events-none z-50 w-[350px] aspect-[4/3] overflow-hidden shadow-2xl border border-white/10"
                animate={{
                  x: mousePos.x,
                  y: mousePos.y,
                  opacity: hoveredProject !== null ? 1 : 0,
                  scale: hoveredProject !== null ? 1 : 0.95,
                }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 100,
                  mass: 0.5,
                }}
                style={{
                  translateX: "-50%",
                  translateY: "-60%",
                  left: 0,
                  top: 0,
                }}
              >
                {displayProjects.map((p: any) => (
                  <Img
                    key={p.id}
                    src={
                      p.image?.startsWith("http") || p.image?.startsWith("/")
                        ? p.image
                        : `${BASE_URL}${p.image}`
                    }
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredProject === p.id ? "opacity-100" : "opacity-0"}`}
                    alt={p.title}
                  />
                ))}
              </motion.div>

              {displayProjects.map((item, i) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="group relative flex items-center border-b border-white/5 hover:border-white/20 transition-all duration-500 cursor-crosshair overflow-hidden"
                  onMouseEnter={() => setHoveredProject(item.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-full flex items-center gap-6 md:gap-12 px-6 md:px-12 lg:px-24 py-10 md:py-12">
                    {/* Progressive number */}
                    <span className="font-mono text-3xl md:text-4xl lg:text-5xl text-white/50 group-hover:text-white/50 transition-colors duration-500 tabular-nums flex-shrink-0 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title + type */}
                    <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                      <h3 className="font-bricolage font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white/60 group-hover:text-white transition-colors duration-500 truncate">
                        {t(`index_fallback.${item.id}.title`, {
                          defaultValue: item.title,
                        })}
                      </h3>
                      <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 group-hover:text-gold transition-colors md:text-right block">
                        {t(`index_fallback.${item.id}.type`, {
                          defaultValue: item.type,
                        })}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0 hidden md:block">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-20 px-6">
            <MagneticWrapper>
              <Link
                to="/progetti"
                className="group inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-gold transition-colors duration-300"
              >
                <span className="relative overflow-hidden">
                  {t("index.all_projects")}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </MagneticWrapper>
          </div>
        </motion.section>
        <NebulaFooter />
      </main>
    </div>
  );
};

export default NebulaIndex;
