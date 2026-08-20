import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Layout condiviso delle pagine progetto del tema editorial.
 *
 * Le dieci pagine progetto erano identiche fra loro al 92%: 4.328 righe per
 * dire dieci volte la stessa cosa. Il tema Nebula aveva gia il suo layout
 * condiviso; questo ne e il gemello.
 *
 * Le chiavi di traduzione seguono uno schema fisso a partire da `id`:
 *   <id>.meta_desc  <id>.hero_label  <id>.hero_desc
 *   <id>.ch1_label  <id>.ch1_title1  <id>.ch1_p1…
 *   <id>.ch2_label  <id>.ch2_title1
 *   <id>.ch3_label  <id>.ch3_title   <id>.ch3_p1…
 *   <id>.ch4_label  <id>.ch4_title   <id>.ch4_p1…
 *   <id>.ch5_label  <id>.ch5_title   <id>.ch5_p1…
 *   <id>.role_val
 * Il numero di paragrafi per capitolo si dichiara in `paragrafi`.
 */
export interface ProgettoEditoriale {
  /** Prefisso delle chiavi di traduzione, es. "newpop". */
  id: string;
  /** Titolo per il tag <title> e il canonical. */
  titolo: string;
  /** Percorso della pagina, per canonical e og:url. */
  rotta: string;
  /** Il nome come compare nell'hero: varia nella composizione tipografica. */
  titoloHero: React.ReactNode;
  anno: string;
  tech: string[];
  immagineHero: string;
  /**
   * Capitolo 3: una sola immagine nel riquadro, oppure un elenco che diventa
   * uno slider scorrevole orizzontale. Vini Gambino usa la seconda forma.
   */
  immagineProcesso: string | string[];
  galleria: string[];
  paragrafi?: { ch1?: number; ch3?: number; ch4?: number; ch5?: number };
  prev: { url: string; title: string };
  next: { url: string; title: string };
  liveUrl?: string;
}

const GRIGLIA_SFONDO =
  "radial-gradient(#3d0f1a 1px, transparent 1px)";

