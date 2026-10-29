/**
 * ChronoQuest - Main Application Controller
 * Coordinates views, user input, audio, particles, game lifecycle, and storage.
 */

import { GameController } from './game.js';
import { audio } from './audio.js';
import { particles } from './particles.js';
import { storage, ACHIEVEMENTS_LIST, RANKS } from './storage.js';
import { ancientMap } from './map.js';
import { explorer } from './explorer.js';
import { aiHistorian } from './ai.js';
import { civilizations } from '../data/civilizations.js';
import { artifacts } from '../data/artifacts.js';

class ChronoQuestApp {
  constructor() {
    this.currentView = 'home';
    this.selectedDifficulty = 'Medium';
    this.game = null;

    this.init();
  }

  init() {
    // 1. Initialize Particles Engine
    particles.init('particle-canvas');

    // 2. Initialize Game Controller with event callbacks
    this.game = new GameController({
      onRoundStart: (roundData) => this.renderRound(roundData),
      onTimerTick: (seconds, defaultTimer) => this.updateTimer(seconds, defaultTimer),
      onClueReveal: (count, potentialPoints) => this.updateClueReveal(count, potentialPoints),
      onHintUsed: (hintText, potentialPoints) => this.showHintCallout(hintText, potentialPoints),
      onAnswerResult: (result) => this.renderAnswerResult(result),
      onTimeout: (timeoutData) => this.renderTimeout(timeoutData),
      onGameEnd: (summary) => this.renderGameEnd(summary)
    });

    // 3. Initialize Explorer Encyclopedia
    explorer.init('view-explorer');

    // 4. Update Header Profile Chip
    this.updateHeaderProfile();

    // 5. Bind All UI Event Listeners
    this.bindEvents();

    // 6. Check Initial View Route
    this.handleRoute();

    // 7. Check Daily Quest Status
    this.updateDailyQuestUI();
  }

  // --- VIEW ROUTING & SWITCHING ---
  switchView(viewName) {
    if (this.currentView === viewName && viewName !== 'modes') return;

    audio.playClick();
    this.currentView = viewName;

    // Update view sections
    document.querySelectorAll('.app-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    // Update navigation active pill
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      if (btn.getAttribute('data-nav') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Close mobile nav drawer if open
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');

    // View-specific actions
    if (viewName === 'map') {
      ancientMap.init('world-map-container', (civId) => {
        this.switchView('explorer');
        explorer.setCivilization(civId);
      });
      setTimeout(() => ancientMap.refreshSize(), 200);
    } else if (viewName === 'achievements') {
      this.renderAchievements();
    } else if (viewName === 'profile') {
      this.renderProfile();
    } else if (viewName === 'daily') {
      this.updateDailyQuestUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const validViews = ['home', 'modes', 'game', 'map', 'explorer', 'achievements', 'profile', 'daily'];
    if (validViews.includes(hash)) {
      this.switchView(hash);
    } else {
      this.switchView('home');
    }
  }

  // --- EVENT BINDINGS ---
  bindEvents() {
    // Navigation link clicks
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = el.getAttribute('data-nav');
        this.switchView(targetView);
      });
    });

