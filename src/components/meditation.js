/**
 * Advanced Meditation & Mindfulness Studio
 * Concentric pulsing breathing orb, 4 techniques, Web Audio procedural frequencies.
 */

import { MED_TECHNIQUES } from '../data/constants.js';
import { getState, updateState, addXP } from '../services/storage.js';
import {
  playTibetanBowl,
  startBinauralBeats,
  stopBinauralBeats,
  getActiveBinauralType,
  startAmbientNoise,
  stopAmbientNoise,
  getActiveNoiseType,
  playClickSound
} from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { keepScreenAwake } from '../services/keepawake.js';

let selectedTechKey = 'box';
let selectedDurationMin = 5;
let timerSeconds = 300;
let timerInterval = null;
let currentPhaseIndex = 0;
let phaseCountdown = 0;

export function renderMeditationModal() {
  const tech = MED_TECHNIQUES[selectedTechKey];
  const activeBinaural = getActiveBinauralType();
  const activeNoise = getActiveNoiseType();

  const min = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  const timeFormatted = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  return `
    <div id="meditationModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🧘</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">FARKINDALIK & NEFES STÜDYOSU</h2>
              <span class="text-[10px] text-slate-400" id="medTechSubtitle">${tech.sub}</span>
            </div>
          </div>
          <button type="button" id="btnCloseMedModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Techniques Selector -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          ${Object.entries(MED_TECHNIQUES).map(([key, item]) => {
            const isSel = key === selectedTechKey;
            return `
              <button type="button" class="btn-med-tech p-2 rounded-xl border text-center transition ${isSel ? 'bg-purple-500/20 border-purple-500/60 text-purple-200 font-bold shadow-sm' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'}" data-tech="${key}">
                <span class="block text-[11px] leading-tight truncate">${item.name.split(' ')[0]}</span>
                <span class="text-[9px] text-slate-500 block truncate">${key === 'sigh' ? 'Stanford 2023' : (key === 'box' ? '4-4-4-4' : (key === 'relax' ? '4-7-8' : 'Wim Hof'))}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Concentric Pulsing Breathing Orb & Live Instructions -->
        <div class="relative py-6 flex flex-col items-center justify-center min-h-[220px]">
          
          <!-- Outer Pulsing Rings -->
          <div id="medOrbRing3" class="absolute w-48 h-48 rounded-full border border-purple-500/20 transition-all duration-1000 scale-100"></div>
          <div id="medOrbRing2" class="absolute w-36 h-36 rounded-full border border-purple-500/30 transition-all duration-1000 scale-100"></div>

          <!-- Core Orb -->
          <div id="medOrbCore" class="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 via-cyan-500 to-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)] flex flex-col items-center justify-center transition-all duration-1000 text-center p-2">
            <span id="medPhaseLabel" class="text-xs font-black uppercase text-white tracking-widest">HAZIR</span>
            <span id="medPhaseTimer" class="text-lg font-mono font-bold text-white leading-none mt-0.5">--</span>
          </div>

          <!-- Instruction Text -->
          <p id="medInstructionText" class="mt-4 text-xs font-medium text-cyan-200 text-center max-w-xs transition">
            Nefes egzersizine başlamak için süreyi seç ve başlat butonuna bas.
          </p>

        </div>

        <!-- Timer & Duration Selector -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-400">Kalan Süre:</span>
            <span id="medTimerDisplay" class="text-xl font-bold text-purple-300 font-mono">${timeFormatted}</span>
          </div>

          <div class="grid grid-cols-4 gap-2">
            ${[3, 5, 10, 15].map(d => `
              <button type="button" class="btn-med-duration py-1.5 rounded-xl border text-xs font-mono font-bold transition ${d === selectedDurationMin ? 'bg-purple-500 text-black border-purple-400 shadow-md' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-dur="${d}">
                ${d} Dk
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Web Audio Procedural Frequency Mixer -->
        <div class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
          <div class="flex items-center justify-between text-[11px] font-mono">
            <span class="text-slate-300 font-bold">🎧 Web Audio Frekans Mikseri:</span>
            <span class="text-[10px] text-cyan-400">${activeBinaural ? `${activeBinaural.toUpperCase()} Açık` : 'Kapalı'}</span>
          </div>

          <!-- Binaural & Noise Buttons -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px]">
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${activeBinaural === 'alpha' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-binaural="alpha">
              Alfa 10Hz
            </button>
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${activeBinaural === 'theta' ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-binaural="theta">
              Teta 6Hz
            </button>
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${activeBinaural === 'gamma' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-binaural="gamma">
              Gama 40Hz
            </button>
            <button type="button" class="btn-audio-noise py-1.5 rounded-lg border text-center transition ${activeNoise === 'pink' ? 'bg-pink-500/20 text-pink-300 border-pink-500/50' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-noise="pink">
              Pembe
            </button>
            <button type="button" class="btn-audio-noise py-1.5 rounded-lg border text-center transition ${activeNoise === 'brown' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-noise="brown">
              Okyanus
            </button>
          </div>

          <!-- Tibetan Bowl Trigger -->
          <div class="pt-1 flex justify-end">
            <button type="button" id="btnPlayTibetBowl" class="text-[10px] font-mono text-purple-300 hover:text-purple-200 transition flex items-center gap-1">
              <span>🔔 432 Hz Tibet Çanı Çal</span>
            </button>
          </div>
        </div>

        <!-- Start / Stop Button -->
        <button type="button" id="btnToggleMedSession" class="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          ${timerInterval ? '⏸️ MEDİTASYONU DURDUR' : '▶️ MEDİTASYONU BAŞLAT'}
        </button>

      </div>
    </div>
  `;
}

export function attachMeditationListeners(onUpdate) {
  // Close Modal
  const closeBtn = document.getElementById('btnCloseMedModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      stopSession();
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Technique change
  document.querySelectorAll('.btn-med-tech').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedTechKey = btn.getAttribute('data-tech');
      playClickSound();
      triggerHaptic('light');
      resetBreathPhase();
      if (onUpdate) onUpdate();
    });
  });

  // Duration change
  document.querySelectorAll('.btn-med-duration').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDurationMin = Number(btn.getAttribute('data-dur'));
      timerSeconds = selectedDurationMin * 60;
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Binaural beats toggle
  document.querySelectorAll('.btn-audio-binaural').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-binaural');
      if (getActiveBinauralType() === type) {
        stopBinauralBeats();
      } else {
        startBinauralBeats(type);
      }
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Ambient noise toggle
  document.querySelectorAll('.btn-audio-noise').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-noise');
      if (getActiveNoiseType() === type) {
        stopAmbientNoise();
      } else {
        startAmbientNoise(type);
      }
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Play Tibetan Bowl
  const bowlBtn = document.getElementById('btnPlayTibetBowl');
  if (bowlBtn) {
    bowlBtn.addEventListener('click', () => {
      playTibetanBowl();
      triggerHaptic('medium');
    });
  }

  // Start / Pause Session
  const toggleBtn = document.getElementById('btnToggleMedSession');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (timerInterval) {
        stopSession();
      } else {
        startSession();
      }
      if (onUpdate) onUpdate();
    });
  }
}

