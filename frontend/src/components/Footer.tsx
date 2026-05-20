import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f2ed] border-t border-editorial px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Monumental Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none translate-y-[-20%]">
        <span className="font-display text-[25vw] font-black uppercase tracking-tighter text-[#3d0f1a]">ilaria</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">

        {/* BRAND & VISION SECTION */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-typewriter text-[14px] uppercase tracking-[0.3em] text-primary font-medium">Design e sviluppo</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-black text-[#3d0f1a] leading-none mb-8">
              Ilaria <br />
              <span className="text-primary italic">Diliberto.</span>
            </h3>
            <p className="font-body text-sm text-[#3d0f1a]/60 leading-relaxed max-w-sm">
              Design editoriale, sviluppo web e gestione progetti fusi in un'unica visione.
              Costruisco ecosistemi digitali curati in ogni dettaglio, dal primo bozzetto grafico all'ultima riga di codice.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 flex items-center gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">Base</span>
              <span className="font-typewriter text-[14px] font-medium text-primary">Italia // {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
            </div>
            <div className="w-[1px] h-10 bg-primary/20" />
            <div className="flex flex-col gap-1.5">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">Stato</span>
              <span className="font-typewriter text-[14px] font-medium text-green-600 tracking-widest">Disponibile per nuovi progetti</span>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="lg:col-span-3">
          <span className="font-typewriter text-[14px] uppercase tracking-[0.4em] text-primary font-medium block mb-10">Esplora</span>
          <ul className="space-y-4">
            {[
              { label: "Home", to: "/" },
              { label: "Progetti", to: "/progetti" },
              { label: "Chi sono", to: "/chisono" },
              { label: "Servizi", to: "/servizi" },
              { label: "Contatti", to: "/contatti" }
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="group flex items-center justify-between font-display text-3xl text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL & CONNECT */}
        <div className="lg:col-span-4">
          <span className="font-typewriter text-[14px] uppercase tracking-[0.4em] text-primary font-medium block mb-10">Network</span>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ilaria-diliberto/" },
              { label: "GitHub", icon: <Github size={18} />, href: "https://github.com/ilariadil-lgtm" },
              { label: "Email", icon: <Mail size={18} />, href: "mailto:ilaria.dil@gmail.com" },
              { label: "Instagram", icon: <Globe size={18} />, href: "https://www.instagram.com/ilaryvision/" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-primary/20 hover:border-primary/40 hover:bg-white/50 transition-all group"
              >
                <div className="text-primary group-hover:opacity-85 transition-opacity">
                  {social.icon}
                </div>
                <span className="font-typewriter text-[13px] uppercase tracking-widest text-primary font-medium group-hover:opacity-85 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white/40 border border-primary/20 backdrop-blur-sm">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.4em] text-primary font-medium block mb-2">Lavoriamo insieme?</span>
            <p className="font-body text-[14px] text-primary mb-5 leading-relaxed">Lascia la tua mail e ti ricontatterò per fissare una chiacchierata.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="inserisci la tua e-mail.."
                className="bg-transparent border-b border-primary/30 font-typewriter text-[13px] text-primary py-2 flex-1 focus:outline-none focus:border-primary transition-colors placeholder:text-primary/60"
              />
              <button className="text-primary hover:scale-110 transition-transform">
                <ArrowUpRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8 font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
          <span>© {currentYear} Ilaria Diliberto </span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Tutti i diritti riservati</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="hidden md:inline">Design e codice su misura</span>
        </div>

        <div className="flex items-center gap-6 font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
          <Link to="/privacy" className="hover:text-primary/80 transition-colors">Privacy policy</Link>
          <Link to="/cookies" className="hover:text-primary/80 transition-colors">Cookie policy</Link>
          <span className="text-primary/70">P.IVA: 03065860847</span>
        </div>
      </div>

      {/* Corner Technical Markers */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/10" />
    </footer>
  );
};
