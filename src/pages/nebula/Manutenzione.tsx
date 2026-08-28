import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProcessSection } from "./components/NebulaProcessSection";

const Manutenzione = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: t("service_manutenzione.title"),
    description: t("service_manutenzione.meta_desc"),
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: t("service_manutenzione.title"),
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description: t("service_manutenzione.meta_desc"),
        url: "https://ilariadiliberto.com/manutenzione",
      }),
    [t],
  );

  return (
    <NebulaProjectLayout
      title={t("service_manutenzione.title")}
      type={t("service_detail.services_label")}
      backUrl="/servizi"
      backLabel={t("service_detail.back")}
      archiveTitle={t("service_detail.all_services")}
      role={`${t("project_nav.service_label")}_04`}
      year={t("service_manutenzione.tempi_short")}
      roleLabel={t("project_nav.service_label")}
      yearLabel={t("service_detail.timing")}
      techList={[
        t("service_manutenzione.tag1"),
        t("service_manutenzione.tag2"),
        t("service_manutenzione.tag3"),
        t("service_manutenzione.tag4"),
      ]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed">
          <p>{t("service_manutenzione.text")}</p>
        </div>
      }
      prev={{ url: "/restyling", title: t("service_restyling.title") }}
      next={{ url: "/sito-aziendale", title: t("service_sito.title") }}
      prevLabel={t("service_detail.prev_service")}
      nextLabel={t("service_detail.next_service")}
      finalCta={{
        description: t("cta.description"),
        buttonText: t("cta.button"),
        buttonUrl: "/contatti",
      }}
    >
      <NebulaProcessSection />
    </NebulaProjectLayout>
  );
};

export default Manutenzione;
