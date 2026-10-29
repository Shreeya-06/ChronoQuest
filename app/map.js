/**
 * ChronoQuest - Interactive Ancient World Map
 * Built with Leaflet.js with custom antique / dark archaeological cartography styling.
 */

import { civilizations } from '../data/civilizations.js';

class AncientWorldMap {
  constructor() {
    this.map = null;
    this.markers = [];
    this.initialized = false;
  }

  init(containerId = 'world-map-container', onSelectCivilization) {
    if (this.initialized && this.map) {
      setTimeout(() => this.map.invalidateSize(), 200);
      return;
    }

    const container = document.getElementById(containerId);
    if (!container || typeof L === 'undefined') return;

    // Center map around the ancient world crossroads (Mediterranean / Middle East / South Asia)
    this.map = L.map(containerId, {
      center: [23.5, 38.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true
    });

    // Dark parchment / antique style tile layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    this.renderMarkers(onSelectCivilization);
    this.initialized = true;

    // Invalidate size when container becomes visible
    setTimeout(() => {
      if (this.map) this.map.invalidateSize();
    }, 300);
  }

  renderMarkers(onSelectCivilization) {
    this.clearMarkers();

    civilizations.forEach(civ => {
      if (!civ.coordinates || civ.coordinates.length !== 2) return;

      // Custom golden archaeological seal marker icon
      const goldIcon = L.divIcon({
        className: 'ancient-map-pin',
        html: `
          <div class="pin-symbol-wrap" title="${civ.name}">
            <div class="pin-pulse"></div>
            <div class="pin-seal">🏺</div>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });

      const marker = L.marker(civ.coordinates, { icon: goldIcon }).addTo(this.map);

      // Antique parchment popup content
      const popupContent = `
        <div class="map-popup-card">
          <div class="map-popup-img-wrap">
            <img src="${civ.image.url}" alt="${civ.name}" onerror="this.src='https://placehold.co/400x200/1a1612/d4af37?text=${encodeURIComponent(civ.name)}'">
            <span class="map-popup-badge">${civ.region}</span>
          </div>
          <div class="map-popup-body">
            <h3 class="map-popup-title">${civ.name}</h3>
            <p class="map-popup-period">⏳ ${civ.period}</p>
            <p class="map-popup-sites"><strong>Major Sites:</strong> ${civ.sites.slice(0, 4).join(', ')}</p>
            <p class="map-popup-desc">${civ.architecture.slice(0, 110)}...</p>
            <button class="map-explore-btn" data-civ-id="${civ.id}">
              📜 Read Full Codex &rarr;
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, { maxWidth: 300, className: 'ancient-leaflet-popup' });

      marker.on('popupopen', () => {
        const btn = document.querySelector(`.map-explore-btn[data-civ-id="${civ.id}"]`);
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (onSelectCivilization) {
              onSelectCivilization(civ.id);
            }
          });
        }
      });

      this.markers.push(marker);
    });
  }

  clearMarkers() {
    this.markers.forEach(m => m.remove());
    this.markers = [];
  }

  flyToCivilization(civId) {
    const civ = civilizations.find(c => c.id === civId);
    if (civ && this.map && civ.coordinates) {
      this.map.flyTo(civ.coordinates, 5, { duration: 1.5 });
      const targetMarker = this.markers.find(m => {
        const pos = m.getLatLng();
        return Math.abs(pos.lat - civ.coordinates[0]) < 0.01 && Math.abs(pos.lng - civ.coordinates[1]) < 0.01;
      });
      if (targetMarker) {
        setTimeout(() => targetMarker.openPopup(), 1600);
      }
    }
  }

  refreshSize() {
    if (this.map) {
      this.map.invalidateSize();
    }
  }
}

export const ancientMap = new AncientWorldMap();
