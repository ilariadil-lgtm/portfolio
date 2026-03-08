import { Reveal } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    num: "I",
    title: "FreeLens",
    tagline: "Portfolio, booking e fatturazione in un'unica esperienza.",
    challenge: "I fotografi freelance gestivano portfolio, calendario e pagamenti su piattaforme separate. Frammentazione, tempo perso, clienti perduti.",
    vision: "Una piattaforma coesa che unifica l'intero workflow creativo: dalla showcase al pagamento.",
    approach: "Partendo da interviste con 15 fotografi professionisti, ho mappato i pain points e progettato un sistema modulare. L'architettura Django + React permette scalabilità, mentre l'integrazione con Stripe semplifica la monetizzazione.",
    tech: ["Django", "React", "AWS S3", "Stripe"],
    year: "2023",
    image: "/placeholder.svg"
  },
  {
    num: "II",
    title: "Visio",
    tagline: "Feedback creativi in tempo reale.",
    challenge: "Un'agenzia creativa aveva bisogno di gestire i feedback dei clienti sui deliverable visivi senza perdersi tra email e versioni.",
    vision: "Dashboard collaborativa con annotazioni live, versionamento automatico e notifiche intelligenti.",
    approach: "Ho implementato un sistema di annotazioni basato su coordinate, con WebSocket per la sincronizzazione in tempo reale. Il versionamento automatico elimina il rischio di sovrascritture accidentali.",
    tech: ["React", "Node.js", "WebSocket", "AWS"],
    year: "2023",
    image: "/placeholder.svg"
  },
  {
    num: "III",
    title: "Sophia",
    tagline: "Percorsi terapeutici intelligenti.",
    challenge: "Una rete di professionisti della salute mentale faticava a coordinare appuntamenti e percorsi personalizzati.",
    vision: "Sistema di prenotazione intelligente con percorsi adattivi e insight per i terapeuti.",
    approach: "Ho progettato un algoritmo di matching terapeuta-paziente e un sistema di reminder multi-canale. L'uso di Lambda garantisce costi contenuti anche con picchi di utilizzo.",
    tech: ["Django", "React", "PostgreSQL", "Lambda"],
    year: "2022",
    image: "/placeholder.svg"
  }
];

const Progetti = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">I Capitoli</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-[0.9]">
            Progetti<br />
            <span className="text-stroke">Selezionati</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-muted-foreground leading-relaxed mt-8 max-w-xl">
            Ogni progetto è un capitolo: una sfida tecnica affrontata con visione 
            di prodotto e cura per i dettagli. Ecco i lavori che raccontano meglio 
            il mio approccio.
          </p>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="relative py-16 md:py-32">
        <div className="space-y-0">
          {projects.map((project, i) => (
            <article 
              key={project.title} 
              className={`${i % 2 === 0 ? "bg-background" : "bg-foreground text-background"} py-32 md:py-48`}
            >
              <div className="px-8 md:px-16 lg:px-24">
                <Reveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Identity */}
                    <div className="lg:col-span-4">
                      <span className={`font-display text-[10rem] md:text-[14rem] font-bold leading-none ${
                        i % 2 === 0 ? "text-primary/10" : "text-primary/20"
                      }`}>
                        {project.num}
                      </span>
                      <h2 className="font-display text-4xl md:text-6xl font-bold -mt-8">{project.title}</h2>
                      <p className={`font-body text-sm mt-4 ${
                        i % 2 === 0 ? "text-primary" : "text-primary"
                      }`}>
                        {project.tagline}
                      </p>
                      <p className={`font-body text-xs uppercase tracking-[0.2em] mt-4 ${
                        i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                      }`}>
                        {project.year}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-8">
                        {project.tech.map((t) => (
                          <span 
                            key={t} 
                            className={`px-3 py-1 text-[10px] uppercase tracking-widest border rounded-full ${
                              i % 2 === 0 
                                ? "border-primary/30 text-primary" 
                                : "border-primary/40 text-primary"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-8 space-y-8">
                      <div className="aspect-[16/9] w-full overflow-hidden mb-8 bg-muted/10">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <span className={`font-body text-[10px] uppercase tracking-[0.3em] ${
                            i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                          }`}>
                            La Sfida
                          </span>
                          <p className={`font-body leading-relaxed mt-3 ${
                            i % 2 === 0 ? "text-foreground" : "text-background"
                          }`}>
                            {project.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <span className={`font-body text-[10px] uppercase tracking-[0.3em] ${
                            i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                          }`}>
                            La Visione
                          </span>
                          <p className={`font-body leading-relaxed mt-3 ${
                            i % 2 === 0 ? "text-foreground" : "text-background"
                          }`}>
                            {project.vision}
                          </p>
                        </div>

                        <div className="md:col-span-2">
                          <span className={`font-body text-[10px] uppercase tracking-[0.3em] ${
                            i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                          }`}>
                            L'Approccio
                          </span>
                          <p className={`font-body leading-relaxed mt-3 ${
                            i % 2 === 0 ? "text-foreground" : "text-background"
                          }`}>
                            {project.approach}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Progetti;
