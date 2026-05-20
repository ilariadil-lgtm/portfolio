import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Box, Cpu, Globe, Layers, Zap } from "lucide-react";

const Percorso = () => {
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
      period: "2014 — 2018", 
      title: "Belle Arti", 
      subtitle: "ESTETICA_FONDAMENTI",
      description: "Formazione classica in composizione visiva e teoria del colore. L'occhio estetico che ancora guida ogni decisione progettuale. Quattro anni tra schizzi, tipografia e storia dell'arte.",
      tech: ["Composizione", "Tipografia", "Teoria Colore"],
      icon: <Layers size={24} />
    },
    { 
      num: "02", 
      period: "2019 — 2021", 
      title: "UX Engineering", 
      subtitle: "LOGICA_SISTEMICA",
      description: "Il passaggio dalla superficie all'architettura: React, design systems, accessibilità. Interfacce che funzionano, non solo belle. Il codice diventa materiale creativo.",
      tech: ["React", "TypeScript", "Design Systems"],
      icon: <Cpu size={24} />
    },
    { 
      num: "03", 
      period: "2022 — oggi", 
      title: "Cloud Architecture", 
      subtitle: "SCALABILITÀ_PRODOTTO",
      description: "Infrastrutture scalabili, serverless, CI/CD. Dalla concezione al mercato, unendo visione strategica e padronanza tecnica. Guida di prodotti digitali end-to-end.",
      tech: ["AWS", "Serverless", "DevOps"],
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
           HERO — EVOLUTION LOG UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Monumental Text */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[25vw] font-black uppercase tracking-tighter">EVOLUTION</span>
        </div>

        <div className="max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">System_History // v2.4</span>
               <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h1 className="font-display text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter mb-12">
              BEYOND <br />
              <span className="text-primary italic">THE SURFACE.</span>
            </h1>
            <p className="font-body text-xl text-[#3d0f1a]/60 leading-relaxed max-w-2xl border-l border-primary/20 pl-8">
              {about?.bio || "Un viaggio che inizia tra i corridoi dell'Accademia di Belle Arti e arriva alle architetture cloud. La stessa ossessione per i dettagli, applicata a scale sempre più ampie."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           TIMELINE — ARCHITECTURAL PHASES
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="space-y-48">
          {evolution.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            >
              {/* Phase Number & Vertical Line */}
              <div className="lg:col-span-2 flex flex-col items-start gap-8">
                 <div className="font-display text-8xl font-black text-primary/10 select-none">
                   {step.num}
                 </div>
                 <div className="w-[2px] h-32 bg-gradient-to-b from-primary/20 to-transparent" />
              </div>

              {/* Phase Content */}
              <div className="lg:col-span-6 space-y-8">
                 <div className="flex items-center gap-4">
                    <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-primary/60">{step.period}</span>
                    <div className="h-[1px] flex-1 bg-primary/10" />
                 </div>
                 <h2 className="font-display text-5xl md:text-6xl font-bold italic">{step.title}</h2>
                 <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary mb-6 block">{step.subtitle}</span>
                 <p className="font-body text-lg text-[#3d0f1a]/60 leading-relaxed max-w-md">
                   {step.description}
                 </p>
              </div>

              {/* Technical Spec HUD */}
              <div className="lg:col-span-4 bg-white/40 border border-primary/5 p-10 backdrop-blur-3xl relative group hover:bg-white/60 transition-all">
                 <div className="absolute top-0 right-0 p-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.icon}
                 </div>
                 <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary/40 mb-8 block">Phase_Inventory</span>
                 <ul className="space-y-4">
                    {step.tech.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <span className="font-typewriter text-[10px] uppercase tracking-widest">{t}</span>
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
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#3d0f1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0392B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="font-typewriter text-[10px] uppercase tracking-[0.8em] text-primary/60 mb-8 block">System_Deployment</span>
            <h2 className="font-display text-6xl md:text-8xl font-black leading-none tracking-tighter">
              CORE <br />
              <span className="text-primary italic">CAPABILITIES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((tech, i) => (
              <motion.div 
                key={tech.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 border border-white/5 hover:border-primary/20 transition-all bg-white/[0.02]"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Box size={20} />
                  </div>
                  <span className="font-typewriter text-[8px] text-white/30">MODULE_0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">{tech.title}</h3>
                <p className="font-body text-xs text-white/40 leading-relaxed uppercase tracking-widest">
                   {tech.description || "Integrazione ad alta performance di soluzioni digitali scalabili e ottimizzate."}
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="font-typewriter text-[7px] tracking-[0.4em]">INIT_AUDIT</span>
                   <ArrowRight size={14} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Percorso;
