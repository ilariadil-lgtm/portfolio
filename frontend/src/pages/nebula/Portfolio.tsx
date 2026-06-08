import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaPortfolio = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'antidoto alla bancarotta tecnica.</h2>
          <p className="text-white/80 leading-relaxed">
            Lavorare molto non significa sempre lavorare in attivo.
            Portfolio nasce per risolvere un problema endemico tra i professionisti:
            la perdita di controllo sulla reale redditività dei progetti.
            L'obiettivo era creare una piattaforma che trasformasse il tracciamento delle ore,
            la preventivazione e la gestione delle scadenze in un processo visivo e immediato,
            scongiurando il rischio di lavorare in perdita e offrendo una chiarezza finanziaria assoluta.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/split.png"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "Riprendere il controllo del proprio tempo. Un ecosistema dove la salute finanziaria diventa finalmente chiara, misurabile e assistita dall'intelligenza artificiale."
          </p>

        </div>
      ),
      image: "/assets/projects/portfolio/nebula.png"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'esperienza utente al centro.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            L'interfaccia è concepita come una Single Page Application fluida e reattiva,
            ingegnerizzata con React 18 e TypeScript. Ho adottato un'estetica premium—con
            richiami al glassmorphism, gradienti dinamici e micro-interazioni—per rendere
            piacevole un'attività solitamente noiosa come l'amministrazione.
          </p>
          <p className="text-white/80 leading-relaxed">
            Grazie a TanStack Query per il caching e Recharts per la data visualization,
            ogni KPI finanziario è istantaneamente disponibile sulla dashboard, azzerando
            i tempi di caricamento percepiti.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/editorial.png"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Supabase, Serverless & AI.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            L'infrastruttura backend poggia interamente su PostgreSQL, garantendo la massima sicurezza
            tramite policy RLS (Row Level Security) rigorose: ogni utente ha accesso esclusivo ai
            propri dati.
          </p>
          <p className="text-white/80 leading-relaxed">
            Il vero valore aggiunto risiede però nelle Edge Functions: un microservizio serverless
            alimenta l'assistente virtuale integrato, capace di leggere il contesto finanziario del
            professionista (pagamenti, progetti, scadenze) e fornire suggerimenti strategici in tempo
            reale. Il sistema è completato dall'integrazione di Stripe per la gestione sicura degli
            abbonamenti premium.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/ai.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Intelligenza Finanziaria.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un prodotto SaaS end-to-end completo e scalabile. Unendo un'interfaccia utente d'impatto a un'architettura dati complessa e serverless, la piattaforma non si limita a organizzare il lavoro, ma agisce come un vero e proprio partner strategico per la crescita del professionista.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/preventivi.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Ilaria"
      title2="Portfolio"
      type={t('portfolio.hero_label')}
      description={
        <p>
          {t('portfolio.hero_desc')}
        </p>
      }
      phases={phasesData}
      techList={["React 18 & TypeScript", "Tailwind & Shadcn UI", "Supabase & PostgreSQL", "Edge Functions & AI API"]}
      role={t('portfolio.role_val')}
      year="2026"
    >
      <NebulaImageSlider 
        images={[
          "/assets/projects/portfolio/split.png",
          "/assets/projects/portfolio/editorial.png",
          "/assets/projects/portfolio/nebula.png"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaPortfolio;
