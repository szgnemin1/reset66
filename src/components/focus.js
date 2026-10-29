/**
 * Focus Timer & Single-Task Pomodoro (Cal Newport Deep Work)
 * Eliminates attention residue and trains prefrontal focus stamina.
 */

import { getState, updateState, addXP } from '../services/storage.js';
import { playClickSound, playLevelUpSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { keepScreenAwake } from '../services/keepawake.js';

let focusMinutes = 25;
let focusSecondsRemaining = 1500;
let focusInterval = null;

export function renderFocusModal() {
  const min = Math.floor(focusSecondsRemaining / 60);
  const sec = focusSecondsRemaining % 60;
  const timeFormatted = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  return `
    <div id="focusModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-3xl bg-slate-900 border border-indigo-500/40 p-5 shadow-[0_0_40px_rgba(99,102,241,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">⏱️</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">PÜRDİKKAT ODAK BLOKLARI</h2>
              <span class="text-[10px] text-slate-400">Cal Newport: Tekil Görev & Sıfır Bölünme</span>
            </div>
          </div>
          <button type="button" id="btnCloseFocusModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Big Circular Countdown Visual -->
        <div class="py-8 flex flex-col items-center justify-center">
          <div class="w-44 h-44 rounded-full border-4 border-indigo-500/40 bg-slate-950 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            <span id="focusTimeDisplay" class="text-4xl font-black font-mono tracking-tight text-white">${timeFormatted}</span>
            <span class="text-[10px] font-mono text-indigo-400 font-bold uppercase mt-1 tracking-widest">
              ${focusInterval ? 'ODAK AKTİF' : 'DURAKLATILDI'}
            </span>
          </div>
        </div>

        <!-- Duration Presets -->
        <div class="grid grid-cols-3 gap-2 text-xs font-mono">
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${focusMinutes === 25 ? 'bg-indigo-500 text-black border-indigo-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-min="25">
            25 Dk (Klasik)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${focusMinutes === 50 ? 'bg-indigo-500 text-black border-indigo-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-min="50">
            50 Dk (Derin)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${focusMinutes === 90 ? 'bg-indigo-500 text-black border-indigo-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-min="90">
            90 Dk (Huberman)
          </button>
        </div>

        <!-- Start / Pause Button -->
        <button type="button" id="btnToggleFocusTimer" class="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          ${focusInterval ? '⏸️ ODAK BLOKUNU DURDUR' : '▶️ ODAK BLOKUNU BAŞLAT'}
        </button>

      </div>
    </div>
  `;
}

export function attachFocusListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseFocusModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      stopFocusTimer();
      keepScreenAwake(false);
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  document.querySelectorAll('.btn-focus-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      focusMinutes = Number(btn.getAttribute('data-min'));
      focusSecondsRemaining = focusMinutes * 60;
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  const toggleBtn = document.getElementById('btnToggleFocusTimer');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (focusInterval) {
        stopFocusTimer();
      } else {
        startFocusTimer();
      }
      if (onUpdate) onUpdate();
    });
  }
}

function startFocusTimer() {
  keepScreenAwake(true);
  playClickSound();
  triggerHaptic('medium');

  focusInterval = setInterval(() => {
    focusSecondsRemaining--;
    const min = Math.floor(focusSecondsRemaining / 60);
    const sec = focusSecondsRemaining % 60;
    const disp = document.getElementById('focusTimeDisplay');
    if (disp) disp.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    if (focusSecondsRemaining <= 0) {
      stopFocusTimer();
      playLevelUpSound();
      triggerHaptic('success');
      addXP(focusMinutes, 'FOC');
      alert(`⏱️ Pürdikkat Odak Seansı Tamamlandı! +${focusMinutes} Odak (FOC) XP kazandın!`);
      updateState({ activeModal: null });
    }
  }, 1000);
}

function stopFocusTimer() {
  if (focusInterval) {
    clearInterval(focusInterval);
    focusInterval = null;
  }
}
