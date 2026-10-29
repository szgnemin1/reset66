/**
 * Hunter Inventory, Artifacts & Class Management Modal
 * View and equip unlocked relics, change Hunter Class, manage Shields and Co-Op Raid.
 */

import { getState, updateState } from '../services/storage.js';
import { HUNTER_CLASSES, getClassById } from '../data/classes.js';
import { ARTIFACTS, getArtifactById } from '../data/artifacts.js';
import { playClickSound, playLevelUpSound } from '../services/audio.js';
import { triggerHaptic } from '../services/haptics.js';
import { generateMyRaidCode, joinPartnerRaid, leaveCoopRaid } from '../services/coop.js';

export function renderInventoryModal() {
  const state = getState();
  if (state.activeModal !== 'inventory') return '';

  const userClass = getClassById(state.userClass);
  const myRaidCode = generateMyRaidCode();
  const equipped = getArtifactById(state.equippedArtifact) || null;

  return `
    <div id="inventoryModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_50px_rgba(168,85,247,0.3)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎒</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">AVCI ENVANTERİ & ESERLER</h2>
              <span class="text-[10px] text-slate-400">Rünler, Sınıf Pasifleri ve Eşli Zindan</span>
            </div>
          </div>
          <button type="button" id="btnCloseInventoryModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Hunter Class Card & Switcher -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest">[ AKTİF AVCI SINIFI ]</span>
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
              ${userClass.icon} ${userClass.name}
            </span>
          </div>
          
          <h3 class="text-sm font-bold text-white">${userClass.title}</h3>
          <p class="text-xs text-slate-300">${userClass.description}</p>
          
          <div class="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200">
            <span class="font-bold text-purple-400">⚡ Sınıf Pasifi (${userClass.perkTitle}):</span> ${userClass.perkDescription}
          </div>

          <!-- Class Selector Buttons -->
          <div class="grid grid-cols-3 gap-1.5 pt-2">
            ${HUNTER_CLASSES.map(cls => `
              <button type="button" class="btn-select-class py-2 px-1 rounded-xl text-center text-xs font-mono transition border ${cls.id === state.userClass ? 'bg-purple-600 text-white font-bold border-purple-400 shadow-sm' : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'}" data-class="${cls.id}">
                <div class="text-base">${cls.icon}</div>
                <div class="truncate text-[10px]">${cls.name}</div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Streak Shield Status (Gölge Kalkanı) -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🛡️</span>
            <div>
              <h4 class="text-xs font-bold text-white">Gölge Kalkanı (Streak Freeze)</h4>
              <p class="text-[10px] text-slate-400">Atlanan günlerde zincir kırılmasını ve can kaybını engeller.</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-xl font-mono text-xs font-bold ${state.shields > 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-500'}">
            ${state.shields || 0} / 2 Hazır
          </span>
        </div>

        <!-- Relics & Artifacts Grid -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold uppercase text-amber-400">🏺 KAZANILAN EFSANEVİ ESERLER (${state.inventory?.length || 0}/${ARTIFACTS.length})</span>
            <span class="text-[10px] text-slate-400">Haftalık Boss'lardan Düşer</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${ARTIFACTS.map(art => {
              const isUnlocked = (state.inventory || []).includes(art.id);
              const isEquipped = state.equippedArtifact === art.id;

              return `
                <div class="p-3 rounded-2xl border transition-all ${isUnlocked ? 'bg-slate-950/90 border-slate-800 hover:border-amber-500/40' : 'bg-slate-950/40 border-slate-900 opacity-50'}">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xl">${art.icon}</span>
                    <span class="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${isUnlocked ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-500'}">
                      ${art.rarity}
                    </span>
                  </div>
                  
                  <h5 class="text-xs font-bold text-white">${art.name}</h5>
                  <p class="text-[11px] text-slate-400 mt-1 leading-snug">${art.effect}</p>

                  <div class="mt-2.5 pt-2 border-t border-slate-900 flex items-center justify-between">
                    ${isUnlocked ? `
                      <button type="button" class="btn-equip-artifact w-full py-1.5 rounded-lg text-xs font-mono font-bold transition ${isEquipped ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-art="${art.id}">
                        ${isEquipped ? '✓ KUŞANILDI' : 'Kuşan ➔'}
                      </button>
                    ` : `
                      <span class="text-[10px] font-mono text-slate-500 italic">🔒 Boss Zaferi Gerekir</span>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Co-Op Boss Raid Section (Eşli Zindan Baskını) -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-950 to-slate-950 border border-rose-500/30 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🤝</span>
            <div>
              <h4 class="text-xs font-mono font-bold uppercase text-rose-400">EŞLİ ZİNDAN BASKINI (CO-OP RAID)</h4>
              <p class="text-[10px] text-slate-400">Arkadaşınla birleş, ikinizin vurduğu hasar aynı Boss'a işlesin!</p>
            </div>
          </div>

          ${state.coop?.active ? `
            <div class="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono text-emerald-400 font-bold">✓ BASKIN ORTAĞI BAĞLI:</span>
                <div class="text-xs font-bold text-white">${state.coop.partnerName} (${state.coop.partnerClass})</div>
                <div class="text-[10px] text-slate-400">Ortağın Vurduğu Hasar: <span class="text-rose-400 font-bold">${state.coop.partnerDamage} HP</span></div>
              </div>
              <button type="button" id="btnLeaveCoop" class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-mono font-bold hover:bg-rose-500/30">
                Ayrıl
              </button>
            </div>
          ` : `
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span class="text-slate-400">Senin Zindan Kodun:</span>
                <span class="font-bold text-cyan-400">${myRaidCode}</span>
              </div>

              <div class="flex gap-2">
                <input type="text" id="inputPartnerRaidCode" placeholder="Arkadaşının Zindan Kodu (örn: R66-8K2X)" class="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
                <button type="button" id="btnJoinCoop" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold transition">
                  Bağlan
                </button>
              </div>
            </div>
          `}
        </div>

      </div>
    </div>
  `;
}

export function attachInventoryListeners(onUpdate) {
  const closeBtn = document.getElementById('btnCloseInventoryModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      playClickSound();
      updateState({ activeModal: null });
      if (onUpdate) onUpdate();
    });
  }

  // Switch Hunter Class
  document.querySelectorAll('.btn-select-class').forEach(btn => {
    btn.addEventListener('click', () => {
      const clsId = btn.getAttribute('data-class');
      playLevelUpSound();
      triggerHaptic('success');
      updateState({ userClass: clsId });
      if (onUpdate) onUpdate();
    });
  });

  // Equip Artifact
  document.querySelectorAll('.btn-equip-artifact').forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-art');
      playClickSound();
      triggerHaptic('light');
      updateState({ equippedArtifact: artId });
      if (onUpdate) onUpdate();
    });
  });

  // Join Co-Op Raid
  const joinBtn = document.getElementById('btnJoinCoop');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      const input = document.getElementById('inputPartnerRaidCode');
      const val = input ? input.value.trim() : '';
      if (!val) {
        alert('Lütfen geçerli bir zindan kodu girin.');
        return;
      }

      joinPartnerRaid('Gölge Müttefiki (' + val.slice(-4) + ')', 'Gölge Savaşçısı');
      alert(`⚔️ Zindan Baskını Kuruldu! Müttefikiniz Boss'a doğrudan hasar vurarak savaşa dahil oldu!`);
      if (onUpdate) onUpdate();
    });
  }

  // Leave Co-Op Raid
  const leaveBtn = document.getElementById('btnLeaveCoop');
  if (leaveBtn) {
    leaveBtn.addEventListener('click', () => {
      playClickSound();
      leaveCoopRaid();
      if (onUpdate) onUpdate();
    });
  }
}
