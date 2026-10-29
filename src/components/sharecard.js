/**
 * Instagram Story & Status Share Card Generator (9:16 Canvas)
 * Generates an obsidian RPG hunter report card ready for direct Instagram/WhatsApp sharing.
 */

import { getState, updateState } from '../services/storage.js';
import { getClassById } from '../data/classes.js';
import { playLevelUpSound, playClickSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';

export function renderShareCardModal() {
  const state = getState();
  if (state.activeModal !== 'sharecard') return '';

  const userClass = getClassById(state.userClass);
  const streak = state.streak || state.currentDay || 1;
  const rank = state.playerRank || 'C-Rank';

  return `
    <div id="shareCardModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-sm rounded-3xl bg-slate-900 border border-cyan-500/50 p-4 shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-4 text-white flex flex-col items-center">
        
        <!-- Header -->
        <div class="w-full flex items-center justify-between pb-2 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">📸</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">HİKAYE & DURUM KARTI</h2>
              <span class="text-[10px] text-slate-400">9:16 Instagram Story Formatı</span>
            </div>
          </div>
          <button type="button" id="btnCloseShareCardModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Live Canvas Preview -->
        <div class="relative w-full aspect-[9/16] max-h-[55vh] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black flex items-center justify-center">
          <canvas id="shareCardCanvas" width="540" height="960" class="w-full h-full object-contain"></canvas>
        </div>

        <!-- Action Buttons -->
        <div class="w-full grid grid-cols-2 gap-2 text-xs font-mono font-bold">
          <button type="button" id="btnShareStory" class="py-3 px-3 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-600 text-white font-black hover:opacity-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] flex items-center justify-center gap-1.5 transition">
            <span>🚀</span>
            <span>Hikaye Paylaş</span>
          </button>
          
          <button type="button" id="btnDownloadCard" class="py-3 px-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-1.5 transition">
            <span>💾</span>
            <span>Görseli İndir</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

export function attachShareCardListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseShareCardModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      playClickSound();
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Draw card on canvas immediately
  const canvas = document.getElementById('shareCardCanvas');
  if (canvas) {
    drawStoryCard(canvas);
  }

  const downloadBtn = document.getElementById('btnDownloadCard');
  if (downloadBtn && canvas) {
    downloadBtn.addEventListener('click', () => {
      playClickSound();
      triggerHaptic('success');
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `reset66-gun-${getState().currentDay}-raporu.png`;
      link.href = dataUrl;
      link.click();
    });
  }

  const shareBtn = document.getElementById('btnShareStory');
  if (shareBtn && canvas) {
    shareBtn.addEventListener('click', async () => {
      playLevelUpSound();
      triggerHaptic('success');
      canvas.toBlob(async blob => {
        if (!blob) return;
        const file = new File([blob], `reset66-gun-${getState().currentDay}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: `Reset66: Gün ${getState().currentDay} Mühürlendi!`,
              text: `66 Günlük Disiplin Zindanında Gün ${getState().currentDay} tamamlandı! Zinciri Kırma.`,
              files: [file]
            });
            return;
          } catch (e) {
            console.log('Share canceled or failed:', e);
          }
        }

        // Fallback: trigger download
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `reset66-gun-${getState().currentDay}.png`;
        link.href = dataUrl;
        link.click();
        alert('📸 Görsel cihazınıza indirildi! Instagram veya WhatsApp hikayenizde paylaşabilirsiniz.');
      });
    });
  }
}

