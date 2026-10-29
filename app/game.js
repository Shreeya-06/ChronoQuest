/**
 * ChronoQuest - Core Game Controller
 * Handles round orchestration, progressive clue reveals, countdown timer,
 * scoring, answer validation, hint penalties, and game modes:
 * - Guess the Civilization (Main Quest)
 * - Artifact Hunt
 * - Identify the Monument
 * - Daily Quest
 */

import { questions } from '../data/questions.js';
import { artifacts } from '../data/artifacts.js';
import { monuments } from '../data/monuments.js';
import { civilizations } from '../data/civilizations.js';
import { audio } from './audio.js';
import { particles } from './particles.js';
import { storage } from './storage.js';
import { aiHistorian } from './ai.js';

export class GameController {
  constructor(callbacks = {}) {
    this.callbacks = callbacks; // onStateChange, onGameEnd, etc.
    this.mode = 'civilization'; // 'civilization' | 'artifact' | 'monument' | 'daily'
    this.difficulty = 'Medium'; // 'Easy' | 'Medium' | 'Hard' | 'Legendary'
    this.roundsPerGame = 5;

    // Active session state
    this.currentRoundIndex = 0;
    this.roundDataList = [];
    this.currentRound = null;
    this.revealedCluesCount = 1;
    this.hintsUsedInRound = 0;
    this.hintsUsedInGame = 0;
    this.score = 0;
    this.roundPointsEarned = 0;
    this.sessionCorrectCount = 0;
    this.timerSeconds = 30;
    this.defaultTimer = 30;
    this.timerInterval = null;
    this.isAnswerLocked = false;
    this.gameStartTime = 0;
    this.totalTimeTaken = 0;
  }

  startSession(mode = 'civilization', difficulty = 'Medium') {
    this.mode = mode;
    this.difficulty = difficulty;
    this.currentRoundIndex = 0;
    this.score = 0;
    this.sessionCorrectCount = 0;
    this.hintsUsedInGame = 0;
    this.gameStartTime = Date.now();

    // Configure timer per difficulty
    if (this.difficulty === 'Easy') this.defaultTimer = 40;
    else if (this.difficulty === 'Medium') this.defaultTimer = 30;
    else if (this.difficulty === 'Hard') this.defaultTimer = 20;
    else if (this.difficulty === 'Legendary') this.defaultTimer = 15;

    // Prepare randomized questions based on mode
    this.prepareRounds();
    this.loadRound(0);
  }

  prepareRounds() {
    this.roundDataList = [];

    if (this.mode === 'civilization') {
      let pool = questions.filter(q => q.difficulty === this.difficulty);
      if (pool.length === 0) pool = questions;
      this.roundDataList = this.shuffle([...pool]).slice(0, this.roundsPerGame);
    } else if (this.mode === 'artifact') {
      const shuffledArtifacts = this.shuffle([...artifacts]).slice(0, this.roundsPerGame);
      this.roundDataList = shuffledArtifacts.map((art, idx) => ({
        id: art.id,
        mode: 'artifact',
        subject: art.name,
        question: `Which ancient civilization crafted this historical artifact?`,
        civilizationId: art.civilizationId,
        civilizationName: art.civilizationName,
        image: art.image,
        clues: [
          `Material composition: ${art.material}`,
          `Historical period: ${art.period}`,
          `Geographical provenance: ${art.region}`,
          `Archaeological significance: ${art.significance}`
        ],
        options: this.shuffle([...art.options]),
        explanation: art.explanation,
        rawArtifact: art
      }));
    } else if (this.mode === 'monument') {
      const shuffledMonuments = this.shuffle([...monuments]).slice(0, this.roundsPerGame);
      this.roundDataList = shuffledMonuments.map(mon => ({
        id: mon.id,
        mode: 'monument',
        subject: mon.name,
        question: `Which civilization built this monumental archaeological wonder?`,
        civilizationId: mon.civilizationId,
        civilizationName: mon.civilizationName,
        image: mon.image,
        clues: [
          `Location: ${mon.location}`,
          `Construction era: ${mon.era}`,
          `Architectural feature: ${mon.description.split('.')[0]}`
        ],
        options: this.shuffle([...mon.options]),
        explanation: mon.description,
        rawMonument: mon
      }));
    } else if (this.mode === 'daily') {
      // Deterministic selection based on today's date
      const dateStr = new Date().toISOString().slice(0, 10);
      let hash = 0;
      for (let i = 0; i < dateStr.length; i++) {
        hash = (hash << 5) - hash + dateStr.charCodeAt(i);
        hash |= 0;
      }
      const qIndex = Math.abs(hash) % questions.length;
      const dailyQ = questions[qIndex];
      this.roundDataList = [{
        ...dailyQ,
        isDaily: true,
        question: `🌅 DAILY QUEST: Which civilization is revealed by today's historical challenge?`
      }];
      this.roundsPerGame = 1;
    }
  }

