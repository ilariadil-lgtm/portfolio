import { useParallax } from "@/components/Reveal";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.4);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — EDITORIAL & BRUTALIST
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-editorial mt-24 mb-32 md:mb-48">
        <div ref={heroRef} className="relative z-10 w-full" style={{ transform: `translateY(${heroOffset}px)` }}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-8">
            <div className="md:col-span-8">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-4 animate-fade-up">
                UX Engineer / Cloud Specialist
              </p>
              <h1 className="font-display text-[16vw] md:text-[14vw] font-bold leading-[0.75] tracking-tighter text-primary">
                ilaria
              </h1>
              <h1 className="font-display text-[16vw] md:text-[14vw] font-bold leading-[0.75] tracking-tighter text-foreground">
                diliberto
              </h1>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex gap-4 items-start border-t border-editorial pt-4">
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
        <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-center">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 mb-8">About / Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unire la <span className="text-primary italic">precisione</span> del pixel alla <span className="text-stroke">scalabilità</span> del cloud.
          </h2>
          <Link 
            to="/percorso" 
            className="link-brutalist self-start mt-12 font-body text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 opacity-80"
          >
            Esplora il percorso <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="relative overflow-hidden bg-foreground">
          <img 
            src="/placeholder.svg" 
            alt="Ilaria Diliberto al lavoro" 
            className="w-full h-full object-cover absolute inset-0 opacity-10 mix-blend-luminosity"
          />
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-between h-full">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-background opacity-60 mb-6 block">Tech Stack</span>
              <ul className="font-mono text-xs text-background/80 space-y-3 leading-relaxed">
                <li className="border-l-2 border-primary/40 pl-3">Python / Django</li>
                <li className="border-l-2 border-primary/40 pl-3">React / TypeScript</li>
                <li className="border-l-2 border-primary/40 pl-3">AWS Cloud Architecture</li>
                <li className="border-l-2 border-primary/40 pl-3">PostgreSQL / Redis</li>
                <li className="border-l-2 border-primary/40 pl-3">Docker / Kubernetes</li>
              </ul>
            </div>
            <p className="font-body text-sm leading-relaxed text-background/70 mt-12 max-w-sm">
              Da una formazione accademica in Belle Arti alla progettazione di architetture AWS complesse. Un approccio olistico al digitale.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SELECTED WORK — ASYMMETRIC WITH IMAGES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 md:pl-12">
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary opacity-60">I Capitoli</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold mt-2">Progetti Selezionati</h2>
          </div>
          <Link 
            to="/progetti" 
            className="link-brutalist font-body text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shrink-0 opacity-80"
          >
            Vedi tutti i lavori <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-24">
          {[
            { id: "01", name: "FreeLens", type: "Web App / AWS", url: "/progetti", image: "/placeholder.svg" },
            { id: "02", name: "Visio", type: "Real-time Dashboard", url: "/progetti", image: "/placeholder.svg" },
            { id: "03", name: "Sophia", type: "Healthcare Platform", url: "/progetti", image: "/placeholder.svg" },
          ].map((item, i) => (
            <Link 
              key={item.id} 
              to={item.url}
              className="group block border-b border-editorial pb-16 md:pb-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative ${i % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                {/* Giant serial number background */}
                <div className={`absolute ${i % 2 === 0 ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 z-0 pointer-events-none`}>
                  <span className="font-display text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none text-foreground opacity-[0.03]">
                    {item.id}
                  </span>
                </div>
                
                <div className={`lg:col-span-6 aspect-[4/3] overflow-hidden bg-muted/10 relative z-10 ${i % 2 !== 0 ? 'lg:col-start-7' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className={`lg:col-span-5 flex flex-col justify-center relative z-10 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'}`}>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                    {item.type}
                  </span>
                  <h3 className="font-display text-5xl md:text-7xl font-bold my-4 group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 mt-4 font-body text-[10px] uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scopri il progetto <ArrowRight size={14} />
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
        <span className="font-body text-[10px] uppercase tracking-[0.2em] opacity-60 mb-8 block">Let's Talk</span>
        <h2 className="font-display text-[10vw] md:text-[8vw] font-bold leading-none tracking-tight mb-16">
          FEEL LIKE <br/>
          <span className="text-stroke-primary opacity-50">COLLABORATING?</span>
        </h2>
        <a 
          href="mailto:hello@ilariadiliberto.com"
          className="inline-block w-full max-w-4xl text-3xl md:text-5xl lg:text-6xl font-display font-medium py-8 px-12 border-2 border-primary-foreground hover:bg-[#4D1A24] hover:text-[#F9F7F2] hover:border-[#4D1A24] transition-all duration-500 ease-in-out group"
        >
          <span className="block">hello@ilariadiliberto.com</span>
          <ArrowRight className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={32} />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
