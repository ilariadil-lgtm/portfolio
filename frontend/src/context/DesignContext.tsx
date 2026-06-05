import React, { createContext, useContext, useEffect, useState } from "react";

type DesignType = "editorial" | "nebula";

interface DesignContextType {
  design: DesignType;
  setDesign: (design: DesignType) => void;
  toggleDesign: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [design, setDesignInternal] = useState<DesignType>(() => {
    const saved = localStorage.getItem("portfolio-design");
    if (saved === "editorial" || saved === "nebula") {
      return saved;
    }
    return "editorial"; // Default se non è salvato nulla
  });

  const setDesign = (newDesign: DesignType) => {
    setDesignInternal(newDesign);
    localStorage.setItem("portfolio-design", newDesign);
  };

  const toggleDesign = () => {
    const next = design === "editorial" ? "nebula" : "editorial";
    setDesign(next);
  };

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
