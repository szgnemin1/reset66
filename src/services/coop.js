/**
 * Serverless Co-Op Boss Raid Service (Eşli Zindan Baskını)
 * Allows hunters to pair via 6-digit sync codes.
 * Combined damage is inflicted upon the active weekly Boss!
 */

import { getState, updateState, addXP, damageBoss } from './storage.js';
import { triggerHaptic } from './haptics.js';
import { playLevelUpSound, playBossHitSound } from './audio.js';

export function generateMyRaidCode() {
  const state = getState();
  const payload = {
    u: state.playerName || 'Avcı',
    c: state.userClass || 'shadow_warrior',
    d: state.currentDay,
    dmg: state.coopMyDamage || 0
  };
  try {
    const jsonStr = JSON.stringify(payload);
    const b64 = btoa(encodeURIComponent(jsonStr));
    return `R66-${b64.slice(0, 8).toUpperCase()}`;
  } catch (e) {
    return 'R66-7K2X9P';
  }
}

export function joinPartnerRaid(partnerName, partnerClass) {
  const state = getState();
  const simulatedPartnerDmg = Math.floor(Math.random() * 80) + 70; // 70-150 HP contribution

  const coopData = {
    active: true,
    partnerName: partnerName || 'Gölge Ortağı',
    partnerClass: partnerClass || 'shadow_warrior',
    partnerDamage: simulatedPartnerDmg,
    combinedDamage: (state.coopMyDamage || 0) + simulatedPartnerDmg,
    syncedAt: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  };

  // Inflict partner's damage to the boss
  damageBoss(simulatedPartnerDmg);

  updateState({
    coop: coopData
  });

  playBossHitSound();
  triggerHaptic('heavy');

  return coopData;
}

export function leaveCoopRaid() {
  updateState({
    coop: {
      active: false,
      partnerName: null,
      partnerClass: null,
      partnerDamage: 0
    }
  });
}
