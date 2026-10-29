/**
 * Reset66 — Core Data & Scientific Constants
 * Grounded in UCL (2010), Stanford (2023), Science (2013), and PNAS (2014) literature.
 */

export const PILLARS = {
  STR: { code: 'STR', name: 'Güç', title: 'Güç & Kuvvet', color: 'amber', icon: '💪', stat: 'Fiziksel Hasar', desc: 'Antrenman, hipertrofi ve kas dayanıklılığı' },
  VIT: { code: 'VIT', name: 'Canlılık', title: 'Canlılık & Hidrasyon', color: 'emerald', icon: '💧', stat: 'Maks HP & Yenilenme', desc: 'Hücresel hidrasyon, biyometrik uyku kalitesi' },
  MND: { code: 'MND', name: 'Zihin', title: 'Zihin & Bilgelik', color: 'purple', icon: '🧘', stat: 'Odak & Zihinsel Hasar', desc: 'Kitap okuma, farkındalık ve meditasyon' },
  WIL: { code: 'WIL', name: 'İrade', title: 'İrade & Direnç', color: 'cyan', icon: '🧊', stat: 'Kritik Vuruş', desc: 'Soğuk duş, anlık dürtü kontrolü (aMCC)' },
  FOC: { code: 'FOC', name: 'Odak', title: 'Odak & Pürdikkat', color: 'indigo', icon: '📵', stat: 'Boss Yetenek Kilidi', desc: 'Sosyal medya kısıtlama, derin Pomodoro' },
  DIS: { code: 'DIS', name: 'Disiplin', title: 'Disiplin & Rutin', color: 'rose', icon: '🌙', stat: 'Seri (Streak) Zırhı', desc: 'Erken uyanış, yatağı toplama ve standartlar' }
};

export const DEFAULT_HABITS = [
  { id: 'h1', pillar: 'DIS', title: 'Erken Uyanış & Yatağı Topla', desc: 'Sabah 07:00 öncesi uyanış ve ilk disiplin mühürü', target: '07:00', xp: 25, unit: 'saat' },
  { id: 'h2', pillar: 'VIT', title: 'Hücresel Hidrasyon (3.5L Su)', desc: 'Güne 500ml ile başla, gün boyu mitokondrileri sula', target: '3500', xp: 25, unit: 'ml' },
  { id: 'h3', pillar: 'STR', title: 'Kademeli Direnç Antrenmanı', desc: 'En az 45 dk ağırlık, calisthenics veya kardiyo', target: '45', xp: 35, unit: 'dk' },
  { id: 'h4', pillar: 'MND', title: '15 Sayfa Kitap & Meditasyon', desc: 'Yüksek kalibreli okuma + 5 dk bilinçli nefes', target: '15', xp: 30, unit: 'sayfa' },
  { id: 'h5', pillar: 'WIL', title: 'Bilinçli Soğuk Duş (Dopamin)', desc: 'Minimum 60 sn buz gibi su (Srámek 2000 Dopamin +%250)', target: '60', xp: 30, unit: 'sn' },
  { id: 'h6', pillar: 'FOC', title: 'Dijital Detoks & Ekran Limiti', desc: 'Gereksiz kaydırma yok, maksimum 60 dk sosyal medya', target: '60', xp: 25, unit: 'dk' }
];

