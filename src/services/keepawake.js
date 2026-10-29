/**
 * KeepAwake Service
 * Keeps device screen on during active meditation & workouts.
 */

export async function keepScreenAwake(enable = true) {
  try {
    const KeepAwake = window.Capacitor?.Plugins?.KeepAwake;
    if (KeepAwake) {
      if (enable) {
        await KeepAwake.keepAwake();
      } else {
        await KeepAwake.allowSleep();
      }
      return;
    }
  } catch (e) { /* ignore */ }

  // Fallback to Screen Wake Lock API if available in browser
  if ('wakeLock' in navigator) {
    try {
      if (enable && !window._screenWakeLockSentinel) {
        window._screenWakeLockSentinel = await navigator.wakeLock.request('screen');
      } else if (!enable && window._screenWakeLockSentinel) {
        await window._screenWakeLockSentinel.release();
        window._screenWakeLockSentinel = null;
      }
    } catch (e) { /* ignore */ }
  }
}
