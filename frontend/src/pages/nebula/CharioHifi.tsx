import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaCharioHifi = () => {
  return (
    <NebulaProjectLayout
      title="Chario Hifi"
      type="WEB_PLATFORM"
      description={
        <>
          <p>
            Tradurre 50 anni di eccellenza artigianale in un'esperienza web senza compromessi. Progettazione UI/UX minimale e sviluppo full-stack di un'architettura su misura, per un ecosistema digitale elegante e ultra-performante.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Quando il prodotto è analogico, ma l'esperienza è digitale.</h2>
          <p>
            Chario Hifi è uno storico marchio italiano che produce speaker audio dal 1975, celebre in tutto il mondo per i suoi cabinet in legno massello scolpiti a mano. Eppure, nonostante il pregio assoluto dei prodotti fisici, la loro presenza online non rispecchiava più il prestigio e l'alta gamma dei loro prodotti.
          </p>
          <p>
            Il sito precedente risultava lento, frammentato e — paradossalmente per un'eccellenza del Made in Italy — disponibile esclusivamente in lingua inglese. Serviva un'operazione di riposizionamento radicale: un redesign visivo per esaltare i dettagli materici dei diffusori e una nuova architettura multilingua, partendo finalmente dall'italiano, per restituire all'azienda la sua vera voce.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-cyan-500/50 pl-4 py-2 italic text-cyan-100">
            "Tradurre la purezza del suono analogico e l'eccellenza materica in un'esperienza digitale senza compromessi."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>Design invisibile.</h2>
          <p>
            Per l'interfaccia utente, la regola fondamentale è stata "sottrarre". Ho adottato un approccio essenziale ma profondamente editoriale: l'utilizzo di font aggraziati estremamente sottili per i titoli, abbinati a un grottesco solido per garantire la massima leggibilità nei paragrafi descrittivi.
          </p>
          <p>
            I colori dominanti rispecchiano fedelmente la palette naturale dei diffusori: il bordeaux profondo, le sfumature del legno scuro e un crema polveroso per il background. Nessun bottone arrotondato, nessuna ombra superflua. Lo spazio bianco (o negativo) è stato massimizzato strategicamente per dare a ogni singola fotografia il respiro che merita, permettendo all'utente di perdersi nei dettagli del prodotto senza alcuna distrazione visiva.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>L'Ecosistema Sophia & Chario Builder</h2>
          <p>
            Dal punto di vista tecnico, il progetto si poggia su un'architettura WordPress completamente custom. Ho abbandonato i classici (e pesanti) costruttori visuali per sviluppare Sophia, un tema parent modulare in PHP, accoppiato a un tema child specifico per Chario. Tutta la logica di stile, le animazioni fluide (gestite tramite GSAP e ScrollTrigger) e le interazioni sono state incapsulate e isolate. Il risultato è un rendering front-end istantaneo e un codice purissimo, capace di sostenere senza esitazioni (jank) i render 3D e le fotografie ad alta risoluzione necessarie per il mercato luxury.
          </p>
          <p>
            Il vero fiore all'occhiello è il Chario HiFi Builder: un page builder proprietario manifest-driven. Attraverso una connessione JavaScript in tempo reale (PostMessage API), il cliente può modificare i contenuti e vedere i risultati istantaneamente nell'iframe di preview, mantenendo il layout blindato. Infine, per garantire solidità globale, ho ingegnerizzato lo Zenith Recovery Engine: un sistema di fallback proprietario che mappa le traduzioni e i percorsi URL direttamente a livello di codice, garantendo che il sito non si "rompa" mai durante il cambio lingua.
          </p>
        </>
      }
      techList={["Sophia Theme", "Custom Wordpress", "PHP Modulare", "GSAP & SWIPER", "Api Realtime", "UI/UX DESIGN"]}
      role="Full-Stack Developer & UI/UX Designer"
      year="2026"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#030712] relative group mb-12">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
          MAIN_VIEW.DAT
        </div>
        <img 
          src="/assets/projects/chario-hifi/homepage.webp" 
          alt="Chario Hifi View"
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "dettaglio-prodotto.webp",
          "tecnologia.webp",
          "costruzione.webp",
          "rivenditori.webp",
          "su-misura.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030712] relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              MODULE_{i}.SYS
            </div>
            <img 
              src={`/assets/projects/chario-hifi/${img}`} 
              alt={`Chario Hifi UI ${i}`}
              className="w-full h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaCharioHifi;
