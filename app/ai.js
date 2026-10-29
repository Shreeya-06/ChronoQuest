/**
 * ChronoQuest - Grounded AI Historian & Contextual Hint Engine
 * Strictly grounded in historical datasets.
 * Works 100% offline via local archaeological knowledge synthesizer,
 * with optional Gemini API integration if the user provides a key.
 */

import { civilizations } from '../data/civilizations.js';
import { artifacts } from '../data/artifacts.js';
import { monuments } from '../data/monuments.js';

class AIHistorian {
  constructor() {
    this.geminiApiKey = localStorage.getItem('chronoquest_gemini_key') || '';
  }

  setApiKey(key) {
    this.geminiApiKey = key ? key.trim() : '';
    if (this.geminiApiKey) {
      localStorage.setItem('chronoquest_gemini_key', this.geminiApiKey);
    } else {
      localStorage.removeItem('chronoquest_gemini_key');
    }
  }

  getApiKey() {
    return this.geminiApiKey;
  }

  /**
   * Generates a subtle contextual hint without spoiling the answer.
   */
  generateHint(question, civData) {
    if (!civData) {
      return "Consider the geographical region and architectural hallmarks featured in the artifact image.";
    }

    const hints = [
      `Geographical anchor: This ancient civilization flourished primarily within ${civData.region}, along vital river systems and trade corridors.`,
      `Architectural clue: Note their mastery of ${civData.architecture.split(',')[0].toLowerCase()}.`,
      `Cultural signature: Their legacy includes iconic achievements such as ${civData.artifacts[0]}.`,
      `Chronological marker: This civilization flourished during ${civData.period}.`,
      `Engineering insight: Their urban planners were renowned for ${civData.water_engineering.split(':')[1]?.split(',')[0] || civData.water_engineering.split('.')[0]}.`
    ];

    // Pick a hint deterministically based on question id
    const hash = (question.id || 'hint').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return hints[hash % hints.length];
  }

  /**
   * Grounded Question & Answer with the Historian
   */
  async ask(userQuestion, activeCivId = null) {
    const qLower = userQuestion.toLowerCase().trim();

    // If user provided a Gemini API Key, try live Gemini request first with strict grounding context
    if (this.geminiApiKey) {
      try {
        const liveAnswer = await this.queryGemini(userQuestion, activeCivId);
        if (liveAnswer) return liveAnswer;
      } catch (err) {
        console.warn("Live Gemini API call failed, falling back to local grounded synthesizer:", err);
      }
    }

    // Default: Grounded Local Archaeological Synthesizer
    return this.groundedLocalSynthesizer(qLower, activeCivId);
  }

