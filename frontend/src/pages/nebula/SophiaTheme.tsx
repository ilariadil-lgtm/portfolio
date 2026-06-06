import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaSophiaTheme = () => {
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Quando il design ha bisogno di velocità pura.</h2>
          <p className="text-white/80 leading-relaxed">
            La maggior parte dei temi premium in commercio si porta dietro un debito tecnico enorme, sacrificando le prestazioni (i Core Web Vitals) in nome di una finta versatilità. Il risultato sono siti web lenti, sovraccarichi di script inutilizzati e impossibili da scalare. Sophia nasce per risolvere questa equazione: fornire fondamenta tecniche robuste che permettano di sviluppare interfacce luxury senza alcun compromesso sulle performance di caricamento.
          </p>
        </>
      ),
      image: "/assets/project-sophia.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit">
            "Costruire una struttura leggera, robusta e modulare per liberare la potenza del design d'eccellenza."
          </p>
        </div>
      ),
      image: "/assets/project-sophia.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Architettura Modulare in PHP.</h2>
          <p className="text-white/80 leading-relaxed">
            Sophia non si limita a usare il classico file functions.php monolitico. Il suo codice è organizzato in logiche isolate: dal setup del tema alla gestione delle estensioni. Questa architettura modulare sfrutta un Design System basato su variabili CSS globali, rendendo infinitamente scalabile l'aspetto estetico. Inoltre, ho integrato nativamente librerie di movimento premium come GSAP e ScrollTrigger, permettendo di gestire scorrimenti cinematici e animazioni complesse senza intaccare le performance.
          </p>
        </>
      ),
      image: "/assets/project-sophia.webp"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Sophia Builder & Zenith Engine.</h2>
          <p className="text-white/80 leading-relaxed">
            Il vero cuore del sistema è il Sophia Builder: un page builder visuale proprietario manifest-driven. Anziché salvare layout complessi nel database, decodifica file JSON per generare istantaneamente l'interfaccia amministrativa. Grazie alla PostMessage API, le modifiche si sincronizzano in tempo reale nell'iframe di preview. Per garantire massima stabilità multilingua, Sophia è inoltre equipaggiato con lo Zenith Recovery Engine, un sistema di fallback proprietario che mappa e traduce le stringhe a livello di codice.
          </p>
        </>
      ),
      image: "/assets/chario-hero.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'Ingegneria del Layout</h2>
          <p className="text-white/80 leading-relaxed">
            Sophia non è semplicemente un tema, è un framework altamente personalizzato e meticoloso. Garantisce un controllo editoriale totale sui contenuti con prestazioni fulminee sul frontend, poiché l'output finale rimane sempre e solo puro codice PHP e HTML5 con caricamento asincrono. Un ecosistema progettato per durare e scalare.
          </p>
        </>
      ),
      image: "/assets/about-portrait.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Sophia"
      title2="Theme"
      type="ARCHITETTURA FULL-STACK"
      description={
        <p className="mb-8">
          Un framework WordPress proprietario, modulare e orientato alle performance. Sviluppato per sostituire i pesanti page builder tradizionali e restituire ai progetti web un codice puro, istantaneo e totalmente scalabile.
        </p>
      }
      phases={phasesData}
      techList={["PHP Modulare", "Manifest JSON", "GSAP & ScrollTrigger", "PostMessage API"]}
      role="Creator & Architect"
      year="2026"
    >
      <NebulaImageSlider 
        images={[
          "/assets/project-sophia.webp",
          "/assets/project-sophia.webp",
          "/assets/project-sophia.webp",
          "/assets/chario-hero.webp",
          "/assets/about-portrait.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaSophiaTheme;
