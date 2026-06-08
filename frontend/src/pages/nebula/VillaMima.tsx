import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaVillaMima = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Eventi sotto le stelle.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Immersa tra uliveti e vigneti a due passi dalla Valle dei Templi, Villa Mima è molto più di una sala ricevimenti: è un'esperienza sensoriale completa. In collaborazione con Carnova, la sfida era trasmettere online questa forte identità e la cura maniacale per i dettagli.
          </p>
          <p className="text-white/80 leading-relaxed">
            Serviva una piattaforma capace di esaltare non solo la bellezza paesaggistica e architettonica della struttura, ma anche l'alta cucina e il 'food design', elementi decisivi per chi è alla ricerca della location perfetta per un evento esclusivo.
          </p>
        </>
      ),
      image: "/assets/projects/villa-mima/home.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "L'eleganza si nasconde nei dettagli: un'interfaccia progettata per far pregustare l'atmosfera magica di un evento indimenticabile, ancor prima del primo assaggio."
          </p>
        </div>
      ),
      image: "/assets/projects/villa-mima/la-villa.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">UI/UX e Food Design.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ho sviluppato un'architettura visiva che mette in primo piano le emozioni e i sensi. Il layout lascia ampio respiro alle fotografie della location e alle creazioni culinarie artistiche dello chef, trattando ogni piatto come un'opera di design.
          </p>
          <p className="text-white/80 leading-relaxed">
            L'uso di tipografie graziate ed eleganti, unito a spazi negativi generosi, crea un'atmosfera di lusso sussurrato, guidando l'utente attraverso i servizi: dai matrimoni da favola agli show cooking, fino all'intrattenimento a bordo piscina.
          </p>
        </>
      ),
      image: "/assets/projects/villa-mima/menu.webp"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">WordPress e Narrazione Emozionale.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            A livello tecnico, l'intero ecosistema è stato ingegnerizzato su piattaforma WordPress, garantendo fluidità e velocità di caricamento nonostante l'alta densità di contenuti fotografici. L'esperienza utente è stata studiata per abbattere ogni attrito nel percorso di conversione.
          </p>
          <p className="text-white/80 leading-relaxed">
            I moduli di contatto e le call to action sono posizionati in modo organico e non invasivo, invitando i futuri sposi o i planner a mettersi in contatto con la struttura in modo semplice, empatico e diretto.
          </p>
        </>
      ),
      image: "/assets/projects/villa-mima/contatti.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">La magia dei dettagli.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un sito web che cattura perfettamente l'essenza dell'ospitalità e dell'alta cucina. Un progetto che dimostra come il giusto equilibrio tra design minimale, immagini d'impatto e un copy accurato possa trasformare una vetrina digitale nel primo, fondamentale passo verso l'organizzazione di un evento perfetto.
          </p>
        </>
      ),
      image: "/assets/projects/villa-mima/home.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Villa"
      title2="Mima"
      type={t('villamima.hero_label')}
      description={
        <p>
          {t('villamima.hero_desc')}
        </p>
      }
      phases={phasesData}
      techList={["UI/UX Design", "WordPress Environment", "Copywriting & Storytelling"]}
      role={t('villamima.role_val')}
      year="2023"
    >
      <NebulaImageSlider 
        images={[
          "/assets/projects/villa-mima/home.webp",
          "/assets/projects/villa-mima/la-villa.webp",
          "/assets/projects/villa-mima/menu.webp",
          "/assets/projects/villa-mima/contatti.webp",
          "/assets/projects/villa-mima/home.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaVillaMima;
