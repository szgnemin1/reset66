/**
 * Real-Time GitHub In-App Auto-Updater Service
 * Checks GitHub Releases on every launch, compares semver tags, and triggers in-app updates.
 */

import { triggerHaptic } from './haptics.js';
import { playLevelUpSound, playClickSound } from './audio.js';

export const CURRENT_VERSION = 'v2.2.0';
const GITHUB_REPO = 'szgnemin1/reset66';
const LATEST_RELEASE_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

/**
 * Compares two semver strings (e.g. 'v2.1.0' vs 'v2.0.0')
 * Returns true if latestTag is strictly newer than currentTag
 */
export function isNewerVersion(latestTag, currentTag = CURRENT_VERSION) {
  if (!latestTag) return false;
  const cleanL = latestTag.replace(/^v/, '').split('.').map(n => parseInt(n, 10) || 0);
  const cleanC = currentTag.replace(/^v/, '').split('.').map(n => parseInt(n, 10) || 0);

  for (let i = 0; i < Math.max(cleanL.length, cleanC.length); i++) {
    const l = cleanL[i] || 0;
    const c = cleanC[i] || 0;
    if (l > c) return true;
    if (l < c) return false;
  }
  return false;
}

/**
 * Fetches latest release from GitHub API
 */
export async function fetchLatestRelease() {
  try {
    const resp = await fetch(LATEST_RELEASE_API, {
      cache: 'no-cache',
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    
    const tag = data.tag_name;
    const apkAsset = (data.assets || []).find(a => a.name.endsWith('.apk'));
    const downloadUrl = apkAsset ? apkAsset.browser_download_url : data.html_url;

    return {
      tag,
      name: data.name || tag,
      body: data.body || 'Performans iyileştirmeleri ve yeni sistem modülleri.',
      publishedAt: data.published_at,
      downloadUrl,
      apkName: apkAsset ? apkAsset.name : 'reset66.apk',
      apkSize: apkAsset ? Math.round(apkAsset.size / 1024 / 1024 * 10) / 10 : null
    };
  } catch (e) {
    console.warn('GitHub update check failed (offline or network issue):', e);
    return null;
  }
}

/**
 * Checks for updates and triggers the modal if a newer release is found.
 * @param {boolean} silent - If true, does not show alert when already up-to-date
 */
export async function checkAndPromptUpdate(silent = true) {
  const release = await fetchLatestRelease();
  if (!release) {
    if (!silent) {
      alert('⚠️ GitHub sunucularına bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.');
    }
    return false;
  }

  const hasUpdate = isNewerVersion(release.tag, CURRENT_VERSION);

  if (hasUpdate) {
    showUpdateModal(release);
    return true;
  } else {
    if (!silent) {
      alert(`✅ Harika! Uygulamanız zaten en güncel sürümde (${CURRENT_VERSION}).`);
    }
    return false;
  }
}

/**
 * Renders the in-app update notification modal
 */
export function showUpdateModal(release) {
  // Remove existing update modal if any
  const oldModal = document.getElementById('inAppUpdateModal');
  if (oldModal) oldModal.remove();

  playLevelUpSound();
  triggerHaptic('success');

  const modalHtml = `
    <div id="inAppUpdateModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-3xl bg-slate-900 border-2 border-cyan-500/70 p-5 shadow-[0_0_45px_rgba(6,182,212,0.35)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl animate-bounce">⚡</span>
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">[ ANLIK GİTHUB GÜNCELLEMESİ ]</span>
              <h2 class="text-sm font-black text-white">YENİ SÜRÜM BULUNDU!</h2>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
            ${release.tag}
          </span>
        </div>

        <!-- Version Transition Tag -->
        <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <div>
            <span class="text-slate-400 block text-[10px]">Mevcut Sürüm:</span>
            <span class="text-slate-300 font-bold">${CURRENT_VERSION}</span>
          </div>
          <span class="text-cyan-400 text-base">➔</span>
          <div>
            <span class="text-cyan-400 block text-[10px]">Yeni Sürüm:</span>
            <span class="text-cyan-300 font-black">${release.tag} ${release.apkSize ? `(${release.apkSize} MB)` : ''}</span>
          </div>
        </div>

        <!-- Changelog Box -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Yenilikler & Protokol Notları:</span>
          <div class="max-h-36 overflow-y-auto p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans scrollbar-none whitespace-pre-line">
            ${release.body}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-1">
          <button type="button" id="btnApplyUpdateNow" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-wider uppercase transition shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            🚀 ŞİMDİ GÜNCELLE (APK İNDİR & KUR)
          </button>
          
          <button type="button" id="btnDismissUpdate" class="w-full py-2 rounded-xl text-center text-xs font-mono text-slate-500 hover:text-slate-300 transition">
            Daha Sonra Hatırlat
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Update Now Action
  document.getElementById('btnApplyUpdateNow').addEventListener('click', () => {
    playClickSound();
    triggerHaptic('heavy');
    // Launch direct download in system browser / Android Download Manager
    window.open(release.downloadUrl, '_system');
  });

  // Dismiss Action
  document.getElementById('btnDismissUpdate').addEventListener('click', () => {
    playClickSound();
    triggerHaptic('light');
    document.getElementById('inAppUpdateModal').remove();
  });
}
