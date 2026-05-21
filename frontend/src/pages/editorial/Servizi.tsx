import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Box, Cpu, Eye, Globe, Layout, Server, Sparkles, Terminal, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

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
    workflow: "Sviluppo Modulare (Front-end & Back-end",
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
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const specs = serviceSpecs[service.id] || serviceSpecs[(idx % 3) + 1];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSpecs(false);
      }}
      className="h-full relative border border-primary/15 p-8 bg-white/20 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
    >
      {/* Interactive Hover Radial Glow Backdrop */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-[80px] opacity-15 bg-primary w-[260px] h-[260px] transition-opacity duration-300 z-0"
          style={{
            left: coords.x - 130,
            top: coords.y - 130,
          }}
        />
      )}

      {/* Corner Blueprint Markers */}
      <span className="absolute -top-2 -left-2 font-mono text-[10px] text-primary/30 pointer-events-none select-none">[+]</span>
      <span className="absolute -top-2 -right-2 font-mono text-[10px] text-primary/30 pointer-events-none select-none">[+]</span>
      <span className="absolute -bottom-2 -left-2 font-mono text-[10px] text-primary/30 pointer-events-none select-none">[+]</span>
      <span className="absolute -bottom-2 -right-2 font-mono text-[10px] text-primary/30 pointer-events-none select-none">[+]</span>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Dynamic Scrolling Scanning laser beam */}
      <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent top-0 group-hover:top-[100%] transition-all duration-[3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-primary/10 pb-6 mb-8">
          <div className="flex flex-col">
            <span className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-primary font-medium">
              {service.subtitle || `SYSTEM_MODULE_0${idx + 1}`}
            </span>
            <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] text-[#3d0f1a]/40 font-medium">
              FOCUS VISIVO
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary/70 bg-white/40 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
            {service.icon || <Box size={18} />}
          </div>
        </div>

        {/* Central Title & Description */}
        <div className="space-y-6 mb-8">
          <div className="flex items-baseline gap-4 min-h-[90px] lg:min-h-[120px]">
            <span className="font-display text-4xl md:text-5xl font-black text-primary/10 select-none">
              0{idx + 1}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#3d0f1a]">
              {service.title}
            </h3>
          </div>
          <p className="font-body text-[15px] text-[#3d0f1a]/70 leading-relaxed min-h-[110px]">
            {service.description}
          </p>
        </div>

        {/* Action button specs expander */}
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="font-typewriter text-[9px] uppercase tracking-widest text-primary border border-primary/25 hover:bg-primary/5 hover:border-primary/50 px-3 py-1.5 transition-all duration-300 relative z-20 font-medium cursor-pointer"
          >
            {showSpecs ? "[ CHIUDI DETTAGLI ]" : "[ APRI DETTAGLI ]"}
          </button>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/75 animate-ping" />
            <span className="font-mono text-[7px] text-[#3d0f1a]/40">Allineato</span>
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
              <div className="font-mono text-[10px] divide-y divide-primary/10 bg-[#3d0f1a]/5 p-5 border border-primary/15 space-y-3">
                <div className="flex justify-between pb-2">
                  <span className="text-[#3d0f1a]/50 uppercase tracking-widest text-[8px]">Tools:</span>
                  <span className="text-[#3d0f1a] font-semibold text-right">{specs.core}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/50 uppercase tracking-widest text-[8px]">Metodologia:</span>
                  <span className="text-[#3d0f1a] font-semibold text-right">{specs.workflow}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/50 uppercase tracking-widest text-[8px]">Obiettivo chiave:</span>
                  <span className="text-primary font-bold text-right">{specs.kpi}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/50 uppercase tracking-widest text-[8px]">Approccio:</span>
                  <span className="text-green-600 font-black text-right">{specs.load}</span>
                </div>
                <div className="pt-2">
                  <span className="text-[#3d0f1a]/50 uppercase tracking-widest text-[8px] block mb-2">Skills:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {specs.tools.map((t: string, i: number) => (
                      <span key={i} className="bg-primary/10 text-primary border border-primary/5 px-2 py-0.5 rounded-sm text-[8px] uppercase tracking-wider font-semibold">
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
      <div className="space-y-4 pt-6 border-t border-primary/10 relative z-10 mt-auto">
        <span className="font-typewriter text-[8px] uppercase tracking-[0.3em] text-primary/50 block font-medium">
          SERVIZI CHIAVE
        </span>
        <ul className="space-y-2.5">
          {(service.deliverables || ["Strategia Digitale", "Deployment", "Ottimizzazioni"]).map((del: string, dIdx: number) => (
            <li key={dIdx} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-primary/60" />
              <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a]/80 font-medium">
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
      description: "Dall'interfaccia al database. Sviluppo applicazioni web robuste e performanti (utilizzando Python, Django e JS), affiancate alla creazione di ecosistemi completi e temi sartoriali su WordPress o Prestashop. Codice pulito e architetture su misura.",
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
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />


      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — SERVICES GATEWAY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[20vw] font-black uppercase tracking-tighter">SERVIZI</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">01 — COSA OFFRO</span>
                  <div className="w-12 h-[1px] bg-primary/20" />
                </div>
                <h1 className="font-display text-[9vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter text-[#3d0f1a]">
                  I miei <br />
                  <span className="text-primary italic">servizi.</span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Narrative Block */}
            <div className="lg:col-span-5 space-y-6 lg:pt-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-xl text-[#3d0f1a]/80 leading-relaxed pl-8 border-l border-primary/25"
              >
                Un buon prodotto digitale non nasce separando il design dallo sviluppo. Creo soluzioni partendo da una forte sensibilità visiva, traducendole in codice solido e guidando l'intero percorso con una strategia chiara. Questa mappa delinea come posso affiancarti in ogni fase.
              </motion.p>

              {/* Telemetry Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 pl-8 text-[#3d0f1a]/60"
              >
                <Terminal size={14} />
                <span className="font-typewriter text-[10px] uppercase tracking-widest font-medium"></span>
              </motion.div>
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
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white/20 border-y border-primary/10 relative">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto relative">
          {/* Header section */}
          <div className="mb-16 relative z-10">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium mb-4 block">02 — FLUSSO DI LAVORO</span>
            <div className="w-12 h-[1px] bg-primary/20 mb-8" />
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter text-[#3d0f1a]">
              Come lavoro: <br />
              <span className="text-primary italic">il processo.</span>
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
                className="group relative p-8 border border-primary/5 bg-white/50 hover:bg-white/90 hover:border-primary/20 transition-all duration-500 shadow-sm"
              >
                {/* Connecting horizontal dashed arrow between columns (Desktop Only, no text overlap) */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-[56px] left-full w-8 h-[2px] -translate-y-1/2 items-center justify-center z-10 pointer-events-none">
                    <svg className="w-full h-2 overflow-visible" fill="none">
                      <line
                        x1="0"
                        y1="4"
                        x2="32"
                        y2="4"
                        stroke="#3d0f1a"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-30"
                      />
                      <polygon
                        points="28,1 32,4 28,7"
                        fill="#3d0f1a"
                        className="opacity-45"
                      />
                    </svg>
                  </div>
                )}
                {/* Visual Blueprint Step Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/10 group-hover:bg-primary/40 transition-colors duration-500" />

                {/* Big Step Number */}
                <div className="flex justify-between items-baseline mb-8">
                  <span className="font-display text-5xl font-black text-primary/15 group-hover:text-primary/30 transition-colors select-none leading-none">
                    {step.num}
                  </span>
                  <span className="font-typewriter text-[8px] uppercase tracking-[0.25em] text-primary/50 font-medium">
                    {step.subtitle}
                  </span>
                </div>

                {/* Title and Narrative */}
                <h3 className="font-display text-xl font-bold mb-4 text-[#3d0f1a] group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] text-[#3d0f1a]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           PROJECT BRIEFING DOCK — CTA SEGMENT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#3d0f1a] text-white relative overflow-hidden">
        {/* Background Visual Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c0392b_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left Column: Text block containing title & narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-typewriter text-[12px] uppercase tracking-[0.4em] text-white font-bold block">
                03 — SYSTEM OPERATION
              </span>
              <h2 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tighter">
                COSTRUIAMO <br />
                <span className="text-primary italic">QUALCOSA DI UNICO.</span>
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl">
                Hai un'idea per una web app, un design system sartoriale o un e-commerce ad alte prestazioni? Colleghiamo le nostre stazioni per concretizzare la tua visione digitale.
              </p>
            </div>

            {/* Right Column: CTA Button trigger */}
            <div className="lg:col-span-5 flex lg:justify-end justify-start items-center">
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-8 p-8 border border-white/10 hover:border-primary/40 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 w-full max-w-md justify-between"
              >
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-white font-medium group-hover:text-primary transition-colors">
                  PARLIAMONE
                </span>
                <ArrowRight size={18} className="text-white group-hover:text-primary group-hover:translate-x-4 transition-all duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servizi;