  /**
   * Local intelligent response synthesizer grounded in dataset
   */
  groundedLocalSynthesizer(qLower, activeCivId) {
    // 1. Identify civilization context from query or active ID
    let matchedCiv = civilizations.find(c => c.id === activeCivId);

    if (!matchedCiv) {
      for (const civ of civilizations) {
        const nameTerms = civ.name.toLowerCase().split(' ');
        if (nameTerms.some(term => term.length > 3 && qLower.includes(term))) {
          matchedCiv = civ;
          break;
        }
      }
    }

    // Fallback: If no civilization mentioned, check artifacts/monuments
    const matchedArtifact = artifacts.find(a => qLower.includes(a.name.toLowerCase()) || qLower.includes(a.id));
    const matchedMonument = monuments.find(m => qLower.includes(m.name.toLowerCase()) || qLower.includes(m.id));

    if (matchedArtifact) {
      return `🏺 Regarding the **${matchedArtifact.name}**: It is an authentic artifact of the **${matchedArtifact.civilizationName}** (${matchedArtifact.period}), crafted from ${matchedArtifact.material.toLowerCase()}. ${matchedArtifact.significance} ${matchedArtifact.explanation}`;
    }

    if (matchedMonument) {
      return `🏛️ Regarding **${matchedMonument.name}**: Located in ${matchedMonument.location}, this monumental landmark belongs to the **${matchedMonument.civilizationName}** (${matchedMonument.era}). ${matchedMonument.description}`;
    }

    if (matchedCiv) {
      // Check specific domains: drainage/water, writing, architecture, rulers, dates
      if (qLower.includes('drain') || qLower.includes('water') || qLower.includes('sanitat') || qLower.includes('sewer') || qLower.includes('bath') || qLower.includes('canal')) {
        return `💧 **Water & Engineering of the ${matchedCiv.name}**: ${matchedCiv.water_engineering} At excavated centers like ${matchedCiv.sites.slice(0, 3).join(', ')}, archaeological evidence reveals sophisticated planning dedicated to civic hygiene and agricultural water control.`;
      }

      if (qLower.includes('write') || qLower.includes('script') || qLower.includes('language') || qLower.includes('decipher') || qLower.includes('glyph') || qLower.includes('alphabet')) {
        return `📜 **Writing & Epigraphy of the ${matchedCiv.name}**: ${matchedCiv.writing} Scribes played a vital role in imperial administration, trade transactions, and sacred rites.`;
      }

      if (qLower.includes('ruler') || qLower.includes('king') || qLower.includes('emperor') || qLower.includes('pharaoh') || qLower.includes('dynasty') || qLower.includes('leader')) {
        return `👑 **Rulers & Leadership of the ${matchedCiv.name}**: Key historical figures include ${matchedCiv.rulers.join(', ')}. Government was centered around ${matchedCiv.capital}.`;
      }

      if (qLower.includes('architect') || qLower.includes('build') || qLower.includes('temple') || qLower.includes('pyramid') || qLower.includes('brick') || qLower.includes('stone') || qLower.includes('wall')) {
        return `🏛️ **Architecture of the ${matchedCiv.name}**: ${matchedCiv.architecture} Notable archaeological sites preserving these monuments include ${matchedCiv.sites.join(', ')}.`;
      }

      if (qLower.includes('fact') || qLower.includes('interest') || qLower.includes('curious') || qLower.includes('tell me')) {
        const fact = matchedCiv.interesting_facts[Math.floor(Math.random() * matchedCiv.interesting_facts.length)];
        return `💡 **Historical Insight on ${matchedCiv.name}**: ${fact}`;
      }

      // General overview
      return `🏺 **${matchedCiv.name} (${matchedCiv.period})**: Located in ${matchedCiv.region} with principal centers at ${matchedCiv.capital}. Known for ${matchedCiv.features || matchedCiv.architecture}. Key archaeological sites include ${matchedCiv.sites.slice(0, 4).join(', ')}.`;
    }

    // Generic educational archaeological response
    return `📜 **Archaeological Archive**: In ChronoQuest, we examine 15 great ancient civilizations across South Asia, North Africa, Mesopotamia, the Mediterranean, East Asia, and the Americas. You can explore details about specific urban drainage systems, scripts, monumental temples, or artifacts by mentioning them in your question!`;
  }

  /**
   * Optional Live Gemini API query with strict grounding
   */
  async queryGemini(userQuestion, activeCivId) {
    const contextCiv = civilizations.find(c => c.id === activeCivId) || civilizations[0];

    const systemPrompt = `You are the Royal Epigraphist & Chief Historian of ChronoQuest, an ancient history museum and educational game.
Answer user questions concisely (2-4 sentences max).
Use authoritative, engaging, and historically rigorous language.
Ground your response in verified archaeological discoveries.
Active civilization context: ${contextCiv.name} (${contextCiv.period}, ${contextCiv.region}). Major sites: ${contextCiv.sites.join(', ')}. Architecture: ${contextCiv.architecture}.`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.geminiApiKey}`;

    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\nUser Question: ${userQuestion}` }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 250,
        temperature: 0.2
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text ? text.trim() : null;
  }
}

export const aiHistorian = new AIHistorian();
