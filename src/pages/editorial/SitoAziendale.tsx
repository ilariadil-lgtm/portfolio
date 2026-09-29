import { useTranslation } from "react-i18next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const SitoAziendale = () => {
  const { t } = useTranslation();
  return (
    <ServiceDetailLayout
      ns="service_sito"
      url="/servizi/wordpress"
      comprende={[
        t("service_sito.item1"),
        t("service_sito.item2"),
        t("service_sito.item3"),
        t("service_sito.item4"),
        t("service_sito.item5"),
        t("service_sito.item6"),
      ]}
      tempi={t("service_sito.tempi")}
      prev={{ url: "/servizi/brand-identity", title: t("service_brandidentity.title") }}
      next={{ url: "/servizi/e-commerce", title: t("service_ecommerce.title") }}
    />
  );
};

export default SitoAziendale;