export const BOSS_LORE = [
  { week: 1, name: 'Atalet Gölgesi', archetype: 'Statik Sürtünme & Harekete Geçememe', desc: 'Lally (UCL 2010): Başlangıç direnci en yüksek seviyededir. 2 dakika kuralıyla ilk kıvılcımı çak.', weakness: 'Küçük Adımlar & İlk Kıvılcım', hp: 300 },
  { week: 2, name: 'Erteleme İblisi', archetype: 'Zamansal İskonto & Sahte Yarın Algısı', desc: 'Prefrontal korteks ile amigdala çatışması. Uzak ödülleri anlık mikro-XP ile yakınlaştır.', weakness: 'Geri Sayım & Aciliyet Hissi', hp: 450 },
  { week: 3, name: 'Ucuz Dopamin Ejderi', archetype: 'Tonik Dopamin Tüketimi & Algoritma Tuzağı', desc: 'Dr. Lembke (Stanford): Fazla uyarım dopamin tabanını çökertir. Ekran detoksuyla reseptörleri yenile.', weakness: 'Dopamin Orucu & Gri Ekran', hp: 600 },
  { week: 4, name: 'Konfor Alanı Gardiyanı', archetype: 'Amigdala Kaçınma Tepkisi', desc: 'Soğuk su ve zorluk anterior singulat korteksi (irade merkezi) büyüterek gardiyanı ezer.', weakness: 'Soğuk Su Şoku & Bilinçli Zorluk', hp: 800 },
  { week: 5, name: 'Dağınık Zihin Hayaleti', archetype: 'Dikkat Kalıntısı & Çoklu Görev', desc: 'Cal Newport: Görev geçişleri bilişsel artık bırakır. 25 dk tekil Pomodoro ile hayaleti dağıt.', weakness: 'Pürdikkat Odak Blokları', hp: 1050 },
  { week: 6, name: 'Şüphe Lordu', archetype: 'Sahtekarlık Sendromu & Negatif İç Ses', desc: 'CBT: Şüphe gerçek değil, savunma refleksidir. Yazılı kanıt günlüğüyle gerçeği gör.', weakness: 'Gelişim Günlüğü & Somut Kanıt', hp: 1350 },
  { week: 7, name: 'Bahane Golemi', archetype: 'Bilişsel Çelişki & Mantığa Bürüme', desc: 'Beyin rahatsızlığı gidermek için bahaneler üretir. Standartların tavizsiz olsun.', weakness: 'Tavizsiz Disiplin & Standartlar', hp: 1700 },
  { week: 8, name: 'Uykusuzluk Canavarı', archetype: 'Sirkadiyen Ritmin Bozulması', desc: 'Dr. Walker & Nedergaard: Mavi ışık melatonini 2 saat geciktirir. Gliyomfatik temizliği başlat.', weakness: 'Karanlık Oda & Sabit Uyanış', hp: 2100 },
  { week: 9, name: 'Kaos Şövalyesi', archetype: 'Stres Altında Eski Rutine Dönme', desc: 'Kriz anlarında hedeflerine değil, alışkanlıklarının seviyesine düşersin. Temel çapayı koru.', weakness: 'Temel Alışkanlık Çapaları', hp: 2600 },
  { week: 10, name: 'Eski Kimlik Kralı', archetype: 'Ego Savunması & Geri Çekilme', desc: 'Otomatizmin son aşaması. Eski tembel kimliğin öldüğü, yeni Solo Hunter kimliğinin doğuşu.', weakness: '66 Günlük Nöral Mühür & Yeniden Doğuş', hp: 3200 }
];

