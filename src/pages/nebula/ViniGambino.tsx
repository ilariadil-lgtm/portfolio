import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaViniGambino = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Un sorso di Etna online.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Situata sul versante nord-orientale dell'Etna, la Cantina Gambino è un'eccellenza che unisce la tradizione vinicola a una location mozzafiato con vista sul Golfo di Taormina. La sfida posta dall'agenzia Carnova era duplice: da un lato, creare uno spazio e-commerce elegante per la vendita dei vini vulcanici; dall'altro, trasmettere il calore dell'ospitalità siciliana, invitando gli utenti di tutto il mondo a prenotare le rinomate esperienze di degustazione in cantina. Serviva una vetrina digitale che fosse al contempo pragmatica ed emozionale.
          </p>
        </>
      ),
      image: "/assets/projects/vini-gambino/homepage.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit pr-2">
            "Tradurre la potenza del vulcano e l'eleganza del vino in un percorso visivo che invita all'assaggio, prima ancora di stappare la bottiglia."
          </p>
        </div>
      ),
      image: "/assets/projects/vini-gambino/chisiamo.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Estetica e Architettura dell'Ospitalità.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ho assunto la direzione totale dell'assetto grafico, disegnando un'interfaccia utente (UI) che lasciasse respirare la bellezza dei vigneti e della roccia vulcanica. L'uso di palette cromatiche calde e terrose, abbinate a una tipografia editoriale, accompagna l'utente in un vero e proprio tour virtuale.
          </p>
          <p className="text-white/80 leading-relaxed">
            Particolare attenzione è stata dedicata all'architettura dell'esperienza (UX) per le prenotazioni delle degustazioni: ho strutturato i flussi visivi in modo che la scoperta dei pacchetti enogastronomici risultasse tanto fluida e naturale quanto il racconto della famiglia Gambino.
          </p>
        </>
      ),
      image: [
        "/assets/projects/vini-gambino/e-shop.webp",
        "/assets/projects/vini-gambino/vino.webp",
        "/assets/projects/vini-gambino/le-terre.webp",
        "/assets/projects/vini-gambino/vino2.webp",
        "/assets/projects/vini-gambino/raggiungici.webp"
      ]
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Layout e Integrazione WordPress.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Tutto il design è stato declinato e ingegnerizzato su piattaforma WordPress. Il mio lavoro si è concentrato sulla costruzione di layout dinamici e performanti, capaci di ospitare fotografie ad alta risoluzione senza compromettere la velocità di caricamento.
          </p>
          <p className="text-white/80 leading-relaxed">
            Ho impaginato con cura ogni sezione — dallo shop delle bottiglie alle pagine di presentazione della tenuta — garantendo un'esperienza visiva impeccabile e reattiva su ogni dispositivo, permettendo all'azienda di comunicare il proprio prestigio su scala globale.
          </p>
        </>
      ),
      image: "/assets/projects/vini-gambino/le-terre.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Il sapore dell'altitudine.</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un sito web che cattura l'anima di un terroir unico al mondo. Un progetto che dimostra la capacità di progettare interfacce in cui the graphic design non è un semplice abbellimento, ma lo strumento principale per generare emozioni, fidelizzare il cliente e guidare con eleganza le conversioni nel settore dell'enoturismo d'alta gamma.
          </p>
        </>
      ),
      image: "/assets/projects/vini-gambino/vino.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Vini"
      title2="Gambino"
      type={t('vinigambino.hero_label')}
      description={
        <p>
          {t('vinigambino.hero_desc')}
        </p>
      }
      phases={phasesData}
      techList={["UI/UX & Graphic Layout", "WordPress Environment", "Hospitality & E-commerce", "Visual Storytelling"]}
      role={t('vinigambino.role_val')}
      year="2025"
      liveUrl="https://www.vinigambino.it/"
    >
      <NebulaImageSlider 
        images={[
          "/assets/projects/vini-gambino/homepage.webp",
          "/assets/projects/vini-gambino/chisiamo.webp",
          "/assets/projects/vini-gambino/e-shop.webp",
          "/assets/projects/vini-gambino/ivini.webp",
          "/assets/projects/vini-gambino/le-terre.webp",
          "/assets/projects/vini-gambino/news.webp",
          "/assets/projects/vini-gambino/vino.webp",
          "/assets/projects/vini-gambino/vino2.webp",
          "/assets/projects/vini-gambino/distributori.webp",
          "/assets/projects/vini-gambino/contatti.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaViniGambino;
