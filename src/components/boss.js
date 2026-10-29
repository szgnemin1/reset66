/**
 * Weekly Boss Arena & 66-Day "Don't Break The Chain" (Zinciri Kırma) Map (Tab 2: Boss)
 * Features x2 Enraged Boss Penalty, Heart Shields, and Connected Chain Visualizer.
 */

import { getState, updateState, addXP, damageBoss } from '../services/storage.js';
import { BOSS_LORE } from '../data/constants.js';
import { triggerHaptic } from '../services/haptics.js';
import { playBossHitSound, playLevelUpSound } from '../services/audio.js';

export function renderBossTab() {
  const state = getState();
  const currentWeek = Math.min(10, Math.ceil(state.currentDay / 7));
  const bossIdx = currentWeek - 1;
  const currentBoss = BOSS_LORE[bossIdx] || BOSS_LORE[0];
  const hpPct = Math.max(0, Math.min(100, Math.round((state.bossHp / state.bossMaxHp) * 100)));

  const heartsHtml = Array(3).fill(0).map((_, i) => {
    const isFull = i < state.hearts;
    return `<span class="text-xl ${isFull ? 'text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]' : 'text-slate-700 opacity-40'}">❤️</span>`;
  }).join(' ');

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Weekly Shadow Boss Battle Arena -->
      <div class="relative overflow-hidden rounded-3xl ${state.bossIsEnraged ? 'bg-gradient-to-b from-rose-950 via-slate-950 to-black border-2 border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.4)]' : 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.15)]'} p-5">
        
        <!-- Enraged / Berserk Warning Banner -->
        ${state.bossIsEnraged ? `
          <div class="mb-3 p-2.5 rounded-xl bg-rose-600/30 border border-rose-500 text-rose-200 text-xs font-mono font-bold flex items-center gap-2 animate-pulse">
            <span class="text-base">🔥</span>
            <span>BERSERK MODU: Dün görev atlandığı için Boss X2 GÜÇLENDİ! Maks HP 2 katına çıktı!</span>
          </div>
        ` : ''}

        <!-- Boss Top Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">👾</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-widest">[ ${currentWeek}. HAFTA ZİNDANI ]</span>
              <h2 class="text-base font-black text-white">${currentBoss.name}</h2>
            </div>
          </div>

          <!-- Player Health Hearts -->
          <div class="flex flex-col items-end">
            <span class="text-[9px] font-mono text-slate-400 font-bold uppercase">AVCI CANI</span>
            <div class="flex items-center gap-1 mt-0.5">
              ${heartsHtml}
            </div>
          </div>
        </div>

        <!-- Boss Avatar & Status -->
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
          
          <!-- Avatar -->
          <div class="relative rounded-2xl overflow-hidden border ${state.bossIsEnraged ? 'border-rose-500 ring-2 ring-rose-500/50' : 'border-rose-500/40'} bg-slate-950 h-44 flex items-center justify-center group">
            <img src="./assets/boss.jpg" alt="${currentBoss.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" onerror="this.src='./assets/boss.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-2 left-2 right-2">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/50 text-rose-100 font-bold block truncate text-center">
                ${currentBoss.archetype}
              </span>
            </div>
          </div>

          <!-- Status & Combat Actions -->
          <div class="sm:col-span-2 space-y-3">
            <p class="text-xs text-slate-300 leading-relaxed">
              ${currentBoss.desc}
            </p>

            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div class="text-[10px] font-mono text-cyan-400 font-bold">🎯 BİLİMSEL ZAYIFLIK:</div>
              <div class="text-white font-medium">${currentBoss.weakness}</div>
            </div>

            <!-- HP Bar -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-slate-400">Boss Sağlığı:</span>
                <span class="text-rose-400 font-black">${state.bossHp} / ${state.bossMaxHp} HP (%${hpPct})</span>
              </div>
              <div class="h-2.5 w-full rounded-full bg-slate-950 border border-slate-800 overflow-hidden relative">
                <div class="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 transition-all duration-300 shadow-[0_0_12px_rgba(244,63,94,0.6)]" style="width: ${hpPct}%"></div>
              </div>
            </div>

            <!-- Manual Strike Button -->
            <button type="button" id="btnBossManualStrike" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono uppercase tracking-wider transition shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              💥 KRİTİK İRADE SALDIRISI (-60 HP)
            </button>
          </div>

        </div>

      </div>

      <!-- 66 Günlük "Zinciri Kırma" (Don't Break The Chain) Haritası -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 shadow-sm">
        
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span>⛓️ 66 GÜNLÜK "ZİNCİRİ KIRMA" HARİTASI</span>
            </h3>
            <span class="text-[10px] text-slate-400">Her gün mühürlenen halka seni kırılmaz bir iradeye dönüştürür.</span>
          </div>

          <span class="text-xs font-mono text-amber-400 font-bold">
            🔥 ${state.streak} Günlük Kesintisiz Zincir
          </span>
        </div>

        <!-- Legend -->
        <div class="flex items-center gap-3 text-[10px] font-mono text-slate-400 flex-wrap">
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Mühürlendi</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Kırıldı</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span> Bugün</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span> Kilitli</span>
        </div>

        <!-- Chain Links Grid -->
        <div class="grid grid-cols-11 sm:grid-cols-22 gap-2 pt-2">
          ${Array(66).fill(0).map((_, i) => {
            const dayNum = i + 1;
            const status = state.chainDays[dayNum] || (dayNum < state.currentDay ? 'done' : (dayNum === state.currentDay ? 'current' : 'locked'));

            let nodeClass = 'bg-slate-950 border-slate-800 text-slate-600';
            let iconText = dayNum;

            if (status === 'done') {
              nodeClass = 'bg-emerald-500/25 border-emerald-500/60 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]';
            } else if (status === 'missed') {
              nodeClass = 'bg-rose-500/30 border-rose-500/80 text-rose-300 line-through shadow-[0_0_8px_rgba(244,63,94,0.4)]';
            } else if (status === 'current') {
              nodeClass = 'bg-cyan-500 text-black border-cyan-400 font-black shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110';
            }

            return `
              <div class="aspect-square rounded-xl border flex items-center justify-center text-[10px] font-mono font-bold transition-all ${nodeClass}">
                ${iconText}
              </div>
            `;
          }).join('')}
        </div>

      </div>

    </div>
  `;
}

export function attachBossListeners(onUpdate) {
  const strikeBtn = document.getElementById('btnBossManualStrike');
  if (strikeBtn) {
    strikeBtn.addEventListener('click', () => {
      const state = getState();
      if (state.bossHp <= 0) {
        alert('🎉 Tebrikler! Bu haftanın patronu zaten yok edildi!');
        return;
      }

      playBossHitSound();
      triggerHaptic('heavy');

      const res = damageBoss(60);
      if (res.isDefeated) {
        playLevelUpSound();
        triggerHaptic('success');
        addXP(100, 'STR');
        alert('🏆 ZAFER! Boss yok edildi! +100 STR XP ve Zafer Rozeti kazandın!');
      } else {
        alert(`💥 Boss'a 60 Hasar vuruldu! Kalan Boss Canı: ${res.newHp} HP`);
      }

      if (onUpdate) onUpdate();
    });
  }
}
