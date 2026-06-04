import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState, useRef } from "react";
import { api } from "@/lib/api";
import { Box, Cpu, Globe, Layout, ChevronRight, Hexagon } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { MagneticWrapper } from "@/components/MagneticWrapper";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const serviceSpecs: Record<number, any> = {
  1: {
    core: "Figma & Creative Suite",
    workflow: "User Research e Prototipazione Iterativa",
    kpi: "Accessibilità visiva e flussi utente intuitivi",
    load: "USER - CENTRIC",
    tools: ["Figma", "Adobe CC", "Responsive design", "Branding"]
  },
  2: {
    core: "React, Vite, Tailwind, Python, Django, PHP, Javascript",
    workflow: "Sviluppo Modulare (Front-end & Back-end)",
    kpi: "Prestazioni, sicurezza e codice scalabile",
    load: "LOGICA SOLIDA & VELOCE",
    tools: ["React", "TypeScript", "TailwindCSS", "Next.js", "WordPress", "Prestashop", "PYTHON / DJANGO"]
  },
  3: {
    core: "Git, Supabase, AI Tools (Gemini / GPT)",
    workflow: "Vibe Coding & Gestione Agile End-to-End",
    kpi: "Rilascio del prodotto fluido e zero-stress",
    load: "STRATEGICO // PROBLEMSOLVING",
    tools: ["PRODUCT MNGMT", "VIBE CODING", "AI WORKFLOWS", "STRATEGIA"]
  }
};

