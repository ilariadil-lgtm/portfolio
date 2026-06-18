import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { ProjectNavigation } from "@/components/ProjectNavigation";

export const EditorialSicilCosmetic = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: "SicilCosmetic",
    description: t("sicilcosmetic.meta_desc"),
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);

  const techList = [
    "PrestaShop Configuration",
    "E-commerce UI/UX",
    "Catalog Management",
    "Copywriting & Layout",
  ];

  return (
    <div className="min-h-[100dvh] bg-[#f5f2ed] text-[#3d0f1a] selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO — Stile Portfolio Ilaria
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative lg:min-h-[100svh] flex items-start lg:items-center pt-52 md:pt-48 lg:pt-0 pb-20 md:pb-32 lg:pb-0 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#f5f2ed]">
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

        {/* Back link — top left */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/progetti"
              className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-[#3d0f1a]/60 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t("project_detail.back_to_archive")}
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 lg:gap-16 items-center relative z-10 max-w-screen-2xl mx-auto pt-24 lg:pt-0">
          {/* LEFT: Tipografia ed introduzione */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="overflow-hidden mb-6">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block whitespace-nowrap"
                >
                  {t("sicilcosmetic.hero_label")}
                </motion.span>
              </div>

              <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                <div className="overflow-hidden pt-4 pb-24 -mb-20 w-max">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-[10vw] lg:text-[clamp(2rem,5vw,5rem)] font-bold text-[#3d0f1a] whitespace-nowrap pr-4"
                    style={{ y: y1 }}
                  >
                    Sicil
                    <span className="text-primary italic pr-2">Cosmetic</span>
                    <span className="text-[#3d0f1a] not-italic pr-2">.</span>
                  </motion.span>
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 lg:mt-12 max-w-[34rem]"
              >
                <p className="font-body text-sm md:text-base text-[#3d0f1a]/70 leading-relaxed border-l-2 border-primary/20 pl-6 lg:pl-8 py-2">
                  {t("sicilcosmetic.hero_desc")}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Preview Brutalista dello Screen Homepage Senza Padding (Ancora Più Grande) */}
          <div className="lg:col-span-7 flex items-center justify-center w-full">
            <motion.div
              className="relative w-full aspect-[3/2] max-w-[780px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Geometria astratta sul fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-64 h-64 border-[1px] border-primary/20 rounded-full border-dashed pointer-events-none"
              />

              {/* Box Frame Brutalista (Senza Padding, l'immagine tocca i bordi) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 w-full h-full bg-[#f5f2ed] border border-[#3d0f1a] shadow-[15px_15px_0px_#c0392b] flex flex-col overflow-hidden p-0 group"
              >
                {/* Image */}
                <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                  <img
                    src="/assets/projects/sicil-cosmetic/account.webp"
                    alt="SicilCosmetic Account"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 01 — THE PROBLEM
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block">
              {t("sicilcosmetic.ch1_label")}
            </span>
          </motion.div>
          <motion.div
            className="lg:col-span-8 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-[#3d0f1a]"
              dangerouslySetInnerHTML={{
                __html: t("sicilcosmetic.ch1_title1"),
              }}
            />
            <div className="space-y-6 text-[#3d0f1a]/70 font-body text-lg leading-relaxed max-w-2xl">
              <p>{t("sicilcosmetic.ch1_p1")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 02 — THE MISSION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f2ed] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-[#3d0f1a]/40 block mb-12">
              {t("sicilcosmetic.ch2_label")}
            </span>
            <h3
              className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-[#3d0f1a]"
              dangerouslySetInnerHTML={{
                __html: t("sicilcosmetic.ch2_title1"),
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 03 — THE PROCESS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          <motion.div
            className="lg:col-span-6 order-2 lg:order-1 h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            {/* Process Image con Anteprima Brutalista (Senza Padding, Più Rettangolare e Grande) */}
            <div className="relative w-full min-h-[400px] lg:h-full max-w-[720px] lg:max-w-none">
              {/* Geometria astratta sul fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              {/* Box Frame Brutalista (Senza Padding, l'immagine tocca i bordi) */}
              <div className="relative z-10 w-full h-full bg-[#f5f2ed] border border-[#3d0f1a] shadow-[10px_10px_0px_#3d0f1a] flex flex-col overflow-hidden p-0 group">
                {/* Image */}
                <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                  <img
                    src="/assets/projects/sicil-cosmetic/homepage.webp"
                    alt="SicilCosmetic Categories and Hair Types"
                    className="absolute inset-0 w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div>
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-8">
                {t("sicilcosmetic.ch3_label")}
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter mb-8 text-[#3d0f1a]">
                {t("sicilcosmetic.ch3_title")}
              </h2>
              <div className="space-y-6 text-[#3d0f1a]/70 font-body text-lg leading-relaxed">
                <p>{t("sicilcosmetic.ch3_p1")}</p>
                <p>{t("sicilcosmetic.ch3_p2")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 04 — THE DEVELOPMENT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f2ed] border-y border-[#3d0f1a]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-2">
              {t("sicilcosmetic.ch4_label")}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter text-[#3d0f1a]">
              {t("sicilcosmetic.ch4_title")}
            </h2>
            <div className="font-body text-[#3d0f1a]/70 text-lg leading-relaxed space-y-6">
              <p>{t("sicilcosmetic.ch4_p1")}</p>
              <p>{t("sicilcosmetic.ch4_p2")}</p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Tech Spec Card in Brutalist Style */}
            <div className="bg-white border border-[#3d0f1a] shadow-[10px_10px_0px_#3d0f1a] p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-[#3d0f1a]/40 block mb-8">
                  {t("chario.tech_stack")}
                </span>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 hover:border-[#3d0f1a] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#3d0f1a]/10 pt-6 mt-12 space-y-4 text-[#3d0f1a]">
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">
                    {t("chario.role_label")}
                  </span>
                  <span className="font-display text-md font-black italic pr-2">
                    {t("sicilcosmetic.role_val")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">
                    {t("chario.launch_label")}
                  </span>
                  <span className="font-display text-md font-black">2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 05 — THE RESULT (Gallery)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
              {t("sicilcosmetic.ch5_label")}
            </span>
            <div className="flex-1 h-[1px] bg-primary/10" />
          </div>

          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-6 text-[#3d0f1a]">
              {t("sicilcosmetic.ch5_title")}
            </h2>
            <p className="font-body text-lg text-[#3d0f1a]/70">
              {t("sicilcosmetic.ch5_p1")}
            </p>
          </div>
        </motion.div>

        {/* Autoplay Horizontal Slider / Marquee */}
        <div className="mt-16 overflow-hidden relative w-full py-12 bg-white border-y border-[#3d0f1a]/5">
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 shrink-0 items-center">
                {[
                  "/assets/projects/sicil-cosmetic/homepage.webp",
                  "/assets/projects/sicil-cosmetic/categoria.webp",
                  "/assets/projects/sicil-cosmetic/paginaprodotto.webp",
                  "/assets/projects/sicil-cosmetic/prodottimarca.webp",
                  "/assets/projects/sicil-cosmetic/brand.webp",
                  "/assets/projects/sicil-cosmetic/carrello.webp",
                  "/assets/projects/sicil-cosmetic/carrello2.webp",
                  "/assets/projects/sicil-cosmetic/checkout.webp",
                  "/assets/projects/sicil-cosmetic/account.webp",
                  "/assets/projects/sicil-cosmetic/contatti.webp",
                ].map((src, j) => (
                  <div
                    key={j}
                    className="shrink-0 border border-[#3d0f1a] shadow-[6px_6px_0px_#c0392b] md:shadow-[10px_10px_0px_#c0392b] bg-[#f5f2ed] p-0 group overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`SicilCosmetic Slide ${j}`}
                      className="w-[80vw] md:w-auto md:h-[400px] object-cover md:object-contain block group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════════════════
           NAVIGATION
           ═══════════════════════════════════════════════════════════════════ */}
      <ProjectNavigation
        prev={{ url: "/progetti/pattiforniture", title: "Patti Forniture" }}
        next={{ url: "/progetti/newpop", title: "Newpop" }}
      />

      <FloatingCTA url="https://www.sicilcosmetic.com/" />
      <Footer />
    </div>
  );
};
export default EditorialSicilCosmetic;
