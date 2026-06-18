import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Globe,
  ExternalLink,
} from "lucide-react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { ProjectNavigation } from "@/components/ProjectNavigation";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const getFallbackProjects = (t: any) => [
  {
    id: 1,
    title: "Chario Hifi",
    type: "UI/UX Design • Frontend custom",
    technologies: "Sophia Theme, React, TailwindCSS, UX Design",
    year: "2025",
    project_url: "https://chariohifi.it",
    github_url: "",
    description: t("project_detail.fallback_desc1"),
    image: "/assets/chario-hero.webp",
  },
  {
    id: 2,
    title: "StorageHub",
    type: "Frontend custom • Tech PM",
    technologies: "React, Node.js, AWS S3, CloudFront, UX Strategy",
    year: "2024",
    image: "/assets/project-zenith.webp",
    project_url: "https://storagehub.com",
    github_url: "https://github.com",
    description: t("project_detail.fallback_desc2"),
  },
  {
    id: 3,
    title: "Freelens",
    type: "UI/UX Design • Sviluppo Web",
    technologies: "Figma, React, Framer Motion, Product Strategy",
    year: "2024",
    image: "/assets/project-zenith.webp",
    project_url: "https://freelens.app",
    github_url: "https://github.com",
    description: t("project_detail.fallback_desc3"),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export const EditorialProjectDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          let data: any = null;
          try {
            data = await api.getProject(id);
          } catch (err) {
            console.warn("API fallback triggered", err);
          }
          if (!data || data.detail === "Not found." || data.error) {
            data =
              getFallbackProjects(t).find((p) => p.id.toString() === id) ??
              null;
          }
          setProject(data);
        }
      } catch (e) {
        console.error("Errore caricamento progetto:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-[#f5f2ed] flex items-center justify-center">
        <motion.span
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary"
        >
          {t("project_detail.loading")}
        </motion.span>
      </div>
    );
  }

  /* ── Not found ── */
  if (!project) {
    return (
      <div className="min-h-[100dvh] bg-[#f5f2ed] flex flex-col items-center justify-center gap-8 text-[#3d0f1a]">
        <h1 className="font-display text-5xl font-black">
          {t("project_detail.not_found")}
        </h1>
        <Link
          to="/progetti"
          className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-primary font-semibold"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {t("project_detail.back_to_archive")}
        </Link>
      </div>
    );
  }

  const techList: string[] =
    typeof project.technologies === "string"
      ? project.technologies
          .split(",")
          .map((t: string) => t.trim())
          .filter(Boolean)
      : (project.technologies ?? []);

  /* Split title: last word gets italic-red styling */
  const words = project.title.trim().split(" ");
  const titleStart = words.slice(0, -1).join(" ");
  const titleEnd = words.at(-1) ?? "";

  // Dynamic SEO meta per ogni pagina progetto
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usePageMeta({
    title: project.title,
    description: project.description
      ? `${project.description.slice(0, 150)}…`
      : `Scopri il progetto ${project.title} — realizzato da Ilaria Diliberto.`,
    canonical: `/progetti/${id}`,
  });

  // Schema.org CreativeWork per il progetto
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!project) return;
    const cleanup = injectSchema({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: `https://ilariadiliberto.com/progetti/${id}`,
      image: project.image?.startsWith("http")
        ? project.image
        : `${BASE_URL}${project.image}`,
      author: {
        "@type": "Person",
        name: "Ilaria Diliberto",
      },
      dateCreated: project.year || "2025",
    });
    return cleanup;
  }, [project, id]);

  return (
    <div className="min-h-[100dvh] bg-[#f5f2ed] text-[#3d0f1a] selection:bg-primary/30 overflow-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO — full-viewport image + title overlay
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[400px] lg:min-h-[600px] overflow-hidden bg-[#3d0f1a]">
        {/* Background image */}
        <motion.img
          src={
            project.image?.startsWith("http") || project.image?.startsWith("/")
              ? project.image
              : `${BASE_URL}${project.image}`
          }
          alt={project.title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d0f1a] via-[#3d0f1a]/20 to-transparent" />

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20" />

        {/* Back link — top left */}
        <div className="absolute top-8 left-24 flex items-center h-12 pl-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/progetti"
              className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t("project_detail.archive")}
            </Link>
          </motion.div>
        </div>

        {/* Year badge — top right */}
        <motion.div
          className="absolute top-8 right-24 h-12 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-white/40">
            {project.year || "2025"}
          </span>
        </motion.div>

        {/* Title block — bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 lg:px-24 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-white/50 font-semibold">
                {project.type || t("project_detail.default_type")}
              </span>
              <div className="w-8 h-[1px] bg-white/25" />
            </div>
            <h1
              className="font-display font-black leading-[1.1] md:leading-[0.85] tracking-tighter text-white"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              {titleStart && (
                <>
                  {titleStart}
                  <br />
                </>
              )}
              <span className="text-primary italic pr-2">{titleEnd}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           META BAR — categoria, anno, link
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-b border-primary/10 px-8 md:px-16 lg:px-24 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto py-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/35">
                {t("project_detail.category")}
              </span>
              <span className="font-typewriter text-[11px] uppercase tracking-[0.2em] text-[#3d0f1a] font-bold">
                {project.type || "—"}
              </span>
            </div>
            <div className="w-px h-8 bg-primary/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/35">
                {t("project_detail.year")}
              </span>
              <span className="font-display text-xl font-black">
                {project.year || "—"}
              </span>
            </div>
            <div className="w-px h-8 bg-primary/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/35">
                {t("project_detail.status")}
              </span>
              <span className="font-typewriter text-[11px] text-green-700 font-bold tracking-widest">
                {t("project_detail.online")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/25 hover:bg-primary hover:border-primary transition-all duration-400"
              >
                <ExternalLink
                  size={13}
                  className="text-primary group-hover:text-white transition-colors"
                />
                <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors font-semibold">
                  {t("project_detail.view_live")}
                </span>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/15 hover:border-primary/40 transition-all duration-400"
              >
                <Github
                  size={13}
                  className="text-[#3d0f1a]/50 group-hover:text-[#3d0f1a] transition-colors"
                />
                <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-[#3d0f1a]/50 group-hover:text-[#3d0f1a] transition-colors font-semibold">
                  {t("project_detail.github")}
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           BODY — descrizione + stack
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — narrazione */}
          <motion.div
            className="lg:col-span-7 space-y-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-6">
                {t("project_detail.the_project")}
              </span>
              <p
                className="font-body text-[#3d0f1a]/80 leading-relaxed"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
              >
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-primary/8">
              <div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/35 block mb-3">
                  {t("project_detail.challenge_title")}
                </span>
                <p className="font-body text-[15px] text-[#3d0f1a]/65 leading-relaxed italic pr-2">
                  {t("project_detail.challenge_desc")}
                </p>
              </div>
              <div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/35 block mb-3">
                  {t("project_detail.result_title")}
                </span>
                <p className="font-body text-[15px] text-[#3d0f1a]/65 leading-relaxed italic pr-2">
                  {t("project_detail.result_desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — scheda tecnica */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#3d0f1a] text-white p-10 relative overflow-hidden">
              {/* top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary" />

              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-white/40 block mb-8">
                {t("project_detail.tech_stack")}
              </span>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 border border-white/10 font-typewriter text-[10px] uppercase tracking-widest text-white/75 hover:border-primary hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-white/35">
                    {t("project_detail.role_label")}
                  </span>
                  <span className="font-display text-lg font-black italic pr-2">
                    {t("project_detail.role_val")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-white/35">
                    {t("project_detail.year")}
                  </span>
                  <span className="font-display text-lg font-black">
                    {project.year || "2025"}
                  </span>
                </div>
              </div>
            </div>

            {/* Link cards below spec */}
            {(project.project_url || project.github_url) && (
              <div className="mt-4 flex flex-col gap-0">
                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-6 py-5 border border-primary/15 border-b-0 hover:bg-white/60 hover:border-primary/30 transition-all duration-400"
                  >
                    <div className="flex items-center gap-3">
                      <Globe size={14} className="text-primary" />
                      <span className="font-typewriter text-[10px] uppercase tracking-[0.35em] font-semibold">
                        {t("project_detail.site_live")}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-primary/40 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-400"
                    />
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-6 py-5 border border-primary/15 hover:bg-white/60 hover:border-primary/30 transition-all duration-400"
                  >
                    <div className="flex items-center gap-3">
                      <Github size={14} className="text-primary" />
                      <span className="font-typewriter text-[10px] uppercase tracking-[0.35em] font-semibold">
                        {t("project_detail.repo_github")}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-primary/40 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-400"
                    />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           NAVIGATION — prev / back / next
           ═══════════════════════════════════════════════════════════════════ */}
      <ProjectNavigation prev={undefined} next={undefined} />

      {/* ═══════════════════════════════════════════════════════════════════
           CTA — dark strip
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24 bg-[#3d0f1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c0392b_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.4em] text-white font-bold block">
              {t("project_detail.cta_label")}
            </span>
            <h2
              className="font-display font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              {t("project_detail.cta_title_1")} <br />
              <span className="text-primary italic pr-2">
                {t("project_detail.cta_title_2")}
              </span>
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl">
              {t("project_detail.cta_desc")}
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-8 p-8 border border-white/10 hover:border-primary/40 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 w-full max-w-md justify-between"
            >
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-white font-medium group-hover:text-primary transition-colors">
                {t("project_detail.cta_btn")}
              </span>
              <ArrowRight
                size={18}
                className="text-white group-hover:text-primary group-hover:translate-x-4 transition-all duration-700"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditorialProjectDetail;
