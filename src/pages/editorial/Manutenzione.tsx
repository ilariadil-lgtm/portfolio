import { useTranslation } from "react-i18next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

const Manutenzione = () => {
  const { t } = useTranslation();
  return (
    <ServiceDetailLayout
      ns="service_manutenzione"
      url="/manutenzione"
      comprende={[
        t("service_manutenzione.item1"),
        t("service_manutenzione.item2"),
        t("service_manutenzione.item3"),
        t("service_manutenzione.item4"),
      ]}
      tempi={t("service_manutenzione.tempi")}
      prev={{ url: "/restyling", title: t("service_restyling.title") }}
      next={{ url: "/sito-aziendale", title: t("service_sito.title") }}
    />
  );
};

export default Manutenzione;
