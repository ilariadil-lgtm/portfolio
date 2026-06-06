import React from "react";
import { motion } from "framer-motion";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaBaglioLauria = () => {
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Il fascino del Made in Sicily.</h2>
          <p className="text-white/80 leading-relaxed">
            Immerso tra ulivi e vigneti a pochi chilometri dalla Valle dei Templi, Baglio Lauria è una struttura 
            ricettiva di charme che unisce l'ospitalità rurale all'eleganza di una location per matrimoni ed eventi esclusivi. 
            Lavorando in sinergia con Carnova, l'obiettivo era creare una vetrina digitale che trasmettesse immediatamente questa duplice 
            anima: il calore rilassato di un soggiorno in Sicilia, unito alla professionalità e all'estetica richieste 
            per incorniciare momenti indimenticabili.
          </p>
        </>
      ),
      image: "/assets/projects/baglio-lauria/homepage.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit">
            "Trasmettere il calore del sole siciliano e l'eleganza della pietra antica attraverso un'interfaccia capace di far sognare l'utente dal primo click."
          </p>

          {/* Topographical Map / Nature SVG Animation */}
          <div className="mt-12 relative w-full max-w-[500px] mx-auto aspect-[16/9] border border-[#d4af37]/20 bg-[#0a0a0a] overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-700">
            <svg className="w-full h-full text-[#d4af37]/30" viewBox="0 0 600 337.5" fill="none">
              {/* Topographical Contour Lines */}
              <motion.path 
                d="M -100 100 Q 100 50, 300 150 T 700 100" 
                stroke="currentColor" strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path 
                d="M -100 150 Q 150 100, 350 200 T 700 150" 
                stroke="currentColor" strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path 
                d="M -100 200 Q 200 150, 400 250 T 700 200" 
                stroke="currentColor" strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.4, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.path 
                d="M -100 250 Q 250 200, 450 300 T 700 250" 
                stroke="currentColor" strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.6, delay: 0.6, ease: "easeInOut" }}
              />
              
              {/* Sun Element */}
              <motion.circle 
                cx="450" cy="100" r="40" 
                fill="rgba(212, 175, 55, 0.05)" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ originX: "450px", originY: "100px" }}
              />
              <circle cx="450" cy="100" r="20" fill="rgba(212, 175, 55, 0.1)" />
              
              {/* Map Coordinates */}
              <text x="30" y="40" className="font-typewriter text-[8px] fill-[#d4af37]/50">LAT: 37.2845° N</text>
              <text x="30" y="55" className="font-typewriter text-[8px] fill-[#d4af37]/50">LONG: 13.5670° E</text>
              <text x="520" y="300" className="font-typewriter text-[8px] fill-[#d4af37]/50">ALT: 450m</text>
              
              {/* Scanning point */}
              <motion.circle
                cx="300" cy="150" r="4"
                fill="#d4af37"
                animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      ),
      image: "/assets/projects/baglio-lauria/il-baglio.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">UI/UX e Narrazione Visiva.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            In questo progetto, il design dell'interfaccia e il copywriting hanno viaggiato di pari passo. Ho progettato una UI pulita ed evocativa, pensata per esaltare le fotografie degli ampi spazi esterni e della scenografica piscina.
          </p>
          <p className="text-white/80 leading-relaxed">
            L'architettura dell'informazione è stata strutturata per guidare l'utente attraverso due percorsi paralleli ma integrati: la prenotazione delle suite per i soggiorni di relax e la scoperta degli spazi dedicati ai grandi eventi. I testi, curati interamente da me, adottano un tono di voce emozionale, accogliente e raffinato.
          </p>
        </>
      ),
      image: "/assets/projects/baglio-lauria/lecamere.webp"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Layout WordPress e Conversione.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            L'intero ecosistema visivo è stato declinato su piattaforma WordPress. Mi sono occupata dell'impaginazione di ogni singola vista, assicurandomi che l'esperienza di navigazione fosse immersiva e perfettamente reattiva su qualsiasi dispositivo.
          </p>
          <p className="text-white/80 leading-relaxed">
            Ho curato l'integrazione degli strumenti di contatto e la presentazione chiara dei servizi, costruendo un percorso utente senza frizioni che accompagna il visitatore dalla fase di ispirazione iniziale fino alla richiesta di disponibilità per il proprio soggiorno o evento.
          </p>
        </>
      ),
      image: "/assets/projects/baglio-lauria/servizi.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'Emozione dell'Accoglienza.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un sito web che respira la stessa aria di quiete della campagna in cui è immerso. Un progetto che conferma la capacità di tradurre il prestigio fisico di una location in un ambiente digitale altrettanto elegante, consegnando all'agenzia partner e al cliente finale uno strumento di comunicazione capace di generare vere e proprie emozioni prima ancora di varcare la soglia del Baglio.
          </p>
        </>
      ),
      image: "/assets/projects/baglio-lauria/dintorni.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Baglio"
      title2="Lauria"
      type="SITO WEB OSPITALITÀ"
      description={
        <p className="mb-8">
          Un progetto digitale realizzato in collaborazione con l'agenzia Carnova, dedicato a un incantevole agriturismo e location per eventi immerso nella campagna siciliana. Cura integrale del web design, dell'esperienza utente (UI/UX) e della stesura dei testi su piattaforma WordPress.
        </p>
      }
      phases={phasesData}
      techList={["UI/UX Design", "Copywriting", "WordPress", "Hospitality"]}
      role="UI/UX & Web Developer"
      year="2023"
      liveUrl="https://www.bagliolauria.com/"
    >
      <NebulaImageSlider 
        images={[
          "/assets/projects/baglio-lauria/homepage.webp",
          "/assets/projects/baglio-lauria/il-baglio.webp",
          "/assets/projects/baglio-lauria/lecamere.webp",
          "/assets/projects/baglio-lauria/servizi.webp",
          "/assets/projects/baglio-lauria/dintorni.webp",
          "/assets/projects/baglio-lauria/contatti.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaBaglioLauria;
