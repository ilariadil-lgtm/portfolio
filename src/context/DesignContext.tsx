import React, { createContext, useContext } from "react";

type DesignType = "editorial" | "nebula";

interface DesignContextType {
  design: DesignType;
  setDesign: (design: DesignType) => void;
  toggleDesign: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

// Rivoluzione del sito (PIANO-RIVOLUZIONE-SITO.md, Fase 2): un'unica
// identita visiva, niente piu selettore Editorial/Nebula. Il contesto
// resta com'e strutturalmente — tutto il codice che legge useDesign()
// continua a funzionare — ma e bloccato su "editorial": setDesign e
// toggleDesign non cambiano piu nulla. Nebula resta solo come stile
// della sezione White Label, non piu un tema scelto dal visitatore.
export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const design: DesignType = "editorial";
  const setDesign = () => {};
  const toggleDesign = () => {};

  return (
    <DesignContext.Provider value={{ design, setDesign, toggleDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
};
