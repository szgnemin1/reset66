/**
 * Capacitor Haptics & Vibration Bridge
 * Provides tactile feedback for mobile experience.
 */

import { getState } from './storage.js';

export async function triggerHaptic(type = 'light') {
  const state = getState();
  if (!state.hapticsEnabled) return;

  try {
    const Haptics = window.Capacitor?.Plugins?.Haptics;
    if (Haptics) {
      if (type === 'light') {
        await Haptics.impact({ style: 'LIGHT' });
      } else if (type === 'medium') {
        await Haptics.impact({ style: 'MEDIUM' });
      } else if (type === 'heavy') {
        await Haptics.impact({ style: 'HEAVY' });
      } else if (type === 'success') {
        await Haptics.notification({ type: 'SUCCESS' });
      } else if (type === 'warning') {
        await Haptics.notification({ type: 'WARNING' });
      } else if (type === 'error') {
        await Haptics.notification({ type: 'ERROR' });
      }
      return;
    }
  } catch (e) { /* fallback to navigator */ }

  // Fallback to HTML5 Vibration API
  if ('vibrate' in navigator) {
    if (type === 'light') navigator.vibrate(15);
    else if (type === 'medium') navigator.vibrate(35);
    else if (type === 'heavy') navigator.vibrate(70);
    else if (type === 'success') navigator.vibrate([20, 40, 30]);
    else if (type === 'error') navigator.vibrate([50, 50, 50, 50]);
  }
}
