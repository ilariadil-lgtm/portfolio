import React from "react";
import { useTranslation } from "react-i18next";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaProjectPhases, Phase } from "./components/NebulaProjectPhases";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

export const NebulaStorageHub = () => {
  const { t } = useTranslation();
  const phasesData: Phase[] = [
    {
      num: "01",
      title: t("storagehub.ch1_label").replace(/^\d+\s*—\s*/, ""),
      subtitle: t("storagehub.ch1_title1"),
      description: (
        <div className="space-y-4">
          <p>{t("storagehub.ch1_p1")}</p>
        </div>
      ),
      image: "/assets/projects/storage-hub/catalogo.webp",
    },
    {
      num: "02",
      title: t("storagehub.ch2_label").replace(/^\d+\s*—\s*/, ""),
      subtitle: t("storagehub.ch2_title1"),
      description: (
        <p className="border-l-2 border-gold/30 pl-4 py-2 italic text-white/80 pr-2">
          {t("storagehub.ch2_title1")}
          <span className="text-gold italic pr-2">
            {t("storagehub.ch2_title2")}
          </span>
          {t("storagehub.ch2_title3")}
        </p>
      ),
      image: "/assets/projects/storage-hub/stat.webp",
    },
    {
      num: "03",
      title: t("storagehub.ch3_label").replace(/^\d+\s*—\s*/, ""),
      subtitle: t("storagehub.ch3_title"),
      description: (
        <div className="space-y-4">
          <p>{t("storagehub.ch3_p1")}</p>
          <p>{t("storagehub.ch3_p2")}</p>
        </div>
      ),
      image: "/assets/projects/storage-hub/registro.webp",
    },
    {
      num: "04",
      title: t("storagehub.ch4_label").replace(/^\d+\s*—\s*/, ""),
      subtitle: t("storagehub.ch4_title"),
      description: (
        <div className="space-y-4">
          <p>{t("storagehub.ch4_p1")}</p>
          <p>{t("storagehub.ch4_p2")}</p>
        </div>
      ),
      image: "/assets/projects/storage-hub/prodotto.webp",
    },
    {
      num: "05",
      title: t("storagehub.ch5_label").replace(/^\d+\s*—\s*/, ""),
      subtitle: t("storagehub.ch5_title"),
      description: (
        <div className="space-y-4">
          <p>{t("storagehub.ch5_p1")}</p>
        </div>
      ),
      image: "/assets/projects/storage-hub/magazziniere.webp",
    },
  ];

  return (
    <NebulaProjectLayout
      title1="Storage"
      title2="Hub"
      type={t("storagehub.hero_label")}
      description={<p>{t("storagehub.hero_desc")}</p>}
      prev={{ url: "/progetti/loghi", title: "Branding & Loghi" }}
      next={{ url: "/progetti/freelens", title: "Freelens" }}
      phases={phasesData}
      techList={[
        "React 18",
        "Django 4 + DRF",
        "PostgreSQL",
        "OpenAI & Gemini API",
      ]}
      role={t("storagehub.role_val")}
      year="2026"
    >
      {/* Image Gallery as an Interactive Slider */}
      <NebulaImageSlider
        images={[
          "/assets/projects/storage-hub/dashboard.webp",
          "/assets/projects/storage-hub/categorie.webp",
          "/assets/projects/storage-hub/movimenti.webp",
          "/assets/projects/storage-hub/fornitori.webp",
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaStorageHub;
