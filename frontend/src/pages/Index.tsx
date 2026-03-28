import { useParallax } from "@/components/Reveal";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const BASE_URL = 'http://localhost:8000';

const Index = () => {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.4);
  const [projects, setProjects] = useState<any[]>([]);
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projData, aboutData, servData] = await Promise.all([
          api.getProjects(),
          api.getAbout(),
          api.getServices()
        ]);
        setProjects(projData.results || projData);
        setAbout(aboutData);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — EDITORIAL & BRUTALIST
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-editorial mt-24 mb-32 md:mb-48 overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 gradient-overlay pointer-events-none" />
        
        <div ref={heroRef} className="relative z-10 w-full" style={{ transform: `translateY(${heroOffset}px)` }}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-8">
            <div className="md:col-span-8">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-6 animate-fade-up">
                {about?.title || "UX Engineer / Cloud Specialist"}
              </p>
              <div className="relative">
                <h1 className="font-display text-[16vw] md:text-[14vw] font-bold leading-[0.75] tracking-tighter text-primary animate-fade-up" style={{ animationDelay: "0.1s" }}>
                   {about?.name?.split(' ')[0] || "ilaria"}
                </h1>
                <h1 className="font-display text-[16vw] md:text-[14vw] font-bold leading-[0.75] tracking-tighter text-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  {about?.name?.split(' ')[1] || "diliberto"}
                </h1>
                {/* Decorative element */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary/20 hidden md:block" />
              </div>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex gap-4 items-start border-t border-editorial pt-6">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground shrink-0 opacity-60">Status</span>
                <div>
                  <p className="font-body text-sm font-medium">Freelance / Studio</p>
                  <p className="font-body text-xs text-muted-foreground mt-1 opacity-70">Disponibile per nuovi progetti digitali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-4 border-b border-editorial bg-primary text-primary-foreground overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 font-body text-xs uppercase tracking-[0.2em]">
          <span>UX/UI Designer</span>
          <span className="opacity-50">✦</span>
          <span>Cloud Architect</span>
          <span className="opacity-50">✦</span>
          <span>Product Strategist</span>
          <span className="opacity-50">✦</span>
          <span>Creative Developer</span>
          <span className="opacity-50">✦</span>
          <span>UX/UI Designer</span>
          <span className="opacity-50">✦</span>
          <span>Cloud Architect</span>
          <span className="opacity-50">✦</span>
          <span>Product Strategist</span>
          <span className="opacity-50">✦</span>
          <span>Creative Developer</span>
          <span className="opacity-50">✦</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT PREVIEW — ASYMMETRIC 60/40
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-[60%_40%] border-b border-editorial">
        <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-8 block">About / Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Unire la <span className="text-primary italic">precisione</span> del pixel alla <span className="text-stroke">scalabilità</span> del cloud.
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl opacity-80">
              Un approccio che fonde estetica e funzionalità, dove ogni interfaccia è progettata per scalare e ogni architettura è pensata per emozionare.
            </p>
            <Link 
              to="/percorso" 
              className="link-brutalist inline-flex items-center gap-2 mt-12 font-body text-[10px] uppercase tracking-[0.2em] opacity-80 group"
            >
              Esplora il percorso 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="relative overflow-hidden bg-foreground group">
          <img 
            src={about?.profile_image ? (about.profile_image.startsWith('http') ? about.profile_image : `${BASE_URL}${about.profile_image}`) : "/assets/about-portrait.png"} 
            alt="Portrait" 
            className="w-full h-full object-cover absolute inset-0 opacity-10 mix-blend-luminosity transition-all duration-700 group-hover:opacity-15 group-hover:scale-105"
          />
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-between h-full min-h-[500px]">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-background opacity-60 mb-8 block">Tech Stack</span>
              <ul className="font-mono text-xs text-background/80 space-y-4 leading-relaxed">
                {services.length > 0 ? services.map((s: any) => (
                   <li key={s.id} className="border-l-2 border-primary/40 pl-4 hover:border-primary/70 hover:pl-5 transition-all duration-300 cursor-default">{s.title}</li>
                )) : (
                  <>
                    <li className="border-l-2 border-primary/40 pl-4 hover:border-primary/70 hover:pl-5 transition-all duration-300 cursor-default">Python / Django</li>
                    <li className="border-l-2 border-primary/40 pl-4 hover:border-primary/70 hover:pl-5 transition-all duration-300 cursor-default">React / TypeScript</li>
                    <li className="border-l-2 border-primary/40 pl-4 hover:border-primary/70 hover:pl-5 transition-all duration-300 cursor-default">AWS Cloud Architecture</li>
                  </>
                )}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-background/20">
              <p className="font-body text-sm leading-relaxed text-background/70 max-w-sm">
                {about?.bio || "Caricamento biografia..."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SELECTED WORK — ASYMMETRIC WITH IMAGES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-editorial relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 md:pl-12 relative z-10">
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary opacity-60 mb-3 block">I Capitoli</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold">Progetti Selezionati</h2>
            <p className="font-body text-sm text-muted-foreground mt-4 opacity-70 max-w-md">
              Una selezione curata di esperienze digitali che uniscono design, tecnologia e strategia.
            </p>
          </div>
          <Link 
            to="/progetti" 
            className="link-brutalist font-body text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2 shrink-0 opacity-80 group"
          >
            Vedi tutti i lavori 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="space-y-32 relative z-10">
          {projects.slice(0, 3).map((item, i) => (
            <Link 
              key={item.id} 
              to={item.url}
              className="group block border-b border-editorial pb-20 md:pb-32 last:border-b-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative ${i % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                {/* Giant serial number background */}
                <div className={`absolute ${i % 2 === 0 ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 z-0 pointer-events-none`}>
                  <span className="font-display text-[12rem] md:text-[16rem] lg:text-[28rem] font-bold leading-none text-foreground opacity-[0.03] transition-opacity duration-700 group-hover:opacity-[0.05]">
                    {item.order || i + 1}
                  </span>
                </div>
                
                <div className={`lg:col-span-7 aspect-[4/3] overflow-hidden bg-muted/10 relative z-10 shadow-editorial group-hover:shadow-editorial-lg transition-all duration-700 ${i % 2 !== 0 ? 'lg:col-start-6' : ''}`}>
                  <img 
                    src={item.image?.startsWith('http') ? item.image : `${BASE_URL}${item.image}`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105"
                  />
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                </div>
                
                <div className={`lg:col-span-5 flex flex-col justify-center relative z-10 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'}`}>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-4">
                    {item.type}
                  </span>
                  <h3 className="font-display text-5xl md:text-7xl font-bold mb-6 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 opacity-0 group-hover:opacity-80 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                    Scopri il progetto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — ELEGANT & REFINED
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 text-center bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        <div className="relative z-10">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] opacity-60 mb-8 block animate-fade-up">Let's Talk</span>
          <h2 className="font-display text-[10vw] md:text-[8vw] font-bold leading-none tracking-tight mb-20 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            FEEL LIKE <br/>
            <span className="text-stroke-primary opacity-50">COLLABORATING?</span>
          </h2>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a 
              href="mailto:hello@ilariadiliberto.com"
              className="inline-block w-full max-w-4xl text-2xl md:text-4xl lg:text-5xl font-display font-medium py-10 px-12 border-2 border-primary-foreground hover:bg-[#4D1A24] hover:text-[#F9F7F2] hover:border-[#4D1A24] transition-all duration-700 ease-in-out group relative overflow-hidden"
            >
              {/* Hover slide effect */}
              <span className="absolute inset-0 bg-[#4D1A24] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="block">hello@ilariadiliberto.com</span>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-700" size={32} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
