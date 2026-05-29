import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaStorageHub = () => {
  return (
    <NebulaProjectLayout
      title="StorageHub"
      type="SOFTWARE ENGINEERING • UI/UX"
      description={
        <>
          <p>
            Un Sistema Intelligente di Gestione Inventario e Magazzino. Un'applicazione web progettata per eliminare gli errori umani, automatizzare il tracciamento delle giacenze e integrare l'Intelligenza Artificiale nel supporto decisionale.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Quando i fogli Excel non bastano più.</h2>
          <p>
            La gestione dell'inventario tradizionale è frammentata e propensa all'errore umano. Fogli di calcolo disallineati, rotture di stock improvvise e la mancanza di comunicazione in tempo reale tra la direzione e i magazzinieri causano enormi perdite di tempo e denaro. StorageHub nasce per risolvere questa esigenza cruciale: fornire una visibilità esatta e istantanea delle giacenze per prendere decisioni rapide ed evitare sprechi.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-cyan-500/50 pl-4 py-2 italic text-cyan-100">
            "Un'unica fonte di verità: dall'operatività in magazzino al controllo direzionale, in tempo reale."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>Ecosistemi su misura.</h2>
          <p>
            Il sistema si basa su un'architettura Role-Based Access Control (RBAC). Ho progettato due interfacce distinte partendo da un singolo punto di accesso: un pannello strategico globale per l'Admin (finanze, fornitori, report AI) e una dashboard operativa priva di distrazioni per il Magazziniere. Ogni movimento registrato aggiorna istantaneamente il database centralizzato, attivando allarmi preventivi quando un prodotto scende sotto la soglia minima.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Backend Django & Integrazione AI.</h2>
          <p>
            StorageHub è costruito su un'architettura disaccoppiata e solida. Il backend è sviluppato in Django (REST Framework), interfacciato con un database relazionale PostgreSQL. Il frontend è una Single Page Application in React 18, strutturata per essere fluida e responsiva. Il cuore innovativo del sistema è l'integrazione multi-provider (OpenAI GPT-4 e Google Gemini), capace di analizzare i log immutabili dell'inventario e generare report in linguaggio naturale per supportare le decisioni di riordino.
          </p>

          <h3>05 — The Result</h3>
          <h2>Logica e Controllo.</h2>
          <p>
            Il risultato è un gestionale che non si limita a registrare dati, ma partecipa attivamente alla vita aziendale. Sostituendo flussi di lavoro obsoleti con un'infrastruttura sicura, veloce e assistita dall'intelligenza artificiale, StorageHub trasforma il magazzino da centro di costo a motore di efficienza.
          </p>
        </>
      }
      techList={["React 18", "Django 4 + DRF", "PostgreSQL", "OpenAI & Gemini API"]}
      role="Full-Stack Lead Developer"
      year="2026"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#030712] relative group mb-12">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
          MAIN_VIEW.DAT
        </div>
        <img 
          src="/assets/projects/storage-hub/dashboard.webp" 
          alt="StorageHub Dashboard"
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "catalogo.webp",
          "categorie.webp",
          "movimenti.webp",
          "prodotto.webp",
          "registro.webp",
          "stat.webp",
          "fornitori.webp",
          "magazziniere.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030712] relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              MODULE_{i}.SYS
            </div>
            <img 
              src={`/assets/projects/storage-hub/${img}`} 
              alt={`StorageHub UI ${i}`}
              className="w-full h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaStorageHub;
