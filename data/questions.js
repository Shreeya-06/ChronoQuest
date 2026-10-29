/**
 * ChronoQuest - Question Bank for "Guess the Civilization" Mode
 * Structured with multi-tier progressive clues (Easy, Medium, Hard, Legendary).
 * Image citations, options, and rich historical explanations.
 */

export const questions = [
  // --- EASY DIFFICULTY ---
  {
    id: "q-indus-easy",
    difficulty: "Easy",
    subject: "The Planned Metropolis of Mohenjo-daro",
    question: "Which ancient civilization is associated with this planned archaeological site?",
    civilizationId: "indus-valley",
    civilizationName: "Indus Valley Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohenjo-daro.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Excavated brick ruins of the Great Bath at Mohenjo-daro"
    },
    clues: [
      "My cities were laid out using a deliberate orthogonal grid pattern with standardized baked bricks.",
      "My domestic houses featured private bathing rooms connected to covered municipal street sewers.",
      "My artisans carved thousands of steatite seals depicting humped bulls, elephants, and mythical unicorns.",
      "Major excavated sites include Harappa, Mohenjo-daro, and the tidal dockyard at Lothal."
    ],
    options: ["Indus Valley Civilization", "Ancient Egypt", "Ancient Rome", "Babylonian Civilization"],
    explanation: "The Indus Valley Civilization (c. 2500–1900 BCE) was the earliest known urban civilization in South Asia. Known for unparalleled municipal sanitation, standardization of brick ratios (1:2:4), and absence of prominent militaristic monuments."
  },
  {
    id: "q-egypt-easy",
    difficulty: "Easy",
    subject: "The Pyramids of the Giza Plateau",
    question: "Which legendary kingdom built these monumental limestone wonders?",
    civilizationId: "ancient-egypt",
    civilizationName: "Ancient Egypt",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:All_Gizah_Pyramids.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The Great Pyramids of Giza rising on the West bank of the Nile"
    },
    clues: [
      "My people flourished along the fertile floodplains of the world's longest river in North Africa.",
      "Our rulers were revered as the living incarnations of the god Horus and buried in monumental limestone tombs.",
      "Our scribes recorded divine decrees and administrative accounts using pictorial hieroglyphic scripts on papyrus.",
      "Our architectural wonders include the colossal Great Sphinx, the temples of Luxor, and the Giza Pyramids."
    ],
    options: ["Ancient Egypt", "Sumerian Civilization", "Maya Civilization", "Persian Empire"],
    explanation: "Ancient Egypt flourished for over three millennia along the Nile. The Great Pyramid of Khufu at Giza was completed around 2560 BCE and stood as the world's tallest human-made structure for more than 38 centuries."
  },
  {
    id: "q-rome-easy",
    difficulty: "Easy",
    subject: "The Flavian Amphitheatre (Colosseum)",
    question: "Which Mediterranean power engineered this monumental amphitheatre?",
    civilizationId: "ancient-rome",
    civilizationName: "Ancient Rome",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo_2020.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The exterior arcade of the Colosseum in Rome"
    },
    clues: [
      "My engineers mastered hydraulic volcanic concrete (pozzolana) and structural semicircular arches.",
      "Our legions expanded from a modest city-state on the Tiber river to encompass the entire Mediterranean basin.",
      "Our legal philosophy and the Latin language formed the cornerstone of European jurisprudence and modern Romance languages.",
      "Spectators packed our 50,000-seat Colosseum to watch gladiators, wild beast hunts, and simulated naval battles."
    ],
    options: ["Ancient Rome", "Ancient Greece", "Persian Empire", "Aztec Civilization"],
    explanation: "Ancient Rome transitioned from a Republic to an Empire under Augustus in 27 BCE. Roman architectural ingenuity was powered by concrete and arches, enabling structures like the Colosseum, aqueducts, and the Pantheon dome."
  },
  {
    id: "q-china-easy",
    difficulty: "Easy",
    subject: "The Terracotta Army of the First Emperor",
    question: "Which East Asian civilization created this silent underground army?",
    civilizationId: "ancient-china",
    civilizationName: "Ancient China",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta_Army%2C_View_of_Pit_1.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Terracotta soldiers arranged in tactical battle formation, Pit 1, Xi'an"
    },
    clues: [
      "Our earliest written records were divinatory inscriptions carved onto ox scapulae and turtle plastrons.",
      "Our First Emperor brought an end to the Warring States period, standardizing weights, measures, and the written script.",
      "We built vast chains of border fortifications of rammed earth and stone that became known as the Great Wall.",
      "Thousands of individualized, life-sized terracotta soldiers and bronze chariots were buried to protect our emperor in the afterlife."
    ],
    options: ["Ancient China", "Indus Valley Civilization", "Gupta Empire", "Inca Civilization"],
    explanation: "Ancient China's Qin Dynasty unified the realm in 221 BCE under Qin Shi Huang. Discovered in 1974 by local farmers digging a well, the Terracotta Army comprises over 8,000 individualized ceramic warriors guarding the imperial mausoleum."
  },
  {
    id: "q-greece-easy",
    difficulty: "Easy",
    subject: "The Parthenon on the Athenian Acropolis",
    question: "Which civilization built this marble temple dedicated to the goddess of wisdom?",
    civilizationId: "ancient-greece",
    civilizationName: "Ancient Greece",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg",
      license: "Creative Commons Attribution-ShareAlike 2.0",
      caption: "Doric columns of the Parthenon overlooking Athens"
    },
    clues: [
      "My people competed every four years in athletic festivals held at the sanctuary of Zeus in Olympia.",
      "Our thinkers, including Socrates, Plato, and Aristotle, laid the foundations of Western philosophy and scientific inquiry.",
      "The citizens of my premier maritime city-state gathered in the assembly (Ekklesia) to exercise direct democracy.",
      "Our classical architects constructed the Doric marble Parthenon atop the Acropolis in Athens."
    ],
    options: ["Ancient Greece", "Ancient Rome", "Persian Empire", "Chola Dynasty"],
    explanation: "Classical Greece reached its cultural zenith in 5th-century BCE Athens under Pericles. The Parthenon, completed in 438 BCE, was adorned with master sculptures by Phidias and remains a quintessential symbol of classical ideals."
  },
  {
    id: "q-inca-easy",
    difficulty: "Easy",
    subject: "The Cloud Citadel of Machu Picchu",
    question: "Which Andean empire carved this high-altitude stone sanctuary?",
    civilizationId: "inca-civilization",
    civilizationName: "Inca Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Machu Picchu perched high between Huayna Picchu and Machu Picchu peak"
    },
    clues: [
      "Our empire stretched along 4,000 kilometers of the mountainous Andean spine in western South America.",
      "Our stonemasons shaped polygonal granite blocks without mortar with such precision that not even a knife fits between them.",
      "Instead of writing, we recorded taxes, provisions, and census numbers using knotted colored threads called quipus.",
      "Our famous royal estate, Machu Picchu, was constructed on a dramatic ridge over 2,400 meters above sea level."
    ],
    options: ["Inca Civilization", "Maya Civilization", "Aztec Civilization", "Ancient Egypt"],
    explanation: "The Inca Empire (Tawantinsuyu) flourished in the 15th and early 16th centuries. Machu Picchu was built around 1450 CE under Emperor Pachacuti as an elite royal estate and astronomical retreat, harmoniously integrated with the rugged mountain landscape."
  },

  // --- MEDIUM DIFFICULTY ---
  {
    id: "q-maurya-medium",
    difficulty: "Medium",
    subject: "The Great Stupa at Sanchi",
    question: "Which imperial dynasty commissioned this monumental Buddhist hemispherical stupa?",
    civilizationId: "mauryan-empire",
    civilizationName: "Mauryan Empire",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi_Stupa_from_Eastern_gate%2C_Madhya_Pradesh.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Sanchi_Stupa_from_Eastern_gate,_Madhya_Pradesh.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The Great Stupa of Sanchi with carved torana gateways"
    },
    clues: [
      "Founded in Pataliputra by Chandragupta with counsel from royal advisor Chanakya.",
      "My third emperor felt profound remorse after the slaughter of the Kalinga War and adopted royal welfare and non-violence.",
      "We erected monolithic polished sandstone pillars inscribed with moral decrees of Dhamma throughout the subcontinent.",
      "The four back-to-back lions atop our Sarnath pillar later became the State Emblem of India."
    ],
    options: ["Mauryan Empire", "Gupta Empire", "Chola Dynasty", "Vijayanagara Empire"],
    explanation: "The Mauryan Empire (c. 322–185 BCE) united almost the entire Indian subcontinent under one central administration. Emperor Ashoka's patronage spread Buddhism and ethical rock/pillar edicts across Asia."
  },
  {
    id: "q-chola-medium",
    difficulty: "Medium",
    subject: "Brihadisvara Temple of Thanjavur",
    question: "Which southern maritime empire raised this monolithic granite temple tower?",
    civilizationId: "chola-dynasty",
    civilizationName: "Chola Dynasty",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thanjavur_Brihadisvara_Temple.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Thanjavur_Brihadisvara_Temple.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The 66-meter high granite Vimana of Brihadisvara Temple, Thanjavur"
    },
    clues: [
      "We maintained a powerful blue-water navy that crossed the Bay of Bengal to conquer maritime kingdoms in Southeast Asia.",
      "Our bronze casters brought the lost-wax casting technique to supreme artistic perfection, immortalizing Shiva as Nataraja.",
      "Our villages practiced democratic local government with secret ballot voting (Kudavolai) recorded on temple walls.",
      "Emperor Rajaraja I constructed the colossal Brihadisvara granite temple at our capital of Thanjavur."
    ],
    options: ["Chola Dynasty", "Vijayanagara Empire", "Gupta Empire", "Mauryan Empire"],
    explanation: "The Imperial Cholas (c. 848–1279 CE) dominated southern India and the Indian Ocean trade routes. Brihadisvara Temple was completed in 1010 CE and features a massive single-block granite dome weighing over 80 tons."
  },
  {
    id: "q-sumer-medium",
    difficulty: "Medium",
    subject: "The Great Ziggurat of Ur",
    question: "Which Mesopotamian civilization built this terraced mudbrick stepped temple?",
    civilizationId: "sumerian-civilization",
    civilizationName: "Sumerian Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggurat_of_ur.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ziggurat_of_ur.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The restored facade of the Ziggurat of Ur in southern Iraq"
    },
    clues: [
      "We flourished in the river floodplains between the Tigris and Euphrates in southern Mesopotamia.",
      "Our scribes pressed reed styluses into wet clay to invent the cuneiform script, one of humanity's earliest writing systems.",
      "We developed the base-60 sexagesimal mathematical system, giving humanity the 60-minute hour and 360-degree circle.",
      "King Ur-Nammu constructed the monumental stepped Ziggurat of Ur dedicated to the moon god Nanna."
    ],
    options: ["Sumerian Civilization", "Babylonian Civilization", "Ancient Egypt", "Persian Empire"],
    explanation: "The Sumerians (c. 4500–1900 BCE) established the world's earliest known cities (such as Uruk and Ur), invented the potter's wheel, developed cuneiform script, and composed the Epic of Gilgamesh."
  },
  {
    id: "q-babylon-medium",
    difficulty: "Medium",
    subject: "The Glazed Blue Ishtar Gate",
    question: "Which ancient civilization created this glazed ceramic brick marvel?",
    civilizationId: "babylonian-civilization",
    civilizationName: "Babylonian Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar_Gate_at_Pergamon_Museum.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_at_Pergamon_Museum.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Reconstructed Ishtar Gate with glazed reliefs of dragons and aurochs"
    },
    clues: [
      "Our king codified 282 legal judgments onto a monumental black diorite stele under the principle of retaliatory justice.",
      "Classical ancient writers celebrated our capital as the location of the terraced Hanging Gardens.",
      "Under Nebuchadnezzar II, we constructed the grand Processional Way and fortified our city with colossal brick ramparts.",
      "We welcomed visitors to our royal city through the dazzling blue glazed ceramic brick gateway of the goddess Ishtar."
    ],
    options: ["Babylonian Civilization", "Sumerian Civilization", "Persian Empire", "Ancient Greece"],
    explanation: "The Babylonian Civilization (c. 1894–539 BCE) was famed for King Hammurabi's legal code and later the Neo-Babylonian renaissance under Nebuchadnezzar II, who reconstructed Babylon with its iconic glazed blue Ishtar Gate."
  },
  {
    id: "q-maya-medium",
    difficulty: "Medium",
    subject: "El Castillo at Chichen Itza",
    question: "Which Mesoamerican civilization built this astronomically aligned step pyramid?",
    civilizationId: "maya-civilization",
    civilizationName: "Maya Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Chichen_Itza_3.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "El Castillo step pyramid at Chichen Itza, Yucatan"
    },
    clues: [
      "We built thriving tropical city-states across the Yucatan Peninsula, Guatemala, and Honduras.",
      "Our mathematicians independently developed the concept of mathematical zero and calculated intricate astronomical cycles.",
      "Our scribes wrote sophisticated logosyllabic hieroglyphs into bark-paper codices and carved them onto tall stone stelae.",
      "During the equinox at our pyramid of El Castillo, shadows create the visual illusion of a feathered serpent slithering down the steps."
    ],
    options: ["Maya Civilization", "Aztec Civilization", "Inca Civilization", "Ancient Egypt"],
    explanation: "The Maya Civilization flourished for centuries in Mesoamerica. They possessed advanced astronomical knowledge, calculating the solar year and Venus cycles with astonishing precision and constructing cities like Tikal, Palenque, and Chichen Itza."
  },
  {
    id: "q-persia-medium",
    difficulty: "Medium",
    subject: "The Apadana Palace at Persepolis",
    question: "Which grand empire welcomed tribute-bearing nations to this royal terrace?",
    civilizationId: "persian-empire",
    civilizationName: "Persian Empire (Achaemenid)",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis_stairs_of_the_Apadana_relief.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Persepolis_stairs_of_the_Apadana_relief.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Bas-relief stone carvings of diverse regional delegations at Persepolis"
    },
    clues: [
      "Our founder, Cyrus the Great, issued a clay cylinder guaranteeing religious tolerance to conquered peoples.",
      "We governed through regional provinces called satrapies, linked by a 2,700-kilometer Royal Road with mounted courier stations.",
      "Our engineers developed subterranean irrigation channels (qanats) to cultivate lush walled paradise gardens in the desert.",
      "Our grand ceremonial capital at Persepolis featured the monumental Gate of All Nations and the Apadana audience hall."
    ],
    options: ["Persian Empire", "Babylonian Civilization", "Ancient Rome", "Ancient Greece"],
    explanation: "The Achaemenid Persian Empire (c. 550–330 BCE) founded by Cyrus the Great was the largest empire the world had yet seen. Persepolis served as the ceremonial showcase for the annual Nowruz New Year tribute festivals."
  },

  // --- HARD DIFFICULTY ---
  {
    id: "q-gupta-hard",
    difficulty: "Hard",
    subject: "The Rust-Resistant Iron Pillar of Delhi",
    question: "Which classical empire forged this corrosion-resistant metallurgical marvel?",
    civilizationId: "gupta-empire",
    civilizationName: "Gupta Empire",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Pillar_Delhi.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Iron_Pillar_Delhi.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The 7-meter high wrought iron pillar in Delhi"
    },
    clues: [
      "Often hailed as the 'Golden Age of Classical India' for revolutionary advances in Sanskrit literature and science.",
      "During our era, mathematician Aryabhata postulated an earth-rotating model and calculated pi to four decimal places.",
      "Our metallurgists forged a 7-meter wrought iron pillar with a passive crystalline iron hydrogen phosphate layer that has resisted rust for 1,600 years.",
      "Great rulers of our line included Samudragupta the conqueror and Chandragupta II Vikramaditya."
    ],
    options: ["Gupta Empire", "Mauryan Empire", "Chola Dynasty", "Vijayanagara Empire"],
    explanation: "The Gupta Empire (c. 319–550 CE) witnessed an extraordinary explosion of classical arts and sciences. The Iron Pillar of Delhi, bearing a Sanskrit inscription honoring King Chandra (Chandragupta II), stands as testament to advanced ancient metallurgy."
  },
  {
    id: "q-vijayanagara-hard",
    difficulty: "Hard",
    subject: "The Monolithic Stone Chariot at Hampi",
    question: "Which southern medieval empire sculpted this iconic granite chariot shrine?",
    civilizationId: "vijayanagara-empire",
    civilizationName: "Vijayanagara Empire",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone_Chariot%2C_Hampi.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Stone_Chariot,_Hampi.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The monolithic granite stone chariot in the Vittala Temple complex, Hampi"
    },
    clues: [
      "Our capital was built amidst a rugged boulder-strewn landscape along the banks of the Tungabhadra River.",
      "European and Persian travelers described our urban markets where rubies, diamonds, and pearls were sold by the bushel.",
      "Our celebrated emperor Krishnadevaraya patronized the 'Ashtadiggajas' (eight great court poets) and composed epic literature.",
      "The ruins of our capital at Hampi showcase the famed Vittala Temple with musical pillars and a granite stone chariot."
    ],
    options: ["Vijayanagara Empire", "Chola Dynasty", "Gupta Empire", "Mauryan Empire"],
    explanation: "The Vijayanagara Empire (c. 1336–1646 CE) was founded by Harihara and Bukka in the Deccan plateau. Its capital at Hampi grew into one of the largest and most prosperous metropolises in the pre-modern world."
  },
  {
    id: "q-aztec-hard",
    difficulty: "Hard",
    subject: "The 24-Ton Aztec Sun Stone",
    question: "Which lake-dwelling civilization carved this colossal basalt solar monolith?",
    civilizationId: "aztec-civilization",
    civilizationName: "Aztec Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piedra_del_Sol_en_el_MNA.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Piedra_del_Sol_en_el_MNA.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Basalt relief of the Sun Stone in Mexico City"
    },
    clues: [
      "Our ancestors founded our capital city on an island in Lake Texcoco where they spotted an eagle perched on a prickly pear cactus.",
      "We developed ultra-fertile artificial agricultural floating islands known as chinampas to feed our dense urban population.",
      "At the center of our island capital stood the Templo Mayor, a dual-shrine stepped pyramid dedicated to Tlaloc and Huitzilopochtli.",
      "Our sculptors carved the massive 24-ton Sun Stone monolith detailing the five cosmic creation ages and our solar calendar."
    ],
    options: ["Aztec Civilization", "Maya Civilization", "Inca Civilization", "Ancient Egypt"],
    explanation: "The Aztec (Mexica) Civilization (c. 1345–1521 CE) built their magnificent capital Tenochtitlan on Lake Texcoco. The Sun Stone, uncovered in 1790 beneath the main square of Mexico City, depicts cosmological eras and the solar deity Tonatiuh."
  },

  // --- LEGENDARY DIFFICULTY (Cryptic Single Clue Mode) ---
  {
    id: "q-legendary-indus",
    difficulty: "Legendary",
    subject: "The Undeciphered Script of the Harappans",
    question: "DECODE THE LEGENDARY CLUE:",
    civilizationId: "indus-valley",
    civilizationName: "Indus Valley Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohenjo-daro.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Silent brick streets of an ancient metropolis"
    },
    clues: [
      "My script remains undeciphered, my standardized weights spanned over a million square kilometers, and my cities flourished with covered sewers but zero royal tombs or weapons of conquest."
    ],
    options: ["Indus Valley Civilization", "Sumerian Civilization", "Ancient Egypt", "Maya Civilization"],
    explanation: "The Indus Valley Civilization remains one of history's greatest enigmas: an extraordinarily peaceful, technologically advanced urban culture whose script has resisted decipherment for over a century."
  },
  {
    id: "q-legendary-chola",
    difficulty: "Legendary",
    subject: "The Blue-Water Navy of the Kaveri Delta",
    question: "DECODE THE LEGENDARY CLUE:",
    civilizationId: "chola-dynasty",
    civilizationName: "Chola Dynasty",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thanjavur_Brihadisvara_Temple.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Thanjavur_Brihadisvara_Temple.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Granite sanctuary rising above the Kaveri delta"
    },
    clues: [
      "My blue-water armada turned the Bay of Bengal into a private lake, while an 80-ton single granite dome was hoisted atop my mortarless temple tower by Rajaraja."
    ],
    options: ["Chola Dynasty", "Vijayanagara Empire", "Mauryan Empire", "Ancient Rome"],
    explanation: "The Cholas achieved unprecedented naval dominance in the 11th century, raiding Srivijaya (Sumatra/Malaya) while engineering monumental Dravidian granite architecture at Thanjavur."
  },
  {
    id: "q-legendary-inca",
    difficulty: "Legendary",
    subject: "The Mortarless Masonry of the Andes",
    question: "DECODE THE LEGENDARY CLUE:",
    civilizationId: "inca-civilization",
    civilizationName: "Inca Civilization",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Granite walls nestled in the cloud forest"
    },
    clues: [
      "Across 40,000 kilometers of mountain highways without the wheel or horses, our relay chasqui runners sprinted with colored knotted strings past earthquake-proof dry-stone palaces."
    ],
    options: ["Inca Civilization", "Maya Civilization", "Aztec Civilization", "Ancient China"],
    explanation: "The Inca built Tawantinsuyu into the largest pre-Columbian empire in the Americas, using quipus for accounting and constructing seamless mortarless stone citadels in the high Andes."
  },
  {
    id: "q-legendary-greece",
    difficulty: "Legendary",
    subject: "The Gearwork of the Antikythera",
    question: "DECODE THE LEGENDARY CLUE:",
    civilizationId: "ancient-greece",
    civilizationName: "Ancient Greece",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg",
      license: "Creative Commons Attribution-ShareAlike 2.0",
      caption: "Columns sculpted with optical entasis"
    },
    clues: [
      "We calculated planetary orbits with a 30-gear bronze analog computer, voted to ostracize rulers on broken pottery, and constructed temples with deliberately curved marble columns to trick the human eye."
    ],
    options: ["Ancient Greece", "Ancient Rome", "Gupta Empire", "Babylonian Civilization"],
    explanation: "Ancient Greece pioneered astronomical mechanics (the Antikythera Mechanism), democratic ostracism, and optical entasis refinement in classical architecture."
  }
];
