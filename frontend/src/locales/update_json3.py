import json

it_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json"
en_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json"

with open(it_file, "r") as f:
    it_data = json.load(f)

with open(en_file, "r") as f:
    en_data = json.load(f)

it_bagliolauria = {
    "meta_desc": "Un progetto digitale completo per agriturismo e location per eventi di charme in Sicilia. Realizzato per Carnova.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT • HOSPITALITY",
    "hero_desc": "Un progetto digitale realizzato in collaborazione con l'agenzia Carnova, dedicato a un incantevole agriturismo e location per eventi immerso nella campagna siciliana. Cura integrale del web design, dell'esperienza utente (UI/UX) e della stesura dei testi su piattaforma WordPress.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Il fascino del Made in <span class=\"italic text-primary\">Sicily.</span>",
    "ch1_p1": "Immerso tra ulivi e vigneti a pochi chilometri dalla Valle dei Templi, Baglio Lauria è una struttura ricettiva di charme che unisce l'ospitalità rurale all'eleganza di una location per matrimoni ed eventi esclusivi. Lavorando in sinergia con Carnova, l'obiettivo era creare una vetrina digitale che trasmettesse immediatamente questa duplice anima: il calore rilassato di un soggiorno in Sicilia, unito alla professionalità e all'estetica richieste per incorniciare momenti indimenticabili.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Trasmettere il calore del sole siciliano e l'eleganza della pietra antica attraverso un'interfaccia capace di far sognare l'utente <span class=\"text-primary italic\">dal primo click</span>.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "UI/UX e Narrazione Visiva.",
    "ch3_p1": "In questo progetto, il design dell'interfaccia e il copywriting hanno viaggiato di pari passo. Ho progettato una UI pulita ed evocativa, pensata per esaltare le fotografie degli ampi spazi esterni e della scenografica piscina.",
    "ch3_p2": "L'architettura dell'informazione è stata strutturata per guidare l'utente attraverso due percorsi paralleli ma integrati: la prenotazione delle suite per i soggiorni di relax e la scoperta degli spazi dedicati ai grandi eventi. I testi, curati interamente da me, adottano un tono di voce emozionale, accogliente e raffinato.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Layout WordPress e Conversione.",
    "ch4_p1": "L'intero ecosistema visivo è stato declinato su piattaforma WordPress. Mi sono occupata dell'impaginazione di ogni singola vista, assicurandomi che l'esperienza di navigazione fosse immersiva e perfettamente reattiva su qualsiasi dispositivo.",
    "ch4_p2": "Ho curato l'integrazione degli strumenti di contatto e la presentazione chiara dei servizi, costruendo un percorso utente senza frizioni che accompagna il visitatore dalla fase di ispirazione iniziale fino alla richiesta di disponibilità per il proprio soggiorno o evento.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "L'Emozione dell'Accoglienza.",
    "ch5_p1": "Il risultato è un sito web che respira la stessa aria di quiete della campagna in cui è immerso. Un progetto che conferma la capacità di tradurre il prestigio fisico di una location in un ambiente digitale altrettanto elegante, consegnando all'agenzia partner e al cliente finale uno strumento di comunicazione capace di generare vere e proprie emozioni prima ancora di varcare la soglia del Baglio."
}