  loadRound(index) {
    this.currentRoundIndex = index;
    this.currentRound = this.roundDataList[index];
    this.revealedCluesCount = 1;
    this.hintsUsedInRound = 0;
    this.isAnswerLocked = false;
    this.timerSeconds = this.defaultTimer;

    // Start timer
    this.startTimer();

    if (this.callbacks.onRoundStart) {
      this.callbacks.onRoundStart(this.getRoundViewData());
    }
  }

  startTimer() {
    this.clearTimer();
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;

      if (this.timerSeconds <= 5 && this.timerSeconds > 0) {
        audio.playTick();
      }

      if (this.callbacks.onTimerTick) {
        this.callbacks.onTimerTick(this.timerSeconds, this.defaultTimer);
      }

      if (this.timerSeconds <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  revealNextClue() {
    if (this.isAnswerLocked || !this.currentRound) return;
    if (this.revealedCluesCount < this.currentRound.clues.length) {
      this.revealedCluesCount++;
      audio.playParchment();
      if (this.callbacks.onClueReveal) {
        this.callbacks.onClueReveal(this.revealedCluesCount, this.calculatePotentialPoints());
      }
    }
  }

  useHint() {
    if (this.isAnswerLocked || !this.currentRound) return null;
    this.hintsUsedInRound++;
    this.hintsUsedInGame++;

    // Generate contextual hint from AI Historian
    const civ = civilizations.find(c => c.id === this.currentRound.civilizationId);
    const hintText = aiHistorian.generateHint(this.currentRound, civ);
    audio.playParchment();

    if (this.callbacks.onHintUsed) {
      this.callbacks.onHintUsed(hintText, this.calculatePotentialPoints());
    }
    return hintText;
  }

  calculatePotentialPoints() {
    // Scoring scale:
    // Clue 1 -> 100 pts
    // Clue 2 -> 75 pts
    // Clue 3 -> 50 pts
    // Clue 4 -> 25 pts
    let base = 100;
    if (this.revealedCluesCount === 2) base = 75;
    else if (this.revealedCluesCount === 3) base = 50;
    else if (this.revealedCluesCount >= 4) base = 25;

    // Hint penalty: -15 pts per hint
    base -= (this.hintsUsedInRound * 15);

    // Legendary mode bonus multiplier (2x)
    if (this.difficulty === 'Legendary') base *= 2;

    return Math.max(10, base);
  }

  submitAnswer(selectedAnswer) {
    if (this.isAnswerLocked) return;
    this.isAnswerLocked = true;
    this.clearTimer();

    const isCorrect = (selectedAnswer.trim().toLowerCase() === this.currentRound.civilizationName.trim().toLowerCase());
    let pointsGained = 0;
    let newlyUnlocked = [];

    const civData = civilizations.find(c => c.id === this.currentRound.civilizationId);
    const region = civData ? civData.region : '';

    if (isCorrect) {
      pointsGained = this.calculatePotentialPoints();
      this.score += pointsGained;
      this.sessionCorrectCount++;
      audio.playCorrect();
      particles.burst();

      // Update persistent storage
      storage.addXP(pointsGained);
      newlyUnlocked = storage.recordAnswer(true, this.currentRound.civilizationId, region, this.timerSeconds, this.hintsUsedInRound);

      if (this.currentRound.mode === 'artifact') {
        const artUnlocked = storage.recordArtifact(this.currentRound.id);
        newlyUnlocked.push(...artUnlocked);
      } else if (this.currentRound.mode === 'monument') {
        const monUnlocked = storage.recordMonument(this.currentRound.id);
        newlyUnlocked.push(...monUnlocked);
      }

      if (this.currentRound.isDaily) {
        const dailyUnlocked = storage.recordDailyQuest();
        newlyUnlocked.push(...dailyUnlocked);
      }
    } else {
      // Wrong answer penalty (-10 pts)
      pointsGained = -10;
      this.score = Math.max(0, this.score - 10);
      audio.playWrong();
      storage.recordAnswer(false, this.currentRound.civilizationId, region, 0, this.hintsUsedInRound);
    }

    if (this.callbacks.onAnswerResult) {
      this.callbacks.onAnswerResult({
        isCorrect,
        selectedAnswer,
        correctAnswer: this.currentRound.civilizationName,
        pointsGained,
        currentTotalScore: this.score,
        explanation: this.currentRound.explanation,
        rawArtifact: this.currentRound.rawArtifact,
        rawMonument: this.currentRound.rawMonument,
        newlyUnlocked
      });
    }
  }

  handleTimeout() {
    if (this.isAnswerLocked) return;
    this.isAnswerLocked = true;
    this.clearTimer();
    audio.playTimeout();

    const civData = civilizations.find(c => c.id === this.currentRound.civilizationId);
    const region = civData ? civData.region : '';
    storage.recordAnswer(false, this.currentRound.civilizationId, region, 0, this.hintsUsedInRound);

    if (this.callbacks.onTimeout) {
      this.callbacks.onTimeout({
        correctAnswer: this.currentRound.civilizationName,
        explanation: this.currentRound.explanation,
        currentTotalScore: this.score
      });
    }
  }

  nextRound() {
    if (this.currentRoundIndex + 1 < this.roundDataList.length) {
      this.loadRound(this.currentRoundIndex + 1);
    } else {
      this.endGame();
    }
  }

  endGame() {
    this.clearTimer();
    this.totalTimeTaken = Math.round((Date.now() - this.gameStartTime) / 1000);
    storage.recordHighScore(this.score);

    // Check game-end achievements
    const gameWonWithoutHints = (this.sessionCorrectCount === this.roundsPerGame && this.hintsUsedInGame === 0);
    const accuracy = Math.round((this.sessionCorrectCount / this.roundsPerGame) * 100);
    const polymathQualified = (accuracy >= 80 && (this.difficulty === 'Hard' || this.difficulty === 'Legendary'));

    const endAchievements = storage.checkAchievements({
      gameWonWithoutHints,
      polymathQualified
    });

    audio.playVictory();
    particles.burst(window.innerWidth / 2, window.innerHeight / 2, 75);

    const summaryData = {
      score: this.score,
      maxPossibleScore: this.roundsPerGame * (this.difficulty === 'Legendary' ? 200 : 100),
      roundsCompleted: this.roundsPerGame,
      correctCount: this.sessionCorrectCount,
      accuracy: accuracy,
      timeTakenFormatted: this.formatTime(this.totalTimeTaken),
      difficulty: this.difficulty,
      mode: this.mode,
      profile: storage.getProfile(),
      endAchievements
    };

    if (this.callbacks.onGameEnd) {
      this.callbacks.onGameEnd(summaryData);
    }
  }

  getRoundViewData() {
    const q = this.currentRound;
    return {
      roundNumber: this.currentRoundIndex + 1,
      totalRounds: this.roundsPerGame,
      mode: this.mode,
      difficulty: this.difficulty,
      subject: q.subject,
      question: q.question,
      image: q.image,
      allClues: q.clues,
      revealedClues: q.clues.slice(0, this.revealedCluesCount),
      revealedCount: this.revealedCluesCount,
      totalClues: q.clues.length,
      potentialPoints: this.calculatePotentialPoints(),
      options: q.options,
      timerSeconds: this.timerSeconds,
      defaultTimer: this.defaultTimer
    };
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
