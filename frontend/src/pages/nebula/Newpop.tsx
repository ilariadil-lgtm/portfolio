import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaNewpop = () => {
  return (
    <NebulaProjectLayout
      title="Newpop"
      type="E-COMMERCE"
      description={
        <>
          <p>
            L'e-commerce dell'arredamento e del design d'eccellenza. Progetto realizzato in collaborazione con l'agenzia Carnova, curando integralmente l'assetto grafico, l'interfaccia utente (UI/UX) e parte della configurazione tecnica dell'infrastruttura PrestaShop.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Progettare la casa iconica.</h2>
          <p>
            Newpop è una vetrina d'eccellenza dedicata al design d'interni, all'illuminazione e all'home decor, che ospita i pezzi iconici dei migliori designer e brand mondiali (da Artemide a Smeg, fino a Fatboy e Le Creuset). La necessità era quella di creare una piattaforma che non si limitasse a vendere mobili, ma che riuscisse a comunicare il valore intrinseco, lo stile e la storia di ogni singolo oggetto di design. Era indispensabile un'interfaccia all'altezza dei brand ospitati: elegante, minimale e profondamente immersiva.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "Mettersi al servizio del design d'autore: un'interfaccia invisibile che lascia la scena alla bellezza dei prodotti, guidando l'utente verso una conversione naturale."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>UI/UX e Assetto Grafico.</h2>
          <p>
            Ho curato l'intera veste grafica partendo dall'assunto che il design del sito non dovesse mai sovrastare i prodotti. Ho organizzato l'enorme catalogo in categorie macro-tematiche pulite (Arredamento, Tavola & Cucina, Illuminazione, Outdoor), permettendo una navigazione fluida.
          </p>
          <p>
            L'uso strategico degli spazi bianchi, abbinato a una tipografia elegante, ha creato un'esposizione "da galleria d'arte", dove i colori decisi dei prodotti e le forme dei pezzi di design diventano i veri protagonisti della user experience.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Motore PrestaShop ed Esperienza Utente.</h2>
          <p>
            A supporto della progettazione visiva, ho affiancato il team di sviluppo nella configurazione tecnica su base PrestaShop. Il mio intervento si è concentrato sull'ottimizzazione dell'esperienza utente a livello strutturale: dall'implementazione dei filtri di ricerca per i designer, fino alla cura del mega-menu di navigazione e alla corretta formattazione dei caroselli prodotto.
          </p>
          <p>
            L'obiettivo tecnico era garantire che la velocità di caricamento e la stabilità dell'e-commerce fossero impeccabili, anche in presenza di migliaia di referenze.
          </p>

          <h3>05 — The Result</h3>
          <h2>Il lusso della semplicità.</h2>
          <p>
            Il risultato è una boutique digitale di respiro internazionale, in cui l'estetica raffinata incontra le logiche dell'e-commerce moderno. Un progetto che dimostra la capacità di gestire l'interfaccia grafica per il settore del lusso e del design d'interni, creando ecosistemi visivi dove l'utente non acquista semplicemente un oggetto, ma una vera e propria ispirazione.
          </p>
        </>
      }
      techList={["PrestaShop", "UI/UX Design", "Visual Merchandising"]}
      role="UI/UX & PrestaShop Developer"
      year="2024"
      liveUrl="https://www.newpop.it/"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group mb-12">
        
        <img 
          src="/assets/projects/newpop/homepage.webp" 
          alt="Newpop Homepage"
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "categoria.webp",
          "prodotto.webp",
          "marchi.webp",
          "accedi.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/newpop/${img}`} 
              alt={`Newpop UI ${i}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaNewpop;
