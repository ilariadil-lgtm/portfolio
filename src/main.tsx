import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./fonts.css";
import "./index.css";
import { cambiaLingua } from "./lib/i18n";
import { linguaDi } from "./lib/lingua";

// Chi entra da un indirizzo /en deve vedere l'inglese al primo paint, non
// l'italiano seguito da uno scatto: il dizionario si carica prima di montare.
const avvia = async () => {
  const lingua = linguaDi(window.location.pathname);
  if (lingua !== "it") await cambiaLingua(lingua);
  createRoot(document.getElementById("root")!).render(<App />);
};

void avvia();
