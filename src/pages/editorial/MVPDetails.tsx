import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";

const MVPDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-[100dvh] bg-[#f5f2ed] text-[#3d0f1a] selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO 
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col pt-40 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#f5f2ed]">
        
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
            <Link to="/servizi" className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-[#3d0f1a]/60 hover:text-primary transition-colors font-semibold">
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
                    VALIDAZIONE RAPIDA
                  </motion.span>
                </div>

                <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                  <div className="overflow-hidden pt-4 pb-8 w-max max-w-full">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block text-[12vw] lg:text-[clamp(3.5rem,8vw,8rem)] font-bold text-[#3d0f1a] pr-4 break-words whitespace-normal leading-none">
                      Sviluppo<span className="text-primary italic pr-2"> MVP</span>
                      <span className="text-[#3d0f1a] not-italic pr-2">.</span>
                    </motion.span>
                  </div>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-4 max-w-2xl">
                  <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium">
                    Il mercato non aspetta — e nemmeno dovresti farlo tu.
                  </p>
                </motion.div>
                
                {/* Due Call to Action integrate sotto la descrizione */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="mt-12 flex flex-col sm:flex-row gap-6">
                  <a href="mailto:info@ilariadiliberto.com" className="group inline-flex items-center justify-center gap-4 bg-[#3d0f1a] text-[#f5f2ed] px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                    Prenota una call gratuita
                    <ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 border border-[#3d0f1a]/20 bg-transparent text-[#3d0f1a] px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest hover:border-[#3d0f1a] hover:bg-white/50 transition-all">
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
                <div className="absolute inset-0 border border-[#3d0f1a] translate-x-2 translate-y-2 pointer-events-none" />
                
                {/* Il container principale della card */}
                <div className="relative bg-white border border-[#3d0f1a] p-8 md:p-10 flex flex-col h-full text-[#3d0f1a] z-10">
                  
                  {/* Testo Descrittivo */}
                  <div>
                      <h2 className="font-display text-3xl font-bold mb-2">Sviluppo MVP</h2>
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] font-semibold opacity-60 block mb-6">VALIDAZIONE RAPIDA</span>
                  </div>

                  <p className="font-body text-[15px] md:text-base text-[#3d0f1a]/80 leading-relaxed font-medium mb-10">
                    Quattro settimane per trasformare un'idea in un prodotto che gli utenti possono davvero usare. Non un prototipo da mostrare agli investitori: un MVP funzionante, pronto a raccogliere dati reali sul mercato reale.
                  </p>

                  {/* Timeline with huge number */}
                  <div className="mb-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black tracking-tighter">4</span>
                    <span className="font-body text-base text-[#3d0f1a]/70">settimane</span>
                  </div>

                  <div className="w-full h-[1px] bg-[#3d0f1a]/10 mb-8" />

                  {/* Deliverable Checklist */}
                  <div className="space-y-4 flex-1 mb-10">
                    <div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Workshop di definizione MVP</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Prototipazione interattiva</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Sviluppo core-features scalabili</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Setup Analytics/Tracking di base</span></div>
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
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-[#3d0f1a]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                01 / IL PROBLEMA
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h2 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                Costruire ciò che nessuno ha chiesto.
              </h2>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium text-justify">
                  La maggior parte degli MVP fallisce prima ancora di nascere — non per l'idea, ma per il tempo e il capitale bruciati a costruire funzionalità che nessuno ha ancora chiesto. Over-engineering estetico, feature secondarie, infrastrutture sovradimensionate: il risultato è un lancio in ritardo, su un prodotto che il mercato non ha ancora validato.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 02 — THE MISSION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f5f2ed] border-t border-[#3d0f1a]/5">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="flex items-center justify-start gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                02 / IL METODO
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h3 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                Il metodo <span className="text-primary italic pr-2">compresso.</span> 
              </h3>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium text-justify">
                  Il focus è un solo punto: il Core Loop. L'unica funzionalità che risolve davvero il problema del tuo utente finale. Tutto il resto — estetica secondaria, feature 'belle da avere', integrazioni non essenziali — viene tagliato senza esitazione, perché ogni giorno risparmiato è un giorno guadagnato sul mercato. Lo stack è scelto per la stessa ragione: frontend reattivo costruito su framework agili, backend serverless che azzera i tempi di configurazione.
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
                03 / DOPO IL LANCIO
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                Scalabilità dal giorno zero.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FASE 01 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative p-8 md:p-12 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-[#3d0f1a] group-hover:text-primary transition-colors duration-300">
                  Analisi dei Dati Reali
                </h3>
                <p className="font-body text-base text-[#3d0f1a]/80 leading-relaxed mt-4">
                  Un MVP non è un punto di arrivo: è il primo dato reale che hai sulla tua idea. Lanciamo per testare il prodotto sul mercato, non in laboratorio.
                </p>
            </motion.div>

            {/* FASE 02 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group relative p-8 md:p-12 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-[#3d0f1a] group-hover:text-primary transition-colors duration-300">
                  Infrastruttura Serverless
                </h3>
                <p className="font-body text-base text-[#3d0f1a]/80 leading-relaxed mt-4">
                  Se le metriche confermano la direzione, l'architettura serverless costruita in questa fase è pensata per scalare — senza dover ripartire da zero con uno sviluppo Custom quando sarà il momento.
                </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 04 — DELIVERABLES E TECH SPEC (Pricing style)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f5f2ed] border-t border-[#3d0f1a]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                  04 / COSA OTTIENI
                </span>
                <div className="w-12 h-[1px] bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                4 settimane, data garantita
              </h2>
              <p className="font-body text-lg text-[#3d0f1a]/80 leading-relaxed border-l border-primary/25 pl-8 mt-8 text-justify">
                Un investimento mirato: il costo di scoprire in tempo se il mercato vuole davvero il tuo prodotto, prima di scalarlo. Il preventivo si definisce insieme, in base allo scope del Core Loop.
              </p>
              
              <div className="pt-10">
                 <p className="font-body text-base font-medium text-[#3d0f1a] mb-6">
                   Se hai un'idea che deve incontrare il mercato prima che qualcun altro lo faccia per te, hai 28 giorni a disposizione. Iniziamo.
                 </p>
                 <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 bg-[#3d0f1a] text-[#f5f2ed] px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
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
              
              <div className="mb-8 mt-2 pb-8 border-b border-[#3d0f1a]/10 flex justify-between items-end">
                <div>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    TIMELINE
                  </span>
                  <span className="font-display text-3xl font-black text-[#3d0f1a]">4 Sett.</span>
                </div>
                <div className="text-right">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    RUOLO
                  </span>
                  <span className="font-display text-xl font-bold italic">Sviluppo MVP</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-[#3d0f1a]/50 block mb-6 font-semibold">
                  DELIVERABLES
                </span>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Workshop di definizione MVP</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Prototipazione interattiva</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Sviluppo core-features scalabili</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Setup Analytics/Tracking di base</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#3d0f1a]/10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-[#3d0f1a]/50 block mb-6 font-semibold">
                  STACK TECNOLOGICO
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">React</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">Next.js</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">Supabase</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">TailwindCSS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectNavigation prev={{ url: "/sviluppo-cms", title: "Sviluppo CMS" }} next={{ url: "/sviluppo-custom", title: "Sviluppo Custom" }} archiveUrl="/servizi" archiveTitle="Servizi" prevLabel="Servizio Precedente" nextLabel="Servizio Successivo" />
      <BriefingCTA
        subtitle="IL PROSSIMO PASSO"
        title1="Incontriamo"
        title2="il mercato."
        description="Se hai un'idea che deve incontrare il mercato prima che qualcun altro lo faccia per te, hai 28 giorni a disposizione. Iniziamo."
        buttonText="PARLAMI DEL TUO PROGETTO"
      />
      <Footer />
    </div>
  );
};
export default MVPDetails;
