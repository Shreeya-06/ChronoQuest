/**
 * ChronoQuest - Ancient Civilizations Dataset
 * All content is grounded in established historical and archaeological records.
 * Image sources are authentic public domain / Creative Commons from Wikimedia Commons.
 */

export const civilizations = [
  // --- INDIA & SOUTH ASIA ---
  {
    id: "indus-valley",
    name: "Indus Valley Civilization",
    region: "South Asia",
    period: "c. 2500 – 1900 BCE (Mature Harappan)",
    capital: "Major metropolitan centers: Mohenjo-daro & Harappa",
    sites: ["Mohenjo-daro", "Harappa", "Dholavira", "Lothal", "Kalibangan", "Rakhigarhi"],
    rulers: ["No identified monarchs; likely governed by merchant councils, priests, or civic assemblies"],
    architecture: "Standardized baked-brick urban grids, multi-story courtyards, covered sewer drains, monumental Great Bath at Mohenjo-daro, and tidal dockyard at Lothal.",
    writing: "Indus script (pictographic/logographic, found on steatite seals, remains undeciphered to this day).",
    water_engineering: "World's earliest sophisticated urban sanitation: private bathrooms connected to underground street sewers, giant reservoirs carved into rock at Dholavira, and brick-lined public wells.",
    religion_culture: "Pashupati proto-Shiva seal motif, Mother Goddess terracotta figurines, ritual bathing, standardized cubical weights, and absence of overt royal palaces or militaristic monuments.",
    artifacts: [
      "Priest-King steatite bust",
      "Bronze Dancing Girl of Mohenjo-daro",
      "Pashupati Seal (Unicorn & Horned deity)",
      "Standardized chert weights"
    ],
    interesting_facts: [
      "Covered an area larger than ancient Egypt and Mesopotamia combined, stretching over 1 million square kilometers.",
      "The Great Bath of Mohenjo-daro was waterproofed with a thick layer of natural bitumen (tar).",
      "Lothal possessed what archaeologists consider the world's earliest known tidal dockyard connected to the Sabarmati river."
    ],
    coordinates: [27.3292, 68.1389], // Mohenjo-daro
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohenjo-daro.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Excavated ruins of the Great Bath and Buddhist stupa mound at Mohenjo-daro, Sindh"
    },
    clues: [
      "My cities were systematically laid out in a precise cardinal grid using standardized baked bricks.",
      "My urban centers possessed the ancient world's most advanced covered drainage and indoor bathroom systems.",
      "My artisans carved thousands of distinctive steatite seals bearing animal motifs like unicorns and bulls.",
      "Important excavated centers include Harappa, Lothal's dockyard, and Mohenjo-daro along the Indus river basin."
    ],
    legendary_clue: "My script remains undeciphered, my standardized weights span thousands of miles, and my cities flourished without palaces or weapons of conquest."
  },

  {
    id: "mauryan-empire",
    name: "Mauryan Empire",
    region: "South Asia",
    period: "c. 322 – 185 BCE",
    capital: "Pataliputra (modern-day Patna)",
    sites: ["Pataliputra", "Sanchi", "Sarnath", "Barabar Caves", "Taxila", "Dhauli"],
    rulers: ["Chandragupta Maurya", "Bindusara", "Ashoka the Great", "Dasharatha Maurya"],
    architecture: "Monolithic polished sandstone edict pillars, hemispherical brick stupas, rock-cut artificial caves with mirror-like polish at Barabar, and palatial wooden fortification walls at Pataliputra.",
    writing: "Brahmi script and Kharosthi script used for imperial royal rock and pillar edicts; also Aramaic and Greek in the northwest.",
    water_engineering: "Sudharshana Lake reservoir in Saurashtra (Gujarat), state irrigation canals overseen by water superintendents described in the Arthashastra.",
    religion_culture: "Patronage of Buddhism under Emperor Ashoka following the Kalinga War, spread of Dhamma edicts across Asia, statecraft codified in Kautilya's Arthashastra, and Jain tradition under Chandragupta.",
    artifacts: [
      "Lion Capital of Ashoka at Sarnath (National Emblem of India)",
      "Didarganj Yakshi polished sandstone statue",
      "Silver Punch-Marked imperial punch coins",
      "Major Rock Edict inscriptions"
    ],
    interesting_facts: [
      "Unified almost the entire Indian subcontinent under one central imperial administration for the first time in history.",
      "Greek ambassador Megasthenes visited Pataliputra and wrote the ancient ethnographic text 'Indica'.",
      "Emperor Ashoka renounced aggressive militarism after the devastating Kalinga War and adopted royal welfare and non-violence (Ahimsa)."
    ],
    coordinates: [25.611, 85.144], // Pataliputra
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi_Stupa_from_Eastern_gate%2C_Madhya_Pradesh.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Sanchi_Stupa_from_Eastern_gate,_Madhya_Pradesh.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The Great Stupa at Sanchi, originally commissioned by Mauryan Emperor Ashoka"
    },
    clues: [
      "I was founded by Chandragupta with the strategic guidance of the political theorist Chanakya.",
      "My third emperor carved moral edicts regarding non-violence on polished monolithic sandstone pillars across Asia.",
      "The four-lion capital carved during my golden era became the national emblem of modern India.",
      "My capital city of Pataliputra on the Ganges featured majestic wooden palisades described by Greek diplomats."
    ],
    legendary_clue: "Following the bloodshed of Kalinga, my emperor carved royal decrees of Dhamma on cliffs from Afghanistan to Karnataka."
  },

  {
    id: "gupta-empire",
    name: "Gupta Empire",
    region: "South Asia",
    period: "c. 319 – 550 CE",
    capital: "Pataliputra and Ujjain",
    sites: ["Nalanda Mahavihara", "Ajanta Caves", "Udayagiri Caves", "Deogarh Dashavatara", "Eran"],
    rulers: ["Chandragupta I", "Samudragupta (Napoleon of India)", "Chandragupta II (Vikramaditya)", "Kumaragupta I"],
    architecture: "Early classical stone Hindu temples with flat roofs and sanctums (Garbhagriha), monumental rock-cut cave paintings at Ajanta, and brick monastic universities.",
    writing: "Classical Sanskrit written in late Brahmi (Gupta script), era of legendary poet Kalidasa and mathematician Aryabhata.",
    water_engineering: "Repair and reconstruction of the massive ancient Sudarshana Dam by governor Parnadatta under Emperor Skandagupta.",
    religion_culture: "Known as the Golden Age of India: invention of the mathematical decimal system and zero, compilation of the Puranas, classical Ayurvedic medicine under Sushruta traditions, and exquisite coin metallurgy.",
    artifacts: [
      "Rust-resistant Iron Pillar of Delhi",
      "Samudragupta Archer and Lyre gold dinars",
      "Standing Buddha of Sarnath",
      "Ajanta Cave 1 Padmapani mural paintings"
    ],
    interesting_facts: [
      "The Iron Pillar of Delhi, forged during Chandragupta II's reign, has stood outdoors for over 1,600 years without rusting due to a passive protective film.",
      "Mathematician Aryabhata calculated the value of pi to four decimal places and stated that the Earth rotates on its axis during this era.",
      "The great international university of Nalanda was founded under Emperor Kumaragupta I."
    ],
    coordinates: [23.1793, 75.7849], // Ujjain
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Pillar_Delhi.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Iron_Pillar_Delhi.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The rust-resistant metallurgical wonder, the Iron Pillar of Delhi, commissioned during the Gupta era"
    },
    clues: [
      "My reign is celebrated as the 'Golden Age of Classical India' for revolutionary advances in mathematics, astronomy, and Sanskrit literature.",
      "During my era, scholars codified the concept of zero and the decimal positional system.",
      "My artisans forged a 7-meter high iron pillar that has resisted corrosion for more than 1,600 years.",
      "Great rulers of my lineage included Samudragupta the conqueror and Chandragupta II Vikramaditya."
    ],
    legendary_clue: "Under my patronage, Aryabhata calculated planetary rotations while Kalidasa composed masterpieces in royal courts."
  },

  {
    id: "chola-dynasty",
    name: "Chola Dynasty",
    region: "South Asia",
    period: "c. 848 – 1279 CE (Imperial Medieval Cholas)",
    capital: "Thanjavur, Gangaikonda Cholapuram",
    sites: ["Brihadisvara Temple (Thanjavur)", "Gangaikonda Cholapuram", "Airavatesvara Temple", "Nagapattinam"],
    rulers: ["Vijayalaya Chola", "Rajaraja Chola I", "Rajendra Chola I", "Kulothunga Chola I"],
    architecture: "Dravidian temple architecture: soaring granite Vimanas (temple towers), massive monolithic granite dome stones, pillared mandapas, and colossal Nandi statues.",
    writing: "Tamil script and Grantha script used for extensive temple endowment inscriptions on granite stone walls and copper plate grants.",
    water_engineering: "Rajendra Chola constructed the 22-kilometer Cholagandgangam (Ponneri) artificial reservoir and vast canal systems connecting the fertile Kaveri delta.",
    religion_culture: "Devout Shaivism, bronze cire-perdue (lost-wax) metallurgy creating divine dancing Nataraja bronzes, maritime trade guilds (Ayyavole, Manigramam), and patronage of classical Bharatanatyam.",
    artifacts: [
      "Bronze Nataraja (Lord of Dance in cosmic ring)",
      "Karandai copper-plate charters",
      "Brihadisvara Kumbam (80-ton granite capstone)",
      "Chola gold kasu coins"
    ],
    interesting_facts: [
      "Maintained a formidable blue-water navy that crossed the Bay of Bengal to conquer Srivijaya (modern Indonesia and Malaysia).",
      "The Vimana of Brihadisvara Temple at Thanjavur is 66 meters tall and built entirely of interlocking granite without binding mortar.",
      "Village self-governance through democratic stone ballot voting (Kudavolai system) is recorded in detail on the walls of the Uthiramerur temple."
    ],
    coordinates: [10.7828, 79.1318], // Thanjavur
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thanjavur_Brihadisvara_Temple.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Thanjavur_Brihadisvara_Temple.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The soaring granite Vimana of Brihadisvara Temple at Thanjavur, built by Rajaraja Chola I"
    },
    clues: [
      "I dominated maritime trade across the Indian Ocean and launched naval expeditions to Southeast Asia's Srivijaya kingdom.",
      "My metalworkers perfected the lost-wax casting technique to create iconic bronze sculptures of the cosmic dancing Shiva (Nataraja).",
      "My ruler Rajaraja I constructed the colossal 'Big Temple' of Thanjavur using interlocking granite blocks.",
      "My heartland lay in the lush Kaveri delta of southern India, with capitals at Thanjavur and Gangaikonda Cholapuram."
    ],
    legendary_clue: "My blue-water navy turned the Bay of Bengal into a private lake while an 80-ton granite dome was hoisted atop my Thanjavur temple tower."
  },

  {
    id: "vijayanagara-empire",
    name: "Vijayanagara Empire",
    region: "South Asia",
    period: "c. 1336 – 1646 CE",
    capital: "Vijayanagara (modern Hampi)",
    sites: ["Hampi", "Anegundi", "Lepakshi", "Penukonda", "Chandragiri"],
    rulers: ["Harihara I", "Bukka Raya I", "Krishnadevaraya", "Achyuta Deva Raya"],
    architecture: "Intricately carved granite temples with musical pillars, towering Rayagopurams, monolithic Lakshmi Narasimha, and the iconic stone chariot inside the Vittala Temple.",
    writing: "Kannada and Telugu scripts in high classical literature; Sanskrit official inscriptions.",
    water_engineering: "Kamalapuram lake, extensive stone aqueducts channeling water from the rocky Tungabhadra river through stepped tanks (Pushkaranis) and royal baths.",
    religion_culture: "Patronage of classical Carnatic music, Telugu poetry at Krishnadevaraya's court of the Ashtadiggajas, grand Mahanavami Dibba festival celebrations, and vibrant international bazaar trade in diamonds and Arabian horses.",
    artifacts: [
      "Hampi Stone Chariot (Garuda shrine)",
      "Monolithic Ugra Narasimha colossal statue",
      "Gold Varaha coins bearing the boar incarnation",
      "Mahanavami Dibba relief carvings of foreign envoys"
    ],
    interesting_facts: [
      "In the 15th and early 16th century, Vijayanagara was the second-largest city in the world after Beijing, with half a million residents.",
      "Portuguese travelers like Domingo Paes and Duarte Barbosa described its diamond markets as the wealthiest on Earth.",
      "The Vittala Temple features 56 musical granite pillars that emit distinct acoustic notes when struck."
    ],
    coordinates: [15.335, 76.46], // Hampi
    difficulty: "Hard",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone_Chariot%2C_Hampi.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Stone_Chariot,_Hampi.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The iconic monolithic Stone Chariot at the Vittala Temple complex in Hampi"
    },
    clues: [
      "My capital city was nestled among dramatic granite boulder hills on the banks of the Tungabhadra River.",
      "European visitors described my international street markets where diamonds and pearls were weighed in open baskets.",
      "My most renowned monarch, Krishnadevaraya, was both a brilliant military commander and a celebrated poet-king.",
      "The ruins of my capital, known today as Hampi, feature an exquisite stone chariot and musical stone pillars."
    ],
    legendary_clue: "Founded by the Sangama brothers along the Tungabhadra, my metropolis was praised by Persian envoy Abdur Razzaq as a city like none other on Earth."
  },

  // --- EGYPT ---
  {
    id: "ancient-egypt",
    name: "Ancient Egypt",
    region: "North Africa",
    period: "c. 3100 – 30 BCE",
    capital: "Memphis, Thebes (modern Luxor), Alexandria",
    sites: ["Giza Plateau", "Valley of the Kings", "Karnak & Luxor Temples", "Abu Simbel", "Saqqara"],
    rulers: ["Narmer", "Khufu", "Hatshepsut", "Akhenaten", "Tutankhamun", "Ramesses II", "Cleopatra VII"],
    architecture: "Monumental limestone pyramids, rock-hewn hypostyle halls, obelisks, mastaba tombs, and colossal pylon gates facing the sacred Nile river.",
    writing: "Hieroglyphic script (monumental and sacred), Hieratic and Demotic scripts (cursive papyrus records); deciphered via the multilingual Rosetta Stone.",
    water_engineering: "Nilometer structures to measure annual flood inundation, basin irrigation dividing fields into earthen dikes, and the shaduf lever mechanism.",
    religion_culture: "Complex polytheism centered on Ra, Osiris, and Isis; mummification and the Book of the Dead preparing the soul for the trial of weighing the heart; divine Pharaoh as living Horus.",
    artifacts: [
      "Golden Death Mask of Tutankhamun",
      "The Rosetta Stone",
      "Bust of Nefertiti",
      "Narmer Palette"
    ],
    interesting_facts: [
      "The Great Pyramid of Giza was the tallest man-made structure on Earth for over 3,800 years until Lincoln Cathedral was built in England.",
      "Both Egyptian men and women wore dark eye makeup made of kohl for cosmetic beauty and to protect their eyes from the harsh desert glare.",
      "The ancient Egyptian calendar was based on the annual rising of the dog star Sirius, matching the annual flooding of the Nile."
    ],
    coordinates: [29.9792, 31.1342], // Giza
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:All_Gizah_Pyramids.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The Great Pyramids of Giza rising above the desert sands near Cairo"
    },
    clues: [
      "My entire civilization was sustained by the predictable annual inundation of the world's longest river.",
      "My people believed in an afterlife where the heart of the deceased was weighed against the feather of truth (Ma'at).",
      "My scribes wrote sacred texts using pictorial glyphs carved onto stone and written on papyrus reed scrolls.",
      "My monumental legacy includes the Great Sphinx, the Karnak Temple complex, and the soaring Pyramids of Giza."
    ],
    legendary_clue: "Ruled by living gods wearers of the double Pschent crown, we preserved our pharaohs in linen wraps beneath limestone mountains."
  },

  // --- MESOPOTAMIA ---
  {
    id: "sumerian-civilization",
    name: "Sumerian Civilization",
    region: "Middle East",
    period: "c. 4500 – 1900 BCE",
    capital: "Independent city-states: Ur, Uruk, Eridu, Lagash, Nippur",
    sites: ["Great Ziggurat of Ur", "Uruk (Warka)", "Eridu", "Girsu", "Kish"],
    rulers: ["Gilgamesh (semi-mythical King of Uruk)", "Lugal-zage-si", "Ur-Nammu", "Shulgi", "Enheduanna (world's first named author)"],
    architecture: "Mudbrick terrace ziggurats crowned with shrines, buttressed temple complexes, arched reed homes, and monumental perimeter city walls.",
    writing: "Cuneiform script (wedge-shaped impressions made with reed styluses on wet clay tablets).",
    water_engineering: "Vast canal networks diverting the turbulent waters of the Tigris and Euphrates for flood control and year-round field irrigation.",
    religion_culture: "Polytheistic worship of Anu, Enlil, and Inanna; epic poetry including the Epic of Gilgamesh; development of the base-60 (sexagesimal) numbering system dividing hours into 60 minutes.",
    artifacts: [
      "Standard of Ur (mosaic of war and peace in lapis lazuli and shell)",
      "Bull-headed Lyre of Ur",
      "Warka Vase of Uruk",
      "Cylinder seals depicting celestial constellations"
    ],
    interesting_facts: [
      "Invented the potter's wheel, the wheeled vehicle, the plow, and the earliest systematic cuneiform writing.",
      "Our modern measurement of time (60 seconds in a minute, 60 minutes in an hour, 360 degrees in a circle) comes from the Sumerian sexagesimal numerical system.",
      "Princess Enheduanna, high priestess of the moon god Nanna at Ur, is recognized as the world's first recorded author whose name is known to history."
    ],
    coordinates: [30.9622, 46.1031], // Ur
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggurat_of_ur.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ziggurat_of_ur.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The restored monumental mud-brick Great Ziggurat of Ur in modern-day southern Iraq"
    },
    clues: [
      "I arose in the fertile marshlands between the Tigris and Euphrates rivers, often called the 'Cradle of Civilization'.",
      "My scribes pressed reed styluses into wet clay tablets to invent cuneiform, one of the earliest writing systems.",
      "My city-states constructed towering terraced mud-brick stepped temples known as ziggurats.",
      "My literary heritage produced the world's oldest surviving epic masterpiece, celebrating the hero King Gilgamesh."
    ],
    legendary_clue: "We gifted humanity the 60-minute hour, the wheel, and cuneiform pressed upon clay along the Euphrates floodplains."
  },

  {
    id: "babylonian-civilization",
    name: "Babylonian Civilization",
    region: "Middle East",
    period: "c. 1894 – 539 BCE",
    capital: "Babylon",
    sites: ["Babylon", "Borsippa", "Sippar", "Dur-Kurigalzu"],
    rulers: ["Hammurabi", "Samsuiluna", "Nebuchadnezzar II", "Nabonidus"],
    architecture: "Vibrant glazed blue ceramic brickwork, colossal Ishtar Gate adorned with dragons (Mušḫuššu) and aurochs, massive double-walled city ramparts, and the legendary Hanging Gardens.",
    writing: "Akkadian cuneiform on stone stelae and administrative clay tablets.",
    water_engineering: "Advanced Euphrates river diversion channels, protective moat systems encasing the metropolis, and hydraulic water screws for royal gardens.",
    religion_culture: "Supreme patron deity Marduk, astral astrology and meticulous recording of planetary eclipses (Enuma Anu Enlil), and earliest comprehensive codified legal system.",
    artifacts: [
      "Code of Hammurabi Diorite Stele",
      "Glazed brick reliefs of the Ishtar Gate",
      "Babylonian Map of the World (Imago Mundi)",
      "Striding Lion glazed wall panels"
    ],
    interesting_facts: [
      "Hammurabi's legal code inscribed on a 2.25-meter black diorite stele contains 282 legal judgments establishing the principle of retaliatory justice ('an eye for an eye').",
      "Nebuchadnezzar II rebuilt Babylon into the largest city in the ancient world, constructing the famed blue Ishtar Gate and the Processional Way.",
      "Babylonian astronomers could accurately predict lunar and solar eclipses using systematic mathematical cycles."
    ],
    coordinates: [32.5422, 44.4211], // Babylon
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar_Gate_at_Pergamon_Museum.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_at_Pergamon_Museum.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The majestic reconstructed glazed blue brick Ishtar Gate of Babylon, Pergamon Museum"
    },
    clues: [
      "My sixth king codified 282 laws inscribed on a monumental black diorite stone pillar setting standards of justice.",
      "My capital city on the Euphrates was famed for its dazzling glazed lapis-blue brick gateway dedicated to the goddess Ishtar.",
      "Classical writers celebrated my city as home to the lush, terraced Hanging Gardens, one of the Seven Wonders of the Ancient World.",
      "My empire reached its zenith under Nebuchadnezzar II, who constructed the grand Processional Way and the Etemenanki ziggurat."
    ],
    legendary_clue: "From atop our blue dragon-glazed gate, our kings proclaimed an eye for an eye under the gaze of the god Marduk."
  },

  // --- MEDITERRANEAN ---
  {
    id: "ancient-greece",
    name: "Ancient Greece",
    region: "Mediterranean",
    period: "c. 800 – 146 BCE (Archaic, Classical, & Hellenistic)",
    capital: "Independent poleis: Athens, Sparta, Thebes, Corinth",
    sites: ["Acropolis of Athens (Parthenon)", "Delphi", "Olympia", "Epidaurus", "Mycenae", "Knossos"],
    rulers: ["Pericles", "Leonidas I", "Alexander the Great", "Philip II of Macedon"],
    architecture: "Classical column orders (Doric, Ionic, Corinthian), marble temples with optical refinements (entasis), open-air semicircular hillside amphitheaters, and agoras.",
    writing: "Greek alphabet derived from Phoenician, source of Latin and Cyrillic scripts; Homeric hexameter poetry and philosophical treatises.",
    water_engineering: "Tunnel of Eupalinos on Samos (a 1,036-meter subterranean aqueduct dug from both sides simultaneously), fountains, and drainage channels.",
    religion_culture: "Olympic Games held every four years at Olympia, birthplace of democracy in Athens, founding fathers of philosophy (Socrates, Plato, Aristotle), theater (tragedy and comedy), and anatomical bronze/marble sculpture.",
    artifacts: [
      "Antikythera Mechanism (world's oldest analog astronomical computer)",
      "Discobolus (The Discus Thrower sculpture)",
      "Venus de Milo / Aphrodite of Melos",
      "Athenian Silver Owl Tetradrachm coins"
    ],
    interesting_facts: [
      "The Antikythera Mechanism, recovered from an ancient shipwreck, contained more than 30 meshing bronze gear wheels to predict celestial cycles and Olympic dates.",
      "In Athenian direct democracy, citizens voted to ostracize and exile corrupt or excessively ambitious politicians using broken pottery shards (ostraka).",
      "The Parthenon has virtually no true straight lines; columns tilt inward slightly and the floor curves upward to create the optical illusion of perfect straightness."
    ],
    coordinates: [37.9715, 23.7266], // Athens Acropolis
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg",
      license: "Creative Commons Attribution-ShareAlike 2.0",
      caption: "The classical marble columns of the Parthenon crowning the Athenian Acropolis"
    },
    clues: [
      "My rocky peninsula and Aegean islands gave birth to the Olympic Games, theatrical drama, and western philosophy.",
      "One of my most famous city-states pioneered a system of direct citizen democracy under the leader Pericles.",
      "My thinkers included Socrates, Plato, and Aristotle, while my sculptors captured the ideal athletic human form in bronze and marble.",
      "My crowning architectural gem is the marble Parthenon temple dedicated to Athena atop the sacred Acropolis."
    ],
    legendary_clue: "We gathered at the Pnyx to debate democracy, consulted the Pythia at Delphi, and built the Parthenon upon Pentelic marble."
  },

  {
    id: "ancient-rome",
    name: "Ancient Rome",
    region: "Mediterranean",
    period: "c. 753 BCE – 476 CE (Western Empire)",
    capital: "Rome, later Ravenna and Constantinople",
    sites: ["Colosseum", "Pantheon", "Roman Forum", "Pompeii", "Hadrian's Wall", "Pont du Gard"],
    rulers: ["Julius Caesar", "Augustus", "Trajan", "Hadrian", "Marcus Aurelius", "Constantine the Great"],
    architecture: "Volcanic pozzolana concrete, monumental rounded arches, barrel and groin vaults, soaring hemispherical domes (Pantheon), amphitheaters, basilicas, and paved stone roads.",
    writing: "Latin alphabet, Roman numerals, extensive legal codes (Corpus Juris Civilis), classical rhetoric of Cicero and epic poetry of Virgil.",
    water_engineering: "Multi-tiered gravity-fed stone aqueducts spanning valleys, lead and terracotta pipe distributions, monumental heated public baths (thermae), and the Cloaca Maxima sewer.",
    religion_culture: "Syncretic pantheon (Jupiter, Mars, Venus), transformation from Republic to autocratic Principate, gladiatorial spectacles, and later adoption of Christianity under Constantine.",
    artifacts: [
      "Augustus of Prima Porta marble statue",
      "Capitoline Wolf bronze emblem",
      "Gold Roman Aureus and silver Denarius coins",
      "Fresco paintings from the ash of Pompeii"
    ],
    interesting_facts: [
      "Roman concrete (opus caementicium) incorporated volcanic ash that reacted with seawater to grow tobermorite crystals, making marine harbors grow stronger over centuries.",
      "The Pantheon's unreinforced concrete dome spans 43.3 meters and remains the largest unreinforced solid concrete dome in the world today.",
      "At its territorial peak under Emperor Trajan, the empire stretched from Scotland's border to the Persian Gulf, encompassing over 50 million subjects."
    ],
    coordinates: [41.8902, 12.4922], // Colosseum, Rome
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo_2020.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0",
      caption: "The Colosseum (Flavian Amphitheatre) in the heart of Rome"
    },
    clues: [
      "My engineers revolutionized construction by perfecting volcanic concrete and soaring load-bearing arches.",
      "My network of paved highways, monumental aqueducts, and legal codes linked three continents under the Pax Romana.",
      "My society transitioned from a senatorial republic led by consuls to an immense empire under Augustus Caesar.",
      "My most famous gladiatorial arena, the Colosseum, seated over 50,000 roaring spectators in the heart of the Eternal City."
    ],
    legendary_clue: "Our legions marched under SPQR banners across paved stone roads while water flowed over monumental arched aqueducts into the Eternal City."
  },

  // --- ASIA ---
  {
    id: "ancient-china",
    name: "Ancient China",
    region: "East Asia",
    period: "c. 1600 BCE – 220 CE (Shang, Zhou, Qin, & Han)",
    capital: "Anyang, Luoyang, Chang'an (modern Xi'an)",
    sites: ["Terracotta Army (Mausoleum of Qin Shi Huang)", "Great Wall of China", "Yinxu Oracle Ruins", "Mawangdui", "Sanxingdui"],
    rulers: ["King Wu of Zhou", "Qin Shi Huang (First Emperor)", "Emperor Wu of Han", "Liu Bang"],
    architecture: "Rammed earth perimeter defensive walls, timber-framed Dougong interlocking bracket sets, imperial tiered palaces, and the stone fortifications of the Great Wall.",
    writing: "Logographic Chinese script originating from oracle bone inscriptions on ox scapulae and turtle plastrons used for royal divination.",
    water_engineering: "Dujiangyan irrigation system (built in 256 BCE without a dam, still irrigating Sichuan today) and the Zhengguo Canal.",
    religion_culture: "The Mandate of Heaven, philosophical schools of Confucianism, Daoism, and Legalism, ancestor veneration, silk weaving, and the Four Great Inventions (papermaking, compass, gunpowder, printing).",
    artifacts: [
      "Terracotta Warriors and Bronze Chariots of Qin Shi Huang",
      "Oracle bones inscribed with Shang divination records",
      "Sanxingdui bronze masks with protruding eyes",
      "Jade burial suits laced with gold wire from the Han dynasty"
    ],
    interesting_facts: [
      "Over 8,000 life-sized Terracotta Warriors were buried to guard the First Emperor Qin Shi Huang in the afterlife, each with completely unique facial expressions and hairstyles.",
      "The Dujiangyan water engineering project, designed by Li Bing in 256 BCE, bifurcated the Min River to prevent floods without a concrete dam and functions to this day.",
      "The Han Dynasty established the ancient Silk Road overland trade network, connecting Chang'an with Rome and South Asia."
    ],
    coordinates: [34.3841, 109.2785], // Terracotta Army, Xi'an
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta_Army%2C_View_of_Pit_1.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Vast ranks of life-sized Terracotta Soldiers in Pit 1 at Xi'an, Shaanxi"
    },
    clues: [
      "My earliest diviners carved questions about warfare and harvests onto turtle shells and ox bones known as oracle bones.",
      "My first emperor standardized currency, weights, axle widths, and the written language across a vast unified territory.",
      "My borders were fortified against northern nomadic invasions with thousands of miles of stone and rammed-earth walls.",
      "An underground terracotta army of more than 8,000 life-sized ceramic warriors and war horses was buried to protect my first emperor."
    ],
    legendary_clue: "Bound by the Mandate of Heaven, our First Emperor united the Warring States and was entombed with thousands of unique ceramic soldiers."
  },

  {
    id: "persian-empire",
    name: "Persian Empire (Achaemenid)",
    region: "Middle East",
    period: "c. 550 – 330 BCE",
    capital: "Pasargadae, Susa, Persepolis, Ecbatana",
    sites: ["Persepolis", "Pasargadae (Tomb of Cyrus)", "Naqsh-e Rustam", "Susa", "Behistun Inscription"],
    rulers: ["Cyrus the Great", "Cambyses II", "Darius I the Great", "Xerxes I", "Artaxerxes I"],
    architecture: "Monumental stone terraces, Apadana hypostyle audience halls with soaring double-bull capitols, rock-cut cliff royal tombs, and the Gate of All Nations at Persepolis.",
    writing: "Old Persian cuneiform, Elamite, and Babylonian; imperial administrative correspondence conducted across the realm in Aramaic.",
    water_engineering: "Qanat underground subterranean aqueduct channels that transported melting mountain snow across desert plains without evaporative loss.",
    religion_culture: "Zoroastrianism honoring Ahura Mazda with sacred eternal fire altars; imperial tolerance allowing displaced peoples (including Jewish exiles from Babylon) to return home.",
    artifacts: [
      "The Cyrus Cylinder (hailed as the world's first charter of human rights)",
      "Behistun trilingual rock relief inscription",
      "Golden Oxus Treasure chariots and armlets",
      "Glazed brick reliefs of the Persian Immortals guards"
    ],
    interesting_facts: [
      "The Persian Royal Road stretched 2,700 kilometers from Susa to Sardis; couriers with fresh horses at post stations could traverse it in just seven days.",
      "The subterranean Qanat irrigation technology allowed the Persians to cultivate lush walled paradise gardens (pairidaēza, origin of the word 'paradise') in the middle of arid deserts.",
      "Cyrus the Great's decree inscribed on the clay Cyrus Cylinder permitted captured peoples to worship freely and return to their ancestral homelands."
    ],
    coordinates: [29.935, 52.89], // Persepolis
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis_stairs_of_the_Apadana_relief.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Persepolis_stairs_of_the_Apadana_relief.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "Bas-relief stone carvings of tribute-bearing delegations on the Apadana stairs at Persepolis"
    },
    clues: [
      "My founder, Cyrus the Great, issued a famous clay cylinder decree respecting local religious customs and freeing captives.",
      "My realm was governed smoothly through regional governors known as Satraps, connected by a high-speed courier Royal Road.",
      "My subterranean irrigation tunnels called Qanats supplied water to elaborate walled botanical gardens, inspiring the word 'paradise'.",
      "My grand ceremonial capital of Persepolis featured the monumental Gate of All Nations and the great Apadana audience hall."
    ],
    legendary_clue: "From our ceremonial terraces at Persepolis, the King of Kings ruled 20 satrapies linked by postal relays and subterranean qanats."
  },

  // --- AMERICAS ---
  {
    id: "maya-civilization",
    name: "Maya Civilization",
    region: "Americas",
    period: "c. 2000 BCE – 1500 CE (Classic Peak c. 250–900 CE)",
    capital: "Independent city-states: Tikal, Calakmul, Palenque, Copán, Chichen Itza",
    sites: ["Tikal", "Palenque", "Chichen Itza", "Copán", "Yaxchilan", "Calakmul"],
    rulers: ["K'inich Janaab Pakal I (Palenque)", "Jasaw Chan K'awiil I (Tikal)", "Yik'in Chan K'awiil", "18 Rabbit (Copán)"],
    architecture: "Steep limestone stepped pyramids crowned with roof combs, corbelled vaults, ceremonial ballcourts, elevated sacbeob stone causeways, and astronomical observatories (El Caracol).",
    writing: "Maya hieroglyphic writing (logosyllabic script with over 800 intricate glyph blocks, written in bark-paper folding codices and carved on stone stelae).",
    water_engineering: "Vast plastered rainwater catchment plazas leading to giant clay-sealed subterranean reservoirs (aguadas) at Tikal and chultun cisterns.",
    religion_culture: "Popol Vuh creation mythology (Hero Twins), ritual Mesoamerican ballgame (pitz), veneration of the Feathered Serpent Kukulkan, bloodletting rituals, and an intricate calendar round interlocking with the Long Count calendar.",
    artifacts: [
      "Jade funerary mask of King Pakal of Palenque",
      "Dresden Codex astronomical manuscript",
      "Lintel 24 of Yaxchilan (bloodletting ritual carving)",
      "Carved wooden lintels of Tikal Temple IV"
    ],
    interesting_facts: [
      "The Maya independently developed the mathematical concept of zero by at least 36 BCE, representing it with a stylized seashell glyph.",
      "During the spring and autumn equinoxes at Chichen Itza's El Castillo pyramid, the afternoon sun casts an undulating shadow resembling a serpent slithering down the balustrade.",
      "Cacao beans were revered as gifts of the gods and served as both a bitter ceremonial frothy beverage and currency across the Maya world."
    ],
    coordinates: [20.6843, -88.5678], // Chichen Itza
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Chichen_Itza_3.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The step-pyramid El Castillo (Temple of Kukulcan) at Chichen Itza, Yucatan"
    },
    clues: [
      "I flourished in the tropical rainforests of the Yucatan Peninsula, Guatemala, and Honduras with independent rival city-states.",
      "My mathematicians independently invented the zero concept and engineered an extraordinarily precise Long Count calendar.",
      "My scribes wrote complex logosyllabic hieroglyphs into bark-paper folding books known as codices and onto carved stone stelae.",
      "My soaring jungle pyramids include Temple I at Tikal, the Temple of the Inscriptions at Palenque, and El Castillo at Chichen Itza."
    ],
    legendary_clue: "Our astronomers tracked Venus, represented zero with a shell glyph, and watched the feathered serpent Kukulkan descend our equinox steps."
  },

  {
    id: "aztec-civilization",
    name: "Aztec Civilization (Mexica)",
    region: "Americas",
    period: "c. 1345 – 1521 CE",
    capital: "Tenochtitlan (modern Mexico City)",
    sites: ["Templo Mayor (Tenochtitlan)", "Tlatelolco", "Teotihuacan (revered ancient site)", "Calixtlahuaca", "Malinalco"],
    rulers: ["Acamapichtli", "Itzcoatl", "Moctezuma I", "Ahuitzotl", "Moctezuma II", "Cuauhtémoc"],
    architecture: "Twin-temple stepped pyramid complexes (Templo Mayor dedicated to Tlaloc and Huitzilopochtli), causeways spanning Lake Texcoco with drawbridges, aqueducts, and stone ballcourts.",
    writing: "Pictographic and ideographic Nahuatl glyphs painted on deerskin and amatl bark paper codices.",
    water_engineering: "Chinampas ('floating gardens' built of woven reeds and nutrient-rich lake mud), the Chapultepec twin-pipe stone aqueduct, and the Nezahualcoyotl dike separating brackish and freshwater.",
    religion_culture: "Worship of sun and war god Huitzilopochtli and rain god Tlaloc; flower wars to capture sacrificial captives to nourish the sun; exquisite featherwork, obsidian blade craftsmanship, and Nahuatl philosophical poetry.",
    artifacts: [
      "The Aztec Sun Stone (Calendar Stone monolith)",
      "Double-headed serpent turquoise mosaic",
      "Colossal basalt statue of Coatlicue",
      "Feathered headdress attributed to Moctezuma"
    ],
    interesting_facts: [
      "Their island capital Tenochtitlan had over 200,000 inhabitants—larger and cleaner than Paris or London at the time—with daily garbage collection and public latrines.",
      "Chinampas agricultural 'floating islands' were so productive they yielded up to seven bumper crops of maize, beans, and squash every year.",
      "They founded their capital city where they spotted an eagle perched on a nopal cactus devouring a snake, an image featured on the modern Mexican national flag."
    ],
    coordinates: [19.4349, -99.1313], // Templo Mayor, Mexico City
    difficulty: "Medium",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piedra_del_Sol_en_el_MNA.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Piedra_del_Sol_en_el_MNA.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The monolithic Aztec Sun Stone (Calendar Stone) exhibited at the National Museum of Anthropology, Mexico"
    },
    clues: [
      "My people founded our magnificent island metropolis on Lake Texcoco after witnessing an eagle perched on a cactus.",
      "My agriculturalists engineered fertile artificial floating garden islands called chinampas that produced year-round crops.",
      "At the center of my capital stood the Templo Mayor, a towering twin pyramid dedicated to the gods of rain and war.",
      "My capital Tenochtitlan astounded Spanish conquistadors with its orderly causeways, bustling markets, and grand stone palaces."
    ],
    legendary_clue: "Upon the waters of Lake Texcoco, our eagle devoured the serpent where the twin shrines of Huitzilopochtli and Tlaloc touched the sky."
  },

  {
    id: "inca-civilization",
    name: "Inca Civilization (Tawantinsuyu)",
    region: "Americas",
    period: "c. 1438 – 1533 CE",
    capital: "Cusco",
    sites: ["Machu Picchu", "Ollantaytambo", "Sacsayhuamán", "Moray", "Choquequirao", "Písac"],
    rulers: ["Pachacuti Inca Yupanqui", "Túpac Inca Yupanqui", "Huayna Capac", "Atahualpa"],
    architecture: "Ashlar stone masonry without mortar, featuring multi-angled granite stones fitted so snugly that a knife blade cannot slip between them; trapezoidal doors and windows built to withstand earthquakes.",
    writing: "No formal alphabetic script; kept precise census, tax, and narrative data using the Quipu (intricate colored knotted cord records).",
    water_engineering: "Stepped agricultural stone terraces (andenes) clinging to steep Andean mountains, stone-lined irrigation canals fed by glacial melt, and circular agricultural microclimate depressions at Moray.",
    religion_culture: "Inti the Sun God, the Coricancha golden sun temple in Cusco, mummification of deceased Sapa Incas who continued to attend royal banquets, and the Qhapaq Ñan 40,000-kilometer road network with rope suspension bridges.",
    artifacts: [
      "Intricate Quipu knotted numerical cords",
      "Golden ceremonial Inca llama figurines",
      "Intihuatana sun-tethering stone at Machu Picchu",
      "Twelve-angled stone of Hatun Rumiyoc in Cusco"
    ],
    interesting_facts: [
      "Built the Qhapaq Ñan: a breathtaking 40,000-kilometer paved mountain highway network traversed on foot by relay runners (Chasquis) who carried fresh fish from the coast to the high Andes in days.",
      "The massive fortress wall of Sacsayhuamán contains megalithic granite blocks weighing up to 125 tons, cut and joined with seismic-resistant interlocking joints.",
      "Without the wheel or iron tools, they created the largest pre-Columbian empire in the Americas, stretching over 4,000 kilometers along the Andes spine."
    ],
    coordinates: [-13.1631, -72.545], // Machu Picchu
    difficulty: "Easy",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0",
      caption: "The mountain citadel of Machu Picchu perched amidst the high Andean cloud forest in Peru"
    },
    clues: [
      "I forged the largest empire in the pre-Columbian Americas along the formidable mountainous spine of the Andes.",
      "My stonemasons fitted giant multi-ton granite blocks together so tightly without mortar that not even a knife blade fits.",
      "Instead of a written alphabet, my administrators kept detailed financial and census records using knotted colored strings called quipus.",
      "My spectacular high-altitude citadels include the fortress of Sacsayhuamán and the iconic mountain ruins of Machu Picchu."
    ],
    legendary_clue: "Across 40,000 kilometers of Andean roads, our chasqui runners carried quipus past mortarless granite walls from Cusco to Inti's sky."
  }
];
