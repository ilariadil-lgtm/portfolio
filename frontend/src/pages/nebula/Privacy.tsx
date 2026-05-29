import React from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaPrivacy = () => {
  return (
    <NebulaProjectLayout
      title="Privacy Policy"
      type="CLASSIFIED_FILE"
      description={
        <p>
          Informativa sulla privacy di Ilaria Diliberto. Come vengono raccolti e trattati i dati personali.
        </p>
      }
      techList={[]}
      role="UX/UI & Developer"
      year="2023-2024"
      
    >
      

      <div className="mt-12 p-8 border border-cyan-500/20 bg-cyan-500/5 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-50" />
        <h3 className="font-sans font-black text-3xl tracking-tight text-white mb-4 relative z-10">
          Operazione Completata.
        </h3>
        <p className="font-sans text-slate-400 font-light relative z-10">
          I log mostrano un'integrazione di successo. I dati sono stati archiviati nel core.
        </p>
      </div>


    </NebulaProjectLayout>
  );
};

export default NebulaPrivacy;
