# Piano di intervento — Rivoluzione del sito

Documento vivo: si spunta ogni voce man mano che è fatta **e verificata**,
non solo scritta. Vive nel repo (non nella cartella `.claude/plans/`) così
resta a portata di mano in ogni sessione, come `CONTESTO.md`.

**Approccio confermato:** graduale, un pezzo alla volta, verificando prima
di andare avanti. Architettura custom (niente WordPress per il sito di
Ilaria — resta il tema per i lavori fatti PER i clienti).

---

## 🎯 Obiettivo

Un sito pensato per **portare clienti**, non solo per essere bello da
vedere, con una SEO semantica che punti a dominare (non solo comparire)
sulle ricerche che contano davvero per il business:
- Siti web aziendali / e-commerce ad Agrigento e in Sicilia (clienti diretti)
- Partner tecnico white-label per agenzie/professionisti (nuovo pubblico)

---

## 🌳 Albero delle categorie

Legenda: 🟢 dalla lista di Ilaria — 🟡 proposta mia, da confermare

```
/                             🟢 Home
/chi-sono                     🟢 Chi sono
/servizi                      🟢 Servizi (pagina hub — clienti diretti)
  /servizi/wordpress          🟢 Siti WordPress
  /servizi/e-commerce         🟢 E-commerce
  /servizi/brand-identity     🟢 Brand Identity
/white-label                  🟢 White Label (pagina hub — per agenzie/professionisti)
  /white-label/wordpress      🟢 WordPress white label
  /white-label/e-commerce     🟢 E-commerce white label
  /white-label/graphic-design 🟢 Graphic Design white label
/portfolio                    🟢 Portfolio (ex "/progetti" — rinominato)
  /portfolio/[progetto]       🟡 le pagine progetto restano, URL da decidere se cambiano
/blog                         🟢 Blog ("forse" — vedi nota sotto)
/contatti                     🟢 Contatti
/consulenza-gratuita          🟡 "Richiedi una consulenza gratuita" — pagina dedicata
                                  linkata da un bottone SEMPRE visibile in nav
                                  (non una voce di menu a tendina), pensata solo
                                  per la conversione immediata
```

**Punti da decidere insieme prima di costruire (Fase 1):**
- [ ] `/blog`: lo teniamo? Per la SEO semantica aiuta molto (contenuti satellite
      dei pillar: "quanto costa un sito WordPress", "e-commerce: WooCommerce o
      PrestaShop?"...) ma solo se alimentato con costanza — un blog fermo fa più
      danno che bene. Decidere sì/no/aspettiamo.
- [ ] `/servizi` e `/white-label`: propongo che siano pagine **hub** (panoramica
      + link alle 3 sotto-pagine), non solo contenitori di menu — è lo schema
      che regge meglio la SEO semantica (pillar + cluster)
- [ ] Le vecchie `/faq` e `/loghi` (esistono oggi): le assorbiamo dentro le
      pagine nuove (es. Loghi dentro Brand Identity, FAQ distribuite per
      argomento nelle pagine pillar) o restano pagine a sé? La SEO semantica
      preferisce la prima opzione, ma è una scelta di contenuto, non tecnica.
- [ ] URL dei singoli progetti: restano `/portfolio/nome-progetto` uguali
      a oggi (solo il contenitore cambia nome) o si rinominano anche quelli?

---

## Fase 0 — Direzione visiva e obiettivi

- [x] Chiarire con Ilaria cosa non convince del sito attuale
- [x] Proporre 2 direzioni di fusione Editorial/Nebula come mockup comparabili
      → [canvas pubblicata](https://claude.ai/artifact/TnJhcMC62L58yXhtfPWshG)
- [ ] Scegliere la direzione visiva (o una via di mezzo) — **in sospeso,
      Ilaria ha detto di deciderlo dopo**
- [ ] Definire l'azione di conversione principale per pagina (form contatti?
      consulenza gratuita? chiamata diretta?)

## Fase 1 — Architettura dell'informazione

- [ ] Chiudere i punti aperti nell'albero qui sopra con Ilaria
- [ ] Riscrivere `src/routes.ts` e `src/lib/rotte-lingua.json` con la nuova
      struttura (pattern IT-radice / EN-sotto-`/en` invariato)
- [ ] Aggiornare `Navigation.tsx` / `NebulaNav.tsx` per il menu più ricco
      (valutare mega-menu o tendine se le voci sono tante)
- [ ] Verificare che `scripts/prerender.mjs` generi la sitemap corretta
      sulle nuove rotte (è automatico, legge da `routes.ts`)

## Fase 2 — Direzione visiva definitiva

- [ ] Costruire il design system unificato in base alla scelta della Fase 0
      (colori, tipografia, componenti condivisi)
- [ ] Aggiornare `tailwind.config.ts` e i token
- [ ] Un componente pilota alla volta (Navigation → Hero → resto), verificato
      nel browser prima di propagare

## Fase 3 — Pagine, una alla volta

Ordine consigliato (dal più commerciale al più di contorno):

- [ ] Home
- [ ] Servizi (hub) + Sito WordPress + E-commerce + Brand Identity
- [ ] White Label (hub) + WordPress + E-commerce + Graphic Design
- [ ] Portfolio (+ pagine progetto)
- [ ] Chi sono
- [ ] Contatti + Consulenza gratuita
- [ ] Blog (se confermato in Fase 1)

Per ognuna: grafica nuova + copy orientato alla conversione + verifica
locale (`npm run dev`, poi `npm run build:prod`) prima di passare oltre.

## Fase 4 — SEO semantica

- [ ] Mappa topica completa (pillar + contenuti satellite) per ciascun hub
      — bozza già abbozzata in chat, da formalizzare qui una volta chiuso
      il blog sì/no
- [ ] Titoli pagina riscritti con parole chiave reali (oggi troppo generici:
      "Sito aziendale — Ilaria Diliberto" → serve "Agrigento"/"sito web")
      via `fullTitle` su `usePageMeta`, come già fatto per la Home
- [ ] Schema.org: aggiungere `ProfessionalService`/`LocalBusiness` con area
      servita esplicita (oggi c'è solo `Person`)
- [ ] Decidere cosa fare di StorageHub/Freelens (progetti personali/di
      formazione che oggi diluiscono la rilevanza tematica con gergo tecnico
      React/Django/Stripe non pertinente al servizio reale)
- [ ] Internal linking: ogni pillar collegato ai suoi satelliti e ai case
      study pertinenti come prova sociale
- [ ] FAQ/contenuti satellite scritti con le vere domande dei clienti,
      non parole chiave a caso

## Fase 5 — Verifica e rilascio graduale

- [ ] `npx tsc --noEmit` pulito
- [ ] `npm run build:prod` → 44+/44+ route (il numero salirà con le nuove
      pagine)
- [ ] Test locale a più risoluzioni (protocollo già rodato nel go-live)
- [ ] Merge su `main` solo con conferma esplicita di Ilaria
- [ ] Vista la natura graduale: valutare rilascio sezione per sezione
      invece di aspettare tutto il pacchetto

---

## Note aperte / da chiedere a Ilaria

- [ ] Elenco definitivo confermato per: Blog sì/no, destino di FAQ e Loghi,
      URL delle pagine progetto