export const BOOK_SUMMARIES = [
  {
    id: 'b1',
    title: 'Atomik Alışkanlıklar',
    author: 'James Clear',
    pillar: 'Disiplin',
    badge: 'Nöroplastisite',
    summary: 'Her gün %1 daha iyi olmak yıl sonunda seni 37 kat ileri taşır. Alışkanlığı görünür, çekici, kolay ve tatmin edici kıl; 2 dakika kuralıyla ilk kıvılcımı çak.'
  },
  {
    id: 'b2',
    title: 'Dopamin Ulusu',
    author: 'Dr. Anna Lembke (Stanford)',
    pillar: 'Odak',
    badge: 'Nörokimya',
    summary: 'Zevk ve acı dengesi aynı tahterevallide çalışır. Sürekli dijital uyarım dopamin tabanını çökertir. 30 günlük dopamin orucu reseptör duyarlılığını onarır.'
  },
  {
    id: 'b3',
    title: 'Neden Uyuruz?',
    author: 'Dr. Matthew Walker (UC Berkeley)',
    pillar: 'Canlılık',
    badge: 'Sirkadiyen Biyoloji',
    summary: '6 saatin altındaki uyku bilişsel kapasiteyi %40 oranında köreltir. Derin uykuda gliyomfatik sistem toksinleri temizler, REM uykusu ise nöral bağlantıları pekiştirir.'
  },
  {
    id: 'b4',
    title: 'Pürdikkat (Deep Work)',
    author: 'Cal Newport (Georgetown)',
    pillar: 'Odak',
    badge: 'Bilişsel Kapasite',
    summary: 'Bölünmüş dikkat zihinsel artık (attention residue) bırakır. Günde 90 dakikalık kesintisiz derin odak bloğu, 8 saatlik dağınık çalışmadan daha çok değer üretir.'
  },
  {
    id: 'b5',
    title: 'Alışkanlıkların Gücü',
    author: 'Charles Duhigg (Harvard)',
    pillar: 'Disiplin',
    badge: 'Bazal Gangliyon',
    summary: 'Nöral Alışkanlık Döngüsü: İpucu (Cue) -> Rutin (Routine) -> Ödül (Reward). Eski alışkanlığı silemezsin; sadece aynı ipucuna yeni bir rutin bağlayabilirsin.'
  },
  {
    id: 'b6',
    title: 'Beni İncitemezsin (Can\'t Hurt Me)',
    author: 'David Goggins (Navy SEAL)',
    pillar: 'İrade',
    badge: 'Zihinsel Zırh',
    summary: '%40 Kuralı: Zihnin pes etmeni haykırdığında aslında fizyolojik kapasitenin sadece %40\'ındasındır. Rahatsızlıkla barış ve beynini zorlukla nasırlaştır.'
  },
  {
    id: 'b7',
    title: 'Kendime Düşünceler (Meditations)',
    author: 'Marcus Aurelius (Roma İmparatoru)',
    pillar: 'Zihin',
    badge: 'Stoacılık',
    summary: 'Kontrol edemediğin dış olayları değil, kendi tepkilerini yönet. Engel, yolun ta kendisidir. Şikayet etmeyi bırak ve eyleme geç.'
  },
  {
    id: 'b8',
    title: 'İrade İçgüdüsü',
    author: 'Dr. Kelly McGonigal (Stanford)',
    pillar: 'İrade',
    badge: 'aMCC Gelişimi',
    summary: 'İrade sonlu bir kaynak değil, geliştirilebilir bir kastır. Soğuk duş ve kontrollü nefes anterior singulat korteksi (aMCC) büyüterek dürtü denetimini artırır.'
  },
  {
    id: 'b9',
    title: 'Huberman Lab Nörobiyoloji Protokolleri',
    author: 'Dr. Andrew Huberman (Stanford)',
    pillar: 'Zihin & Canlılık',
    badge: 'Otonom Sistem',
    summary: 'Sabah güneşiyle sirkadiyen ritmi kilitle. Stres anında iki kısa nefes + bir uzun nefes (Fizyolojik İçe Çekiş) ile kalp ritmini saniyeler içinde düşür.'
  },
  {
    id: 'b10',
    title: 'Outlive: Yaşamın Ötesi',
    author: 'Dr. Peter Attia (Johns Hopkins)',
    pillar: 'Güç & Ömür',
    badge: 'Hücresel Yaşlanma',
    summary: 'Sağlıklı ömür (Healthspan) için en kritik iki belirteç: VO2 Max ve kas kuvvetidir. Kademeli direnç antrenmanı hücresel yaşlanmayı geciktiren en güçlü biyolojik araçtır.'
  }
];

