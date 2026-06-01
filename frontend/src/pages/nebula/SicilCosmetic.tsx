import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaSicilCosmetic = () => {
  return (
    <NebulaProjectLayout
      title="SicilCosmetic"
      type="E-COMMERCE • UI/UX"
      description={
        <>
          <p>
            Un progetto e-commerce end-to-end realizzato su piattaforma PrestaShop per l'agenzia Carnova. Cura integrale dell'ecosistema digitale: dal design dell'interfaccia utente alla stesura dei contenuti, fino alla configurazione tecnica e gestione dell'intero catalogo.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>La cosmetica professionale online.</h2>
          <p>
            SicilCosmetic si rivolge sia ai professionisti del settore beauty (barbieri e parrucchieri) sia al mercato consumer, offrendo un vastissimo assortimento di prodotti e attrezzature tecniche. La sfida principale del progetto era gestire la mole e la frammentazione di questo inventario: serviva una piattaforma capace di categorizzare centinaia di referenze in modo logico, mantenendo un'estetica pulita e rassicurante, capace di ispirare fiducia al momento dell'acquisto.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "Organizzare la bellezza: trasformare un catalogo complesso in un'esperienza d'acquisto fluida, intuitiva e orientata alla conversione."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>UI/UX e Architettura del Catalogo.</h2>
          <p>
            Ho curato interamente l'assetto grafico e l'architettura dell'informazione, progettando un sistema di navigazione diviso per macro-target (Uomo, Donna) e per esigenze specifiche (Styling, Cura del capello, Barba, Attrezzature). Il design è stato pensato per far risaltare i prodotti, utilizzando ampi spazi bianchi e una struttura a griglia rigorosa.
          </p>
          <p>
            A livello contenutistico, ho organizzato e impaginato le informazioni affinché rispondessero sia alle logiche di posizionamento SEO sia alla necessità di chiarezza dell'acquirente finale.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Configurazione Tecnica PrestaShop.</h2>
          <p>
            L'infrastruttura di vendita poggia interamente su PrestaShop. Oltre all'aspetto visivo, mi sono occupata in prima persona di tutta la configurazione tecnica "sotto il cofano": dall'impostazione dei metodi di pagamento e delle regole di spedizione, fino all'ottimizzazione del processo di checkout.
          </p>
          <p>
            Ogni pagina è stata strutturata per garantire velocità di caricamento e perfetta responsività mobile, abbattendo gli ostacoli tecnologici tra l'utente e il carrello.
          </p>

          <h3>05 — The Result</h3>
          <h2>Estetica e Conversione.</h2>
          <p>
            Il risultato è un negozio online che unisce l'eleganza del mondo beauty all'efficienza di una vera macchina di vendita. Un progetto che dimostra la capacità di orchestrare in totale autonomia la creazione di un e-commerce complesso, curando con la stessa precisione metodica sia l'estetica del front-end visivo, sia il motore tecnico necessario a generare fatturato.
          </p>
        </>
      }
      techList={["PrestaShop", "UI/UX Design", "Catalog Management", "Copywriting"]}
      role="PrestaShop & UI/UX Developer"
      year="2025"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group mb-12">
        
        <img 
          src="/assets/projects/sicil-cosmetic/homepage.webp" 
          alt="SicilCosmetic Homepage"
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "categoria.webp",
          "prodotto.webp",
          "ricerca.webp",
          "dettaglio.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/sicil-cosmetic/${img}`} 
              alt={`SicilCosmetic UI ${i}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaSicilCosmetic;
