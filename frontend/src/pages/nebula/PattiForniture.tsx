import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaPattiForniture = () => {
  return (
    <NebulaProjectLayout
      title="Patti Forniture"
      type="WEB & CONTENT"
      description={
        <>
          <p>
            Un progetto web corporate realizzato in collaborazione con l'agenzia Carnova. Il restyling digitale di una storica azienda leader nel Sud Italia per le forniture industriali, termoidraulica ed edilizia. Cura dell'interfaccia utente, stesura dei testi strategici e sviluppo completo su WordPress.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Digitalizzare 30 anni di esperienza.</h2>
          <p>
            Da oltre tre decenni, F.lli Patti è un punto di riferimento per rivenditori, installatori e privati. L'azienda aveva bisogno di una vetrina digitale che mettesse in ordine la sua vasta offerta commerciale — termoidraulica, edilizia, ferramenta e climatizzazione — senza perdere il senso di affidabilità e competenza che la contraddistingue.
          </p>
          <p>
            Lavorando in sinergia con l'agenzia Carnova, la sfida è stata trasformare un'offerta aziendale complessa in un'esperienza di navigazione chiara, autorevole e accessibile.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-cyan-500/50 pl-4 py-2 italic text-cyan-100">
            "Trasferire la solidità e l'assortimento del punto vendita fisico in un'infrastruttura digitale orientata alla chiarezza e alla conversione."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>UI/UX e Architettura dell'Informazione.</h2>
          <p>
            In questo progetto, la parola d'ordine è stata "chiarezza". Lavorando con un'identità visiva preesistente, mi sono concentrata interamente sull'architettura dell'informazione e sull'interfaccia utente (UI).
          </p>
          <p>
            Ho progettato un layout capace di far respirare i diversi macro-settori dell'azienda, organizzando servizi, attrezzature e marchi trattati in sezioni logiche. Il copywriting è stato studiato per adottare un tono di voce professionale, rassicurante e orientato al servizio, parlando efficacemente sia al target B2B che a quello consumer.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Ecosistema WordPress Corporate.</h2>
          <p>
            L'infrastruttura è stata sviluppata interamente su piattaforma WordPress, ottimizzando la gestione dei contenuti per permettere all'azienda di esporre la propria offerta in modo strutturato.
          </p>
          <p>
            Oltre a curare l'impaginazione di ogni singola vista e la perfetta responsività mobile, ho focalizzato l'attenzione sui percorsi di conversione: chiamate rapide, pulsanti WhatsApp e moduli per la richiesta di preventivi sono posizionati strategicamente per trasformare il traffico in contatti commerciali reali.
          </p>

          <h3>05 — The Result</h3>
          <h2>Solidità Commerciale.</h2>
          <p>
            Il risultato finale è una piattaforma web che rispecchia esattamente la solidità e la grandezza dell'azienda. Un progetto che dimostra la capacità di prendere in carico la complessità di un business strutturato (con decine di categorie merceologiche e target differenti), organizzandone i contenuti per consegnare all'agenzia partner e al cliente uno strumento commerciale efficiente, veloce e moderno.
          </p>
        </>
      }
      techList={["UI/UX Design", "Information Architecture", "Copywriting", "WordPress Corporate"]}
      role="UI/UX & Web Developer"
      year="2024"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#030712] relative group mb-12">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
          MAIN_VIEW.DAT
        </div>
        <img 
          src="/assets/projects/patti-forniture/homepage.webp" 
          alt="Patti Forniture Homepage"
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "settori.webp",
          "azienda.webp",
          "partners.webp",
          "contatti.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-3xl overflow-hidden border border-white/10 bg-[#030712] relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/10 font-mono text-[8px] uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              MODULE_{i}.SYS
            </div>
            <img 
              src={`/assets/projects/patti-forniture/${img}`} 
              alt={`Patti Forniture UI ${i}`}
              className="w-full h-auto opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaPattiForniture;
