/**
 * Smart Offline Local Notifications Service
 * Schedules daily routine triggers using @capacitor/local-notifications
 * and falls back to Web Notification API when running in browsers.
 */

import { LocalNotifications } from '@capacitor/local-notifications';
import { getState } from './storage.js';

export async function requestNotificationPermissions() {
  try {
    const perm = await LocalNotifications.requestPermissions();
    return perm.display === 'granted';
  } catch (e) {
    if ('Notification' in window) {
      const res = await Notification.requestPermission();
      return res === 'granted';
    }
  }
  return false;
}

export async function scheduleDailyRoutineNotifications() {
  const state = getState();
  if (state.notificationsEnabled === false) {
    try {
      await LocalNotifications.cancel({ notifications: [{ id: 1 }, { id: 2 }, { id: 3 }] });
    } catch (e) {}
    return;
  }

  try {
    const perm = await LocalNotifications.checkPermissions();
    if (perm.display !== 'granted') {
      const req = await LocalNotifications.requestPermissions();
      if (req.display !== 'granted') return;
    }

    // Cancel existing
    await LocalNotifications.cancel({ notifications: [{ id: 1 }, { id: 2 }, { id: 3 }] });

    // Schedule 3 core daily notifications
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: '⚔️ Uyan Avcı! Zindanın Kapıları Açıldı',
          body: 'Güne soğuk duş, 1 litre su ve akıllı bileklik senkronuyla başla. Zinciri kırma!',
          schedule: {
            on: { hour: 7, minute: 30 },
            allowWhileIdle: true
          },
          sound: 'default'
        },
        {
          id: 2,
          title: '⌚ Gün Yarılandı • Boss Seni Bekliyor',
          body: 'Akıllı bilekliğindeki adımları ve koşunu senkronize et, Boss\'a ilk kritik vuruşu yap!',
          schedule: {
            on: { hour: 14, minute: 0 },
            allowWhileIdle: true
          },
          sound: 'default'
        },
        {
          id: 3,
          title: '🔥 DİKKAT: Gece Yarısı Berserk Uyarısı!',
          body: 'Bugünkü görevlerini henüz mühürlemediysen Boss yarın X2 BERSERK olacak ve can kaybedeceksin!',
          schedule: {
            on: { hour: 21, minute: 30 },
            allowWhileIdle: true
          },
          sound: 'default'
        }
      ]
    });
    console.log('[Notifications] Daily routine scheduled successfully.');
  } catch (e) {
    console.warn('[Notifications] LocalNotifications not supported natively:', e);
  }
}

export async function sendInstantTestNotification() {
  try {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 99,
          title: '⚔️ Reset66 Avcı Bildirimi Aktif!',
          body: 'Yerel bildirim sistemi başarıyla kuruldu. Artık hiçbir zindan vuruşunu kaçırmayacaksın.',
          schedule: { at: new Date(Date.now() + 1500) }
        }
      ]
    });
  } catch (e) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('⚔️ Reset66 Avcı Bildirimi Aktif!', {
        body: 'Yerel bildirim sistemi başarıyla kuruldu.'
      });
    }
  }
}
