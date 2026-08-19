import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EditorialPackagesSection } from "@/components/EditorialPackagesSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CreativeHero } from "@/components/CreativeHero";
import { KineticText } from "@/components/KineticText";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Index = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Home",
    description:
      "Ilaria Diliberto — UX Designer e Web Developer. Progetto e costruisco ecosistemi digitali su misura: siti web, e-commerce e web app con estrema cura e precisione.",
    canonical: "/",
  });

  // Schema.org Person — migliora il knowledge panel Google
  useEffect(() => {
    const cleanup = injectSchema({
      "@type": "Person",
      name: "Ilaria Diliberto",
      url: "https://ilariadiliberto.com",
      jobTitle: "UX Designer & Web Developer",
      description:
        "Designer editoriale e sviluppatrice web specializzata in ecosistemi digitali curati, dal bozzetto all'ultima riga di codice.",
      image: "https://ilariadiliberto.com/assets/about-portrait.webp",
      sameAs: [
        "https://www.linkedin.com/in/ilaria-diliberto/",
        "https://github.com/ilariadil-lgtm",
        "https://www.instagram.com/ilariadiliberto_tech/",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IT",
      },
    });
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
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
            p.id !== "portfolio" &&
            p.id !== "freelens",
        );
        setProjects(filtered);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();
  }, []);

  const fallbackProjects = [
    {
      id: 1,
      title: "Villa Masami",
      type: "Brand Identity • UI/UX Design • Web",
      image: "/assets/projects/villa-masami/struttura.webp",
      url: "/progetti/villamasami",
      description:
        "Un progetto digitale completo. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress.",
    },
    {
      id: 2,
      title: "Freelens",
      type: "SaaS Management • UI/UX Design",
      image: "/assets/projects/freelens/home.webp",
      url: "/progetti/freelens",
      description:
        "Spazio digitale di project management per gestire progetti e task, riprendendo il controllo del proprio tempo con un'interfaccia focalizzata.",
    },
    {
      id: 3,
      title: "StorageHub",
      type: "Sviluppo Web Full-Stack • Cloud Management",
      image: "/assets/projects/storage-hub/dashboard.webp",
      url: "/progetti/storagehub",
      description:
        "Una web app intelligente di storage e inventory management su scala enterprise.",
    },
  ];

  const displayProjects =
    projects.length > 0 ? projects.slice(0, 3) : fallbackProjects;

  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — PREMIUM UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <CreativeHero />

      {/* ═══════════════════════════════════════════════════════════════════
           TRI-LAYER CINEMATIC MARQUEE — CREATIVE PRO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-40 md:pb-32 border-b border-editorial overflow-hidden bg-cream">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>

        <div className="flex whitespace-nowrap -rotate-2 opacity-5 pointer-events-none py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-16 font-display text-[12vw] font-black text-stroke-primary text-transparent whitespace-nowrap leading-normal"
          >
            <span className="pb-4">{t("index.marquee_1")}</span>
            <span className="pb-4">{t("index.marquee_1")}</span>
          </motion.div>
        </div>
        <div className="relative z-10 flex whitespace-nowrap rotate-1 scale-110 -mt-32 md:-mt-40 py-8">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-12 font-display text-[6vw] font-bold text-primary mix-blend-multiply opacity-90 whitespace-nowrap leading-normal"
          >
            <span className="pb-4">{t("index.marquee_2")}</span>
            <span className="pb-4">{t("index.marquee_2")}</span>
          </motion.div>
        </div>
        <div className="relative z-20 flex whitespace-nowrap -rotate-1 scale-105 mt-2 md:mt-4 py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-20 font-typewriter text-[13px] uppercase tracking-[0.5em] text-primary font-medium whitespace-nowrap leading-normal"
          >
            <span className="pb-4">{t("index.marquee_3")}</span>
            <span className="pb-4">{t("index.marquee_3")}</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           ABOUT PREVIEW — PREMIUM ANIMATIONS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-[5%_55%_40%] border-b border-editorial bg-cream overflow-hidden">
        <div className="hidden lg:flex border-r border-editorial flex-col items-center py-12 justify-between opacity-30 select-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-typewriter text-[11px] text-primary font-medium rotate-90 whitespace-nowrap tracking-[0.5em]"
          >
            {t("index.arch_env")}
          </motion.span>
          <div className="w-[1px] flex-1 bg-primary/20 my-12" />
          <span className="font-typewriter text-[11px] text-primary font-medium rotate-90 whitespace-nowrap tracking-[0.5em]">
            © 2026
          </span>
        </div>

        <div className="p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none"
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
                {t("index.approach_label")}
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </motion.div>
            <div className="mb-16">
              {[
                t("index.approach_title_1"),
                t("index.approach_title_2"),
                t("index.approach_title_3"),
              ].map((line, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-display text-4xl md:text-6xl lg:text-[clamp(2rem,4vw,4rem)] font-bold leading-[0.95] tracking-tight ${i === 2 ? "text-primary italic" : "text-ink"}`}
                >
                  {line}
                </motion.h2>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-body text-xl text-ink/70 leading-relaxed max-w-xl mb-16"
            >
              {t("index.approach_desc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/chisono"
                className="group inline-flex items-center gap-6 font-typewriter text-[13px] uppercase tracking-[0.25em] text-primary font-medium"
              >
                <span className="relative overflow-hidden">
                  {t("index.discover_services")}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-ink group">
          <motion.img
            initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 0.4, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/about-portrait.webp"
            alt="Portrait"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover absolute inset-0 mix-blend-luminosity group-hover:scale-105 transition-transform duration-2000"
          />
          <div className="absolute top-12 right-12 w-24 h-24 border border-white/5 backdrop-blur-md flex items-center justify-center">
            <span className="font-typewriter text-[11px] text-white rotate-90 uppercase tracking-[0.3em] font-medium">
              {t("index.tech_pm")}
            </span>
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-between h-full min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-background" />
                <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-background font-medium">
                  {t("index.what_i_do")}
                </span>
              </div>
              <ul className="font-mono text-[13px] text-background space-y-6 leading-relaxed font-medium">
                {services.length > 0 ? (
                  services.map((s: any, idx: number) => (
                    <motion.li
                      key={s.id}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="group/item flex items-center gap-4 transition-all duration-300"
                    >
                      <span className="w-4 h-[1px] bg-background/30 group-hover/item:bg-white group-hover/item:w-8 transition-all" />
                      <span className="group-hover/item:text-white transition-colors cursor-default">
                        {s.title}
                      </span>
                    </motion.li>
                  ))
                ) : (
                  <>
                    {[
                      "UI & UX Design",
                      "WordPress / Prestashop",
                      "Gestione Progetti (Tech PM)",
                    ].map((tech, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="group/item flex items-center gap-4 transition-all duration-300"
                      >
                        <span className="w-4 h-[1px] bg-background/30 group-hover/item:bg-white group-hover/item:w-8 transition-all" />
                        <span className="group-hover/item:text-white transition-colors cursor-default">
                          {tech}
                        </span>
                      </motion.li>
                    ))}
                  </>
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-8 border-t border-background/10"
            >
              <p className="font-body text-[15px] italic leading-relaxed text-background/60 max-w-sm pr-2">
                {t("index.signature")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        <EditorialPackagesSection />

      {/* ═══════════════════════════════════════════════════════════════════
           HORIZONTAL BLUEPRINT SLIDER — PROJECTS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-cream relative overflow-hidden border-b border-editorial">
        <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
                {t("index.projects_label")}
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h2 className="font-display text-5xl md:text-8xl lg:text-[clamp(2rem,7vw,7rem)] font-bold leading-none tracking-tighter">
              {t("index.projects_title_1")} <br />
              <span className="text-primary italic pr-2">
                {t("index.projects_title_2")}
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto mt-8 md:mt-0">
            <Link
              to="/progetti"
              className="group flex items-center justify-between md:justify-end w-full md:w-auto gap-6 font-typewriter text-[13px] uppercase tracking-[0.25em] text-primary font-medium"
            >
              <span className="text-left max-w-[150px] md:max-w-none leading-relaxed">{t("index.all_projects")}</span>
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
            <div className="hidden md:block font-typewriter text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
              {t("index.scroll_discover")}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex gap-20 md:gap-32 px-6 md:px-12 pb-12 w-max">
            {displayProjects.map((item, i) => (
              <div
                key={item.id}
                className="relative group/proj snap-center w-[85vw] md:w-[65vw] lg:w-[50vw]"
              >
                <div className="relative">
                  <div className="absolute -inset-6 pointer-events-none">
                    <svg
                      className="w-full h-full text-primary/20"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,5 L0,0 L5,0 M95,0 L100,0 L100,5 M100,95 L100,100 L95,100 M5,100 L0,100 L0,95"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.2"
                      />
                    </svg>
                    <span className="absolute -top-10 left-0 font-typewriter text-[10px] tracking-widest text-primary font-medium">
                      {t("index.loc_id")}: 00{item.id}
                    </span>
                  </div>
                  <Link
                    to={item.url}
                    className="block relative overflow-hidden group/box perspective-1000"
                  >
                    <motion.div
                      whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
                      className="relative aspect-[16/9] overflow-hidden bg-muted/10 border border-editorial shadow-xl"
                    >
                      <motion.img
                        src={
                          item.image?.startsWith("http") ||
                          item.image?.startsWith("/")
                            ? item.image
                            : `${BASE_URL}${item.image}`
                        }
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-all duration-1000"
                      />
                      <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                          className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 z-20"
                          initial={{ top: "-10%" }}
                          whileHover={{ top: ["0%", "100%", "0%"] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover/box:opacity-100 transition-all duration-700">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-1">
                            <span className="font-typewriter text-[7px] text-white/60 uppercase tracking-[0.4em]">
                              {t("index.type")}
                            </span>
                            <span className="font-display text-xs text-white font-bold">
                              {t(`index_fallback.${item.id}.type`, {
                                defaultValue: item.type,
                              })}
                            </span>
                          </div>
                          <ArrowRight size={14} className="text-white" />
                        </div>
                        <div className="flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="font-typewriter text-[7px] text-white/60"></span>
                          <span className="font-typewriter text-[7px] text-white/40"></span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-3xl border border-editorial shadow-sm">
                    <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium block mb-3">
                      {t("index.project")}_0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-ink mb-4">
                      {t(`index_fallback.${item.id}.title`, {
                        defaultValue: item.title,
                      })}
                    </h3>
                    <p className="font-body text-[14px] text-ink/65 leading-relaxed line-clamp-2 max-w-md">
                      {t(`index_fallback.${item.id}.description`, {
                        defaultValue: item.description,
                      })}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
                        {t("index.explore_project")}
                      </span>
                      <div className="w-8 h-[1px] bg-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
