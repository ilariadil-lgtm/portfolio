import json

it_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json"
en_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json"

with open(it_file, "r") as f:
    it_data = json.load(f)

with open(en_file, "r") as f:
    en_data = json.load(f)

# PATTI
it_pattiforniture = {
    "meta_desc": "Restyling digitale di Patti Forniture, storica azienda leader nel Sud Italia per le forniture industriali, termoidraulica ed edilizia. Realizzato con WordPress.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT",
    "hero_desc": "Un progetto web corporate realizzato in collaborazione con l'agenzia Carnova. Il restyling digitale di una storica azienda leader nel Sud Italia per le forniture industriali, termoidraulica ed edilizia. Cura dell'interfaccia utente, stesura dei testi strategici e sviluppo completo su WordPress.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Digitalizzare 30 anni di <span class=\"italic text-primary\">esperienza.</span>",
    "ch1_p1": "Da oltre tre decenni, F.lli Patti è un punto di riferimento per rivenditori, installatori e privati. L'azienda aveva bisogno di una vetrina digitale che mettesse in ordine la sua vasta offerta commerciale — termoidraulica, edilizia, ferramenta e climatizzazione — senza perdere il senso di affidabilità e competenza che la contraddistingue.",
    "ch1_p2": "Lavorando in sinergia con l'agenzia Carnova, la sfida è stata trasformare un'offerta aziendale complessa in un'esperienza di navigazione chiara, autorevole e accessibile.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Trasferire la solidità e l'assortimento del punto vendita fisico in un'infrastruttura digitale <span class=\"text-primary italic\">orientata alla chiarezza</span> e alla conversione.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "UI/UX e Architettura dell'Informazione.",
    "ch3_p1": "In questo progetto, la parola d'ordine è stata \"chiarezza\". Lavorando con un'identità visiva preesistente, mi sono concentrata interamente sull'architettura dell'informazione e sull'interfaccia utente (UI).",
    "ch3_p2": "Ho progettato un layout capace di far respirare i diversi macro-settori dell'azienda, organizzando servizi, attrezzature e marchi trattati in sezioni logiche. Il copywriting è stato studiato per adottare un tono di voce professionale, rassicurante e orientato al servizio, parlando efficacemente sia al target B2B che a quello consumer.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Ecosistema WordPress Corporate.",
    "ch4_p1": "L'infrastruttura è stata sviluppata interamente su piattaforma WordPress, ottimizzando la gestione dei contenuti per permettere all'azienda di esporre la propria offerta in modo strutturato.",
    "ch4_p2": "Oltre a curare l'impaginazione di ogni singola vista e la perfetta responsività mobile, ho focalizzato l'attenzione sui percorsi di conversione: chiamate rapide, pulsanti WhatsApp e moduli per la richiesta di preventivi sono posizionati strategicamente per trasformare il traffico in contatti commerciali reali.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Solidità Commerciale.",
    "ch5_p1": "Il risultato finale è una piattaforma web che rispecchia esattamente la solidità e la grandezza dell'azienda. Un progetto che dimostra la capacità di prendere in carico la complessità di un business strutturato (con decine di categorie merceologiche e target differenti), organizzandone i contenuti per consegnare all'agenzia partner e al cliente uno strumento commerciale efficiente, veloce e moderno."
}

