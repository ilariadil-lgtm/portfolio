import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaViniGambino = () => {
  return (
    <NebulaProjectLayout
      title="Vini Gambino"
      type="UI/UX DESIGN • WEB LAYOUT"
      description={
        <>
          <p>
            L'essenza del terroir vulcanico tradotta in un'esperienza digitale immersiva. Progetto realizzato in collaborazione con l'agenzia Carnova per una storica cantina alle pendici dell'Etna, curando integralmente l'assetto grafico, l'interfaccia utente (UI/UX) e il layout su piattaforma WordPress.
          </p>

          <h3>01 — Il Contesto</h3>
          <h2>Un sorso di Etna online.</h2>
          <p>
            Situata sul versante nord-orientale dell'Etna, la Cantina Gambino è un'eccellenza che unisce la tradizione vinicola a una location mozzafiato con vista sul Golfo di Taormina. La sfida posta dall'agenzia Carnova era duplice: da un lato, creare uno spazio e-commerce elegante per la vendita dei vini vulcanici; dall'altro, trasmettere il calore dell'ospitalità siciliana, invitando gli utenti di tutto il mondo a prenotare le rinomate esperienze di degustazione in cantina. Serviva una vetrina digitale che fosse al contempo pragmatica ed emozionale.
          </p>

          <h3>02 — L'Obiettivo</h3>
          <p className="border-l-2 border-[#d4af37]/30 pl-4 py-2 italic text-white/80">
            "Tradurre la potenza del vulcano e l'eleganza del vino in un percorso visivo che invita all'assaggio, prima ancora di stappare la bottiglia."
          </p>

          <h3>03 — Il Processo</h3>
          <h2>Estetica e Architettura dell'Ospitalità.</h2>
          <p>
            Ho assunto la direzione totale dell'assetto grafico, disegnando un'interfaccia utente (UI) che lasciasse respirare la bellezza dei vigneti e della roccia vulcanica. L'uso di palette cromatiche calde e terrose, abbinate a una tipografia editoriale, accompagna l'utente in un vero e proprio tour virtuale.
          </p>
          <p>
            Particolare attenzione è stata dedicata all'architettura dell'esperienza (UX) per le prenotazioni delle degustazioni: ho strutturato i flussi visivi in modo che la scoperta dei pacchetti enogastronomici risultasse tanto fluida e naturale quanto il racconto della famiglia Gambino.
          </p>

          <h3>04 — Sviluppo</h3>
          <h2>Layout e Integrazione WordPress.</h2>
          <p>
            Tutto il design è stato declinato e ingegnerizzato su piattaforma WordPress. Il mio lavoro si è concentrato sulla costruzione di layout dinamici e performanti, capaci di ospitare fotografie ad alta risoluzione senza compromettere la velocità di caricamento.
          </p>
          <p>
            Ho impaginato con cura ogni sezione — dallo shop delle bottiglie alle pagine di presentazione della tenuta — garantendo un'esperienza visiva impeccabile e reattiva su ogni dispositivo, permettendo all'azienda di comunicare il proprio prestigio su scala globale.
          </p>

          <h3>05 — The Result</h3>
          <h2>Il sapore dell'altitudine.</h2>
          <p>
            Il risultato è un sito web che cattura l'anima di un terroir unico al mondo. Un progetto che dimostra la capacità di progettare interfacce in cui the graphic design non è un semplice abbellimento, ma lo strumento principale per generare emozioni, fidelizzare il cliente e guidare con eleganza le conversioni nel settore dell'enoturismo d'alta gamma.
          </p>
        </>
      }
      techList={["UI/UX & Graphic Layout", "WordPress Environment", "Hospitality & E-commerce", "Visual Storytelling"]}
      role="UI/UX & Web Developer"
      year="2024"
    >
      
      {/* Immagine Principale */}
      <div className="w-full rounded-none overflow-hidden  bg-[#050505] relative group mb-12">
        
        <img 
          src="/assets/projects/vini-gambino/homepage.webp" 
          alt="Vini Gambino Homepage"
          className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "chisiamo.webp",
          "e-shop.webp",
          "ivini.webp",
          "le-terre.webp",
          "news.webp",
          "vino.webp",
          "vino2.webp",
          "distributori.webp",
          "contatti.webp"
        ].map((img, i) => (
          <div key={i} className="w-full rounded-none overflow-hidden  bg-[#050505] relative group">
            
            <img 
              src={`/assets/projects/vini-gambino/${img}`} 
              alt={`Vini Gambino UI ${i}`}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

    </NebulaProjectLayout>
  );
};

export default NebulaViniGambino;
