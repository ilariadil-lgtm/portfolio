import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaStorageHub = () => {
  const phasesData: Phase[] = [
    {
      num: "01",
      title: "Il Contesto",
      subtitle: "Quando i fogli Excel non bastano più.",
      description: <p>La gestione dell'inventario tradizionale è frammentata e propensa all'errore umano. Fogli di calcolo disallineati, rotture di stock improvvise e la mancanza di comunicazione in tempo reale tra la direzione e i magazzinieri causano enormi perdite di tempo e denaro. StorageHub nasce per risolvere questa esigenza cruciale: fornire una visibilità esatta e istantanea delle giacenze per prendere decisioni rapide ed evitare sprechi.</p>,
      image: "/assets/projects/storage-hub/catalogo.webp"
    },
    {
      num: "02",
      title: "L'Obiettivo",
      subtitle: "Un'unica fonte di verità",
      description: <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">"Dall'operatività in magazzino al controllo direzionale, in tempo reale."</p>,
      image: "/assets/projects/storage-hub/stat.webp"
    },
    {
      num: "03",
      title: "Il Processo",
      subtitle: "Ecosistemi su misura.",
      description: <p>Il sistema si basa su un'architettura Role-Based Access Control (RBAC). Ho progettato due interfacce distinte partendo da un singolo punto di accesso: un pannello strategico globale per l'Admin (finanze, fornitori, report AI) e una dashboard operativa priva di distrazioni per il Magazziniere. Ogni movimento registrato aggiorna istantaneamente il database centralizzato, attivando allarmi preventivi quando un prodotto scende sotto la soglia minima.</p>,
      image: "/assets/projects/storage-hub/registro.webp"
    },
    {
      num: "04",
      title: "Sviluppo",
      subtitle: "Backend Django & Integrazione AI.",
      description: <p>StorageHub è costruito su un'architettura disaccoppiata e solida. Il backend è sviluppato in Django (REST Framework), interfacciato con un database relazionale PostgreSQL. Il frontend è una Single Page Application in React 18, strutturata per essere fluida e responsiva. Il cuore innovativo del sistema è l'integrazione multi-provider (OpenAI GPT-4 e Google Gemini), capace di analizzare i log immutabili dell'inventario e generare report in linguaggio naturale per supportare le decisioni di riordino.</p>,
      image: "/assets/projects/storage-hub/prodotto.webp"
    },
    {
      num: "05",
      title: "Il Risultato",
      subtitle: "Logica e Controllo.",
      description: <p>Il risultato è un gestionale che non si limita a registrare dati, ma partecipa attivamente alla vita aziendale. Sostituendo flussi di lavoro obsoleti con un'infrastruttura sicura, veloce e assistita dall'intelligenza artificiale, StorageHub trasforma il magazzino da centro di costo a motore di efficienza.</p>,
      image: "/assets/projects/storage-hub/magazziniere.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Storage"
      title2="Hub"
      type="INGEGNERIA DEL SOFTWARE • UI/UX"
      description={
        <>
          <p>
            Un Sistema Intelligente di Gestione Inventario e Magazzino. Un'applicazione web progettata per eliminare gli errori umani, automatizzare il tracciamento delle giacenze e integrare l'Intelligenza Artificiale nel supporto decisionale.
          </p>
        </>
      }
      phases={phasesData}
      techList={["React 18", "Django 4 + DRF", "PostgreSQL", "OpenAI & Gemini API"]}
      role="Full-Stack Lead Developer"
      year="2026"
    >
      {/* Image Gallery as an Interactive Slider */}
      <NebulaImageSlider 
        images={[
          "/assets/projects/storage-hub/dashboard.webp",
          "/assets/projects/storage-hub/categorie.webp",
          "/assets/projects/storage-hub/movimenti.webp",
          "/assets/projects/storage-hub/fornitori.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaStorageHub;
