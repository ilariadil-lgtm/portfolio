import json

it_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json"
en_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json"

with open(it_file, "r") as f:
    it_data = json.load(f)

with open(en_file, "r") as f:
    en_data = json.load(f)

# STORAGEHUB
it_storagehub = {
    "meta_desc": "Semplificare la complessità dello storage aziendale. Un'applicazione web intelligente progettata per ottimizzare la gestione dell'inventario enterprise.",
    "hero_label": "SOFTWARE ENGINEERING • UI/UX",
    "hero_desc": "Un Sistema Intelligente di Gestione Inventario e Magazzino. Un'applicazione web progettata per eliminare gli errori umani, automatizzare il tracciamento delle giacenze e integrare l'Intelligenza Artificiale nel supporto decisionale.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Quando i fogli Excel non bastano più.",
    "ch1_p1": "La gestione dell'inventario tradizionale è frammentata e propensa all'errore umano. Fogli di calcolo disallineati, rotture di stock improvvise e la mancanza di comunicazione in tempo reale tra la direzione e i magazzinieri causano enormi perdite di tempo e denaro. StorageHub nasce per risolvere questa esigenza cruciale: fornire una visibilità esatta e istantanea delle giacenze per prendere decisioni rapide ed evitare sprechi.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Un'unica fonte di verità: dall'operatività in magazzino al ",
    "ch2_title2": "controllo direzionale",
    "ch2_title3": ", in tempo reale.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "Ecosistemi su misura.",
    "ch3_p1": "Il sistema si basa su un'architettura Role-Based Access Control (RBAC). Ho progettato due interfacce distinte partendo da un singolo punto di accesso: un pannello strategico globale per l'Admin (finanze, fornitori, report AI) e una dashboard operativa priva di distrazioni per il Magazziniere. Ogni movimento registrato aggiorna istantaneamente il database centralizzato, attivando allarmi preventivi quando un prodotto scende sotto la soglia minima.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Backend Django & Integrazione AI.",
    "ch4_p1": "StorageHub è costruito su un'architettura disaccoppiata e solida. Il backend è sviluppato in Django (REST Framework), interfacciato con un database relazionale PostgreSQL. Il frontend è una Single Page Application in React 18, strutturata per essere fluida e responsiva. Il cuore innovativo del sistema è l'integrazione multi-provider (OpenAI GPT-4 e Google Gemini), capace di analizzare i log immutabili dell'inventario e generare report in linguaggio naturale per supportare le decisioni di riordino.",
    "role_val": "Full-Stack Lead Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Logica e Controllo.",
    "ch5_p1": "Il risultato è un gestionale che non si limita a registrare dati, ma partecipa attivamente alla vita aziendale. Sostituendo flussi di lavoro obsoleti con un'infrastruttura sicura, veloce e assistita dall'intelligenza artificiale, StorageHub trasforma il magazzino da centro di costo a motore di efficienza."
}

# FREELENS
it_freelens = {
    "meta_desc": "Una piattaforma di Project Management per freelancer e piccoli team. Progettata per ridurre il rumore visivo e favorire la concentrazione.",
    "hero_label": "SAAS DEVELOPMENT • UI/UX",
    "hero_desc": "Una piattaforma gestionale SaaS creata appositamente per professionisti autonomi. Un ecosistema completo per il tracciamento finanziario, il controllo dei margini e l'ottimizzazione del business tramite Intelligenza Artificiale integrata.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "L'antidoto alla <span class=\"italic text-primary\">bancarotta tecnica.</span>",
    "ch1_p1": "Lavorare molto non significa sempre lavorare in attivo. Freelense nasce per risolvere un problema endemico tra i professionisti: la perdita di controllo sulla reale redditività dei progetti. L'obiettivo era creare una piattaforma che trasformasse il tracciamento delle ore, la preventivazione e la gestione delle scadenze in un processo visivo e immediato, scongiurando il rischio di lavorare in perdita e offrendo una chiarezza finanziaria assoluta.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Riprendere il controllo del proprio tempo. <span class=\"text-primary italic\">Un ecosistema dove la salute finanziaria diventa finalmente chiara</span>, misurabile e assistita dall'intelligenza artificiale.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "L'esperienza utente al centro.",
    "ch3_p1": "L'interfaccia è concepita come una Single Page Application fluida e reattiva, ingegnerizzata con React 18 e TypeScript. Ho adottato un'estetica premium—con richiami al glassmorphism, gradienti dinamici e micro-interazioni—per rendere piacevole un'attività solitamente noiosa come l'amministrazione. Grazie a TanStack Query per il caching e Recharts per la data visualization, ogni KPI finanziario è istantaneamente disponibile sulla dashboard, azzerando i tempi di caricamento percepiti.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Supabase, Serverless & AI.",
    "ch4_p1": "L'infrastruttura backend poggia interamente su PostgreSQL, garantendo la massima sicurezza tramite policy RLS (Row Level Security) rigorose: ogni utente ha accesso esclusivo ai propri dati. Il vero valore aggiunto risiede però nelle Edge Functions: un microservizio serverless alimenta l'assistente virtuale integrato, capace di leggere il contesto finanziario del professionista (pagamenti, progetti, scadenze) e fornire suggerimenti strategici in tempo reale. Il sistema è completato dall'integrazione di Stripe per la gestione sicura degli abbonamenti premium.",
    "role_val": "Lead Product Designer & Dev",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Intelligenza Finanziaria.",
    "ch5_p1": "Il risultato è un prodotto SaaS end-to-end completo e scalabile. Unendo un'interfaccia utente d'impatto a un'architettura dati complessa e serverless, la piattaforma non si limita a organizzare il lavoro, ma agisce come un vero e proprio partner strategico per la crescita del professionista."
}

