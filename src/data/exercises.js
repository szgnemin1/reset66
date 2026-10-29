/**
 * Rich Fitness & Exercise Database
 * Inspired by yuhonas/free-exercise-db and hasaneyldrm/exercises-dataset.
 * Includes equipment filtering (Ekipmansız/Bodyweight, Dambıl, Halter, Direnç Bandı, Makine)
 * and muscle group targeting with animated visual demos.
 */

export const EQUIPMENT_TYPES = [
  { id: 'all', label: 'Tümü' },
  { id: 'bodyweight', label: 'Ekipmansız (Evde)' },
  { id: 'dumbbell', label: 'Dambıl' },
  { id: 'barbell', label: 'Halter (Barbell)' },
  { id: 'band', label: 'Direnç Bandı' },
  { id: 'machine', label: 'Spor Salonu / Makine' }
];

export const MUSCLE_GROUPS = [
  { id: 'all', label: 'Tüm Kaslar' },
  { id: 'chest', label: 'Göğüs' },
  { id: 'back', label: 'Sırt' },
  { id: 'legs', label: 'Bacak' },
  { id: 'shoulders', label: 'Omuz' },
  { id: 'arms', label: 'Kol (Biceps/Triceps)' },
  { id: 'core', label: 'Karın (Core)' }
];

