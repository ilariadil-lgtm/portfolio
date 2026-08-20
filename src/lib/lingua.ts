/**
 * Corrispondenza fra lingua e indirizzo.
 *
 * L'italiano vive alla radice — /servizi — l'inglese sotto /en — /en/servizi.
 * Prima il selettore cambiava lingua senza cambiare indirizzo: per un motore
 * di ricerca la versione inglese non esisteva, perche non aveva un URL da
 * indicizzare ne da condividere.
 */
export const LINGUE = ["it", "en"] as const;
export type Lingua = (typeof LINGUE)[number];

export const PREFISSO = "/en";

/** L'indirizzo e in inglese? */
export const inglese = (percorso: string): boolean =>
  percorso === PREFISSO || percorso.startsWith(PREFISSO + "/");

/** Toglie il prefisso: /en/servizi → /servizi, /en → / */
export const senzaPrefisso = (percorso: string): string => {
  if (percorso === PREFISSO) return "/";
  if (percorso.startsWith(PREFISSO + "/")) return percorso.slice(PREFISSO.length);
  return percorso;
};

/** Aggiunge il prefisso: /servizi → /en/servizi, / → /en */
export const conPrefisso = (percorso: string): string =>
  percorso === "/" ? PREFISSO : PREFISSO + percorso;

/** Lo stesso contenuto nell'altra lingua. */
export const percorsoIn = (percorso: string, lingua: Lingua): string => {
  const base = senzaPrefisso(percorso);
  return lingua === "en" ? conPrefisso(base) : base;
};

export const linguaDi = (percorso: string): Lingua =>
  inglese(percorso) ? "en" : "it";
