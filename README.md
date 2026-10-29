# 🏺 CHRONOQUEST
### *Decode the Past. Discover the Civilization.*

ChronoQuest is an educational guessing game and interactive archaeological exploration web application. Designed with the atmosphere of a dark ancient museum, antique parchment, burnished gold accents, and cinematic adventure gaming, it invites players to travel across ancient worlds, decode historical clues, examine real museum artifacts, and uncover lost civilizations.

---

## 🌟 Key Features

1. **Authentic Historical Grounding**:
   - Zero fictional or AI-hallucinated artifacts.
   - Built upon real public domain and Creative Commons records and photographs from Wikimedia Commons and world museums.
   - Clickable source citations and license details for every single visual element.

2. **Rich Multi-Mode Gameplay**:
   - 🏛️ **Guess the Civilization (Main Quest)**: Sequential progressive clues (Clues 1 to 4), countdown timer, dynamic scoring, instant archaeological explanations, and celebratory gold particles.
   - 🏺 **Artifact Hunt**: Inspect ancient coins, pottery, seals, and statues, and identify their civilization to unlock the comprehensive artifact dossier (material, period, provenance, significance).
   - 🗿 **Identify the Monument**: Test architectural knowledge on iconic world heritage structures (Pyramids, Colosseum, Parthenon, Brihadisvara, Hampi Chariot, Machu Picchu, etc.).
   - 🗺️ **Ancient World Map**: An interactive world map powered by Leaflet.js with antique cartography styling, custom golden seal pins, and instant links to civilization codices.
   - 📜 **Civilization Explorer**: Deep-dive encyclopedia across 15 ancient civilizations with horizontal multi-section cards (Location, Timeline, Architecture, Water & Engineering, Writing, Artifacts, Rulers, and Insights).
   - 🌅 **Daily Historical Quest**: Deterministic daily enigma with +200 bonus XP and streak tracking.

3. **Grounded AI Supporting Features**:
   - **AI Historian (💬 Ask the Historian)**: Grounded on local archaeological datasets with instant offline answers to questions like *"Why were Indus Valley cities famous for drainage?"* or *"What was the mystery of the Iron Pillar of Delhi?"*.
   - **Optional Gemini API Key**: Seamlessly connect your own Google Gemini API key if you want freeform expanded conversational depth.
   - **Contextual Clue Hints (💡 Get Hint)**: Generates subtle historical hints without spoiling the answer.

4. **Procedural Web Audio Sound Engine**:
   - Real-time Web Audio API synthesized stone taps, parchment rustles, ascending bronze chimes on correct answers, resonant stone drum thuds on wrong answers, timer ticks, and ancient victory fanfares.
   - 100% zero external audio download dependencies; completely reliable offline.

5. **Player Codex & Collectible Achievements**:
   - Track Explorer Rank (from *Neophyte Excavator* to *Grand Chronomaster*), XP progress, accuracy, discovered civilizations, and artifacts.
   - 10 Collectible Achievements with locked/unlocked visual badges and celebratory toast alerts.
   - Fully persistent via `localStorage`.

---

## 🏛️ Included Ancient Civilizations (15+)

- **India & South Asia**:
  - Indus Valley Civilization (Mohenjo-daro, Harappa, Lothal, Dholavira)
  - Mauryan Empire (Pataliputra, Ashoka edicts, Sanchi Stupa)
  - Gupta Empire (Golden Age, Nalanda, Iron Pillar of Delhi)
  - Chola Dynasty (Brihadisvara Temple, Nataraja bronzes, blue-water navy)
  - Vijayanagara Empire (Hampi, Stone Chariot, Krishnadevaraya)
- **North Africa**:
  - Ancient Egypt (Pyramids of Giza, Karnak, Tutankhamun, Rosetta Stone)
- **Mesopotamia**:
  - Sumerian Civilization (Ziggurat of Ur, cuneiform, Standard of Ur)
  - Babylonian Civilization (Ishtar Gate, Code of Hammurabi, Hanging Gardens)
- **Mediterranean**:
  - Ancient Greece (Parthenon, democracy, Antikythera Mechanism)
  - Ancient Rome (Colosseum, Pantheon, Roman concrete, Pax Romana)
