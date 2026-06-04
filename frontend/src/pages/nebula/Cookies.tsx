import React, { useEffect } from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaCookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NebulaProjectLayout
      title="Cookie Policy"
      type="LEGAL"
      description={
        <p>
          Informativa sull'uso dei cookie di questo sito web.
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
          La cookie policy è in fase di aggiornamento legale.
        </p>
      </div>
    </NebulaProjectLayout>
  );
};

export default NebulaCookies;