it_villamima = {
    "meta_desc": "Un progetto digitale raffinato realizzato in collaborazione con l'agenzia Carnova. Cura dell'interfaccia utente, della narrazione visiva e dello sviluppo su WordPress per una location d'eccellenza dedicata a matrimoni e ricevimenti in Sicilia.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT • WEDDING & EVENTS",
    "hero_desc": "Un progetto digitale raffinato realizzato in collaborazione con l'agenzia Carnova. Cura dell'interfaccia utente, della narrazione visiva e dello sviluppo su WordPress per una location d'eccellenza dedicata a matrimoni e ricevimenti in Sicilia.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Eventi sotto <span class=\"italic text-primary\">le stelle.</span>",
    "ch1_p1": "Immersa tra uliveti e vigneti a due passi dalla Valle dei Templi, Villa Mima è molto più di una sala ricevimenti: è un'esperienza sensoriale completa. In collaborazione con Carnova, la sfida era trasmettere online questa forte identità e la cura maniacale per i dettagli.",
    "ch1_p2": "Serviva una piattaforma capace di esaltare non solo la bellezza paesaggistica e architettonica della struttura, ma anche l'alta cucina e il 'food design', elementi decisivi per chi è alla ricerca della location perfetta per un evento esclusivo.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"L'eleganza si nasconde nei dettagli: un'interfaccia progettata per far pregustare l'atmosfera magica di un evento indimenticabile, <span class=\"text-primary italic\">ancor prima del primo assaggio.</span>\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "UI/UX e Food Design.",
    "ch3_p1": "Ho sviluppato un'architettura visiva che mette in primo piano le emozioni e i sensi. Il layout lascia ampio respiro alle fotografie della location e alle creazioni culinarie artistiche dello chef, trattando ogni piatto come un'opera di design.",
    "ch3_p2": "L'uso di tipografie graziate ed eleganti, unito a spazi negativi generosi, crea un'atmosfera di lusso sussurrato, guidando l'utente attraverso i servizi: dai matrimoni da favola agli show cooking, fino all'intrattenimento a bordo piscina.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "WordPress e Narrazione Emozionale.",
    "ch4_p1": "A livello tecnico, l'intero ecosistema è stato ingegnerizzato su piattaforma WordPress, garantendo fluidità e velocità di caricamento nonostante l'alta densità di contenuti fotografici. L'esperienza utente è stata studiata per abbattere ogni attrito nel percorso di conversione.",
    "ch4_p2": "I moduli di contatto e le call to action sono posizionati in modo organico e non invasivo, invitando i futuri sposi o i planner a mettersi in contatto con la struttura in modo semplice, empatico e diretto.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "La magia dei dettagli.",
    "ch5_p1": "Il risultato è un sito web che cattura perfettamente l'essenza dell'ospitalità e dell'alta cucina. Un progetto che dimostra come il giusto equilibrio tra design minimale, immagini d'impatto e un copy accurato possa trasformare una vetrina digitale nel primo, fondamentale passo verso l'organizzazione di un evento perfetto."
}

it_vinigambino = {
    "meta_desc": "L'essenza del terroir vulcanico dell'Etna tradotta in un'esperienza digitale immersiva. Progetto realizzato per Cantina Gambino in collaborazione con l'agenzia Carnova.",
    "hero_label": "UI/UX DESIGN • WEB LAYOUT",
    "hero_desc": "L'essenza del terroir vulcanico tradotta in un'esperienza digitale immersiva. Progetto realizzato in collaborazione con l'agenzia Carnova per una storica cantina alle pendici dell'Etna, curando integralmente l'assetto grafico, l'interfaccia utente (UI/UX) e il layout su piattaforma WordPress.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Un sorso di Etna <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "Situata sul versante nord-orientale dell'Etna, la Cantina Gambino è un'eccellenza che unisce la tradizione vinicola a una location mozzafiato con vista sul Golfo di Taormina. La sfida posta dall'agenzia Carnova era duplice: da un lato, creare uno spazio e-commerce elegante per la vendita dei vini vulcanici; dall'altro, trasmettere il calore dell'ospitalità siciliana, invitando gli utenti di tutto il mondo a prenotare le rinomate esperienze di degustazione in cantina. Serviva una vetrina digitale che fosse al contempo pragmatica ed emozionale.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Tradurre la potenza del vulcano e l'eleganza del vino in un percorso visivo che invita all'assaggio, <span class=\"text-primary italic\">prima ancora di stappare</span> la bottiglia.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "Estetica e Architettura dell'Ospitalità.",
    "ch3_p1": "Ho assunto la direzione totale dell'assetto grafico, disegnando un'interfaccia utente (UI) che lasciasse respirare la bellezza dei vigneti e della roccia vulcanica. L'uso di palette cromatiche calde e terrose, abbinate a una tipografia editoriale, accompagna l'utente in un vero e proprio tour virtuale.",
    "ch3_p2": "Particolare attenzione è stata dedicata all'architettura dell'esperienza (UX) per le prenotazioni delle degustazioni: ho strutturato i flussi visivi in modo che la scoperta dei pacchetti enogastronomici risultasse tanto fluida e naturale quanto il racconto della famiglia Gambino.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Layout e Integrazione WordPress.",
    "ch4_p1": "Tutto il design è stato declinato e ingegnerizzato su piattaforma WordPress. Il mio lavoro si è concentrato sulla costruzione di layout dinamici e performanti, capaci di ospitare fotografie ad alta risoluzione senza compromettere la velocità di caricamento.",
    "ch4_p2": "Ho impaginato con cura ogni sezione — dallo shop delle bottiglie alle pagine di presentazione della tenuta — garantendo un'esperienza visiva impeccabile e reattiva su ogni dispositivo, permettendo all'azienda di comunicare il proprio prestigio su scala globale.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Il sapore dell'altitudine.",
    "ch5_p1": "Il risultato è un sito web che cattura l'anima di un terroir unico al mondo. Un progetto che dimostra la capacità di progettare interfacce in cui the graphic design non è un semplice abbellimento, ma lo strumento principale per generare emozioni, fidelizzare il cliente e guidare con eleganza le conversioni nel settore dell'enoturismo d'alta gamma."
}

