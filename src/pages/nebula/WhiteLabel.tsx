import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { Link } from "@/components/Link";
import { ArrowRight, Layout, ShoppingBag, Palette } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const items = [
  { title: "WordPress", url: "/white-label/wordpress", description: "Sviluppo siti WordPress a marchio tuo.", icon: <Layout size={20} /> },
  { title: "E-commerce", url: "/white-label/e-commerce", description: "Sviluppo e-commerce a marchio tuo.", icon: <ShoppingBag size={20} /> },
  { title: "Graphic Design", url: "/white-label/graphic-design", description: "Materiali grafici a marchio tuo.", icon: <Palette size={20} /> },
];

const WhiteLabel = () => {
  usePageMeta({
    title: "White Label",
    description: "Un partner tecnico per la tua agenzia: sviluppo WordPress, e-commerce e graphic design a marchio tuo, senza che il cliente finale sappia chi c'è dietro.",
  });

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 flex flex-col lg:pl-24">
      <NebulaNav />
      <main className="flex-1 px-6 md:px-12 pt-40 pb-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
            Per agenzie e professionisti
          </span>
          <h1 className="font-fraunces text-4xl md:text-6xl font-bold tracking-tight text-white">
            White Label
          </h1>
          <p className="font-outfit font-light text-lg text-white/70 leading-relaxed max-w-2xl">
            Un partner tecnico per la tua agenzia: sviluppo WordPress, e-commerce e graphic design a marchio tuo, senza che il cliente finale sappia chi c'è dietro.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="group flex flex-col gap-4 p-8 border border-gold/20 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <h2 className="font-fraunces text-xl font-bold text-white">{item.title}</h2>
              <p className="font-outfit font-light text-sm text-white/60 leading-relaxed flex-1">{item.description}</p>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                Scopri di più
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </main>
      <NebulaFooter />
    </div>
  );
};

export default WhiteLabel;
