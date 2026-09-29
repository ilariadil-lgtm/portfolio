import { useTranslation } from "react-i18next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const Ecommerce = () => {
  const { t } = useTranslation();
  return (
    <ServiceDetailLayout
      ns="service_ecommerce"
      url="/servizi/e-commerce"
      comprende={[
        t("service_ecommerce.item1"),
        t("service_ecommerce.item2"),
        t("service_ecommerce.item3"),
        t("service_ecommerce.item4"),
      ]}
      tempi={t("service_ecommerce.tempi")}
      prev={{ url: "/servizi/wordpress", title: t("service_sito.title") }}
      next={{ url: "/servizi/brand-identity", title: t("service_brandidentity.title") }}
    />
  );
};

export default Ecommerce;
