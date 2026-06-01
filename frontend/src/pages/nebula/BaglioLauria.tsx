import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaBaglioLauria = () => {
  return (
    <NebulaProjectLayout
      title="Baglio Lauria"
      type="HOSPITALITY_WEB"
      description={
        <>
          <h3>01 — Il Contesto</h3>
          <h2>Il fascino del Made in Sicily.</h2>
          <p>
            Immerso tra ulivi e vigneti a pochi chilometri dalla Valle dei Templi, Baglio Lauria è una struttura 
            ricettiva di charme che unisce l'ospitalità rurale all'eleganza di una location per matrimoni ed eventi esclusivi. 
            Lavorando in sinergia con Carnova, l'obiettivo era creare una vetrina digitale che trasmettesse immediatamente questa duplice 
            anima: il calore rilassato di un soggiorno in Sicilia, unito alla professionalità e all'estetica richieste 
            per incorniciare momenti indimenticabili.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "Trasmettere il calore del sole siciliano e l'eleganza della pietra antica attraverso un'interfaccia capace di far sognare l'utente dal primo click."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>UI/UX e Narrazione Visiva.</h2>
          <p>
            In questo progetto, il design dell'interfaccia e il copywriting hanno viaggiato di pari passo. Ho progettato una UI pulita ed evocativa, pensata per esaltare le fotografie degli ampi spazi esterni e della scenografica piscina.
          </p>
          <p>
            L'architettura dell'informazione è stata strutturata per guidare l'utente attraverso due percorsi paralleli ma integrati: la prenotazione delle suite per i soggiorni di relax e la scoperta degli spazi dedicati ai grandi eventi. I testi, curati interamente da me, adottano un tono di voce emozionale, accogliente e raffinato.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Layout WordPress e Conversione.</h2>
          <p>
            L'intero ecosistema visivo è stato declinato su piattaforma WordPress. Mi sono occupata dell'impaginazione di ogni singola vista, assicurandomi che l'esperienza di navigazione fosse immersiva e perfettamente reattiva su qualsiasi dispositivo.
          </p>
          <p>
            Ho curato l'integrazione degli strumenti di contatto e la presentazione chiara dei servizi, costruendo un percorso utente senza frizioni che accompagna il visitatore dalla fase di ispirazione iniziale fino alla richiesta di disponibilità per il proprio soggiorno o evento.
          </p>

          <h3>05 — The Result</h3>
          <h2>L'Emozione dell'Accoglienza.</h2>
          <p>
            Il risultato è un sito web che respira la stessa aria di quiete della campagna in cui è immerso. Un progetto che conferma la capacità di tradurre il prestigio fisico di una location in un ambiente digitale altrettanto elegante, consegnando all'agenzia partner e al cliente finale uno strumento di comunicazione capace di generare vere e proprie emozioni prima ancora di varcare la soglia del Baglio.
          </p>
        </>
      }
      techList={["UI/UX Design", "Copywriting", "WordPress", "Hospitality"]}
      role="UI/UX & Web Developer"
      year="2023"
      liveUrl="https://www.bagliolauria.com/"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
        
        <img 
          src="/assets/projects/baglio-lauria/homepage.webp" 
          alt="Baglio Lauria Homepage"
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "il-baglio.webp",
          "lecamere.webp",
          "servizi.webp",
          "dintorni.webp",
          "contatti.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/baglio-lauria/${img}`} 
              alt={`Baglio Lauria Visual ${i}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaBaglioLauria;
