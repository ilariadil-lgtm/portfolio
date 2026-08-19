import { useEffect } from "react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";

const CMSDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: "Sviluppo CMS",
    description:
      "Tema scritto da zero e pannello di gestione disegnato sul tuo flusso di lavoro: aggiorni prezzi, prodotti e testi in autonomia, senza page builder.",
    canonical: "/sviluppo-cms",
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: "Sviluppo CMS su misura",
        serviceType: "Sviluppo CMS",
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description:
          "Tema scritto da zero e pannello di gestione disegnato sul tuo flusso di lavoro: aggiorni prezzi, prodotti e testi in autonomia, senza page builder.",
        url: "https://ilariadiliberto.com/sviluppo-cms",
      }),
    [],
  );

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO 
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col pt-40 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-cream">
        
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

        {/* Back link */}
        <div className="relative z-20 mb-12 md:mb-16 max-w-screen-xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Link to="/servizi" className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink/65 hover:text-primary transition-colors font-semibold">
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              Torna ai Servizi
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full flex-1 flex flex-col justify-start md:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* LEFT: Titolo ed introduzione ORIGINALI */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                
                <div className="overflow-hidden mb-6">
                  <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block">
                    AUTONOMIA E PERFORMANCE
                  </motion.span>
                </div>

                <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                  <div className="overflow-hidden pt-4 pb-8 w-max max-w-full">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block text-[12vw] lg:text-[clamp(3.5rem,8vw,8rem)] font-bold text-ink pr-4 break-words whitespace-normal leading-none">
                      Sviluppo<span className="text-primary italic pr-2"> CMS</span>
                      <span className="text-ink not-italic pr-2">.</span>
                    </motion.span>
                  </div>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-4 max-w-2xl">
                  <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium">
                    Un sito che cresce con te, non contro di te.
                  </p>
                </motion.div>
                
                {/* Due Call to Action integrate sotto la descrizione */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="mt-12 flex flex-col sm:flex-row gap-6">
                  <a href="mailto:info@ilariadiliberto.com" className="group inline-flex items-center justify-center gap-4 bg-ink text-cream px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                    Prenota una call gratuita
                    <ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 border border-ink/20 bg-transparent text-ink px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest hover:border-ink hover:bg-white/50 transition-all">
                    Parlami del tuo progetto
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
              </motion.div>
            </div>

            {/* RIGHT: Card con il nuovo stile */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-8 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                className="relative w-full h-full"
              >
                {/* Il doppio bordo wireframe sfalsato dietro la card (shadow vuota) */}
                <div className="absolute inset-0 border border-ink translate-x-2 translate-y-2 pointer-events-none" />
                
                {/* Il container principale della card */}
                <div className="relative bg-white border border-ink p-8 md:p-10 flex flex-col h-full text-ink z-10">
                  
                  {/* Testo Descrittivo */}
                  <div>
                      <h2 className="font-display text-3xl font-bold mb-2">Sviluppo CMS</h2>
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] font-semibold opacity-60 block mb-6">AUTONOMIA E PERFORMANCE</span>
                  </div>

                  <p className="font-body text-[15px] md:text-base text-ink/80 leading-relaxed font-medium mb-10">
                    Costruito per chi vuole smettere di chiedere il permesso per cambiare un prezzo, aggiungere un prodotto, aggiornare un testo. Tema scritto da zero, gestione in totale autonomia, performance che un page builder commerciale non può garantire.
                  </p>

                  {/* Timeline with huge number */}
                  <div className="mb-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black tracking-tighter">4-6</span>
                    <span className="font-body text-base text-ink/70">settimane</span>
                  </div>

                  <div className="w-full h-[1px] bg-ink/10 mb-8" />

                  {/* Deliverable Checklist */}
                  <div className="space-y-4 flex-1 mb-10">
                    <div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">UI/UX Design personalizzato</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">Sviluppo front-end reattivo</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">Setup piattaforma headless o ibrida</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">Training per gestione contenuti</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">4-6 settimane di sviluppo</span></div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 01 — THE PROBLEM
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                01 / IL PROBLEMA
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h2 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">
                Il compromesso dei CMS in commercio.
              </h2>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium text-justify">
                  La maggior parte dei CMS in commercio nasce da un compromesso: per essere 'facili da personalizzare' caricano decine di plugin di terze parti, ognuno un potenziale punto di rottura. Il risultato è quasi sempre lo stesso — siti lenti, vulnerabili, e un'azienda che dopo sei mesi torna a dipendere da uno sviluppatore esterno per ogni minima modifica.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 02 — THE MISSION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="flex items-center justify-start gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                02 / L'APPROCCIO
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h3 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">
                Controllo <span className="text-primary italic pr-2">totale</span> senza compromessi.
              </h3>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium text-justify">
                  Non parto da un tema pronto da adattare. Scrivo il tema da zero, calibrato sulle esigenze reali del progetto — niente codice superfluo, niente funzionalità che non userai mai. Ogni riga inserita viene controllata per preservare le performance di caricamento e la stabilità SEO. Il pannello di gestione che consegno è pensato per essere usato da chi non scrive codice: testi, immagini, prodotti, tutto modificabile senza toccare una riga di HTML.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 03 — I PILASTRI (Processo)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                03 / DUE CONFIGURAZIONI
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">
                Come possiamo procedere.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FASE 01 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative p-8 md:p-12 border border-ink bg-cream hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-ink group-hover:text-primary transition-colors duration-300">
                  Configurazione Premium Standard
                </h3>
                <p className="font-body text-base text-ink/80 leading-relaxed mt-4">
                  Adattamento tecnico e ottimizzazione di un tema commerciale di fascia alta. Focus su performance, pulizia dei plugin e SEO base — la soluzione giusta quando i tempi sono stretti ma la qualità non è negoziabile.
                </p>
            </motion.div>

            {/* FASE 02 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group relative p-8 md:p-12 border border-ink bg-cream hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-ink group-hover:text-primary transition-colors duration-300">
                  Sviluppo Tema Custom da Zero
                </h3>
                <p className="font-body text-base text-ink/80 leading-relaxed mt-4">
                  Scrittura totale del tema, White Theme proprietario. Zero page builder pesanti, frontend leggerissimo, pannello di gestione disegnato su misura per il tuo flusso di lavoro quotidiano.
                </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 04 — DELIVERABLES E TECH SPEC (Pricing style)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-cream border-t border-ink/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                  04 / COSA OTTIENI
                </span>
                <div className="w-12 h-[1px] bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">
                Alla fine del percorso
              </h2>
              <p className="font-body text-lg text-ink/80 leading-relaxed border-l border-primary/25 pl-8 mt-8 text-justify">
                L'investimento varia in base alla configurazione scelta e alla complessità del progetto: ogni preventivo viene costruito su misura dopo una prima call conoscitiva. Al termine: una sessione di consegna asincrona con video guida completo, 15 giorni di garanzia su bug strutturali, e la possibilità di attivare un contratto di manutenzione mensile per restare sempre aggiornato e protetto.
              </p>
              
              <div className="pt-10">
                 <p className="font-body text-base font-medium text-ink mb-6">
                   Se hai un team che aggiorna contenuti ogni settimana e nessuno che sappia scrivere una riga di codice, questa è l'architettura giusta per te.
                 </p>
                 <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 bg-ink text-cream px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                    Parlami del tuo progetto
                    <ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                 </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            {/* Tech Spec Card - Packages style */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border-2 border-primary bg-white p-8 md:p-10 flex flex-col group relative shadow-[8px_8px_0px_#c0392b]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-typewriter text-[9px] uppercase tracking-widest px-4 py-1.5 font-bold whitespace-nowrap">
                SPECIFICHE TECNICHE
              </div>
              
              <div className="mb-8 mt-2 pb-8 border-b border-ink/10 flex justify-between items-end">
                <div>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    TIMELINE
                  </span>
                  <span className="font-display text-3xl font-black text-ink">4-6 Sett.</span>
                </div>
                <div className="text-right">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    RUOLO
                  </span>
                  <span className="font-display text-xl font-bold italic">Sviluppo CMS</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-ink/65 block mb-6 font-semibold">
                  DELIVERABLES
                </span>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">UI/UX Design personalizzato</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">Sviluppo front-end reattivo</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">Setup piattaforma headless o ibrida</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">Training per gestione contenuti</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">4-6 settimane di sviluppo</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-ink/10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-ink/65 block mb-6 font-semibold">
                  STACK TECNOLOGICO
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">Next.js</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">React</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">WordPress/Sanity</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">TailwindCSS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectNavigation prev={{ url: "/sviluppo-custom", title: "Sviluppo Custom" }} next={{ url: "/sviluppo-mvp", title: "Sviluppo MVP" }} archiveUrl="/servizi" archiveTitle="Servizi" prevLabel="Servizio Precedente" nextLabel="Servizio Successivo" />
      <BriefingCTA
        subtitle="IL PROSSIMO PASSO"
        title1="Costruiamo"
        title2="senza limiti."
        description="Se il tuo business ha smesso di stare dentro a un template, è il momento di costruire qualcosa che non ha limiti."
        buttonText="PARLAMI DEL TUO PROGETTO"
      />
      <Footer />
    </div>
  );
};
export default CMSDetails;
