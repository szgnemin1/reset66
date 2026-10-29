/**
 * Floating Ambient Soundscape Control Bar
 * Allows instant playback of 40Hz Gamma, Brown Noise, or Tibet Singing Bowl.
 */

import { getSoundscapeState, toggleSoundscape, stopSoundscape, setSoundscapeVolume, SOUNDSCAPE_TRACKS } from '../services/soundscape.js';
import { playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

let isBarExpanded = false;

export function renderSoundscapeBar() {
  const s = getSoundscapeState();
  const currentTrackObj = SOUNDSCAPE_TRACKS.find(t => t.id === s.currentTrack);

  return `
    <div id="soundscapeFloatingContainer" class="fixed top-3 right-3 z-30 transition-all duration-300">
      ${!isBarExpanded ? `
        <!-- Collapsed Floating Pill -->
        <button type="button" id="btnExpandSoundscape" class="flex items-center gap-2 px-3 py-1.5 rounded-full ${s.isPlaying ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse' : 'bg-slate-900/90 text-slate-300 border border-slate-800'} backdrop-blur-md text-xs font-mono font-bold shadow-lg transition hover:scale-105">
          <span>${s.isPlaying ? '🎵' : '🎧'}</span>
          <span>${s.isPlaying ? currentTrackObj?.title.split(' ')[0] : 'Odak Sesi'}</span>
        </button>
      ` : `
        <!-- Expanded Sound Controller Card -->
        <div class="w-72 p-3.5 rounded-3xl bg-slate-900/95 border border-purple-500/50 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.8)] text-white space-y-3 animate-fadeIn">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <div class="flex items-center gap-1.5">
              <span class="text-base">🎧</span>
              <span class="text-xs font-mono font-bold text-purple-300">ODAK & ZİHİN SESLERİ</span>
            </div>
            <button type="button" id="btnCollapseSoundscape" class="p-1 rounded-lg text-slate-400 hover:text-white text-xs">
              ✕
            </button>
          </div>

          <!-- Track Selector Buttons -->
          <div class="space-y-1.5">
            ${SOUNDSCAPE_TRACKS.map(t => {
              const active = s.currentTrack === t.id;
              return `
                <button type="button" class="btn-toggle-soundscape w-full p-2 rounded-xl text-left text-xs font-mono flex items-center justify-between border transition ${active ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold shadow-inner' : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white'}" data-track="${t.id}">
                  <div class="flex items-center gap-2 truncate">
                    <span>${t.icon}</span>
                    <span class="truncate">${t.title}</span>
                  </div>
                  <span class="text-[10px] ml-1">${active ? '▶ ÇALIYOR' : 'Başlat'}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Volume Slider & Stop -->
          <div class="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono text-slate-400">Ses:</span>
            <input type="range" id="soundscapeVolumeSlider" min="0" max="1" step="0.05" value="${s.volume}" class="flex-1 accent-purple-500 h-1 bg-slate-800 rounded-lg" />
            ${s.isPlaying ? `
              <button type="button" id="btnStopSoundscape" class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold">
                Durdur
              </button>
            ` : ''}
          </div>
        </div>
      `}
    </div>
  `;
}

export function attachSoundscapeBarListeners(onUpdate) {
  const expandBtn = document.getElementById('btnExpandSoundscape');
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('light');
      isBarExpanded = true;
      if (onUpdate) onUpdate();
    });
  }

  const collapseBtn = document.getElementById('btnCollapseSoundscape');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      playClickSound();
      isBarExpanded = false;
      if (onUpdate) onUpdate();
    });
  }

  document.querySelectorAll('.btn-toggle-soundscape').forEach(btn => {
    btn.addEventListener('click', () => {
      const trackId = btn.getAttribute('data-track');
      playClickSound();
      triggerHaptic('medium');
      toggleSoundscape(trackId);
      if (onUpdate) onUpdate();
    });
  });

  const stopBtn = document.getElementById('btnStopSoundscape');
  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      playClickSound();
      stopSoundscape();
      if (onUpdate) onUpdate();
    });
  }

  const volSlider = document.getElementById('soundscapeVolumeSlider');
  if (volSlider) {
    volSlider.addEventListener('input', e => {
      setSoundscapeVolume(parseFloat(e.target.value));
    });
  }
}
