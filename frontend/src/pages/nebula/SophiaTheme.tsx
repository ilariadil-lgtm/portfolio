import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaSophiaTheme = () => {
  return (
    <NebulaProjectLayout
      title="Sophia Theme"
      type="FULL-STACK ARCHITECTURE"
      description={
        <>
          <p>
            Un framework WordPress proprietario, modulare e orientato alle performance. Sviluppato per sostituire i pesanti page builder tradizionali e restituire ai progetti web un codice puro, istantaneo e totalmente scalabile.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Quando il design ha bisogno di velocità pura.</h2>
          <p>
            La maggior parte dei temi premium in commercio si porta dietro un debito tecnico enorme, sacrificando le prestazioni (i Core Web Vitals) in nome di una finta versatilità. Il risultato sono siti web lenti, sovraccarichi di script inutilizzati e impossibili da scalare. Sophia nasce per risolvere questa equazione: fornire fondamenta tecniche robuste che permettano di sviluppare interfacce luxury senza alcun compromesso sulle performance di caricamento.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-cyan-500/50 pl-4 py-2 italic text-cyan-100">
            "Costruire una struttura leggera, robusta e modulare per liberare la potenza del design d'eccellenza."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>Architettura Modulare in PHP.</h2>
          <p>
            Sophia non si limita a usare il classico file functions.php monolitico. Il suo codice è organizzato in logiche isolate: dal setup del tema alla gestione delle estensioni. Questa architettura modulare sfrutta un Design System basato su variabili CSS globali, rendendo infinitamente scalabile l'aspetto estetico. Inoltre, ho integrato nativamente librerie di movimento premium come GSAP e ScrollTrigger, permettendo di gestire scorrimenti cinematici e animazioni complesse senza intaccare le performance.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Sophia Builder & Zenith Engine.</h2>
          <p>
            Il vero cuore del sistema è il Sophia Builder: un page builder visuale proprietario manifest-driven. Anziché salvare layout complessi nel database, decodifica file JSON per generare istantaneamente l'interfaccia amministrativa. Grazie alla PostMessage API, le modifiche si sincronizzano in tempo reale nell'iframe di preview. Per garantire massima stabilità multilingua, Sophia è inoltre equipaggiato con lo Zenith Recovery Engine, un sistema di fallback proprietario che mappa e traduce le stringhe a livello di codice.
          </p>

          <h3>05 — The Result</h3>
          <h2>L'Ingegneria del Layout</h2>
          <p>
            Sophia non è semplicemente un tema, è un framework altamente personalizzato e meticoloso. Garantisce un controllo editoriale totale sui contenuti con prestazioni fulminee sul frontend, poiché l'output finale rimane sempre e solo puro codice PHP e HTML5 con caricamento asincrono. Un ecosistema progettato per durare e scalare.
          </p>
        </>
      }
      techList={["PHP Modulare", "Manifest JSON", "GSAP & ScrollTrigger", "PostMessage API"]}
      role="Creator & Architect"
      year="2026"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#030712] relative group mb-12">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
          MAIN_VIEW.DAT
        </div>
        <img 
          src="/assets/project-sophia.png" 
          alt="Sophia Theme Architecture"
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "/assets/project-sophia.png",
          "/assets/project-sophia.jpg",
          "/assets/chario-hero.png",
          "/assets/about-portrait.jpg"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030712] relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              MODULE_{i}.SYS
            </div>
            <img 
              src={`${img}`} 
              alt={`Sophia UI ${i}`}
              className="w-full h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaSophiaTheme;
