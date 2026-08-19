import React, { useEffect } from "react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { Phase } from "./components/NebulaProjectPhases";

const CustomDetails = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: "Sviluppo Custom",
    description:
      "Infrastruttura dedicata per progetti che hanno superato i limiti di una piattaforma pronta: architettura, logica e scalabilita disegnate su misura.",
    canonical: "/sviluppo-custom",
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: "Sviluppo web custom",
        serviceType: "Sviluppo Custom",
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description:
          "Infrastruttura dedicata per progetti che hanno superato i limiti di una piattaforma pronta: architettura, logica e scalabilita disegnate su misura.",
        url: "https://ilariadiliberto.com/sviluppo-custom",
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
            Le soluzioni SaaS e i CMS commerciali funzionano fino al momento in cui il tuo business cresce oltre i loro limiti. A quel punto ogni azienda strutturata affronta lo stesso muro: integrazioni impossibili, canoni che salgono senza controllo, un fornitore terzo che decide cosa puoi e non puoi fare con il tuo stesso prodotto.
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
              Design e tecnologia proprietari.
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">
            Direzione artistica e UI/UX progettate da zero su Figma. Sotto la superficie, un backend proprietario: database relazionali complessi, query ottimizzate, API REST sicure. L'infrastruttura vive su AWS. Al saldo del progetto, cessione totale dei diritti sul codice sorgente: non un servizio in abbonamento, ma un asset patrimoniale reale che appartiene solo a te.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "Esclusività",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">
            Un progetto alla volta.
          </p>
          <div className="space-y-6">
            <div className="border-l border-[#d4af37]/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">1. Focus Assoluto</h3>
              <p className="text-white/70 text-lg">
                Ogni Sviluppo Custom viene seguito con un solo cliente in contemporanea. Non per scarsità di mezzi, ma per scelta: questo livello di architettura richiede focus esclusivo sulle logiche di sistema.
              </p>
            </div>
            <div className="border-l border-[#d4af37]/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d4af37] mb-2">2. Slot Dedicato</h3>
              <p className="text-white/70 text-lg">
                Non sto dividendo la mia attenzione tra cinque progetti diversi. Stai prenotando uno slot dedicato al 100% alla tua azienda, non del tempo a ore.
              </p>
            </div>
          </div>
        </>
      ),
    }
  ];

  const prevProject = { url: "/sviluppo-mvp", title: "Sviluppo MVP" };
  const nextProject = { url: "/sviluppo-cms", title: "Sviluppo CMS" };

  return (
    <NebulaProjectLayout
      title1="Sviluppo Custom"
      role="APPROCCIO_03"
      year="2026"
      techList={["Architettura Dati & Backend su misura", "Sviluppo API proprietarie", "Integrazione con sistemi aziendali", "Pannello di amministrazione"]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">Nessun limite logico. Nessun vincolo tecnologico.</p>
          <p>Per i brand e le aziende che hanno già superato la fase delle piattaforme standardizzate. Un'architettura interamente proprietaria, costruita per durare, scalare e restare — letteralmente — tua.</p>
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
export default CustomDetails;
