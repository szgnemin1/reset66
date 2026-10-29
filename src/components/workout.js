/**
 * Advanced Workout Builder & Filterable Exercise Database
 * Features: Equipment filtering (Bodyweight, Dumbbell, Barbell, Band, Machine),
 * muscle filters, animated GIF/image demos from yuhonas/free-exercise-db,
 * rest countdown timer, and 1-tap addition to personal routine.
 */

import { EQUIPMENT_TYPES, MUSCLE_GROUPS, EXERCISE_DATABASE } from '../data/exercises.js';
import { getState, updateState, addXP, damageBoss } from '../services/storage.js';
import { playWhistleSound, playBossHitSound, playLevelUpSound, playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { keepScreenAwake } from '../services/keepawake.js';

let selectedEquipment = 'all';
let selectedMuscle = 'all';
let searchQuery = '';
let selectedDayKey = 'monday';
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

export function renderWorkoutTab() {
  const state = getState();
  const dayPlan = state.workouts[selectedDayKey] || { name: 'Özel Antrenman', exercises: [] };

  // Filter exercises
  const filteredExercises = EXERCISE_DATABASE.filter(ex => {
    const matchEquip = selectedEquipment === 'all' || ex.equipment === selectedEquipment;
    const matchMuscle = selectedMuscle === 'all' || ex.muscle === selectedMuscle;
    const matchSearch = !searchQuery || ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || ex.targetMuscles.toLowerCase().includes(searchQuery.toLowerCase());
    return matchEquip && matchMuscle && matchSearch;
  });

  return `
    <div class="space-y-5 animate-fadeIn">
      
      <!-- Top Title & Subtitle -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <span>🏋️ SPOR PROGRAMI & EGZERSİZ VERİTABANI</span>
          </h2>
          <span class="text-[11px] text-slate-400">Ekipmanlı / Ekipmansız filtreleme, hareket rehberi & dinlenme sayacı.</span>
        </div>
      </div>

      <!-- Active Day Workout Tracker Box -->
      <div class="rounded-3xl bg-slate-900/90 border border-amber-500/40 p-4 sm:p-5 space-y-4 shadow-sm">
        
        <!-- Day Selector Pills -->
        <div class="flex items-center justify-between gap-1 pb-3 border-b border-slate-800">
          <div class="grid grid-cols-7 gap-1 flex-1">
            ${DAYS.map(d => {
              const isSel = d.key === selectedDayKey;
              return `
                <button type="button" class="btn-workout-day py-1.5 rounded-xl border text-center transition ${isSel ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'}" data-day="${d.key}">
                  <span class="block text-xs font-mono">${d.label}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Selected Day Plan Info & Rest Timer -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">GÜNÜN PROGRAMI:</span>
            <h3 class="text-sm font-bold text-white">${dayPlan.name}</h3>
          </div>

          <!-- Rest Timer Box -->
          <div class="flex items-center gap-2.5">
            <div class="text-right">
              <span class="text-[9px] font-mono text-slate-400 block uppercase">DİNLENME SAYACI</span>
              <span id="workoutRestTimerDisplay" class="text-base font-mono font-bold text-amber-400">
                ${restTimerSeconds > 0 ? `${restTimerSeconds}s` : 'Hazır'}
              </span>
            </div>
            <div class="flex items-center gap-1 text-[10px] font-mono">
              ${[30, 60, 90].map(s => `
                <button type="button" class="btn-rest-preset px-2 py-1 rounded-lg border transition ${s === selectedRestDuration ? 'bg-amber-500/30 text-amber-200 border-amber-500/60 font-bold' : 'bg-slate-900 border-slate-800 text-slate-400'}" data-sec="${s}">
                  ${s}s
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Current Day Exercises Sets Tracker -->
        <div class="space-y-2.5">
          ${dayPlan.exercises.map((ex) => {
            const doneSets = completedSetsMap[ex.id] || 0;
            return `
              <div class="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-white">${ex.name}</span>
                    <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">
                      ${ex.equipment === 'bodyweight' ? 'Vücut Ağ.' : ex.weight}
                    </span>
                  </div>
                  <span class="text-[10px] text-slate-400">${ex.sets} Set × ${ex.reps} Tekrar</span>
                </div>

                <!-- Sets Row -->
                <div class="flex items-center gap-1.5">
                  ${Array(ex.sets).fill(0).map((_, setIdx) => {
                    const isDone = setIdx < doneSets;
                    return `
                      <button type="button" class="btn-toggle-set px-3 py-1 rounded-lg border text-xs font-mono font-bold transition ${isDone ? 'bg-amber-500 text-black border-amber-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}" data-ex="${ex.id}" data-set="${setIdx}">
                        ${isDone ? '✓' : `S${setIdx + 1}`}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Finish Workout & Deal Boss Damage Button -->
        <button type="button" id="btnFinishDayWorkout" class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          💥 GÜNÜN ANTRENMANINI BİTİR & BOSS'A VUR (-50 HP)
        </button>

      </div>

      <!-- Filterable Exercise Library (GitHub Free-Exercise-DB Repo) -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 space-y-4">
        
        <div>
          <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <span>📚 TÜM EGZERSİZLER & HAREKET REHBERİ (GİTHUB FREE-EXERCİSE-DB)</span>
          </h3>
          <p class="text-[11px] text-slate-400">Ekipmanına ve hedefine göre hareket ara, GIF rehberini incele ve programına ekle.</p>
        </div>

        <!-- Equipment Filter Row -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">EKİPMAN SEÇİMİ:</span>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            ${EQUIPMENT_TYPES.map(eq => `
              <button type="button" class="btn-filter-equip px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${eq.id === selectedEquipment ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20' : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'}" data-equip="${eq.id}">
                ${eq.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Muscle Group Filter Row -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">HEDEF KAS GRUBU:</span>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            ${MUSCLE_GROUPS.map(m => `
              <button type="button" class="btn-filter-muscle px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${m.id === selectedMuscle ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'}" data-muscle="${m.id}">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative">
          <input type="text" id="exerciseSearchInput" placeholder="Hareket veya kas adı ara (Örn: Şınav, Göğüs, Squat)..." value="${searchQuery}" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 font-sans" />
        </div>

        <!-- Filtered Exercise Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          ${filteredExercises.map(ex => `
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition space-y-3 flex flex-col justify-between">
              
              <div class="space-y-2">
                <!-- Image Demo -->
                <div class="w-full h-36 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group flex items-center justify-center">
                  <img src="${ex.gif}" alt="${ex.name}" class="w-full h-full object-cover transition duration-300 group-hover:scale-105" onerror="this.src='./assets/hero.jpg'" loading="lazy" />
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/80 text-amber-300 font-bold uppercase backdrop-blur-sm">
                      ${ex.equipment}
                    </span>
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/80 text-cyan-300 font-bold backdrop-blur-sm">
                      ${ex.muscle}
                    </span>
                  </div>
                </div>

                <!-- Info -->
                <div>
                  <h4 class="text-xs font-bold text-white">${ex.name}</h4>
                  <p class="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">${ex.instructions}</p>
                </div>
              </div>

              <!-- Add to Plan Button -->
              <button type="button" class="btn-add-exercise-to-plan w-full py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-mono font-bold transition flex items-center justify-center gap-1.5" data-id="${ex.id}" data-name="${ex.name}" data-equip="${ex.equipment}">
                <span>+ Bu Güne Ekle (${DAYS.find(d => d.key === selectedDayKey)?.label})</span>
              </button>

            </div>
          `).join('')}
        </div>

      </div>

    </div>
  `;
}

export function attachWorkoutListeners(onUpdate) {
  // Day switch
  document.querySelectorAll('.btn-workout-day').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDayKey = btn.getAttribute('data-day');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Rest preset
  document.querySelectorAll('.btn-rest-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRestDuration = Number(btn.getAttribute('data-sec'));
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Set toggle & auto rest
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

  // Equipment Filter
  document.querySelectorAll('.btn-filter-equip').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedEquipment = btn.getAttribute('data-equip');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Muscle Filter
  document.querySelectorAll('.btn-filter-muscle').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedMuscle = btn.getAttribute('data-muscle');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Search input
  const searchInput = document.getElementById('exerciseSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (onUpdate) onUpdate();
    });
  }

  // Add Exercise to Current Day Plan
  document.querySelectorAll('.btn-add-exercise-to-plan').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const equipment = btn.getAttribute('data-equip');

      const state = getState();
      const plan = state.workouts[selectedDayKey];
      const newEx = {
        id: 'ex_' + Date.now(),
        name,
        sets: 4,
        reps: '10',
        weight: equipment === 'bodyweight' ? 'Vücut Ağ.' : '15 kg',
        equipment
      };

      const updatedPlan = { ...plan, exercises: [...plan.exercises, newEx] };
      updateState({
        workouts: { ...state.workouts, [selectedDayKey]: updatedPlan }
      });

      playQuestCompleteSound();
      triggerHaptic('success');
      alert(`✅ "${name}" hareketi ${DAYS.find(d => d.key === selectedDayKey)?.label} gününe eklendi!`);

      if (onUpdate) onUpdate();
    });
  });

  // Finish Workout Action
  const finishBtn = document.getElementById('btnFinishDayWorkout');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      stopRestTimer();
      keepScreenAwake(false);

      playBossHitSound();
      triggerHaptic('heavy');

      const state = getState();
      // Mark workout habit completed
      const updatedHabits = state.todayHabits.map(h => {
        if (h.id === 'q_workout') {
          return { ...h, current: 45, completed: true };
        }
        return h;
      });

      damageBoss(50);
      addXP(50, 'STR');

      alert(`💥 TEBRİKLER! Antrenman başarıyla mühürlendi. Boss'a 50 Fiziksel Hasar vuruldu ve +50 STR XP kazanıldı!`);

      updateState({
        todayHabits: updatedHabits
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
      if (disp) disp.textContent = 'Yeni Sete Başla 🔥';
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
