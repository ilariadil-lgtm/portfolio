import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LayoutGrid } from 'lucide-react';

interface ProjectNavProps {
  archiveUrl?: string;
  archiveTitle?: string;
  prevLabel?: string;
  nextLabel?: string;
  prev: { url: string; title: string };
  next: { url: string; title: string };
}

export const NebulaProjectNavigation = ({ prev, next, prevLabel, nextLabel, archiveUrl, archiveTitle }: ProjectNavProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full border-t border-white/5 py-8 md:py-16 mt-10 md:mt-20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 relative">

        {archiveUrl && (
          <Link
            to={archiveUrl}
            title={archiveTitle}
            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-night p-4 rounded-full border border-white/5 hover:border-gold/40 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center hidden md:flex"
          >
            <LayoutGrid size={24} className="text-white/50 group-hover:text-gold transition-colors" />
          </Link>
        )}

        <Link
          to={prev.url}
          className="group flex flex-col items-start text-left w-full md:w-1/2 p-8 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-gold/5 hover:border-gold/30 transition-all duration-500"
        >
          <div className="flex items-center justify-start gap-3 text-white/50 mb-3 w-full">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-2 transition-transform duration-500 text-gold"
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
              {prevLabel || t("project_nav.prev_project", "Progetto Precedente")}
            </span>
          </div>
          <span className="font-bricolage text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors duration-500">
            {prev.title}
          </span>
        </Link>

        <Link
          to={next.url}
          className="group flex flex-col items-end text-right w-full md:w-1/2 p-8 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-gold/5 hover:border-gold/30 transition-all duration-500"
        >
          <div className="flex items-center justify-end gap-3 text-white/50 mb-3 w-full">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
              {nextLabel || t("project_nav.next_project", "Progetto Successivo")}
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform duration-500 text-gold"
            />
          </div>
          <span className="font-bricolage text-2xl md:text-3xl font-bold text-white group-hover:text-gold transition-colors duration-500">
            {next.title}
          </span>
        </Link>
      </div>
    </div>
  );
};
