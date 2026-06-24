import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import React, { useEffect, useState, useRef, Suspense } from "react";
const HeroCanvas = React.lazy(() =>
  import("./components/HeroCanvas").then((module) => ({
    default: module.HeroCanvas,
  })),
);
import { api } from "@/lib/api";
import { Box, Cpu, Globe, Layout, ChevronRight, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const getServiceSpecs = (t: any): Record<number, any> => ({
  1: {
    core: "Figma & Creative Suite",
    workflow: t("services.spec1_workflow"),
    kpi: t("services.spec1_kpi"),
    load: t("services.spec_user_centric"),
    tools: ["Figma", "Adobe CC", "Responsive design", "Branding"],
  },
  2: {
    core: "React, Vite, Tailwind, Python, Django, PHP, Javascript",
    workflow: t("services.spec2_workflow"),
    kpi: t("services.spec2_kpi"),
    load: t("services.spec_logic"),
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "WordPress",
      "Prestashop",
      "PYTHON / DJANGO",
    ],
  },
  3: {
    core: "Git, Supabase, AI Tools (Gemini / GPT)",
    workflow: t("services.spec3_workflow"),
    kpi: t("services.spec3_kpi"),
    load: t("services.spec_strategy"),
    tools: ["PRODUCT MNGMT", "VIBE CODING", "AI WORKFLOWS", "STRATEGIA"],
  },
});

