/**
 * ChronoQuest - Civilization Explorer Encyclopedia
 * Provides rich archaeological exploration dossiers across all 15 ancient civilizations.
 */

import { civilizations } from '../data/civilizations.js';

class CivilizationExplorer {
  constructor() {
    this.selectedCivId = civilizations[0].id;
    this.filterRegion = 'all';
    this.searchQuery = '';
    this.container = null;
  }

  init(containerId = 'explorer-view') {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  setCivilization(civId) {
    if (civilizations.some(c => c.id === civId)) {
      this.selectedCivId = civId;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  render() {
    if (!this.container) return;

    const filteredList = civilizations.filter(civ => {
      const matchRegion = this.filterRegion === 'all' || civ.region === this.filterRegion;
      const matchSearch = !this.searchQuery ||
        civ.name.toLowerCase().includes(this.searchQuery) ||
        civ.sites.some(s => s.toLowerCase().includes(this.searchQuery)) ||
        civ.region.toLowerCase().includes(this.searchQuery);
      return matchRegion && matchSearch;
    });

    const activeCiv = civilizations.find(c => c.id === this.selectedCivId) || civilizations[0];

    const regions = ['all', 'South Asia', 'North Africa', 'Middle East', 'Mediterranean', 'East Asia', 'Americas'];

    this.container.innerHTML = `
      <div class="explorer-layout">
        <!-- Sidebar Navigation & Filters -->
        <aside class="explorer-sidebar">
          <div class="explorer-search-box">
            <input type="text" id="explorer-search-input" placeholder="🔍 Search civilizations, sites..." value="${this.escapeHtml(this.searchQuery)}">
          </div>

          <div class="explorer-region-pills">
            ${regions.map(r => `
              <button class="region-pill ${this.filterRegion === r ? 'active' : ''}" data-region="${r}">
                ${r === 'all' ? 'All Regions' : r}
              </button>
            `).join('')}
          </div>

          <div class="explorer-civ-list">
            ${filteredList.map(civ => `
              <button class="civ-list-card ${civ.id === activeCiv.id ? 'active' : ''}" data-civ-id="${civ.id}">
                <div class="civ-list-thumb" style="background-image: url('${civ.image.url}')"></div>
                <div class="civ-list-info">
                  <h4 class="civ-list-name">${civ.name}</h4>
                  <span class="civ-list-meta">${civ.region} • ${civ.period.split('(')[0]}</span>
                </div>
              </button>
            `).join('')}
            ${filteredList.length === 0 ? '<p class="no-results-msg">No ancient civilizations found matching your search.</p>' : ''}
          </div>
        </aside>

        <!-- Main Civilization Dossier -->
        <main class="explorer-main">
          <!-- Hero Banner -->
          <section class="explorer-hero">
            <div class="explorer-hero-img-wrap">
              <img src="${activeCiv.image.url}" alt="${activeCiv.name}" class="explorer-hero-img" onerror="this.src='https://placehold.co/1000x500/1a1612/d4af37?text=${encodeURIComponent(activeCiv.name)}'">
              <div class="explorer-hero-overlay"></div>
            </div>
            <div class="explorer-hero-content">
              <span class="explorer-tag">${activeCiv.region}</span>
              <h1 class="explorer-title">${activeCiv.name}</h1>
              <p class="explorer-subtitle">⏳ ${activeCiv.period}</p>
              <div class="image-attribution">
                📷 <a href="${activeCiv.image.source_url}" target="_blank" rel="noopener noreferrer">${activeCiv.image.source_name}</a> (${activeCiv.image.license})
              </div>
            </div>
          </section>

          <!-- Exploration Sections -->
          <div class="explorer-sections-grid">
            <!-- Location & Capital -->
            <article class="explorer-card">
              <div class="card-icon">📍</div>
              <h3 class="card-title">Location & Capitals</h3>
              <p class="card-body"><strong>Primary Centers:</strong> ${activeCiv.capital}</p>
              <p class="card-body"><strong>Geographic Sphere:</strong> ${activeCiv.region}</p>
            </article>

            <!-- Period & Timeline -->
            <article class="explorer-card">
              <div class="card-icon">⏳</div>
              <h3 class="card-title">Timeline & Era</h3>
              <p class="card-body">${activeCiv.period}</p>
              <p class="card-body">A defining era that permanently influenced regional architecture, governance, and technology.</p>
            </article>

            <!-- Major Sites -->
            <article class="explorer-card span-2">
              <div class="card-icon">🔎</div>
              <h3 class="card-title">Major Archaeological Sites</h3>
              <div class="sites-tag-cloud">
                ${activeCiv.sites.map(s => `<span class="site-tag">🏛️ ${s}</span>`).join('')}
              </div>
            </article>

            <!-- Architecture -->
            <article class="explorer-card span-2">
              <div class="card-icon">🏛️</div>
              <h3 class="card-title">Monumental Architecture & Cities</h3>
              <p class="card-body">${activeCiv.architecture}</p>
            </article>

            <!-- Water & Engineering -->
            <article class="explorer-card">
              <div class="card-icon">💧</div>
              <h3 class="card-title">Water, Sanitation & Engineering</h3>
              <p class="card-body">${activeCiv.water_engineering}</p>
            </article>

            <!-- Writing & Epigraphy -->
            <article class="explorer-card">
              <div class="card-icon">📜</div>
              <h3 class="card-title">Writing Systems & Epigraphy</h3>
              <p class="card-body">${activeCiv.writing}</p>
            </article>

            <!-- Famous Rulers -->
            <article class="explorer-card">
              <div class="card-icon">👑</div>
              <h3 class="card-title">Rulers & Governance</h3>
              <ul class="card-list">
                ${activeCiv.rulers.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </article>

            <!-- Major Artifacts -->
            <article class="explorer-card">
              <div class="card-icon">🏺</div>
              <h3 class="card-title">Hallmark Artifacts</h3>
              <ul class="card-list">
                ${activeCiv.artifacts.map(a => `<li>${a}</li>`).join('')}
              </ul>
            </article>

            <!-- Religion & Culture -->
            <article class="explorer-card span-2">
              <div class="card-icon">✨</div>
              <h3 class="card-title">Culture & Worldview</h3>
              <p class="card-body">${activeCiv.religion_culture}</p>
            </article>

            <!-- Interesting Historical Facts -->
            <article class="explorer-card span-2 highlight-card">
              <div class="card-icon">💡</div>
              <h3 class="card-title">Fascinating Historical Insights</h3>
              <ul class="facts-list">
                ${activeCiv.interesting_facts.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </article>
          </div>
        </main>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('explorer-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
        // Restore focus
        const newSearch = document.getElementById('explorer-search-input');
        if (newSearch) {
          newSearch.focus();
          newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
        }
      });
    }

    // Region filters
    const regionPills = this.container.querySelectorAll('.region-pill');
    regionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.filterRegion = pill.getAttribute('data-region');
        this.render();
      });
    });

    // Civilization card selection
    const civCards = this.container.querySelectorAll('.civ-list-card');
    civCards.forEach(card => {
      card.addEventListener('click', () => {
        this.selectedCivId = card.getAttribute('data-civ-id');
        this.render();
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }
}

export const explorer = new CivilizationExplorer();
