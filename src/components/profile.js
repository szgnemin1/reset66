/**
 * Player Profile, Dynamic 6-Pillar SVG Radar Chart & Settings
 * Visualizes personal balance across STR, VIT, MND, WIL, FOC, DIS.
 */

import { getState, updateState, resetState, exportStateJSON, importStateJSON } from '../services/storage.js';
import { PILLARS } from '../data/constants.js';
import { playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { CURRENT_VERSION, checkAndPromptUpdate } from '../services/updater.js';

export function renderProfileTab() {
  const state = getState();
  const radarSvg = generateRadarChartSVG(state.stats);

  return `
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Hunter Profile Banner -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] shrink-0">
            <img src="./assets/hero.jpg" alt="Hunter Avatar" class="w-full h-full object-cover" onerror="this.src='./assets/hero.jpg'" />
          </div>
          <div>
            <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">[ SOLO HUNTER PROFİLİ ]</span>
            <h2 class="text-base font-black text-white">Avcı #001</h2>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xs font-mono text-cyan-300 font-bold">Seviye ${state.level}</span>
              <span class="text-xs text-slate-500">•</span>
              <span class="text-xs font-mono text-amber-400 font-bold">🔥 ${state.streak} Günlük Seri</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 6-Pillars Dynamic SVG Radar Chart -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              6 YAŞAM SÜTUNU RADAR GRAFİĞİ
            </h3>
            <span class="text-[10px] text-slate-400">Bütünsel Karakter Dengesi (Hexagonal Stat Map)</span>
          </div>
          <span class="text-xs font-mono text-slate-400 font-bold">Maks: 100</span>
        </div>

        <!-- Radar Canvas -->
        <div class="flex justify-center py-2">
          ${radarSvg}
        </div>

        <!-- Stats Breakdown Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
          ${Object.entries(PILLARS).map(([code, p]) => {
            const val = state.stats[code] || 10;
            return `
              <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span>${p.icon}</span>
                  <div>
                    <span class="text-xs font-bold text-white block">${p.code}</span>
                    <span class="text-[9px] text-slate-400">${p.name}</span>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold text-cyan-400">${val}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Settings & Controls -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 pb-2 border-b border-slate-800">
          ⚙️ UYGULAMA & VERİ AYARLARI
        </h3>

        <!-- Toggles -->
        <div class="space-y-2">
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
            <span class="text-xs text-slate-300 font-medium">🔊 Web Audio Ses Efektleri</span>
            <button type="button" id="btnToggleSound" class="px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${state.soundEnabled ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-500'}">
              ${state.soundEnabled ? 'AÇIK' : 'KAPALI'}
            </button>
          </div>

          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
            <span class="text-xs text-slate-300 font-medium">📳 Haptik Titreşim Geri Bildirimi</span>
            <button type="button" id="btnToggleHaptics" class="px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${state.hapticsEnabled ? 'bg-purple-500 text-black' : 'bg-slate-800 text-slate-500'}">
              ${state.hapticsEnabled ? 'AÇIK' : 'KAPALI'}
            </button>
          </div>

          <!-- In-App Auto Update Row -->
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-cyan-500/30">
            <div>
              <span class="text-xs text-cyan-300 font-bold block">🔄 Otomatik Güncelleme (GitHub)</span>
              <span class="text-[10px] text-slate-400 font-mono">Sürüm: ${CURRENT_VERSION} • Açılışta Anlık Kontrol</span>
            </div>
            <button type="button" id="btnCheckUpdatesManual" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition">
              Denetle ➔
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          <button type="button" id="btnReopenAssessment" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-950/30 transition text-center">
            🧬 Yaşam Analizini Tekrar Yap
          </button>
          <button type="button" id="btnExportData" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            💾 Verileri Dışa Aktar (JSON)
          </button>
          <button type="button" id="btnImportData" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            📥 Verileri İçe Aktar (JSON)
          </button>
          <button type="button" id="btnResetAll" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold hover:bg-rose-950/30 transition text-center">
            ⚠️ Tüm Verileri Sıfırla
          </button>
        </div>

      </div>

    </div>
  `;
}

function generateRadarChartSVG(stats) {
  const size = 220;
  const center = size / 2;
  const radius = 80;
  const keys = ['STR', 'VIT', 'MND', 'WIL', 'FOC', 'DIS'];
  const total = keys.length;

  const points = keys.map((k, i) => {
    const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
    const val = Math.min(100, Math.max(10, stats[k] || 10));
    const r = (val / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Grid levels (33%, 66%, 100%)
  const grids = [0.33, 0.66, 1.0].map(scale => {
    const pts = keys.map((_, i) => {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      const r = scale * radius;
      return `${(center + r * Math.cos(angle)).toFixed(1)},${(center + r * Math.sin(angle)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="rgba(148, 163, 184, 0.15)" stroke-width="1" />`;
  }).join('');

  // Labels
  const labels = keys.map((k, i) => {
    const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
    const r = radius + 18;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle) + 4;
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" fill="#94A3B8" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">${k}</text>`;
  }).join('');

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="overflow-visible">
      ${grids}
      <polygon points="${points}" fill="rgba(6, 182, 212, 0.25)" stroke="#06B6D4" stroke-width="2" />
      ${labels}
    </svg>
  `;
}

export function attachProfileListeners(onUpdate) {
  // Toggle Sound
  const soundBtn = document.getElementById('btnToggleSound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const state = getState();
      playClickSound();
      triggerHaptic('light');
      updateState({ soundEnabled: !state.soundEnabled });
      if (onUpdate) onUpdate();
    });
  }

  // Toggle Haptics
  const hapticsBtn = document.getElementById('btnToggleHaptics');
  if (hapticsBtn) {
    hapticsBtn.addEventListener('click', () => {
      const state = getState();
      playClickSound();
      triggerHaptic('medium');
      updateState({ hapticsEnabled: !state.hapticsEnabled });
      if (onUpdate) onUpdate();
    });
  }

  // Check Updates Manual Button
  const updateBtn = document.getElementById('btnCheckUpdatesManual');
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
  const assessBtn = document.getElementById('btnReopenAssessment');
  if (assessBtn) {
    assessBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      updateState({ activeModal: 'assessment' });
      if (onUpdate) onUpdate();
    });
  }

  // Export JSON
  const exportBtn = document.getElementById('btnExportData');
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

  // Import JSON
  const importBtn = document.getElementById('btnImportData');
  if (importBtn) {
    importBtn.addEventListener('click', () => {
      const raw = prompt('Dışa aktardığınız JSON yedeğini buraya yapıştırın:');
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
  const resetBtn = document.getElementById('btnResetAll');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('⚠️ DİKKAT: Tüm ilerlemeniz silinecek ve baştan başlayacaksınız. Onaylıyor musunuz?')) {
        resetState();
        triggerHaptic('error');
        alert('Tüm veriler sıfırlandı.');
        if (onUpdate) onUpdate();
      }
    });
  }
}
