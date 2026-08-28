import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Link } from "@/components/Link";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";
import { NebulaImageSlider } from "./components/NebulaImageSlider";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const NebulaProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Ogni progetto reale ha una rotta e una pagina dedicate (vedi src/routes.ts):
  // questa rotta generica /progetti/:id resta come rete di sicurezza per un
  // indirizzo che non corrisponde a nessun progetto esistente.
  const project: any = null;

  if (!project) {
    return (
      <div className="min-h-[100dvh] w-full bg-night flex flex-col items-center justify-center space-y-8 text-white">
        <h1 className="font-fraunces italic font-light text-5xl pr-2">
          Project Not Found
        </h1>
        <Link
          to="/progetti"
          className="px-8 py-4 border border-gold/30 text-gold font-mono text-[9px] uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors"
        >
          RETURN TO SELECTED WORKS
        </Link>
      </div>
    );
  }

  const techList =
    typeof project.technologies === "string"
      ? project.technologies.split(",").map((t: string) => t.trim())
      : project.technologies || [];

  return (
    <NebulaProjectLayout
      title={project.title}
      type={project.project_type || project.type || "CASE STUDY"}
      description={
        <>
          <p>{project.description}</p>
        </>
      }
      techList={techList}
      role="Tech Lead & Designer"
      year={project.year || "2026"}
      liveUrl={project.project_url}
    >
      {/* Image Gallery as an Interactive Slider */}
      <NebulaImageSlider
        images={[
          project.image?.startsWith("http") || project.image?.startsWith("/")
            ? project.image
            : `${BASE_URL}${project.image}`,
        ]}
      />
    </NebulaProjectLayout>
  );
};

export default NebulaProjectDetail;
