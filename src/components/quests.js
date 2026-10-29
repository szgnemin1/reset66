/**
 * Daily Quests & Bento Mini Tools Hub (Tab 1: Bugün)
 * Replicates Life Reset's core quest checklist with gamified RPG toggles.
 */

import { getState, updateState, addXP } from '../services/storage.js';
import { PILLARS } from '../data/constants.js';
import { triggerHaptic } from '../services/haptics.js';
import { playQuestCompleteSound, playLevelUpSound, playClickSound } from '../services/audio.js';

export function renderQuestsTab() {
  const state = getState();
  const completedCount = state.todayHabits.filter(h => h.completed).length;
  const totalCount = state.todayHabits.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Bento Quick Action Bar (Mini Tools Shortcuts) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        
        <!-- Tool 1: Meditation -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30 text-left transition hover:border-purple-500/70 hover:scale-[1.02] shadow-sm group" data-tool="meditation">
          <div class="flex items-center justify-between">
            <span class="text-xl">🧘</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">ZİHİN</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-purple-300">Meditasyon</span>
          <span class="text-[10px] text-slate-400">4 Ritim & Frekanslar</span>
        </button>

        <!-- Tool 2: Workout -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/30 text-left transition hover:border-amber-500/70 hover:scale-[1.02] shadow-sm group" data-tool="workout">
          <div class="flex items-center justify-between">
            <span class="text-xl">🏋️</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">GÜÇ</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-amber-300">Antrenman</span>
          <span class="text-[10px] text-slate-400">Set & Dinlenme Sayacı</span>
        </button>

        <!-- Tool 3: Focus Pomodoro -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 text-left transition hover:border-indigo-500/70 hover:scale-[1.02] shadow-sm group" data-tool="pomodoro">
          <div class="flex items-center justify-between">
            <span class="text-xl">⏱️</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">ODAK</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-indigo-300">Pürdikkat</span>
          <span class="text-[10px] text-slate-400">25 Dk Derin Blok</span>
        </button>

        <!-- Tool 4: Bio-Sync Sleep -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-left transition hover:border-cyan-500/70 hover:scale-[1.02] shadow-sm group" data-tool="sleep">
          <div class="flex items-center justify-between">
            <span class="text-xl">⌚</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">BİYO-SENK</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-cyan-300">Uyku & Nabız</span>
          <span class="text-[10px] text-slate-400" id="bentoSleepStatus">${state.sleepData.hasRestBuff ? '⚡ +%15 XP Buff' : 'Senkronize Et'}</span>
        </button>

      </div>

      <!-- Daily Quests Section Header -->
      <div class="flex items-center justify-between pt-1">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>⚔️ GÜNLÜK GÖREVLER (DAILY QUESTS)</span>
          </h2>
          <span class="text-[11px] text-slate-400">Gece 00:00 olmadan tamamla, XP ve nitelik kazan.</span>
        </div>
        <span class="text-xs font-mono font-bold ${completedCount === totalCount ? 'text-emerald-400' : 'text-slate-400'}">
          ${completedCount}/${totalCount} (%${progressPct})
        </span>
      </div>

      <!-- Quests Cards List -->
      <div class="space-y-2.5">
        ${state.todayHabits.map((habit, idx) => {
          const pillar = PILLARS[habit.pillar] || { name: habit.pillar, color: 'cyan', icon: '⚡' };
          const isDone = habit.completed;

          return `
            <div class="p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${isDone ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}">
              
              <!-- Left Info -->
              <div class="flex items-center gap-3 min-w-0">
                <span class="text-2xl shrink-0">${pillar.icon}</span>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold ${isDone ? 'line-through text-slate-400' : 'text-white'} truncate">
                      ${habit.title}
                    </span>
                    <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-bold shrink-0">
                      ${pillar.name}
                    </span>
                  </div>
                  <p class="text-[11px] text-slate-400 leading-tight truncate mt-0.5">
                    ${habit.desc}
                  </p>
                </div>
              </div>

              <!-- Right Checkbox Toggle -->
              <button type="button" class="btn-toggle-habit shrink-0 px-3 py-2 rounded-xl border text-xs font-mono font-bold transition flex items-center gap-1.5 ${isDone ? 'bg-emerald-500 text-black border-emerald-400 shadow-md shadow-emerald-500/20' : 'bg-slate-950 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/20'}" data-idx="${idx}">
                <span>${isDone ? 'TAMAMLANDI ✓' : `+${habit.xp} XP`}</span>
              </button>

            </div>
          `;
        }).join('')}
      </div>

      <!-- Hard Mode & Finish Day Row -->
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <button type="button" id="btnToggleHardMode" class="px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition ${state.hardMode ? 'bg-rose-500/20 text-rose-300 border-rose-500/60 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-slate-950 text-slate-400 border-slate-800'}">
            ☠️ Zor Mod: ${state.hardMode ? 'AÇIK (Tavizsiz)' : 'KAPALI'}
          </button>
          <span class="text-[11px] text-slate-400">
            ${state.hardMode ? '%70 altı tamamlamada -40 XP & Seri Sıfırlanır.' : 'Standart alışkanlık takibi modu.'}
          </span>
        </div>

        <button type="button" id="btnCompleteDay" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          GÜNÜ MÜHÜRLE & BOSS'A SALDIR ⚔️
        </button>
      </div>

    </div>
  `;
}

export function attachQuestsListeners(onUpdate) {
  // Mini Tools Launcher buttons
  document.querySelectorAll('.btn-open-tool').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.getAttribute('data-tool');
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: tool });
      if (onUpdate) onUpdate();
    });
  });

  // Toggle Habit checkboxes
  document.querySelectorAll('.btn-toggle-habit').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-idx'));
      const state = getState();
      const habit = state.todayHabits[idx];
      const newDone = !habit.completed;

      const updatedHabits = [...state.todayHabits];
      updatedHabits[idx] = { ...habit, completed: newDone };

      if (newDone) {
        playQuestCompleteSound();
        triggerHaptic('medium');
        addXP(habit.xp, habit.pillar);
      } else {
        playClickSound();
        triggerHaptic('light');
      }

      updateState({ todayHabits: updatedHabits });
      if (onUpdate) onUpdate();
    });
  });

  // Toggle Hard Mode
  const hardBtn = document.getElementById('btnToggleHardMode');
  if (hardBtn) {
    hardBtn.addEventListener('click', () => {
      const state = getState();
      playClickSound();
      triggerHaptic('medium');
      updateState({ hardMode: !state.hardMode });
      if (onUpdate) onUpdate();
    });
  }

  // Complete Day
  const compBtn = document.getElementById('btnCompleteDay');
  if (compBtn) {
    compBtn.addEventListener('click', () => {
      const state = getState();
      const completedCount = state.todayHabits.filter(h => h.completed).length;
      const totalCount = state.todayHabits.length;
      const pct = (completedCount / totalCount);

      if (state.hardMode && pct < 0.7) {
        triggerHaptic('error');
        alert(`☠️ ZOR MOD CEZASI: Görevlerin %70'ini tamamlamadın! Serin sıfırlandı ve 40 XP kaybettin.`);
        updateState({
          streak: 1,
          xp: Math.max(0, state.xp - 40),
          hearts: Math.max(0, state.hearts - 1)
        });
        if (onUpdate) onUpdate();
        return;
      }

      playLevelUpSound();
      triggerHaptic('success');
      alert(`🎉 Tebrikler Avcı! Gün ${state.currentDay} başarıyla mühürlendi. Boss zindanına ilerleniyor.`);
      
      const nextDay = Math.min(66, state.currentDay + 1);
      const nextStreak = state.streak + 1;
      const resetHabits = state.todayHabits.map(h => ({ ...h, completed: false }));

      updateState({
        currentDay: nextDay,
        streak: nextStreak,
        todayHabits: resetHabits,
        activeTab: 'roadmap' // Navigate to roadmap to view boss damage
      });

      if (onUpdate) onUpdate();
    });
  }
}
