import React, { useState } from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BrandItem {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  images: string[];
  portfolioUrl: string;
  liveUrl?: string;
}

const BRAND_DATA: BrandItem[] = [
  {
    id: "villamasami",
    title: "Villa Masami",
    role: "Brand & Logo Design • UI/UX Design • Web",
    year: "2025",
    description: "L'identità di Villa Masami nasce dalla sintesi tra l'eleganza classica del barocco siciliano e una sensibilità minimale contemporanea. Dal design del logo, basato su linee armoniche e proporzioni perfette, fino alle linee guida di stile, ai materiali fisici e alla presenza digitale multilingua.",
    images: [
      "/assets/loghi/villamasami/insegna.webp",
      "/assets/loghi/villamasami/asciugamano.webp",
      "/assets/loghi/villamasami/struttura.webp",
      "/assets/loghi/villamasami/homepage.webp",
      "/assets/loghi/villamasami/camera-matrimoniale.webp",
      "/assets/loghi/villamasami/camera-singola.webp",
      "/assets/loghi/villamasami/camera-matrimoniale-2.webp",
      "/assets/loghi/villamasami/le-nostre-camere.webp",
      "/assets/loghi/villamasami/servizi.webp",
      "/assets/loghi/villamasami/contatti.webp",
    ],
    portfolioUrl: "/progetti/villamasami",
    liveUrl: "https://villamasami.it",
  },
  {
    id: "sicef",
    title: "Sicef",
    role: "Brand Identity • Corporate & Logo Design",
    year: "2022",
    description: `Il logo Sicef è caratterizzato da un design pulito che lo rende facilmente riconoscibile. La scelta di utilizzare il carattere Lato conferisce al logo un’immagine forte e decisa. In particolare, la “s” con il taglio diagonale permette a quest’ultima di poter essere utilizzata come icona rappresentativa dell’azienda, grazie alla sua forma semplice.

La presenza della dicitura “ingegneria e architettura” sottolinea l’attività dell’azienda, mentre il colore predominante, il nero, trasmette un senso di affidabilità e professionalità.`,
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
    role: "Visual Identity • Branding & Design",
    year: "2022",
    description: `Il logo presenta un design moderno, con un tratto sottile ed elegante. Il font utilizzato, Sacramento, conferisce un aspetto minimalista ed essenziale. 

La presenza del pittogramma, l’ago e il filo, rappresentano il valore dell’azienda stessa nel creare i propri prodotti totalmente a mano. Inoltre, il pittogramma diventa parte integrante del logo creando così un senso di armonia e continuità.`,
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

const NebulaBrandCarousel = ({ images, brandTitle }: { images: string[]; brandTitle: string }) => {
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
    <div className="relative w-full aspect-[3/2] rounded-[2rem] border border-white/10 bg-[#030712] overflow-hidden group">
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
        SYS.VIEW.{String(currentIdx).padStart(2, '0')}
      </div>
      
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={`${brandTitle} visual ${currentIdx}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            onError={(e) => {
              const srcStr = images[currentIdx];
              if (srcStr.includes("villamasami")) {
                const filename = srcStr.split("/").pop();
                if (filename && filename.startsWith("masami-")) {
                  e.currentTarget.src = `/assets/projects/villa-masami/${filename}`;
                } else {
                  e.currentTarget.src = `/assets/projects/villa-masami/homepage.webp`;
                }
              } else {
                e.currentTarget.src = "/assets/project-visio.png";
              }
            }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-[#030712]/50 backdrop-blur hover:bg-cyan-500/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/10 bg-[#030712]/50 backdrop-blur hover:bg-cyan-500/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
};

export const NebulaLoghi = () => {
  return (
    <NebulaProjectLayout
      title="Branding & Loghi"
      type="BRAND GUIDELINES • VISUAL IDENTITY"
      description={
        <p>
          Una selezione curata di marchi ed elementi di identità visiva. Non una serie di semplici segni grafici, ma veri e propri ecosistemi visivi progettati per dare forma, coerenza e valore unico a storie d'eccellenza, integrati con logiche Sci-Fi e architetture scalabili.
        </p>
      }
      techList={["Illustrator", "Photoshop", "Brand Identity", "Visual System"]}
      role="Art Director"
      year="Multi-Year"
    >
      
      <div className="space-y-24">
        {BRAND_DATA.map((brand, idx) => (
          <div key={brand.id} className="relative border border-white/5 bg-white/[0.02] rounded-3xl p-6 lg:p-8">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 bg-[#030712] border border-cyan-500/30 text-cyan-400 font-mono text-[10px] uppercase tracking-widest rounded-full">
              TARGET_ID: {brand.id.toUpperCase()}
            </div>
            
            <div className="flex flex-col gap-6 mb-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest border border-slate-700/50 px-2 py-0.5 rounded">
                    Y.{brand.year}
                  </span>
                  <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">
                    {brand.role}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-sans font-bold text-slate-100 tracking-tight">
                  {brand.title}
                </h2>
              </div>
              
              <div className="font-sans text-sm md:text-base text-slate-400 leading-relaxed whitespace-pre-wrap border-l-2 border-cyan-900/50 pl-4 py-1 max-w-3xl">
                {brand.description}
              </div>
            </div>

            <NebulaBrandCarousel images={brand.images} brandTitle={brand.title} />

            {/* Azioni del dossier */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/5">
              {brand.portfolioUrl && (
                <Link
                  to={brand.portfolioUrl}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all text-[11px] font-mono uppercase tracking-widest"
                >
                  Accedi Dossier
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {brand.liveUrl && (
                <a
                  href={brand.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all text-[11px] font-mono uppercase tracking-widest"
                >
                  Rete Esterna
                  <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaLoghi;
