import React, { useEffect } from "react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { Phase } from "./components/NebulaProjectPhases";

const MVPDetails = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: "Sviluppo MVP",
    description:
      "Il prodotto minimo per validare un'idea in tempi brevi, costruito su una base tecnica che non va buttata al primo round di crescita.",
    canonical: "/sviluppo-mvp",
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: "Sviluppo MVP",
        serviceType: "Sviluppo MVP",
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description:
          "Il prodotto minimo per validare un'idea in tempi brevi, costruito su una base tecnica che non va buttata al primo round di crescita.",
        url: "https://ilariadiliberto.com/sviluppo-mvp",
      }),
    [],
  );

  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Problema",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">
            La maggior parte degli MVP fallisce prima ancora di nascere — non per l'idea, ma per il tempo e il capitale bruciati a costruire funzionalità che nessuno ha ancora chiesto. Over-engineering estetico, feature secondarie, infrastrutture sovradimensionate: il risultato è un lancio in ritardo, su un prodotto che il mercato non ha ancora validato.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "La Filosofia",
      description: (
        <>
          <div className="py-12 border-l-2 border-gold pl-8">
            <h2 className="font-fraunces text-4xl md:text-5xl italic text-gold leading-tight">
              Costruire ciò che nessuno ha chiesto.
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">
            Il focus è un solo punto: il Core Loop. L'unica funzionalità che risolve davvero il problema del tuo utente finale. Tutto il resto — estetica secondaria, feature 'belle da avere', integrazioni non essenziali — viene tagliato senza esitazione, perché ogni giorno risparmiato è un giorno guadagnato sul mercato. Lo stack è scelto per la stessa ragione: frontend reattivo costruito su framework agili, backend serverless che azzera i tempi di configurazione.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "Dopo il Lancio",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">
            Scalabilità dal giorno zero.
          </p>
          <div className="space-y-6">
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">1. Analisi dei Dati Reali</h3>
              <p className="text-white/70 text-lg">
                Un MVP non è un punto di arrivo: è il primo dato reale che hai sulla tua idea. Lanciamo per testare il prodotto sul mercato, non in laboratorio.
              </p>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">2. Infrastruttura Serverless</h3>
              <p className="text-white/70 text-lg">
                Se le metriche confermano la direzione, l'architettura serverless costruita in questa fase è pensata per scalare — senza dover ripartire da zero con uno sviluppo Custom quando sarà il momento.
              </p>
            </div>
          </div>
        </>
      ),
    }
  ];

  const prevProject = { url: "/sviluppo-cms", title: "Sviluppo CMS" };
  const nextProject = { url: "/sviluppo-custom", title: "Sviluppo Custom" };

  return (
    <NebulaProjectLayout
      title1="Sviluppo MVP"
      role="APPROCCIO_02"
      year="2026"
      techList={["Interfaccia essenziale (Core Loop)", "Sviluppo Full-Stack Agile", "Integrazione tool di Analytics", "Architettura predisposta allo scale-up"]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">Il mercato non aspetta — e nemmeno dovresti farlo tu.</p>
          <p>Quattro settimane per trasformare un'idea in un prodotto che gli utenti possono davvero usare. Non un prototipo da mostrare agli investitori: un MVP funzionante, pronto a raccogliere dati reali sul mercato reale.</p>
        </div>
      }
      phases={phasesData}
      prev={prevProject}
      next={nextProject}
      prevLabel="Servizio Precedente"
      nextLabel="Servizio Successivo"
      finalCta={{
        title: "IL PROSSIMO PASSO",
        description: "Se hai un'idea che deve incontrare il mercato prima che qualcun altro lo faccia per te, hai 28 giorni a disposizione. Iniziamo.",
        buttonText: "PARLAMI DEL TUO PROGETTO",
        buttonUrl: "/contatti"
      }}
    />
  );
};
export default MVPDetails;
