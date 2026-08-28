import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/components/Link";
import { EditorialPackagesSection } from "@/components/EditorialPackagesSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BriefingCTA } from "@/components/BriefingCTA";
import { CreativeHero } from "@/components/CreativeHero";
import { KineticText } from "@/components/KineticText";
import { useEffect } from "react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Ogni immagine in /assets ha una variante -700 accanto: il browser sceglie
// da solo quale scaricare in base allo spazio reale disponibile.
const srcSet700 = (src: string) =>
  src.endsWith(".svg") ? undefined : `${src.replace(/(\.[a-zA-Z0-9]+)$/, "-700$1")} 700w, ${src} 1400w`;

const Index = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Home",
    fullTitle: "Siti web ed e-commerce ad Agrigento | Ilaria Diliberto",
    description:
      "Progetto e sviluppo siti ed e-commerce per aziende che vendono un prodotto. Design e sviluppo, una persona sola. Agrigento, Palermo e in tutta Italia.",
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

  const displayProjects = fallbackProjects;

  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — PREMIUM UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <CreativeHero />

      {/* ═══════════════════════════════════════════════════════════════════
           IL PROBLEMA + MARQUEE — UNITA' UNICA
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-16 md:pt-20 pb-10 md:pb-14 border-b border-editorial bg-cream overflow-hidden">
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

        <div className="relative z-10 px-6 md:px-12 lg:px-20 mb-10 md:mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
                  {t("index.problem_label")}
                </span>
                <div className="w-12 h-[1px] bg-primary/20" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-ink"
              >
                {t("index.problem_line1")}
              </motion.p>
            </div>
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-body text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-ink/80 border-l-2 border-primary/20 pl-6 lg:pl-8"
              >
                {t("index.problem_line2")}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-y border-editorial py-6 md:py-8 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
          <div className="flex whitespace-nowrap px-6 md:px-12 lg:px-20">
            <div className="flex gap-10 marquee-scroll font-typewriter uppercase tracking-[0.25em] text-[13px] md:text-base font-semibold text-primary/80 whitespace-nowrap leading-normal">
              <span>{t("index.marquee_2")}</span>
              <span>{t("index.marquee_2")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           ABOUT PREVIEW — PREMIUM ANIMATIONS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-[58%_42%] lg:grid-cols-[5%_55%_40%] border-b border-editorial bg-cream overflow-hidden">
        <div aria-hidden="true" className="hidden lg:flex border-r border-editorial flex-col items-center py-12 justify-between opacity-30 select-none">
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

        <div className="p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-start relative overflow-hidden">
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
                to="/servizi"
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
            srcSet={srcSet700("/assets/about-portrait.webp")}
            sizes="(max-width: 1024px) 100vw, 40vw"
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
                {[
                  "Design del sito",
                  "Sviluppo e programmazione",
                  "Manutenzione e assistenza",
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
            <h2 className="font-display text-4xl md:text-6xl lg:text-[clamp(2rem,4.5vw,4.5rem)] font-bold leading-none tracking-tighter">
              {t("index.projects_title_1")}{" "}
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
          <div className="flex gap-10 md:gap-14 px-6 md:px-12 pb-12 w-max">
            {displayProjects.map((item, i) => (
              <div
                key={item.id}
                className="relative group/proj snap-center w-[80vw] md:w-[42vw] lg:w-[32vw]"
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
                        srcSet={srcSet700(
                          item.image?.startsWith("http") ||
                            item.image?.startsWith("/")
                            ? item.image
                            : `${BASE_URL}${item.image}`,
                        )}
                        sizes="(max-width: 1024px) 90vw, 45vw"
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

      {/* ═══════════════════════════════════════════════════════════════════
           COME LAVORIAMO — QUATTRO PASSI
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 border-b border-editorial bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
              {t("index.process_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-10 md:mb-12">
            {t("index.process_title_1")}{" "}
            <span className="text-primary italic pr-2">
              {t("index.process_title_2")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1 }}
                className="group h-full flex flex-col p-8 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-black text-ink/15">
                    {t(`index.process_${n}_num`)}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <span className="font-display font-black text-base">{n}</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-4">
                  {t(`index.process_${n}_title`)}
                </h3>
                <p className="font-body text-[15px] text-ink/65 leading-relaxed">
                  {t(`index.process_${n}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CHIUSURA — ANALISI GRATUITA
           ═══════════════════════════════════════════════════════════════════ */}
      <BriefingCTA />

      <Footer />
    </div>
  );
};

export default Index;
