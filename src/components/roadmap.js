/**
 * 66-Day Roadmap & Shadow Boss Dungeon Arena (Tab 2: Yol Haritası)
 * Grounded in UCL (2010) 3-phase habit automation and 10 psychological archetypes.
 */

import { getState, updateState, addXP } from '../services/storage.js';
import { BOSS_LORE } from '../data/constants.js';
import { triggerHaptic } from '../services/haptics.js';
import { playBossHitSound, playLevelUpSound, playClickSound } from '../services/audio.js';

export function renderRoadmapTab() {
  const state = getState();
  const currentWeek = Math.min(10, Math.ceil(state.currentDay / 7));
  const bossIdx = currentWeek - 1;
  const currentBoss = BOSS_LORE[bossIdx] || BOSS_LORE[0];
  const hpPct = Math.max(0, Math.min(100, Math.round((state.bossHp / state.bossMaxHp) * 100)));

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Weekly Shadow Boss Battle Arena -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-rose-500/30 p-4 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚔️</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-widest">[ ${currentWeek}. HAFTA ZİNDANI ]</span>
              <h2 class="text-sm font-black text-white">${currentBoss.name}</h2>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-rose-400">${state.bossHp} / ${state.bossMaxHp} HP</span>
        </div>

        <!-- Boss Visual & Status -->
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          
          <!-- Boss Avatar -->
          <div class="relative rounded-xl overflow-hidden border border-rose-500/40 bg-slate-950 h-36 flex items-center justify-center group">
            <img src="./assets/boss.jpg" alt="${currentBoss.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" onerror="this.src='./assets/boss.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-2 left-2 right-2">
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold block truncate">
                ${currentBoss.archetype}
              </span>
            </div>
          </div>

          <!-- Boss Description & HP Bar -->
          <div class="sm:col-span-2 space-y-2.5">
            <p class="text-xs text-slate-300 leading-relaxed">
              ${currentBoss.desc}
            </p>

            <div class="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div class="text-[10px] font-mono text-cyan-400 font-bold">🎯 BİLİMSEL ZAYIFLIK:</div>
              <div class="text-white font-medium">${currentBoss.weakness}</div>
            </div>

            <!-- HP Bar -->
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Boss Sağlığı</span>
                <span class="text-rose-400 font-bold">%${hpPct}</span>
              </div>
              <div class="h-2 w-full rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 transition-all duration-300 shadow-[0_0_10px_rgba(244,63,94,0.5)]" style="width: ${hpPct}%"></div>
              </div>
            </div>

            <!-- Attack Button -->
            <button type="button" id="btnAttackBoss" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-xs font-mono uppercase tracking-wider transition active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              💥 KRİTİK FİZİKSEL VURUŞ YAP (-75 HP)
            </button>
          </div>

        </div>

      </div>

      <!-- 66-Day UCL Neuroplasticity Roadmap (3 Phases) -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-4">
        
        <div>
          <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <span>🗺️ 66 GÜNLÜK NÖROPLASTİSİTE YOL HARİTASI</span>
          </h3>
          <p class="text-[11px] text-slate-400">UCL Dr. Phillippa Lally (2010) Otomatizm Evreleri</p>
        </div>

        <!-- 3 Phase Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          <!-- Phase 1 -->
          <div class="p-3 rounded-xl border transition ${state.currentDay <= 21 ? 'bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'bg-slate-950/60 border-slate-800 opacity-70'}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-cyan-300">FAZ 1 (Gün 1-21)</span>
              <span class="text-[10px] font-mono text-cyan-400 font-bold">${state.currentDay <= 21 ? 'AKTİF' : 'TAMAMLANDI ✓'}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Yıkım & Direnç</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Eski konfor nöronlarının kırılması. En yüksek zihinsel sürtünme evresi.
            </p>
          </div>

          <!-- Phase 2 -->
          <div class="p-3 rounded-xl border transition ${state.currentDay > 21 && state.currentDay <= 44 ? 'bg-purple-950/30 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'bg-slate-950/60 border-slate-800 opacity-70'}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-purple-300">FAZ 2 (Gün 22-44)</span>
              <span class="text-[10px] font-mono text-purple-400 font-bold">${state.currentDay > 21 && state.currentDay <= 44 ? 'AKTİF' : (state.currentDay > 44 ? 'TAMAMLANDI ✓' : 'KİLİTLİ')}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Kurulum & Ritim</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Yeni sinaptik bağlantıların oluşması. Davranışlar ritim kazanır.
            </p>
          </div>

          <!-- Phase 3 -->
          <div class="p-3 rounded-xl border transition ${state.currentDay > 44 ? 'bg-amber-950/30 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'bg-slate-950/60 border-slate-800 opacity-70'}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-amber-300">FAZ 3 (Gün 45-66)</span>
              <span class="text-[10px] font-mono text-amber-400 font-bold">${state.currentDay > 44 ? 'AKTİF' : 'KİLİTLİ'}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Bütünleşme & Kimlik</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Otomatizmin tamamlanması. Efor gerektirmeyen yeni Solo Hunter kimliği.
            </p>
          </div>

        </div>

        <!-- 66 Days Mini Grid -->
        <div class="pt-2">
          <div class="text-[11px] font-mono text-slate-400 mb-2">66 GÜNLÜK NÖRAL MATRİS:</div>
          <div class="grid grid-cols-11 sm:grid-cols-22 gap-1.5">
            ${Array(66).fill(0).map((_, i) => {
              const dayNum = i + 1;
              const isPast = dayNum < state.currentDay;
              const isCurrent = dayNum === state.currentDay;
              return `
                <div class="aspect-square rounded-md flex items-center justify-center text-[9px] font-mono font-bold transition ${isCurrent ? 'bg-cyan-500 text-black shadow-[0_0_8px_rgba(6,182,212,0.8)] scale-110' : (isPast ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-950 border border-slate-800 text-slate-600')}">
                  ${dayNum}
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

export function attachRoadmapListeners(onUpdate) {
  const attackBtn = document.getElementById('btnAttackBoss');
  if (attackBtn) {
    attackBtn.addEventListener('click', () => {
      const state = getState();
      if (state.bossHp <= 0) {
        alert('🎉 Bu haftanın boss patronu zaten yok edildi!');
        return;
      }

      playBossHitSound();
      triggerHaptic('heavy');

      const dmg = 75;
      const newHp = Math.max(0, state.bossHp - dmg);
      updateState({ bossHp: newHp });

      if (newHp === 0) {
        playLevelUpSound();
        triggerHaptic('success');
        alert(`🏆 ZAFER! Boss yok edildi! +100 Bonus XP ve Zafer Rozeti kazandın!`);
        addXP(100, 'STR');
      }

      if (onUpdate) onUpdate();
    });
  }
}
