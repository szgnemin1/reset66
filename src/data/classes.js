/**
 * Hunter Classes Specification & Passives
 * Solo Leveling / Life Reset RPG Class Archetypes
 */

export const HUNTER_CLASSES = [
  {
    id: 'shadow_warrior',
    name: 'Gölge Savaşçısı',
    title: 'Fiziksel Güç & Hipertrofi Ustası',
    icon: '⚔️',
    color: 'from-amber-500 to-rose-600',
    borderColor: 'border-amber-500/50',
    accent: 'amber',
    description: 'Demir ve ağırlıklarla dövülmüş avcı. Antrenman odaklı disiplin.',
    perkTitle: 'Vahşi Hipertrofi',
    perkDescription: 'Antrenmanların Boss\'a vurduğu hasar +%25 artar, STR XP kazanımı +%30 yükselir.',
    multiplier: {
      workoutDmg: 1.25,
      strXp: 1.30,
      readingDmg: 1.0,
      mndXp: 1.0,
      runDmg: 1.0,
      endXp: 1.0,
      bonusHearts: 0
    }
  },
  {
    id: 'sage_monk',
    name: 'Bilge Monastik',
    title: 'Zihin & İç Disiplin Rehberi',
    icon: '🧘',
    color: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-500/50',
    accent: 'purple',
    description: 'Stoacı felsefe, derin okuma ve meditatif sakinlik ile güçlenen avcı.',
    perkTitle: 'Stoacı Berraklık',
    perkDescription: 'Kitap okuma ve meditasyon görevlerinden +%35 Zihin (MND) XP ve +15 Boss Hasarı.',
    multiplier: {
      workoutDmg: 1.0,
      strXp: 1.0,
      readingDmg: 1.35,
      mndXp: 1.35,
      runDmg: 1.0,
      endXp: 1.0,
      bonusHearts: 0
    }
  },
  {
    id: 'iron_titan',
    name: 'Demir Titan',
    title: 'Kardiyo & Yüksek Dayanıklılık',
    icon: '🛡️',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/50',
    accent: 'cyan',
    description: 'Tükenmeyen ciğer kapasitesi, soğuk duş direnci ve kırılmaz savunma.',
    perkTitle: 'Titan Savunması & +1 Can',
    perkDescription: 'Toplam 4 Can Kalbine sahip olur. Koşu ve soğuk duş hasarı +%25 yükselir.',
    multiplier: {
      workoutDmg: 1.0,
      strXp: 1.0,
      readingDmg: 1.0,
      mndXp: 1.0,
      runDmg: 1.25,
      endXp: 1.30,
      bonusHearts: 1
    }
  }
];

export function getClassById(id) {
  return HUNTER_CLASSES.find(c => c.id === id) || HUNTER_CLASSES[0];
}
