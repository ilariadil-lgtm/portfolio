import { motion } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import React, { useEffect, Suspense } from "react";
const HeroCanvas = React.lazy(() =>
  import("./components/HeroCanvas").then((module) => ({
    default: module.HeroCanvas,
  })),
);
import { ArrowRight, ArrowUpRight, Layout, ShoppingBag, Sparkles, Wrench } from "lucide-react";
import { Link } from "@/components/Link";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";
import { NebulaProcessSection } from "./components/NebulaProcessSection";

const Servizi = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: t("services.title_1") + " " + t("services.title_2"),
    description: t("services.description"),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    { ns: "service_sito", url: "/sito-aziendale", icon: <Layout size={22} />, num: "01" },
    { ns: "service_ecommerce", url: "/e-commerce", icon: <ShoppingBag size={22} />, num: "02" },
    { ns: "service_restyling", url: "/restyling", icon: <Sparkles size={22} />, num: "03" },
    { ns: "service_manutenzione", url: "/manutenzione", icon: <Wrench size={22} />, num: "04" },
  ];

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.services", "scroll.contact"].map((k) => t(k))}
      />

      {/* ═════════════════════════════════════════════════════
          GLOBAL BACKGROUNDS (NEBULA AESTHETIC)
          ═════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <Suspense fallback={<div className="absolute inset-0 bg-night" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-70">
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
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* Hero */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center items-start">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                    <span className="text-[10px]">✦</span> {t("services.what_i_offer")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-6 pb-4">
                  <RevealText
                    text={t("services.title_1")}
                    delay={0.1}
                    className="font-bricolage font-bold tracking-wider text-fluid-h1 leading-[1.1] text-white whitespace-nowrap uppercase"
                  />
                  <RevealText
                    text={t("services.title_2")}
                    delay={0.2}
                    className="font-fraunces italic font-light tracking-wider text-fluid-h1 leading-[1.1] text-gold whitespace-nowrap pr-2"
                  />
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-outfit font-light text-white/60 text-lg leading-relaxed pl-8 border-l border-gold/30 backdrop-blur-sm"
              >
                {t("services.description")}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10 relative">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold font-medium flex items-center gap-2">
              <span className="text-[10px]">✦</span> {t("services.cards_label")}
            </span>
            <div className="w-12 h-[1px] bg-gold/20" />
          </div>
          <h2 className="font-bricolage text-3xl md:text-5xl font-bold text-white mt-2">
            {t("services.cards_title_1")}{" "}
            <span className="font-fraunces italic font-light text-gold">
              {t("services.cards_title_2")}
            </span>
          </h2>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.ns}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80, damping: 18 },
                },
              }}
              className="h-full relative border border-white/5 p-8 bg-white/[0.02] backdrop-blur-md hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col group overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    {card.num}
                  </span>
                  <div className="text-white/50 group-hover:text-gold transition-all duration-500">
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-bricolage font-black tracking-tight text-2xl text-white mb-4">
                  {t(`${card.ns}.title`)}
                </h3>
                <p className="font-outfit font-light text-white/60 text-[15px] leading-relaxed flex-1 mb-10">
                  {t(`${card.ns}.meta_desc`)}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <Link
                    to={card.url}
                    className="group/btn inline-flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {t("services.discover_btn")}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-gold transition-colors">
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Come lavoriamo */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10 relative border-t border-white/5">
        <NebulaProcessSection />
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-32">
        <div className="w-full max-w-5xl mx-auto border border-gold/20 bg-gold/5 backdrop-blur-md p-10 md:p-16 text-left flex flex-col items-start shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            {t("cta.subtitle")}
          </span>
          <h2 className="font-fraunces italic font-light text-3xl md:text-5xl text-white mb-10 leading-tight max-w-2xl">
            {t("cta.description")}
          </h2>
          <Link
            to="/contatti"
            className="group inline-flex items-center justify-center gap-4 bg-gold text-black px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300"
          >
            {t("cta.button")}
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      <NebulaFooter />
    </div>
  );
};

export default Servizi;
