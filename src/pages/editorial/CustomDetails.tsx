import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";

const CustomDetails = () => {
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
                    INFRASTRUTTURA DEDICATA
                  </motion.span>
                </div>

                <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                  <div className="overflow-hidden pt-4 pb-8 w-max max-w-full">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block text-[12vw] lg:text-[clamp(3.5rem,8vw,8rem)] font-bold text-[#3d0f1a] pr-4 break-words whitespace-normal leading-none">
                      Sviluppo<span className="text-primary italic pr-2"> Custom</span>
                      <span className="text-[#3d0f1a] not-italic pr-2">.</span>
                    </motion.span>
                  </div>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-4 max-w-2xl">
                  <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium">
                    Nessun limite logico. Nessun vincolo tecnologico.
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
                      <h2 className="font-display text-3xl font-bold mb-2">Sviluppo Custom</h2>
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] font-semibold opacity-60 block mb-6">INFRASTRUTTURA DEDICATA</span>
                  </div>

                  <p className="font-body text-[15px] md:text-base text-[#3d0f1a]/80 leading-relaxed font-medium mb-10">
                    Per i brand e le aziende che hanno già superato la fase delle piattaforme standardizzate. Un'architettura interamente proprietaria, costruita per durare, scalare e restare — letteralmente — tua.
                  </p>

                  {/* Timeline with huge number */}
                  <div className="mb-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black tracking-tighter">8-12</span>
                    <span className="font-body text-base text-[#3d0f1a]/70">settimane</span>
                  </div>

                  <div className="w-full h-[1px] bg-[#3d0f1a]/10 mb-8" />

                  {/* Deliverable Checklist */}
                  <div className="space-y-4 flex-1 mb-10">
                    <div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Architettura Dati & Backend su misura</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Sviluppo API proprietarie</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Integrazione con sistemi aziendali</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[#3d0f1a] mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-[#3d0f1a]/90">Pannello di amministrazione</span></div>
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
                Il limite delle soluzioni standard.
              </h2>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium text-justify">
                  Sotto una certa soglia di complessità, un CMS configurato a dovere è la scelta più logica. Ma quando il tuo business dipende da flussi di dati specifici, integrazioni con ERP legacy, o regole di business che i plugin standard non possono gestire, forzare un CMS commerciale diventa un debito tecnico insostenibile. Il sistema diventa rigido, l'aggiornamento pericoloso, l'espansione impossibile.
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
                02 / L'ARCHITETTURA
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h3 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                Design <span className="text-primary italic pr-2">e tecnologia</span> proprietari.
              </h3>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-[#3d0f1a]/80 leading-relaxed font-medium text-justify">
                  Direzione artistica e UI/UX progettate da zero su Figma. Sotto la superficie, un backend proprietario: database relazionali complessi, query ottimizzate, API REST sicure. L'infrastruttura vive su AWS. Al saldo del progetto, cessione totale dei diritti sul codice sorgente: non un servizio in abbonamento, ma un asset patrimoniale reale che appartiene solo a te.
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
                03 / ESCLUSIVITÀ
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-[#3d0f1a]">
                Un progetto alla volta.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FASE 01 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative p-8 md:p-12 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-[#3d0f1a] group-hover:text-primary transition-colors duration-300">
                  Focus Assoluto
                </h3>
                <p className="font-body text-base text-[#3d0f1a]/80 leading-relaxed mt-4 text-justify">
                  Ogni Sviluppo Custom viene seguito con un solo cliente in contemporanea. Non per scarsità di mezzi, ma per scelta: questo livello di architettura richiede focus esclusivo sulle logiche di sistema.
                </p>
            </motion.div>

            {/* FASE 02 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group relative p-8 md:p-12 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-[#3d0f1a] group-hover:text-primary transition-colors duration-300">
                  Slot Dedicato
                </h3>
                <p className="font-body text-base text-[#3d0f1a]/80 leading-relaxed mt-4 text-justify">
                  Non sto dividendo la mia attenzione tra cinque progetti diversi. Stai prenotando uno slot dedicato al 100% alla tua azienda, non del tempo a ore.
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
                8-12 settimane di sviluppo dedicato
              </h2>
              <p className="font-body text-lg text-[#3d0f1a]/80 leading-relaxed border-l border-primary/25 pl-8 mt-8 text-justify">
                Ogni sistema custom viene rilasciato con documentazione tecnica completa, test di carico e architettura pronta per essere estesa. I tempi di sviluppo partono da un minimo di tre mesi, con milestone intermedie di validazione del codice e dell'interfaccia.
              </p>
              
              <div className="pt-10">
                 <p className="font-body text-base font-medium text-[#3d0f1a] mb-6 text-justify">
                   Se il tuo business ha smesso di stare dentro a un template, è il momento di costruire qualcosa che non ha limiti.
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
                  <span className="font-display text-3xl font-black text-[#3d0f1a]">8-12 Sett.</span>
                </div>
                <div className="text-right">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    RUOLO
                  </span>
                  <span className="font-display text-xl font-bold italic">Sviluppo Custom</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-[#3d0f1a]/50 block mb-6 font-semibold">
                  DELIVERABLES
                </span>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Architettura Dati & Backend su misura</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Sviluppo API proprietarie</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Integrazione con sistemi aziendali</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-[#3d0f1a]/80">Pannello di amministrazione</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#3d0f1a]/10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-[#3d0f1a]/50 block mb-6 font-semibold">
                  STACK TECNOLOGICO
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">Node/Django</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">PostgreSQL</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">AWS</span>
<span className="px-3 py-1.5 border border-[#3d0f1a]/20 font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/80 font-semibold">React</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectNavigation prev={{ url: "/sviluppo-mvp", title: "Sviluppo MVP" }} next={{ url: "/sviluppo-cms", title: "Sviluppo CMS" }} archiveUrl="/servizi" archiveTitle="Servizi" prevLabel="Servizio Precedente" nextLabel="Servizio Successivo" />
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
export default CustomDetails;
