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
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("custom_details.le_soluzioni_saas_e_i_cms")}</p>
        </>
      ),
    },
    {
      id: "02",
      title: "La Filosofia",
      description: (
        <>
          <div className="py-12 border-l-2 border-gold pl-8">
            <h2 className="font-fraunces text-4xl md:text-5xl italic text-gold leading-tight">{t("custom_details.design_e_tecnologia_proprietari")}</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-justify mb-4 text-xl">{t("custom_details.direzione_artistica_e_ui_ux_progettate")}</p>
        </>
      ),
    },
    {
      id: "03",
      title: "Esclusività",
      description: (
        <>
          <p className="text-white/80 leading-relaxed text-justify mb-8 text-xl">{t("custom_details.un_progetto_alla_volta")}</p>
          <div className="space-y-6">
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("custom_details.1_focus_assoluto")}</h3>
              <p className="text-white/70 text-lg">{t("custom_details.ogni_sviluppo_custom_viene_seguito_con")}</p>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">{t("custom_details.2_slot_dedicato")}</h3>
              <p className="text-white/70 text-lg">{t("custom_details.non_sto_dividendo_la_mia_attenzione")}</p>
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
      techList={[t("custom_details.architettura_dati_backend_su_misura"), t("custom_details.sviluppo_api_proprietarie"), t("custom_details.integrazione_con_sistemi_aziendali"), t("custom_details.pannello_di_amministrazione")]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="font-medium text-white text-2xl mb-4">{t("custom_details.nessun_limite_logico_nessun_vincolo_tecnolog")}</p>
          <p>{t("custom_details.per_i_brand_e_le_aziende")}</p>
        </div>
      }
      phases={phasesData}
      prev={prevProject}
      next={nextProject}
      prevLabel={t("custom_details.servizio_precedente")}
      nextLabel={t("custom_details.servizio_successivo")}
      finalCta={{
        title: t("custom_details.il_prossimo_passo"),
        description: t("custom_details.se_il_tuo_business_ha_smesso"),
        buttonText: t("custom_details.parlami_del_tuo_progetto_2"),
        buttonUrl: "/contatti"
      }}
    />
  );
};
export default CustomDetails;
