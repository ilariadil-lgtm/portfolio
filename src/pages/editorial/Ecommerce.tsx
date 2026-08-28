import { useTranslation } from "react-i18next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const Ecommerce = () => {
  const { t } = useTranslation();
  return (
    <ServiceDetailLayout
      ns="service_ecommerce"
      url="/e-commerce"
      comprende={[
        t("service_ecommerce.item1"),
        t("service_ecommerce.item2"),
        t("service_ecommerce.item3"),
        t("service_ecommerce.item4"),
      ]}
      tempi={t("service_ecommerce.tempi")}
      prev={{ url: "/sito-aziendale", title: t("service_sito.title") }}
      next={{ url: "/restyling", title: t("service_restyling.title") }}
    />
  );
};

export default Ecommerce;
