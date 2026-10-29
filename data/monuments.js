/**
 * ChronoQuest - Ancient Monuments Dataset
 * Used in IDENTIFY THE MONUMENT mode.
 * Real architectural photographs from Wikimedia Commons with historical dossiers.
 */

export const monuments = [
  {
    id: "great-bath",
    name: "The Great Bath of Mohenjo-daro",
    civilizationId: "indus-valley",
    civilizationName: "Indus Valley Civilization",
    location: "Larkana District, Sindh, Pakistan",
    era: "c. 2500 BCE",
    description: "A watertight public basin measuring 12 by 7 meters with brick steps descending into it, waterproofed with finely fitted gypsum plaster and a thick backing of natural bitumen (tar). Widely interpreted as a sacred bathing tank for ritual purification ceremonies.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohenjo-daro.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Mohenjo-daro.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Indus Valley Civilization", "Sumerian Civilization", "Ancient Egypt", "Ancient Rome"]
  },
  {
    id: "sanchi-stupa",
    name: "The Great Stupa at Sanchi",
    civilizationId: "mauryan-empire",
    civilizationName: "Mauryan Empire",
    location: "Raisen District, Madhya Pradesh, India",
    era: "Founded c. 3rd Century BCE by Emperor Ashoka",
    description: "One of the oldest stone structures in India. It consists of a hemispherical brick dome over the relics of the Buddha, crowned by a stone parasol (chhatri), surrounded by four intricately carved stone toranas (gateway arches) depicting Buddhist Jataka tales.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi_Stupa_from_Eastern_gate%2C_Madhya_Pradesh.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Sanchi_Stupa_from_Eastern_gate,_Madhya_Pradesh.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Mauryan Empire", "Gupta Empire", "Chola Dynasty", "Ancient China"]
  },
  {
    id: "brihadeeswarar-temple",
    name: "Brihadisvara Temple (Peruvudaiyar Kovil)",
    civilizationId: "chola-dynasty",
    civilizationName: "Chola Dynasty",
    location: "Thanjavur, Tamil Nadu, India",
    era: "Completed in 1010 CE under Rajaraja Chola I",
    description: "A pinnacle of Dravidian granite architecture. Its soaring pyramidal tower (Vimana) rises 66 meters into the sky without mortar, crowned with an 80-ton single granite stone capstone (kumbam), accompanied by a massive monolithic Nandi bull.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thanjavur_Brihadisvara_Temple.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Thanjavur_Brihadisvara_Temple.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Chola Dynasty", "Vijayanagara Empire", "Gupta Empire", "Mauryan Empire"]
  },
  {
    id: "stone-chariot-hampi",
    name: "The Stone Chariot at Vittala Temple",
    civilizationId: "vijayanagara-empire",
    civilizationName: "Vijayanagara Empire",
    location: "Hampi, Karnataka, India",
    era: "c. 16th Century CE",
    description: "An awe-inspiring ornamental shrine dedicated to Garuda (the eagle vahana of Vishnu), sculpted in the shape of a procession chariot. Built of finely interlocking granite slabs with stone wheels that could originally turn on their axles.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone_Chariot%2C_Hampi.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Stone_Chariot,_Hampi.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Vijayanagara Empire", "Chola Dynasty", "Indus Valley Civilization", "Ancient Greece"]
  },
  {
    id: "giza-pyramids",
    name: "The Great Pyramids of Giza",
    civilizationId: "ancient-egypt",
    civilizationName: "Ancient Egypt",
    location: "Giza Necropolis, near Cairo, Egypt",
    era: "c. 2560 BCE (Old Kingdom, 4th Dynasty)",
    description: "The Great Pyramid of Pharaoh Khufu, built from an estimated 2.3 million limestone and granite blocks weighing an average of 2.5 tons each. It stood as the tallest man-made structure on Earth for over 3,800 years and is the only surviving wonder of the original Seven Wonders of the Ancient World.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:All_Gizah_Pyramids.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient Egypt", "Sumerian Civilization", "Babylonian Civilization", "Maya Civilization"]
  },
  {
    id: "ziggurat-of-ur",
    name: "The Great Ziggurat of Ur",
    civilizationId: "sumerian-civilization",
    civilizationName: "Sumerian Civilization",
    location: "Dhi Qar Province, southern Iraq",
    era: "c. 2100 BCE (Third Dynasty of Ur)",
    description: "A monumental stepped mud-brick pyramid built by King Ur-Nammu dedicated to the moon god Nanna. Its three terraces were accessed by a grand triple staircase converging at a gatehouse leading to the high temple.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziggurat_of_ur.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ziggurat_of_ur.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Sumerian Civilization", "Babylonian Civilization", "Ancient Egypt", "Persian Empire"]
  },
  {
    id: "ishtar-gate",
    name: "The Ishtar Gate of Babylon",
    civilizationId: "babylonian-civilization",
    civilizationName: "Babylonian Civilization",
    location: "Babylon, Mesopotamia (reconstructed in Berlin)",
    era: "c. 575 BCE under Nebuchadnezzar II",
    description: "The eighth inner gate to the city of Babylon, constructed with vibrant blue glazed ceramic bricks and decorated with alternating rows of bas-relief dragons (mušḫuššu) and wild cattle (aurochs), leading into the grand Processional Way.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar_Gate_at_Pergamon_Museum.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_at_Pergamon_Museum.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Babylonian Civilization", "Persian Empire", "Ancient Rome", "Sumerian Civilization"]
  },
  {
    id: "parthenon-athens",
    name: "The Parthenon on the Acropolis",
    civilizationId: "ancient-greece",
    civilizationName: "Ancient Greece",
    location: "Acropolis, Athens, Greece",
    era: "Completed in 438 BCE under Pericles",
    description: "The supreme monument of classical Doric architecture, constructed of Pentelic marble. Dedicated to Athena Parthenos, it featured subtle optical curvature along its stylobate and columns (entasis) to create an impression of ideal symmetry and strength.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg",
      license: "Creative Commons Attribution-ShareAlike 2.0"
    },
    options: ["Ancient Greece", "Ancient Rome", "Persian Empire", "Gupta Empire"]
  },
  {
    id: "colosseum-rome",
    name: "The Colosseum (Flavian Amphitheatre)",
    civilizationId: "ancient-rome",
    civilizationName: "Ancient Rome",
    location: "Rome, Italy",
    era: "Inaugurated 80 CE under Emperor Titus",
    description: "The largest amphitheater ever built in the ancient world, constructed from travertine limestone, tuff stone, and brick-faced volcanic concrete. Seated an estimated 50,000 to 80,000 spectators for gladiatorial combats and public spectacles.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo_2020.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg",
      license: "Creative Commons Attribution-ShareAlike 4.0"
    },
    options: ["Ancient Rome", "Ancient Greece", "Persian Empire", "Babylonian Civilization"]
  },
  {
    id: "terracotta-pit",
    name: "Mausoleum Pit 1 of Qin Shi Huang",
    civilizationId: "ancient-china",
    civilizationName: "Ancient China",
    location: "Lintong District, Xi'an, Shaanxi, China",
    era: "c. 210 BCE",
    description: "An underground military formation of over 6,000 life-sized terracotta soldiers, cavalry officers, war horses, and wooden chariots arranged in tactical battle formation to protect China's First Emperor in the spirit world.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Terracotta_Army%2C_View_of_Pit_1.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Ancient China", "Mauryan Empire", "Inca Civilization", "Ancient Egypt"]
  },
  {
    id: "persepolis-apadana",
    name: "The Apadana Palace at Persepolis",
    civilizationId: "persian-empire",
    civilizationName: "Persian Empire (Achaemenid)",
    location: "Fars Province, Iran",
    era: "Founded c. 518 BCE by Darius the Great",
    description: "The grand ceremonial hypostyle reception hall of the Persian kings, supported by 72 soaring stone columns 20 meters tall crowned with double-bull capitals. Its grand monumental stairways are lined with exquisite bas-reliefs showing 23 subject nations bringing New Year tributes.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis_stairs_of_the_Apadana_relief.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Persepolis_stairs_of_the_Apadana_relief.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Persian Empire", "Babylonian Civilization", "Ancient Greece", "Ancient Egypt"]
  },
  {
    id: "el-castillo",
    name: "El Castillo (Temple of Kukulcan)",
    civilizationId: "maya-civilization",
    civilizationName: "Maya Civilization",
    location: "Chichen Itza, Yucatan, Mexico",
    era: "c. 9th – 12th Century CE",
    description: "A monumental 30-meter step pyramid constructed with astronomical precision. It has 91 steps on each of its 4 sides plus the top platform, totaling 365 steps—one for each day of the solar year. During the equinoxes, an undulating serpent shadow creeps down the staircase.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:Chichen_Itza_3.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Maya Civilization", "Aztec Civilization", "Inca Civilization", "Ancient Egypt"]
  },
  {
    id: "machu-picchu-citadel",
    name: "The Mountain Citadel of Machu Picchu",
    civilizationId: "inca-civilization",
    civilizationName: "Inca Civilization",
    location: "Cusco Region, Urubamba Province, Peru",
    era: "c. 1450 CE under Emperor Pachacuti",
    description: "Perched dramatically on a narrow Andean mountain ridge 2,430 meters above sea level, featuring polished dry-stone walls, trapezoidal earthquake-resistant windows, agricultural terraces, and sacred shrines like the Intihuatana hitching stone of the sun.",
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg?width=900",
      source_name: "Wikimedia Commons",
      source_url: "https://commons.wikimedia.org/wiki/File:80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg",
      license: "Creative Commons Attribution-ShareAlike 3.0"
    },
    options: ["Inca Civilization", "Maya Civilization", "Aztec Civilization", "Chola Dynasty"]
  }
];