# SICILCOSMETIC
it_sicilcosmetic = {
    "meta_desc": "Un e-commerce PrestaShop end-to-end per SicilCosmetic. Gestione catalogo, UI/UX design, copywriting e configurazione di vendita completa.",
    "hero_label": "E-COMMERCE • UI/UX • WEB DESIGN",
    "hero_desc": "Un progetto e-commerce end-to-end realizzato su piattaforma PrestaShop per l'agenzia Carnova. Cura integrale dell'ecosistema digitale: dal design dell'interfaccia utente alla stesura dei contenuti, fino alla configurazione tecnica e gestione dell'intero catalogo.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "La cosmetica professionale <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "SicilCosmetic si rivolge sia ai professionisti del settore beauty (barbieri e parrucchieri) sia al mercato consumer, offrendo un vastissimo assortimento di prodotti e attrezzature tecniche. La sfida principale del progetto era gestire la mole e la frammentazione di questo inventario: serviva una piattaforma capace di categorizzare centinaia di referenze in modo logico, mantenendo un'estetica pulita e rassicurante, capace di ispirare fiducia al momento dell'acquisto.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Organizzare la bellezza: trasformare un catalogo complesso in un'esperienza d'acquisto fluida, <span class=\"text-primary italic\">intuitiva e orientata</span> alla conversione.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "UI/UX e Architettura del Catalogo.",
    "ch3_p1": "Ho curato interamente l'assetto grafico e l'architettura dell'informazione, progettando un sistema di navigazione diviso per macro-target (Uomo, Donna) e per esigenze specifiche (Styling, Cura del capello, Barba, Attrezzature). Il design è stato pensato per far risaltare i prodotti, utilizzando ampi spazi bianchi e una struttura a griglia rigorosa.",
    "ch3_p2": "A livello contenutistico, ho organizzato e impaginato le informazioni affinché rispondessero sia alle logiche di posizionamento SEO sia alla necessità di chiarezza dell'acquirente finale.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Configurazione Tecnica PrestaShop.",
    "ch4_p1": "L'infrastruttura di vendita poggia interamente su PrestaShop. Oltre all'aspetto visivo, mi sono occupata in prima persona di tutta la configurazione tecnica \"sotto il cofano\": dall'impostazione dei metodi di pagamento e delle regole di spedizione, fino all'ottimizzazione del processo di checkout.",
    "ch4_p2": "Ogni pagina è stata strutturata per garantire velocità di caricamento e perfetta responsività mobile, abbattendo gli ostacoli tecnologici tra l'utente e il carrello.",
    "role_val": "PrestaShop & UI/UX Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Estetica e Conversione.",
    "ch5_p1": "Il risultato è un negozio online che unisce l'eleganza del mondo beauty all'efficienza di una vera macchina di vendita. Un progetto che dimostra la capacità di orchestrare in totale autonomia la creazione di un e-commerce complesso, curando con la stessa precisione metodica sia l'estetica del front-end visivo, sia il motore tecnico necessario a generare fatturato."
}

# NEWPOP
it_newpop = {
    "meta_desc": "L'e-commerce dell'arredamento e del design d'eccellenza. Progetto e-commerce PrestaShop realizzato in collaborazione con l'agenzia Carnova.",
    "hero_label": "E-COMMERCE • UI/UX DESIGN",
    "hero_desc": "L'e-commerce dell'arredamento e del design d'eccellenza. Progetto realizzato in collaborazione con l'agenzia Carnova, curando integralmente l'assetto grafico, l'interfaccia utente (UI/UX) e parte della configurazione tecnica dell'infrastruttura PrestaShop.",
    "ch1_label": "01 — Il Contesto",
    "ch1_title1": "Progettare la <span class=\"italic text-primary\">casa iconica.</span>",
    "ch1_p1": "Newpop è una vetrina d'eccellenza dedicata al design d'interni, all'illuminazione e all'home decor, che ospita i pezzi iconici dei migliori designer e brand mondiali (da Artemide a Smeg, fino a Fatboy e Le Creuset). La necessità era quella di creare una piattaforma che non si limitasse a vendere mobili, ma che riuscisse a comunicare il valore intrinseco, lo stile e la storia di ogni singolo oggetto di design. Era indispensabile un'interfaccia all'altezza dei brand ospitati: elegante, minimale e profondamente immersiva.",
    "ch2_label": "02 — L'Obiettivo",
    "ch2_title1": "\"Mettersi al servizio del design d'autore: un'interfaccia invisibile che lascia la scena alla <span class=\"text-primary italic\">bellezza dei prodotti</span>, guidando l'utente verso una conversione naturale.\"",
    "ch3_label": "03 — Il Processo",
    "ch3_title": "UI/UX e Assetto Grafico.",
    "ch3_p1": "Ho curato l'intera veste grafica partendo dall'assunto che il design del sito non dovesse mai sovrastare i prodotti. Ho organizzato l'enorme catalogo in categorie macro-tematiche pulite (Arredamento, Tavola & Cucina, Illuminazione, Outdoor), permettendo una navigazione fluida.",
    "ch3_p2": "L'uso strategico degli spazi bianchi, abbinato a una tipografia elegante, ha creato un'esposizione \"da galleria d'arte\", dove i colori decisi dei prodotti e le forme dei pezzi di design diventano i veri protagonisti della user experience.",
    "ch4_label": "04 — Sviluppo",
    "ch4_title": "Motore PrestaShop ed Esperienza Utente.",
    "ch4_p1": "A supporto della progettazione visiva, ho affiancato il team di sviluppo nella configurazione tecnica su base PrestaShop. Il mio intervento si è concentrato sull'ottimizzazione dell'esperienza utente a livello strutturale: dall'implementazione dei filtri di ricerca per i designer, fino alla cura del mega-menu di navigazione e alla corretta formattazione dei caroselli prodotto.",
    "ch4_p2": "L'obiettivo tecnico era garantire che la velocità di caricamento e la stabilità dell'e-commerce fossero impeccabili, anche in presenza di migliaia di referenze.",
    "role_val": "UI/UX & PrestaShop Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Il lusso della semplicità.",
    "ch5_p1": "Il risultato è una boutique digitale di respiro internazionale, in cui l'estetica raffinata incontra le logiche dell'e-commerce moderno. Un progetto che dimostra la capacità di gestire l'interfaccia grafica per il settore del lusso e del design d'interni, creando ecosistemi visivi dove l'utente non acquista semplicemente un oggetto, ma una vera e propria ispirazione."
}


