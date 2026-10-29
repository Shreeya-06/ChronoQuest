/**
 * ChronoQuest - Storage, Player Profile & Achievements System
 * Manages player state, XP progression, explorer ranks, and unlocked achievements.
 * Fully persistent across sessions via localStorage.
 */

export const ACHIEVEMENTS_LIST = [
  {
    id: "first_discovery",
    icon: "🏺",
    title: "First Discovery",
    description: "Identify your first ancient civilization correctly.",
    rewardXP: 50
  },
  {
    id: "world_explorer",
    icon: "🌍",
    title: "World Explorer",
    description: "Discover civilizations from at least 5 distinct global regions.",
    rewardXP: 150
  },
  {
    id: "history_buff",
    icon: "📜",
    title: "History Buff",
    description: "Answer 20 historical questions correctly.",
    rewardXP: 200
  },
  {
    id: "artifact_hunter",
    icon: "🔎",
    title: "Artifact Hunter",
    description: "Identify 10 ancient artifacts in the Artifact Hunt.",
    rewardXP: 250
  },
  {
    id: "monument_master",
    icon: "🏛️",
    title: "Monument Master",
    description: "Successfully identify 10 ancient monuments.",
    rewardXP: 250
  },
  {
    id: "civilization_master",
    icon: "👑",
    title: "Civilization Master",
    description: "Uncover and identify all 15 ancient civilizations.",
    rewardXP: 500
  },
  {
    id: "time_traveller",
    icon: "⏳",
    title: "Time Traveller",
    description: "Complete a full 5-round quest without using any hints.",
    rewardXP: 200
  },
  {
    id: "lightning_scholar",
    icon: "⚡",
    title: "Lightning Scholar",
    description: "Answer a question correctly with more than 25 seconds remaining.",
    rewardXP: 100
  },
  {
    id: "daily_chronicler",
    icon: "🌅",
    title: "Daily Chronicler",
    description: "Complete 3 Daily Quests.",
    rewardXP: 300
  },
  {
    id: "polymath",
    icon: "🧠",
    title: "Polymath of Antiquity",
    description: "Complete a game on Hard or Legendary with 80%+ accuracy.",
    rewardXP: 400
  }
];

export const RANKS = [
  { level: 1, title: "Neophyte Excavator", minXP: 0 },
  { level: 2, title: "Trowel Apprentice", minXP: 200 },
  { level: 3, title: "Relic Seeker", minXP: 500 },
  { level: 4, title: "Parchment Decoder", minXP: 900 },
  { level: 5, title: "Temple Cartographer", minXP: 1400 },
  { level: 6, title: "Royal Epigraphist", minXP: 2000 },
  { level: 7, title: "Time Explorer", minXP: 2800 },
  { level: 8, title: "High Archaeologist", minXP: 3800 },
  { level: 9, title: "Master of Antiquity", minXP: 5000 },
  { level: 10, title: "Grand Chronomaster", minXP: 7000 }
];

const DEFAULT_PROFILE = {
  name: "SHREEYA",
  xp: 0,
  level: 1,
  rank: "Neophyte Excavator",
  questionsCompleted: 0,
  correctAnswers: 0,
  highScore: 0,
  discoveredCivilizations: [],
  discoveredRegions: [],
  discoveredArtifacts: [],
  discoveredMonuments: [],
  unlockedAchievements: [],
  dailyQuestsCompleted: 0,
  lastDailyDate: null,
  dailyStreak: 0
};

class StorageManager {
  constructor() {
    this.storageKey = 'chronoquest_profile_v1';
    this.profile = this.loadProfile();
  }