function startSession() {
  keepScreenAwake(true);
  playTibetanBowl();
  triggerHaptic('medium');

  currentPhaseIndex = 0;
  const tech = MED_TECHNIQUES[selectedTechKey];
  phaseCountdown = tech.phases[0].sec;

  timerInterval = setInterval(() => {
    timerSeconds--;
    phaseCountdown--;

    if (phaseCountdown <= 0) {
      currentPhaseIndex = (currentPhaseIndex + 1) % tech.phases.length;
      phaseCountdown = tech.phases[currentPhaseIndex].sec;
      triggerHaptic('light');
    }

    updateOrbUI(tech.phases[currentPhaseIndex], phaseCountdown);

    if (timerSeconds <= 0) {
      finishMeditationSession();
    }
  }, 1000);
}

function stopSession() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  keepScreenAwake(false);
  stopBinauralBeats();
  stopAmbientNoise();
}

function resetBreathPhase() {
  currentPhaseIndex = 0;
  phaseCountdown = 0;
  timerSeconds = selectedDurationMin * 60;
}

function updateOrbUI(phase, countdown) {
  const labelEl = document.getElementById('medPhaseLabel');
  const timerEl = document.getElementById('medPhaseTimer');
  const instrEl = document.getElementById('medInstructionText');
  const orbCore = document.getElementById('medOrbCore');
  const orbRing2 = document.getElementById('medOrbRing2');
  const orbRing3 = document.getElementById('medOrbRing3');
  const timerDisp = document.getElementById('medTimerDisplay');

  if (labelEl) labelEl.textContent = phase.label;
  if (timerEl) timerEl.textContent = `${countdown}s`;
  if (instrEl) instrEl.textContent = phase.instr;

  if (orbCore) {
    if (phase.action === 'expand') {
      orbCore.style.transform = 'scale(1.35)';
      if (orbRing2) orbRing2.style.transform = 'scale(1.25)';
      if (orbRing3) orbRing3.style.transform = 'scale(1.15)';
    } else if (phase.action === 'contract') {
      orbCore.style.transform = 'scale(0.85)';
      if (orbRing2) orbRing2.style.transform = 'scale(0.95)';
      if (orbRing3) orbRing3.style.transform = 'scale(0.95)';
    } else {
      orbCore.style.transform = 'scale(1.1)';
    }
  }

  if (timerDisp) {
    const min = Math.floor(timerSeconds / 60);
    const sec = timerSeconds % 60;
    timerDisp.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
}

function finishMeditationSession() {
  stopSession();
  playTibetanBowl();
  triggerHaptic('success');

  const xpGained = selectedDurationMin * 10;
  addXP(xpGained, 'MND');

  alert(`🧘 Tebrikler! ${selectedDurationMin} dakikalık derin farkındalık seansı tamamlandı. +${xpGained} Zihin (MND) XP kazandın!`);

  updateState({ activeModal: null });
}
