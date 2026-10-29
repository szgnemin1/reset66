/**
 * Floating Glassmorphic Bottom Navigation Dock
 * Authentic mobile navigation bar with glowing indicators.
 */

import { getState, updateState } from '../services/storage.js';
import { playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

const TABS = [
  { id: 'quests', label: 'Bugün', icon: '📋' },
  { id: 'roadmap', label: 'Harita', icon: '🗺️' },
  { id: 'tools', label: 'Stüdyo', icon: '🧰' },
  { id: 'cards', label: 'Zihin', icon: '🃏' },
  { id: 'profile', label: 'Profil', icon: '👤' }
];

export function renderBottomNav() {
  const state = getState();

  return `
    <nav class="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none">
      <div class="max-w-md mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] p-1.5 pointer-events-auto flex items-center justify-around">
        ${TABS.map(tab => {
          const isActive = state.activeTab === tab.id;
          return `
            <button type="button" class="btn-bottom-tab flex-1 py-1.5 px-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 group ${isActive ? 'bg-cyan-500/15 text-cyan-400 font-bold shadow-inner' : 'text-slate-400 hover:text-slate-200'}" data-tab="${tab.id}">
              <span class="text-lg leading-none transition-transform group-hover:scale-110 ${isActive ? 'scale-110' : ''}">${tab.icon}</span>
              <span class="text-[10px] font-mono mt-0.5 tracking-tight ${isActive ? 'text-cyan-300 font-bold' : 'text-slate-400'}">${tab.label}</span>
            </button>
          `;
        }).join('')}
      </div>
    </nav>
  `;
}

export function attachNavListeners(onUpdate) {
  document.querySelectorAll('.btn-bottom-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      playClickSound();
      triggerHaptic('light');
      updateState({ activeTab: tab });
      if (onUpdate) onUpdate();
    });
  });
}
