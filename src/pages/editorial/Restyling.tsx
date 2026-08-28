import { useTranslation } from "react-i18next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const Restyling = () => {
  const { t } = useTranslation();
  return (
    <ServiceDetailLayout
      ns="service_restyling"
      url="/restyling"
      prev={{ url: "/e-commerce", title: t("service_ecommerce.title") }}
      next={{ url: "/manutenzione", title: t("service_manutenzione.title") }}
    />
  );
};

export default Restyling;