- **East Asia**:
  - Ancient China (Terracotta Army, Great Wall, oracle bones)
- **Middle East**:
  - Persian Empire / Achaemenid (Persepolis, Cyrus Cylinder, Qanats)
- **The Americas**:
  - Maya Civilization (Chichen Itza, Tikal, Palenque, zero glyph)
  - Aztec Civilization (Tenochtitlan, Templo Mayor, Sun Stone, chinampas)
  - Inca Civilization (Machu Picchu, quipus, mortarless ashlar masonry)

---

## 🚀 How to Run ChronoQuest

Because ChronoQuest is built as a zero-dependency, modular client-side application using standard modern ES modules:

### Method 1: Using Python's Built-in HTTP Server (Recommended)
Open a terminal in the `chrono_quest` directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Direct Browser Launch
Simply open `index.html` in your browser. (Note: For local ES modules, modern browsers typically prefer a local HTTP server like Python's `http.server` to satisfy CORS origin policies for local module imports).

---

## 📂 Architecture & Data Structure

```
chrono_quest/
├── index.html                   # Semantic HTML app shell, screens, and modals
├── README.md                    # Project documentation
├── styles/
│   ├── main.css                 # Base theme, obsidian palette, typography, nav
│   ├── components.css           # Game arena, clue cards, Leaflet popups, Explorer
│   └── animations.css           # Gold glows, radar pulses, celebration particles
├── data/
│   ├── civilizations.js         # 15+ civilizations with complete historical dossiers
│   ├── artifacts.js             # 16+ authentic artifacts with museum provenance
│   ├── monuments.js             # 13+ ancient monuments with architectural details
│   └── questions.js             # Question bank for Easy, Medium, Hard, and Legendary
└── app/
    ├── main.js                  # App coordinator and view routing
    ├── game.js                  # Game loop, scoring, timer, progressive clues
    ├── map.js                   # Leaflet interactive antique cartography
    ├── explorer.js              # Civilization encyclopedia
    ├── storage.js               # Player profile, XP, achievements, persistence
    ├── audio.js                 # Procedural Web Audio API sound engine
    ├── particles.js             # Canvas gold dust & celebration particle engine
    └── ai.js                    # Grounded AI Historian & Contextual Hint engine
```

### Adding New Civilizations & Questions
To add a new civilization, simply append an entry to `data/civilizations.js` following the schema:
```javascript
{
  id: "phoenician-civilization",
  name: "Phoenician Civilization",
  region: "Mediterranean",
  period: "c. 1500 – 300 BCE",
  capital: "Byblos, Tyre, Sidon",
  sites: ["Byblos", "Tyre", "Carthage"],
  rulers: ["Hiram I", "Dido (Queen of Carthage)"],
  architecture: "Harbor fortifications, dry docks, ashlar masonry...",
  writing: "Phoenician alphabet (parent of Greek, Latin, and Aramaic scripts)...",
  water_engineering: "Advanced rainwater cisterns, harbor basins...",
  religion_culture: "Melqart, maritime trading outposts, Tyrian purple dye...",
  artifacts: ["Tyrian purple amphorae", "Phoenician glass bead necklaces"],
  interesting_facts: ["Invented the first widespread phonetic alphabet..."],
  coordinates: [33.2705, 35.2038],
  difficulty: "Medium",
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/...",
    source_name: "Wikimedia Commons",
    source_url: "https://commons.wikimedia.org/wiki/File:...",
    license: "Creative Commons Attribution-ShareAlike 3.0"
  },
  clues: [ ... ],
  legendary_clue: "..."
}
```
No application or game loop code needs to be modified when extending the datasets!

---

## 📜 Historical Accuracy & Verification
- All archaeological site names, ruler lists, writing systems, and engineering achievements follow peer-reviewed historical consensus.
- Dates are presented with standard archaeological approximations (`c.` for circa, `BCE` / `CE`).
- Open questions (such as the governance of the Indus Valley or undeciphered scripts) are explicitly characterized as unresolved archaeological questions rather than fabricated assertions.
