/**
 * Legendary Artifacts & Relics (Loot Drops)
 * Earned by defeating weekly Bosses and reaching 7, 14, 21, 35, 50, 66-day milestones.
 */

export const ARTIFACTS = [
  {
    id: 'art_aurelius_seal',
    name: "Aurelius'un Stoa Mührü",
    icon: '📜',
    rarity: 'Efsanevi',
    color: 'from-purple-500 to-indigo-600',
    description: 'Kendime Düşünceler yazılırken kullanılan balmumu mühür.',
    effect: 'Kitap okuma görevleri Boss\'a +25 Ek Hasar vurur ve +%20 MND XP kazandırır.',
    slot: 'relic',
    bonusBossDmgReading: 25
  },
  {
    id: 'art_titan_wristband',
    name: 'Titanın Titanyum Bilekliği',
    icon: '⚡',
    rarity: 'Efsanevi',
    color: 'from-amber-500 to-rose-600',
    description: 'En ağır setlerde bile bileği sabit tutan gölge titanyumu alaşımı.',
    effect: 'Antrenman görevi Boss\'a +30 Ek Hasar vurur ve +%20 STR XP sağlar.',
    slot: 'wrist',
    bonusBossDmgWorkout: 30
  },
  {
    id: 'art_winged_sandals',
    name: 'Hermes\'in Rüzgar Çorapları',
    icon: '👟',
    rarity: 'Nadir',
    color: 'from-cyan-500 to-teal-500',
    description: 'Koşu sırasında sürtünmeyi sıfıra indiren efsanevi koşu donanımı.',
    effect: 'Koşu görevinden kazanılan hasarı +25 artırır, akıllı saat senkronuna +%10 bonus ekler.',
    slot: 'feet',
    bonusBossDmgRun: 25
  },
  {
    id: 'art_tibet_bowl',
    name: 'Tibet Şaman Ses Çanağı',
    icon: '🔔',
    rarity: 'Efsanevi',
    color: 'from-emerald-500 to-cyan-600',
    description: '432 Hz rezonansla beyni anında alfa dalgasına geçiren el yapımı bronz çan.',
    effect: 'Meditasyon süresi Boss\'a +20 Zihinsel Hasar vurur.',
    slot: 'relic',
    bonusBossDmgMeditation: 20
  },
  {
    id: 'art_frost_guard',
    name: 'Buz Muhafızı Donanımı',
    icon: '🧊',
    rarity: 'Nadir',
    color: 'from-blue-400 to-cyan-500',
    description: '0 derecede bile zihnin berrak kalmasını sağlayan soğuk şok kristali.',
    effect: 'Soğuk duş görevi Boss\'a +25 Dondurucu Hasar vurur.',
    slot: 'armor',
    bonusBossDmgCold: 25
  },
  {
    id: 'art_shadow_core',
    name: 'Gölge Çekirdeği Taşı',
    icon: '🔮',
    rarity: 'Antik',
    color: 'from-purple-600 to-black',
    description: 'Her sabah uyandığında doğrudan Boss\'un canına sızan karanlık enerji.',
    effect: 'Her günün başlangıcında Boss doğrudan 20 Hasar alarak güne başlar.',
    slot: 'core',
    passiveDailyDmg: 20
  },
  {
    id: 'art_hydra_chalice',
    name: 'Sonsuzluk Su Kadehi',
    icon: '💧',
    rarity: 'Nadir',
    color: 'from-sky-400 to-blue-600',
    description: 'Hücresel hidrasyonu maksimuma çıkaran kutsal matara.',
    effect: '3.5L su tamamlandığında Boss\'a +20 hasar ve ekstra +20 XP verir.',
    slot: 'relic',
    bonusBossDmgWater: 20
  },
  {
    id: 'art_phoenix_feather',
    name: 'Anka Kuşu Tüyü',
    icon: '🪶',
    rarity: 'Efsanevi',
    color: 'from-rose-500 to-amber-500',
    description: 'Can sıfırlandığında küllerinden doğmanı sağlayan tek kullanımlık koruma.',
    effect: 'Tüm kalpler tükendiğinde anında 1 Kalp doldurur (Ölüm Engelleme).',
    slot: 'amulet',
    reviveProtection: true
  }
];

export function getArtifactById(id) {
  return ARTIFACTS.find(a => a.id === id);
}
