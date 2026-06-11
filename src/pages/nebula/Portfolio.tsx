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
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Non un portfolio. Un sistema.</h2>
          <p className="text-white/80 leading-relaxed">
            Il brief era personale: costruire qualcosa che non si limitasse a mostrare il lavoro,
            ma che incarnasse il metodo. Un portfolio che fosse già una risposta alla domanda
            "come pensi al design?". La soluzione è stata un dual design system live-switchable —
            Editorial e Nebula — due identità visive coerenti e distinte che l'utente può alternare
            in tempo reale, senza ricaricare la pagina.
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
            "Sfidare tecnicamente se stesse, senza perdere il calore. L'obiettivo non era stupire
            con gli effetti — era dimostrare controllo. Il tema Editorial — tipografia, burgundy,
            calore — rappresenta l'identità più autentica. Nebula è il contrappunto: freddo, spaziale,
            tecnico. Due modi di guardare lo stesso lavoro."
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
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Il problema vero era il CSS, non il design.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Costruire un design system che cambi in tempo reale richiede che ogni valore visivo —
            colori, tipografia, spaziature, ombre — sia astratto in variabili CSS scambiate a livello root.
            Nessun componente può contenere valori hardcoded.
          </p>
          <p className="text-white/80 leading-relaxed">
            Dopo le prime iterazioni era chiaro che la sfida più grande non era l'estetica,
            ma la coerenza sistemica: ogni nuovo componente aggiunto doveva funzionare in entrambi
            i temi senza eccezioni. Il sistema ha richiesto circa 1-2 mesi di lavoro, di cui la
            maggior parte spesa a testare casi limite — hover states, animazioni, transizioni —
            su entrambi i temi simultaneamente.
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
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Web Audio, Three.js e una favicon che cambia tema.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Lo stack tecnico è stato scelto per massimizzare l'espressività senza compromettere
            le performance: React + Vite per l'architettura, Framer Motion per le transizioni di pagina,
            Three.js per il canvas 3D nel tema Nebula, Web Audio API per la risposta sonora reattiva
            al tema attivo, Lenis per lo smooth scroll, i18n completo IT/EN.
          </p>
          <p className="text-white/80 leading-relaxed">
            Un dettaglio che sintetizza l'approccio: la favicon cambia dinamicamente al toggle del tema —
            un gesto minimo che dimostra che il sistema è davvero end-to-end. Il bundle splitting è
            configurato per garantire LCP sotto i 2.5 secondi anche su connessioni medie.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/split.png"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Il portfolio è la risposta.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un sistema in cui ogni componente — dalla tipografia alla favicon,
            dall'audio al canvas 3D — è ingegnerizzato attorno a un'unica idea: che l'identità
            di un designer non è monolitica. Il portfolio è stato sottoposto ad Awwwards come
            dimostrazione di un metodo progettuale, non solo di un risultato estetico.
            La metrica più onesta: ogni persona che lo apre sceglie il tema che la rispecchia di più.
            Quello era l'obiettivo.
          </p>
        </>
      ),
      image: "/assets/projects/portfolio/nebula.png"
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
      techList={["React + Vite", "Framer Motion", "Three.js", "Web Audio API", "Lenis Scroll", "i18n IT/EN"]}
      role={t('portfolio.role_val')}
      year="2025"
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
