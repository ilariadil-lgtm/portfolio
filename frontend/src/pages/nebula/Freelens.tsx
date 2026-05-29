import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaFreelens = () => {
  return (
    <NebulaProjectLayout
      title="Freelens"
      type="SAAS DEVELOPMENT"
      description={
        <>
          <p>
            Una piattaforma gestionale SaaS creata appositamente per professionisti autonomi.
            Un ecosistema completo per il tracciamento finanziario, il controllo dei margini e
            l'ottimizzazione del business tramite Intelligenza Artificiale integrata.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>L'antidoto alla bancarotta tecnica.</h2>
          <p>
            Lavorare molto non significa sempre lavorare in attivo.
            Freelense nasce per risolvere un problema endemico tra i professionisti:
            la perdita di controllo sulla reale redditività dei progetti.
            L'obiettivo era creare una piattaforma che trasformasse il tracciamento delle ore,
            la preventivazione e la gestione delle scadenze in un processo visivo e immediato,
            scongiurando il rischio di lavorare in perdita e offrendo una chiarezza finanziaria assoluta.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-cyan-500/50 pl-4 py-2 italic text-cyan-100">
            "Riprendere il controllo del proprio tempo. Un ecosistema dove la salute finanziaria diventa finalmente chiara, misurabile e assistita dall'intelligenza artificiale."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>L'esperienza utente al centro.</h2>
          <p>
            L'interfaccia è concepita come una Single Page Application fluida e reattiva,
            ingegnerizzata con React 18 e TypeScript. Ho adottato un'estetica premium—con
            richiami al glassmorphism, gradienti dinamici e micro-interazioni—per rendere
            piacevole un'attività solitamente noiosa come l'amministrazione.
          </p>
          <p>
            Grazie a TanStack Query per il caching e Recharts per la data visualization,
            ogni KPI finanziario è istantaneamente disponibile sulla dashboard, azzerando
            i tempi di caricamento percepiti.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Supabase, Serverless & AI.</h2>
          <p>
            L'infrastruttura backend poggia interamente su PostgreSQL, garantendo la massima sicurezza
            tramite policy RLS (Row Level Security) rigorose: ogni utente ha accesso esclusivo ai
            propri dati.
          </p>
          <p>
            Il vero valore aggiunto risiede però nelle Edge Functions: un microservizio serverless
            alimenta l'assistente virtuale integrato, capace di leggere il contesto finanziario del
            professionista (pagamenti, progetti, scadenze) e fornire suggerimenti strategici in tempo
            reale. Il sistema è completato dall'integrazione di Stripe per la gestione sicura degli
            abbonamenti premium.
          </p>
        </>
      }
      techList={["React 18 & TypeScript", "Tailwind & Shadcn UI", "Supabase & PostgreSQL", "Edge Functions & AI API"]}
      role="Lead Product Designer & Dev"
      year="2026"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#030712] relative group mb-12">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
          MAIN_VIEW.DAT
        </div>
        <img 
          src="/assets/projects/freelens/home.webp" 
          alt="Freelens Homepage"
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "dash.webp",
          "kanban.webp",
          "finances.webp",
          "ai-assistant.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030712] relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              MODULE_{i}.SYS
            </div>
            <img 
              src={`/assets/projects/freelens/${img}`} 
              alt={`Freelens UI ${i}`}
              className="w-full h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaFreelens;
