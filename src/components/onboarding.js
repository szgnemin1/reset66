/**
 * Life Reset Interactive Onboarding & Intake Assessment Quiz
 * Replicates the Life Reset intake funnel for habit friction profiling.
 */

import { ONBOARDING_QUESTIONS } from '../data/constants.js';
import { getState, updateState } from '../services/storage.js';
import { triggerHaptic } from '../services/haptics.js';
import { playClickSound, playLevelUpSound } from '../services/audio.js';

let currentQuestionIndex = 0;
let selectedAnswers = [];

export function renderOnboardingModal() {
  const state = getState();
  if (state.onboardingDone && state.activeModal !== 'assessment') return '';

  const q = ONBOARDING_QUESTIONS[currentQuestionIndex];
  const total = ONBOARDING_QUESTIONS.length;
  const progressPct = Math.round(((currentQuestionIndex + 1) / total) * 100);

  return `
    <div id="onboardingModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🧬</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">YAŞAM SIFIRLAMA ANALİZİ</h2>
              <span class="text-[10px] text-slate-400">Adım ${currentQuestionIndex + 1} / ${total}</span>
            </div>
          </div>
          <div class="text-xs font-mono text-cyan-300 font-bold">%${progressPct}</div>
        </div>

        <!-- Progress Bar -->
        <div class="h-1.5 w-full rounded-full bg-slate-950 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>

        <!-- Question Body -->
        <div class="space-y-2">
          <h3 class="text-base font-bold text-white leading-snug">${q.title}</h3>
          <p class="text-xs text-slate-400 font-medium">${q.subtitle}</p>
        </div>

        <!-- Options -->
        <div class="space-y-2.5 pt-2">
          ${q.options.map((opt, idx) => `
            <button type="button" class="onboarding-opt-btn w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-left transition flex items-center justify-between group" data-idx="${idx}">
              <span class="text-xs font-semibold text-slate-200 group-hover:text-white">${opt.label}</span>
              <span class="text-xs text-slate-600 group-hover:text-cyan-400">➔</span>
            </button>
          `).join('')}
        </div>

        <!-- Skip / Later button -->
        <div class="pt-2 text-center">
          <button type="button" id="btnSkipOnboarding" class="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition">
            Testi Atla ve Doğrudan Başla ➔
          </button>
        </div>

      </div>
    </div>
  `;
}

export function attachOnboardingListeners(onComplete) {
  document.querySelectorAll('.onboarding-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-idx'));
      const q = ONBOARDING_QUESTIONS[currentQuestionIndex];
      const selected = q.options[idx];
      selectedAnswers.push(selected);

      playClickSound();
      triggerHaptic('light');

      if (currentQuestionIndex < ONBOARDING_QUESTIONS.length - 1) {
        currentQuestionIndex++;
        if (onComplete) onComplete();
      } else {
        finishAssessment(onComplete);
      }
    });
  });

  const skipBtn = document.getElementById('btnSkipOnboarding');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      updateState({ onboardingDone: true, activeModal: null });
      if (onComplete) onComplete();
    });
  }
}

function finishAssessment(onComplete) {
  playLevelUpSound();
  triggerHaptic('success');

  let totalScore = 0;
  selectedAnswers.forEach(a => { totalScore += (a.score || 30); });
  const finalScore = Math.min(100, Math.round((totalScore / (ONBOARDING_QUESTIONS.length * 50)) * 100));

  updateState({
    onboardingDone: true,
    assessmentScore: finalScore,
    activeModal: null
  });

  if (onComplete) onComplete();
}
