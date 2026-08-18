import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { Phase } from "./components/NebulaProjectPhases";

const CMSDetails = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Problema",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">
            La maggior parte dei CMS in commercio nasce da un compromesso: per essere 'facili da personalizzare' caricano decine di plugin di terze parti, ognuno un potenziale punto di rottura. Il risultato è quasi sempre lo stesso — siti lenti, vulnerabili, e un'azienda che dopo sei mesi torna a dipendere da uno sviluppatore esterno per ogni minima modifica.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "La Filosofia",
      description: (
        <>
          <div className="py-12 border-l-2 border-[#d4af37] pl-8">
            <h2 className="font-fraunces text-4xl md:text-5xl italic text-[#d4af37] leading-tight">
              Il tuo sito è un asset aziendale, non un abbonamento infinito.
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">
            Non parto da un tema pronto da adattare. Scrivo il tema da zero, calibrato sulle esigenze reali del progetto — niente codice superfluo, niente funzionalità che non userai mai. Ogni riga inserita viene controllata per preservare le performance di caricamento e la stabilità SEO. Il pannello di gestione che consegno è pensato per essere usato da chi non scrive codice: testi, immagini, prodotti, tutto modificabile senza toccare una riga di HTML.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "Due Configurazioni",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">
            Il percorso si divide in due approcci possibili, a seconda dell'urgenza e del budget:
          </p>
          <div className="space-y-6">
            <div className="border-l border-[#d4af37]/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">1. Configurazione Premium Standard</h3>
              <p className="text-white/70 text-lg">
                Adattamento tecnico e ottimizzazione di un tema commerciale di fascia alta. Focus su performance, pulizia dei plugin e SEO base — la soluzione giusta quando i tempi sono stretti ma la qualità non è negoziabile.
              </p>
            </div>
            <div className="border-l border-[#d4af37]/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">2. Sviluppo Tema Custom da Zero</h3>
              <p className="text-white/70 text-lg">
                Scrittura totale del tema, White Theme proprietario. Zero page builder pesanti, frontend leggerissimo, pannello di gestione disegnato su misura per il tuo flusso di lavoro quotidiano.
              </p>
            </div>
          </div>
        </>
      ),
    }
  ];

  const prevProject = { url: "/sviluppo-custom", title: "Sviluppo Custom" };
  const nextProject = { url: "/sviluppo-mvp", title: "Sviluppo MVP" };

  return (
    <NebulaProjectLayout
      title1="Sviluppo CMS"
      role="APPROCCIO_01"
      year="2026"
      techList={["UI/UX Design personalizzato", "Sviluppo front-end reattivo", "Setup piattaforma headless o ibrida", "Training per gestione contenuti"]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">Un sito che cresce con te, non contro di te.</p>
          <p>Costruito per chi vuole smettere di chiedere il permesso per cambiare un prezzo, aggiungere un prodotto, aggiornare un testo. Tema scritto da zero, gestione in totale autonomia, performance che un page builder commerciale non può garantire.</p>
        </div>
      }
      phases={phasesData}
      prev={prevProject}
      next={nextProject}
      prevLabel="Servizio Precedente"
      nextLabel="Servizio Successivo"
      finalCta={{
        title: "IL PROSSIMO PASSO",
        description: "Se il tuo business ha smesso di stare dentro a un template, è il momento di costruire qualcosa che non ha limiti.",
        buttonText: "PARLAMI DEL TUO PROGETTO",
        buttonUrl: "/contatti"
      }}
    />
  );
};
export default CMSDetails;
