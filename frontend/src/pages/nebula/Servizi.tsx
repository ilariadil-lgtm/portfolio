import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Box, Cpu, Globe, Layout } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";

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
      className="h-full relative border border-white/5 p-8 md:p-12 bg-white/[0.02] hover:border-[#d4af37]/30 transition-all duration-700 flex flex-col justify-between group overflow-hidden rounded-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
              {service.subtitle || `SERVICE_0${idx + 1}`}
            </span>
          </div>
          <div className="text-white/30 group-hover:text-[#d4af37] transition-all duration-500">
            {service.icon || <Box size={24} />}
          </div>
        </div>

        {/* Central Title & Description */}
        <div className="space-y-6 mb-8">
          <div className="flex items-baseline gap-4 min-h-[80px] lg:min-h-[120px]">
            <span className="font-fraunces italic font-light text-5xl md:text-6xl text-white/10 select-none">
              0{idx + 1}
            </span>
            <h3 className="font-bricolage font-black tracking-tight text-3xl text-white">
              {service.title}
            </h3>
          </div>
          <p className="font-outfit font-light text-white/60 text-[15px] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Action button specs expander */}
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors cursor-pointer"
          >
            {showSpecs ? "- HIDE DETAILS" : "+ SHOW DETAILS"}
          </button>
        </div>

        {/* Accordion Specification Drawer */}
        <AnimatePresence>
          {showSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-8"
            >
              <div className="font-mono text-[9px] divide-y divide-white/5 bg-black/50 p-6 border border-white/5 space-y-4">
                <div className="flex justify-between pb-3">
                  <span className="text-white/40 uppercase tracking-[0.2em]">Tools:</span>
                  <span className="text-white/80 text-right">{specs.core}</span>
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
                      <span key={i} className="border border-white/10 text-white/70 px-2 py-1 rounded-full text-[8px] uppercase tracking-[0.1em]">
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
      <div className="space-y-4 pt-8 border-t border-white/5 relative z-10 mt-auto">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 block">
          DELIVERABLES
        </span>
        <ul className="space-y-3">
          {(service.deliverables || ["Strategia Digitale", "Deployment", "Ottimizzazioni"]).map((del: string, dIdx: number) => (
            <li key={dIdx} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/70">
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

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — SERVICES GATEWAY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10">
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">COSA OFFRO</span>
                  <div className="w-12 h-[1px] bg-[#d4af37]/30" />
                </div>
                <h1 className="font-fraunces italic font-light text-[10vw] lg:text-[7vw] leading-[0.9] tracking-tight text-white">
                  <RevealText text="I miei" delay={0.1} />
                  <RevealText text="servizi." delay={0.2} className="text-[#d4af37]" />
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Narrative Block */}
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-outfit font-light text-white/60 text-lg leading-relaxed pl-8 border-l border-[#d4af37]/30"
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
      <section className="pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10 relative">
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
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#080808] border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* Header section */}
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4 block">FLUSSO DI LAVORO</span>
            <div className="w-12 h-[1px] bg-[#d4af37]/30 mb-8" />
            <h2 className="font-fraunces italic font-light text-5xl md:text-7xl leading-none tracking-tight text-white">
              <RevealText text="Come lavoro:" delay={0.1} />
              <RevealText text="il processo." delay={0.3} className="text-[#d4af37]" />
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
                className="group relative p-8 border border-white/5 bg-white/[0.02] rounded-none hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Big Step Number */}
                <div className="flex justify-between items-baseline mb-8">
                  <span className="font-fraunces italic font-light text-5xl text-white/10 group-hover:text-[#d4af37]/20 transition-colors select-none">
                    {step.num}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#d4af37]/80">
                    {step.subtitle}
                  </span>
                </div>

                {/* Title and Narrative */}
                <h3 className="font-bricolage font-black tracking-tight text-xl mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-outfit font-light text-white/50 text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default Servizi;