en_pattiforniture = {
    "meta_desc": "Digital restyling of Patti Forniture, a historic leading company in Southern Italy for industrial supplies, thermo-hydraulics, and building materials. Built with WordPress.",
    "hero_label": "UI/UX DESIGN • WEB & CONTENT",
    "hero_desc": "A corporate web project carried out in collaboration with the Carnova agency. The digital restyling of a historic leading company in Southern Italy for industrial supplies, thermo-hydraulics, and construction. Care of the user interface, drafting of strategic texts, and complete development on WordPress.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "Digitizing 30 years of <span class=\"italic text-primary\">experience.</span>",
    "ch1_p1": "For over three decades, F.lli Patti has been a point of reference for retailers, installers, and private individuals. The company needed a digital showcase that would organize its vast commercial offer—thermo-hydraulics, construction, hardware, and air conditioning—without losing the sense of reliability and competence that distinguishes it.",
    "ch1_p2": "Working in synergy with the Carnova agency, the challenge was to transform a complex corporate offer into a clear, authoritative, and accessible browsing experience.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Transfer the solidity and assortment of the physical store into a digital infrastructure <span class=\"text-primary italic\">oriented towards clarity</span> and conversion.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "UI/UX and Information Architecture.",
    "ch3_p1": "In this project, the watchword was \"clarity\". Working with a pre-existing visual identity, I focused entirely on information architecture and user interface (UI).",
    "ch3_p2": "I designed a layout capable of giving breathing room to the company's various macro-sectors, organizing services, equipment, and brands in logical sections. The copywriting was designed to adopt a professional, reassuring, and service-oriented tone of voice, speaking effectively to both the B2B target and the consumer.",
    "ch4_label": "04 — Development",
    "ch4_title": "Corporate WordPress Ecosystem.",
    "ch4_p1": "The infrastructure was developed entirely on the WordPress platform, optimizing content management to allow the company to display its offer in a structured way.",
    "ch4_p2": "In addition to taking care of the layout of each individual view and perfect mobile responsiveness, I focused attention on conversion paths: quick calls, WhatsApp buttons, and quote request forms are strategically positioned to transform traffic into real commercial contacts.",
    "role_val": "UI/UX & Web Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Commercial Solidity.",
    "ch5_p1": "The final result is a web platform that exactly reflects the solidity and size of the company. A project that demonstrates the ability to take charge of the complexity of a structured business (with dozens of product categories and different targets), organizing its contents to deliver an efficient, fast, and modern commercial tool to the partner agency and the client."
}

