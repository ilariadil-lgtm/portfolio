import React, { useEffect } from "react";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { Phase } from "./components/NebulaProjectPhases";

const CMSDetails = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: "Sviluppo CMS",
    description:
      "Tema scritto da zero e pannello di gestione disegnato sul tuo flusso di lavoro: aggiorni prezzi, prodotti e testi in autonomia, senza page builder.",
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: "Sviluppo CMS su misura",
        serviceType: "Sviluppo CMS",
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description:
          "Tema scritto da zero e pannello di gestione disegnato sul tuo flusso di lavoro: aggiorni prezzi, prodotti e testi in autonomia, senza page builder.",
        url: "https://ilariadiliberto.com/sviluppo-cms",
      }),
    [],
  );

  const phasesData: Phase[] = [
    {
      id: "01",
      title: "Il Problema",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("cms_details.la_maggior_parte_dei_cms_in")}</p>
        </>
      ),
    },
    {
      id: "02",
      title: "La Filosofia",
      description: (
        <>
          <div className="py-12 border-l-2 border-gold pl-8">
            <h2 className="font-fraunces text-4xl md:text-5xl italic text-gold leading-tight">{t("cms_details.il_tuo_sito_e_un_asset")}</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("cms_details.non_parto_da_un_tema_pronto")}</p>
        </>
      ),
    },
    {
      id: "03",
      title: "Due Configurazioni",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">{t("cms_details.il_percorso_si_divide_in_due")}</p>
          <div className="space-y-6">
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("cms_details.1_configurazione_premium_standard")}</h3>
              <p className="text-white/70 text-lg">{t("cms_details.adattamento_tecnico_e_ottimizzazione_di_un")}</p>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("cms_details.2_sviluppo_tema_custom_da_zero")}</h3>
              <p className="text-white/70 text-lg">{t("cms_details.scrittura_totale_del_tema_white_theme")}</p>
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
      techList={[t("cms_details.ui_ux_design_personalizzato"), t("cms_details.sviluppo_front_end_reattivo"), t("cms_details.setup_piattaforma_headless_o_ibrida"), t("cms_details.training_per_gestione_contenuti")]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">{t("cms_details.un_sito_che_cresce_con_te")}</p>
          <p>{t("cms_details.costruito_per_chi_vuole_smettere_di")}</p>
        </div>
      }
      phases={phasesData}
      prev={prevProject}
      next={nextProject}
      prevLabel={t("cms_details.servizio_precedente")}
      nextLabel={t("cms_details.servizio_successivo")}
      finalCta={{
        title: t("cms_details.il_prossimo_passo"),
        description: t("cms_details.se_il_tuo_business_ha_smesso"),
        buttonText: t("cms_details.parlami_del_tuo_progetto_2"),
        buttonUrl: "/contatti"
      }}
    />
  );
};
export default CMSDetails;