export const MANTRA_CARDS = [
  { id: 'c1', category: 'Disiplin', title: 'Kusursuz Gün Diye Bir Şey Yoktur', quote: 'Motivasyon seni başlatır, disiplin ise 66. güne ulaştırır. Bugün küçük de olsa adımını at.', color: 'cyan' },
  { id: 'c2', category: 'İrade', title: 'Soğuk Suyla Yüzleş (Dopamin +%250)', quote: 'Srámek (2000): Soğuk duş dopamin tabanını saatlerce yükseltir. Sabah zor olanı seç, günün efendisi ol.', color: 'purple' },
  { id: 'c3', category: 'Odak', title: 'Ucuz Dopamini Reddet', quote: 'Lembke: Ekranı her kapattığında beyninin kontrolünü algoritmalardan geri alır, prefrontal korteksini güçlendirirsin.', color: 'emerald' },
  { id: 'c4', category: 'Güç', title: 'Yorgunluk Zihinsel Bir İllüzyondur', quote: 'Goggins: Vücudun pes etmek istediğinde zihnin devreye girer. Bir tekrar daha seni yeni seviyeye taşır.', color: 'amber' },
  { id: 'c5', category: 'Bilgelik', title: 'Sessizlikte Büyü (Günde 15 Sayfa)', quote: 'Yılda 20 kitap eder. Zihnini her gün yüksek kalibreli fikirlerle beslemeden karakterini yükseltemezsin.', color: 'cyan' },
  { id: 'c6', category: 'Özgüven', title: 'Kendine Verdiğin Sözü Tut', quote: 'Özgüven aynada değil, kimse bakmıyorken tamamladığın günlük görevlerde inşa edilir.', color: 'purple' },
  { id: 'c7', category: 'Stoacılık', title: 'Engel Yolun Kendisidir', quote: 'Marcus Aurelius: Eylemin önündeki engel eylemi ilerletir. Yolun üstündeki engel, yolun ta kendisi olur.', color: 'emerald' },
  { id: 'c8', category: 'Nöroplastisite', title: 'Lally 66 Gün Kuralı', quote: 'UCL (2010): Bugün hissettiğin zihinsel sürtünme yeni sinapsların örülme sesidir. Asla durma.', color: 'cyan' },
  { id: 'c9', category: 'Uyku', title: 'BOS Gliyomfatik Sifonu', quote: 'Nedergaard (Science): Derin uyku beynini yıkar. 23:00\'te yatağa girmek yarınki odak kapasiteni garantiye alır.', color: 'purple' },
  { id: 'c10', category: 'Odak', title: 'Tekil Görev Hükümdarlığı', quote: 'Cal Newport: Aynı anda iki iş yapan adam hiçbir işi yapamaz. Tek bir hedefe kilitlen ve parçala.', color: 'emerald' },
  { id: 'c11', category: 'İrade', title: 'Tükeniş Bir Sinyaldir, Bitiş Değil', quote: 'Zihinsel bariyer kırıldığında irade kası hipertrofiye uğrar. aMCC bölgesini her gün besle.', color: 'amber' },
  { id: 'c12', category: 'Canlılık', title: 'Hücresel Hidrasyon', quote: 'Vücudundaki %2\'lik sıvı kaybı bilişsel hızı %15 yavaşlatır. Su iç, hücrelerini canlandır.', color: 'cyan' },
  { id: 'c13', category: 'Kriz', title: 'Kaos Bir Fırsattır', quote: 'Herkes dağılırken rutinine sadık kalan kişi, zindanı ilk fetheden avcı olur.', color: 'amber' },
  { id: 'c14', category: 'Zihin', title: 'Nefesini Yönet, Beynini Yönet', quote: 'Balban & Huberman (2023): Uzatılmış nefes verme kalbine yavaşlama emri verir. Sakinleş ve hakim ol.', color: 'purple' },
  { id: 'c15', category: 'Disiplin', title: 'Standartlar Duyguların Üstündedir', quote: 'Nasıl hissettiğin önemli değil, protokolün neyi emrettiği önemlidir. Duygularını değil, görevini dinle.', color: 'cyan' },
  { id: 'c16', category: 'Güç', title: 'Mekanik Gerilim Yasası', quote: 'Schoenfeld: Kas da karakter de yalnızca progresif yükleme (progressive overload) altında gelişir.', color: 'amber' },
  { id: 'c17', category: 'Özgüven', title: 'Yarın Diye Bir Şey Yok', quote: 'Erteleme İblisi\'nin tek silahı "yarın" yalanıdır. Tek gerçek an şimdidir; ilk seti hemen yap.', color: 'purple' },
  { id: 'c18', category: 'Kimlik', title: 'Gölge Avcısı\'nın Uyanışı', quote: 'Eski tembel kimliğin öldü. 66 günlük nöral mühürle yeni benliğini inşa ediyorsun.', color: 'emerald' },
  { id: 'c19', category: 'Stoa', title: 'Dış Dünyanın Gürültüsünü Kapat', quote: 'Seneka: Dünyayı değiştiremezsin ama zihninin kalesini aşılmaz bir sur haline getirebilirsin.', color: 'cyan' },
  { id: 'c20', category: 'Zafer', title: '66 Günlük Yeniden Doğuş', quote: 'Bu sadece bir alışkanlık takibi değil, zihninin biyolojisini yeniden programlama operasyonudur.', color: 'amber' }
];

