/**
 * Central Reactive State Manager & LocalStorage Persistence (v2.2.0)
 * 100% Offline, Privacy-First, Zero Cloud Dependency.
 * Tracks 6 Core Daily Quests, Weekly Boss Battles (x2 Enraged Penalty), and 66-Day Chain Map.
 */

import { BOSS_LORE } from '../data/constants.js';

const STORAGE_KEY = 'RESET66_SOLO_LEVELING_STATE_V2_2';

export const CORE_DAILY_QUESTS = [
  {
    id: 'q_run',
    title: '5.0 KM Koşu / Tempolu Yürüyüş',
    desc: 'Akıllı bileklikten otomatik veri çeker veya manuel girilir.',
    icon: '🏃',
    pillar: 'VIT',
    unit: 'km',
    target: 5.0,
    current: 0.0,
    xp: 40,
    bossDmg: 40,
    completed: false
  },
  {
    id: 'q_workout',
    title: 'Günün Direnç Antrenmanı (45 Dk)',
    desc: 'Seçili günün antrenman hareketlerini tamamla.',
    icon: '🏋️',
    pillar: 'STR',
    unit: 'dk',
    target: 45,
    current: 0,
    xp: 50,
    bossDmg: 50,
    completed: false
  },
  {
    id: 'q_reading',
    title: '15 Sayfa Kitap Oku (Dahili Kütüphane)',
    desc: 'Uygulama içindeki Stoacı ve Ustalık başyapıtlarını oku.',
    icon: '📖',
    pillar: 'MND',
    unit: 'sayfa',
    target: 15,
    current: 0,
    xp: 35,
    bossDmg: 35,
    completed: false
  },
  {
    id: 'q_meditation',
    title: '10 Dk Bilinçli Meditasyon & Nefes',
    desc: 'Kutu Nefesi, 4-7-8, Stanford Sigh veya 40Hz frekans.',
    icon: '🧘',
    pillar: 'MND',
    unit: 'dk',
    target: 10,
    current: 0,
    xp: 30,
    bossDmg: 30,
    completed: false
  },
  {
    id: 'q_water',
    title: '3.5L Hücresel Hidrasyon (Su)',
    desc: 'Mitokondrileri sula, toksinleri temizle.',
    icon: '💧',
    pillar: 'VIT',
    unit: 'L',
    target: 3.5,
    current: 0.0,
    xp: 25,
    bossDmg: 25,
    completed: false
  },
  {
    id: 'q_cold_shower',
    title: '60 Saniye Bilinçli Soğuk Duş',
    desc: 'Dopamin tabanını %250 yükselt, aMCC irade kasını büyüt.',
    icon: '🧊',
    pillar: 'WIL',
    unit: 'sn',
    target: 60,
    current: 0,
    xp: 30,
    bossDmg: 30,
    completed: false
  }
];

function getDefaultWorkoutPlan() {
  return {
    monday: {
      name: 'İtiş Günü (Push)',
      exercises: [
        { id: 'ex1', name: 'Klasik Şınav (Push-Up)', sets: 4, reps: '12', weight: 'Vücut Ağ.', equipment: 'bodyweight' },
        { id: 'ex2', name: 'Dambıl Bench Press', sets: 4, reps: '10', weight: '15 kg', equipment: 'dumbbell' },
        { id: 'ex3', name: 'Paralel Bar Dips', sets: 3, reps: '10', weight: 'Vücut Ağ.', equipment: 'bodyweight' }
      ]
    },
    tuesday: {
      name: 'Çekiş Günü (Pull)',
      exercises: [
        { id: 'ex4', name: 'Barfiks (Pull-Up)', sets: 4, reps: '8', weight: 'Vücut Ağ.', equipment: 'bodyweight' },
        { id: 'ex5', name: 'Tek Kol Dambıl Row', sets: 4, reps: '10', weight: '18 kg', equipment: 'dumbbell' },
        { id: 'ex6', name: 'Dambıl Biceps Curl', sets: 3, reps: '12', weight: '12.5 kg', equipment: 'dumbbell' }
      ]
    },
    wednesday: {
      name: 'Bacak & Core (Legs & Abs)',
      exercises: [
        { id: 'ex7', name: 'Barbell Back Squat / Air Squat', sets: 4, reps: '12', weight: '30 kg', equipment: 'barbell' },
        { id: 'ex8', name: 'Yürüyüş Lunge (Walking Lunge)', sets: 3, reps: '10', weight: '10 kg', equipment: 'bodyweight' },
        { id: 'ex9', name: 'Düz Plank (Forearm Plank)', sets: 3, reps: '60 sn', weight: '-', equipment: 'bodyweight' }
      ]
    },
    thursday: {
      name: 'Aktif Toparlanma & Mobilite',
      exercises: [
        { id: 'ex10', name: 'Hafif Tempo 5.0 KM Koşu / Yürüyüş', sets: 1, reps: '40 dk', weight: '-', equipment: 'bodyweight' },
        { id: 'ex11', name: 'Tam Vücut Esneme & Mobilite', sets: 1, reps: '20 dk', weight: '-', equipment: 'bodyweight' }
      ]
    },
    friday: {
      name: 'Üst Vücut Güç (Upper Power)',
      exercises: [
        { id: 'ex12', name: 'Dambıl Omuz Press', sets: 4, reps: '10', weight: '15 kg', equipment: 'dumbbell' },
        { id: 'ex13', name: 'Bant Face Pull (Arka Omuz)', sets: 3, reps: '15', weight: 'Direnç', equipment: 'band' }
      ]
    },
    saturday: {
      name: 'Alt Vücut & Kondisyon (Lower & HIIT)',
      exercises: [
        { id: 'ex14', name: 'Goblet Squat (Dambıl Çömelme)', sets: 3, reps: '12', weight: '16 kg', equipment: 'dumbbell' },
        { id: 'ex15', name: 'İp Atlama & Sprint HIIT', sets: 5, reps: '2 dk', weight: '-', equipment: 'bodyweight' }
      ]
    },
    sunday: {
      name: 'Haftalık Zihin & Dinlenme Günü',
      exercises: [
        { id: 'ex16', name: 'Doğa Yürüyüşü & Derin Nefes', sets: 1, reps: '45 dk', weight: '-', equipment: 'bodyweight' }
      ]
    }
  };
}

