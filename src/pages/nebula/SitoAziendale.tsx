import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProcessSection } from "./components/NebulaProcessSection";

const SitoAziendale = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: t("service_sito.title"),
    description: t("service_sito.meta_desc"),
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: t("service_sito.title"),
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description: t("service_sito.meta_desc"),
        url: "https://ilariadiliberto.com/sito-aziendale",
      }),
    [t],
  );

  return (
    <NebulaProjectLayout
      title={t("service_sito.title")}
      type={t("service_detail.services_label")}
      backUrl="/servizi"
      backLabel={t("service_detail.back")}
      archiveTitle={t("service_detail.all_services")}
      role={`${t("project_nav.service_label")}_01`}
      year={t("service_sito.tempi")}
      roleLabel={t("project_nav.service_label")}
      yearLabel={t("service_detail.timing")}
      techList={[
        t("service_sito.tag1"),
        t("service_sito.tag2"),
        t("service_sito.tag3"),
        t("service_sito.tag4"),
      ]}
      description={
        <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed">
          <p>{t("service_sito.text")}</p>
        </div>
      }
      prev={{ url: "/manutenzione", title: t("service_manutenzione.title") }}
      next={{ url: "/e-commerce", title: t("service_ecommerce.title") }}
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

export default SitoAziendale;