en_bagliolauria = {
    "meta_desc": "A complete digital project for a charming agritourism and event location in Sicily. Created for Carnova.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT • HOSPITALITY",
    "hero_desc": "A digital project created in collaboration with the Carnova agency, dedicated to an enchanting farmhouse and event location immersed in the Sicilian countryside. Comprehensive care of web design, user experience (UI/UX), and copywriting on the WordPress platform.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "The charm of Made in <span class=\"italic text-primary\">Sicily.</span>",
    "ch1_p1": "Immersed among olive groves and vineyards a few kilometers from the Valley of the Temples, Baglio Lauria is a charming accommodation facility that combines rural hospitality with the elegance of a location for exclusive weddings and events. Working in synergy with Carnova, the goal was to create a digital showcase that immediately conveyed this dual soul: the relaxed warmth of a stay in Sicily, combined with the professionalism and aesthetics required to frame unforgettable moments.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"To transmit the warmth of the Sicilian sun and the elegance of the ancient stone through an interface capable of making the user dream <span class=\"text-primary italic\">from the first click</span>.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "UI/UX and Visual Storytelling.",
    "ch3_p1": "In this project, interface design and copywriting traveled hand in hand. I designed a clean and evocative UI, designed to enhance the photographs of the large outdoor spaces and the spectacular swimming pool.",
    "ch3_p2": "The information architecture was structured to guide the user through two parallel but integrated paths: the booking of suites for relaxing stays and the discovery of spaces dedicated to major events. The texts, entirely curated by me, adopt an emotional, welcoming, and refined tone of voice.",
    "ch4_label": "04 — Development",
    "ch4_title": "WordPress Layout and Conversion.",
    "ch4_p1": "The entire visual ecosystem was developed on the WordPress platform. I took care of the layout of each individual view, ensuring that the navigation experience was immersive and perfectly responsive on any device.",
    "ch4_p2": "I oversaw the integration of contact tools and the clear presentation of services, building a frictionless user journey that accompanies the visitor from the initial inspiration phase to the request for availability for their stay or event.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "The Emotion of Hospitality.",
    "ch5_p1": "The result is a website that breathes the same air of quiet as the countryside in which it is immersed. A project that confirms the ability to translate the physical prestige of a location into an equally elegant digital environment, delivering to the partner agency and the final customer a communication tool capable of generating real emotions even before crossing the threshold of the Baglio."
}