const steps = [
  {
    num: "01",
    title: "Analisi & Strategia",
    subtitle: "Obiettivi e scope",
    description: "Definizione degli obiettivi di business e delle esigenze degli utenti. Strutturo una roadmap chiara per definire lo scope e i requisiti tecnici dell'intero ecosistema."
  },
  {
    num: "02",
    title: "UX & UI Design",
    subtitle: "Empatia e visione",
    description: "Progettazione e prototipazione iterativa ad alta fedeltà. Definisco le linee guida visive per un brand solido, bilanciando sempre usabilità, pulizia ed estetica d'avanguardia."
  },
  {
    num: "03",
    title: "Sviluppo Full-Stack",
    subtitle: "Codice e logica",
    description: "Costruzione dell'ecosistema digitale. Scrivo codice pulito e modulare, affiancando interfacce reattive a solide architetture back-end o CMS avanzati. Massimo focus sulle performance e sulla scalabilità."
  },
  {
    num: "04",
    title: "Collaudo & Deploy",
    subtitle: "Test e rilascio",
    description: "Audit di performance, accessibilità e SEO prima del rilascio ufficiale. Configuro il lancio in modo fluido e sicuro, assicurandomi che il prodotto sia impeccabile, stabile e pronto per il mercato."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// SPOTLIGHT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  
  // Spotlight state
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const specs = serviceSpecs[service.id] || serviceSpecs[(idx % 3) + 1];

  return (
    <motion.div
      ref={divRef}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        setOpacity(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setOpacity(0);
        setShowSpecs(false);
      }}
      className="h-full relative border border-white/5 p-8 md:p-12 bg-white/[0.02] hover:border-[#d4af37]/40 transition-all duration-700 flex flex-col justify-between group overflow-hidden rounded-none"
    >
      {/* Spotlight Effect overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8 relative">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
              {service.subtitle || `SERVICE_0${idx + 1}`}
            </span>
          </div>
          <motion.div 
            animate={{ rotate: isHovered ? 15 : 0 }}
            className="text-white/30 group-hover:text-[#d4af37] transition-all duration-500"
          >
            {service.icon || <Box size={24} />}
          </motion.div>
        </div>

        {/* Central Title & Description */}
        <div className="space-y-6 mb-8 flex-1">
          <div className="flex items-baseline gap-4 min-h-[80px] lg:min-h-[120px]">
            <span className="font-fraunces italic font-light text-5xl md:text-6xl text-white/5 group-hover:text-[#d4af37]/10 transition-colors duration-700 select-none">
              0{idx + 1}
            </span>
            <h3 className="font-bricolage font-black tracking-tight text-3xl text-white">
              {service.title}
            </h3>
          </div>
          <p className="font-outfit font-light text-white/60 text-[15px] leading-relaxed relative z-10">
            {service.description}
          </p>
        </div>

        {/* Action button specs expander */}
        <div className="mb-8 flex justify-between items-center relative z-10">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            {showSpecs ? "− HIDE DETAILS" : "+ SHOW DETAILS"}
          </button>
        </div>

        {/* Accordion Specification Drawer */}
        <AnimatePresence>
          {showSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
              animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
              exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-8 relative z-10"
            >
              <div className="font-mono text-[9px] divide-y divide-white/5 bg-black/60 backdrop-blur-md p-6 border border-white/5 space-y-4">
                <div className="flex justify-between pb-3 items-center">
                  <span className="text-white/40 uppercase tracking-[0.2em]">Tools:</span>
                  <span className="text-[#d4af37] text-right bg-[#d4af37]/10 px-2 py-1">{specs.core}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-white/40 uppercase tracking-[0.2em]">Methodology:</span>
                  <span className="text-white/80 text-right">{specs.workflow}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-white/40 uppercase tracking-[0.2em]">Key KPI:</span>
                  <span className="text-[#d4af37] text-right">{specs.kpi}</span>
                </div>
                <div className="pt-3">
                  <span className="text-white/40 uppercase tracking-[0.2em] block mb-3">Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {specs.tools.map((t: string, i: number) => (
                      <span key={i} className="border border-white/10 bg-white/[0.02] text-white/70 px-2 py-1 rounded-full text-[8px] uppercase tracking-[0.1em]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Deliverables List */}
        <div className="space-y-4 pt-8 border-t border-white/5 relative z-10 mt-auto">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 block">
            DELIVERABLES
          </span>
          <ul className="space-y-3">
            {(service.deliverables || ["Strategia Digitale", "Deployment", "Ottimizzazioni"]).map((del: string, dIdx: number) => (
              <li key={dIdx} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/70 group-hover:text-white transition-colors duration-300">
                  {del}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-[#d4af37]/50 transition-colors pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-[#d4af37]/50 transition-colors pointer-events-none" />
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT DATA TERMINAL (WORKFLOW)
// ─────────────────────────────────────────────────────────────────────────────
const WorkflowDataTerminal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full bg-[#050505]/50 border border-white/5 p-8 md:p-16 rounded-none backdrop-blur-md relative overflow-hidden">
      
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/30 pointer-events-none" />

      {/* Navigation Column */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-4 relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-8 block border-b border-white/10 pb-4">
          SEQUENZA OPERATIVA
        </span>
        
        {steps.map((step, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`w-full text-left py-6 px-6 border-l-2 transition-all duration-300 relative group flex items-center justify-between ${
                isActive 
                  ? "border-[#d4af37] bg-white/[0.03]" 
                  : "border-transparent hover:border-white/20 hover:bg-white/[0.01]"
              }`}
            >
              <div className="flex items-center gap-6">
                <span className={`font-fraunces italic font-light text-2xl transition-colors duration-300 ${
                  isActive ? "text-[#d4af37]" : "text-white/20 group-hover:text-white/50"
                }`}>
                  {step.num}
                </span>
                <span className={`font-bricolage font-bold tracking-tight text-xl md:text-2xl transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/50 group-hover:text-white"
                }`}>
                  {step.title}
                </span>
              </div>
              <ChevronRight size={18} className={`transition-all duration-500 ${
                isActive ? "text-[#d4af37] opacity-100 translate-x-0" : "text-white/10 opacity-0 -translate-x-4"
              }`} />
            </button>
          );
        })}
      </div>

      {/* Display Panel */}
      <div className="lg:col-span-7 flex items-center relative z-10 min-h-[400px]">
        <div className="w-full h-full p-8 md:p-12 border border-white/10 bg-black/40 shadow-inner relative overflow-hidden flex flex-col justify-center">
          
          {/* Background grid for the display */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(15px)", x: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              exit={{ opacity: 0, filter: "blur(15px)", x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <Hexagon size={18} className="text-[#d4af37]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]/80">
                  {steps[activeIndex].subtitle}
                </span>
              </div>
              
              <h3 className="font-fraunces italic font-light text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-white mb-8">
                {steps[activeIndex].title}.
              </h3>
              
              <p className="font-outfit font-light text-white/60 text-lg md:text-xl leading-relaxed">
                {steps[activeIndex].description}
              </p>

              {/* Fake loading bar / telemetry */}
              <div className="mt-12 w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};


// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
const Servizi = () => {
  usePageMeta({
    title: "Servizi",
    description: "UI/UX Design, sviluppo web su misura e tech product management.",
  });

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        setServices(data.results || data);
      } catch (error) {
        console.error("Errore nel recupero dei servizi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const fallbackServices = [
    {
      id: 1,
      title: "UI & UX Design",
      subtitle: "ESTETICA & INTERAZIONE",
      description: "Creazione di interfacce digitali memorabili. Curo la progettazione visiva dall'architettura dell'informazione fino all'alta fedeltà visiva, garantendo un'esperienza fluida.",
      deliverables: ["Progettazione UI/UX design", "Wireframe & Prototipi", "Visual Identity", "Design Systems"],
      icon: <Layout size={28} />
    },
    {
      id: 2,
      title: "Sviluppo Full-Stack",
      subtitle: "LOGICA & CODICE",
      description: "Dall'interfaccia al database. Sviluppo applicazioni web robuste e performanti, affiancate alla creazione di ecosistemi completi e temi personalizzati ed esclusivi.",
      deliverables: ["Web App", "Sviluppo Front-end", "Temi custom", "OTTIMIZZAZIONE PERFORMANCE"],
      icon: <Cpu size={28} />
    },
    {
      id: 3,
      title: "Tech PM & Gestione Prodotto",
      subtitle: "STRATEGIA & SCALABILITÀ",
      description: "Il ponte tra visione e sviluppo. Prendo in carico la complessità tecnica del tuo progetto, strutturando roadmap chiare e coordinando l'intero ciclo di vita.",
      deliverables: ["PRODUCT MANAGEMENT", "ANALISI DEI REQUISITI", "INTEGRAZIONE AI WORKFLOWS", "COORDINAMENTO AGILE"],
      icon: <Globe size={28} />
    }
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      {/* HUD Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[0] flex items-center justify-center opacity-[0.03]">
         <div className="w-full h-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

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
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">COSA OFFRO</span>
                  <div className="w-12 h-[1px] bg-[#d4af37]/30" />
                </div>
                <h1 className="font-fraunces italic font-light text-[10vw] lg:text-[7vw] leading-[0.9] tracking-tight text-white">
                  <RevealText text="I miei" delay={0.1} />
                  <RevealText text="servizi." delay={0.2} className="text-[#d4af37]" />
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-outfit font-light text-white/60 text-lg leading-relaxed pl-8 border-l border-[#d4af37]/30 backdrop-blur-sm"
              >
                Un buon prodotto digitale non nasce separando il design dallo sviluppo. Creo soluzioni partendo da una forte sensibilità visiva, traducendole in codice solido e guidando l'intero percorso con una strategia chiara. Questa mappa delinea come posso affiancarti in ogni fase.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10 relative">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {displayServices.map((service, idx) => (
            <ServiceCard key={service.id || idx} service={service} idx={idx} />
          ))}
        </motion.div>
      </section>

      {/* Compact Data Terminal Workflow */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-48 pt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-16 text-center">
            <h2 className="font-fraunces italic font-light text-4xl md:text-6xl leading-none tracking-tight text-white mb-6">
              <RevealText text="Come lavoro:" delay={0.1} />
              <RevealText text="il processo." delay={0.3} className="text-[#d4af37]" />
            </h2>
            <p className="font-outfit font-light text-white/50 text-lg max-w-2xl mx-auto">
              Un approccio metodico che garantisce controllo, flessibilità e una qualità finale ineccepibile.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <WorkflowDataTerminal />
          </motion.div>
        </div>
      </section>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default Servizi;
