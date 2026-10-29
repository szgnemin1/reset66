/**
 * Mi Fitness & Smart Band Synchronization Hub
 * Solves Xiaomi proprietary BLE lock via Google Health Connect,
 * live Heart Rate broadcast mode, and 1-tap quick distance sync.
 */

import { getState, updateState, addXP, damageBoss } from '../services/storage.js';
import { openMiFitnessApp, openGoogleHealthConnect, finalizeDataSync, scanAndConnectBLE } from '../services/bluetooth.js';
import { playQuestCompleteSound, playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

export function renderMiFitnessModal() {
  const state = getState();
  if (state.activeModal !== 'mifitness') return '';

  const sleep = state.sleepData;

  return `
    <div id="miFitnessModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-orange-500/40 p-5 shadow-[0_0_50px_rgba(249,115,22,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">⌚</span>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">Mİ FİTNESS & BİLEKLİK KÖPRÜSÜ</h2>
                <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">XIAOMI • REDMI</span>
              </div>
              <span class="text-[10px] text-slate-400">Mi Band ve akıllı saat verilerini doğrudan Boss savaşına aktar.</span>
            </div>
          </div>
          <button type="button" id="btnCloseMiFitnessModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Connection Status Card -->
        <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full ${sleep.connected ? 'bg-emerald-500 animate-pulse' : 'bg-orange-500'}"></span>
            <div>
              <div class="text-xs font-bold text-white">${sleep.connected ? sleep.deviceName : 'Mi Fitness Hazır'}</div>
              <div class="text-[10px] text-slate-400">Son Mesafe: <strong class="text-cyan-400">${sleep.lastDistanceKm || 0} KM</strong> • Dinlenme Nabzı: <strong class="text-rose-400">${sleep.restingHr || 65} BPM</strong></div>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
            +%15 XP Buff Aktif
          </span>
        </div>

        <!-- Method 1: Google Health Connect (Official Xiaomi Route) -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-orange-950/30 via-slate-950 to-slate-950 border border-orange-500/30 space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-orange-400 uppercase flex items-center gap-1.5">
              <span>🌟</span>
              <span>YÖNTEM 1: GOOGLE HEALTH CONNECT (ÖNERİLEN)</span>
            </span>
            <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Resmi Entegrasyon</span>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            Xiaomi Mi Fitness uygulamasını telefonundaki <strong>Google Health Connect</strong>'e bağlayarak adım, koşu ve uyku verilerinin otomatik aktarılmasını sağlayabilirsin:
          </p>

          <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono">
            <div>1. <strong>Mi Fitness</strong> uygulamasını aç.</div>
            <div>2. <strong>Profil ➔ Bağlı Uygulamalar (Üçüncü Taraf Verileri)</strong> bölümüne git.</div>
            <div>3. <strong>Health Connect (Google)</strong> seçeneğini seç ve <strong>Tümüne İzin Ver</strong> de.</div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <button type="button" id="btnLaunchMiFitnessApp" class="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition">
              <span>📲</span>
              <span>Mi Fitness'ı Aç ➔</span>
            </button>
            <button type="button" id="btnLaunchHealthConnect" class="py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition">
              <span>⚡</span>
              <span>Verileri Çek & Mühürle</span>
            </button>
          </div>
        </div>

        <!-- Method 2: Instant Manual / Preset KM Transfer -->
        <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
              <span>⚡</span>
              <span>YÖNTEM 2: HIZLI KM AKTARIMI</span>
            </span>
            <span class="text-[10px] text-slate-400 font-mono">Sıfır Sürtünme</span>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            Mi Fitness ekranında gördüğün koşu/yürüyüş mesafesini tek dokunuşla seç ve doğrudan Boss'a hasar vur:
          </p>

          <!-- Quick Presets -->
          <div class="grid grid-cols-4 gap-2">
            <button type="button" class="btn-quick-km-preset py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-mono font-bold transition" data-km="3.0">
              3.0 KM
            </button>
            <button type="button" class="btn-quick-km-preset py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold transition" data-km="5.0">
              5.0 KM ⭐
            </button>
            <button type="button" class="btn-quick-km-preset py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-mono font-bold transition" data-km="7.5">
              7.5 KM
            </button>
            <button type="button" class="btn-quick-km-preset py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-mono font-bold transition" data-km="10.0">
              10.0 KM
            </button>
          </div>

          <!-- Custom KM Input Bar -->
          <div class="flex gap-2 pt-1">
            <div class="relative flex-1">
              <input type="number" id="inputCustomKm" step="0.1" min="0.5" max="50" placeholder="Örn: 5.4" class="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500 pl-8" />
              <span class="absolute left-2.5 top-2.5 text-slate-500 text-xs">🏃</span>
            </div>
            <button type="button" id="btnSubmitCustomKm" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black text-xs font-mono tracking-wider transition hover:brightness-110 active:scale-95 shadow-md">
              KAYDET & BOSS'A VUR ➔
            </button>
          </div>
        </div>

        <!-- Method 3: Bluetooth Live Heart Rate Broadcast -->
        <div class="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-[11px] text-slate-400">
          <div class="flex items-center justify-between text-xs font-mono font-bold text-purple-400">
            <span>📡 CANLI BLUETOOTH İÇİN Mİ BAND AYARI</span>
          </div>
          <p>
            Xiaomi bileklikler fabrika ayarında Bluetooth yayınını şifreler. Canlı kalp atışı almak istersen: Mi Fitness uygulamasında <strong>Cihaz ➔ Nabız İzleme ➔ Nabız Yayını (Heart Rate Broadcast)</strong> ayarını AÇIK konuma getir.
          </p>
        </div>

      </div>
    </div>
  `;
}

export function attachMiFitnessListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseMiFitnessModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      playClickSound();
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Launch Mi Fitness App
  const launchMiBtn = document.getElementById('btnLaunchMiFitnessApp');
  if (launchMiBtn) {
    launchMiBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      openMiFitnessApp();
    });
  }

  // Health Connect Sync
  const healthConnectBtn = document.getElementById('btnLaunchHealthConnect');
  if (healthConnectBtn) {
    healthConnectBtn.addEventListener('click', () => {
      triggerHaptic('success');
      finalizeDataSync('Mi Fitness (Health Connect)', (msg) => {
        alert(msg);
      });
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Preset KM buttons
  document.querySelectorAll('.btn-quick-km-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const km = parseFloat(btn.getAttribute('data-km'));
      applyKmSync(km, onUpdate);
    });
  });

  // Submit custom KM input
  const submitCustomBtn = document.getElementById('btnSubmitCustomKm');
  if (submitCustomBtn) {
    submitCustomBtn.addEventListener('click', () => {
      const input = document.getElementById('inputCustomKm');
      const km = parseFloat(input ? input.value : 0);
      if (!km || km <= 0) {
        alert('Lütfen geçerli bir mesafe (KM) girin.');
        return;
      }
      applyKmSync(km, onUpdate);
    });
  }
}

function applyKmSync(km, onUpdate) {
  playQuestCompleteSound();
  triggerHaptic('success');

  const state = getState();
  const steps = Math.floor(km * 1350);
  const restingHr = Math.floor(58 + Math.random() * 8);

  const updatedSleep = {
    ...state.sleepData,
    connected: true,
    deviceName: 'Mi Fitness (Aktarıldı)',
    lastDistanceKm: km,
    lastSteps: steps,
    restingHr,
    qualityScore: 88,
    hasRestBuff: true,
    lastSyncTime: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  };

  // Auto-complete the running quest
  const updatedHabits = state.todayHabits.map(h => {
    if (h.id === 'q_run') {
      return { ...h, current: km, completed: true };
    }
    return h;
  });

  damageBoss(40, 'run');
  addXP(40, 'VIT');

  alert(`⌚ Mi Fitness Verisi Mühürlendi!\n\n🏃 Mesafe: ${km} KM (${steps} Adım)\n💥 Boss'a 40 Hasar Vuruldu!\n✨ +40 VIT XP ve +%15 Dinçlik Güçlendirmesi Aktif!`);

  updateState({
    sleepData: updatedSleep,
    todayHabits: updatedHabits,
    activeModal: null
  });

  if (onUpdate) onUpdate();
}
