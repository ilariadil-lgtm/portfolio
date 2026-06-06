import React from "react";
import { motion } from "framer-motion";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaVillaMasami = () => {
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'ospitalità siciliana online.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Villa Masami necessitava di un'identità web che riflettesse l'eleganza e la tranquillità dei suoi spazi, situati in una posizione strategica vicino alla Valle dei Templi. Lavorando in stretta sinergia con l'agenzia Carnova, il mandato era chiaro: creare una vetrina digitale empatica e funzionale.
          </p>
          <p className="text-white/80 leading-relaxed">
            Una piattaforma capace di trasmettere calore umano e, al tempo stesso, mettere in risalto i vantaggi logistici della struttura, come l'accesso indipendente tramite tastierino numerico e la gestione automatizzata.
          </p>
        </>
      ),
      image: "/assets/projects/villa-masami/homepage.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit">
            "Più comodità, meno pensieri: tradurre il calore dell'accoglienza reale in un'esperienza di navigazione fluida e priva di ostacoli."
          </p>

          {/* Architectural Grid / Blueprint SVG Animation */}
          <div className="mt-12 relative w-full max-w-[500px] mx-auto aspect-[16/9] border border-[#d4af37]/20 bg-[#0a0a0a] overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-700">
            <svg className="w-full h-full text-[#d4af37]/20" viewBox="0 0 600 337.5" fill="none">
              {/* Background Grid */}
              <pattern id="blueprint" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#blueprint)" />
              
              {/* Animated Room Blocks */}
              <motion.rect 
                x="120" y="60" width="140" height="200" 
                fill="rgba(212, 175, 55, 0.05)" stroke="#d4af37" strokeWidth="1.5"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.rect 
                x="320" y="100" width="160" height="120" 
                fill="rgba(212, 175, 55, 0.08)" stroke="#d4af37" strokeWidth="1.5"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              
              {/* Connection Line */}
              <motion.line 
                x1="260" y1="160" x2="320" y2="160" 
                stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4,4"
                animate={{ strokeDashoffset: [0, -16] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Interactive Scanning Line */}
              <motion.line
                x1="0" y1="0" x2="0" y2="337.5"
                stroke="rgba(212,175,55,0.3)" strokeWidth="2"
                animate={{ x: [0, 600, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Blueprint measurements */}
              <text x="190" y="280" className="font-typewriter text-[8px] fill-[#d4af37]/50" textAnchor="middle">ZONA GIORNO</text>
              <text x="400" y="240" className="font-typewriter text-[8px] fill-[#d4af37]/50" textAnchor="middle">ZONA NOTTE</text>
            </svg>
          </div>
        </div>
      ),
      image: "/assets/projects/villa-masami/struttura.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Branding, UI e Copywriting.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            In questo progetto, l'identità del brand, l'interfaccia utente e l'anima editoriale sono nate insieme. Sono partita dall'ideazione e dal design del logo, creando un segno grafico che catturasse l'eleganza e l'essenza della villa.
          </p>
          <p className="text-white/80 leading-relaxed">
            Da lì, ho curato la stesura dei contenuti con un tono di voce rassicurante e ho disegnato una UI progettata per valorizzare gli spazi fisici, guidando l'utente in un percorso visivo pulito, intuitivo e orientato alla conversione.
          </p>
        </>
      ),
      image: "/assets/projects/villa-masami/camere.webp"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Ecosistema WordPress Multilingua.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Lato sviluppo, ho implementato e configurato l'intero sito su piattaforma WordPress, occupandomi dell'inserimento e dell'impaginazione di ogni singola vista. Oltre a garantire una perfetta responsività su dispositivi mobile, ho strutturato un'architettura nativamente bilingue (Italiano e Inglese).
          </p>
          <p className="text-white/80 leading-relaxed">
            Questo ha permesso alla struttura di posizionarsi immediatamente sul mercato turistico internazionale, offrendo un'esperienza utente coerente in entrambe le lingue.
          </p>
        </>
      ),
      image: "/assets/projects/villa-masami/servizi.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Il sapore dell'accoglienza.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato finale è un sito web che respira la stessa aria di quiete della struttura fisica. Un progetto end-to-end che dimostra la capacità di orchestrare ogni sfumatura della presenza online: dal design dell'interfaccia alla cura minuziosa della parola scritta, restituendo all'agenzia partner e al cliente finale un prodotto pronto per il mercato.
          </p>
        </>
      ),
      image: "/assets/projects/villa-masami/contatti.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Villa"
      title2="Masami"
      type="IDENTITÀ DI BRAND • UI/UX"
      description={
        <p className="mb-8">
          Un progetto digitale completo, realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura: dall'ideazione e realizzazione del logo alla stesura dei testi, fino allo sviluppo dell'infrastruttura web su WordPress.
        </p>
      }
      phases={phasesData}
      techList={["Brand & Logo Design", "UI/UX Design", "Copywriting", "WordPress"]}
      role="Full-Stack Developer & UI/UX Designer"
      year="2025"
      liveUrl="https://villamasami.it/"
    >
      <NebulaImageSlider 
        images={[
          "/assets/projects/villa-masami/homepage.webp",
          "/assets/projects/villa-masami/struttura.webp",
          "/assets/projects/villa-masami/camere.webp",
          "/assets/projects/villa-masami/servizi.webp",
          "/assets/projects/villa-masami/contatti.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaVillaMasami;