export const EXERCISE_DATABASE = [
  // --- BODYWEIGHT (EKİPMANSIZ) ---
  {
    id: 'bw_pushup',
    name: 'Klasik Şınav (Push-Up)',
    equipment: 'bodyweight',
    muscle: 'chest',
    difficulty: 'Başlangıç / Orta',
    instructions: 'Ellerini omuz genişliğinde yere koy, gövdeni düz bir çizgi halinde tut. Göğsün yere değene kadar in ve güçlüce it.',
    targetMuscles: 'Göğüs, Triceps, Ön Omuz, Core',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg'
  },
  {
    id: 'bw_squat',
    name: 'Vücut Ağırlığı Squat (Air Squat)',
    equipment: 'bodyweight',
    muscle: 'legs',
    difficulty: 'Başlangıç',
    instructions: 'Ayaklar omuz genişliğinde açık. Kalçayı geriye doğru sandalyeye oturur gibi indir, dizler parmak ucunu geçmesin.',
    targetMuscles: 'Quadriceps, Gluteus (Kalça), Hamstrings',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg'
  },
  {
    id: 'bw_pullup',
    name: 'Barfiks (Pull-Up)',
    equipment: 'bodyweight',
    muscle: 'back',
    difficulty: 'İleri Seviye',
    instructions: 'Barı omuzdan biraz geniş tut. Kürek kemiklerini sıkarak çeneni barın üzerine çek, kontrollü şekilde indir.',
    targetMuscles: 'Latissimus Dorsi (Kanat), Biceps, Üst Sırt',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg'
  },
  {
    id: 'bw_dips',
    name: 'Paralel Bar Dips / Sandalye Dips',
    equipment: 'bodyweight',
    muscle: 'arms',
    difficulty: 'Orta',
    instructions: 'Kollarını 90 derece bükerek gövdeni aşağı indir. Triceps kaslarını sıkarak başlangıç konumuna yüksel.',
    targetMuscles: 'Triceps, Alt Göğüs, Ön Omuz',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_Chest_Version/0.jpg'
  },
  {
    id: 'bw_plank',
    name: 'Düz Plank (Forearm Plank)',
    equipment: 'bodyweight',
    muscle: 'core',
    difficulty: 'Başlangıç / Orta',
    instructions: 'Ön kollarının ve ayak parmaklarının üzerinde dur. Kalçayı ne çok kaldır ne düşür, karın kaslarını kilitle.',
    targetMuscles: 'Transverse Abdominis, Rectus Abdominis, Bel',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg'
  },
  {
    id: 'bw_pike_pushup',
    name: 'Pike Şınav (Omuz Odaklı)',
    equipment: 'bodyweight',
    muscle: 'shoulders',
    difficulty: 'Orta',
    instructions: 'Kalçayı yukarı kaldırarak ters V şekli al. Başını iki elinin arasına doğru indir ve omuzlarınla it.',
    targetMuscles: 'Ön ve Yan Deltoid, Üst Göğüs, Triceps',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg'
  },
  {
    id: 'bw_lunges',
    name: 'Yürüyüş Lunge (Walking Lunge)',
    equipment: 'bodyweight',
    muscle: 'legs',
    difficulty: 'Orta',
    instructions: 'Bir adım öne at, arka dizin neredeyse yere değecek kadar çök. Ön bacağınla güç alarak kalk ve diğer bacağa geç.',
    targetMuscles: 'Quadriceps, Kalça, Denge ve Stabilite',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg'
  },

  // --- DUMBBELL (DAMBIL) ---
  {
    id: 'db_bench_press',
    name: 'Dambıl Bench Press',
    equipment: 'dumbbell',
    muscle: 'chest',
    difficulty: 'Orta',
    instructions: 'Düz sehpaya uzan. Dambılları göğüs hizasında tutarak yukarı doğru presle, tepe noktada göğsü sık.',
    targetMuscles: 'Pectoralis Major (Göğüs), Triceps, Omuz',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg'
  },
  {
    id: 'db_row',
    name: 'Tek Kol Dambıl Row (One-Arm Row)',
    equipment: 'dumbbell',
    muscle: 'back',
    difficulty: 'Orta',
    instructions: 'Bir dizini ve elini sehpaya koy. Dambılı dirseğini arkaya doğru çekerek kaburgana yaklaştır, sırtı sıkıştır.',
    targetMuscles: 'Latissimus Dorsi, Rhomboids, Biceps',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg'
  },
  {
    id: 'db_shoulder_press',
    name: 'Dambıl Omuz Press (Overhead Press)',
    equipment: 'dumbbell',
    muscle: 'shoulders',
    difficulty: 'Orta',
    instructions: 'Dambılları kulak hizasından başının üzerine doğru güçlüce it, kilitlenmeden kontrollü indir.',
    targetMuscles: 'Ön ve Yan Omuz (Deltoids), Triceps',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg'
  },
  {
    id: 'db_bicep_curl',
    name: 'Dambıl Biceps Curl',
    equipment: 'dumbbell',
    muscle: 'arms',
    difficulty: 'Başlangıç',
    instructions: 'Dirsekleri gövdeye sabitle. Dambılları sadece ön kolunu bükerek yukarı kaldır, tepe noktada sık.',
    targetMuscles: 'Biceps Brachii, Brachialis',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg'
  },
  {
    id: 'db_goblet_squat',
    name: 'Goblet Squat (Dambıl Çömelme)',
    equipment: 'dumbbell',
    muscle: 'legs',
    difficulty: 'Orta',
    instructions: 'Dambılı göğsünün önünde iki elinle dikey tut. Derin bir squat yap, dirseklerin dizlerinin içine doğru insin.',
    targetMuscles: 'Quadriceps, Kalça, Core',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg'
  },
  {
    id: 'db_lateral_raise',
    name: 'Dambıl Yana Açış (Lateral Raise)',
    equipment: 'dumbbell',
    muscle: 'shoulders',
    difficulty: 'Orta',
    instructions: 'Hafif dambıllarla kollarını yana doğru omuz hizasına kadar kaldır. Geniş omuz illüzyonunun anahtarıdır.',
    targetMuscles: 'Lateral Deltoid (Yan Omuz)',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg'
  },

  // --- BARBELL (HALTER) ---
  {
    id: 'bb_deadlift',
    name: 'Barbell Deadlift (Geleneksel)',
    equipment: 'barbell',
    muscle: 'back',
    difficulty: 'İleri Seviye',
    instructions: 'Beli nötr tut, kalçayı geriye iterek barı kavra. Topuklarından güç alarak dik konuma gel ve kalçayı kilitle.',
    targetMuscles: 'Tüm Arka Zincir: Bel, Hamstrings, Kalça, Sırt',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg'
  },
  {
    id: 'bb_squat',
    name: 'Barbell Back Squat',
    equipment: 'barbell',
    muscle: 'legs',
    difficulty: 'İleri Seviye',
    instructions: 'Barı trapezius kaslarının üzerine yerleştir. Göğsü dik tutarak paralel veya altına kadar çök ve patlayıcı güçle kalk.',
    targetMuscles: 'Quadriceps, Kalça, Hamstring, Tüm Bacak',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg'
  },
  {
    id: 'bb_bench_press',
    name: 'Barbell Bench Press',
    equipment: 'barbell',
    muscle: 'chest',
    difficulty: 'Orta',
    instructions: 'Barı göğüs kemiğine kadar kontrollü indir, ayakları yere basarak göğüs kaslarınla güçlüce tavana it.',
    targetMuscles: 'Göğüs (Pectoralis), Triceps, Omuz',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg'
  },

  // --- BANDS (DİRENÇ BANDI) ---
  {
    id: 'band_facepull',
    name: 'Bant Face Pull (Postür & Arka Omuz)',
    equipment: 'band',
    muscle: 'shoulders',
    difficulty: 'Başlangıç / Orta',
    instructions: 'Bandı bir yere sabitle. Dirsekleri yüksekte tutarak bandı burnuna doğru çek, arka omuzları sık.',
    targetMuscles: 'Arka Deltoid, Rotator Cuff, Üst Sırt',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Face_Pull/0.jpg'
  },
  {
    id: 'band_bicep_curl',
    name: 'Bant Biceps Curl',
    equipment: 'band',
    muscle: 'arms',
    difficulty: 'Başlangıç',
    instructions: 'Bandın üzerine bas, uçlarından tutarak kolları bük. Bant gerildikçe tepe noktada direnç maksimuma çıkar.',
    targetMuscles: 'Biceps, Ön Kol',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/1.jpg'
  },

  // --- MACHINE (MAKİNE / SPOR SALONU) ---
  {
    id: 'mac_lat_pulldown',
    name: 'Lat Pulldown (Geniş Çekiş)',
    equipment: 'machine',
    muscle: 'back',
    difficulty: 'Başlangıç / Orta',
    instructions: 'Barı geniş tut, göğsü yukarı kaldırarak barı köprücük kemiğine çek. Kanat kaslarını sıkarak yavaşça bırak.',
    targetMuscles: 'Latissimus Dorsi, Biceps, Kürek Kemiği',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lat_Pulldown/0.jpg'
  },
  {
    id: 'mac_leg_press',
    name: 'Leg Press (Bacak Presi)',
    equipment: 'machine',
    muscle: 'legs',
    difficulty: 'Orta',
    instructions: 'Ayakları platformun ortasına koy. Ağırlığı 90 dereceye kadar indir, dizleri kilitlemeden yukarı it.',
    targetMuscles: 'Quadriceps, Gluteus, Hamstrings',
    gif: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg'
  }
];
