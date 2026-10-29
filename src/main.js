/**
 * Reset66 (Life Reset: 66 Day Habit RPG)
 * Main Application Orchestrator & Component Renderer
 * Integrates 5 Core Tabs, Hunter Classes, Artifact Inventory,
 * 40Hz / Brown Noise Soundscapes, Story Card Generator, and Local Notifications.
 */

import './styles/main.css';

import { loadState, getState, subscribe } from './services/storage.js';
import { renderHeader } from './components/header.js';
import { renderBottomNav, attachNavListeners } from './components/navigation.js';

// 5 Core Tabs
import { renderQuestsTab, attachQuestsListeners } from './components/quests.js';
import { renderBossTab, attachBossListeners } from './components/boss.js';
import { renderWorkoutTab, attachWorkoutListeners } from './components/workout.js';
import { renderCardsTab, renderBooksModal, attachCardsListeners } from './components/cards.js';
import { renderSettingsTab, attachSettingsListeners } from './components/settings.js';

// Interactive Modals & Overlays
import { renderReaderModal, attachReaderListeners } from './components/reader.js';
import { renderOnboardingModal, attachOnboardingListeners } from './components/onboarding.js';
import { renderMeditationModal, attachMeditationListeners } from './components/meditation.js';
import { renderFocusModal, attachFocusListeners } from './components/focus.js';
import { renderSleepModal, attachSleepListeners } from './components/sleep.js';
import { renderInventoryModal, attachInventoryListeners } from './components/inventory.js';
import { renderShareCardModal, attachShareCardListeners } from './components/sharecard.js';
import { renderSoundscapeBar, attachSoundscapeBarListeners } from './components/soundscape_bar.js';
import { renderMiFitnessModal, attachMiFitnessListeners } from './components/mifitness.js';

// Services
import { checkAndPromptUpdate } from './services/updater.js';
import { scheduleDailyRoutineNotifications } from './services/notifications.js';
import { subscribeSoundscape } from './services/soundscape.js';

function renderApp() {
  const state = getState();
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Determine active tab body
  let tabBodyHtml = '';
  if (state.activeTab === 'quests') {
    tabBodyHtml = renderQuestsTab();
  } else if (state.activeTab === 'boss') {
    tabBodyHtml = renderBossTab();
  } else if (state.activeTab === 'workout') {
    tabBodyHtml = renderWorkoutTab();
  } else if (state.activeTab === 'library' || state.activeTab === 'cards') {
    tabBodyHtml = renderCardsTab();
  } else if (state.activeTab === 'settings') {
    tabBodyHtml = renderSettingsTab();
  } else {
    tabBodyHtml = renderQuestsTab();
  }

  // Active Modals
  let modalHtml = '';
  if (!state.onboardingDone || state.activeModal === 'assessment') {
    modalHtml = renderOnboardingModal();
  } else if (state.activeModal === 'inventory') {
    modalHtml = renderInventoryModal();
  } else if (state.activeModal === 'sharecard') {
    modalHtml = renderShareCardModal();
  } else if (state.activeModal === 'mifitness') {
    modalHtml = renderMiFitnessModal();
  } else if (state.activeModal === 'reader') {
    modalHtml = renderReaderModal();
  } else if (state.activeModal === 'meditation') {
    modalHtml = renderMeditationModal();
  } else if (state.activeModal === 'focus' || state.activeModal === 'pomodoro') {
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

      <!-- Floating Ambient Soundscape Controller Bar -->
      ${renderSoundscapeBar()}

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

  // Attach navigation listeners
  attachNavListeners(renderApp);

  // Attach floating soundscape bar listeners
  attachSoundscapeBarListeners(renderApp);

  // Attach active tab listeners
  if (state.activeTab === 'quests') {
    attachQuestsListeners(renderApp);
  } else if (state.activeTab === 'boss') {
    attachBossListeners(renderApp);
  } else if (state.activeTab === 'workout') {
    attachWorkoutListeners(renderApp);
  } else if (state.activeTab === 'library' || state.activeTab === 'cards') {
    attachCardsListeners(renderApp);
  } else if (state.activeTab === 'settings') {
    attachSettingsListeners(renderApp);
  }

  // Attach modal listeners if any modal is active
  if (!state.onboardingDone || state.activeModal === 'assessment') {
    attachOnboardingListeners(renderApp);
  } else if (state.activeModal === 'inventory') {
    attachInventoryListeners(renderApp);
  } else if (state.activeModal === 'sharecard') {
    attachShareCardListeners(renderApp);
  } else if (state.activeModal === 'mifitness') {
    attachMiFitnessListeners(renderApp);
  } else if (state.activeModal === 'reader') {
    attachReaderListeners(renderApp);
  } else if (state.activeModal === 'meditation') {
    attachMeditationListeners(renderApp);
  } else if (state.activeModal === 'focus' || state.activeModal === 'pomodoro') {
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

  // Soundscape reactive listener
  subscribeSoundscape(() => {
    renderApp();
  });

  // Schedule daily routine local notifications
  scheduleDailyRoutineNotifications();

  // Real-Time GitHub In-App Auto-Update Check on Startup
  setTimeout(() => {
    checkAndPromptUpdate(true);
  }, 1200);

  // Check again when user returns to app
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkAndPromptUpdate(true);
    }
  });
});
