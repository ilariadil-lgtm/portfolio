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
      image: "/assets/projects/villa-masami/struttura.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit">
            "Più comodità, meno pensieri: tradurre il calore dell'accoglienza reale in un'esperienza di navigazione fluida e priva di ostacoli."
          </p>

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
      image: "/assets/projects/villa-masami/camera-matrimoniale.webp"
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
          "/assets/projects/villa-masami/struttura.webp",
          "/assets/projects/villa-masami/struttura.webp",
          "/assets/projects/villa-masami/camera-matrimoniale.webp",
          "/assets/projects/villa-masami/servizi.webp",
          "/assets/projects/villa-masami/contatti.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaVillaMasami;