  loadProfile() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(data) };
      }
    } catch (e) {
      console.warn("Storage load failed, using default:", e);
    }
    return { ...DEFAULT_PROFILE };
  }

  saveProfile() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.profile));
    } catch (e) {
      console.warn("Storage save failed:", e);
    }
  }

  getProfile() {
    // Recalculate rank and level
    this.updateRank();
    return this.profile;
  }

  setName(name) {
    if (name && name.trim()) {
      this.profile.name = name.trim().toUpperCase().slice(0, 16);
      this.saveProfile();
    }
  }

  updateRank() {
    let currentRank = RANKS[0];
    for (let r of RANKS) {
      if (this.profile.xp >= r.minXP) {
        currentRank = r;
      }
    }
    this.profile.level = currentRank.level;
    this.profile.rank = currentRank.title;
  }

  addXP(amount) {
    const oldLevel = this.profile.level;
    this.profile.xp = Math.max(0, this.profile.xp + amount);
    this.updateRank();
    this.saveProfile();

    return {
      totalXP: this.profile.xp,
      level: this.profile.level,
      rank: this.profile.rank,
      leveledUp: this.profile.level > oldLevel
    };
  }

  recordAnswer(isCorrect, civId, region, timeRemaining = 0, hintsUsed = 0) {
    this.profile.questionsCompleted++;
    if (isCorrect) {
      this.profile.correctAnswers++;
      if (civId && !this.profile.discoveredCivilizations.includes(civId)) {
        this.profile.discoveredCivilizations.push(civId);
      }
      if (region && !this.profile.discoveredRegions.includes(region)) {
        this.profile.discoveredRegions.push(region);
      }
    }
    this.saveProfile();

    // Check automatic achievements
    const newlyUnlocked = this.checkAchievements({
      timeRemaining,
      hintsUsed,
      lastAnswerCorrect: isCorrect
    });

    return newlyUnlocked;
  }

  recordArtifact(artifactId) {
    if (artifactId && !this.profile.discoveredArtifacts.includes(artifactId)) {
      this.profile.discoveredArtifacts.push(artifactId);
      this.saveProfile();
      return this.checkAchievements({});
    }
    return [];
  }

  recordMonument(monumentId) {
    if (monumentId && !this.profile.discoveredMonuments.includes(monumentId)) {
      this.profile.discoveredMonuments.push(monumentId);
      this.saveProfile();
      return this.checkAchievements({});
    }
    return [];
  }

  recordHighScore(score) {
    if (score > this.profile.highScore) {
      this.profile.highScore = score;
      this.saveProfile();
    }
  }

  recordDailyQuest() {
    this.profile.dailyQuestsCompleted++;
    const today = new Date().toISOString().slice(0, 10);
    this.profile.lastDailyDate = today;
    this.profile.dailyStreak++;
    this.addXP(200);
    this.saveProfile();
    return this.checkAchievements({ dailyCompleted: true });
  }

  checkAchievements(context = {}) {
    const unlocked = [];

    const tryUnlock = (id) => {
      if (!this.profile.unlockedAchievements.includes(id)) {
        this.profile.unlockedAchievements.push(id);
        const ach = ACHIEVEMENTS_LIST.find(a => a.id === id);
        if (ach) {
          this.profile.xp += ach.rewardXP;
          unlocked.push(ach);
        }
      }
    };

    // First Discovery
    if (this.profile.discoveredCivilizations.length >= 1) {
      tryUnlock("first_discovery");
    }

    // World Explorer (5 regions)
    if (this.profile.discoveredRegions.length >= 5) {
      tryUnlock("world_explorer");
    }

    // History Buff (20 correct)
    if (this.profile.correctAnswers >= 20) {
      tryUnlock("history_buff");
    }

    // Artifact Hunter (10 artifacts)
    if (this.profile.discoveredArtifacts.length >= 10) {
      tryUnlock("artifact_hunter");
    }

    // Monument Master (10 monuments)
    if (this.profile.discoveredMonuments.length >= 10) {
      tryUnlock("monument_master");
    }

    // Civilization Master (15 civilizations)
    if (this.profile.discoveredCivilizations.length >= 15) {
      tryUnlock("civilization_master");
    }

    // Lightning Scholar (>25s remaining on correct answer)
    if (context.lastAnswerCorrect && context.timeRemaining >= 25) {
      tryUnlock("lightning_scholar");
    }

    // Time Traveller (completed without hints)
    if (context.gameWonWithoutHints) {
      tryUnlock("time_traveller");
    }

    // Daily Chronicler (3 daily quests)
    if (this.profile.dailyQuestsCompleted >= 3) {
      tryUnlock("daily_chronicler");
    }

    // Polymath (90%+ on hard/legendary)
    if (context.polymathQualified) {
      tryUnlock("polymath");
    }

    if (unlocked.length > 0) {
      this.updateRank();
      this.saveProfile();
    }

    return unlocked;
  }

  getAccuracy() {
    if (this.profile.questionsCompleted === 0) return 0;
    return Math.round((this.profile.correctAnswers / this.profile.questionsCompleted) * 100);
  }

  resetProgress() {
    this.profile = { ...DEFAULT_PROFILE };
    this.saveProfile();
  }
}

export const storage = new StorageManager();
