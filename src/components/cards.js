/**
 * Mindset Cards & Built-in In-App E-Book Reader Launcher (Tab 4: Kitaplık & Zihin)
 * 3D Flip animations, category filters, and built-in stoic masterworks reader.
 */

import { MANTRA_CARDS, BOOK_SUMMARIES } from '../data/constants.js';
import { IN_APP_BOOKS } from '../data/library.js';
import { getState, updateState } from '../services/storage.js';
import { playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

let selectedCategory = 'Tümü';

const CATEGORIES = ['Tümü', 'Disiplin', 'İrade', 'Odak', 'Güç', 'Bilgelik', 'Özgüven', 'Stoacılık'];

export function renderCardsTab() {
  const filteredCards = selectedCategory === 'Tümü'
    ? MANTRA_CARDS
    : MANTRA_CARDS.filter(c => c.category === selectedCategory || c.color === selectedCategory);

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- In-App Library Reader Featured Banner -->
      <div class="p-5 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/40 border border-purple-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="text-3xl">📖</span>
          <div>
            <span class="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-widest">[ DAHİLİ E-KİTAP KÜTÜPHANESİ ]</span>
            <h3 class="text-sm font-black text-white">ÜCRETSİZ BAŞYAPITLARI OKU</h3>
            <p class="text-[11px] text-slate-300 mt-0.5">Marcus Aurelius, Epiktetos, Seneka ve Sun Tzu tam bölümler.</p>
          </div>
        </div>

        <button type="button" id="btnLaunchInAppReader" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-purple-500 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-md shadow-purple-500/20 shrink-0 flex items-center justify-center gap-1.5">
          <span>📚 KİTABI AÇ & OKU ➔</span>
        </button>
      </div>

      <!-- Quick 10 Masterwork Summaries Modal Trigger -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>🃏 ZİHİN KARTLARI & ÖZETLER</span>
          </h2>
          <span class="text-[11px] text-slate-400">Bilişsel Yeniden Çerçeveleme (CBT) & 10 Bilim Kitap Özeti</span>
        </div>

        <button type="button" id="btnOpenBooksModal" class="px-3 py-1.5 rounded-xl bg-slate-950 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold hover:bg-purple-950/30 transition flex items-center gap-1">
          <span>📋 10 Kitap Özeti</span>
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        ${CATEGORIES.map(cat => `
          <button type="button" class="btn-filter-category px-3 py-1 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap ${cat === selectedCategory ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}" data-cat="${cat}">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Mantra Cards Grid (Interactive 3D Flip) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${filteredCards.map((card, idx) => `
          <div class="mantra-card-wrapper h-44 cursor-pointer perspective-1000 group" data-idx="${idx}">
            <div class="mantra-card-inner relative w-full h-full duration-500 transform-style-3d transition-transform rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm hover:border-cyan-500/40 flex flex-col justify-between">
              
              <!-- Front Side -->
              <div class="mantra-card-front absolute inset-0 p-4 backface-hidden flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-bold uppercase">
                      ${card.category}
                    </span>
                    <span class="text-xs text-slate-600">Kart #${card.id}</span>
                  </div>
                  <h3 class="text-sm font-bold text-white mt-2 leading-snug">
                    ${card.title}
                  </h3>
                </div>

                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/60 font-mono">
                  <span>Öğretiyi Gör</span>
                  <span class="text-cyan-400">Döndür ➔</span>
                </div>
              </div>

              <!-- Back Side -->
              <div class="mantra-card-back absolute inset-0 p-4 backface-hidden rotate-y-180 bg-slate-950 border border-cyan-500/50 rounded-2xl flex flex-col justify-between">
                <div>
                  <span class="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    [ BİLİŞSEL YENİDEN ÇERÇEVELEME ]
                  </span>
                  <p class="text-xs text-slate-200 leading-relaxed mt-2 italic font-serif">
                    "${card.quote}"
                  </p>
                </div>
                <div class="text-[10px] text-right font-mono text-cyan-400/80">
                  Tekrar Dokun ↺
                </div>
              </div>

            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

export function renderBooksModal() {
  const state = getState();
  if (state.activeModal !== 'books') return '';

  return `
    <div id="booksModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">📚</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">10 BİLİM & USTALIK BAŞYAPITI</h2>
              <span class="text-[10px] text-slate-400">Nöroplastisite, Alışkanlık ve Bilişsel Performans</span>
            </div>
          </div>
          <button type="button" id="btnCloseBooksModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Book Summaries List -->
        <div class="space-y-3">
          ${BOOK_SUMMARIES.map(book => `
            <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 transition space-y-1.5">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xs font-bold text-white">${book.title}</h3>
                  <span class="text-[10px] text-slate-400">${book.author}</span>
                </div>
                <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold shrink-0">
                  ${book.badge}
                </span>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed">
                ${book.summary}
              </p>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}

export function attachCardsListeners(onUpdate) {
  // Launch Reader
  const readerBtn = document.getElementById('btnLaunchInAppReader');
  if (readerBtn) {
    readerBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: 'reader' });
      if (onUpdate) onUpdate();
    });
  }

  // Category filter
  document.querySelectorAll('.btn-filter-category').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.getAttribute('data-cat');
      playClickSound();
      triggerHaptic('light');
      if (onUpdate) onUpdate();
    });
  });

  // Card Flip toggle
  document.querySelectorAll('.mantra-card-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const inner = wrapper.querySelector('.mantra-card-inner');
      if (inner) {
        inner.classList.toggle('flipped');
        playClickSound();
        triggerHaptic('light');
      }
    });
  });

  // Open books modal
  const openBooksBtn = document.getElementById('btnOpenBooksModal');
  if (openBooksBtn) {
    openBooksBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: 'books' });
      if (onUpdate) onUpdate();
    });
  }

  // Close books modal
  const closeBooksBtn = document.getElementById('btnCloseBooksModal');
  if (closeBooksBtn) {
    closeBooksBtn.addEventListener('click', () => {
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }
}
