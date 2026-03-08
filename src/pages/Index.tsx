import { Reveal, KineticLine, useParallax } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — IMMERSIVE TYPOGRAPHY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Abstract geometric element */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[70vh] bg-gradient-to-br from-primary/8 to-secondary/15 rounded-l-[100px]"
          style={{ transform: `translateY(calc(-50% + ${heroOffset}px))` }}
        />
        
        {/* Kinetic accent lines */}
        <div className="absolute top-32 left-[15%] w-px h-32 bg-gradient-to-b from-primary/60 to-transparent" />
        <div className="absolute bottom-40 right-[20%] w-24 h-px bg-gradient-to-r from-transparent to-primary/60" />
        
        <div ref={heroRef} className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          {/* Small intro */}
          <div className="animate-fade-up mb-8" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground">
              UX Engineer · Cloud Specialist · Product Strategist
            </span>
          </div>

          {/* Giant Name */}
          <div className="relative">
            <h1 
              className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight animate-fade-up"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <span className="block">Ilaria</span>
              <span className="block text-stroke">Diliberto</span>
            </h1>
            
            {/* Overlapping accent */}
            <div 
              className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[20vw] md:text-[15vw] font-bold text-primary/5 pointer-events-none select-none"
              style={{ transform: `translateY(calc(-50% + ${heroOffset * 0.5}px))` }}
            >
              D
            </div>
          </div>

          {/* Subtitle positioned asymmetrically */}
          <div 
            className="mt-16 md:mt-20 ml-auto max-w-md text-right animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <div className="w-16 h-px bg-primary ml-auto mb-6" />
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Progetto esperienze digitali che uniscono<br />
              <span className="text-foreground font-medium">rigore estetico</span> e <span className="text-foreground font-medium">architettura scalabile</span>.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK INTRO SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <Reveal>
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">01</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Dall'Accademia di Belle Arti all'architettura cloud.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-muted-foreground leading-relaxed mt-8 max-w-2xl">
              Un percorso che unisce la sensibilità estetica alla precisione ingegneristica. 
              Ogni progetto è un'opportunità per trasformare visioni in esperienze digitali scalabili.
            </p>
            <Link 
              to="/percorso" 
              className="inline-flex items-center gap-3 mt-8 font-body text-sm uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors group"
            >
              <span className="w-8 h-px bg-foreground group-hover:bg-primary group-hover:w-16 transition-all" />
              Scopri il percorso
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PROJECTS PREVIEW
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 bg-foreground text-background">
        <div className="px-8 md:px-16 lg:px-24">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-16">
              <span className="font-display text-8xl md:text-9xl font-bold text-primary/30">02</span>
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">I Capitoli</span>
                <h2 className="font-display text-4xl md:text-6xl font-bold mt-1 text-background">Progetti Selezionati</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["FreeLens", "Visio", "Sophia"].map((project, i) => (
              <Reveal key={project} delay={i * 150}>
                <Link 
                  to="/progetti"
                  className="group block p-8 border border-background/10 rounded-lg hover:bg-background/5 transition-colors"
                >
                  <span className="font-display text-6xl font-bold text-primary/30">{["I", "II", "III"][i]}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-4">{project}</h3>
                  <div className="flex items-center gap-2 mt-6 font-body text-sm text-primary group-hover:gap-4 transition-all">
                    <span>Esplora</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-16 text-center">
              <Link 
                to="/progetti"
                className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-background hover:text-primary transition-colors group"
              >
                <span className="w-8 h-px bg-background group-hover:bg-primary group-hover:w-16 transition-all" />
                Tutti i progetti
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VALUE PROPOSITION — SIGNATURE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24">
        <Reveal>
          <div className="max-w-4xl">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">03</span>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mt-8">
              "Progetto e guido l'evoluzione digitale delle imprese locali, integrando{" "}
              <span className="text-primary">strategia di prodotto</span>,{" "}
              <span className="text-stroke-primary">design d'impatto</span> e un{" "}
              <span className="text-primary">supporto costante</span>."
            </blockquote>
            
            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-4 font-body text-sm uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-px bg-foreground group-hover:bg-primary group-hover:w-20 transition-all" />
                Costruiamo insieme
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