    // Mobile nav toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });
    }

    // Audio Mute/Unmute Toggle
    const audioBtn = document.getElementById('btn-audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isMuted = audio.toggleMute();
        audioIcon.textContent = isMuted ? '🔇' : '🔊';
        audioBtn.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
        if (!isMuted) audio.playClick();
      });
    }

    // Hero buttons
    const heroArtifactsBtn = document.getElementById('hero-btn-artifacts');
    if (heroArtifactsBtn) {
      heroArtifactsBtn.addEventListener('click', () => {
        this.switchView('modes');
      });
    }

    // Difficulty selection buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedDifficulty = btn.getAttribute('data-diff');
        audio.playClick();
      });
    });

    // Mode launch cards
    document.querySelectorAll('[data-launch-mode]').forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.getAttribute('data-launch-mode');
        this.startExpedition(mode, this.selectedDifficulty);
      });
    });

    // Game Clue Actions
    const revealClueBtn = document.getElementById('btn-reveal-clue');
    if (revealClueBtn) {
      revealClueBtn.addEventListener('click', () => {
        this.game.revealNextClue();
      });
    }

    const requestHintBtn = document.getElementById('btn-request-hint');
    if (requestHintBtn) {
      requestHintBtn.addEventListener('click', () => {
        this.game.useHint();
      });
    }

    // Next Round Button
    const nextRoundBtn = document.getElementById('btn-next-round');
    if (nextRoundBtn) {
      nextRoundBtn.addEventListener('click', () => {
        audio.playClick();
        this.game.nextRound();
      });
    }

    // Daily Quest Start Button
    const startDailyBtn = document.getElementById('btn-start-daily');
    if (startDailyBtn) {
      startDailyBtn.addEventListener('click', () => {
        this.startExpedition('daily', 'Medium');
      });
    }

    // Quest Complete Result Buttons
    document.getElementById('btn-result-play-again')?.addEventListener('click', () => {
      this.closeModal('quest-complete-modal');
      this.switchView('modes');
    });
    document.getElementById('btn-result-explore-history')?.addEventListener('click', () => {
      this.closeModal('quest-complete-modal');
      this.switchView('explorer');
    });
    document.getElementById('btn-result-view-artifacts')?.addEventListener('click', () => {
      this.closeModal('quest-complete-modal');
      this.startExpedition('artifact', this.selectedDifficulty);
    });

    // Ask the Historian Modal Events
    this.bindHistorianEvents();

    // Profile Name Edit Button
    const editNameBtn = document.getElementById('btn-edit-name');
    if (editNameBtn) {
      editNameBtn.addEventListener('click', () => {
        const currentName = storage.getProfile().name;
        const newName = prompt("Enter your Explorer Name (max 16 chars):", currentName);
        if (newName && newName.trim()) {
          storage.setName(newName);
          this.updateHeaderProfile();
          this.renderProfile();
        }
      });
    }
  }

  // --- EXPEDITION LAUNCH ---
  startExpedition(mode, difficulty) {
    audio.playClick();
    this.switchView('game');
    this.game.startSession(mode, difficulty);
  }

  // --- GAME UI RENDERING ---
  renderRound(data) {
    // Hide feedback banner and hint callout
    document.getElementById('feedback-banner').style.display = 'none';
    document.getElementById('hint-callout').style.display = 'none';
    document.getElementById('artifact-revealed-dossier').style.display = 'none';

    // Round badge & Score
    document.getElementById('arena-round-badge').textContent = `ROUND 0${data.roundNumber} / 0${data.totalRounds}`;
    document.getElementById('arena-score-display').textContent = this.game.score;

    // Timer display & progress bar
    this.updateTimer(data.timerSeconds, data.defaultTimer);

    // Subject image & attribution
    const imgEl = document.getElementById('arena-image');
    imgEl.src = data.image.url;
    imgEl.alt = data.subject || "Ancient subject";
    imgEl.onerror = () => {
      imgEl.src = `https://placehold.co/800x400/1a1612/d4af37?text=${encodeURIComponent(data.subject || 'Ancient Artifact')}`;
    };

    document.getElementById('arena-subject-title').textContent = data.subject || "Archaeological Site";
    const sourceLink = document.getElementById('arena-source-link');
    sourceLink.textContent = data.image.source_name || "Wikimedia Commons";
    sourceLink.href = data.image.source_url || "#";

    // Clues display
    this.renderClues(data.revealedClues, data.allClues.length, data.potentialPoints);

    // Prompt title
    document.getElementById('arena-prompt').textContent = data.question;

    // Options Grid
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];

    data.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-prefix">${prefixes[idx]}</span>
        <span class="option-label">${opt}</span>
      `;
      btn.addEventListener('click', () => {
        this.game.submitAnswer(opt);
      });
      optionsGrid.appendChild(btn);
    });

    // Reset Reveal Clue Button
    const revealBtn = document.getElementById('btn-reveal-clue');
    revealBtn.disabled = data.revealedCount >= data.allClues.length;
    revealBtn.textContent = `🔍 Reveal Next Clue (-25 XP Value)`;
  }

  renderClues(revealedClues, totalCount, potentialPoints) {
    const list = document.getElementById('clues-list');
    list.innerHTML = '';

    revealedClues.forEach((clueText, idx) => {
      const clueItem = document.createElement('div');
      clueItem.className = 'clue-item';
      clueItem.innerHTML = `
        <span class="clue-number">CLUE 0${idx + 1}</span>
        <span class="clue-text">${clueText}</span>
      `;
      list.appendChild(clueItem);
    });

    document.getElementById('potential-points-badge').textContent = `✨ Worth: ${potentialPoints} XP`;
  }

  updateClueReveal(count, potentialPoints) {
    const roundData = this.game.getRoundViewData();
    this.renderClues(roundData.revealedClues, roundData.totalClues, potentialPoints);

    const revealBtn = document.getElementById('btn-reveal-clue');
    if (count >= roundData.totalClues) {
      revealBtn.disabled = true;
      revealBtn.textContent = 'All Clues Revealed';
    }
  }

  showHintCallout(hintText, potentialPoints) {
    const callout = document.getElementById('hint-callout');
    const textEl = document.getElementById('hint-text');
    callout.style.display = 'flex';
    textEl.textContent = hintText;
    document.getElementById('potential-points-badge').textContent = `✨ Worth: ${potentialPoints} XP`;
  }

  updateTimer(seconds, defaultTimer) {
    const display = document.getElementById('arena-timer-display');
    const fill = document.getElementById('timer-bar-fill');
    const wrap = document.getElementById('arena-timer-wrap');

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const pct = Math.max(0, (seconds / defaultTimer) * 100);
    fill.style.width = `${pct}%`;

    if (seconds <= 5 && seconds > 0) {
      wrap.classList.add('timer-warning');
      fill.style.background = '#ff5252';
    } else {
      wrap.classList.remove('timer-warning');
      fill.style.background = 'linear-gradient(90deg, var(--gold-bright), var(--gold-primary))';
    }
  }

  renderAnswerResult(res) {
    // Disable option buttons and mark correct / wrong
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      const label = btn.querySelector('.option-label').textContent.trim();
      if (label.toLowerCase() === res.correctAnswer.toLowerCase()) {
        btn.classList.add('correct');
      } else if (label.toLowerCase() === res.selectedAnswer.toLowerCase() && !res.isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Feedback Banner
    const banner = document.getElementById('feedback-banner');
    const titleEl = document.getElementById('feedback-title');
    const xpBadge = document.getElementById('feedback-xp-badge');
    const expEl = document.getElementById('feedback-explanation');

    banner.className = `feedback-banner ${res.isCorrect ? 'correct-banner' : 'wrong-banner'}`;
    titleEl.textContent = res.isCorrect ? '✨ Correct Discovery!' : '❌ Incorrect Hypothesis!';
    xpBadge.textContent = res.isCorrect ? `+${res.pointsGained} XP` : `-10 XP`;
    expEl.textContent = res.explanation;

    // Artifact Hunt Mode Extra Dossier
    if (res.rawArtifact) {
      const art = res.rawArtifact;
      const dossierEl = document.getElementById('artifact-revealed-dossier');
      dossierEl.style.display = 'block';
      dossierEl.innerHTML = `
        <h4 style="font-family: var(--font-display); color: var(--gold-primary); margin-bottom: 0.5rem;">
          🏺 ARTIFACT REVEALED: ${art.name}
        </h4>
        <div class="dossier-grid">
          <div class="dossier-item"><strong>Civilization:</strong> <span>${art.civilizationName}</span></div>
          <div class="dossier-item"><strong>Period:</strong> <span>${art.period}</span></div>
          <div class="dossier-item"><strong>Material:</strong> <span>${art.material}</span></div>
          <div class="dossier-item"><strong>Provenance:</strong> <span>${art.region}</span></div>
        </div>
      `;
    }

    banner.style.display = 'block';
    document.getElementById('arena-score-display').textContent = res.currentTotalScore;
    this.updateHeaderProfile();

    // Check newly unlocked achievements
    if (res.newlyUnlocked && res.newlyUnlocked.length > 0) {
      res.newlyUnlocked.forEach(ach => this.showAchievementToast(ach));
    }
  }

  renderTimeout(data) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      const label = btn.querySelector('.option-label').textContent.trim();
      if (label.toLowerCase() === data.correctAnswer.toLowerCase()) {
        btn.classList.add('correct');
      }
    });

    const banner = document.getElementById('feedback-banner');
    banner.className = 'feedback-banner wrong-banner';
    document.getElementById('feedback-title').textContent = '⏱ TIME TRAVEL INTERRUPTED!';
    document.getElementById('feedback-xp-badge').textContent = '0 XP';
    document.getElementById('feedback-explanation').textContent = `Time expired! The correct civilization was ${data.correctAnswer}. ${data.explanation}`;
    banner.style.display = 'block';
  }

  renderGameEnd(summary) {
    document.getElementById('result-final-score').textContent = `${summary.score} / ${summary.maxPossibleScore}`;
    document.getElementById('result-accuracy').textContent = `${summary.accuracy}%`;
    document.getElementById('result-time').textContent = summary.timeTakenFormatted;
    document.getElementById('result-rank-title').textContent = summary.profile.rank;

    this.openModal('quest-complete-modal');
    this.updateHeaderProfile();

    if (summary.endAchievements && summary.endAchievements.length > 0) {
      summary.endAchievements.forEach(ach => this.showAchievementToast(ach));
    }
  }

  // --- ACHIEVEMENTS VIEW RENDERING ---
  renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const profile = storage.getProfile();

    ACHIEVEMENTS_LIST.forEach(ach => {
      const isUnlocked = profile.unlockedAchievements.includes(ach.id);
      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="achievement-icon-wrap">
          <span>${ach.icon}</span>
        </div>
        <div style="flex: 1;">
          <h4 class="achievement-title">${ach.title} ${isUnlocked ? '✓' : '🔒'}</h4>
          <p class="achievement-desc">${ach.description}</p>
          <span class="achievement-reward">✦ +${ach.rewardXP} XP Reward</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  showAchievementToast(ach) {
    audio.playAchievement();
    particles.burst();

    const toast = document.createElement('div');
    toast.className = 'ancient-toast';
    toast.innerHTML = `
      <div class="toast-icon">${ach.icon}</div>
      <div class="toast-content">
        <h4>Achievement Unlocked!</h4>
        <p><strong>${ach.title}</strong> — +${ach.rewardXP} XP</p>
      </div>
    `;

    const container = document.getElementById('toast-container');
    if (container) {
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => toast.remove(), 500);
      }, 4500);
    }
  }

  // --- PROFILE VIEW RENDERING ---
  renderProfile() {
    const p = storage.getProfile();

    document.getElementById('profile-name-display').textContent = p.name;
    document.getElementById('profile-rank-display').textContent = `Level ${p.level} • ${p.rank}`;

    // Calculate progress to next rank
    let nextMin = 7000;
    for (let r of RANKS) {
      if (r.minXP > p.xp) {
        nextMin = r.minXP;
        break;
      }
    }
    const currentMin = RANKS.find(r => r.level === p.level)?.minXP || 0;
    const progressRange = nextMin - currentMin;
    const currentProgress = p.xp - currentMin;
    const pct = Math.min(100, Math.round((currentProgress / Math.max(1, progressRange)) * 100));

    document.getElementById('profile-xp-text').textContent = `${p.xp} Total XP`;
    document.getElementById('profile-next-rank-text').textContent = `Next Rank: ${nextMin} XP`;
    document.getElementById('profile-xp-fill').style.width = `${pct}%`;

    // Statistics
    document.getElementById('stat-accuracy').textContent = `${storage.getAccuracy()}%`;
    document.getElementById('stat-completed').textContent = p.questionsCompleted;
    document.getElementById('stat-civs').textContent = `${p.discoveredCivilizations.length} / 15`;
    document.getElementById('stat-artifacts').textContent = p.discoveredArtifacts.length;
    document.getElementById('stat-monuments').textContent = p.discoveredMonuments.length;
    document.getElementById('stat-high-score').textContent = p.highScore;
  }

  updateHeaderProfile() {
    const p = storage.getProfile();
    const xpEl = document.getElementById('nav-profile-xp');
    const rankEl = document.getElementById('nav-profile-rank');
    if (xpEl) xpEl.textContent = `${p.xp} XP`;
    if (rankEl) rankEl.textContent = p.rank.split(' ')[0];
  }

  // --- DAILY QUEST STATUS ---
  updateDailyQuestUI() {
    const p = storage.getProfile();
    const today = new Date().toISOString().slice(0, 10);
    const desc = document.getElementById('daily-status-desc');
    const actionArea = document.getElementById('daily-action-area');

    if (p.lastDailyDate === today) {
      if (desc) desc.textContent = `✦ You have completed today's historical quest! Your streak is ${p.dailyStreak} days. Return tomorrow for your next archaeological enigma!`;
      if (actionArea) actionArea.innerHTML = `<button class="btn-secondary" disabled>Completed for Today (Return Tomorrow)</button>`;
    } else {
      if (desc) desc.textContent = `A special historical challenge awaits. One attempt only. Complete today's quest to earn +200 bonus XP and advance your streak!`;
      if (actionArea) actionArea.innerHTML = `<button class="btn-primary" id="btn-start-daily">Embark on Daily Quest (+200 XP)</button>`;
      document.getElementById('btn-start-daily')?.addEventListener('click', () => {
        this.startExpedition('daily', 'Medium');
      });
    }
  }

  // --- ASK THE HISTORIAN MODAL ---
  bindHistorianEvents() {
    const openBtn = document.getElementById('btn-open-historian');
    const closeBtn = document.getElementById('btn-close-historian');
    const sendBtn = document.getElementById('btn-send-historian');
    const inputEl = document.getElementById('historian-input');
    const chatLog = document.getElementById('historian-chat-log');

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        audio.playClick();
        this.openModal('historian-modal');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        audio.playClick();
        this.closeModal('historian-modal');
      });
    }

    const askHistorian = async (text) => {
      if (!text || !text.trim()) return;
      const question = text.trim();
      inputEl.value = '';

      // Append user bubble
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user-msg';
      userBubble.textContent = question;
      chatLog.appendChild(userBubble);

      // Loading bubble
      const loadingBubble = document.createElement('div');
      loadingBubble.className = 'chat-bubble historian-msg';
      loadingBubble.textContent = 'Consulting the imperial codices...';
      chatLog.appendChild(loadingBubble);
      chatLog.scrollTop = chatLog.scrollHeight;

      // Identify active civilization if in game
      const activeCivId = this.game?.currentRound?.civilizationId || null;

      try {
        const answer = await aiHistorian.ask(question, activeCivId);
        loadingBubble.innerHTML = answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      } catch (err) {
        loadingBubble.textContent = "The papyrus scrolls are damaged. Please try asking about another archaeological subject!";
      }

      chatLog.scrollTop = chatLog.scrollHeight;
    };

    if (sendBtn) {
      sendBtn.addEventListener('click', () => askHistorian(inputEl.value));
    }
    if (inputEl) {
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') askHistorian(inputEl.value);
      });
    }

    // Quick suggestion clicks
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        askHistorian(chip.textContent);
      });
    });

    // Gemini API Key Save
    const saveKeyBtn = document.getElementById('btn-save-gemini-key');
    const keyInput = document.getElementById('gemini-key-input');
    if (keyInput) keyInput.value = aiHistorian.getApiKey();
    if (saveKeyBtn) {
      saveKeyBtn.addEventListener('click', () => {
        aiHistorian.setApiKey(keyInput.value);
        alert(keyInput.value ? "Gemini API key saved! Live AI queries enabled." : "Using offline grounded knowledge synthesizer.");
      });
    }
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
    }
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.chronoQuest = new ChronoQuestApp();
});
