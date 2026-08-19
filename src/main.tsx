import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// ── Font self-hostati ────────────────────────────────────────────────────────
// Dichiarati staticamente: il browser scarica solo le famiglie effettivamente
// disegnate, quindi il tema non attivo non costa nulla.
// Editorial
import "@fontsource-variable/eb-garamond";
import "@fontsource-variable/eb-garamond/wght-italic.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/hind-siliguri/300.css";
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/500.css";
import "@fontsource/hind-siliguri/600.css";
import "@fontsource/hind-siliguri/700.css";
// Nebula
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
// Comune a entrambi i temi (.font-typewriter)
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/400-italic.css";
import "@fontsource/courier-prime/700.css";

import "./index.css";
import "./lib/i18n";

createRoot(document.getElementById("root")!).render(<App />);
