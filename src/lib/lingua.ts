import tabella from "./rotte-lingua.json";

/**
 * Corrispondenza fra lingua e indirizzo.
 *
 * L'italiano vive alla radice — /servizi — l'inglese sotto /en con lo slug
 * tradotto — /en/services. Prima il selettore cambiava lingua senza cambiare
 * indirizzo: per un motore di ricerca la versione inglese non esisteva.
 *
 * Nel codice i percorsi si scrivono sempre in italiano, perche l'italiano e la
 * lingua sorgente. La traduzione avviene qui, in un punto solo.
 */
export const LINGUE = ["it", "en"] as const;
export type Lingua = (typeof LINGUE)[number];

export const PREFISSO = "/en";

const VERSO_INGLESE: Record<string, string> = tabella.rotte;
const VERSO_ITALIANO: Record<string, string> = Object.fromEntries(
  Object.entries(VERSO_INGLESE).map(([it, en]) => [en, it]),
);

/** L'indirizzo e in inglese? */
export const inglese = (percorso: string): boolean =>
  percorso === PREFISSO || percorso.startsWith(PREFISSO + "/");

/** Toglie il prefisso e riporta lo slug in italiano: /en/services → /servizi */
export const senzaPrefisso = (percorso: string): string => {
  if (!inglese(percorso)) return percorso;
  const resto = percorso === PREFISSO ? "/" : percorso.slice(PREFISSO.length);
  return VERSO_ITALIANO[resto] ?? resto;
};

/** Aggiunge il prefisso e traduce lo slug: /servizi → /en/services */
export const conPrefisso = (percorso: string): string => {
  const tradotto = VERSO_INGLESE[percorso] ?? percorso;
  return tradotto === "/" ? PREFISSO : PREFISSO + tradotto;
};

/** Lo stesso contenuto nell'altra lingua, a partire da un indirizzo qualsiasi. */
export const percorsoIn = (percorso: string, lingua: Lingua): string => {
  const base = senzaPrefisso(percorso);
  return lingua === "en" ? conPrefisso(base) : base;
};

export const linguaDi = (percorso: string): Lingua =>
  inglese(percorso) ? "en" : "it";
