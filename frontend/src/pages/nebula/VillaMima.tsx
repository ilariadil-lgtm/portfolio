import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaVillaMima = () => {
  return (
    <NebulaProjectLayout
      title="Villa Mima"
      type="UI/UX DESIGN • WEB & CONTENT • WEDDING & EVENTS"
      description={
        <>
          <p>
            Un progetto digitale raffinato realizzato in collaborazione con l'agenzia Carnova. Cura dell'interfaccia utente, della narrazione visiva e dello sviluppo su WordPress per una location d'eccellenza dedicata a matrimoni e ricevimenti in Sicilia.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Eventi sotto le stelle.</h2>
          <p>
            Immersa tra uliveti e vigneti a due passi dalla Valle dei Templi, Villa Mima è molto più di una sala ricevimenti: è un'esperienza sensoriale completa. In collaborazione con Carnova, la sfida era trasmettere online questa forte identità e la cura maniacale per i dettagli.
          </p>
          <p>
            Serviva una piattaforma capace di esaltare non solo la bellezza paesaggistica e architettonica della struttura, ma anche l'alta cucina e il 'food design', elementi decisivi per chi è alla ricerca della location perfetta per un evento esclusivo.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "L'eleganza si nasconde nei dettagli: un'interfaccia progettata per far pregustare l'atmosfera magica di un evento indimenticabile, ancor prima del primo assaggio."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>UI/UX e Food Design.</h2>
          <p>
            Ho sviluppato un'architettura visiva che mette in primo piano le emozioni e i sensi. Il layout lascia ampio respiro alle fotografie della location e alle creazioni culinarie artistiche dello chef, trattando ogni piatto come un'opera di design.
          </p>
          <p>
            L'uso di tipografie graziate ed eleganti, unito a spazi negativi generosi, crea un'atmosfera di lusso sussurrato, guidando l'utente attraverso i servizi: dai matrimoni da favola agli show cooking, fino all'intrattenimento a bordo piscina.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>WordPress e Narrazione Emozionale.</h2>
          <p>
            A livello tecnico, l'intero ecosistema è stato ingegnerizzato su piattaforma WordPress, garantendo fluidità e velocità di caricamento nonostante l'alta densità di contenuti fotografici. L'esperienza utente è stata studiata per abbattere ogni attrito nel percorso di conversione.
          </p>
          <p>
            I moduli di contatto e le call to action sono posizionati in modo organico e non invasivo, invitando i futuri sposi o i planner a mettersi in contatto con la struttura in modo semplice, empatico e diretto.
          </p>

          <h3>05 — The Result</h3>
          <h2>La magia dei dettagli.</h2>
          <p>
            Il risultato è un sito web che cattura perfettamente l'essenza dell'ospitalità e dell'alta cucina. Un progetto che dimostra come il giusto equilibrio tra design minimale, immagini d'impatto e un copy accurato possa trasformare una vetrina digitale nel primo, fondamentale passo verso l'organizzazione di un evento perfetto.
          </p>
        </>
      }
      techList={["UI/UX Design", "WordPress Environment", "Copywriting & Storytelling"]}
      role="UI/UX & Web Developer"
      year="2023"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group mb-12">
        
        <img 
          src="/assets/projects/villa-mima/home.webp" 
          alt="Villa Mima Homepage"
          onError={(e) => { e.currentTarget.src = "/assets/project-visio.png"; }}
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "la-villa.webp",
          "menu.webp",
          "contatti.webp",
          "home.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/villa-mima/${img}`} 
              alt={`Villa Mima UI ${i}`}
              onError={(e) => { e.currentTarget.src = "/assets/project-visio.png"; }}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaVillaMima;
