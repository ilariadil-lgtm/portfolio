import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaNewpop = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Progettare la casa iconica.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Newpop è una vetrina d'eccellenza dedicata al design d'interni,
            all'illuminazione e all'home decor, che ospita i pezzi iconici dei
            migliori designer e brand mondiali (da Artemide a Smeg, fino a
            Fatboy e Le Creuset). La necessità era quella di creare una
            piattaforma che non si limitasse a vendere mobili, ma che riuscisse
            a comunicare il valore intrinseco, lo stile e la storia di ogni
            singolo oggetto di design. Era indispensabile un'interfaccia
            all'altezza dei brand ospitati: elegante, minimale e profondamente
            immersiva.
          </p>
        </>
      ),
      image: "/assets/projects/newpop/homepage-hero.webp",
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-gold/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "Mettersi al servizio del design d'autore: un'interfaccia invisibile
            che lascia la scena alla bellezza dei prodotti, guidando l'utente
            verso una conversione naturale."
          </p>
        </div>
      ),
      image: "/assets/projects/newpop/categoria.webp",
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            UI/UX e Assetto Grafico.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ho curato l'intera veste grafica partendo dall'assunto che il design
            del sito non dovesse mai sovrastare i prodotti. Ho organizzato
            l'enorme catalogo in categorie macro-tematiche pulite (Arredamento,
            Tavola & Cucina, Illuminazione, Outdoor), permettendo una
            navigazione fluida.
          </p>
          <p className="text-white/80 leading-relaxed">
            L'uso strategico degli spazi bianchi, abbinato a una tipografia
            elegante, ha creato un'esposizione "da galleria d'arte", dove i
            colori decisi dei prodotti e le forme dei pezzi di design diventano
            i veri protagonisti della user experience.
          </p>
        </>
      ),
      image: "/assets/projects/newpop/homepage-hero.webp",
      objectPosition: "object-[center_45%]",
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Motore PrestaShop ed Esperienza Utente.
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            A supporto della progettazione visiva, ho affiancato il team di
            sviluppo nella configurazione tecnica su base PrestaShop. Il mio
            intervento si è concentrato sull'ottimizzazione dell'esperienza
            utente a livello strutturale: dall'implementazione dei filtri di
            ricerca per i designer, fino alla cura del mega-menu di navigazione
            e alla corretta formattazione dei caroselli prodotto.
          </p>
          <p className="text-white/80 leading-relaxed">
            L'obiettivo tecnico era garantire che la velocità di caricamento e
            la stabilità dell'e-commerce fossero impeccabili, anche in presenza
            di migliaia di referenze.
          </p>
        </>
      ),
      image: "/assets/projects/newpop/marchi.webp",
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">
            Il lusso della semplicità.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è una boutique digitale di respiro internazionale, in
            cui l'estetica raffinata incontra le logiche dell'e-commerce
            moderno. Un progetto che dimostra la capacità di gestire
            l'interfaccia grafica per il settore del lusso e del design
            d'interni, creando ecosistemi visivi dove l'utente non acquista
            semplicemente un oggetto, ma una vera e propria ispirazione.
          </p>
        </>
      ),
      image: "/assets/projects/newpop/accedi.webp",
    },
  ];

  return (
    <NebulaProjectLayout
      title1="New"
      title2="pop"
      type={t("newpop.hero_label")}
      description={<p>{t("newpop.hero_desc")}</p>}
      phases={phasesData}
      techList={["PrestaShop", "UI/UX Design", "Visual Merchandising"]}
      role={t("newpop.role_val")}
      year="2024"
      liveUrl="https://www.newpop.it/"
    >
      <NebulaImageSlider
        images={[
          "/assets/projects/newpop/homepage-hero.webp",
          "/assets/projects/newpop/categoria.webp",
          "/assets/projects/newpop/prodotto.webp",
          "/assets/projects/newpop/marchi.webp",
          "/assets/projects/newpop/accedi.webp",
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaNewpop;