function drawStoryCard(canvas) {
  const ctx = canvas.getContext('2d');
  const state = getState();
  const userClass = getClassById(state.userClass);
  const day = state.currentDay || 1;
  const rank = state.playerRank || 'B-Rank';
  const name = state.playerName || 'Gölge Avcısı';
  const streak = state.streak || day;
  const shields = state.shields || 0;

  // Background gradient: Deep Obsidian Noir
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 960);
  bgGrad.addColorStop(0, '#04070B');
  bgGrad.addColorStop(0.5, '#0B0F19');
  bgGrad.addColorStop(1, '#020408');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 540, 960);

  // Outer Neon Cyber Border
  ctx.strokeStyle = '#06B6D4';
  ctx.lineWidth = 4;
  ctx.strokeRect(16, 16, 508, 928);

  ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(24, 24, 492, 912);

  // Glow Aura at top
  const aura = ctx.createRadialGradient(270, 100, 20, 270, 100, 250);
  aura.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
  aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = aura;
  ctx.fillRect(0, 0, 540, 400);

  // Header Title
  ctx.fillStyle = '#06B6D4';
  ctx.font = 'bold 13px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('RESET66 • 66 GÜNLÜK DİSİPLİN PROTOKOLÜ', 270, 70);

  // Big Day Display
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 68px monospace';
  ctx.fillText(`GÜN ${day}`, 270, 150);

  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 16px monospace';
  ctx.fillText('/ 66 GÜN TAMAMLANIYOR', 270, 185);

  // Player Badge Card
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1.5;
  roundRect(ctx, 45, 220, 450, 90, 16);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'left';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText(`${userClass.icon} ${name}`, 65, 260);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 12px monospace';
  ctx.fillText(`[ ${rank} ] • ${userClass.name} • 🛡️ ${shields} Kalkan`, 65, 288);

  // Stats Grid 2x2
  const stats = [
    { label: '🏃 KOŞULAN MESAFE', val: `${state.sleepData?.lastDistanceKm || '5.0'} KM`, sub: 'Kardiyo & Ciğer' },
    { label: '🏋️ ANTRENMAN', val: 'Tamamlandı', sub: 'Hipertrofi & Güç' },
    { label: '📖 ZİHİN OKUMASI', val: '15 Sayfa', sub: 'Stoacı Felsefe' },
    { label: '🔥 ZİNCİRİ KIRMA', val: `${streak} Günlük Seri`, sub: 'Kesintisiz Disiplin' }
  ];

  const gridY = 335;
  const boxW = 215;
  const boxH = 95;

  stats.forEach((st, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 45 + col * (boxW + 20);
    const y = gridY + row * (boxH + 15);

    ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.lineWidth = 1;
    roundRect(ctx, x, y, boxW, boxH, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#94A3B8';
    ctx.font = 'bold 10px monospace';
    ctx.fillText(st.label, x + 14, y + 26);

    ctx.fillStyle = '#38BDF8';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(st.val, x + 14, y + 56);

    ctx.fillStyle = '#64748B';
    ctx.font = '10px sans-serif';
    ctx.fillText(st.sub, x + 14, y + 78);
  });

  // Boss Battle Banner Box
  ctx.fillStyle = 'rgba(225, 29, 72, 0.15)';
  ctx.strokeStyle = 'rgba(225, 29, 72, 0.4)';
  roundRect(ctx, 45, 565, 450, 110, 16);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#FB7185';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('👾 HAFTALIK ZİNDAN BOSS ARENASI', 270, 600);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 19px sans-serif';
  ctx.fillText(state.bossHp <= 0 ? '🏆 HAFTANIN BOSSU YOK EDİLDİ!' : `Kalan Boss Canı: ${state.bossHp} / ${state.bossMaxHp} HP`, 270, 634);

  ctx.fillStyle = '#FDA4AF';
  ctx.font = '11px sans-serif';
  ctx.fillText(state.bossHp <= 0 ? 'Zafer mühürlendi, yeni zindan kapısı açılıyor.' : 'Günün her görevi doğrudan Boss\'tan can götürür.', 270, 658);

  // Stoic Philosophy Quote Box
  ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
  roundRect(ctx, 45, 695, 450, 110, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#C084FC';
  ctx.font = 'italic 13px serif';
  ctx.fillText('“Ruhun rengi, düşüncelerinin rengine bürünür.', 270, 735);
  ctx.fillText('Bugün seni durduracak hiçbir bahane yoktur.”', 270, 755);
  ctx.font = 'bold 11px monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('— MARCUS AURELIUS', 270, 785);

  // Footer Tagline & Link
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('RESET66 • 66-DAY HABIT FORMATION RPG', 270, 855);
  ctx.fillStyle = '#64748B';
  ctx.font = '10px monospace';
  ctx.fillText('github.com/szgnemin1/reset66', 270, 880);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
