import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export const EditorialVillaMasami = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: "Villa Masami",
    description: "Un progetto digitale completo realizzato per Villa Masami in collaborazione con l'agenzia Carnova. Brand identity, copywriting e sito WordPress multilingua.",
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);

  const techList = ["Brand & Logo Design", "UI/UX Design", "Copywriting", "WordPress (Bilingual)"];

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO — Stile Portfolio Ilaria
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-[#f5f2ed]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Back link — top left */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Link
              to="/progetti"
              className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-[#3d0f1a]/60 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              Archivio progetti
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 lg:gap-16 items-center relative z-10 max-w-screen-2xl mx-auto pt-24 lg:pt-0">

          {/* LEFT: Tipografia ed introduzione */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="overflow-hidden mb-6">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block whitespace-nowrap"
                >
                  BRAND  IDENTITY • UI/UX • WEB
                </motion.span>
              </div>

              <h1 className="relative font-display leading-[0.85] tracking-tighter">
                <div className="overflow-hidden py-2">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[10vw] lg:text-[6vw] font-bold text-[#3d0f1a] whitespace-nowrap"
                    style={{ y: y1 }}
                  >
                    Villa<span className="text-primary italic"> Masami</span><span className="text-[#3d0f1a] not-italic">.</span>
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
                  Un progetto digitale completo, realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura: dall'ideazione e realizzazione del logo alla stesura dei testi, fino allo sviluppo dell'infrastruttura web su WordPress.
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
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full bg-[#f5f2ed] border border-[#3d0f1a] shadow-[15px_15px_0px_#c0392b] flex flex-col overflow-hidden p-0 group"
              >
                {/* Image */}
                <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                  <img
                    src="/assets/projects/villa-masami/homepage.webp"
                    alt="Villa Masami Homepage Screenshot"
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
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block lg:sticky lg:top-32">
              01 — Il Contesto
            </span>
          </motion.div>
          <motion.div
            className="lg:col-span-8 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-[#3d0f1a]">
              L'ospitalità siciliana <span className="italic text-primary">online.</span>
            </h2>
            <div className="space-y-6 text-[#3d0f1a]/70 font-body text-lg leading-relaxed max-w-2xl">
              <p>
                Villa Masami necessitava di un'identità web che riflettesse l'eleganza e la tranquillità dei suoi spazi, situati in una posizione strategica vicino alla Valle dei Templi. Lavorando in stretta sinergia con l'agenzia Carnova, il mandato era chiaro: creare una vetrina digitale empatica e funzionale.
              </p>
              <p>
                Una piattaforma capace di trasmettere calore umano e, al tempo stesso, mettere in risalto i vantaggi logistici della struttura, come l'accesso indipendente tramite tastierino numerico e la gestione automatizzata.
              </p>
            </div>
          </motion.div>
        </div>
      </section >

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 02 — THE MISSION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f2ed] py-24 md:py-32 px-6 md:px-12 lg:px-24" >
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-[#3d0f1a]/40 block mb-12">
              02 — L'Obiettivo
            </span>
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-[#3d0f1a]">
              "Più comodità, meno pensieri: tradurre il calore dell'accoglienza reale in un'esperienza di <span className="text-primary italic">navigazione fluida</span> e priva di ostacoli."
            </h3>
          </motion.div>
        </div>
      </section >

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 03 — THE PROCESS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-white" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <motion.div
            className="lg:col-span-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            {/* Process Image con Anteprima Brutalista (Senza Padding, Più Rettangolare e Grande) */}
            <div className="relative w-full aspect-[3/2] max-w-[720px] lg:max-w-none">
              {/* Geometria astratta sul fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              
              {/* Box Frame Brutalista (Senza Padding, l'immagine tocca i bordi) */}
              <div className="relative z-10 w-full h-full bg-[#f5f2ed] border border-[#3d0f1a] shadow-[10px_10px_0px_#3d0f1a] flex flex-col overflow-hidden p-0 group">
                {/* Image */}
                <div className="flex-1 relative overflow-hidden bg-black w-full h-full">
                  <img
                    src="/assets/projects/villa-masami/struttura.webp"
                    alt="Villa Masami Structure UI"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div>
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-8">
                03 — Il Processo
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter mb-8 text-[#3d0f1a]">
                Branding, UI e Copywriting.
              </h2>
              <div className="space-y-6 text-[#3d0f1a]/70 font-body text-lg leading-relaxed">
                <p>
                  In questo progetto, l'identità del brand, l'interfaccia utente e l'anima editoriale sono nate insieme. Sono partita dall'ideazione e dal design del logo, creando un segno grafico che catturasse l'eleganza e l'essenza della villa.
                </p>
                <p>
                  Da lì, ho curato la stesura dei contenuti con un tono di voce rassicurante e ho disegnato una UI progettata per valorizzare gli spazi fisici, guidando l'utente in un percorso visivo pulito, intuitivo e orientato alla conversione.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section >

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 04 — THE DEVELOPMENT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f2ed] border-y border-[#3d0f1a]/5" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold block mb-2">
              04 — Sviluppo
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter text-[#3d0f1a]">
              Ecosistema WordPress Multilingua.
            </h2>
            <div className="font-body text-[#3d0f1a]/70 text-lg leading-relaxed space-y-6">
              <p>
                Lato sviluppo, ho implementato e configurato l'intero sito su piattaforma WordPress, occupandomi dell'inserimento e dell'impaginazione di ogni singola vista. Oltre a garantire una perfetta responsività su dispositivi mobile, ho strutturato un'architettura nativamente bilingue (Italiano e Inglese).
              </p>
              <p>
                Questo ha permesso alla struttura di posizionarsi immediatamente sul mercato turistico internazionale, offrendo un'esperienza utente coerente in entrambe le lingue.
              </p>
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
                  Stack tecnologico
                </span>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {techList.map(tech => (
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
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">Ruolo</span>
                  <span className="font-display text-md font-black italic">UI/UX & Web Developer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-50">Lancio</span>
                  <span className="font-display text-md font-black">2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section >

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 05 — THE RESULT (Gallery)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-white" >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary font-semibold">
              05 — Visual Showcase
            </span>
            <div className="flex-1 h-[1px] bg-primary/10" />
          </div>

          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-6 text-[#3d0f1a]">
              Il sapore dell'accoglienza.
            </h2>
            <p className="font-body text-lg text-[#3d0f1a]/70">
              Il risultato finale è un sito web che respira la stessa aria di quiete della struttura fisica. Un progetto end-to-end che dimostra la capacità di orchestrare ogni sfumatura della presenza online: dal design dell'interfaccia alla cura minuziosa della parola scritta, restituendo all'agenzia partner e al cliente finale un prodotto pronto per il mercato.
            </p>
          </div>
        </motion.div>

        {/* Autoplay Horizontal Slider / Marquee */}
        <div className="mt-16 overflow-hidden relative w-full h-[50vh] min-h-[400px] bg-white border-y border-[#3d0f1a]/5">
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 absolute top-8 bottom-8 left-0 items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 shrink-0">
                {[
                  "/assets/projects/villa-masami/homepage.webp",
                  "/assets/projects/villa-masami/camera-matrimoniale.webp",
                  "/assets/projects/villa-masami/camera-singola.webp",
                  "/assets/projects/villa-masami/camera-matrimoniale-2.webp",
                  "/assets/projects/villa-masami/le-nostre-camere.webp",
                  "/assets/projects/villa-masami/servizi.webp",
                  "/assets/projects/villa-masami/contatti.webp",
                  "/assets/projects/villa-masami/struttura.webp",
                ].map((src, j) => (
                  <div key={j} className="h-full shrink-0 border border-[#3d0f1a] shadow-[10px_10px_0px_#c0392b] bg-[#f5f2ed] p-0 group overflow-hidden">
                    <img
                      src={src}
                      alt={`Villa Masami Slide ${j}`}
                      loading="lazy"
                      className="h-full w-auto object-contain max-w-[80vw] lg:max-w-[40vw] group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* ═══════════════════════════════════════════════════════════════════
           NAVIGATION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#3d0f1a]/10 px-6 md:px-12 lg:px-24 py-20 bg-[#f5f2ed]" >
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            to="/progetti"
            className="group relative flex items-center justify-center px-12 py-5 border border-[#3d0f1a] hover:border-primary overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-4 font-typewriter text-[11px] uppercase tracking-[0.4em] text-[#3d0f1a] group-hover:text-white transition-colors font-semibold">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
              Torna all'archivio
            </span>
          </Link>
        </div>
      </section >

      <FloatingCTA url="https://villamasami.it" />
      <Footer />
    </div >
  );
};
export default EditorialVillaMasami;