export const NEURO_TIPS = [
  "Lally (UCL 2010): İlk gün sürtünme katsayısı en yüksektir. Eyleme geçmek bitirmekten zordur.",
  "Huberman: Uyanışın ilk 60 dakikasında güneş ışığı almak gece melatonini garantiye alır.",
  "Srámek (2000): 60 sn soğuk duş, dopamini %250 artırır ve 3 saat sabit taban çizgisi sunar.",
  "Nedergaard (Science): Derin uykuda beyin interstisyel alanı %60 genişler ve toksinleri süpürür.",
  "Balban & Huberman (2023): Çift içe çekiş ve uzun üfleme (Fizyolojik Sigh) stresi anında sıfırlar.",
  "Schoenfeld: Kas hipertrofisi için setleri tükenişe 1-3 tekrar kala (RPE 8) bitir.",
  "Clear: Alışkanlık ipucunu ortamda aşırı görünür kıl (örn: su şişesi masanın ortasında).",
  "Lembke: Telefonu yatak odasından çıkarmak dopamin reseptörlerinin gece dinlenmesini sağlar.",
  "Newport: Görevler arası geçiş bilişsel kapasiteyi %20 tüketir. Tek bir göreve kilitlen.",
  "Walker: REM uykusu duygusal travmaları törpüler ve yaratıcı nöral bağları kurar.",
  "McGonigal: İrade tükenebilir bir kaynak değil, egzersizle güçlenen bir beyin kasıdır.",
  "Kox (PNAS 2014): Kontrollü hiperventilasyon inflamatuar sitokinleri baskılar.",
  "Duhigg: Rutini değiştirebilirsin ama ipucu ve ödülü sabit tutmalısın.",
  "Goggins: %40 bariyerini aş; zihnin bittiğini söylediğinde aslında yolun başındasın.",
  "Marcus Aurelius: Sabah kalkmakta zorlandığında: Bir insanın yapması gereken işi yapmak için uyanıyorum de.",
  "Lally (UCL): 16. gün: Alışkanlığın ilk nöral patikaları oluşmaya başladı; direnç kırılıyor.",
  "Huberman: Kafeini uyandıktan 90-120 dakika sonra tüketmek öğleden sonra çöküşünü önler.",
  "Attia: VO2 Max seviyen, 10 yıl sonraki hayatta kalma oranının en güçlü tahmincisidir.",
  "Baumeister: Karar yorgunluğunu önlemek için sabah rutinini önceden otomatize et.",
  "Lally (UCL): Bir gün kaçırmak eğriyi bozmaz; ertesi gün kesinlikle geri dön.",
  "Faz 1 Sona Eriyor (Gün 21): Yıkım evresi tamamlandı. Sinaptik filizlenme başlıyor!",
  "Faz 2 Başlıyor (Gün 22): Yeni nöronal devreler kuruluyor. Ritim kazanma zamanı.",
  "Cialdini: Kendini 'Avcı' olarak etiketlediğinde beynin bu kimliğe uygun davranır.",
  "Kahneman: Sistem 1 (otomatik) yavaş yavaş kontrolü Sistem 2'den (çaba) devralıyor.",
  "Epiktetos: Ne kadar süre bekleyeceksin kendini en iyisine layık görmek için?",
  "Lally: 26. gün: Günlük sürtünme %35 azaldı. Alışkanlık artık daha tanıdık geliyor.",
  "Huberman: 40 Hz Gamma ses dalgaları bilişsel bağlanmayı ve mikroglial aktiviteyi uyarır.",
  "Clear: Sonuçlara değil, süreç kimliğine odaklan. Sen spor yapan bir insansın.",
  "Doidge (The Brain That Changes Itself): Birlikte ateşlenen nöronlar birlikte bağlanır.",
  "Lembke: Ucuz dopamin yoksunluğu ilk 2 haftada biter, gerçek hayat renklenmeye başlar.",
  "Walker: Her gece aynı saatte yatmak sirkadiyen saat genlerini (CLOCK/BMAL1) senkronize eder.",
  "Schoenfeld: Progresif aşırı yükleme: Her hafta 1 tekrar veya 1 kg ekle.",
  "Balban: 5 dakikalık nefes seansı günlük kaygıyı %30 azaltır.",
  "Seneka: İnsan hayal gücünde gerçekte olduğundan daha fazla acı çeker.",
  "Lally: 35. gün: Yolun yarısını aştın. Otomatizm endeksi (SRHI) %50 barajını geçti.",
  "Huberman: Sıcak sauna sonrası soğuk duş büyüme hormonu ve ısı şok proteinlerini artırır.",
  "Goggins: Kimse gelip seni kurtarmayacak. Kendi kurtarıcın ol.",
  "Newport: Sabah 08:00 - 10:00 arası prefrontal korteksin en keskin olduğu saatlerdir.",
  "Attia: Kavrama kuvveti (Grip strength) biyolojik yaşlanmanın doğrudan aynasıdır.",
  "Lally: 40. gün: Davranış artık dirençle değil, ritimle yapılıyor.",
  "Marcus Aurelius: Bir günün kontrolünü kaybettiğinde hemen kendine dön, ritmi terk etme.",
  "Lembke: Dopamin dengesi kurulduğunda basit bir yürüyüş bile coşku verir.",
  "Huberman: Gözlerini ufka odaklamak (panoramik görüş) amigdala stres yanıtını kapatır.",
  "Faz 2 Sona Eriyor (Gün 44): Nöral devreler kuruldu! Şimdi Kimlik İnşası başlıyor.",
  "Faz 3 Başlıyor (Gün 45): Efsanevi kimlik evresi. Bu artık bir alışkanlık değil, karakterin.",
  "Clear: Bir eylemi 45 kez tekrar ettiğinde bilinçaltı direnci sıfırlanır.",
  "Walker: Uykudan 2 saat önce sıcak duş almak vücut çekirdek sıcaklığını düşürür ve uykuya dalar.",
  "Lally: 48. gün: Otomatizm plato seviyesine yaklaşıyor. Zihinsel çaba minimumda.",
  "Kox: Soğuğa verilen nefes tepkisini kontrol eden kişi, hayatın stresini de kontrol eder.",
  "Schoenfeld: Kas hafızası (myonuclei) bir kez kazanıldığında ömür boyu silinmez.",
  "Duhigg: Başarı bir dizi keystone (kilit taşı) alışkanlığın yan ürünüdür.",
  "Goggins: Aynadaki adamla her gece dürüstçe hesaplaş.",
  "Huberman: Akşam 20:00'den sonra loş kırmızı ışık melatonin baskılanmasını önler.",
  "Seneka: Yaşam bir savaştır; hazırlıksız yakalananlar ezilir.",
  "Lally: 55. gün: Otomatizm seviyesi %85. Eski alışkanlık patikaları budanıyor (synaptic pruning).",
  "Attia: Düşük tempo aerobik egzersiz (Zone 2) mitokondriyal yoğunluğu ikiye katlar.",
  "Newport: Dijital minimalizm zihninin en derin potansiyelini açığa çıkarır.",
  "Marcus Aurelius: Geleceği düşünerek bugünün gücünü tüketme.",
  "Lembke: Zorluktan kaçmayan beyin, zevkten sarhoş olmayan beyindir.",
  "Lally: 60. gün: Kritik 66 günün eşiğindesin. Nöral otoban tamamlanmak üzere.",
  "Huberman: Vagus sinirini güçlendiren kişi duygusal fırtınalarda sarsılmaz kalır.",
  "Clear: Küçük alışkanlıklar birikerek bileşik faiz gibi devasa sonuçlar doğurur.",
  "Goggins: Zihnin sınırları senin koyduğun sınırlardır.",
  "Walker: Düzenli uyku DNA onarım mekanizmalarını maksimize eder.",
  "Lally: 65. gün: Yarın 66 günlük nöral mühür tamamlanıyor. Gurur duy!",
  "GÜN 66 — NÖROPLASTİSİTE ZAFERİ: Otomatizm tamamlandı! Solo Hunter kimliğin mühürlendi!"
];

