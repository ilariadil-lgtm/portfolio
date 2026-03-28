import { Reveal } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const FAQ = () => {
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await api.getFaqs();
        setFaqs(data.results || data);
      } catch (error) {
        console.error("Errore FAQ:", error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary">Domande Frequenti</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4">FAQ</h1>
        </Reveal>
      </section>
      
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="space-y-12 max-w-4xl">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-editorial pb-12">
              <h2 className="font-display text-2xl font-bold mb-4">{faq.question}</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
          {faqs.length === 0 && <p className="font-body opacity-50">Nessuna FAQ disponibile al momento.</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
