/**
 * Tools & Studios Bento Grid (Tab 3: Stüdyo / Araçlar)
 * Full-screen launchers for all 5 scientific mini-tools.
 */

import { getState, updateState } from '../services/storage.js';
import { playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

export function renderToolsTab() {
  const state = getState();

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Section Header -->
      <div>
        <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
          <span>🧰 BENTO MİNİ ARAÇLAR & STÜDYOLAR</span>
        </h2>
        <span class="text-[11px] text-slate-400">Hayatınızı optimize eden 5 entegre nöro-araç paketi.</span>
      </div>

      <!-- Tools Bento Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <!-- Tool 1: Meditation -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/40 hover:border-purple-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="meditation">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">🧘</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold uppercase">ZİHİN (MND)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-purple-300 transition">
              Meditasyon & Frekans Stüdyosu
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              Kutu Nefesi, 4-7-8, Stanford Physiological Sigh, Wim Hof, 40Hz Gama ve Tibet Çanı.
            </p>
          </div>
          <div class="text-[10px] font-mono text-purple-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Seansı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 2: Workout -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/40 hover:border-amber-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="workout">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">🏋️</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase">GÜÇ (STR)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition">
              Antrenman & Dinlenme Sayacı
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              7 günlük kişisel program, set takibi, otomatik geri sayım sayacı ve Boss hasarı.
            </p>
          </div>
          <div class="text-[10px] font-mono text-amber-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Antrenmanı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 3: Pomodoro -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/40 hover:border-indigo-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="pomodoro">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">⏱️</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold uppercase">ODAK (FOC)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-indigo-300 transition">
              Pürdikkat Odak Blokları (Deep Work)
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              25 ve 50 dakikalık tekil görev blokları. Dikkat kalıntısını sıfırlama.
            </p>
          </div>
          <div class="text-[10px] font-mono text-indigo-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Sayacı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 4: Smartwatch Sleep Sync -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 hover:border-cyan-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="sleep">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">⌚</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold uppercase">CANLILIK (VIT)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-cyan-300 transition">
              Akıllı Saat & Uyku Senkronizasyonu
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              BLE nabız, Health Connect, BOS gliyomfatik uyku skoru ve +%15 XP Buff.
            </p>
          </div>
          <div class="text-[10px] font-mono text-cyan-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Senkronizasyonu Aç</span>
            <span>➔</span>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function attachToolsListeners(onUpdate) {
  document.querySelectorAll('.btn-launch-tool').forEach(card => {
    card.addEventListener('click', () => {
      const modal = card.getAttribute('data-modal');
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: modal });
      if (onUpdate) onUpdate();
    });
  });
}