function initializeChainMap() {
  const chain = {};
  for (let i = 1; i <= 66; i++) {
    chain[i] = i === 1 ? 'current' : 'locked';
  }
  return chain;
}

const INITIAL_STATE = {
  currentDay: 1,
  level: 1,
  xp: 0,
  streak: 1,
  hearts: 3, // Maks 3 Can
  hardMode: false,
  soundEnabled: true,
  hapticsEnabled: true,
  onboardingDone: false,
  assessmentScore: 75,
  
  // Boss State
  bossHp: BOSS_LORE[0].hp,
  bossMaxHp: BOSS_LORE[0].hp,
  bossIsEnraged: false, // x2 Güç modu
  bossMultiplier: 1,

  // Zinciri Kırma (Don't Break The Chain) 66-Gün Haritası
  chainDays: initializeChainMap(),

  // 6 Life Pillars
  stats: {
    STR: 10,
    VIT: 10,
    MND: 10,
    WIL: 10,
    FOC: 10,
    DIS: 10
  },

  // Daily Quests
  todayHabits: CORE_DAILY_QUESTS.map(q => ({ ...q })),

  // Workout Builder Plan
  workouts: getDefaultWorkoutPlan(),

  // Smart Watch & Sleep Sync
  sleepData: {
    connected: false,
    deviceName: null,
    totalMinutes: 450,
    deepMinutes: 110,
    remMinutes: 95,
    lightMinutes: 245,
    qualityScore: 84,
    restingHr: 62,
    hasRestBuff: true,
    lastDistanceKm: 5.2,
    lastSteps: 7850,
    lastSyncTime: null
  },

  // In-App E-Book Reader State
  activeBookId: 'marcus_aurelius',
  activeChapterIdx: 0,
  fontSize: 'normal', // normal | large | xlarge

  activeTab: 'quests', // quests | boss | workout | library | settings
  activeModal: null    // meditation | reader | workoutModal | sleepModal
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
        workouts: parsed.workouts || getDefaultWorkoutPlan(),
        chainDays: parsed.chainDays || initializeChainMap(),
        todayHabits: parsed.todayHabits || CORE_DAILY_QUESTS.map(q => ({ ...q }))
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

  let xpNeeded = level * 100;
  let leveledUp = false;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    level += 1;
    xpNeeded = level * 100;
    leveledUp = true;
    Object.keys(stats).forEach(k => { stats[k] += 1; });
  }

  updateState({ xp, level, stats });
  return { leveledUp, newLevel: level, gainedXP: amount };
}

/**
 * Inflicts damage directly on the active Boss.
 */
export function damageBoss(dmgAmount) {
  const currentHp = currentState.bossHp;
  const newHp = Math.max(0, currentHp - dmgAmount);
  updateState({ bossHp: newHp });
  return { newHp, damageDealt: dmgAmount, isDefeated: newHp === 0 };
}

/**
 * Triggers Missed Day Penalty:
 * Boss gains x2 HP/Power (Berserk Mode), Player loses 1 Heart, Streak takes hit.
 */
export function triggerMissedDayPenalty() {
  const newHearts = Math.max(0, currentState.hearts - 1);
  const enragedHp = currentState.bossMaxHp * 2;
  const chain = { ...currentState.chainDays };
  chain[currentState.currentDay] = 'missed';

  const nextDay = Math.min(66, currentState.currentDay + 1);
  chain[nextDay] = 'current';

  const resetHabits = CORE_DAILY_QUESTS.map(q => ({ ...q }));

  updateState({
    hearts: newHearts,
    streak: Math.max(1, Math.floor(currentState.streak / 2)),
    bossIsEnraged: true,
    bossMultiplier: 2,
    bossHp: enragedHp,
    bossMaxHp: enragedHp,
    currentDay: nextDay,
    chainDays: chain,
    todayHabits: resetHabits
  });

  return { newHearts, enragedHp };
}

/**
 * Seals the day successfully:
 * Marks chain node as 'done', advances day, resets daily habit checklist.
 */
export function completeDaySuccessfully() {
  const chain = { ...currentState.chainDays };
  chain[currentState.currentDay] = 'done';

  const nextDay = Math.min(66, currentState.currentDay + 1);
  if (nextDay <= 66) {
    chain[nextDay] = 'current';
  }

  const nextStreak = currentState.streak + 1;
  const resetHabits = CORE_DAILY_QUESTS.map(q => ({ ...q }));

  // Check if current boss was killed or need to progress boss week
  const nextWeek = Math.min(10, Math.ceil(nextDay / 7));
  const nextBoss = BOSS_LORE[nextWeek - 1] || BOSS_LORE[0];

  updateState({
    currentDay: nextDay,
    streak: nextStreak,
    bossIsEnraged: false,
    bossMultiplier: 1,
    bossHp: nextBoss.hp,
    bossMaxHp: nextBoss.hp,
    chainDays: chain,
    todayHabits: resetHabits
  });
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
