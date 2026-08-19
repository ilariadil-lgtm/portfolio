import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaSicilCosmetic = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            La cosmetica professionale online.
          </h2>
          <p className="text-white/80 leading-relaxed">
            SicilCosmetic si rivolge sia ai professionisti del settore beauty
            (barbieri e parrucchieri) sia al mercato consumer, offrendo un
            vastissimo assortimento di prodotti e attrezzature tecniche. La
            sfida principale del progetto era gestire la mole e la
            frammentazione di questo inventario: serviva una piattaforma capace
            di categorizzare centinaia di referenze in modo logico, mantenendo
            un'estetica pulita e rassicurante, capace di ispirare fiducia al
            momento dell'acquisto.
          </p>
        </>
      ),
      image: "/assets/projects/sicil-cosmetic/account.webp",
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-gold/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "Organizzare la bellezza: trasformare un catalogo complesso in
            un'esperienza d'acquisto fluida, intuitiva e orientata alla
            conversione."
          </p>
        </div>
      ),
      image: "/assets/projects/sicil-cosmetic/categoria.webp",
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            UI/UX e Architettura del Catalogo.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ho curato interamente l'assetto grafico e l'architettura
            dell'informazione, progettando un sistema di navigazione diviso per
            macro-target (Uomo, Donna) e per esigenze specifiche (Styling, Cura
            del capello, Barba, Attrezzature). Il design è stato pensato per far
            risaltare i prodotti, utilizzando ampi spazi bianchi e una struttura
            a griglia rigorosa.
          </p>
          <p className="text-white/80 leading-relaxed">
            A livello contenutistico, ho organizzato e impaginato le
            informazioni affinché rispondessero sia alle logiche di
            posizionamento SEO sia alla necessità di chiarezza dell'acquirente
            finale.
          </p>
        </>
      ),
      image: "/assets/projects/sicil-cosmetic/homepage.webp",
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Configurazione Tecnica PrestaShop.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            L'infrastruttura di vendita poggia interamente su PrestaShop. Oltre
            all'aspetto visivo, mi sono occupata in prima persona di tutta la
            configurazione tecnica "sotto il cofano": dall'impostazione dei
            metodi di pagamento e delle regole di spedizione, fino
            all'ottimizzazione del processo di checkout.
          </p>
          <p className="text-white/80 leading-relaxed">
            Ogni pagina è stata strutturata per garantire velocità di
            caricamento e perfetta responsività mobile, abbattendo gli ostacoli
            tecnologici tra l'utente e il carrello.
          </p>
        </>
      ),
      image: "/assets/projects/sicil-cosmetic/prodottimarca.webp",
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Estetica e Conversione.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un negozio online che unisce l'eleganza del mondo
            beauty all'efficienza di una vera macchina di vendita. Un progetto
            che dimostra la capacità di orchestrare in totale autonomia la
            creazione di un e-commerce complesso, curando con la stessa
            precisione metodica sia l'estetica del front-end visivo, sia il
            motore tecnico necessario a generare fatturato.
          </p>
        </>
      ),
      image: "/assets/projects/sicil-cosmetic/checkout.webp",
    },
  ];

  return (
    <NebulaProjectLayout
      title1="Sicil"
      title2="Cosmetic"
      type={t("sicilcosmetic.hero_label")}
      description={<p>{t("sicilcosmetic.hero_desc")}</p>}
      phases={phasesData}
      techList={[
        "PrestaShop",
        "UI/UX Design",
        "Catalog Management",
        "Copywriting",
      ]}
      role={t("sicilcosmetic.role_val")}
      year="2025"
      liveUrl="https://www.sicilcosmetic.com/"
    >
      <NebulaImageSlider
        images={[
          "/assets/projects/sicil-cosmetic/account.webp",
          "/assets/projects/sicil-cosmetic/homepage.webp",
          "/assets/projects/sicil-cosmetic/categoria.webp",
          "/assets/projects/sicil-cosmetic/paginaprodotto.webp",
          "/assets/projects/sicil-cosmetic/prodottimarca.webp",
          "/assets/projects/sicil-cosmetic/checkout.webp",
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaSicilCosmetic;
