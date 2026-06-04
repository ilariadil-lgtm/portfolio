import React, { useEffect } from "react";
import { NebulaProjectLayout } from "./components/NebulaProjectLayout";

export const NebulaPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NebulaProjectLayout
      title="Privacy Policy"
      type="LEGAL"
      description={
        <p>
          Informativa sulla privacy di Ilaria Diliberto. Come vengono raccolti e trattati i dati personali.
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
          La privacy policy è in fase di aggiornamento legale.
        </p>
      </div>
    </NebulaProjectLayout>
  );
};

export default NebulaPrivacy;
