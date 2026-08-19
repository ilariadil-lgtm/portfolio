import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaPattiForniture = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Digitalizzare 30 anni di esperienza.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Da oltre tre decenni, F.lli Patti è un punto di riferimento per
            rivenditori, installatori e privati. L'azienda aveva bisogno di una
            vetrina digitale che mettesse in ordine la sua vasta offerta
            commerciale — termoidraulica, edilizia, ferramenta e climatizzazione
            — senza perdere il senso di affidabilità e competenza che la
            contraddistingue.
          </p>
          <p className="text-white/80 leading-relaxed">
            Lavorando in sinergia con l'agenzia Carnova, la sfida è stata
            trasformare un'offerta aziendale complessa in un'esperienza di
            navigazione chiara, autorevole e accessibile.
          </p>
        </>
      ),
      image: "/assets/projects/patti-forniture/homepage.webp",
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-gold/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "Trasferire la solidità e l'assortimento del punto vendita fisico in
            un'infrastruttura digitale orientata alla chiarezza e alla
            conversione."
          </p>
        </div>
      ),
      image: "/assets/projects/patti-forniture/settori.webp",
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            UI/UX e Architettura dell'Informazione.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            In questo progetto, la parola d'ordine è stata "chiarezza".
            Lavorando con un'identità visiva preesistente, mi sono concentrata
            interamente sull'architettura dell'informazione e sull'interfaccia
            utente (UI).
          </p>
          <p className="text-white/80 leading-relaxed">
            Ho progettato un layout capace di far respirare i diversi
            macro-settori dell'azienda, organizzando servizi, attrezzature e
            marchi trattati in sezioni logiche. Il copywriting è stato studiato
            per adottare un tono di voce professionale, rassicurante e orientato
            al servizio, parlando efficacemente sia al target B2B che a quello
            consumer.
          </p>
        </>
      ),
      image: "/assets/projects/patti-forniture/chi-siamo.webp",
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Ecosistema WordPress Corporate.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            L'infrastruttura è stata sviluppata interamente su piattaforma
            WordPress, ottimizzando la gestione dei contenuti per permettere
            all'azienda di esporre la propria offerta in modo strutturato.
          </p>
          <p className="text-white/80 leading-relaxed">
            Oltre a curare l'impaginazione di ogni singola vista e la perfetta
            responsività mobile, ho focalizzato l'attenzione sui percorsi di
            conversione: chiamate rapide, pulsanti WhatsApp e moduli per la
            richiesta di preventivi sono posizionati strategicamente per
            trasformare il traffico in contatti commerciali reali.
          </p>
        </>
      ),
      image: "/assets/projects/patti-forniture/settore1.webp",
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Solidità Commerciale.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato finale è una piattaforma web che rispecchia esattamente
            la solidità e la grandezza dell'azienda. Un progetto che dimostra la
            capacità di prendere in carico la complessità di un business
            strutturato (con decine di categorie merceologiche e target
            differenti), organizzandone i contenuti per consegnare all'agenzia
            partner e al cliente uno strumento commerciale efficiente, veloce e
            moderno.
          </p>
        </>
      ),
      image: "/assets/projects/patti-forniture/contatti.webp",
    },
  ];

  return (
    <NebulaProjectLayout
      title1="Patti"
      title2="Forniture"
      type={t("pattiforniture.hero_label")}
      description={<p>{t("pattiforniture.hero_desc")}</p>}
      phases={phasesData}
      techList={[
        "UI/UX Design",
        "Information Architecture",
        "Copywriting",
        "WordPress Corporate",
      ]}
      role={t("pattiforniture.role_val")}
      year="2025"
      liveUrl="https://www.pattiforniture.com/"
    >
      <NebulaImageSlider
        images={[
          "/assets/projects/patti-forniture/homepage.webp",
          "/assets/projects/patti-forniture/settori.webp",
          "/assets/projects/patti-forniture/chi-siamo.webp",
          "/assets/projects/patti-forniture/settore1.webp",
          "/assets/projects/patti-forniture/contatti.webp",
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaPattiForniture;