const getSteps = (t: any) => [
  {
    num: "01",
    title: t("services.step1_title"),
    subtitle: t("services.step1_sub"),
    description: t("services.step1_desc"),
  },
  {
    num: "02",
    title: t("services.step2_title"),
    subtitle: t("services.step2_sub"),
    description: t("services.step2_desc"),
  },
  {
    num: "03",
    title: t("services.step3_title"),
    subtitle: t("services.step3_sub"),
    description: t("services.step3_desc"),
  },
  {
    num: "04",
    title: t("services.step4_title"),
    subtitle: t("services.step4_sub"),
    description: t("services.step4_desc"),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPOTLIGHT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const { t } = useTranslation();
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

  const serviceSpecs = getServiceSpecs(t);
  const specs = serviceSpecs[service.id] || serviceSpecs[(idx % 3) + 1];

  return (
    <motion.div
      ref={divRef}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 80, damping: 18 },
        },
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
      className="h-full relative border border-white/5 p-8 md:p-12 bg-white/[0.02] backdrop-blur-md hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col justify-between group overflow-hidden rounded-3xl"
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

      {/* Numero in background (Watermark) */}
      <div className="absolute -bottom-4 -right-2 font-bricolage text-[140px] leading-none font-black text-white/[0.04] group-hover:text-[#d4af37]/[0.08] transition-colors duration-500 select-none pointer-events-none z-0">
        0{idx + 1}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 relative group-hover:border-[#d4af37]/20 transition-colors duration-500">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
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
            <span className="font-fraunces italic font-light text-5xl md:text-6xl text-white/5 group-hover:text-[#d4af37]/10 transition-colors duration-700 select-none pr-2">
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
        <div className="mb-8 flex justify-between items-center relative z-10 mt-6">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/60 font-mono text-[9px] uppercase tracking-[0.2em] hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 transition-all cursor-pointer flex items-center gap-2"
          >
            {showSpecs
              ? `- ${t("services.close_details")}`
              : `+ ${t("services.open_details")}`}
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
              <div className="font-mono text-[9px] divide-y divide-white/5 bg-black/40 backdrop-blur-md p-6 border border-white/5 rounded-2xl space-y-4">
                <div className="flex justify-between pb-3 items-center">
                  <span className="text-white/40 uppercase tracking-[0.2em]">
                    {t("services.tools")}:
                  </span>
                  <span className="text-[#d4af37] text-right bg-[#d4af37]/10 px-2 py-1">
                    {specs.core}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-white/40 uppercase tracking-[0.2em]">
                    {t("services.methodology")}:
                  </span>
                  <span className="text-white/80 text-right">
                    {specs.workflow}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-white/40 uppercase tracking-[0.2em]">
                    {t("services.key_objective")}:
                  </span>
                  <span className="text-[#d4af37] text-right">{specs.kpi}</span>
                </div>
                <div className="pt-3">
                  <span className="text-white/40 uppercase tracking-[0.2em] block mb-3">
                    {t("services.skills")}:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {specs.tools.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="border border-white/10 bg-white/[0.02] text-white/70 px-2 py-1 rounded-full text-[8px] uppercase tracking-[0.1em]"
                      >
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
            {(
              service.deliverables || [
                "Strategia Digitale",
                "Deployment",
                "Ottimizzazioni",
              ]
            ).map((del: string, dIdx: number) => (
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
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT DATA TERMINAL (WORKFLOW)
// ─────────────────────────────────────────────────────────────────────────────
const WorkflowDataTerminal = () => {
  const { t } = useTranslation();
  const steps = getSteps(t);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-[#d4af37]/20 hover:bg-white/[0.03] transition-all duration-700">
      {/* Navigation Column */}
      <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-6 block border-b border-white/10 pb-4">
          {t("services.workflow_label")}
        </span>

        <div className="flex flex-col space-y-1">
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left py-4 px-5 rounded-2xl transition-all duration-500 relative flex items-center justify-between overflow-hidden ${
                  isActive
                    ? "border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/10 to-transparent shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]"
                    : "border border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-fraunces italic font-light text-2xl transition-colors duration-300 ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/20 group-hover:text-white/50"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`font-bricolage font-bold tracking-tight text-xl md:text-2xl transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "text-[#d4af37] opacity-100 translate-x-0"
                      : "text-white/10 opacity-0 -translate-x-4"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Display Panel */}
      <div className="lg:col-span-7 flex items-center relative z-10 min-h-[400px]">
        <div className="w-full h-full p-8 md:p-14 border border-white/5 bg-black/40 backdrop-blur-xl relative overflow-hidden flex flex-col justify-center rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          {/* Terminal Top Bar */}
          <div className="absolute top-0 left-0 w-full h-8 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.01]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/20">
              SYS.PROCESS_VIEWER
            </span>
          </div>

          {/* Background grid for the display */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none mt-8" />

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
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                  {steps[activeIndex].subtitle}
                </span>
              </div>

              <h3 className="font-bricolage font-bold tracking-tight text-3xl md:text-5xl text-white mb-6 leading-tight">
                {steps[activeIndex].title}
              </h3>

              <p className="font-outfit font-light text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
                {steps[activeIndex].description}
              </p>

              {/* Fake loading bar / telemetry */}
              <div className="mt-12 w-full pt-6 border-t border-white/10 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">
                    {t("services.workflow_label")}
                  </span>
                  <span className="font-mono text-[8px] text-[#d4af37] tracking-widest animate-pulse">
                    100%
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                  />
                </div>
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
  const { t } = useTranslation();
  usePageMeta({
    title: "Servizi",
    description:
      "UI/UX Design, sviluppo web su misura e tech product management.",
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
      title: t("services.fallback_service1_title"),
      subtitle: t("services.fallback_service1_sub"),
      description: t("services.fallback_service1_desc"),
      deliverables: [
        t("services.fallback_service1_del1"),
        t("services.fallback_service1_del2"),
        t("services.fallback_service1_del3"),
        t("services.fallback_service1_del4"),
      ],
      icon: <Layout size={24} />,
    },
    {
      id: 2,
      title: t("services.fallback_service2_title"),
      subtitle: t("services.fallback_service2_sub"),
      description: t("services.fallback_service2_desc"),
      deliverables: [
        t("services.fallback_service2_del1"),
        t("services.fallback_service2_del2"),
        t("services.fallback_service2_del3"),
        t("services.fallback_service2_del4"),
      ],
      icon: <Cpu size={24} />,
    },
    {
      id: 3,
      title: t("services.fallback_service3_title"),
      subtitle: t("services.fallback_service3_sub"),
      description: t("services.fallback_service3_desc"),
      deliverables: [
        t("services.fallback_service3_del1"),
        t("services.fallback_service3_del2"),
        t("services.fallback_service3_del3"),
        t("services.fallback_service3_del4"),
      ],
      icon: <Globe size={24} />,
    },
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div className="min-h-[100dvh] w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative md:pl-20">
      <NebulaNav />
      <ScrollIndicator
        sections={[
          "scroll.hero",
          "scroll.services",
          "scroll.process",
          "scroll.contact",
        ].map((k) => t(k))}
      />

      {/* ═════════════════════════════════════════════════════
          GLOBAL BACKGROUNDS (NEBULA AESTHETIC)
          ═════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <Suspense fallback={<div className="absolute inset-0 bg-[#080808]" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-70">
        <motion.div
          animate={{
            x: ["0%", "10%", "0%"],
            y: ["0%", "5%", "0%"],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#d4af37]/10 to-[#3d0f1a]/10 blur-[130px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-10%", "0%"],
            y: ["0%", "-5%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-900/10 to-[#3d0f1a]/5 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-rose-900/5 blur-[120px] mix-blend-screen"
        />
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

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
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4af37] flex items-center gap-2">
                    <span className="text-[10px]">✦</span>{" "}
                    {t("services.what_i_offer")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-6 pb-4">
                  <RevealText
                    text={t("services.title_1", "I MIEI")}
                    delay={0.1}
                    className="font-bricolage font-bold tracking-wider text-fluid-h1 leading-[1.1] text-white whitespace-nowrap uppercase"
                  />
                  <RevealText
                    text={t("services.title_2", "servizi.")}
                    delay={0.2}
                    className="font-fraunces italic font-light tracking-wider text-fluid-h1 leading-[1.1] text-[#d4af37] whitespace-nowrap pr-2"
                  />
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-outfit font-light text-white/60 text-lg leading-relaxed pl-8 border-l border-[#d4af37]/30 backdrop-blur-sm"
              >
                Un buon prodotto digitale non nasce separando il design dallo
                sviluppo. Creo soluzioni partendo da una forte sensibilità
                visiva, traducendole in codice solido e guidando l'intero
                percorso con una strategia chiara. Questa mappa delinea come
                posso affiancarti in ogni fase.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10 relative">
        <div className="mb-16">
           <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium flex items-center gap-2">
                 <span className="text-[10px]">✦</span> Le mie aree di competenza
              </span>
              <div className="w-12 h-[1px] bg-[#d4af37]/20" />
           </div>
           <h2 className="font-bricolage text-3xl md:text-5xl font-bold text-white mt-2">
              Il motore dei <span className="font-fraunces italic font-light text-[#d4af37]">tuoi progetti</span>
           </h2>
           <p className="mt-6 font-outfit font-light text-lg text-white/60 max-w-2xl">
              Le skill verticali che metto in campo per trasformare la tua visione in ecosistemi stabili, belli da vedere e performanti.
           </p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
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


      {/* ───────────────────────────────────────────────────────────────────
           ECOSISTEMI SU MISURA — LE TRE OFFERTE (SUBSCRIPTION STYLE NEBULA)
           ─────────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-32 pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <div className="flex items-center gap-4 justify-start mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium flex items-center gap-2">
                <span className="text-[10px]">✦</span> I miei pacchetti
              </span>
              <div className="w-12 h-[1px] bg-[#d4af37]/20" />
            </div>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-0">
              Scegli l'ecosistema perfetto per <span className="font-fraunces italic font-light text-[#d4af37]">la tua fase di business.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TIER 1: CMS */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 flex flex-col group hover:bg-white/[0.04] hover:border-[#d4af37]/30 transition-all duration-500 rounded-3xl relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-bricolage text-2xl font-bold text-white mb-2">CMS</h3>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#d4af37] font-bold mb-6">Autonomia & Performance</p>
                  <p className="font-outfit font-light text-[14px] text-white/60 min-h-[60px]">
                    Siti vetrina ed e-commerce in totale autonomia per PMI e brand.
                  </p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="font-bricolage text-3xl font-black text-white">4-6</span>
                  <span className="font-outfit font-light text-sm text-white/40 ml-2">settimane</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">UI/UX Design personalizzato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Sviluppo front-end reattivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Setup piattaforma headless o ibrida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Training per gestione contenuti</span>
                  </li>
                </ul>

                <Link to="/cms-details" className="w-full py-4 border border-white/10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-[#d4af37] group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/5 rounded-full transition-all duration-300 inline-block">
                  Scopri il pacchetto
                </Link>
              </div>
            </div>

            {/* TIER 2: MVP */}
            <div className="border border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/10 to-white/[0.02] backdrop-blur-md p-8 flex flex-col group relative shadow-[0_0_40px_rgba(212,175,55,0.15)] md:-mt-4 md:mb-4 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black font-mono text-[9px] uppercase tracking-widest px-4 py-1.5 font-bold whitespace-nowrap rounded-b-lg z-20">
                Più richiesto
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full mt-4">
                <div className="mb-8">
                  <h3 className="font-bricolage text-2xl font-bold text-white mb-2">MVP</h3>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#d4af37] font-bold mb-6">Validazione rapida</p>
                  <p className="font-outfit font-light text-[14px] text-white/60 min-h-[60px]">
                    Sviluppo accelerato del Core Loop per validare l'idea sul mercato.
                  </p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="font-bricolage text-3xl font-black text-white">8-10</span>
                  <span className="font-outfit font-light text-sm text-white/40 ml-2">settimane</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Workshop di scoping MVP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Prototipazione interattiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Sviluppo core-features scalabili</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Setup base Analytics/Tracking</span>
                  </li>
                </ul>

                <Link to="/mvp-details" className="w-full py-4 bg-[#d4af37] text-black text-center font-mono text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white rounded-full transition-colors duration-300 inline-block">
                  Scopri il pacchetto
                </Link>
              </div>
            </div>

            {/* TIER 3: Custom */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 flex flex-col group hover:bg-white/[0.04] hover:border-[#d4af37]/30 transition-all duration-500 rounded-3xl relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-bricolage text-2xl font-bold text-white mb-2">Custom</h3>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#d4af37] font-bold mb-6">Infrastruttura dedicata</p>
                  <p className="font-outfit font-light text-[14px] text-white/60 min-h-[60px]">
                    Ecosistemi complessi per startup o corporate senza limiti tecnici.
                  </p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className="font-bricolage text-3xl font-black text-white">+3</span>
                  <span className="font-outfit font-light text-sm text-white/40 ml-2">mesi</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Architettura Data & Backend custom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Sviluppo API proprietarie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Integrazione con sistemi aziendali</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Hexagon size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="font-outfit font-light text-[14px] text-white/80">Dashboard di amministrazione</span>
                  </li>
                </ul>

                <Link to="/custom-details" className="w-full py-4 border border-white/10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-[#d4af37] group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/5 rounded-full transition-all duration-300 inline-block">
                  Scopri il pacchetto
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Compact Data Terminal Workflow */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-48 pt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
          <div className="mb-16 text-left w-full">
            <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium mb-4 block">
              02 — {t("services.workflow_label")}
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 mb-6">
              <RevealText
                text={t("services.workflow_title_1")}
                delay={0.1}
                className="font-bricolage font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-white uppercase"
              />
              <RevealText
                text={t("services.workflow_title_2")}
                delay={0.3}
                className="font-fraunces italic font-light text-4xl md:text-5xl lg:text-6xl text-[#d4af37] pr-2"
              />
            </div>
            <p className="font-outfit font-light text-white/50 text-lg max-w-2xl">
              {t("services.workflow_description")}
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
      <NebulaFooter />
    </div>
  );
};

export default Servizi;