# VILLAMASAMI
it_villamasami = {
    "meta_desc": "Un progetto digitale completo realizzato per Villa Masami in collaborazione con l'agenzia Carnova. Brand identity, copywriting e sito WordPress multilingua.",
    "hero_label": "BRAND  IDENTITY • UI/UX • WEB",
    "hero_desc": "Un progetto digitale completo, realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura: dall'ideazione e realizzazione del logo alla stesura dei testi, fino allo sviluppo dell'infrastruttura web su WordPress.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "L'ospitalità siciliana <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "Villa Masami necessitava di un'identità web che riflettesse l'eleganza e la tranquillità dei suoi spazi, situati in una posizione strategica vicino alla Valle dei Templi. Lavorando in stretta sinergia con l'agenzia Carnova, il mandato era chiaro: creare una vetrina digitale empatica e funzionale.",
    "ch1_p2": "Una piattaforma capace di trasmettere calore umano e, al tempo stesso, mettere in risalto i vantaggi logistici della struttura, come l'accesso indipendente tramite tastierino numerico e la gestione automatizzata.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Più comodità, meno pensieri: tradurre il calore dell'accoglienza reale in un'esperienza di <span class=\"text-primary italic\">navigazione fluida</span> e priva di ostacoli.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "Branding, UI e Copywriting.",
    "ch3_p1": "In questo progetto, l'identità del brand, l'interfaccia utente e l'anima editoriale sono nate insieme. Sono partita dall'ideazione e dal design del logo, creando un segno grafico che catturasse l'eleganza e l'essenza della villa.",
    "ch3_p2": "Da lì, ho curato la stesura dei contenuti con un tono di voce rassicurante e ho disegnato una UI progettata per valorizzare gli spazi fisici, guidando l'utente in un percorso visivo pulito, intuitivo e orientato alla conversione.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Ecosistema WordPress Multilingua.",
    "ch4_p1": "Lato sviluppo, ho implementato e configurato l'intero sito su piattaforma WordPress, occupandomi dell'inserimento e dell'impaginazione di ogni singola vista. Oltre a garantire una perfetta responsività su dispositivi mobile, ho strutturato un'architettura nativamente bilingue (Italiano e Inglese).",
    "ch4_p2": "Questo ha permesso alla struttura di posizionarsi immediatamente sul mercato turistico internazionale, offrendo un'esperienza utente coerente in entrambe le lingue.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Il sapore dell'accoglienza.",
    "ch5_p1": "Il risultato finale è un sito web che respira la stessa aria di quiete della struttura fisica. Un progetto end-to-end che dimostra la capacità di orchestrare ogni sfumatura della presenza online: dal design dell'interfaccia alla cura minuziosa della parola scritta, restituendo all'agenzia partner e al cliente finale un prodotto pronto per il mercato."
}


en_storagehub = {
    "meta_desc": "Simplifying enterprise storage complexity. An intelligent web application designed to optimize corporate inventory management.",
    "hero_label": "SOFTWARE ENGINEERING • UI/UX",
    "hero_desc": "An Intelligent Inventory and Warehouse Management System. A web application designed to eliminate human errors, automate stock tracking, and integrate AI for decision support.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "When Excel sheets are no longer enough.",
    "ch1_p1": "Traditional inventory management is fragmented and prone to human error. Misaligned spreadsheets, sudden stockouts, and the lack of real-time communication between management and warehouse staff cause huge losses of time and money. StorageHub was created to solve this crucial need: providing an exact, instant view of stock to make quick decisions and avoid waste.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"A single source of truth: from warehouse operations to ",
    "ch2_title2": "executive control",
    "ch2_title3": ", in real time.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "Tailor-made ecosystems.",
    "ch3_p1": "The system is based on a Role-Based Access Control (RBAC) architecture. I designed two distinct interfaces starting from a single access point: a global strategic panel for the Admin (finances, suppliers, AI reports) and a distraction-free operational dashboard for the Warehouse Worker. Every recorded movement instantly updates the centralized database, triggering preventive alarms when a product drops below the minimum threshold.",
    "ch4_label": "04 — Development",
    "ch4_title": "Django Backend & AI Integration.",
    "ch4_p1": "StorageHub is built on a decoupled and solid architecture. The backend is developed in Django (REST Framework), interfaced with a PostgreSQL relational database. The frontend is a Single Page Application in React 18, structured to be fluid and responsive. The innovative core of the system is the multi-provider integration (OpenAI GPT-4 and Google Gemini), capable of analyzing immutable inventory logs and generating natural language reports to support reordering decisions.",
    "role_val": "Full-Stack Lead Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Logic and Control.",
    "ch5_p1": "The result is a management software that does not just record data, but actively participates in corporate life. By replacing obsolete workflows with a secure, fast, and AI-assisted infrastructure, StorageHub transforms the warehouse from a cost center to an engine of efficiency."
}

