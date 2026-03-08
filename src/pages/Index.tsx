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
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-editorial mt-24">
        <div ref={heroRef} className="relative z-10 w-full" style={{ transform: `translateY(${heroOffset}px)` }}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-8">
            <div className="md:col-span-8">
              <p className="font-body text-xs md:text-sm uppercase tracking-widest text-primary mb-4 animate-fade-up">
                Piacere,
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
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground shrink-0">Status</span>
                <div>
                  <p className="font-body text-sm font-medium">Freelance / Studio</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Disponibile per nuovi progetti digitali</p>
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
          ABOUT PREVIEW — 100% WIDTH GRID
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-editorial relative">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <img src="/placeholder.svg" alt="Texture sfondo" className="w-full h-full object-cover" />
        </div>

        <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-between aspect-square lg:aspect-auto relative z-10">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">About</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-12">
            Unire la <span className="text-primary italic">precisione</span> del pixel alla <span className="text-stroke">scalabilità</span> del cloud.
          </h2>
          <Link 
            to="/percorso" 
            className="link-brutalist self-start mt-12 font-body text-xs uppercase tracking-widest flex items-center gap-2"
          >
            Esplora il percorso <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-foreground text-background relative z-10">
          <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 max-w-lg">
            Da una formazione accademica in Belle Arti alla progettazione di architetture AWS complesse. Il mio approccio al digitale è olistico: non c'è buon design senza una solida infrastruttura, e non c'è codice brillante senza una chiara visione utente.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SELECTED WORK
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">I Capitoli</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold mt-2">Progetti Selezionati</h2>
          </div>
          <Link 
            to="/progetti" 
            className="link-brutalist font-body text-xs uppercase tracking-widest flex items-center gap-2 shrink-0"
          >
            Vedi tutti i lavori <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-0 border-t border-editorial">
          {[
            { id: "01", name: "FreeLens", type: "Web App / AWS", url: "/progetti" },
            { id: "02", name: "Visio", type: "Real-time Dashboard", url: "/progetti" },
            { id: "03", name: "Sophia", type: "Healthcare Platform", url: "/progetti" },
          ].map((item) => (
            <Link 
              key={item.id} 
              to={item.url}
              className="group flex flex-col md:flex-row md:items-center py-8 border-b border-editorial hover:bg-primary hover:text-primary-foreground transition-colors duration-300 px-4 -mx-4"
            >
              <span className="font-body text-xs md:text-sm text-muted-foreground group-hover:text-primary-foreground/50 transition-colors w-12">
                {item.id}
              </span>
              <h3 className="font-display text-4xl md:text-6xl font-bold flex-1 my-4 md:my-0 group-hover:translate-x-4 transition-transform duration-300">
                {item.name}
              </h3>
              <span className="font-body text-xs uppercase tracking-widest md:text-right group-hover:text-primary-foreground/80 transition-colors">
                {item.type}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 text-center bg-primary text-primary-foreground">
        <h2 className="font-display text-[10vw] md:text-[8vw] font-bold leading-none tracking-tight">
          FEEL LIKE <br/>
          <span className="text-stroke-primary opacity-50">COLLABORATING?</span>
        </h2>
        <a 
          href="mailto:ilaria@example.com"
          className="inline-flex items-center gap-4 mt-16 text-xl md:text-3xl font-display font-medium link-brutalist hover:opacity-80 transition-opacity"
        >
          hello@ilariadiliberto.com <ArrowRight size={24} />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
