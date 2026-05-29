import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Box, Cpu, Eye, Globe, Layout, Server, Sparkles, Terminal, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { BriefingCTA } from "@/components/BriefingCTA";

// Standard static framework specifications for each service card
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
    kpi: "Prestazioni, sicurezza e codice scalabiles",
    load: "LOGICA SOLIDA & VELOCE",
    tools: ["React", "TypeScript", "TailwindCSS", "Next.js", "WordPress", "Prestashop", "HTML / CSS / JS", "PYTHON / DJANGO"]
  },
  3: {
    core: "Git, Supabase, AI Tools (Gemini / GPT)",
    workflow: "Vibe Coding & Gestione Agile End-to-End",
    kpi: "Rilascio del prodotto fluido e zero-stress",
    load: "STRATEGICO // PROBLEMSOLVING",
    tools: ["PRODUCT MNGMT", "VIBE CODING", "AI WORKFLOWS", "STRATEGIA", "PROBLEM SOLVING"]
  }
};

const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  const specs = serviceSpecs[service.id] || serviceSpecs[(idx % 3) + 1];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSpecs(false);
      }}
      data-cursor="view"
      className="h-full relative border border-white/10 p-6 md:p-10 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:border-cyan-500/50 transition-all duration-700 flex flex-col justify-between group overflow-hidden rounded-[2rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {/* Dynamic Scrolling Scanning laser beam */}
      <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent top-0 group-hover:top-[100%] transition-all duration-[3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8">
          <div className="flex flex-col">
            <span className="font-mono tracking-widest text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-bold">
              {service.subtitle || `SYSTEM_MODULE_0${idx + 1}`}
            </span>
            <span className="font-mono tracking-widest text-[7px] uppercase tracking-[0.2em] text-slate-100/40 font-medium mt-1">
              FOCUS VISIVO
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-cyan-500/15 flex items-center justify-center text-slate-100/40 bg-cyan-500/5 group-hover:scale-110 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
            {service.icon || <Box size={18} />}
          </div>
        </div>

        {/* Central Title & Description */}
        <div className="space-y-6 mb-8">
          <div className="flex items-baseline gap-4 min-h-[80px] lg:min-h-[120px]">
            <span className="font-sans font-black tracking-tighter text-4xl md:text-5xl font-black text-slate-100/10 select-none">
              0{idx + 1}
            </span>
            <h3 className="font-sans font-black tracking-tighter text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
              {service.title}
            </h3>
          </div>
          <p className="font-sans font-light text-slate-300 text-[15px] text-slate-100/70 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Action button specs expander */}
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            data-cursor="pointer"
            className="font-mono tracking-widest text-[9px] uppercase tracking-widest text-slate-100 border border-white/10 hover:bg-white/5 backdrop-blur-md border border-white/10/5 hover:border-white/10 px-3 py-1.5 transition-all duration-300 relative z-20 font-bold cursor-pointer"
          >
            {showSpecs ? "[ CHIUDI DETTAGLI ]" : "[ APRI DETTAGLI ]"}
          </button>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/75 animate-ping" />
            <span className="font-mono text-[7px] text-slate-100/40">Allineato</span>
          </div>
        </div>

        {/* Accordion Specification Drawer */}
        <AnimatePresence>
          {showSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-6"
            >
              <div className="font-mono text-[10px] divide-y divide-primary/10 bg-[#030712] p-5 border border-cyan-500/15 space-y-3 shadow-inner">
                <div className="flex justify-between pb-2">
                  <span className="text-slate-100/50 uppercase tracking-widest text-[8px]">Tools:</span>
                  <span className="text-slate-100 font-semibold text-right">{specs.core}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-100/50 uppercase tracking-widest text-[8px]">Metodologia:</span>
                  <span className="text-slate-100 font-semibold text-right">{specs.workflow}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-100/50 uppercase tracking-widest text-[8px]">Obiettivo chiave:</span>
                  <span className="text-cyan-400 font-bold text-right">{specs.kpi}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-100/50 uppercase tracking-widest text-[8px]">Approccio:</span>
                  <span className="text-green-700 font-black text-right">{specs.load}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-100/50 uppercase tracking-widest text-[8px] block mb-2">Skills:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {specs.tools.map((t: string, i: number) => (
                      <span key={i} className="bg-cyan-500/10 text-slate-100 border border-white/10 px-2 py-0.5 rounded-sm text-[8px] uppercase tracking-wider font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Deliverables List */}
      <div className="space-y-4 pt-6 border-t border-white/10 relative z-10 mt-auto">
        <span className="font-mono tracking-widest text-[8px] uppercase tracking-[0.3em] text-cyan-400 block font-bold">
          SERVIZI CHIAVE
        </span>
        <ul className="space-y-2.5">
          {(service.deliverables || ["Strategia Digitale", "Deployment", "Ottimizzazioni"]).map((del: string, dIdx: number) => (
            <li key={dIdx} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-cyan-500/60" />
              <span className="font-mono tracking-widest text-[10px] uppercase tracking-widest text-slate-100/80 font-bold">
                {del}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Servizi = () => {
  usePageMeta({
    title: "Servizi",
    description: "UI/UX Design, sviluppo web su misura e tech product management. Scopri come posso trasformare la tua idea in un prodotto digitale di qualità.",
  });

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      description: "Creazione di interfacce digitali memorabili. Curo la progettazione visiva dall'architettura dell'informazione fino all'alta fedeltà visiva, garantendo un'esperienza fluida, intuitiva e focalizzata sugli obiettivi utente.",
      deliverables: ["Progettazione UI/UX design", "Wireframe & Prototipi", "Visual Identity", "Design Systems"],
      icon: <Layout size={24} />
    },
    {
      id: 2,
      title: "Sviluppo Full-Stack",
      subtitle: "LOGICA & CODICE",
      description: "Dall'interfaccia al database. Sviluppo applicazioni web robuste e performanti (utilizzando Python, Django e JS), affiancate alla creazione di ecosistemi completi e temi personalizzati ed esclusivi su WordPress o Prestashop. Codice pulito e architetture su misura.",
      deliverables: ["Web App", "Sviluppo Front-end", "Temi custom", "OTTIMIZZAZIONE PERFORMANCE"],
      icon: <Cpu size={24} />
    },
    {
      id: 3,
      title: "Tech PM & Gestione Prodotto",
      subtitle: "STRATEGIA & SCALABILITÀ",
      description: "Il ponte tra visione e sviluppo. Prendo in carico la complessità tecnica del tuo progetto, strutturando roadmap chiare e coordinando l'intero ciclo di vita del prodotto per garantirti un rilascio fluido, rapido e senza stress.",
      deliverables: ["PRODUCT MANAGEMENT", "ANALISI DEI REQUISITI", "INTEGRAZIONE AI WORKFLOWS", "COORDINAMENTO AGILE"],
      icon: <Globe size={24} />
    }
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

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
      description: "Costruzione dell'ecosistema digitale. Scrivo codice pulito e modulare, affiancando interfacce reattive a solide architetture back-end (Python/Django) o CMS avanzati. Massimo focus sulle performance e sulla scalabilità."
    },
    {
      num: "04",
      title: "Collaudo & Deploy",
      subtitle: "Test e rilascio",
      description: "Audit di performance, accessibilità e SEO prima del rilascio ufficiale. Configuro il lancio in modo fluido e sicuro, assicurandomi che il prodotto sia impeccabile, stabile e pronto per il mercato."
    }
  ];

  return (
    <div className="min-h-screen pl-0 md:pl-32 bg-[#030712] text-slate-100 overflow-hidden selection:bg-cyan-500/30">
      <NebulaNav />


      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — SERVICES GATEWAY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-sans font-black tracking-tighter text-[20vw] font-black uppercase tracking-tighter">SERVIZI</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center items-start">

            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono tracking-widest text-[11px] uppercase tracking-[0.5em] text-cyan-400 font-medium">COSA OFFRO</span>
                  <div className="w-12 h-[1px] bg-cyan-500/20" />
                </div>
                <h1 className="font-sans font-black tracking-tighter text-[9.5vw] lg:text-[6.2vw] font-bold leading-[0.85] tracking-tighter text-slate-100">
                  <RevealText text="I miei" delay={0.1} />
                  <RevealText text="servizi." delay={0.2} className="text-cyan-400 " />
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Narrative Block */}
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-light text-slate-300 text-lg text-slate-100/80 leading-relaxed pl-8 border-l border-cyan-500/25"
              >
                Un buon prodotto digitale non nasce separando il design dallo sviluppo. Creo soluzioni partendo da una forte sensibilità visiva, traducendole in codice solido e guidando l'intero percorso con una strategia chiara. Questa mappa delinea come posso affiancarti in ogni fase.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           SERVICES DETAILED LEDGER — INTERACTIVE CARD MATRIX
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {displayServices.map((service, idx) => (
            <ServiceCard key={service.id || idx} service={service} idx={idx} />
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           WORKFLOW BLUEPRINT — STEP-BY-STEP PROCESS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#030712] border-y border-white/5 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#030712]/0 to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          {/* Header section */}
          <div className="mb-16 relative z-10">
            <span className="font-mono tracking-widest text-[11px] uppercase tracking-[0.5em] text-cyan-400 font-medium mb-4 block">FLUSSO DI LAVORO</span>
            <div className="w-12 h-[1px] bg-cyan-500/20 mb-8" />
            <h2 className="font-sans font-black tracking-tighter text-5xl md:text-7xl font-bold leading-none tracking-tighter text-slate-100">
              <RevealText text="Come lavoro:" delay={0.1} />
              <RevealText text="il processo." delay={0.3} className="text-cyan-400 " />
            </h2>
          </div>

          {/* Workflow Sequence Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mt-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="pointer"
                className="group relative p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-[1.5rem] hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Blueprint Step Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-500/10 group-hover:bg-cyan-500 transition-colors duration-500" />

                {/* Big Step Number */}
                <div className="flex justify-between items-baseline mb-8">
                  <span className="font-sans font-black tracking-tighter text-5xl font-black text-slate-100/10 group-hover:text-cyan-400/20 transition-colors select-none leading-none">
                    {step.num}
                  </span>
                  <span className="font-mono tracking-widest text-[8px] uppercase tracking-[0.25em] text-cyan-400/80 font-bold">
                    {step.subtitle}
                  </span>
                </div>

                {/* Title and Narrative */}
                <h3 className="font-sans font-black tracking-tighter text-xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-slate-300 text-[14px] text-slate-100/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BriefingCTA />

      <NebulaFooter />
    </div>
  );
};

export default Servizi;
