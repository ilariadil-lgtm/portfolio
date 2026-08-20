import { useEffect, useState } from "react";
import { Link } from "@/components/Link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { ProjectNavigation } from "@/components/ProjectNavigation";

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

// Carousel per il brand singolo
const BrandMockupCarousel = ({
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
    <div className="relative w-full aspect-[3/2] bg-cream border border-ink shadow-brutal-10-ink overflow-hidden group">
      {/* Immagine con AnimatePresence per cambio fluido */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${brandTitle} Brand Identity Mockup ${currentIdx + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              // Fallback intelligente se le immagini personalizzate non sono ancora state inserite o falliscono
              const srcStr = images[currentIdx];
              if (srcStr.includes("villamasami")) {
                const filename = srcStr.split("/").pop();
                if (filename && filename.startsWith("masami-")) {
                  e.currentTarget.src = `/assets/projects/villa-masami/${filename}`;
                } else {
                  e.currentTarget.src = `/assets/projects/villa-masami/struttura.webp`;
                }
              } else {
                const generalFallbacks = [
                  "/assets/projects/villa-masami/masami-5.webp",
                  "/assets/projects/villa-masami/masami-6.webp",
                  "/assets/projects/villa-masami/masami-7.webp",
                  "/assets/projects/villa-masami/masami-8.webp",
                ];
                e.currentTarget.src =
                  generalFallbacks[currentIdx % generalFallbacks.length];
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Brackets decorativi brutalisti */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-ink/20 pointer-events-none group-hover:border-primary transition-colors" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-ink/20 pointer-events-none group-hover:border-primary transition-colors" />

      {/* Controlli di navigazione (visibili se ci sono più immagini) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-ink bg-cream hover:bg-ink hover:text-cream flex items-center justify-center transition-all duration-300 shadow-brutal-4 active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Immagine precedente"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-ink bg-cream hover:bg-ink hover:text-cream flex items-center justify-center transition-all duration-300 shadow-brutal-4 active:-translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Immagine successiva"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicatori a pallino brutalista in basso a destra */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 bg-cream/90 border border-ink/20 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                className={`w-2 h-2 rounded-full border border-ink transition-all duration-300 ${
                  idx === currentIdx
                    ? "bg-crimson scale-110"
                    : "bg-transparent hover:bg-ink/30"
                }`}
                aria-label={`Vai all'immagine ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Contatore numerico in alto a sinistra */}
      <span className="absolute top-4 left-4 z-10 font-typewriter text-[9px] bg-cream border border-ink/20 px-2 py-1 text-ink font-bold">
        {String(currentIdx + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>
    </div>
  );
};

export const EditorialLoghi = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: "Branding & Loghi",
    description: t("loghi.meta_desc"),
  });

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-56 md:pt-36 pb-20 border-b border-ink/10">
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

        {/* Back Link */}
        <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/progetti"
              className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink/65 hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform"
              />
              {t("project_detail.back_to_archive")}
            </Link>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 mt-10">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-6">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block whitespace-nowrap"
              >
                {t("loghi.hero_label")}
              </motion.span>
            </div>

            <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
              <div className="overflow-hidden pt-4 pb-24 -mb-20 w-max">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block text-[8vw] lg:text-[clamp(2rem,5vw,5rem)] font-bold text-ink"
                >
                  Branding &{" "}
                  <span className="text-primary italic pr-2">Loghi</span>.
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 font-body text-base md:text-lg text-ink/70 leading-relaxed border-l-2 border-primary/20 pl-6 lg:pl-8 py-2 max-w-2xl"
            >
              {t("loghi.hero_desc")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           BRANDS GRID SHOWCASE
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {BRAND_DATA.map((brand, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={brand.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
              >
                {/* Visual Showcase Block */}
                <motion.div
                  className={`lg:col-span-7 ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <BrandMockupCarousel
                    images={brand.images}
                    brandTitle={brand.title}
                  />
                </motion.div>

                {/* Text Block */}
                <motion.div
                  className={`lg:col-span-5 ${isEven ? "order-2" : "order-2 lg:order-1"} flex flex-col justify-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.15 }}
                >
                  <div className="space-y-6">
                    {/* Index & Stack info */}
                    <div className="flex items-center gap-4">
                      <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-primary/80 font-bold">
                        {String(idx + 1).padStart(2, "0")} — {brand.year}
                      </span>
                      <div className="flex-1 h-[1px] bg-primary/10" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter text-ink">
                      {brand.title}
                    </h2>

                    <span className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-primary font-bold block pt-1">
                      {t(`loghi.brands.${brand.id}.role`)}
                    </span>

                    <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed pt-2 whitespace-pre-line">
                      {t(`loghi.brands.${brand.id}.description`)}
                    </p>

                    {/* Links row */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-ink/10">
                      {/* Internal portfolio details link */}
                      {brand.portfolioUrl && (
                        <Link
                          to={brand.portfolioUrl}
                          className="group inline-flex items-center gap-2.5 font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink font-bold hover:text-primary transition-colors border border-ink/20 hover:border-primary px-5 py-2.5 bg-cream"
                        >
                          {t("loghi.portfolio_site")}
                          <ArrowRight
                            size={13}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      )}

                      {/* Live site external link */}
                      {brand.liveUrl && (
                        <a
                          href={brand.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 font-typewriter text-[10px] uppercase tracking-[0.3em] text-white font-bold bg-ink hover:bg-primary transition-colors px-5 py-2.5 shadow-[4px_4px_0px_rgba(61,15,26,0.15)] hover:shadow-none active:translate-x-1 active:translate-y-1"
                        >
                          {t("loghi.visit_site")}
                          <ArrowUpRight
                            size={13}
                            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════════════════
           BOTTOM NAVIGATION
           ═══════════════════════════════════════════════════════════════════ */}
      <ProjectNavigation
        prev={{ url: "/progetti/villamima", title: "Villa Mima" }}
        next={{ url: "/progetti/storagehub", title: "Storage Hub" }}
      />

      <FloatingCTA url="" />
      <Footer />
    </div>
  );
};

export default EditorialLoghi;
