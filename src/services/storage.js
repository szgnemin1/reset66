/**
 * Central Reactive State Manager & LocalStorage Persistence
 * 100% Offline, Privacy-First, Zero Cloud Dependency.
 */

import { DEFAULT_HABITS, BOSS_LORE } from '../data/constants.js';

const STORAGE_KEY = 'RESET66_SOLO_LEVELING_STATE_V2';

function getDefaultWorkoutPlan() {
  return {
    monday: {
      name: 'İtiş Günü (Push)',
      exercises: [
        { id: 'ex1', name: 'Şınav / Bench Press', sets: 4, reps: '12', weight: 'Vücut Ağ.' },
        { id: 'ex2', name: 'Omuz Press / Pike Pushup', sets: 3, reps: '10', weight: '15 kg' },
        { id: 'ex3', name: 'Dips / Triceps Extension', sets: 3, reps: '12', weight: 'Vücut Ağ.' }
      ]
    },
    tuesday: {
      name: 'Çekiş Günü (Pull)',
      exercises: [
        { id: 'ex4', name: 'Barfiks / Lat Pulldown', sets: 4, reps: '8', weight: 'Vücut Ağ.' },
        { id: 'ex5', name: 'Dumbbell / Barbell Row', sets: 4, reps: '10', weight: '20 kg' },
        { id: 'ex6', name: 'Biceps Curl', sets: 3, reps: '12', weight: '12.5 kg' }
      ]
    },
    wednesday: {
      name: 'Bacak & Core (Legs)',
      exercises: [
        { id: 'ex7', name: 'Squat (Çömelme)', sets: 4, reps: '12', weight: '40 kg' },
        { id: 'ex8', name: 'Lunge (Adımlama)', sets: 3, reps: '10', weight: '10 kg' },
        { id: 'ex9', name: 'Plank / Karın Sıkıştırma', sets: 3, reps: '60 sn', weight: '-' }
      ]
    },
    thursday: {
      name: 'Aktif Toparlanma & Mobilite',
      exercises: [
        { id: 'ex10', name: 'Hafif Koşu / Tempolu Yürüyüş', sets: 1, reps: '30 dk', weight: '-' },
        { id: 'ex11', name: 'Tam Vücut Esneme & Mobilite', sets: 1, reps: '20 dk', weight: '-' }
      ]
    },
    friday: {
      name: 'Üst Vücut Güç (Upper Power)',
      exercises: [
        { id: 'ex12', name: 'Ağır İtiş & Çekiş Kombinasyonu', sets: 4, reps: '8', weight: 'Kişisel' },
        { id: 'ex13', name: 'Dips & Barfiks Süperseti', sets: 3, reps: '10', weight: 'Vücut Ağ.' }
      ]
    },
    saturday: {
      name: 'Alt Vücut & Kondisyon (Lower & HIIT)',
      exercises: [
        { id: 'ex14', name: 'Bulgarian Split Squat', sets: 3, reps: '10', weight: '12 kg' },
        { id: 'ex15', name: 'İp Atlama / Sprint HIIT', sets: 5, reps: '2 dk', weight: '-' }
      ]
    },
    sunday: {
      name: 'Haftalık Dinlenme & Zihin Günü',
      exercises: [
        { id: 'ex16', name: 'Doğa Yürüyüşü / Hafif Esneme', sets: 1, reps: '45 dk', weight: '-' }
      ]
    }
  };
}

const INITIAL_STATE = {
  currentDay: 1,
  level: 1,
  xp: 0,
  streak: 1,
  hearts: 3,
  hardMode: false,
  soundEnabled: true,
  hapticsEnabled: true,
  onboardingDone: false,
  assessmentScore: 75,
  bossHp: BOSS_LORE[0].hp,
  bossMaxHp: BOSS_LORE[0].hp,
  stats: {
    STR: 10,
    VIT: 10,
    MND: 10,
    WIL: 10,
    FOC: 10,
    DIS: 10
  },
  todayHabits: DEFAULT_HABITS.map(h => ({ ...h, completed: false })),
  history: {},
  workouts: getDefaultWorkoutPlan(),
  meditationHistory: [],
  sleepData: {
    connected: false,
    deviceName: null,
    totalMinutes: 450, // 7.5 hrs
    deepMinutes: 110,
    remMinutes: 95,
    lightMinutes: 245,
    qualityScore: 84,
    restingHr: 62,
    hasRestBuff: true,
    lastSyncTime: null
  },
  activeTab: 'quests', // quests | roadmap | tools | cards | profile
  activeModal: null    // meditation | workout | pomodoro | sleep | books | assessment
};

let currentState = { ...INITIAL_STATE };
const listeners = new Set();

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      currentState = {
        ...INITIAL_STATE,
        ...parsed,
        stats: { ...INITIAL_STATE.stats, ...(parsed.stats || {}) },
        sleepData: { ...INITIAL_STATE.sleepData, ...(parsed.sleepData || {}) },
        workouts: parsed.workouts || getDefaultWorkoutPlan()
      };
    } else {
      currentState = { ...INITIAL_STATE };
    }
  } catch (e) {
    console.error('State load error, falling back to initial:', e);
    currentState = { ...INITIAL_STATE };
  }
  return currentState;
}

export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
  } catch (e) {
    console.error('State save error:', e);
  }
}

export function getState() {
  return currentState;
}

export function updateState(partial) {
  currentState = { ...currentState, ...partial };
  saveState();
  listeners.forEach(fn => {
    try { fn(currentState); } catch (e) { console.error('Listener error:', e); }
  });
  return currentState;
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addXP(amount, pillarCode = null) {
  let xp = currentState.xp + amount;
  let level = currentState.level;
  let stats = { ...currentState.stats };

  if (pillarCode && stats[pillarCode] !== undefined) {
    stats[pillarCode] += Math.max(1, Math.floor(amount / 10));
  }

  // Level Up curve: 100 * Level XP per level
  let xpNeeded = level * 100;
  let leveledUp = false;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    level += 1;
    xpNeeded = level * 100;
    leveledUp = true;
    // Boost all stats by +1 on level up
    Object.keys(stats).forEach(k => { stats[k] += 1; });
  }

  updateState({ xp, level, stats });
  return { leveledUp, newLevel: level, gainedXP: amount };
}

export function resetState() {
  currentState = { ...INITIAL_STATE };
  saveState();
  listeners.forEach(fn => fn(currentState));
  return currentState;
}

export function exportStateJSON() {
  return JSON.stringify(currentState, null, 2);
}

export function importStateJSON(jsonStr) {
  try {
    const parsed = JSON.parse(jsonStr);
    currentState = { ...INITIAL_STATE, ...parsed };
    saveState();
    listeners.forEach(fn => fn(currentState));
    return true;
  } catch (e) {
    console.error('Import failed:', e);
    return false;
  }
}
