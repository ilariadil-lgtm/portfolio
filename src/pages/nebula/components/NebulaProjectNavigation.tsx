import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectNavProps {
  prev: { url: string; title: string };
  next: { url: string; title: string };
}

export const NebulaProjectNavigation = ({ prev, next }: ProjectNavProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full border-t border-white/5 py-16 mt-20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
        <Link 
          to={prev.url}
          className="group flex flex-col md:items-start w-full md:w-1/2 p-8 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 text-white/40 mb-3">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500 text-[#d4af37]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">{t('project_nav.prev_project', 'Progetto Precedente')}</span>
          </div>
          <span className="font-bricolage text-2xl md:text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-500">{prev.title}</span>
        </Link>
        
        <Link 
          to={next.url}
          className="group flex flex-col md:items-end w-full md:w-1/2 p-8 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/30 transition-all duration-500 text-right"
        >
          <div className="flex items-center justify-end gap-3 text-white/40 mb-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">{t('project_nav.next_project', 'Progetto Successivo')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500 text-[#d4af37]" />
          </div>
          <span className="font-bricolage text-2xl md:text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-500">{next.title}</span>
        </Link>
      </div>
    </div>
  );
};
