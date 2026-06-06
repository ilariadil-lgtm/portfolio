import React from "react";
import { motion } from "framer-motion";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaCharioHifi = () => {
  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Contesto",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Quando il prodotto è analogico, ma l'esperienza è digitale.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Chario Hifi è uno storico marchio italiano che produce speaker audio dal 1975, celebre in tutto il mondo per i suoi cabinet in legno massello scolpiti a mano. Eppure, nonostante il pregio assoluto dei prodotti fisici, la loro presenza online non rispecchiava più il prestigio e l'alta gamma dei loro prodotti.
          </p>
          <p className="text-white/80 leading-relaxed">
            Il sito precedente risultava lento, frammentato e — paradossalmente per un'eccellenza del Made in Italy — disponibile esclusivamente in lingua inglese. Serviva un'operazione di riposizionamento radicale: un redesign visivo per esaltare i dettagli materici dei diffusori e una nuova architettura multilingua, partendo finalmente dall'italiano, per restituire all'azienda la sua vera voce.
          </p>
        </>
      ),
      image: "/assets/chario-hero.webp"
    },
    {
      id: "02",
      title: "L'Obiettivo",
      description: (
        <div className="flex flex-col justify-center h-full">
          <p className="border-l-2 border-[#d4af37]/50 pl-6 py-4 italic text-white/90 text-xl font-outfit">
            "Tradurre la purezza del suono analogico e l'eccellenza materica in un'esperienza digitale senza compromessi."
          </p>
          
        </div>
      ),
      image: "/assets/chario-gallery-1.webp"
    },
    {
      id: "03",
      title: "Il Processo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">Design invisibile.</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Per l'interfaccia utente, la regola fondamentale è stata "sottrarre". Ho adottato un approccio essenziale ma profondamente editoriale: l'utilizzo di font aggraziati estremamente sottili per i titoli, abbinati a un grottesco solido per garantire la massima leggibilità nei paragrafi descrittivi.
          </p>
          <p className="text-white/80 leading-relaxed">
            I colori dominanti rispecchiano fedelmente la palette naturale dei diffusori: il bordeaux profondo, le sfumature del legno scuro e un crema polveroso per il background. Nessun bottone arrotondato, nessuna ombra superflua. Lo spazio bianco (o negativo) è stato massimizzato strategicamente per dare a ogni singola fotografia il respiro che merita, permettendo all'utente di perdersi nei dettagli del prodotto senza alcuna distrazione visiva.
          </p>
        </>
      ),
      image: "/assets/chario-process.webp"
    },
    {
      id: "04",
      title: "Sviluppo",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'Ecosistema Sophia & Chario Builder</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Dal punto di vista tecnico, il progetto si poggia su un'architettura WordPress completamente custom. Ho abbandonato i classici (e pesanti) costruttori visuali per sviluppare Sophia, un tema parent modulare in PHP, accoppiato a un tema child specifico per Chario. Tutta la logica di stile, le animazioni fluide (gestite tramite GSAP e ScrollTrigger) e le interazioni sono state incapsulate e isolate. Il risultato è un rendering front-end istantaneo e un codice purissimo, capace di sostenere senza esitazioni (jank) i render 3D e le fotografie ad alta risoluzione necessarie per il mercato luxury.
          </p>
          <p className="text-white/80 leading-relaxed">
            Il vero fiore all'occhiello è il Chario HiFi Builder: un page builder proprietario manifest-driven. Attraverso una connessione JavaScript in tempo reale (PostMessage API), il cliente può modificare i contenuti e vedere i risultati istantaneamente nell'iframe di preview, mantenendo il layout blindato. Infine, per garantire solidità globale, ho ingegnerizzato lo Zenith Recovery Engine: un sistema di fallback proprietario che mappa le traduzioni e i percorsi URL direttamente a livello di codice, garantendo che il sito non si "rompa" mai durante il cambio lingua.
          </p>
        </>
      ),
      image: "/assets/chario-gallery-2.webp"
    },
    {
      id: "05",
      title: "Il Risultato",
      description: (
        <>
          <h2 className="font-bricolage font-bold text-3xl text-white mb-6">L'Estetica Sonora</h2>
          <p className="text-white/80 leading-relaxed">
            Il risultato è un ecosistema web che converte non attraverso l'aggressività delle Call to Action, ma tramite un vero e proprio innamoramento estetico. Dalla homepage fino alla complessità del backend multilingua, ogni singolo componente è stato ingegnerizzato e disegnato con un unico scopo: mettersi al servizio del suono e rendere omaggio all'eccellenza del brand.
          </p>
        </>
      ),
      image: "/assets/chario-gallery-3.webp"
    }
  ];

  return (
    <NebulaProjectLayout
      title1="Chario"
      title2="Hifi"
      type="PIATTAFORMA WEB"
      description={
        <p className="mb-8">
          Tradurre 50 anni di eccellenza artigianale in un'esperienza web senza compromessi. Progettazione UI/UX minimale e sviluppo full-stack di un'architettura su misura, per un ecosistema digitale elegante e ultra-performante.
        </p>
      }
      phases={phasesData}
      techList={["Sophia Theme", "Custom Wordpress", "PHP Modulare", "GSAP & SWIPER", "Api Realtime", "UI/UX DESIGN"]}
      role="Full-Stack Developer & UI/UX Designer"
      year="2026"
      liveUrl="https://chariohifi.it/"
    >
      <NebulaImageSlider 
        images={[
          "/assets/chario-hero.webp",
          "/assets/chario-gallery-1.webp",
          "/assets/chario-process.webp",
          "/assets/chario-gallery-2.webp",
          "/assets/chario-gallery-3.webp"
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaCharioHifi;
