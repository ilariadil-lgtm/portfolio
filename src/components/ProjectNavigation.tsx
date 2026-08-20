import React from "react";
import { Link } from "@/components/Link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectNavigationProps {
  archiveUrl?: string;
  archiveTitle?: string;
  prevLabel?: string;
  nextLabel?: string;
  prev?: { url: string; title: string };
  next?: { url: string; title: string };
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  prev,
  next,
  archiveUrl = "/progetti",
  archiveTitle,
  prevLabel,
  nextLabel,
}) => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-primary/10 px-8 md:px-16 lg:px-24 py-16 bg-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Prev */}
        <div className="flex-1 flex justify-start">
          {prev && (
            <Link
              to={prev.url}
              className="group flex flex-col items-start text-left"
            >
              <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-primary/60 mb-2">
                {prevLabel || t("project_nav.prev")}
              </span>
              <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-primary transition-colors flex items-center justify-start gap-3">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-2 transition-transform"
                />
                {prev.title}
              </span>
            </Link>
          )}
        </div>

        {/* Center: Back to Archive */}
        <div className="shrink-0 hidden md:block">
          <Link
            to={archiveUrl}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-primary/20 hover:border-primary overflow-hidden transition-all duration-500"
            aria-label={t("project_detail.back_to_archive")}
          >
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <Grid
              size={18}
              className="text-ink group-hover:text-white relative z-10 transition-colors"
            />
          </Link>
        </div>

        {/* Next */}
        <div className="flex-1 flex justify-end text-right">
          {next && (
            <Link to={next.url} className="group flex flex-col items-end">
              <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-primary/60 mb-2">
                {nextLabel || t("project_nav.next")}
              </span>
              <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-primary transition-colors flex items-center justify-end gap-3">
                {next.title}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
            </Link>
          )}
        </div>

        {/* Mobile: Back to Archive */}
        <div className="w-full flex justify-start md:hidden pt-8 border-t border-primary/10 mt-4">
          <Link
            to={archiveUrl}
            className="group relative flex items-center justify-center px-12 py-4 border border-primary/20 hover:border-primary overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink group-hover:text-white transition-colors font-semibold">
              <Grid size={14} />
              {archiveTitle || t("project_detail.archive")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
