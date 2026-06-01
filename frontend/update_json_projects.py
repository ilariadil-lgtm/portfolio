import json

it_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json"
en_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json"

with open(it_file, "r") as f:
    it_data = json.load(f)

with open(en_file, "r") as f:
    en_data = json.load(f)

it_projects_data = {
    "storagehub": {
        "title": "StorageHub",
        "description": "Una web app intelligente di storage e inventory management che semplifica e automatizza la gestione dell'inventario su scala enterprise.",
        "technologies": "React.js, Node.js (Express), AWS S3 / CloudFront, PostgreSQL, REST API, UX Strategy"
    },
    "freelens": {
        "title": "Freelens",
        "description": "Spazio digitale di project management per gestire progetti e task, riprendendo il controllo del proprio tempo con un'interfaccia focalizzata.",
        "technologies": "Figma, React, Framer Motion, Product Strategy"
    },
    "villamasami": {
        "title": "Villa Masami",
        "description": "Un progetto digitale completo realizzato in collaborazione con l'agenzia Carnova. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress.",
        "technologies": "Brand & Logo Design, UI/UX Design, Copywriting, WordPress (Bilingual)"
    },
    "pattiforniture": {
        "title": "Patti Forniture",
        "description": "Un restyling web corporate realizzato in collaborazione con l'agenzia Carnova per una storica azienda leader nel Sud Italia di forniture industriali.",
        "technologies": "UI/UX Design, Information Architecture, Copywriting, WordPress Corporate"
    },
    "sicilcosmetic": {
        "title": "SicilCosmetic",
        "description": "Un progetto e-commerce end-to-end realizzato su piattaforma PrestaShop per l'agenzia Carnova. Gestione ed organizzazione dell'intero catalogo beauty.",
        "technologies": "PrestaShop Configuration, E-commerce UI/UX, Catalog Management, Copywriting & Layout"
    },
    "newpop": {
        "title": "Newpop",
        "description": "Boutique digitale per il design e l'arredamento d'interni, realizzata per l'agenzia Carnova. UI/UX curata e configurazione PrestaShop.",
        "technologies": "PrestaShop Integration, UI/UX Design, Visual Merchandising, Information Architecture"
    },
    "vinigambino": {
        "title": "Vini Gambino",
        "description": "L'essenza del terroir vulcanico tradotta in un'esperienza digitale immersiva. Progetto realizzato in collaborazione con l'agenzia Carnova.",
        "technologies": "UI/UX & Graphic Layout, WordPress Environment, Hospitality & E-commerce, Visual Storytelling"
    },
    "bagliolauria": {
        "title": "Baglio Lauria",
        "description": "Un progetto digitale realizzato in collaborazione con l'agenzia Carnova, dedicato a un incantevole agriturismo e location per eventi in Sicilia.",
        "technologies": "UI/UX Design, Copywriting & Content, WordPress Layout, Hospitality Design"
    },
    "villamima": {
        "title": "Villa Mima",
        "description": "Un progetto digitale raffinato realizzato in collaborazione con l'agenzia Carnova. Cura dell'interfaccia utente, della narrazione visiva e dello sviluppo su WordPress per una location d'eccellenza dedicata a matrimoni e ricevimenti in Sicilia.",
        "technologies": "UI/UX Design, WordPress Environment, Copywriting & Storytelling, Wedding & Event Industry"
    },
    "loghi": {
        "title": "Branding & Loghi",
        "description": "Una selezione curata di identità visive, marchi e loghi d'autore disegnati per dare forma, coerenza e valore a storie ed aziende leader.",
        "technologies": "Logo Design, Brand Identity, Visual Guidelines, Art Direction"
    }
}

