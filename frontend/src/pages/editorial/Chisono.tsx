import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Box, Cpu, Globe, Layers } from "lucide-react";

const Chisono = () => {
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutData, servData] = await Promise.all([
          api.getAbout(),
          api.getServices()
        ]);
        setAbout(aboutData);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();
  }, []);

  const evolution = [
    {
      num: "01",
      period: "2013 — 2020",
      title: "Accademia di Belle Arti",
      subtitle: "ESTETICA_FONDAMENTI",
      description: "Formazione classica in Graphic Design e Comunicazione visiva. L'occhio estetico che ancora oggi guida ogni decisione progettuale. Sette anni tra percezione visiva, branding avanzato e visual storytelling.",
      tech: ["Composizione visiva", "Typography & Branding", "Teoria Colore"],
      icon: <Layers size={22} />
    },
    {
      num: "02",
      period: "2021 — 2025",
      title: "Web & UI Development",
      subtitle: "Dalla grafica al codice",
      description: "Il passaggio dalla superficie all'architettura: React, design systems, accessibilità. Interfacce che funzionano, non solo belle. Il codice diventa materiale creativo.",
      tech: ["UI/UX DESIGN", "Sviluppo Front-end", "CMS WORDPRESS & prestashop"],
      icon: <Cpu size={22} />
    },
    {
      num: "03",
      period: "2025 — oggi",
      title: "Strategia & Prodotto Digitale",
      subtitle: "Dall'idea al rilascio",
      description: "L'evoluzione verso un profilo ibrido che fonde design, codice e visione d'insieme. Coordino l'intero ciclo di vita del progetto, trasformando le tue necessità aziendali in ecosistemi web completi, fluidi e pronti per il mercato.",
      tech: ["PRODUCT MANAGEMEN", "SVILUPPO FULL-STACK", "AI WORKFLOWS"],
      icon: <Globe size={22} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — CHI SONO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Monumental Text */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[22vw] font-black uppercase tracking-tighter">PERCORSO</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Typography & Bio Info */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">01 — BIOGRAFIA & PROFILO</span>
                  <div className="w-12 h-[1px] bg-primary/20" />
                </div>
                <h1 className="font-display text-[9vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter text-[#3d0f1a] mb-8">
                  CHI <br />
                  <span className="text-primary italic">SONO.</span>
                </h1>

                <p className="font-body text-xl text-[#3d0f1a]/80 leading-relaxed pl-8 border-l border-primary/25 max-w-xl">
                  {about?.bio || "Un viaggio che inizia tra i corridoi dell'Accademia di Belle Arti e arriva alla gestione tecnica di prodotti digitali. La stessa ossessione per i dettagli, applicata a scale sempre più ampie."}
                </p>
              </motion.div>

              {/* Technical Specifications Ledger */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border border-primary/10 bg-white/20 backdrop-blur-md shadow-sm max-w-xl"
              >
                <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center justify-between">
                  <span className="font-typewriter text-[10px] uppercase tracking-[0.2em] text-primary font-medium">Profilo Professionale</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  </div>
                </div>
                <div className="divide-y divide-primary/5">
                  {[
                    { label: "Ruolo", val: "Tech Product Manager & Full-stack Developer" },
                    { label: "Specializzazione", val: "Sviluppo Web, E-commerce, UI/UX" },
                    { label: "Sede", val: "Italia // Remote" },
                    { label: "Esperienza", val: " +6 Anni nel settore digitale", highlight: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-4">
                      <span className="font-typewriter text-[11px] uppercase tracking-widest text-[#3d0f1a]/60 font-medium">{item.label}</span>
                      <span className={`font-mono text-[12px] ${item.highlight ? 'text-primary font-semibold' : 'text-[#3d0f1a] font-medium'}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Blueprint Manifesto (Text-Only) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[400px] aspect-[4/5] border border-primary/15 p-3 bg-white/30 backdrop-blur-sm shadow-xl group"
              >
                {/* Corner Blueprint Markers */}
                <span className="absolute -top-2 -left-2 font-mono text-[10px] text-primary/40 pointer-events-none">[+]</span>
                <span className="absolute -top-2 -right-2 font-mono text-[10px] text-primary/40 pointer-events-none">[+]</span>
                <span className="absolute -bottom-2 -left-2 font-mono text-[10px] text-primary/40 pointer-events-none">[+]</span>
                <span className="absolute -bottom-2 -right-2 font-mono text-[10px] text-primary/40 pointer-events-none">[+]</span>

                {/* Monogram Background Grid */}
                <div className="absolute inset-0 flex justify-center items-center select-none opacity-[0.03] pointer-events-none">
                  <span className="font-display text-[16vw] font-black uppercase tracking-tighter text-[#3d0f1a]">ID</span>
                </div>

                {/* Content Container with scanner animation */}
                <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden bg-primary/[0.02] border border-primary/10 select-none">
                  {/* Animated Scanline Laser Beam */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_6px_rgba(192,57,43,0.4)] z-10 pointer-events-none"
                  />

                  {/* Grid Blueprint Overlay */}
                  <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:20px_20px]" />

                  {/* Top Ledger Telemetry */}
                  <div className="flex justify-between items-start border-b border-primary/15 pb-4 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-primary font-medium">Il mio metodo</span>
                      <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] text-[#3d0f1a]/50 font-medium">Visione operativa </span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[8px] text-primary/80">ILARIA D.</span>
                    </div>
                  </div>

                  {/* Main Rules Text Block */}
                  <div className="space-y-6 my-auto pt-4 relative z-10">
                    {[
                      { num: "I.", label: "ESTETICA", desc: "L'armonia visiva non è opzionale, è la porta d'ingresso per la fiducia." },
                      { num: "II.", label: "LOGICA", desc: "La bellezza senza funzionalità è un'occasione sprecata. Il codice rispecchia il design." },
                      { num: "III.", label: "FLUIDITÀ", desc: "L'esperienza utente deve fluire senza attrito o complessità tecniche." }
                    ].map((rule, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm italic font-bold text-primary">{rule.num}</span>
                          <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a] font-medium">{rule.label}</span>
                        </div>
                        <p className="font-body text-[13px] text-[#3d0f1a]/70 leading-relaxed pl-4">
                          {rule.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Specs */}
                  <div className="border-t border-primary/15 pt-4 flex justify-between items-end relative z-10">
                    <div className="flex flex-col">
                      <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] text-[#3d0f1a]/50 font-medium">Processo</span>
                      <span className="font-mono text-[9px] text-[#3d0f1a]/70">[ PROGETTAZIONE SU MISURA]</span>
                    </div>
                    <span className="font-typewriter text-[8px] text-primary font-medium">EST / 2020</span>
                  </div>
                </div>

                {/* Status indicator typewriter label */}
                <div className="flex justify-between items-center mt-3 px-1">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] text-primary/60 font-medium"></span>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] text-primary/60 font-medium"></span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           MARQUEE STRIP — CREATIVE PHILOSOPHY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-primary/20 py-8 bg-white/20 backdrop-blur-md overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="relative z-10 flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 font-typewriter text-[12px] uppercase tracking-[0.4em] text-primary font-medium"
          >
            <span>ESTETICA E LOGICA // TECH PRODUCT MANAGEMENT // VIBE CODING & AI WORKFLOWS // SVILUPPO FULL-STACK // PROGETTAZIONE UI/UX //</span>
            <span>ESTETICA E LOGICA // TECH PRODUCT MANAGEMENT // VIBE CODING & AI WORKFLOWS // SVILUPPO FULL-STACK // PROGETTAZIONE UI/UX //</span>
            <span>ESTETICA E LOGICA // TECH PRODUCT MANAGEMENT // VIBE CODING & AI WORKFLOWS // SVILUPPO FULL-STACK // PROGETTAZIONE UI/UX //</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           TIMELINE — ARCHITECTURAL PHASES
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-4 block">02 — EVOLUZIONE PROFESSIONALE</span>
          <div className="w-12 h-[1px] bg-primary/20 mb-8" />
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter">
            Il mio <br />
            <span className="text-primary italic">percorso evolutivo.</span>
          </h2>
        </div>

        <div className="space-y-36 relative before:absolute before:left-4 lg:before:left-12 before:top-2 before:bottom-2 before:w-[1px] before:bg-dashed before:border-l before:border-primary/20">
          {evolution.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative pl-12 lg:pl-24"
            >
              {/* Timeline dot inside connector */}
              <div className="absolute left-4 lg:left-12 -translate-x-1/2 w-3.5 h-3.5 bg-primary rounded-full border-4 border-[#f5f2ed] z-10 shadow-sm" />

              {/* Display Number */}
              <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-4">
                <div className="font-display text-7xl md:text-8xl font-black text-primary/10 select-none leading-none">
                  {step.num}
                </div>
                <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-primary/60 font-medium whitespace-nowrap">{step.period}</span>
              </div>

              {/* Title & Narrative Description */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-display text-4xl md:text-5xl font-bold italic text-[#3d0f1a]">{step.title}</h3>
                <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-primary font-medium mb-4 block">{step.subtitle}</span>
                <p className="font-body text-lg text-[#3d0f1a]/70 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Technical Spec HUD Card */}
              <div className="lg:col-span-4 bg-white/40 border border-primary/10 p-8 backdrop-blur-md relative group hover:bg-white/70 hover:border-primary/25 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="absolute top-6 right-6 text-primary/25 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.3em] text-primary/45 mb-6 block font-medium">Phase_Inventory</span>
                <ul className="space-y-3.5">
                  {step.tech.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary/70" />
                      <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a] font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CAPABILITIES MATRIX — TECHNICAL GRID
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#3d0f1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0392B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.5em] text-primary font-medium mb-4 block">03 — LE MIE COMPETENZE</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
              Aree
              <span className="text-primary italic"> di sviluppo.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.length > 0 ? services.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/10 hover:border-primary/40 transition-all bg-white/[0.02] backdrop-blur-sm relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform bg-[#3d0f1a]">
                    <Box size={20} />
                  </div>
                  <span className="font-typewriter text-[9px] text-white/30 font-medium">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">{tech.title}</h3>
                <p className="font-body text-[14px] text-white/60 leading-relaxed">
                  {tech.description || "Integrazione ad alta performance di soluzioni digitali scalabili e ottimizzate."}
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-typewriter text-[9px] tracking-[0.4em] text-primary font-medium">Scopri di più</span>
                  <ArrowRight size={14} className="text-primary" />
                </div>
              </motion.div>
            )) : (
              // Styled static fallbacks matching the exact grid cards
              [
                { title: "UI & UX Design", desc: "Creazione di interfacce web e mobile memorabili, focalizzate sull'esperienza utente e sulla coerenza visiva del brand." },
                { title: "Sviluppo Front-end", desc: "Codice pulito, accessibile e ad alte prestazioni utilizzando React, Next.js, TailwindCSS e le tecnologie web più moderne." },
                { title: "Sviluppo Full-Stack", desc: "Codice pulito, architetture solide e alte prestazioni. Sviluppo interfacce dinamiche, sistemi back-end su misura in Python/Django e temi per CMS avanzati, creando ecosistemi web completi e performanti." }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 border border-white/10 hover:border-primary/40 transition-all bg-white/[0.02] backdrop-blur-sm relative"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform bg-[#3d0f1a]">
                      <Box size={20} />
                    </div>
                    <span className="font-typewriter text-[9px] text-white/30 font-medium">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">{tech.title}</h3>
                  <p className="font-body text-[14px] text-white/60 leading-relaxed">
                    {tech.desc}
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-typewriter text-[9px] tracking-[0.4em] text-primary font-medium">SCOPRI DI PIÙ</span>
                    <ArrowRight size={14} className="text-primary" />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chisono;
