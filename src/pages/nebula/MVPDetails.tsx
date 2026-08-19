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
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("mvp_details.la_maggior_parte_degli_mvp_fallisce")}</p>
        </>
      ),
    },
    {
      id: "02",
      title: "La Filosofia",
      description: (
        <>
          <div className="py-12 border-l-2 border-gold pl-8">
            <h2 className="font-fraunces text-4xl md:text-5xl italic text-gold leading-tight">{t("mvp_details.costruire_cio_che_nessuno_ha_chiesto")}</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("mvp_details.il_focus_e_un_solo_punto")}</p>
        </>
      ),
    },
    {
      id: "03",
      title: "Dopo il Lancio",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">{t("mvp_details.scalabilita_dal_giorno_zero")}</p>
          <div className="space-y-6">
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("mvp_details.1_analisi_dei_dati_reali")}</h3>
              <p className="text-white/70 text-lg">{t("mvp_details.un_mvp_non_e_un_punto")}</p>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("mvp_details.2_infrastruttura_serverless")}</h3>
              <p className="text-white/70 text-lg">{t("mvp_details.se_le_metriche_confermano_la_direzione")}</p>
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
      techList={[t("mvp_details.interfaccia_essenziale_core_loop"), t("mvp_details.sviluppo_full_stack_agile"), t("mvp_details.integrazione_tool_di_analytics"), t("mvp_details.architettura_predisposta_allo_scale_up")]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">{t("mvp_details.il_mercato_non_aspetta_e_nemmeno")}</p>
          <p>{t("mvp_details.quattro_settimane_per_trasformare_un_idea")}</p>
        </div>
      }
      phases={phasesData}
      prev={prevProject}
      next={nextProject}
      prevLabel={t("mvp_details.servizio_precedente")}
      nextLabel={t("mvp_details.servizio_successivo")}
      finalCta={{
        title: t("mvp_details.il_prossimo_passo"),
        description: t("mvp_details.se_hai_un_idea_che_deve"),
        buttonText: t("mvp_details.parlami_del_tuo_progetto_2"),
        buttonUrl: "/contatti"
      }}
    />
  );
};
export default MVPDetails;
