import { Reveal } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">Il Prossimo Capitolo</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-[0.9]">
            Costruiamo<br />
            <span className="text-stroke">Insieme</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-muted-foreground leading-relaxed mt-8 max-w-xl">
            Ogni grande progetto inizia con una conversazione. Raccontami la tua visione, 
            e insieme troveremo il modo migliore per realizzarla.
          </p>
        </Reveal>
      </section>

      {/* Contact Options */}
      <section className="relative py-16 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left: Direct Contact */}
          <div>
            <Reveal>
              <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">01</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Contatto Diretto</h2>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Preferisco le conversazioni reali. Scrivimi una mail e fissiamo una call 
                per parlare del tuo progetto.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a 
                href="mailto:ilaria@example.com"
                className="group flex items-center gap-6 mt-12 p-6 border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                  <p className="font-display text-xl font-bold mt-1">ilaria@example.com</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
              </a>
            </Reveal>
          </div>

          {/* Right: Social */}
          <div>
            <Reveal>
              <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">02</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Connessioni</h2>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Seguimi sui social per aggiornamenti su progetti, articoli tecnici 
                e riflessioni sul design.
              </p>
            </Reveal>

            <div className="space-y-4 mt-12">
              <Reveal delay={200}>
                <a 
                  href="https://linkedin.com"
                  className="group flex items-center gap-6 p-6 border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</span>
                    <p className="font-display text-xl font-bold mt-1">Ilaria Diliberto</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                </a>
              </Reveal>

              <Reveal delay={300}>
                <a 
                  href="https://github.com"
                  className="group flex items-center gap-6 p-6 border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</span>
                    <p className="font-display text-xl font-bold mt-1">@ilariadiliberto</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 border-t border-border">
        <Reveal>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl">
            "Il prossimo capitolo del tuo business merita una presenza digitale che{" "}
            <span className="text-primary">cresce con te</span>."
          </blockquote>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