en_projects_data = {
    "storagehub": {
        "title": "StorageHub",
        "description": "A smart storage and inventory management web app that simplifies and automates inventory control at an enterprise scale.",
        "technologies": "React.js, Node.js (Express), AWS S3 / CloudFront, PostgreSQL, REST API, UX Strategy"
    },
    "freelens": {
        "title": "Freelens",
        "description": "A digital project management space to manage projects and tasks, regaining control of your time with a focused interface.",
        "technologies": "Figma, React, Framer Motion, Product Strategy"
    },
    "villamasami": {
        "title": "Villa Masami",
        "description": "A comprehensive digital project created in collaboration with the Carnova agency. Full care of the structure's identity, from the logo to WordPress development.",
        "technologies": "Brand & Logo Design, UI/UX Design, Copywriting, WordPress (Bilingual)"
    },
    "pattiforniture": {
        "title": "Patti Forniture",
        "description": "A corporate web restyling created in collaboration with the Carnova agency for a historic leading company in southern Italy for industrial supplies.",
        "technologies": "UI/UX Design, Information Architecture, Copywriting, WordPress Corporate"
    },
    "sicilcosmetic": {
        "title": "SicilCosmetic",
        "description": "An end-to-end e-commerce project built on the PrestaShop platform for the Carnova agency. Management and organization of the entire beauty catalog.",
        "technologies": "PrestaShop Configuration, E-commerce UI/UX, Catalog Management, Copywriting & Layout"
    },
    "newpop": {
        "title": "Newpop",
        "description": "Digital boutique for interior design and furnishings, created for the Carnova agency. Curated UI/UX and PrestaShop configuration.",
        "technologies": "PrestaShop Integration, UI/UX Design, Visual Merchandising, Information Architecture"
    },
    "vinigambino": {
        "title": "Vini Gambino",
        "description": "The essence of the volcanic terroir translated into an immersive digital experience. Project created in collaboration with the Carnova agency.",
        "technologies": "UI/UX & Graphic Layout, WordPress Environment, Hospitality & E-commerce, Visual Storytelling"
    },
    "bagliolauria": {
        "title": "Baglio Lauria",
        "description": "A digital project created in collaboration with the Carnova agency, dedicated to an enchanting farmhouse and event venue in Sicily.",
        "technologies": "UI/UX Design, Copywriting & Content, WordPress Layout, Hospitality Design"
    },
    "villamima": {
        "title": "Villa Mima",
        "description": "A refined digital project created in collaboration with the Carnova agency. Care for user interface, visual storytelling, and WordPress development for a venue of excellence dedicated to weddings and receptions in Sicily.",
        "technologies": "UI/UX Design, WordPress Environment, Copywriting & Storytelling, Wedding & Event Industry"
    },
    "loghi": {
        "title": "Branding & Logos",
        "description": "A curated selection of visual identities, brands, and signature logos designed to shape, unify, and add value to leading companies' stories.",
        "technologies": "Logo Design, Brand Identity, Visual Guidelines, Art Direction"
    }
}

it_index_fallback = {
    "1": {
        "title": "Villa Masami",
        "type": "Brand Identity • UI/UX Design • Web",
        "description": "Un progetto digitale completo. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress."
    },
    "2": {
        "title": "Freelens",
        "type": "SaaS Management • UI/UX Design",
        "description": "Spazio digitale di project management per gestire progetti e task, riprendendo il controllo del proprio tempo con un'interfaccia focalizzata."
    },
    "3": {
        "title": "StorageHub",
        "type": "Sviluppo Web Full-Stack • Cloud Management",
        "description": "Una web app intelligente di storage e inventory management su scala enterprise."
    }
}

en_index_fallback = {
    "1": {
        "title": "Villa Masami",
        "type": "Brand Identity • UI/UX Design • Web",
        "description": "A complete digital project. Integral care of the structure's identity, from the logo to WordPress development."
    },
    "2": {
        "title": "Freelens",
        "type": "SaaS Management • UI/UX Design",
        "description": "A digital project management space to manage projects and tasks, taking back control of your time with a focused interface."
    },
    "3": {
        "title": "StorageHub",
        "type": "Full-Stack Web Dev • Cloud Management",
        "description": "A smart enterprise-scale storage and inventory management web app."
    }
}

it_data["projects_data"] = it_projects_data
it_data["index_fallback"] = it_index_fallback

en_data["projects_data"] = en_projects_data
en_data["index_fallback"] = en_index_fallback

with open(it_file, "w") as f:
    json.dump(it_data, f, indent=2, ensure_ascii=False)

with open(en_file, "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)
