/**
 * Dedicated Settings Page (Tab 5: Ayarlar)
 * Audio, Haptics, Smartwatch Auto-Sync, GitHub Auto-Updater,
 * Assessment re-take, and LocalStorage JSON Backup/Restore.
 */

import { getState, updateState, resetState, exportStateJSON, importStateJSON } from '../services/storage.js';
import { playClickSound, playLevelUpSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { CURRENT_VERSION, checkAndPromptUpdate } from '../services/updater.js';
import { scheduleDailyRoutineNotifications, sendInstantTestNotification, requestNotificationPermissions } from '../services/notifications.js';

export function renderSettingsTab() {
  const state = getState();

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Settings Header Banner -->
      <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div>
          <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">[ SİSTEM AYARLARI ]</span>
          <h2 class="text-base font-black text-white">RESET66 KONTROL MERKEZİ</h2>
          <span class="text-[11px] text-slate-400">Tüm cihaz, ses, titreşim ve yedekleme tercihleri.</span>
        </div>
        <span class="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
          ${CURRENT_VERSION}
        </span>
      </div>

      <!-- Toggles Section -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 pb-2 border-b border-slate-800">
          🎮 OYUN & GERİ BİLDİRİM TERCİHLERİ
        </h3>

        <!-- Sound Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">🔊 Web Audio Ses Efektleri</span>
            <span class="text-[10px] text-slate-400">Vuruş, tamamlama ve Tibet çanı sesleri</span>
          </div>
          <button type="button" id="btnSettingToggleSound" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${state.soundEnabled ? 'bg-cyan-500 text-black shadow-sm' : 'bg-slate-800 text-slate-500'}">
            ${state.soundEnabled ? 'AÇIK' : 'KAPALI'}
          </button>
        </div>

        <!-- Haptics Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">📳 Haptik Titreşim Geri Bildirimi</span>
            <span class="text-[10px] text-slate-400">Dokunma, set tamamlama ve boss darbeleri</span>
          </div>
          <button type="button" id="btnSettingToggleHaptics" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${state.hapticsEnabled ? 'bg-purple-500 text-black shadow-sm' : 'bg-slate-800 text-slate-500'}">
            ${state.hapticsEnabled ? 'AÇIK' : 'KAPALI'}
          </button>
        </div>

        <!-- Local Notifications Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">🔔 Çevrimdışı Akıllı Bildirimler</span>
            <span class="text-[10px] text-slate-400">07:30 Sabah, 14:00 Senkron, 21:30 Berserk Uyarısı</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" id="btnTestNotification" class="px-2 py-1 rounded-lg text-[10px] font-mono text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10">
              Test Et
            </button>
            <button type="button" id="btnSettingToggleNotifications" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${state.notificationsEnabled ? 'bg-emerald-500 text-black shadow-sm' : 'bg-slate-800 text-slate-500'}">
              ${state.notificationsEnabled ? 'AÇIK' : 'KAPALI'}
            </button>
          </div>
        </div>

        <!-- In-App Auto-Update Checker Row -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-cyan-500/30">
          <div>
            <span class="text-xs text-cyan-300 font-bold block">🔄 Otomatik Güncelleme (GitHub)</span>
            <span class="text-[10px] text-slate-400 font-mono">Her açılışta anlık bakar • Sürüm: ${CURRENT_VERSION}</span>
          </div>
          <button type="button" id="btnSettingCheckUpdates" class="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition">
            Denetle ➔
          </button>
        </div>
      </div>

      <!-- Life Reset Onboarding & Profile Re-Assessment -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-2 border-b border-slate-800">
          🧬 YAŞAM SIFIRLAMA ANKETİ
        </h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          Uygulama ilk açıldığında yapılan 5 adımlı Life Reset alım anketini dilediğin an yenileyebilir, alışkanlık sürtünme skorunu tekrar hesaplayabilirsin.
        </p>
        <button type="button" id="btnSettingReopenAssessment" class="w-full py-3 rounded-2xl bg-slate-950 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-950/30 transition">
          🧬 5 Adımlı Alım Anketini Başlat ➔
        </button>
      </div>

      <!-- Data Backup & Reset Actions -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 pb-2 border-b border-slate-800">
          💾 VERİ YEDEKLEME & SIFIRLAMA
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button type="button" id="btnSettingExportData" class="py-2.5 px-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            💾 Verileri Dışa Aktar (JSON)
          </button>
          <button type="button" id="btnSettingImportData" class="py-2.5 px-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            📥 Verileri İçe Aktar (JSON)
          </button>
        </div>

        <button type="button" id="btnSettingResetAll" class="w-full py-2.5 rounded-2xl bg-slate-950 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold hover:bg-rose-950/30 transition text-center mt-2">
          ⚠️ Tüm İlerlemeyi Sıfırla (Fabrika Ayarları)
        </button>
      </div>

    </div>
  `;
}

export function attachSettingsListeners(onUpdate) {
  // Toggle sound
  const soundBtn = document.getElementById('btnSettingToggleSound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const state = getState();
      playClickSound();
      triggerHaptic('light');
      updateState({ soundEnabled: !state.soundEnabled });
      if (onUpdate) onUpdate();
    });
  }

  // Toggle notifications
  const notifBtn = document.getElementById('btnSettingToggleNotifications');
  if (notifBtn) {
    notifBtn.addEventListener('click', async () => {
      const state = getState();
      playClickSound();
      triggerHaptic('light');
      const newEnabled = !state.notificationsEnabled;
      if (newEnabled) {
        await requestNotificationPermissions();
      }
      updateState({ notificationsEnabled: newEnabled });
      await scheduleDailyRoutineNotifications();
      if (onUpdate) onUpdate();
    });
  }

  // Send Test Notification
  const testNotifBtn = document.getElementById('btnTestNotification');
  if (testNotifBtn) {
    testNotifBtn.addEventListener('click', async () => {
      playClickSound();
      triggerHaptic('success');
      await requestNotificationPermissions();
      await sendInstantTestNotification();
      alert('🔔 Test bildirimi tetiklendi! Bildirim panelinizi kontrol edin.');
    });
  }
  const hapticsBtn = document.getElementById('btnSettingToggleHaptics');
  if (hapticsBtn) {
    hapticsBtn.addEventListener('click', () => {
      const state = getState();
      playClickSound();
      triggerHaptic('medium');
      updateState({ hapticsEnabled: !state.hapticsEnabled });
      if (onUpdate) onUpdate();
    });
  }

  // Check updates
  const updateBtn = document.getElementById('btnSettingCheckUpdates');
  if (updateBtn) {
    updateBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      updateBtn.textContent = 'Denetleniyor...';
      checkAndPromptUpdate(false).finally(() => {
        updateBtn.textContent = 'Denetle ➔';
      });
    });
  }

  // Reopen Assessment
  const assessBtn = document.getElementById('btnSettingReopenAssessment');
  if (assessBtn) {
    assessBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: 'assessment' });
      if (onUpdate) onUpdate();
    });
  }

  // Export
  const exportBtn = document.getElementById('btnSettingExportData');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const jsonStr = exportStateJSON();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `reset66_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      triggerHaptic('success');
    });
  }

  // Import
  const importBtn = document.getElementById('btnSettingImportData');
  if (importBtn) {
    importBtn.addEventListener('click', () => {
      const raw = prompt('Dışa aktardığınız JSON yedeğini yapıştırın:');
      if (!raw) return;
      if (importStateJSON(raw)) {
        triggerHaptic('success');
        alert('✅ Veriler başarıyla içe aktarıldı!');
        if (onUpdate) onUpdate();
      } else {
        alert('❌ Geçersiz JSON formatı!');
      }
    });
  }

  // Reset All
  const resetBtn = document.getElementById('btnSettingResetAll');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('⚠️ DİKKAT: Tüm seviyeniz, streak ve boss ilerlemeniz silinecektir. Emin misiniz?')) {
        resetState();
        triggerHaptic('error');
        alert('Tüm veriler sıfırlandı.');
        if (onUpdate) onUpdate();
      }
    });
  }
}
