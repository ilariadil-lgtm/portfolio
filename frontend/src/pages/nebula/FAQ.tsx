import React, { useEffect } from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaFAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NebulaProjectLayout
      title="FAQ"
      type="INFO"
      description={
        <p>
          Domande frequenti su come lavoro, i miei processi, tempi e costi. Tutto quello che devi sapere prima di iniziare un progetto insieme.
        </p>
      }
      techList={[]}
      role="UX/UI & Developer"
      year="2026"
    >
      <div className="mt-12 p-8 border border-white/5 bg-white/[0.02] rounded-none relative overflow-hidden">
        <h3 className="font-bricolage font-black text-2xl tracking-tight text-white mb-4 relative z-10">
          In aggiornamento
        </h3>
        <p className="font-outfit text-white/50 font-light relative z-10">
          Questa sezione è attualmente in fase di revisione. Presto saranno disponibili nuove informazioni.
        </p>
      </div>
    </NebulaProjectLayout>
  );
};

export default NebulaFAQ;
