/**
 * Daily Quests & Actions Hub (Tab 1: Bugün / İlk Sayfa)
 * Vertical daily checklist (Koşu, Spor, Kitap, Meditasyon, Su, Soğuk Duş).
 * Every completed action directly damages the Boss in real time!
 * 1-Tap Smart Band Sync automatically completes the running distance quest!
 */

import { getState, updateState, addXP, damageBoss, completeDaySuccessfully, triggerMissedDayPenalty } from '../services/storage.js';
import { PILLARS } from '../data/constants.js';
import { triggerHaptic } from '../services/haptics.js';
import { playQuestCompleteSound, playBossHitSound, playLevelUpSound, playClickSound } from '../services/audio.js';
import { oneTapSyncSmartBand } from '../services/bluetooth.js';

export function renderQuestsTab() {
  const state = getState();
  const completedCount = state.todayHabits.filter(h => h.completed).length;
  const totalCount = state.todayHabits.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);
  const sleep = state.sleepData;

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- 1-Tap Smart Band Sync Bar -->
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-purple-950/40 border border-cyan-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center text-xl shrink-0">
            ⌚
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">Akıllı Saat & Bileklik Senkronizasyonu</span>
              <span id="liveHeartRatePill" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold shrink-0">
                ❤️ ${sleep.restingHr} BPM
              </span>
            </div>
            <p id="smartBandSyncText" class="text-[10px] text-slate-400 truncate mt-0.5">
              ${sleep.connected ? `Bağlı: ${sleep.deviceName} • ${sleep.lastDistanceKm} KM Koşuldu • %${sleep.qualityScore} Uyku` : 'Mi Band, Galaxy Watch, Health Connect otomatik veri çek.'}
            </p>
          </div>
        </div>

        <button type="button" id="btnOneTapSync" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-500 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-md shadow-cyan-500/20 shrink-0 flex items-center justify-center gap-1.5">
          <span>⚡ BİLEKLİĞİ BAĞLA & ÇEK</span>
        </button>
      </div>

      <!-- Boss Real-Time Target Preview Banner -->
      <div class="p-3 rounded-2xl bg-slate-950/90 border border-rose-500/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-xl">👾</span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold">HEDEF BOSS:</span>
              <span class="text-xs font-bold text-white">${state.bossIsEnraged ? '🔥 [ÖFKELİ X2] ' : ''}Gölge Patron</span>
            </div>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-[10px] text-slate-400">Her görev anlık can götürür</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                🛡️ ${state.shields || 0}/2 Kalkan
              </span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-mono font-bold text-rose-400 block">${state.bossHp} / ${state.bossMaxHp} HP</span>
          <button type="button" class="btn-open-modal-trigger text-[10px] text-cyan-400 font-mono underline hover:text-cyan-300" data-modal="sharecard">
            📸 Hikaye Kartı
          </button>
        </div>
      </div>

      <!-- Quick RPG Action Pills -->
      <div class="grid grid-cols-2 gap-2">
        <button type="button" class="btn-open-modal-trigger py-2 px-3 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-purple-500/60 text-purple-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition" data-modal="inventory">
          <span>🎒</span>
          <span>Avcı Envanteri & Eserler</span>
        </button>
        
        <button type="button" class="btn-open-modal-trigger py-2 px-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition" data-modal="sharecard">
          <span>📸</span>
          <span>Paylaşım Kartı Oluştur</span>
        </button>
      </div>
          <span class="text-xs font-mono font-bold text-rose-400">${state.bossHp} / ${state.bossMaxHp} HP</span>
          <div class="w-24 h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mt-1">
            <div class="h-full bg-rose-500 transition-all duration-300" style="width: ${Math.round((state.bossHp / state.bossMaxHp) * 100)}%"></div>
          </div>
        </div>
      </div>

      <!-- Daily Quests Vertical Header -->
      <div class="flex items-center justify-between pt-1">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>📋 GÜNÜN PROTOKOLÜ (YAPILACAKLAR)</span>
          </h2>
          <span class="text-[11px] text-slate-400">Tüm görevleri mühürle, serini koru ve zindanı fethet.</span>
        </div>
        <span class="text-xs font-mono font-bold ${completedCount === totalCount ? 'text-emerald-400' : 'text-slate-400'}">
          ${completedCount}/${totalCount} (%${progressPct})
        </span>
      </div>

      <!-- Alt Alta Görev Listesi (Vertical Quests List) -->
      <div class="space-y-2.5">
        ${state.todayHabits.map((habit, idx) => {
          const isDone = habit.completed;
          let actionBtnText = isDone ? 'TAMAMLANDI ✓' : `-${habit.bossDmg} HP VUR`;
          let extraActionHtml = '';

          // Specific interactive quick triggers
          if (habit.id === 'q_run') {
            extraActionHtml = `
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-quick-km px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] font-mono" data-add="1.0">+1.0 KM</button>
                <button type="button" class="btn-quick-km px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] font-mono" data-add="2.5">+2.5 KM</button>
                <span class="text-[10px] text-cyan-400 font-mono ml-auto">Şu An: ${habit.current || 0} / ${habit.target} KM</span>
              </div>
            `;
          } else if (habit.id === 'q_workout') {
            extraActionHtml = `
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-[10px] font-mono font-bold" data-modal="workout">
                  🏋️ Antrenman Modunu Aç ➔
                </button>
              </div>
            `;
          } else if (habit.id === 'q_reading') {
            extraActionHtml = `
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 text-[10px] font-mono font-bold" data-modal="reader">
                  📖 Dahili Kütüphaneden Oku ➔
                </button>
              </div>
            `;
          } else if (habit.id === 'q_meditation') {
            extraActionHtml = `
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 text-[10px] font-mono font-bold" data-modal="meditation">
                  🧘 Nefes Stüdyosunu Aç ➔
                </button>
              </div>
            `;
          }

          return `
            <div class="p-3.5 rounded-2xl border transition-all duration-300 ${isDone ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}">
              
              <div class="flex items-center justify-between gap-3">
                <!-- Left Title & Description -->
                <div class="flex items-center gap-3 min-w-0">
                  <span class="text-2xl shrink-0">${habit.icon}</span>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold ${isDone ? 'line-through text-slate-400' : 'text-white'} truncate">
                        ${habit.title}
                      </span>
                      <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-cyan-400 font-bold shrink-0">
                        +${habit.xp} XP
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-tight truncate mt-0.5">
                      ${habit.desc}
                    </p>
                  </div>
                </div>

                <!-- Right Damage Action Button -->
                <button type="button" class="btn-toggle-habit shrink-0 px-3 py-2 rounded-xl border text-xs font-mono font-bold transition flex items-center gap-1 ${isDone ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-slate-950 text-rose-400 border-rose-500/40 hover:bg-rose-500/20 active:scale-95'}" data-idx="${idx}">
                  <span>${actionBtnText}</span>
                </button>
              </div>

              <!-- Extra Dynamic Actions (Reading trigger, Workout launcher, KM adder) -->
              ${extraActionHtml}

            </div>
          `;
        }).join('')}
      </div>

      <!-- Day Completion & Missed Day Penalty Actions -->
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-slate-300 font-bold">Günün Sonlandırma Protokolü:</span>
          <span class="text-slate-400">Zor Mod: ${state.hardMode ? 'Açık' : 'Kapalı'}</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <!-- Success Seal -->
          <button type="button" id="btnSealDaySuccess" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-wider uppercase transition shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            ✅ GÜNÜ MÜHÜRLE (ZİNCİRİ KORU)
          </button>

          <!-- Missed Day Penalty Trigger -->
          <button type="button" id="btnSkipDayPenalty" class="w-full py-3 rounded-xl bg-slate-950 border border-rose-500/50 hover:bg-rose-950/30 active:scale-95 text-rose-400 font-bold text-xs font-mono tracking-wider uppercase transition">
            ⚠️ GÜNÜ ATLA (BOSS X2 GÜÇLENİR & -1 ❤️)
          </button>
        </div>
      </div>

    </div>
  `;
}

export function attachQuestsListeners(onUpdate) {
  // 1-Tap Smart Band Sync
  const syncBtn = document.getElementById('btnOneTapSync');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      const syncTextEl = document.getElementById('smartBandSyncText');
      oneTapSyncSmartBand((statusMsg) => {
        if (syncTextEl) syncTextEl.textContent = statusMsg;
        if (onUpdate) onUpdate();
      });
    });
  }

  // Quick KM button
  document.querySelectorAll('.btn-quick-km').forEach(btn => {
    btn.addEventListener('click', () => {
      const addVal = parseFloat(btn.getAttribute('data-add'));
      const state = getState();
      const updatedHabits = state.todayHabits.map(h => {
        if (h.id === 'q_run') {
          const newCurrent = parseFloat(((h.current || 0) + addVal).toFixed(1));
          const isDone = newCurrent >= h.target;
          if (isDone && !h.completed) {
            damageBoss(h.bossDmg);
            addXP(h.xp, h.pillar);
            playQuestCompleteSound();
            triggerHaptic('success');
          } else {
            playClickSound();
            triggerHaptic('light');
          }
          return { ...h, current: newCurrent, completed: isDone };
        }
        return h;
      });
      updateState({ todayHabits: updatedHabits });
      if (onUpdate) onUpdate();
    });
  });

  // Modal & Tab Triggers (Reader, Workout, Meditation)
  document.querySelectorAll('.btn-open-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.getAttribute('data-modal');
      playClickSound();
      triggerHaptic('light');
      if (modal === 'workout' || modal === 'workoutTab' || modal === 'workoutModal') {
        updateState({ activeTab: 'workout', activeModal: null });
      } else {
        updateState({ activeModal: modal });
      }
      if (onUpdate) onUpdate();
    });
  });

  // Toggle Habit checkboxes with Direct Boss Damage
  document.querySelectorAll('.btn-toggle-habit').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-idx'));
      const state = getState();
      const habit = state.todayHabits[idx];
      const newDone = !habit.completed;

      const updatedHabits = [...state.todayHabits];
      updatedHabits[idx] = { ...habit, completed: newDone };

      if (newDone) {
        playBossHitSound();
        triggerHaptic('heavy');
        const sourceMap = {
          q_run: 'run',
          q_workout: 'workout',
          q_reading: 'reading',
          q_meditation: 'meditation',
          q_water: 'water',
          q_cold_shower: 'cold'
        };
        const res = damageBoss(habit.bossDmg, sourceMap[habit.id]);
        addXP(habit.xp, habit.pillar);
        alert(`💥 KRİTİK HASAR! ${habit.title} tamamlandı. Boss'a ${res.damageDealt} Hasar vuruldu, +${habit.xp} XP kazanıldı!`);
      } else {
        playClickSound();
        triggerHaptic('light');
      }

      updateState({ todayHabits: updatedHabits });
      if (onUpdate) onUpdate();
    });
  });

  // Seal Day Success
  const sealBtn = document.getElementById('btnSealDaySuccess');
  if (sealBtn) {
    sealBtn.addEventListener('click', () => {
      const state = getState();
      const completedCount = state.todayHabits.filter(h => h.completed).length;
      if (completedCount < 3) {
        alert('⚠️ En az 3 görevi tamamlamadan günü mühürleyemezsiniz!');
        return;
      }

      playLevelUpSound();
      triggerHaptic('success');
      const res = completeDaySuccessfully();

      if (res?.earnedShield) {
        alert(`🎉 TEBRİKLER! Gün ${state.currentDay} başarıyla mühürlendi!\n\n🛡️ 7 GÜNLÜK DİSİPLİN MÜKÂFATI: +1 GÖLGE KALKANI KAZANILDI!`);
      } else {
        alert(`🎉 TEBRİKLER! Gün ${state.currentDay} başarıyla mühürlendi. Zinciri kırmadın, yarınki zindana ilerleniyor!`);
      }

      updateState({ activeTab: 'boss' });
      if (onUpdate) onUpdate();
    });
  }

  // Skip Day Penalty
  const skipBtn = document.getElementById('btnSkipDayPenalty');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      if (confirm('⚠️ UYARI: Bir gün atlandığında Boss X2 Güçlenecek veya Gölge Kalkanınız harcanacak. Onaylıyor musunuz?')) {
        const res = triggerMissedDayPenalty();
        if (res.shielded) {
          playLevelUpSound();
          triggerHaptic('success');
          alert(`🛡️ GÖLGE KALKANI DEVREYE GİRDİ!\n\nKalan Kalkan: ${res.remainingShields}/2\nZincir haritan kırmızıya dönmedi ve canın korundu!`);
        } else {
          playBossHitSound();
          triggerHaptic('error');
          alert(`☠️ GÜN ATLANDI! Boss x2 Güçlendi (${res.enragedHp} HP) ve Canınız Azaldı (Kalan: ${res.newHearts} ❤️)! Zincir haritasında kırmızı mühür vuruldu.`);
        }
        updateState({ activeTab: 'boss' });
        if (onUpdate) onUpdate();
      }
    });
  }
}
