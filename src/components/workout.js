/**
 * Workout Builder & Active Training Set Tracker
 * Schoenfeld hypertrophy volume landmarks, rest countdown timer, boss critical hit.
 */

import { getState, updateState, addXP } from '../services/storage.js';
import { playWhistleSound, playBossHitSound, playLevelUpSound, playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { keepScreenAwake } from '../services/keepawake.js';

let selectedDayKey = 'monday';
let activeWorkoutMode = false;
let completedSetsMap = {}; // exId -> count
let restTimerSeconds = 0;
let restTimerInterval = null;
let selectedRestDuration = 60;

const DAYS = [
  { key: 'monday', label: 'Pzt' },
  { key: 'tuesday', label: 'Sal' },
  { key: 'wednesday', label: 'Çar' },
  { key: 'thursday', label: 'Per' },
  { key: 'friday', label: 'Cum' },
  { key: 'saturday', label: 'Cmt' },
  { key: 'sunday', label: 'Paz' }
];

export function renderWorkoutModal() {
  const state = getState();
  const dayPlan = state.workouts[selectedDayKey] || { name: 'Özel Antrenman', exercises: [] };

  return `
    <div id="workoutModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-amber-500/40 p-5 shadow-[0_0_40px_rgba(245,158,11,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🏋️</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">ANTRENMAN & GELİŞİM STÜDYOSU</h2>
              <span class="text-[10px] text-slate-400">Progresif Yükleme (Schoenfeld) & Set Takibi</span>
            </div>
          </div>
          <button type="button" id="btnCloseWorkoutModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- 7-Day Day Selector Bar -->
        <div class="grid grid-cols-7 gap-1.5">
          ${DAYS.map(d => {
            const isSel = d.key === selectedDayKey;
            return `
              <button type="button" class="btn-workout-day py-2 rounded-xl border text-center transition ${isSel ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-day="${d.key}">
                <span class="block text-xs">${d.label}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Day Program Title & Add Exercise Button -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">PROGRAM PLANI:</span>
            <h3 class="text-sm font-bold text-white">${dayPlan.name}</h3>
          </div>
          <button type="button" id="btnAddExerciseBtn" class="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold hover:bg-amber-500/30 transition">
            + Hareket Ekle
          </button>
        </div>

        <!-- Rest Countdown Timer Box (If Active) -->
        <div class="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-300 font-bold">⏱️ Set Arası Dinlenme Sayacı:</span>
            <span id="workoutRestTimerDisplay" class="text-lg font-bold text-amber-400 font-mono">
              ${restTimerSeconds > 0 ? `${restTimerSeconds}s` : 'Hazır'}
            </span>
          </div>

          <!-- Rest presets -->
          <div class="grid grid-cols-4 gap-1.5 text-xs font-mono">
            ${[30, 60, 90, 120].map(s => `
              <button type="button" class="btn-rest-preset py-1.5 rounded-lg border text-center transition ${s === selectedRestDuration ? 'bg-amber-500/30 text-amber-200 border-amber-500/60 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-sec="${s}">
                ${s}s
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Exercise List -->
        <div class="space-y-2.5">
          ${dayPlan.exercises.map((ex, idx) => {
            const doneSets = completedSetsMap[ex.id] || 0;
            return `
              <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">${ex.name}</span>
                  <span class="text-[11px] font-mono text-amber-400 font-semibold">${ex.weight}</span>
                </div>

                <!-- Sets Checklist -->
                <div class="flex items-center gap-2">
                  ${Array(ex.sets).fill(0).map((_, setIdx) => {
                    const isDone = setIdx < doneSets;
                    return `
                      <button type="button" class="btn-toggle-set flex-1 py-1.5 rounded-lg border text-xs font-mono font-bold transition ${isDone ? 'bg-amber-500 text-black border-amber-400 shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}" data-ex="${ex.id}" data-set="${setIdx}">
                        ${isDone ? '✓' : `Set ${setIdx + 1}`}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Finish Workout & Deal Boss Damage Button -->
        <button type="button" id="btnFinishWorkout" class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          💥 ANTRENMANI BİTİR & BOSS'A KRİTİK VUR (-80 HP)
        </button>

      </div>
    </div>
  `;
}

export function attachWorkoutListeners(onUpdate) {
  // Close Modal
  const closeBtn = document.getElementById('btnCloseWorkoutModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      stopRestTimer();
      keepScreenAwake(false);
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Day tab switch
  document.querySelectorAll('.btn-workout-day').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDayKey = btn.getAttribute('data-day');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Rest duration preset
  document.querySelectorAll('.btn-rest-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRestDuration = Number(btn.getAttribute('data-sec'));
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Set toggle & auto rest trigger
  document.querySelectorAll('.btn-toggle-set').forEach(btn => {
    btn.addEventListener('click', () => {
      const exId = btn.getAttribute('data-ex');
      const setIdx = Number(btn.getAttribute('data-set'));
      const currentDone = completedSetsMap[exId] || 0;

      if (setIdx >= currentDone) {
        completedSetsMap[exId] = setIdx + 1;
        playClickSound();
        triggerHaptic('medium');
        startRestTimer(selectedRestDuration);
      } else {
        completedSetsMap[exId] = setIdx;
        triggerHaptic('light');
      }

      if (onUpdate) onUpdate();
    });
  });

  // Add Exercise Prompt
  const addBtn = document.getElementById('btnAddExerciseBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const name = prompt('Hareket adı (Örn: Barbell Bench Press):');
      if (!name) return;
      const sets = Number(prompt('Set sayısı:', '4')) || 3;
      const reps = prompt('Tekrar sayısı (Örn: 10):', '10') || '10';
      const weight = prompt('Hedef ağırlık (Örn: 25 kg):', '20 kg') || 'Kişisel';

      const state = getState();
      const plan = state.workouts[selectedDayKey];
      const newEx = { id: 'ex_' + Date.now(), name, sets, reps, weight };
      const updatedPlan = { ...plan, exercises: [...plan.exercises, newEx] };

      updateState({
        workouts: { ...state.workouts, [selectedDayKey]: updatedPlan }
      });
      if (onUpdate) onUpdate();
    });
  }

  // Finish Workout
  const finishBtn = document.getElementById('btnFinishWorkout');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      stopRestTimer();
      keepScreenAwake(false);

      playBossHitSound();
      triggerHaptic('heavy');

      const state = getState();
      const bossDmg = 80;
      const newHp = Math.max(0, state.bossHp - bossDmg);

      addXP(50, 'STR');
      addXP(25, 'VIT');

      alert(`💥 TEBRİKLER! Antrenman başarıyla tamamlandı. Boss'a 80 Fiziksel Kritik Hasar vuruldu, +50 STR ve +25 VIT XP kazanıldı!`);

      updateState({
        bossHp: newHp,
        activeModal: null
      });

      if (onUpdate) onUpdate();
    });
  }
}

function startRestTimer(seconds) {
  stopRestTimer();
  keepScreenAwake(true);
  restTimerSeconds = seconds;

  restTimerInterval = setInterval(() => {
    restTimerSeconds--;
    const disp = document.getElementById('workoutRestTimerDisplay');
    if (disp) disp.textContent = `${restTimerSeconds}s`;

    if (restTimerSeconds <= 0) {
      stopRestTimer();
      playWhistleSound();
      triggerHaptic('heavy');
      if (disp) disp.textContent = 'Dinlenme Bitti! Yeni Sete Başla 🔥';
    }
  }, 1000);
}

function stopRestTimer() {
  if (restTimerInterval) {
    clearInterval(restTimerInterval);
    restTimerInterval = null;
  }
  restTimerSeconds = 0;
}