export const EditorialProjectLayout: React.FC<ProgettoEditoriale> = ({
  id,
  titolo,
  rotta,
  titoloHero,
  anno,
  tech,
  immagineHero,
  immagineProcesso,
  galleria,
  paragrafi,
  prev,
  next,
  liveUrl,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: titolo,
    description: t(`${id}.meta_desc`),
    canonical: rotta,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);

  const conta = { ch1: 1, ch3: 2, ch4: 2, ch5: 1, ...paragrafi };
  const paragrafiDi = (cap: keyof typeof conta) =>
    Array.from({ length: conta[cap] ?? 0 }, (_, i) => (
      <p key={i}>{t(`${id}.${cap}_p${i + 1}`)}</p>
    ));

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative lg:min-h-[100svh] flex items-start lg:items-center pt-52 md:pt-48 lg:pt-0 pb-20 md:pb-32 lg:pb-0 px-6 md:px-12 lg:px-24 overflow-hidden bg-cream">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: GRIGLIA_SFONDO, backgroundSize: "60px 60px" }}
          />
        </div>

        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/progetti"
              className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink/65 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              {t("project_detail.back_to_archive")}
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 lg:gap-16 items-center relative z-10 max-w-screen-2xl mx-auto pt-24 lg:pt-0">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="overflow-hidden mb-6">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block whitespace-nowrap"
                >
                  {t(`${id}.hero_label`)}
                </motion.span>
              </div>

              <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                <div className="overflow-hidden pt-4 pb-24 -mb-20 w-max">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[10vw] lg:text-[clamp(2rem,5vw,5rem)] font-bold text-ink whitespace-nowrap pr-4"
                    style={{ y: y1 }}
                  >
                    {titoloHero}
                  </motion.span>
                </div>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 lg:mt-12 max-w-[34rem]"
              >
                <p className="font-body text-sm md:text-base text-ink/70 leading-relaxed border-l-2 border-primary/20 pl-6 lg:pl-8 py-2">
                  {t(`${id}.hero_desc`)}
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex items-center justify-center w-full">
            <motion.div
              className="relative w-full aspect-[3/2] max-w-[780px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-64 h-64 border-[1px] border-primary/20 rounded-full border-dashed pointer-events-none"
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full bg-cream border border-ink shadow-brutal-15 flex flex-col overflow-hidden p-0 group"
              >
                <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={immagineHero}
                    alt={`${titolo} Homepage Screenshot`}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAP. 01 — IL PROBLEMA
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
              {t(`${id}.ch1_label`)}
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
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-ink"
              dangerouslySetInnerHTML={{ __html: t(`${id}.ch1_title1`) }}
            />
            <div className="space-y-6 text-ink/70 font-body text-lg leading-relaxed max-w-2xl">
              {paragrafiDi("ch1")}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAP. 02 — LA MISSIONE
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-ink/65 block mb-12">
              {t(`${id}.ch2_label`)}
            </span>
            <h3
              className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-ink"
              dangerouslySetInnerHTML={{ __html: t(`${id}.ch2_title1`) }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAP. 03 — IL PROCESSO
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
            <div className="relative w-full min-h-[400px] lg:h-full max-w-[720px] lg:max-w-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              {Array.isArray(immagineProcesso) ? (
                <div className="relative z-10 w-full h-full flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
                  {immagineProcesso.map((src, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 w-[85%] md:w-[70%] h-[300px] md:h-[400px] lg:h-full snap-center bg-cream border border-ink shadow-brutal-10-ink overflow-hidden group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        src={src}
                        alt={`${titolo} — processo ${idx + 1}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative z-10 w-full h-full bg-cream border border-ink shadow-brutal-10-ink flex flex-col overflow-hidden p-0 group">
                  <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={immagineProcesso}
                      alt={`${titolo} Homepage Section`}
                      className="absolute inset-0 w-full h-full object-cover object-[center_45%] group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              )}
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
                {t(`${id}.ch3_label`)}
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter mb-8 text-ink">
                {t(`${id}.ch3_title`)}
              </h2>
              <div className="space-y-6 text-ink/70 font-body text-lg leading-relaxed">
                {paragrafiDi("ch3")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAP. 04 — LO SVILUPPO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-cream border-y border-ink/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-2">
              {t(`${id}.ch4_label`)}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter text-ink">
              {t(`${id}.ch4_title`)}
            </h2>
            <div className="font-body text-ink/70 text-lg leading-relaxed space-y-6">
              {paragrafiDi("ch4")}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white border border-ink shadow-brutal-10-ink p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-ink/65 block mb-8">
                  {t("chario.tech_stack")}
                </span>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {tech.map((voce) => (
                    <span
                      key={voce}
                      className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 hover:border-ink transition-colors"
                    >
                      {voce}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-ink/10 pt-6 mt-12 space-y-4 text-ink">
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">
                    {t("chario.role_label")}
                  </span>
                  <span className="font-display text-md font-black italic pr-2">
                    {t(`${id}.role_val`)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">
                    {t("chario.launch_label")}
                  </span>
                  <span className="font-display text-md font-black">{anno}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAP. 05 — IL RISULTATO
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
              {t(`${id}.ch5_label`)}
            </span>
            <div className="flex-1 h-[1px] bg-primary/10" />
          </div>

          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-6 text-ink">
              {t(`${id}.ch5_title`)}
            </h2>
            <div className="font-body text-lg text-ink/70 space-y-6">
              {paragrafiDi("ch5")}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 overflow-hidden relative w-full h-[50vh] min-h-[400px] bg-white border-y border-ink/5">
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 absolute top-8 bottom-8 left-0 items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 shrink-0 h-full">
                {galleria.map((src, j) => (
                  <div
                    key={j}
                    className="h-full shrink-0 border border-ink shadow-brutal-10 bg-cream p-0 group overflow-hidden"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={src}
                      alt={`${titolo} — immagine ${j + 1}`}
                      className="h-full w-auto object-contain max-w-[80vw] lg:max-w-[40vw] group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectNavigation prev={prev} next={next} />

      {liveUrl && <FloatingCTA url={liveUrl} />}
      <Footer />
    </div>
  );
};
