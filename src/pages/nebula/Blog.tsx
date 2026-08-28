import { motion } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Journal",
    description:
      "Riflessioni su design, sviluppo web e strategia digitale. Articoli tecnici e pensieri sul mestiere di costruire prodotti digitali.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.contact"].map((k) => t(k))}
      />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* HERO */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                TECHNICAL JOURNAL
              </span>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <h1
              className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white mb-8 pr-2"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              <RevealText text="Pensieri e" delay={0.1} />
              <br />
              <RevealText
                text="riflessioni."
                delay={0.2}
                className="text-gold"
              />
            </h1>
            <p className="font-outfit font-light text-white/50 text-lg leading-relaxed max-w-xl pl-8 border-l border-gold/30">
              Uno spazio dedicato a riflessioni su design, sviluppo web,
              intelligenza artificiale e strategia digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 py-32 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-32 text-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold block mb-8">
              IN ARRIVO
            </span>
            <p className="font-fraunces italic font-light text-5xl text-white mb-6 pr-2">
              Presto nuovi articoli.
            </p>
            <p className="font-outfit font-light text-white/50 text-lg">
              Sto preparando riflessioni su design, codice e strategia
              digitale.
            </p>
          </motion.div>
        </div>
      </section>
      <NebulaFooter />
    </div>
  );
};

export default Blog;
