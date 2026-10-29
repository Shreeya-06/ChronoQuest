/**
 * ChronoQuest - Ancient Artifacts Dataset
 * Used in ARTIFACT HUNT mode.
 * Grounded in verified archaeological museum collections and Wikimedia Commons records.
 */

export const artifacts = [
  {
    id: "punch-marked-coin",
    name: "Imperial Punch-Marked Silver Karshapana",
    civilizationId: "mauryan-empire",
    civilizationName: "Mauryan Empire",
    period: "c. 3rd Century BCE",
    material: "Silver alloy with stamped punches",
    region: "Pataliputra, Northern & Central India",
    significance: "Standardized currency used across the vast Mauryan trade routes. Bears multiple official punch symbols including the sun, six-armed symbol, hill with crescent, and animals, representing imperial authorization without portraiture.",
    explanation: "Punch-marked coins (Karshapanas) were the principal silver coins of early historic India, heavily issued and standardized under the Mauryan Empire. Their widespread discovery from Gandhara to Southern India reflects a deeply integrated imperial monetary system described in Kautilya's Arthashastra.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silver_punch_mark_coin_of_the_Maurya_empire.jpg?width=800",
      source_name: "Wikimedia Commons / Classical Numismatic Group",
      source_url: "https://commons.wikimedia.org/wiki/File:Silver_punch_mark_coin_of_the_Maurya_empire.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Mauryan Empire", "Ancient Rome", "Babylonian Civilization", "Ancient Greece"]
  },
  {
    id: "dancing-girl",
    name: "The Dancing Girl of Mohenjo-daro",
    civilizationId: "indus-valley",
    civilizationName: "Indus Valley Civilization",
    period: "c. 2300 – 1750 BCE",
    material: "Lost-wax cast bronze",
    region: "Mohenjo-daro, Sindh (Indus Valley)",
    significance: "Demonstrates that Indus Valley metallurgists had mastered complex lost-wax bronze casting over 4,000 years ago. The figurine stands in a confident, naturalistic tribhanga posture with her arm stacked with bangles.",
    explanation: "Excavated in 1926 by archaeologist Ernest Mackay at Mohenjo-daro, this 10.5 cm bronze figurine startled the archaeological world because of its sophisticated dynamic posture and advanced metallurgy, proving early urban mastery of metal sculpture.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dancing_Girl_of_Mohenjo-daro.jpg?width=800",
      source_name: "Wikimedia Commons / National Museum New Delhi",
      source_url: "https://commons.wikimedia.org/wiki/File:Dancing_Girl_of_Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Indus Valley Civilization", "Sumerian Civilization", "Ancient Egypt", "Chola Dynasty"]
  },
  {
    id: "priest-king",
    name: "The Priest-King Bust",
    civilizationId: "indus-valley",
    civilizationName: "Indus Valley Civilization",
    period: "c. 2000 – 1900 BCE",
    material: "Fired steatite (soapstone) with traces of red pigment",
    region: "Mohenjo-daro, Sindh",
    significance: "Depicts a bearded dignitary wearing a fillet diadem on his forehead, an armlet, and a cloak draped over the left shoulder patterned with trefoil motifs that were once filled with red paste.",
    explanation: "Found in a brick house in Mohenjo-daro in 1927, this famous steatite sculpture reflects high societal status. Although dubbed the 'Priest-King' by Sir Mortimer Wheeler, whether the Indus civilization was ruled by priests, civic magistrates, or merchant councils remains an intriguing mystery.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Priest_King_Mohenjo-daro.jpg?width=800",
      source_name: "Wikimedia Commons / National Museum of Pakistan",
      source_url: "https://commons.wikimedia.org/wiki/File:Priest_King_Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Indus Valley Civilization", "Babylonian Civilization", "Ancient Egypt", "Persian Empire"]
  },
  {
    id: "lion-capital-ashoka",
    name: "The Lion Capital of Ashoka",
    civilizationId: "mauryan-empire",
    civilizationName: "Mauryan Empire",
    period: "c. 250 BCE",
    material: "Polished Chunar sandstone with lustrous Mauryan polish",
    region: "Sarnath, Uttar Pradesh, India",
    significance: "Carved under Emperor Ashoka at the site of the Buddha's First Sermon. Four Asiatic lions sit back-to-back atop an abacus featuring the Ashoka Chakra wheel, bull, horse, lion, and elephant.",
    explanation: "This monumental sculpture represents supreme imperial craftsmanship. The Ashoka Chakra wheel at its base was adopted into the center of the National Flag of India, and the four lions were adopted as the State Emblem of India in 1950.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarnath_Lion_Capital_of_Ashoka.jpg?width=800",
      source_name: "Wikimedia Commons / Archaeological Survey of India",
      source_url: "https://commons.wikimedia.org/wiki/File:Sarnath_Lion_Capital_of_Ashoka.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Mauryan Empire", "Gupta Empire", "Ancient Rome", "Persian Empire"]
  },
  {
    id: "nataraja-bronze",
    name: "Bronze Sculpture of Shiva Nataraja",
    civilizationId: "chola-dynasty",
    civilizationName: "Chola Dynasty",
    period: "c. 10th – 11th Century CE",
    material: "Lost-wax cast bronze (Panchaloha)",
    region: "Tamil Nadu, Southern India",
    significance: "World-renowned masterpiece depicting the cosmic dance of creation and destruction (Ananda Tandava), holding the drum of creation (damaru) and the fire of dissolution (agni) inside a flaming halo.",
    explanation: "Chola metal casters elevated bronze sculpting to divine heights during the 10th and 11th centuries. The Nataraja embodies deep metaphysical philosophy, celebrated globally by art historians and physicists as a metaphor for cosmic cosmic cycles.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiva_Nataraja_Chola_period.jpg?width=800",
      source_name: "Wikimedia Commons / Los Angeles County Museum of Art",
      source_url: "https://commons.wikimedia.org/wiki/File:Shiva_Nataraja_Chola_period.jpg",
      license: "Public Domain"
    },
    options: ["Chola Dynasty", "Vijayanagara Empire", "Indus Valley Civilization", "Ancient Greece"]
  },
  {
    id: "tutankhamun-mask",
    name: "Gold Funerary Mask of Tutankhamun",
    civilizationId: "ancient-egypt",
    civilizationName: "Ancient Egypt",
    period: "c. 1323 BCE (18th Dynasty, New Kingdom)",
    material: "Solid gold inlaid with lapis lazuli, carnelian, turquoise, and colored glass",
    region: "Valley of the Kings (KV62), Thebes, Egypt",
    significance: "Weighing over 10 kilograms of solid gold, this mask rested directly over the mummified face of King Tutankhamun to ensure his soul recognized his body in the underworld.",
    explanation: "Discovered nearly intact by Howard Carter in November 1922, the mask displays the nemes headdress, false beard of Osiris, and protective uraeus cobra and vulture goddesses (Wadjet and Nekhbet). It remains the foremost global icon of ancient Egypt.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tutankhamun_mask.jpg?width=800",
      source_name: "Wikimedia Commons / Egyptian Museum, Cairo",
      source_url: "https://commons.wikimedia.org/wiki/File:Tutankhamun_mask.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient Egypt", "Sumerian Civilization", "Ancient Rome", "Maya Civilization"]
  },
  {
    id: "rosetta-stone",
    name: "The Rosetta Stone",
    civilizationId: "ancient-egypt",
    civilizationName: "Ancient Egypt",
    period: "196 BCE (Ptolemaic Period)",
    material: "Granodiorite slab",
    region: "Rashid (Rosetta), Nile Delta, Egypt",
    significance: "Bears a royal decree inscribed in three distinct scripts: Egyptian Hieroglyphs (for priests), Demotic Egyptian (daily script), and Ancient Greek (administrative).",
    explanation: "Because the Ancient Greek text could be read, French scholar Jean-François Champollion deciphered the Egyptian hieroglyphic system in 1822, unlocking more than three millennia of previously unreadable ancient Egyptian inscriptions.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.jpg?width=800",
      source_name: "Wikimedia Commons / British Museum",
      source_url: "https://commons.wikimedia.org/wiki/File:Rosetta_Stone.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient Egypt", "Ancient Greece", "Babylonian Civilization", "Ancient Rome"]
  },
  {
    id: "standard-of-ur",
    name: "The Standard of Ur",
    civilizationId: "sumerian-civilization",
    civilizationName: "Sumerian Civilization",
    period: "c. 2600 BCE (Early Dynastic III)",
    material: "Hollow wooden box inlaid with lapis lazuli, shell, and red limestone in bitumen",
    region: "Royal Cemetery of Ur, Southern Mesopotamia (modern Iraq)",
    significance: "Two main mosaic panels depict 'War' on one side (four-wheeled chariots trampling enemies, spearmen, captives) and 'Peace' on the other (royal banquet, musicians playing lyres, tribute bearers).",
    explanation: "Excavated by Sir Leonard Woolley in the 1920s from a royal grave at Ur, this artifact provides an extraordinary visual window into the social hierarchy, military technology, and elite customs of early Sumerian city-states.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Standard_of_Ur_-_War_panel.jpg?width=800",
      source_name: "Wikimedia Commons / British Museum",
      source_url: "https://commons.wikimedia.org/wiki/File:Standard_of_Ur_-_War_panel.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Sumerian Civilization", "Ancient Egypt", "Indus Valley Civilization", "Persian Empire"]
  },
  {
    id: "code-of-hammurabi",
    name: "Stele of the Code of Hammurabi",
    civilizationId: "babylonian-civilization",
    civilizationName: "Babylonian Civilization",
    period: "c. 1750 BCE",
    material: "Carved black diorite / basalt monolith",
    region: "Babylon (excavated at Susa, Iran)",
    significance: "Features a top relief showing King Hammurabi receiving royal insignia from Shamash, the sun god of justice, followed by 282 legal clauses inscribed in Akkadian cuneiform.",
    explanation: "One of the earliest and most complete written legal codes in human history, establishing foundational legal concepts including presumption of innocence, scaled fines, and proportional retribution ('lex talionis').",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Code_of_Hammurabi_Louvre_Sb8.jpg?width=800",
      source_name: "Wikimedia Commons / Louvre Museum",
      source_url: "https://commons.wikimedia.org/wiki/File:Code_of_Hammurabi_Louvre_Sb8.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Babylonian Civilization", "Sumerian Civilization", "Ancient Egypt", "Ancient Greece"]
  },
  {
    id: "antikythera-mechanism",
    name: "The Antikythera Mechanism",
    civilizationId: "ancient-greece",
    civilizationName: "Ancient Greece",
    period: "c. 200 – 60 BCE",
    material: "Bronze gear assembly inside a wooden casing",
    region: "Off the coast of Antikythera island, Aegean Sea",
    significance: "Regarded as the world's first analog astronomical computer. Used over 30 intricate bronze differential gears to calculate and display the positions of the Sun, Moon, lunar phases, eclipse cycles, and Olympic athletic schedules.",
    explanation: "Discovered in 1901 by sponge divers in an ancient shipwreck. Its staggering mechanical complexity was not matched in Europe until the development of astronomical mechanical clocks in the 14th century CE.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg?width=800",
      source_name: "Wikimedia Commons / National Archaeological Museum, Athens",
      source_url: "https://commons.wikimedia.org/wiki/File:NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient Greece", "Ancient Rome", "Gupta Empire", "Ancient China"]
  },
  {
    id: "augustus-prima-porta",
    name: "Augustus of Prima Porta",
    civilizationId: "ancient-rome",
    civilizationName: "Ancient Rome",
    period: "c. 20 BCE – 15 CE",
    material: "White Carrara marble (originally painted in vibrant colors)",
    region: "Villa of Livia at Prima Porta, Rome",
    significance: "Iconic heroic statue of Emperor Augustus addressing his legions (adlocutio) with Cupid riding a dolphin at his feet, symbolizing divine descent from Venus and naval victory at Actium.",
    explanation: "Commissioned to project idealized imperial authority, youth, and military success across the Mediterranean. The relief on his breastplate commemorates the diplomatic return of captured Roman legionary eagles from Parthia.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue-Augustus.jpg?width=800",
      source_name: "Wikimedia Commons / Vatican Museums",
      source_url: "https://commons.wikimedia.org/wiki/File:Statue-Augustus.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient Rome", "Ancient Greece", "Persian Empire", "Mauryan Empire"]
  },
  {
    id: "terracotta-archer",
    name: "Kneeling Terracotta Archer",
    civilizationId: "ancient-china",
    civilizationName: "Ancient China",
    period: "c. 210 BCE (Qin Dynasty)",
    material: "High-fired painted earthenware terracotta",
    region: "Mausoleum of Qin Shi Huang, Lintong, Xi'an",
    significance: "Intricately detailed archer in firing position with square armor plates, hair braids, and textured shoe soles designed for traction on battlefield mud.",
    explanation: "Part of the vast underground army constructed to accompany the first Emperor of China into eternity. Each warrior displays distinctive facial features, indicating individualized artistic craftsmanship on an unprecedented industrial scale.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kneeling_Archer_Terracotta_Army.jpg?width=800",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Kneeling_Archer_Terracotta_Army.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Ancient China", "Indus Valley Civilization", "Maya Civilization", "Ancient Rome"]
  },
  {
    id: "cyrus-cylinder",
    name: "The Cyrus Cylinder",
    civilizationId: "persian-empire",
    civilizationName: "Persian Empire (Achaemenid)",
    period: "539 BCE",
    material: "Baked clay cylinder inscribed in Babylonian cuneiform",
    region: "Found in the ruins of Babylon, Mesopotamia",
    significance: "Declaration by King Cyrus the Great upon his bloodless conquest of Babylon, restoring temples, repatriating exiled peoples, and abolishing forced labor.",
    explanation: "Hailed widely as the earliest historical declaration of human rights and religious toleration, a replica is kept at the United Nations headquarters in New York as a symbol of compassionate statecraft.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus_Cylinder.jpg?width=800",
      source_name: "Wikimedia Commons / British Museum",
      source_url: "https://commons.wikimedia.org/wiki/File:Cyrus_Cylinder.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Persian Empire", "Babylonian Civilization", "Ancient Egypt", "Sumerian Civilization"]
  },
  {
    id: "pakal-jade-mask",
    name: "Jade Funerary Mask of King Pakal the Great",
    civilizationId: "maya-civilization",
    civilizationName: "Maya Civilization",
    period: "c. 683 CE (Classic Maya)",
    material: "Over 300 tesserae pieces of jadeite, with shell and obsidian eyes",
    region: "Temple of the Inscriptions, Palenque, Chiapas, Mexico",
    significance: "Preserved the sacred visage of K'inich Janaab Pakal I, ruler of the city-state of B'aakal (Palenque). Jade was revered by the Maya as the sacred stone of breath, maize, and eternal life.",
    explanation: "Discovered in 1952 by Mexican archaeologist Alberto Ruz Lhuillier deep within a secret vaulted tomb beneath Palenque's primary pyramid, marking one of the greatest archaeological breakthroughs in the Americas.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%A1scara_de_Pakal_MNA.jpg?width=800",
      source_name: "Wikimedia Commons / National Museum of Anthropology, Mexico",
      source_url: "https://commons.wikimedia.org/wiki/File:M%C3%A1scara_de_Pakal_MNA.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Maya Civilization", "Aztec Civilization", "Inca Civilization", "Ancient Egypt"]
  },
  {
    id: "aztec-sun-stone-artifact",
    name: "The Aztec Sun Stone (Calendar Stone)",
    civilizationId: "aztec-civilization",
    civilizationName: "Aztec Civilization (Mexica)",
    period: "c. 1502 – 1520 CE",
    material: "Carved olivine basalt monolith weighing 24 metric tons",
    region: "Templo Mayor, Tenochtitlan (modern Mexico City)",
    significance: "Depicts the face of the solar deity Tonatiuh surrounded by symbols of the four prior cosmic world creation ages (Suns) and the 20 day signs of the sacred tonalpohualli calendar.",
    explanation: "Unearthed in December 1790 beneath Mexico City's central Zócalo plaza, this immense 3.6-meter diameter stone is one of the most famous archaeological monuments of the Western Hemisphere.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piedra_del_Sol_en_el_MNA.jpg?width=800",
      source_name: "Wikimedia Commons / National Museum of Anthropology, Mexico",
      source_url: "https://commons.wikimedia.org/wiki/File:Piedra_del_Sol_en_el_MNA.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Aztec Civilization", "Maya Civilization", "Inca Civilization", "Ancient Rome"]
  },
  {
    id: "inca-quipu",
    name: "Knotted Accounting Record (Quipu / Khipu)",
    civilizationId: "inca-civilization",
    civilizationName: "Inca Civilization",
    period: "c. 1400 – 1532 CE",
    material: "Dyed spun and plied alpaca or cotton cords with positional knots",
    region: "Andean Highlands, Peru",
    significance: "An ingenious mathematical and narrative record-keeping system using decimal knot placements, colored strands, and cord hierarchy to record taxes, census figures, granary reserves, and military rosters without writing.",
    explanation: "Since the Incas did not employ a traditional alphabet, specialized quipu masters (quipucamayoc) interpreted these tactile cords with extraordinary precision, coordinating logistics across thousands of miles of rugged Andean peaks.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Inca_Quipu.jpg?width=800",
      source_name: "Wikimedia Commons / Larco Museum, Lima",
      source_url: "https://commons.wikimedia.org/wiki/File:Inca_Quipu.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Inca Civilization", "Maya Civilization", "Aztec Civilization", "Indus Valley Civilization"]
  }
];