export const MED_TECHNIQUES = {
  box: {
    name: 'Kutu Nefesi (Box Breathing) 4-4-4-4',
    sub: 'Zihinsel Odak & Berraklık (Navy SEALs)',
    phases: [
      { label: 'NEFES AL', sec: 4, action: 'expand', instr: 'Burnundan derin nefes al' },
      { label: 'TUT', sec: 4, action: 'hold', instr: 'Nefesini ciğerlerinde tut' },
      { label: 'NEFES VER', sec: 4, action: 'contract', instr: 'Ağzından yavaşça üfle' },
      { label: 'TUT', sec: 4, action: 'hold', instr: 'Boş ciğerle sakin kal' }
    ]
  },
  relax: {
    name: '4-7-8 Tekniği (Dr. Andrew Weil)',
    sub: 'Sirkadiyen Gevşeme & Hızlı Uyku',
    phases: [
      { label: 'NEFES AL', sec: 4, action: 'expand', instr: 'Burnundan sessizce nefes al' },
      { label: 'TUT', sec: 7, action: 'hold', instr: 'Nefesi ciğerlerinde tut' },
      { label: 'NEFES VER', sec: 8, action: 'contract', instr: 'Ağzından seslice nefes ver' }
    ]
  },
  sigh: {
    name: 'Fizyolojik İçe Çekiş (Stanford 2023)',
    sub: 'Anlık Stres Nötralizasyonu & Vagus Frenlemesi (Balban & Huberman)',
    phases: [
      { label: 'BURUNDAN AL', sec: 3, action: 'expand', instr: 'Burnundan derin bir nefes al' },
      { label: 'TEPE ÇEKİŞ', sec: 1, action: 'expand', instr: 'Hızlıca bir nefes daha ekle (Alveolleri aç)' },
      { label: 'UZUN NEFES VER', sec: 6, action: 'contract', instr: 'Ağzından yavaşça ve tamamen boşalt' },
      { label: 'SAKİNLİK', sec: 1, action: 'hold', instr: 'Nötr sakinlikte bekle' }
    ]
  },
  energy: {
    name: 'Wim Hof Tarzı (PNAS 2014)',
    sub: 'Hücresel Oksijenasyon & Adrenalin Deşarjı',
    phases: [
      { label: 'GÜÇLÜ AL', sec: 2, action: 'expand', instr: 'Göğüs ve karnını tamamen doldur' },
      { label: 'SERBEST BIRAK', sec: 1, action: 'contract', instr: 'Zorlamadan nefesi bırak' },
      { label: 'TUT (SONUNDA)', sec: 15, action: 'hold', instr: 'Nefesi tamamen verip tut' }
    ]
  }
};

