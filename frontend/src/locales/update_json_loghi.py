import json

it_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json"
en_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json"

with open(it_file, "r") as f:
    it_data = json.load(f)

with open(en_file, "r") as f:
    en_data = json.load(f)

it_loghi = {
    "meta_desc": "Galleria di marchi, loghi ed elementi di identità visiva progettati per trasmettere storie ed eccellenze territoriali con precisione geometrica ed estetica d'avanguardia.",
    "hero_label": "BRAND GUIDELINES • LOGO DESIGN • VISUAL IDENTITY",
    "hero_desc": "Una selezione curata di marchi ed elementi di identità visiva. Non una serie di semplici segni grafici, ma veri e propri ecosistemi visivi progettati per dare forma, coerenza e valore unico a storie d'eccellenza.",
    "brands": {
        "villamasami": {
            "role": "Brand & Logo Design • UI/UX Design • Web",
            "description": "L'identità di Villa Masami nasce dalla sintesi tra l'eleganza classica del barocco siciliano e una sensibilità minimale contemporanea. Dal design del logo, basato su linee armoniche e proporzioni perfette, fino alle linee guida di stile, ai materiali fisici e alla presenza digitale multilingua."
        },
        "sicef": {
            "role": "Brand Identity • Corporate & Logo Design",
            "description": "Il logo Sicef è caratterizzato da un design pulito che lo rende facilmente riconoscibile.  La scelta di \nutilizzare il carattere Lato conferisce al logo \nun’immagine forte e decisa. \nIn particolare, la “s” con il taglio diagonale \npermette a quest’ultima di poter essere utilizzata \ncome icona rappresentativa dell’azienda, grazie \nalla sua forma semplice. \n\nLa presenza della dicitura “ingegneria e \narchitettura” sottolinea l’attività dell’azienda, \nmentre il colore predominante, il nero, trasmette \nun senso di affidabilità e professionalità."
        },
        "mapicreazioni": {
            "role": "Visual Identity • Branding & Design",
            "description": "Il logo presenta un design moderno, con un tratto sottile ed elegante. Il font utilizzato, Sacramento, conferisce un aspetto minimalista ed essenziale. \n\nLa presenza del pittogramma, l’ago e il filo, rappresentano il valore dell’azienda stessa nel creare i propri prodotti totalmente a mano. Inoltre,  il pittogramma diventa parte integrante del logo creando così un senso di armonia e continuità. "
        }
    },
    "portfolio_site": "Sito Portfolio",
    "visit_site": "Visita Sito"
}

en_loghi = {
    "meta_desc": "Gallery of brands, logos and visual identity elements designed to convey stories and territorial excellence with geometric precision and avant-garde aesthetics.",
    "hero_label": "BRAND GUIDELINES • LOGO DESIGN • VISUAL IDENTITY",
    "hero_desc": "A curated selection of brands and visual identity elements. Not a series of simple graphic signs, but real visual ecosystems designed to give shape, consistency and unique value to stories of excellence.",
    "brands": {
        "villamasami": {
            "role": "Brand & Logo Design • UI/UX Design • Web",
            "description": "The identity of Villa Masami is born from the synthesis between the classic elegance of Sicilian baroque and a contemporary minimal sensitivity. From the logo design, based on harmonic lines and perfect proportions, to the style guidelines, physical materials and multilingual digital presence."
        },
        "sicef": {
            "role": "Brand Identity • Corporate & Logo Design",
            "description": "The Sicef logo is characterized by a clean design that makes it easily recognizable. The choice to\nuse the Lato font gives the logo\na strong and decisive image.\nIn particular, the \"s\" with the diagonal cut\nallows the latter to be used\nas a representative icon of the company, thanks\nto its simple shape.\n\nThe presence of the wording \"engineering and\narchitecture\" underlines the company's activity,\nwhile the predominant color, black, conveys\na sense of reliability and professionalism."
        },
        "mapicreazioni": {
            "role": "Visual Identity • Branding & Design",
            "description": "The logo features a modern design, with a thin and elegant stroke. The font used, Sacramento, gives a minimalist and essential appearance.\n\nThe presence of the pictogram, the needle and the thread, represent the value of the company itself in creating its products entirely by hand. Furthermore, the pictogram becomes an integral part of the logo, thus creating a sense of harmony and continuity."
        }
    },
    "portfolio_site": "Portfolio Site",
    "visit_site": "Visit Site"
}

it_data["loghi"] = it_loghi
en_data["loghi"] = en_loghi

with open(it_file, "w") as f:
    json.dump(it_data, f, indent=2, ensure_ascii=False)

with open(en_file, "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