en_freelens = {
    "meta_desc": "A Project Management platform for freelancers and small teams. Designed to reduce visual noise and promote focus.",
    "hero_label": "SAAS DEVELOPMENT • UI/UX",
    "hero_desc": "A SaaS management platform created specifically for independent professionals. A complete ecosystem for financial tracking, margin control, and business optimization through integrated AI.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "The antidote to <span class=\"italic text-primary\">technical bankruptcy.</span>",
    "ch1_p1": "Working hard doesn't always mean working profitably. Freelens was created to solve an endemic problem among professionals: the loss of control over the real profitability of projects. The goal was to create a platform that transformed time tracking, quoting, and deadline management into a visual and immediate process, avoiding the risk of working at a loss and offering absolute financial clarity.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Regain control of your time. <span class=\"text-primary italic\">An ecosystem where financial health finally becomes clear</span>, measurable, and assisted by AI.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "User experience at the core.",
    "ch3_p1": "The interface is designed as a fluid and responsive Single Page Application, engineered with React 18 and TypeScript. I adopted a premium aesthetic—with references to glassmorphism, dynamic gradients, and micro-interactions—to make an usually boring activity like administration enjoyable. Thanks to TanStack Query for caching and Recharts for data visualization, every financial KPI is instantly available on the dashboard, zeroing out perceived loading times.",
    "ch4_label": "04 — Development",
    "ch4_title": "Supabase, Serverless & AI.",
    "ch4_p1": "The backend infrastructure relies entirely on PostgreSQL, ensuring maximum security through strict RLS (Row Level Security) policies: each user has exclusive access to their own data. The real added value, however, lies in Edge Functions: a serverless microservice powers the integrated virtual assistant, capable of reading the professional's financial context (payments, projects, deadlines) and providing strategic suggestions in real time. The system is completed by Stripe integration for the secure management of premium subscriptions.",
    "role_val": "Lead Product Designer & Dev",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Financial Intelligence.",
    "ch5_p1": "The result is a complete and scalable end-to-end SaaS product. Combining an impactful user interface with a complex, serverless data architecture, the platform doesn't just organize work; it acts as a true strategic partner for the professional's growth."
}

en_villamasami = {
    "meta_desc": "A comprehensive digital project created for Villa Masami in collaboration with the Carnova agency. Brand identity, copywriting, and a multilingual WordPress site.",
    "hero_label": "BRAND IDENTITY • UI/UX • WEB",
    "hero_desc": "A complete digital project, carried out in collaboration with the Carnova agency. Full care of the facility's identity: from the conception and creation of the logo to copywriting, up to the development of the web infrastructure on WordPress.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "Sicilian hospitality <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "Villa Masami needed a web identity that reflected the elegance and tranquility of its spaces, located in a strategic position near the Valley of the Temples. Working in close synergy with the Carnova agency, the mandate was clear: to create an empathetic and functional digital showcase.",
    "ch1_p2": "A platform capable of transmitting human warmth and, at the same time, highlighting the logistical advantages of the structure, such as independent access via a numeric keypad and automated management.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"More comfort, fewer worries: translating the warmth of real hospitality into an experience of <span class=\"text-primary italic\">fluid navigation</span> free from obstacles.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "Branding, UI and Copywriting.",
    "ch3_p1": "In this project, brand identity, user interface, and editorial soul were born together. I started from the conception and design of the logo, creating a graphic sign that captured the elegance and essence of the villa.",
    "ch3_p2": "From there, I took care of drafting the content with a reassuring tone of voice and designed a UI intended to enhance physical spaces, guiding the user in a clean, intuitive, and conversion-oriented visual path.",
    "ch4_label": "04 — Development",
    "ch4_title": "Multilingual WordPress Ecosystem.",
    "ch4_p1": "On the development side, I implemented and configured the entire site on the WordPress platform, taking care of the insertion and layout of every single view. In addition to ensuring perfect responsiveness on mobile devices, I structured a natively bilingual architecture (Italian and English).",
    "ch4_p2": "This allowed the structure to immediately position itself on the international tourism market, offering a consistent user experience in both languages.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "The taste of hospitality.",
    "ch5_p1": "The final result is a website that breathes the same air of quiet as the physical structure. An end-to-end project that demonstrates the ability to orchestrate every nuance of online presence: from interface design to the meticulous care of the written word, returning a market-ready product to the partner agency and the final client."
}

it_data["storagehub"] = it_storagehub
it_data["freelens"] = it_freelens
it_data["villamasami"] = it_villamasami

en_data["storagehub"] = en_storagehub
en_data["freelens"] = en_freelens
en_data["villamasami"] = en_villamasami

with open(it_file, "w") as f:
    json.dump(it_data, f, indent=2, ensure_ascii=False)

with open(en_file, "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