export const ONBOARDING_QUESTIONS = [
  {
    id: 'q_sleep',
    title: 'Geceleri ortalama kaç saat uyuyorsun?',
    subtitle: 'Nedergaard (Science): 6 saatin altı gliyomfatik temizliği durdurur.',
    options: [
      { label: '5 saatten az (Aşırı Yorgun)', score: 10, pillar: 'VIT' },
      { label: '5 - 6 saat (Düzensiz)', score: 25, pillar: 'VIT' },
      { label: '7 - 8 saat (Dengeli & Dinç)', score: 50, pillar: 'VIT' },
      { label: '8 saatten fazla (Yüksek)', score: 45, pillar: 'VIT' }
    ]
  },
  {
    id: 'q_screen',
    title: 'Günde kaç saat sosyal medya / ekran başındasın?',
    subtitle: 'Lembke (Stanford): Fazla ekran dopamin baz çizgisini çökertir.',
    options: [
      { label: '4 saatten fazla (Dopamin Bağımlılığı)', score: 10, pillar: 'FOC' },
      { label: '2 - 4 saat (Orta Derece Dağınık)', score: 25, pillar: 'FOC' },
      { label: '1 - 2 saat (Kontrollü)', score: 45, pillar: 'FOC' },
      { label: '1 saatten az (Pürdikkat Usta)', score: 50, pillar: 'FOC' }
    ]
  },
  {
    id: 'q_exercise',
    title: 'Haftada kaç gün bilinçli fiziksel egzersiz yapıyorsun?',
    subtitle: 'Schoenfeld: Kas kuvveti hücresel yaşlanmayı geciktiren en güçlü araçtır.',
    options: [
      { label: 'Hemen hemen hiç (Hareketsiz)', score: 10, pillar: 'STR' },
      { label: 'Haftada 1-2 gün (Düzensiz)', score: 25, pillar: 'STR' },
      { label: 'Haftada 3-4 gün (Aktif Sporcu)', score: 45, pillar: 'STR' },
      { label: 'Haftada 5+ gün (Elit Disiplin)', score: 50, pillar: 'STR' }
    ]
  },
  {
    id: 'q_willpower',
    title: 'Zor bir işle karşılaştığında erteleme eğilimin nedir?',
    subtitle: 'McGonigal: İrade kas gibi eğitilebilir (aMCC hipertrofisi).',
    options: [
      { label: 'Sürekli ertelerim, son ana bırakırım', score: 10, pillar: 'WIL' },
      { label: 'Bazen ertelerim, zorlanırım', score: 25, pillar: 'WIL' },
      { label: 'Genelde planlı hareket ederim', score: 45, pillar: 'WIL' },
      { label: 'Ertelemeyi reddederim, derhal başlarım', score: 50, pillar: 'WIL' }
    ]
  },
  {
    id: 'q_goal',
    title: 'Bu 66 günde en çok hangi kimliği inşa etmek istiyorsun?',
    subtitle: 'James Clear: Sonuçlara değil, yeni kimliğine odaklan.',
    options: [
      { label: 'Demir İradeli Solo Hunter (Disiplin & Güç)', score: 50, pillar: 'DIS' },
      { label: 'Keskin Odaklı Zihin Ustası (Biliş & Çalışma)', score: 50, pillar: 'MND' },
      { label: 'Yüksek Enerjili Biyo-Optimize Beden (Canlılık)', score: 50, pillar: 'VIT' },
      { label: 'Korkusuz & Tavizsiz Karakter (Dönüşüm)', score: 50, pillar: 'WIL' }
    ]
  }
];
