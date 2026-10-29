/**
 * Smartwatch & Google Health Connect Sleep Sync Modal
 * Nedergaard (Science 2013) glymphatic clearance, circular quality dial, live BLE HR.
 */

import { getState, updateState, addXP } from '../services/storage.js';
import { scanAndConnectBLE, openGoogleHealthConnect, parseHealthFile } from '../services/bluetooth.js';
import { playClickSound, playLevelUpSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

export function renderSleepModal() {
  const state = getState();
  const sleep = state.sleepData;
  const hrs = (sleep.totalMinutes / 60).toFixed(1);
  const deepHrs = (sleep.deepMinutes / 60).toFixed(1);
  const remHrs = (sleep.remMinutes / 60).toFixed(1);

  return `
    <div id="sleepModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/40 p-5 shadow-[0_0_40px_rgba(6,182,212,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">⌚</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">AKILLI SAAT & UYKU SENKRONİZASYONU</h2>
              <span class="text-[10px] text-slate-400">Nedergaard (Science): BOS Gliyomfatik Temizlik</span>
            </div>
          </div>
          <button type="button" id="btnCloseSleepModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Connection Status & Sync Actions -->
        <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full ${sleep.connected ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}"></span>
              <span class="text-xs font-bold text-white">${sleep.connected ? sleep.deviceName : 'Cihaz Bağlı Değil'}</span>
            </div>
            <span id="liveHeartRateText" class="text-xs font-mono font-bold text-rose-400">
              ❤️ ${sleep.restingHr} BPM
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
            <button type="button" id="btnScanBLE" class="py-2.5 px-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition text-center">
              📡 Bluetooth LE Bağla
            </button>
            <button type="button" id="btnHealthConnect" class="py-2.5 px-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition text-center">
              🏥 Health Connect Aç
            </button>
          </div>

          <p id="sleepSyncStatusLog" class="text-[10px] font-mono text-slate-400 truncate">
            ${sleep.lastSyncTime ? `Son Senkronizasyon: ${sleep.lastSyncTime}` : 'Akıllı bileklik veya Health Connect ile bağlanın.'}
          </p>
        </div>

        <!-- Sleep Metrics & Circular Score Dial -->
        <div class="grid grid-cols-2 gap-3 items-center">
          
          <!-- Quality Dial -->
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center">
            <div class="relative w-24 h-24 rounded-full border-4 ${sleep.qualityScore >= 80 ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'border-amber-500'} flex flex-col items-center justify-center">
              <span class="text-2xl font-black font-mono text-white">%${sleep.qualityScore}</span>
              <span class="text-[9px] font-mono text-slate-400 font-bold uppercase">SKOR</span>
            </div>
            <span class="text-xs font-bold ${sleep.qualityScore >= 80 ? 'text-emerald-400' : 'text-amber-400'} mt-2 block">
              ${sleep.qualityScore >= 80 ? '⚡ Tam Dinlenmiş' : 'Orta Kalite'}
            </span>
          </div>

          <!-- Metrics Bento -->
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-slate-400">Toplam Uyku:</span>
              <span class="font-bold text-white font-mono">${hrs} Saat</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-purple-400">Derin Uyku:</span>
              <span class="font-bold text-white font-mono">${deepHrs} Saat</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-cyan-400">REM Uykusu:</span>
              <span class="font-bold text-white font-mono">${remHrs} Saat</span>
            </div>
          </div>

        </div>

        <!-- File Upload for Health Data -->
        <div class="p-3 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800 text-center space-y-2">
          <span class="text-[11px] text-slate-400 block">Samsung Health / Apple Health / Takeout İçe Aktar (JSON/CSV)</span>
          <input type="file" id="healthFileInput" accept=".json,.csv" class="hidden" />
          <button type="button" id="btnUploadHealthFile" class="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold">
            📁 Dosya Seç ve Yükle ➔
          </button>
        </div>

        <!-- Apply Buff & Close Button -->
        <button type="button" id="btnClaimSleepBuff" class="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          ⚡ BİYOMETRİK BUFF'I ETKİNLEŞTİR (+%15 XP)
        </button>

      </div>
    </div>
  `;
}

export function attachSleepListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseSleepModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  const scanBtn = document.getElementById('btnScanBLE');
  if (scanBtn) {
    scanBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('medium');
      scanAndConnectBLE((msg) => {
        const logEl = document.getElementById('sleepSyncStatusLog');
        if (logEl) logEl.textContent = msg;
        if (onUpdate) onUpdate();
      });
    });
  }

  const healthBtn = document.getElementById('btnHealthConnect');
  if (healthBtn) {
    healthBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      openGoogleHealthConnect();
    });
  }

  // File Upload
  const uploadBtn = document.getElementById('btnUploadHealthFile');
  const fileInput = document.getElementById('healthFileInput');
  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const res = parseHealthFile(evt.target.result);
        if (res.success) {
          playLevelUpSound();
          triggerHaptic('success');
          updateState({
            sleepData: {
              ...getState().sleepData,
              connected: true,
              deviceName: file.name,
              totalMinutes: res.totalMinutes,
              deepMinutes: res.deepMinutes,
              remMinutes: res.remMinutes,
              lightMinutes: res.lightMinutes,
              qualityScore: res.qualityScore,
              restingHr: res.restingHr,
              hasRestBuff: res.qualityScore >= 80,
              lastSyncTime: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
            }
          });
          alert(`✅ ${file.name} başarıyla ayrıştırıldı! Uyku Kalite Skoru: %${res.qualityScore}`);
          if (onUpdate) onUpdate();
        } else {
          alert('Hata: ' + res.error);
        }
      };
      reader.readAsText(file);
    });
  }

  const claimBtn = document.getElementById('btnClaimSleepBuff');
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      playLevelUpSound();
      triggerHaptic('success');
      addXP(30, 'VIT');
      addXP(15, 'WIL');
      alert('⚡ Tam Dinlenmiş Buff\'ı etkinleştirildi! +30 VIT ve +15 WIL XP kazandın!');
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }
}