en_sicilcosmetic = {
    "meta_desc": "An end-to-end PrestaShop e-commerce for SicilCosmetic. Catalog management, UI/UX design, copywriting, and complete sales configuration.",
    "hero_label": "E-COMMERCE • UI/UX • WEB DESIGN",
    "hero_desc": "An end-to-end e-commerce project built on the PrestaShop platform for the Carnova agency. Integral care of the digital ecosystem: from user interface design to content drafting, up to technical configuration and management of the entire catalog.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "Professional cosmetics <span class=\"italic text-primary\">online.</span>",
    "ch1_p1": "SicilCosmetic caters to both beauty industry professionals (barbers and hairdressers) and the consumer market, offering a vast assortment of products and technical equipment. The main challenge of the project was to manage the volume and fragmentation of this inventory: a platform was needed capable of categorizing hundreds of references in a logical way, maintaining a clean and reassuring aesthetic, capable of inspiring trust at the time of purchase.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Organize beauty: transform a complex catalog into a fluid, <span class=\"text-primary italic\">intuitive and conversion-oriented</span> shopping experience.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "UI/UX and Catalog Architecture.",
    "ch3_p1": "I took full care of the graphic layout and information architecture, designing a navigation system divided by macro-targets (Men, Women) and specific needs (Styling, Hair Care, Beard, Equipment). The design was designed to highlight the products, using large white spaces and a rigorous grid structure.",
    "ch3_p2": "On a content level, I organized and laid out the information so that it responded to both SEO positioning logic and the need for clarity of the final buyer.",
    "ch4_label": "04 — Development",
    "ch4_title": "PrestaShop Technical Configuration.",
    "ch4_p1": "The sales infrastructure relies entirely on PrestaShop. In addition to the visual aspect, I personally took care of all the technical configuration \"under the hood\": from setting up payment methods and shipping rules, up to optimizing the checkout process.",
    "ch4_p2": "Every page was structured to guarantee loading speed and perfect mobile responsiveness, breaking down technological obstacles between the user and the cart.",
    "role_val": "PrestaShop & UI/UX Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "Aesthetics and Conversion.",
    "ch5_p1": "The result is an online store that combines the elegance of the beauty world with the efficiency of a true sales machine. A project that demonstrates the ability to orchestrate in total autonomy the creation of a complex e-commerce, taking care with the same methodical precision of both the aesthetics of the visual front-end and the technical engine necessary to generate turnover."
}

en_newpop = {
    "meta_desc": "The e-commerce of excellence in furniture and design. PrestaShop e-commerce project carried out in collaboration with the Carnova agency.",
    "hero_label": "E-COMMERCE • UI/UX DESIGN",
    "hero_desc": "The e-commerce of excellence in furniture and design. Project carried out in collaboration with the Carnova agency, fully taking care of the graphic layout, the user interface (UI/UX), and part of the technical configuration of the PrestaShop infrastructure.",
    "ch1_label": "01 — The Context",
    "ch1_title1": "Designing the <span class=\"italic text-primary\">iconic home.</span>",
    "ch1_p1": "Newpop is a showcase of excellence dedicated to interior design, lighting, and home decor, hosting iconic pieces from the best designers and global brands (from Artemide to Smeg, up to Fatboy and Le Creuset). The need was to create a platform that would not just sell furniture, but that would be able to communicate the intrinsic value, style, and history of every single design object. An interface worthy of the hosted brands was essential: elegant, minimal, and deeply immersive.",
    "ch2_label": "02 — The Objective",
    "ch2_title1": "\"Put yourself at the service of signature design: an invisible interface that leaves the stage to the <span class=\"text-primary italic\">beauty of the products</span>, guiding the user towards a natural conversion.\"",
    "ch3_label": "03 — The Process",
    "ch3_title": "UI/UX and Graphic Layout.",
    "ch3_p1": "I took care of the entire graphic design starting from the assumption that the site design should never overpower the products. I organized the huge catalog into clean macro-thematic categories (Furniture, Table & Kitchen, Lighting, Outdoor), allowing fluid navigation.",
    "ch3_p2": "The strategic use of white spaces, combined with elegant typography, created an \"art gallery\" exhibition, where the bold colors of the products and the shapes of the design pieces become the true protagonists of the user experience.",
    "ch4_label": "04 — Development",
    "ch4_title": "PrestaShop Engine and User Experience.",
    "ch4_p1": "In support of visual design, I worked alongside the development team in the technical configuration based on PrestaShop. My intervention focused on optimizing the user experience at a structural level: from implementing search filters for designers, up to the care of the navigation mega-menu and the correct formatting of product carousels.",
    "ch4_p2": "The technical goal was to ensure that the loading speed and stability of the e-commerce were impeccable, even in the presence of thousands of references.",
    "role_val": "UI/UX & PrestaShop Developer",
    "ch5_label": "05 — Visual Showcase",
    "ch5_title": "The luxury of simplicity.",
    "ch5_p1": "The result is a digital boutique with an international scope, where refined aesthetics meets the logic of modern e-commerce. A project that demonstrates the ability to manage the graphic interface for the luxury and interior design sector, creating visual ecosystems where the user does not simply purchase an object, but a real inspiration."
}

it_data["pattiforniture"] = it_pattiforniture
it_data["sicilcosmetic"] = it_sicilcosmetic
it_data["newpop"] = it_newpop

en_data["pattiforniture"] = en_pattiforniture
en_data["sicilcosmetic"] = en_sicilcosmetic
en_data["newpop"] = en_newpop

with open(it_file, "w") as f:
    json.dump(it_data, f, indent=2, ensure_ascii=False)

with open(en_file, "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

