import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaVillaMasami = () => {
  return (
    <NebulaProjectLayout
      title="Villa Masami"
      type="BRAND IDENTITY • UI/UX"
      description={
        <>
          <p>
            Un progetto digitale completo, realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura: dall'ideazione e realizzazione del logo alla stesura dei testi, fino allo sviluppo dell'infrastruttura web su WordPress.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>L'ospitalità siciliana online.</h2>
          <p>
            Villa Masami necessitava di un'identità web che riflettesse l'eleganza e la tranquillità dei suoi spazi, situati in una posizione strategica vicino alla Valle dei Templi. Lavorando in stretta sinergia con l'agenzia Carnova, il mandato era chiaro: creare una vetrina digitale empatica e funzionale.
          </p>
          <p>
            Una piattaforma capace di trasmettere calore umano e, al tempo stesso, mettere in risalto i vantaggi logistici della struttura, come l'accesso indipendente tramite tastierino numerico e la gestione automatizzata.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "Più comodità, meno pensieri: tradurre il calore dell'accoglienza reale in un'esperienza di navigazione fluida e priva di ostacoli."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>Branding, UI e Copywriting.</h2>
          <p>
            In questo progetto, l'identità del brand, l'interfaccia utente e l'anima editoriale sono nate insieme. Sono partita dall'ideazione e dal design del logo, creando un segno grafico che catturasse l'eleganza e l'essenza della villa.
          </p>
          <p>
            Da lì, ho curato la stesura dei contenuti con un tono di voce rassicurante e ho disegnato una UI progettata per valorizzare gli spazi fisici, guidando l'utente in un percorso visivo pulito, intuitivo e orientato alla conversione.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Ecosistema WordPress Multilingua.</h2>
          <p>
            Lato sviluppo, ho implementato e configurato l'intero sito su piattaforma WordPress, occupandomi dell'inserimento e dell'impaginazione di ogni singola vista. Oltre a garantire una perfetta responsività su dispositivi mobile, ho strutturato un'architettura nativamente bilingue (Italiano e Inglese).
          </p>
          <p>
            Questo ha permesso alla struttura di posizionarsi immediatamente sul mercato turistico internazionale, offrendo un'esperienza utente coerente in entrambe le lingue.
          </p>

          <h3>05 — The Result</h3>
          <h2>Il sapore dell'accoglienza.</h2>
          <p>
            Il risultato finale è un sito web che respira la stessa aria di quiete della struttura fisica. Un progetto end-to-end che dimostra la capacità di orchestrare ogni sfumatura della presenza online: dal design dell'interfaccia alla cura minuziosa della parola scritta, restituendo all'agenzia partner e al cliente finale un prodotto pronto per il mercato.
          </p>
        </>
      }
      techList={["Brand & Logo Design", "UI/UX Design", "Copywriting", "WordPress"]}
      role="UI/UX & Web Developer"
      year="2025"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group mb-12">
        
        <img 
          src="/assets/projects/villa-masami/homepage.webp" 
          alt="Villa Masami Homepage"
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "struttura.webp",
          "camere.webp",
          "servizi.webp",
          "contatti.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/villa-masami/${img}`} 
              alt={`Villa Masami UI ${i}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaVillaMasami;
