/**
 * Reset66 (Life Reset: 66 Day Habit RPG)
 * Main Application Orchestrator & Component Renderer
 */

import './styles/main.css';

import { loadState, getState, subscribe } from './services/storage.js';
import { renderHeader } from './components/header.js';
import { renderQuestsTab, attachQuestsListeners } from './components/quests.js';
import { renderRoadmapTab, attachRoadmapListeners } from './components/roadmap.js';
import { renderToolsTab, attachToolsListeners } from './components/tools.js';
import { renderCardsTab, renderBooksModal, attachCardsListeners } from './components/cards.js';
import { renderProfileTab, attachProfileListeners } from './components/profile.js';
import { renderBottomNav, attachNavListeners } from './components/navigation.js';

import { renderOnboardingModal, attachOnboardingListeners } from './components/onboarding.js';
import { renderMeditationModal, attachMeditationListeners } from './components/meditation.js';
import { renderWorkoutModal, attachWorkoutListeners } from './components/workout.js';
import { renderFocusModal, attachFocusListeners } from './components/focus.js';
import { renderSleepModal, attachSleepListeners } from './components/sleep.js';

function renderApp() {
  const state = getState();
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Determine active tab body
  let tabBodyHtml = '';
  if (state.activeTab === 'quests') {
    tabBodyHtml = renderQuestsTab();
  } else if (state.activeTab === 'roadmap') {
    tabBodyHtml = renderRoadmapTab();
  } else if (state.activeTab === 'tools') {
    tabBodyHtml = renderToolsTab();
  } else if (state.activeTab === 'cards') {
    tabBodyHtml = renderCardsTab();
  } else if (state.activeTab === 'profile') {
    tabBodyHtml = renderProfileTab();
  }

  // Active Modals
  let modalHtml = '';
  if (!state.onboardingDone || state.activeModal === 'assessment') {
    modalHtml = renderOnboardingModal();
  } else if (state.activeModal === 'meditation') {
    modalHtml = renderMeditationModal();
  } else if (state.activeModal === 'workout') {
    modalHtml = renderWorkoutModal();
  } else if (state.activeModal === 'pomodoro') {
    modalHtml = renderFocusModal();
  } else if (state.activeModal === 'sleep') {
    modalHtml = renderSleepModal();
  } else if (state.activeModal === 'books') {
    modalHtml = renderBooksModal();
  }

  // Assemble Complete Layout
  appContainer.innerHTML = `
    <div class="min-h-screen bg-[#080B11] text-slate-100 pb-24 selection:bg-cyan-500 selection:text-black">
      
      <!-- Top Glow Aura -->
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-cyan-500/10 blur-[90px] pointer-events-none"></div>

      <!-- Main Shell Container -->
      <main class="max-w-xl mx-auto px-3.5 pt-3.5 space-y-4">
        ${renderHeader()}
        <section id="tabContentContainer" class="min-h-[500px]">
          ${tabBodyHtml}
        </section>
      </main>

      <!-- Bottom Dock Navigation -->
      ${renderBottomNav()}

      <!-- Modals Container -->
      <div id="modalSlot">
        ${modalHtml}
      </div>

    </div>
  `;

  // Attach active listeners
  attachNavListeners(renderApp);

  if (state.activeTab === 'quests') {
    attachQuestsListeners(renderApp);
  } else if (state.activeTab === 'roadmap') {
    attachRoadmapListeners(renderApp);
  } else if (state.activeTab === 'tools') {
    attachToolsListeners(renderApp);
  } else if (state.activeTab === 'cards') {
    attachCardsListeners(renderApp);
  } else if (state.activeTab === 'profile') {
    attachProfileListeners(renderApp);
  }

  // Attach modal listeners if any modal is active
  if (!state.onboardingDone || state.activeModal === 'assessment') {
    attachOnboardingListeners(renderApp);
  } else if (state.activeModal === 'meditation') {
    attachMeditationListeners(renderApp);
  } else if (state.activeModal === 'workout') {
    attachWorkoutListeners(renderApp);
  } else if (state.activeModal === 'pomodoro') {
    attachFocusListeners(renderApp);
  } else if (state.activeModal === 'sleep') {
    attachSleepListeners(renderApp);
  } else if (state.activeModal === 'books') {
    attachCardsListeners(renderApp);
  }
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderApp();
  subscribe(() => {
    // Re-render on background state changes if necessary
  });
});
