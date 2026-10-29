/**
 * Player Status Header HUD & Daily Neuroscience Protocol Ticker
 * Solo Leveling Hunter Aesthetic with glowing XP Bar and Rank Badges.
 */

import { getState } from '../services/storage.js';
import { NEURO_TIPS } from '../data/constants.js';
import { getClassById } from '../data/classes.js';

export function renderHeader() {
  const state = getState();
  const rank = getRankTitle(state.level);
  const userClass = getClassById(state.userClass);
  const xpNeeded = state.level * 100;
  const xpPct = Math.min(100, Math.round((state.xp / xpNeeded) * 100));
  const tipIdx = Math.max(0, Math.min(65, state.currentDay - 1));
  const currentNeuroTip = NEURO_TIPS[tipIdx] || NEURO_TIPS[0];

  const heartsHtml = Array(3).fill(0).map((_, i) => {
    const isFull = i < state.hearts;
    return `<span class="transition-all ${isFull ? 'text-rose-500 scale-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'text-slate-700 opacity-40'} text-base">❤️</span>`;
  }).join('');

  return `
    <header class="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-cyan-500/30 p-4 shadow-[0_0_25px_rgba(6,182,212,0.12)] backdrop-blur-xl">
      <!-- Top Glow Accent Line -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <!-- Hunter Top Bar: Title, Day & Hearts -->
      <div class="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold">
            66
          </span>
          <div>
            <h1 class="text-sm font-black tracking-wider uppercase bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              RESET66 — SOLO HUNTER
            </h1>
            <span class="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest block truncate max-w-[210px]">
              [ ${rank} ] • ${userClass.icon} ${userClass.name}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Day Badge -->
          <div class="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1">
            <span>📅</span>
            <span>GÜN ${state.currentDay}/66</span>
          </div>

          <!-- Hearts / Shield -->
          <div class="flex items-center gap-0.5 px-2 py-1 rounded-lg bg-slate-950/80 border border-slate-800">
            ${heartsHtml}
          </div>
        </div>
      </div>

      <!-- Level & XP Bar -->
      <div class="mt-3 space-y-1.5">
        <div class="flex items-center justify-between text-xs font-mono">
          <div class="flex items-center gap-2">
            <span class="text-cyan-400 font-bold text-sm">LVL ${state.level}</span>
            <span class="text-slate-400 text-[11px] font-medium">• Seri: <strong class="text-amber-400 font-bold">🔥 ${state.streak} Gün</strong></span>
          </div>
          <span class="text-slate-400 text-[11px]">${state.xp} / ${xpNeeded} XP (%${xpPct})</span>
        </div>

        <!-- Progress Bar Track -->
        <div class="h-2 w-full rounded-full bg-slate-950/90 border border-slate-800 overflow-hidden relative p-[1px]">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]" style="width: ${xpPct}%"></div>
        </div>
      </div>

      <!-- Daily Neuroscience Protocol Ticker -->
      <div class="mt-3 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center gap-2.5 shadow-inner">
        <span class="text-base shrink-0 animate-pulse">🧠</span>
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">[ GÜNÜN NÖROBİLİM PROTOKOLÜ ]</span>
            <span class="text-[9px] text-cyan-400/60 font-mono">UCL & Stanford</span>
          </div>
          <p class="text-[11px] text-cyan-200 font-medium leading-snug mt-0.5">
            ${currentNeuroTip}
          </p>
        </div>
      </div>
    </header>
  `;
}

function getRankTitle(level) {
  if (level < 5) return 'E-Seviye Acemi Avcı';
  if (level < 10) return 'D-Seviye Gölge Takipçisi';
  if (level < 20) return 'C-Seviye Zindan Fatihi';
  if (level < 35) return 'B-Seviye Demir İrade';
  if (level < 50) return 'A-Seviye Seçkin Savaşçı';
  if (level < 66) return 'S-Seviye Gölge Lordu';
  return 'Efsanevi Hükümdar (Monarch)';
}
