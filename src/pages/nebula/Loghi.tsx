import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Hexagon,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

interface BrandItem {
  id: string;
  title: string;
  year: string;
  images: string[];
  portfolioUrl: string;
  liveUrl?: string;
}

const BRAND_DATA: BrandItem[] = [
  {
    id: "villamasami",
    title: "Villa Masami",
    year: "2025",
    images: [
      "/assets/projects/villa-masami/insegna.webp",
      "/assets/loghi/villamasami/asciugamano.webp",
      "/assets/projects/villa-masami/struttura.webp",
      "/assets/projects/villa-masami/homepage.webp",
      "/assets/projects/villa-masami/camera-matrimoniale.webp",
      "/assets/projects/villa-masami/camera-singola.webp",
      "/assets/projects/villa-masami/camera-matrimoniale-2.webp",
      "/assets/projects/villa-masami/le-nostre-camere.webp",
      "/assets/projects/villa-masami/servizi.webp",
      "/assets/projects/villa-masami/contatti.webp",
    ],
    portfolioUrl: "/progetti/villamasami",
    liveUrl: "https://villamasami.it",
  },
  {
    id: "sicef",
    title: "Sicef",
    year: "2022",
    images: [
      "/assets/loghi/sicef/logo_1.webp",
      "/assets/loghi/sicef/logo_2.webp",
      "/assets/loghi/sicef/logo_3.webp",
      "/assets/loghi/sicef/logo_4.webp",
      "/assets/loghi/sicef/logo_5.webp",
    ],
    portfolioUrl: "",
    liveUrl: "https://www.sicef.eu/",
  },
  {
    id: "mapicreazioni",
    title: "Mapi Creazioni",
    year: "2022",
    images: [
      "/assets/loghi/mapicreazioni/logo_1.webp",
      "/assets/loghi/mapicreazioni/logo_2.webp",
      "/assets/loghi/mapicreazioni/logo_3.webp",
      "/assets/loghi/mapicreazioni/logo_4.webp",
      "/assets/loghi/mapicreazioni/logo_5.webp",
    ],
    portfolioUrl: "",
  },
];

const HolographicCarousel = ({
  images,
  brandTitle,
}: {
  images: string[];
  brandTitle: string;
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden group">
      {/* Immagine con AnimatePresence per cambio fluido */}
      <div className="absolute inset-0 z-0 bg-[#050505] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${brandTitle} Brand Identity Mockup ${currentIdx + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            onError={(e) => {
              const srcStr = images[currentIdx];
              if (srcStr.includes("villamasami")) {
                const filename = srcStr.split("/").pop();
                if (filename && filename.startsWith("masami-")) {
                  e.currentTarget.src = `/assets/projects/villa-masami/${filename}`;
                } else {
                  e.currentTarget.src = `/assets/projects/villa-masami/struttura.webp`;
                }
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Cornici Olografiche */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/30 pointer-events-none group-hover:border-[#d4af37]/80 transition-colors duration-500 m-4" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/30 pointer-events-none group-hover:border-[#d4af37]/80 transition-colors duration-500 m-4" />

      {/* Navigazione */}
      {images.length > 1 && (
        <>
          <MagneticWrapper
            strength={15}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20"
          >
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all duration-300"
              aria-label="Precedente"
            >
              <ChevronLeft size={20} />
            </button>
          </MagneticWrapper>

          <MagneticWrapper
            strength={15}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20"
          >
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all duration-300"
              aria-label="Successiva"
            >
              <ChevronRight size={20} />
            </button>
          </MagneticWrapper>

          {/* Indicatori telemetria in basso */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/40 border border-white/10 px-4 py-2 backdrop-blur-sm rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIdx
                    ? "bg-[#d4af37] w-4"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Vai a ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Contatore in alto a destra */}
      <span className="absolute top-6 right-6 z-20 font-mono text-[9px] uppercase tracking-[0.2em] bg-black/40 border border-white/10 px-3 py-1.5 text-white/80 backdrop-blur-md rounded-full">
        {String(currentIdx + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>
    </div>
  );
};

export const NebulaLoghi = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: t("projects_data.loghi.title", "Branding & Loghi"),
    description: t(
      "projects_data.loghi.description",
      "Identità visive e progettazione di loghi. Esplora i brand che ho contribuito a lanciare e consolidare.",
    ),
  });

  return (
    <div className="min-h-[100dvh] w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.contact"].map((k) => t(k))}
      />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* HERO SECTION */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/progetti"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-[#d4af37] transition-colors mb-12"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            {t("projects.all_projects", "TUTTI I PROGETTI")}
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                ARCHIVIO BRANDING
              </span>
              <div className="w-12 h-[1px] bg-[#d4af37]/30" />
            </div>

            <div className="flex flex-wrap items-baseline gap-x-6 pb-4 mb-4">
              <RevealText
                text="BRANDING &"
                delay={0.1}
                className="font-bricolage font-black tracking-tighter text-6xl md:text-8xl lg:text-[clamp(2rem,7vw,7rem)] leading-[0.9] text-white uppercase"
              />
              <RevealText
                text="Loghi."
                delay={0.2}
                className="font-fraunces italic font-light tracking-tight text-6xl md:text-8xl lg:text-[clamp(2rem,7vw,7rem)] leading-[0.9] text-[#d4af37] pr-2"
              />
            </div>

            <p className="font-outfit font-light text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl pl-8 border-l border-[#d4af37]/30">
              Esplora i brand che ho contribuito a creare e consolidare.
              Dall'ideazione del marchio fino alle applicazioni pratiche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERIA BRAND */}
      <section className="px-6 md:px-12 lg:px-24 py-32 z-10 relative">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {BRAND_DATA.map((brand, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={brand.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                {/* Visual Block */}
                <motion.div
                  className={`lg:col-span-7 ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <HolographicCarousel
                    images={brand.images}
                    brandTitle={brand.title}
                  />
                </motion.div>

                {/* Content Block */}
                <motion.div
                  className={`lg:col-span-5 ${isEven ? "order-2" : "order-2 lg:order-1"} flex flex-col justify-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {String(idx + 1).padStart(2, "0")} // {brand.year}
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10" />
                  </div>

                  <h2 className="font-bricolage font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight group-hover:text-[#d4af37] transition-colors duration-500">
                    {brand.title}
                  </h2>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-6">
                    {t(
                      `loghi.brands.${brand.id}.role`,
                      "Visual Identity & Logo Design",
                    )}
                  </span>

                  <p className="font-outfit font-light text-white/60 text-base md:text-lg leading-relaxed mb-10 whitespace-pre-line">
                    {t(
                      `loghi.brands.${brand.id}.description`,
                      "Creazione dell'identità visiva e coordinata.",
                    )}
                  </p>

                  {/* Azioni */}
                  <div className="flex flex-wrap gap-4">
                    {brand.portfolioUrl && (
                      <Link
                        to={brand.portfolioUrl}
                        className="group flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/[0.02] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all duration-300"
                      >
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white group-hover:text-[#d4af37] transition-colors font-bold">
                          VAI AL PROGETTO
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-[#d4af37] group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    )}

                    {brand.liveUrl && (
                      <a
                        href={brand.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-[#d4af37] hover:bg-white transition-colors duration-300"
                      >
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#080808] font-bold">
                          VISITA IL SITO
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-[#080808] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
      <NebulaFooter />
    </div>
  );
};

export default NebulaLoghi;
