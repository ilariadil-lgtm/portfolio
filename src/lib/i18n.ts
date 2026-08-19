import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationIT from '../locales/it.json';

// L'italiano e la lingua sorgente: viaggia nel bundle iniziale.
// L'inglese (88 KB) viene caricato solo se qualcuno lo chiede davvero.
i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translationIT },
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

/**
 * Unico punto d'ingresso per il cambio lingua.
 * Scarica il dizionario mancante prima di attivarlo, cosi l'interfaccia
 * non passa mai da uno stato con le chiavi grezze visibili.
 */
export async function cambiaLingua(lingua: string): Promise<void> {
  if (lingua === 'en' && !i18n.hasResourceBundle('en', 'translation')) {
    const { default: translationEN } = await import('../locales/en.json');
    i18n.addResourceBundle('en', 'translation', translationEN, true, true);
  }
  await i18n.changeLanguage(lingua);
}

export default i18n;
