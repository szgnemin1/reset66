/**
 * In-App E-Book Reader Modal
 * Free built-in public domain stoic & discipline masterworks.
 * Auto-completes the daily reading quest upon reading!
 */

import { IN_APP_BOOKS } from '../data/library.js';
import { getState, updateState, addXP, damageBoss } from '../services/storage.js';
import { playClickSound, playQuestCompleteSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

let activeBookId = 'marcus_aurelius';
let activeChapterIdx = 0;
let fontSizeMode = 'normal'; // normal | large | xlarge

export function renderReaderModal() {
  const state = getState();
  if (state.activeModal !== 'reader') return '';

  const book = IN_APP_BOOKS.find(b => b.id === activeBookId) || IN_APP_BOOKS[0];
  const chapter = book.chapters[activeChapterIdx] || book.chapters[0];

  let fontClass = 'text-sm leading-relaxed';
  if (fontSizeMode === 'large') fontClass = 'text-base leading-loose';
  if (fontSizeMode === 'xlarge') fontClass = 'text-lg leading-loose';

  return `
    <div id="readerModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-xl h-[95vh] flex flex-col rounded-3xl bg-slate-900 border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] text-white overflow-hidden">
        
        <!-- Reader Top Bar -->
        <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div class="flex items-center gap-2">
            <span class="text-xl">📖</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-widest">[ DAHİLİ KÜTÜPHANE ]</span>
              <h2 class="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">${book.title}</h2>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <!-- Font Size Toggles -->
            <div class="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 text-xs font-mono">
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${fontSizeMode === 'normal' ? 'bg-purple-500 text-black font-bold' : 'text-slate-400'}" data-size="normal">A</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${fontSizeMode === 'large' ? 'bg-purple-500 text-black font-bold' : 'text-slate-400'}" data-size="large">A+</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${fontSizeMode === 'xlarge' ? 'bg-purple-500 text-black font-bold' : 'text-slate-400'}" data-size="xlarge">A++</button>
            </div>

            <!-- Close Button -->
            <button type="button" id="btnCloseReaderModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
              ✕
            </button>
          </div>
        </div>

        <!-- Book & Chapter Selectors Bar -->
        <div class="p-2.5 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          ${IN_APP_BOOKS.map(b => `
            <button type="button" class="btn-select-book px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${b.id === activeBookId ? 'bg-purple-500 text-black' : 'bg-slate-900 text-slate-400 border border-slate-800'}" data-book="${b.id}">
              ${b.title}
            </button>
          `).join('')}
        </div>

        <!-- Chapter Selector Pills -->
        <div class="px-3 py-1.5 bg-slate-900/60 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span class="text-slate-500 shrink-0 font-bold">BÖLÜM:</span>
          ${book.chapters.map((ch, idx) => `
            <button type="button" class="btn-select-chapter px-2 py-0.5 rounded-md whitespace-nowrap transition ${idx === activeChapterIdx ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}" data-idx="${idx}">
              ${idx + 1}. Bölüm
            </button>
          `).join('')}
        </div>

        <!-- Scrollable Reader Reading Canvas -->
        <div class="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4 font-serif text-slate-200 bg-[#0A0D14]">
          <div class="pb-2 border-b border-slate-800">
            <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold block">${book.author}</span>
            <h3 class="text-base font-bold text-white font-sans mt-0.5">${chapter.title}</h3>
          </div>

          <div class="${fontClass} text-slate-300 whitespace-pre-line selection:bg-purple-500 selection:text-white">
            ${chapter.content}
          </div>
        </div>

        <!-- Bottom Action: Seal Reading & Damage Boss -->
        <div class="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <div class="text-[11px] font-mono text-slate-400">
            <span>Hedef: 15 Sayfa Okuma</span>
          </div>
          <button type="button" id="btnFinishReading" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-black font-black text-xs font-mono uppercase tracking-wider transition hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            📖 OKUMAYI MÜHÜRLE & BOSS'A VUR (-35 HP)
          </button>
        </div>

      </div>
    </div>
  `;
}

export function attachReaderListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseReaderModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Switch book
  document.querySelectorAll('.btn-select-book').forEach(btn => {
    btn.addEventListener('click', () => {
      activeBookId = btn.getAttribute('data-book');
      activeChapterIdx = 0;
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Switch chapter
  document.querySelectorAll('.btn-select-chapter').forEach(btn => {
    btn.addEventListener('click', () => {
      activeChapterIdx = Number(btn.getAttribute('data-idx'));
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Font size
  document.querySelectorAll('.btn-font-size').forEach(btn => {
    btn.addEventListener('click', () => {
      fontSizeMode = btn.getAttribute('data-size');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Finish Reading & Deal Boss Damage
  const finishBtn = document.getElementById('btnFinishReading');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      playQuestCompleteSound();
      triggerHaptic('success');

      const state = getState();
      // Mark reading habit as completed
      const updatedHabits = state.todayHabits.map(h => {
        if (h.id === 'q_reading') {
          return { ...h, current: 15, completed: true };
        }
        return h;
      });

      damageBoss(35);
      addXP(35, 'MND');

      alert('📖 Tebrikler! 15 sayfalık Stoacı derin okuma tamamlandı. Boss\'a 35 Hasar vuruldu ve +35 Zihin (MND) XP kazanıldı!');

      updateState({
        todayHabits: updatedHabits,
        activeModal: null
      });

      if (onUpdate) onUpdate();
    });
  }
}