en_villamima = {
    "meta_desc": "A refined digital project created in collaboration with the Carnova agency. Care of the user interface, visual storytelling, and development on WordPress for an excellent location dedicated to weddings and receptions in Sicily.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT • WEDDING & EVENTS",
    "hero_desc": "A refined digital project created in collaboration with the Carnova agency. Care of the user interface, visual storytelling, and development on WordPress for an excellent location dedicated to weddings and receptions in Sicily.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "Events under <span class=\"italic text-primary\">the stars.</span>",
    "ch1_p1": "Immersed among olive groves and vineyards a stone's throw from the Valley of the Temples, Villa Mima is much more than a reception hall: it is a complete sensory experience. In collaboration with Carnova, the challenge was to transmit this strong identity and manic attention to detail online.",
    "ch1_p2": "A platform was needed capable of enhancing not only the landscape and architectural beauty of the structure, but also the haute cuisine and 'food design', decisive elements for those looking for the perfect location for an exclusive event.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Elegance is hidden in the details: an interface designed to give a foretaste of the magical atmosphere of an unforgettable event, <span class=\"text-primary italic\">even before the first taste.</span>\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "UI/UX and Food Design.",
    "ch3_p1": "I developed a visual architecture that highlights emotions and senses. The layout leaves ample breathing room for the photographs of the location and the artistic culinary creations of the chef, treating each dish as a design work.",
    "ch3_p2": "The use of elegant serif typography, combined with generous negative spaces, creates an atmosphere of whispered luxury, guiding the user through the services: from fairytale weddings to show cooking, up to poolside entertainment.",
    "ch4_label": "04 — Development",
    "ch4_title": "WordPress and Emotional Storytelling.",
    "ch4_p1": "On a technical level, the entire ecosystem was engineered on the WordPress platform, ensuring fluidity and loading speed despite the high density of photographic content. The user experience was designed to break down any friction in the conversion path.",
    "ch4_p2": "Contact forms and calls to action are positioned in an organic and non-invasive way, inviting future spouses or planners to contact the structure in a simple, empathetic, and direct way.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "The magic of details.",
    "ch5_p1": "The result is a website that perfectly captures the essence of hospitality and haute cuisine. A project that demonstrates how the right balance between minimal design, impactful images, and accurate copy can transform a digital showcase into the first, fundamental step towards organizing a perfect event."
}

en_vinigambino = {
    "meta_desc": "The essence of the volcanic terroir of Etna translated into an immersive digital experience. Project created for Cantina Gambino in collaboration with the Carnova agency.",
    "hero_label": "UI/UX DESIGN • WEB LAYOUT",
    "hero_desc": "The essence of the volcanic terroir translated into an immersive digital experience. Project created in collaboration with the Carnova agency for a historic winery on the slopes of Etna, fully taking care of the graphic layout, the user interface (UI/UX), and the layout on the WordPress platform.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "A sip of Etna <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "Located on the north-eastern side of Etna, Cantina Gambino is an excellence that combines winemaking tradition with a breathtaking location overlooking the Gulf of Taormina. The challenge posed by the Carnova agency was twofold: on the one hand, creating an elegant e-commerce space for the sale of volcanic wines; on the other, transmitting the warmth of Sicilian hospitality, inviting users from all over the world to book the renowned tasting experiences in the cellar. A digital showcase was needed that was both pragmatic and emotional.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Translating the power of the volcano and the elegance of wine into a visual journey that invites tasting, <span class=\"text-primary italic\">even before uncorking</span> the bottle.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "Aesthetics and Hospitality Architecture.",
    "ch3_p1": "I took full direction of the graphic design, designing a user interface (UI) that allowed the beauty of the vineyards and the volcanic rock to breathe. The use of warm and earthy color palettes, combined with editorial typography, accompanies the user on a real virtual tour.",
    "ch3_p2": "Particular attention was paid to the architecture of the experience (UX) for booking tastings: I structured the visual flows so that the discovery of food and wine packages was as fluid and natural as the story of the Gambino family.",
    "ch4_label": "04 — Development",
    "ch4_title": "Layout and WordPress Integration.",
    "ch4_p1": "All the design was declined and engineered on the WordPress platform. My work focused on building dynamic and high-performance layouts, capable of hosting high-resolution photographs without compromising loading speed.",
    "ch4_p2": "I carefully laid out every section — from the bottle shop to the estate presentation pages — guaranteeing an impeccable and responsive visual experience on every device, allowing the company to communicate its prestige on a global scale.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "The taste of altitude.",
    "ch5_p1": "The result is a website that captures the soul of a terroir unique in the world. A project that demonstrates the ability to design interfaces in which graphic design is not a simple embellishment, but the main tool to generate emotions, retain customers, and elegantly guide conversions in the high-end wine tourism sector."
}

it_data["bagliolauria"] = it_bagliolauria
it_data["villamima"] = it_villamima
it_data["vinigambino"] = it_vinigambino

en_data["bagliolauria"] = en_bagliolauria
en_data["villamima"] = en_villamima
en_data["vinigambino"] = en_vinigambino

with open(it_file, "w") as f:
    json.dump(it_data, f, indent=2, ensure_ascii=False)

with open(en_file, "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

