import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import {
  ArrowRight,
  Box,
  Cpu,
  Eye,
  Globe,
  Layout,
  Server,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EditorialPackagesSection } from "@/components/EditorialPackagesSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useTranslation } from "react-i18next";

// Standard static framework specifications for each service card
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
      "HTML / CSS / JS",
      "PYTHON / DJANGO",
    ],
  },
  3: {
    core: "Git, Supabase, AI Tools (Gemini / GPT)",
    workflow: t("services.spec3_workflow"),
    kpi: t("services.spec3_kpi"),
    load: t("services.spec_strategy"),
    tools: [
      "PRODUCT MNGMT",
      "VIBE CODING",
      "AI WORKFLOWS",
      "STRATEGIA",
      "PROBLEM SOLVING",
    ],
  },
});

const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  const serviceSpecs = getServiceSpecs(t);
  const specs = serviceSpecs[service.id] || serviceSpecs[(idx % 3) + 1];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 80, damping: 18 },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSpecs(false);
      }}
      data-cursor="view"
      className="h-full relative border border-[#3d0f1a] p-6 md:p-8 bg-white shadow-[6px_6px_0px_rgba(61,15,26,0.05)] md:shadow-[10px_10px_0px_rgba(61,15,26,0.05)] hover:shadow-[6px_6px_0px_#c0392b] md:hover:shadow-[10px_10px_0px_#c0392b] transition-all duration-500 flex flex-col justify-between group overflow-hidden"
    >
      {/* Dynamic Scrolling Scanning laser beam */}
      <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#c0392b]/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Card Header telemetry */}
        <div className="flex justify-between items-start border-b border-[#3d0f1a]/10 pb-6 mb-8">
          <div className="flex flex-col">
            <span className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-primary font-bold">
              {service.subtitle || `SYSTEM_MODULE_0${idx + 1}`}
            </span>
            <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] text-[#3d0f1a]/65 font-medium mt-1">
              {t("services.focus")}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-[#3d0f1a]/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
            {service.icon || <Box size={18} />}
          </div>
        </div>

        {/* Central Title & Description */}
        <div className="space-y-6 mb-8">
          <div className="flex items-baseline gap-4 min-h-[80px] lg:min-h-[120px]">
            <span className="font-display text-4xl md:text-5xl font-black text-[#3d0f1a]/10 select-none">
              0{idx + 1}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#3d0f1a]">
              {service.title}
            </h3>
          </div>
          <p className="font-body text-[15px] text-[#3d0f1a]/70 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Action button specs expander */}
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            data-cursor="pointer"
            className="font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a] border border-[#3d0f1a]/20 hover:bg-[#3d0f1a]/5 hover:border-[#3d0f1a]/50 px-3 py-1.5 transition-all duration-300 relative z-20 font-bold cursor-pointer"
          >
            {showSpecs
              ? t("services.close_details")
              : t("services.open_details")}
          </button>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/75 animate-ping" />
            <span className="font-mono text-[7px] text-[#3d0f1a]/65">
              {t("services.aligned")}
            </span>
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
              <div className="font-mono text-[10px] divide-y divide-primary/10 bg-[#f5f2ed] p-5 border border-primary/15 space-y-3 shadow-inner">
                <div className="flex justify-between pb-2">
                  <span className="text-[#3d0f1a]/65 uppercase tracking-widest text-[8px]">
                    {t("services.tools")}
                  </span>
                  <span className="text-[#3d0f1a] font-semibold text-right">
                    {specs.core}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/65 uppercase tracking-widest text-[8px]">
                    {t("services.methodology")}
                  </span>
                  <span className="text-[#3d0f1a] font-semibold text-right">
                    {specs.workflow}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/65 uppercase tracking-widest text-[8px]">
                    {t("services.key_objective")}
                  </span>
                  <span className="text-primary font-bold text-right">
                    {specs.kpi}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3d0f1a]/65 uppercase tracking-widest text-[8px]">
                    {t("services.approach")}
                  </span>
                  <span className="text-green-700 font-black text-right">
                    {specs.load}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[#3d0f1a]/65 uppercase tracking-widest text-[8px] block mb-2">
                    {t("services.skills")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {specs.tools.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-[#3d0f1a] border border-[#3d0f1a]/10 px-2 py-0.5 rounded-sm text-[8px] uppercase tracking-wider font-bold"
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
      </div>

      {/* Deliverables List */}
      <div className="space-y-4 pt-6 border-t border-[#3d0f1a]/10 relative z-10 mt-auto">
        <span className="font-typewriter text-[8px] uppercase tracking-[0.3em] text-primary block font-bold">
          {t("services.key_services")}
        </span>
        <ul className="space-y-2.5">
          {(
            service.deliverables || [
              "Strategia Digitale",
              "Deployment",
              "Ottimizzazioni",
            ]
          ).map((del: string, dIdx: number) => (
            <li key={dIdx} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-primary/60" />
              <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a]/80 font-bold">
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
  const { t } = useTranslation();
  usePageMeta({
    title: "Servizi",
    description:
      "UI/UX Design, sviluppo web su misura e tech product management. Scopri come posso trasformare la tua idea in un prodotto digitale di qualità.",
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

  const steps = [
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

  return (
    <div className="min-h-[100dvh] bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — SERVICES GATEWAY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-52 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[20vw] font-black uppercase tracking-tighter">
            {t("services.watermark")}
          </span>
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
                  <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                    {t("services.what_i_offer")}
                  </span>
                  <div className="w-12 h-[1px] bg-primary/20" />
                </div>
                <h1 className="flex whitespace-nowrap font-display text-[10vw] lg:text-[clamp(2rem,6.2vw,6.2rem)] font-bold leading-[1.1] md:leading-[0.85] tracking-tighter text-[#3d0f1a]">
                  <RevealText text={t("services.title_1")} delay={0.1} />
                  <span className="ml-2 sm:ml-4">
                    <RevealText
                      text={t("services.title_2")}
                      delay={0.2}
                      className="text-primary italic pr-2"
                    />
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Narrative Block */}
            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-body text-lg text-[#3d0f1a]/80 leading-relaxed pl-8 border-l border-primary/25"
              >
                {t("services.description")}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           SERVICES DETAILED LEDGER — INTERACTIVE CARD MATRIX
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#3d0f1a]/10">
        <div className="mb-16">
           <div className="flex items-center gap-4 mb-6">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                 Le mie aree di competenza
              </span>
              <div className="w-12 h-[1px] bg-primary/20" />
           </div>
           <h2 className="font-display text-3xl md:text-5xl font-bold text-[#3d0f1a] mt-2">
              Il motore dei <span className="italic text-primary">tuoi progetti</span>
           </h2>
           <p className="mt-6 font-body text-lg text-[#3d0f1a]/70 max-w-2xl">
              Le skill verticali che metto in campo per trasformare la tua visione in ecosistemi stabili, belli da vedere e performanti.
           </p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
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

      {/* ───────────────────────────────────────────────────────────────────
           ECOSISTEMI SU MISURA — LE TRE OFFERTE (SUBSCRIPTION STYLE)
           ─────────────────────────────────────────────────────────────────── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <div className="flex items-center gap-4 justify-start mb-6">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
              {t("services.packages_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3d0f1a] leading-tight tracking-tighter max-w-3xl mx-0">
            {t("services.packages_title")} <span className="italic text-primary">{t("services.packages_title_highlight")}</span>
          </h2>
          <p className="mt-6 font-body text-lg text-[#3d0f1a]/70 max-w-2xl">
            {t("services.packages_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* TIER 1: CMS */}
          <div className="border border-[#3d0f1a] bg-[#f5f2ed] p-8 flex flex-col group hover:bg-white hover:border-primary transition-all duration-300 shadow-[6px_6px_0px_rgba(61,15,26,0.05)] hover:shadow-[6px_6px_0px_#c0392b]">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-[#3d0f1a] mb-2">{t("services.pkg_cms_name")}</h3>
              <p className="font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/65 font-bold mb-6">{t("services.pkg_cms_tagline")}</p>
              <p className="font-body text-[14px] text-[#3d0f1a]/70 min-h-[60px]">
                {t("services.pkg_cms_desc")}
              </p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-[#3d0f1a]/10">
              <span className="font-display text-3xl font-black text-[#3d0f1a]">{t("services.pkg_cms_time")}</span>
              <span className="font-body text-sm text-[#3d0f1a]/65 ml-2">{t("services.pkg_cms_time_unit")}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_cms_p1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_cms_p2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_cms_p3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_cms_p4")}</span>
              </li>
            </ul>

            <Link to="/sviluppo-cms" className="w-full py-4 border border-[#3d0f1a] text-center font-typewriter text-[10px] uppercase tracking-[0.2em] font-bold text-[#3d0f1a] group-hover:bg-[#3d0f1a] group-hover:text-white transition-colors duration-300 inline-block">
              {t("services.pkg_cms_btn")}
            </Link>
          </div>

          {/* TIER 2: MVP */}
          <div className="border-2 border-primary bg-white p-8 flex flex-col group relative shadow-[8px_8px_0px_#c0392b] md:-mt-4 md:mb-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-typewriter text-[9px] uppercase tracking-widest px-4 py-1.5 font-bold whitespace-nowrap">
              {t("services.pkg_mvp_badge")}
            </div>
            <div className="mb-8 mt-2">
              <h3 className="font-display text-2xl font-bold text-[#3d0f1a] mb-2">{t("services.pkg_mvp_name")}</h3>
              <p className="font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/65 font-bold mb-6">{t("services.pkg_mvp_tagline")}</p>
              <p className="font-body text-[14px] text-[#3d0f1a]/70 min-h-[60px]">
                {t("services.pkg_mvp_desc")}
              </p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-[#3d0f1a]/10">
              <span className="font-display text-3xl font-black text-[#3d0f1a]">{t("services.pkg_mvp_time")}</span>
              <span className="font-body text-sm text-[#3d0f1a]/65 ml-2">{t("services.pkg_mvp_time_unit")}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_mvp_p1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_mvp_p2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_mvp_p3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_mvp_p4")}</span>
              </li>
            </ul>

            <Link to="/sviluppo-mvp" className="w-full py-4 bg-primary text-white text-center font-typewriter text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#3d0f1a] transition-colors duration-300 inline-block">
              {t("services.pkg_mvp_btn")}
            </Link>
          </div>

          {/* TIER 3: Custom */}
          <div className="border border-[#3d0f1a] bg-[#f5f2ed] p-8 flex flex-col group hover:bg-white hover:border-primary transition-all duration-300 shadow-[6px_6px_0px_rgba(61,15,26,0.05)] hover:shadow-[6px_6px_0px_#c0392b]">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-[#3d0f1a] mb-2">{t("services.pkg_custom_name")}</h3>
              <p className="font-typewriter text-[9px] uppercase tracking-widest text-[#3d0f1a]/65 font-bold mb-6">{t("services.pkg_custom_tagline")}</p>
              <p className="font-body text-[14px] text-[#3d0f1a]/70 min-h-[60px]">
                {t("services.pkg_custom_desc")}
              </p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-[#3d0f1a]/10">
              <span className="font-display text-3xl font-black text-[#3d0f1a]">{t("services.pkg_custom_time")}</span>
              <span className="font-body text-sm text-[#3d0f1a]/65 ml-2">{t("services.pkg_custom_time_unit")}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_custom_p1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_custom_p2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_custom_p3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-[14px] text-[#3d0f1a]/80">{t("services.pkg_custom_p4")}</span>
              </li>
            </ul>

            <Link to="/sviluppo-custom" className="w-full py-4 border border-[#3d0f1a] text-center font-typewriter text-[10px] uppercase tracking-[0.2em] font-bold text-[#3d0f1a] group-hover:bg-[#3d0f1a] group-hover:text-white transition-colors duration-300 inline-block">
              {t("services.pkg_custom_btn")}
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           WORKFLOW BLUEPRINT — STEP-BY-STEP PROCESS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white border-y border-[#3d0f1a]/5 relative">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto relative">
          {/* Header section */}
          <div className="mb-16 relative z-10">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium mb-4 block">
              {t("services.workflow_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20 mb-8" />
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter text-[#3d0f1a]">
              <RevealText text={t("services.workflow_title_1")} delay={0.1} />
              <RevealText
                text={t("services.workflow_title_2")}
                delay={0.3}
                className="text-primary italic pr-2"
              />
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
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                data-cursor="pointer"
                className="group relative p-8 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]"
              >
                {/* Visual Blueprint Step Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />

                {/* Big Step Number */}
                <div className="flex justify-between items-baseline mb-8">
                  <span className="font-display text-5xl font-black text-[#3d0f1a]/15 group-hover:text-primary transition-colors select-none leading-none">
                    {step.num}
                  </span>
                  <span className="font-typewriter text-[8px] uppercase tracking-[0.25em] text-primary/80 font-bold">
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
      <Footer />
    </div>
  );
};

export default Servizi;
