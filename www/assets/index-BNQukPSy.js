(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={STR:{code:`STR`,name:`Güç`,title:`Güç & Kuvvet`,color:`amber`,icon:`💪`,stat:`Fiziksel Hasar`,desc:`Antrenman, hipertrofi ve kas dayanıklılığı`},VIT:{code:`VIT`,name:`Canlılık`,title:`Canlılık & Hidrasyon`,color:`emerald`,icon:`💧`,stat:`Maks HP & Yenilenme`,desc:`Hücresel hidrasyon, biyometrik uyku kalitesi`},MND:{code:`MND`,name:`Zihin`,title:`Zihin & Bilgelik`,color:`purple`,icon:`🧘`,stat:`Odak & Zihinsel Hasar`,desc:`Kitap okuma, farkındalık ve meditasyon`},WIL:{code:`WIL`,name:`İrade`,title:`İrade & Direnç`,color:`cyan`,icon:`🧊`,stat:`Kritik Vuruş`,desc:`Soğuk duş, anlık dürtü kontrolü (aMCC)`},FOC:{code:`FOC`,name:`Odak`,title:`Odak & Pürdikkat`,color:`indigo`,icon:`📵`,stat:`Boss Yetenek Kilidi`,desc:`Sosyal medya kısıtlama, derin Pomodoro`},DIS:{code:`DIS`,name:`Disiplin`,title:`Disiplin & Rutin`,color:`rose`,icon:`🌙`,stat:`Seri (Streak) Zırhı`,desc:`Erken uyanış, yatağı toplama ve standartlar`}},t=[{id:`h1`,pillar:`DIS`,title:`Erken Uyanış & Yatağı Topla`,desc:`Sabah 07:00 öncesi uyanış ve ilk disiplin mühürü`,target:`07:00`,xp:25,unit:`saat`},{id:`h2`,pillar:`VIT`,title:`Hücresel Hidrasyon (3.5L Su)`,desc:`Güne 500ml ile başla, gün boyu mitokondrileri sula`,target:`3500`,xp:25,unit:`ml`},{id:`h3`,pillar:`STR`,title:`Kademeli Direnç Antrenmanı`,desc:`En az 45 dk ağırlık, calisthenics veya kardiyo`,target:`45`,xp:35,unit:`dk`},{id:`h4`,pillar:`MND`,title:`15 Sayfa Kitap & Meditasyon`,desc:`Yüksek kalibreli okuma + 5 dk bilinçli nefes`,target:`15`,xp:30,unit:`sayfa`},{id:`h5`,pillar:`WIL`,title:`Bilinçli Soğuk Duş (Dopamin)`,desc:`Minimum 60 sn buz gibi su (Srámek 2000 Dopamin +%250)`,target:`60`,xp:30,unit:`sn`},{id:`h6`,pillar:`FOC`,title:`Dijital Detoks & Ekran Limiti`,desc:`Gereksiz kaydırma yok, maksimum 60 dk sosyal medya`,target:`60`,xp:25,unit:`dk`}],n=[{week:1,name:`Atalet Gölgesi`,archetype:`Statik Sürtünme & Harekete Geçememe`,desc:`Lally (UCL 2010): Başlangıç direnci en yüksek seviyededir. 2 dakika kuralıyla ilk kıvılcımı çak.`,weakness:`Küçük Adımlar & İlk Kıvılcım`,hp:300},{week:2,name:`Erteleme İblisi`,archetype:`Zamansal İskonto & Sahte Yarın Algısı`,desc:`Prefrontal korteks ile amigdala çatışması. Uzak ödülleri anlık mikro-XP ile yakınlaştır.`,weakness:`Geri Sayım & Aciliyet Hissi`,hp:450},{week:3,name:`Ucuz Dopamin Ejderi`,archetype:`Tonik Dopamin Tüketimi & Algoritma Tuzağı`,desc:`Dr. Lembke (Stanford): Fazla uyarım dopamin tabanını çökertir. Ekran detoksuyla reseptörleri yenile.`,weakness:`Dopamin Orucu & Gri Ekran`,hp:600},{week:4,name:`Konfor Alanı Gardiyanı`,archetype:`Amigdala Kaçınma Tepkisi`,desc:`Soğuk su ve zorluk anterior singulat korteksi (irade merkezi) büyüterek gardiyanı ezer.`,weakness:`Soğuk Su Şoku & Bilinçli Zorluk`,hp:800},{week:5,name:`Dağınık Zihin Hayaleti`,archetype:`Dikkat Kalıntısı & Çoklu Görev`,desc:`Cal Newport: Görev geçişleri bilişsel artık bırakır. 25 dk tekil Pomodoro ile hayaleti dağıt.`,weakness:`Pürdikkat Odak Blokları`,hp:1050},{week:6,name:`Şüphe Lordu`,archetype:`Sahtekarlık Sendromu & Negatif İç Ses`,desc:`CBT: Şüphe gerçek değil, savunma refleksidir. Yazılı kanıt günlüğüyle gerçeği gör.`,weakness:`Gelişim Günlüğü & Somut Kanıt`,hp:1350},{week:7,name:`Bahane Golemi`,archetype:`Bilişsel Çelişki & Mantığa Bürüme`,desc:`Beyin rahatsızlığı gidermek için bahaneler üretir. Standartların tavizsiz olsun.`,weakness:`Tavizsiz Disiplin & Standartlar`,hp:1700},{week:8,name:`Uykusuzluk Canavarı`,archetype:`Sirkadiyen Ritmin Bozulması`,desc:`Dr. Walker & Nedergaard: Mavi ışık melatonini 2 saat geciktirir. Gliyomfatik temizliği başlat.`,weakness:`Karanlık Oda & Sabit Uyanış`,hp:2100},{week:9,name:`Kaos Şövalyesi`,archetype:`Stres Altında Eski Rutine Dönme`,desc:`Kriz anlarında hedeflerine değil, alışkanlıklarının seviyesine düşersin. Temel çapayı koru.`,weakness:`Temel Alışkanlık Çapaları`,hp:2600},{week:10,name:`Eski Kimlik Kralı`,archetype:`Ego Savunması & Geri Çekilme`,desc:`Otomatizmin son aşaması. Eski tembel kimliğin öldüğü, yeni Solo Hunter kimliğinin doğuşu.`,weakness:`66 Günlük Nöral Mühür & Yeniden Doğuş`,hp:3200}],r=[{id:`b1`,title:`Atomik Alışkanlıklar`,author:`James Clear`,pillar:`Disiplin`,badge:`Nöroplastisite`,summary:`Her gün %1 daha iyi olmak yıl sonunda seni 37 kat ileri taşır. Alışkanlığı görünür, çekici, kolay ve tatmin edici kıl; 2 dakika kuralıyla ilk kıvılcımı çak.`},{id:`b2`,title:`Dopamin Ulusu`,author:`Dr. Anna Lembke (Stanford)`,pillar:`Odak`,badge:`Nörokimya`,summary:`Zevk ve acı dengesi aynı tahterevallide çalışır. Sürekli dijital uyarım dopamin tabanını çökertir. 30 günlük dopamin orucu reseptör duyarlılığını onarır.`},{id:`b3`,title:`Neden Uyuruz?`,author:`Dr. Matthew Walker (UC Berkeley)`,pillar:`Canlılık`,badge:`Sirkadiyen Biyoloji`,summary:`6 saatin altındaki uyku bilişsel kapasiteyi %40 oranında köreltir. Derin uykuda gliyomfatik sistem toksinleri temizler, REM uykusu ise nöral bağlantıları pekiştirir.`},{id:`b4`,title:`Pürdikkat (Deep Work)`,author:`Cal Newport (Georgetown)`,pillar:`Odak`,badge:`Bilişsel Kapasite`,summary:`Bölünmüş dikkat zihinsel artık (attention residue) bırakır. Günde 90 dakikalık kesintisiz derin odak bloğu, 8 saatlik dağınık çalışmadan daha çok değer üretir.`},{id:`b5`,title:`Alışkanlıkların Gücü`,author:`Charles Duhigg (Harvard)`,pillar:`Disiplin`,badge:`Bazal Gangliyon`,summary:`Nöral Alışkanlık Döngüsü: İpucu (Cue) -> Rutin (Routine) -> Ödül (Reward). Eski alışkanlığı silemezsin; sadece aynı ipucuna yeni bir rutin bağlayabilirsin.`},{id:`b6`,title:`Beni İncitemezsin (Can't Hurt Me)`,author:`David Goggins (Navy SEAL)`,pillar:`İrade`,badge:`Zihinsel Zırh`,summary:`%40 Kuralı: Zihnin pes etmeni haykırdığında aslında fizyolojik kapasitenin sadece %40'ındasındır. Rahatsızlıkla barış ve beynini zorlukla nasırlaştır.`},{id:`b7`,title:`Kendime Düşünceler (Meditations)`,author:`Marcus Aurelius (Roma İmparatoru)`,pillar:`Zihin`,badge:`Stoacılık`,summary:`Kontrol edemediğin dış olayları değil, kendi tepkilerini yönet. Engel, yolun ta kendisidir. Şikayet etmeyi bırak ve eyleme geç.`},{id:`b8`,title:`İrade İçgüdüsü`,author:`Dr. Kelly McGonigal (Stanford)`,pillar:`İrade`,badge:`aMCC Gelişimi`,summary:`İrade sonlu bir kaynak değil, geliştirilebilir bir kastır. Soğuk duş ve kontrollü nefes anterior singulat korteksi (aMCC) büyüterek dürtü denetimini artırır.`},{id:`b9`,title:`Huberman Lab Nörobiyoloji Protokolleri`,author:`Dr. Andrew Huberman (Stanford)`,pillar:`Zihin & Canlılık`,badge:`Otonom Sistem`,summary:`Sabah güneşiyle sirkadiyen ritmi kilitle. Stres anında iki kısa nefes + bir uzun nefes (Fizyolojik İçe Çekiş) ile kalp ritmini saniyeler içinde düşür.`},{id:`b10`,title:`Outlive: Yaşamın Ötesi`,author:`Dr. Peter Attia (Johns Hopkins)`,pillar:`Güç & Ömür`,badge:`Hücresel Yaşlanma`,summary:`Sağlıklı ömür (Healthspan) için en kritik iki belirteç: VO2 Max ve kas kuvvetidir. Kademeli direnç antrenmanı hücresel yaşlanmayı geciktiren en güçlü biyolojik araçtır.`}],i=[{id:`c1`,category:`Disiplin`,title:`Kusursuz Gün Diye Bir Şey Yoktur`,quote:`Motivasyon seni başlatır, disiplin ise 66. güne ulaştırır. Bugün küçük de olsa adımını at.`,color:`cyan`},{id:`c2`,category:`İrade`,title:`Soğuk Suyla Yüzleş (Dopamin +%250)`,quote:`Srámek (2000): Soğuk duş dopamin tabanını saatlerce yükseltir. Sabah zor olanı seç, günün efendisi ol.`,color:`purple`},{id:`c3`,category:`Odak`,title:`Ucuz Dopamini Reddet`,quote:`Lembke: Ekranı her kapattığında beyninin kontrolünü algoritmalardan geri alır, prefrontal korteksini güçlendirirsin.`,color:`emerald`},{id:`c4`,category:`Güç`,title:`Yorgunluk Zihinsel Bir İllüzyondur`,quote:`Goggins: Vücudun pes etmek istediğinde zihnin devreye girer. Bir tekrar daha seni yeni seviyeye taşır.`,color:`amber`},{id:`c5`,category:`Bilgelik`,title:`Sessizlikte Büyü (Günde 15 Sayfa)`,quote:`Yılda 20 kitap eder. Zihnini her gün yüksek kalibreli fikirlerle beslemeden karakterini yükseltemezsin.`,color:`cyan`},{id:`c6`,category:`Özgüven`,title:`Kendine Verdiğin Sözü Tut`,quote:`Özgüven aynada değil, kimse bakmıyorken tamamladığın günlük görevlerde inşa edilir.`,color:`purple`},{id:`c7`,category:`Stoacılık`,title:`Engel Yolun Kendisidir`,quote:`Marcus Aurelius: Eylemin önündeki engel eylemi ilerletir. Yolun üstündeki engel, yolun ta kendisi olur.`,color:`emerald`},{id:`c8`,category:`Nöroplastisite`,title:`Lally 66 Gün Kuralı`,quote:`UCL (2010): Bugün hissettiğin zihinsel sürtünme yeni sinapsların örülme sesidir. Asla durma.`,color:`cyan`},{id:`c9`,category:`Uyku`,title:`BOS Gliyomfatik Sifonu`,quote:`Nedergaard (Science): Derin uyku beynini yıkar. 23:00'te yatağa girmek yarınki odak kapasiteni garantiye alır.`,color:`purple`},{id:`c10`,category:`Odak`,title:`Tekil Görev Hükümdarlığı`,quote:`Cal Newport: Aynı anda iki iş yapan adam hiçbir işi yapamaz. Tek bir hedefe kilitlen ve parçala.`,color:`emerald`},{id:`c11`,category:`İrade`,title:`Tükeniş Bir Sinyaldir, Bitiş Değil`,quote:`Zihinsel bariyer kırıldığında irade kası hipertrofiye uğrar. aMCC bölgesini her gün besle.`,color:`amber`},{id:`c12`,category:`Canlılık`,title:`Hücresel Hidrasyon`,quote:`Vücudundaki %2'lik sıvı kaybı bilişsel hızı %15 yavaşlatır. Su iç, hücrelerini canlandır.`,color:`cyan`},{id:`c13`,category:`Kriz`,title:`Kaos Bir Fırsattır`,quote:`Herkes dağılırken rutinine sadık kalan kişi, zindanı ilk fetheden avcı olur.`,color:`amber`},{id:`c14`,category:`Zihin`,title:`Nefesini Yönet, Beynini Yönet`,quote:`Balban & Huberman (2023): Uzatılmış nefes verme kalbine yavaşlama emri verir. Sakinleş ve hakim ol.`,color:`purple`},{id:`c15`,category:`Disiplin`,title:`Standartlar Duyguların Üstündedir`,quote:`Nasıl hissettiğin önemli değil, protokolün neyi emrettiği önemlidir. Duygularını değil, görevini dinle.`,color:`cyan`},{id:`c16`,category:`Güç`,title:`Mekanik Gerilim Yasası`,quote:`Schoenfeld: Kas da karakter de yalnızca progresif yükleme (progressive overload) altında gelişir.`,color:`amber`},{id:`c17`,category:`Özgüven`,title:`Yarın Diye Bir Şey Yok`,quote:`Erteleme İblisi'nin tek silahı "yarın" yalanıdır. Tek gerçek an şimdidir; ilk seti hemen yap.`,color:`purple`},{id:`c18`,category:`Kimlik`,title:`Gölge Avcısı'nın Uyanışı`,quote:`Eski tembel kimliğin öldü. 66 günlük nöral mühürle yeni benliğini inşa ediyorsun.`,color:`emerald`},{id:`c19`,category:`Stoa`,title:`Dış Dünyanın Gürültüsünü Kapat`,quote:`Seneka: Dünyayı değiştiremezsin ama zihninin kalesini aşılmaz bir sur haline getirebilirsin.`,color:`cyan`},{id:`c20`,category:`Zafer`,title:`66 Günlük Yeniden Doğuş`,quote:`Bu sadece bir alışkanlık takibi değil, zihninin biyolojisini yeniden programlama operasyonudur.`,color:`amber`}],a=[`Lally (UCL 2010): İlk gün sürtünme katsayısı en yüksektir. Eyleme geçmek bitirmekten zordur.`,`Huberman: Uyanışın ilk 60 dakikasında güneş ışığı almak gece melatonini garantiye alır.`,`Srámek (2000): 60 sn soğuk duş, dopamini %250 artırır ve 3 saat sabit taban çizgisi sunar.`,`Nedergaard (Science): Derin uykuda beyin interstisyel alanı %60 genişler ve toksinleri süpürür.`,`Balban & Huberman (2023): Çift içe çekiş ve uzun üfleme (Fizyolojik Sigh) stresi anında sıfırlar.`,`Schoenfeld: Kas hipertrofisi için setleri tükenişe 1-3 tekrar kala (RPE 8) bitir.`,`Clear: Alışkanlık ipucunu ortamda aşırı görünür kıl (örn: su şişesi masanın ortasında).`,`Lembke: Telefonu yatak odasından çıkarmak dopamin reseptörlerinin gece dinlenmesini sağlar.`,`Newport: Görevler arası geçiş bilişsel kapasiteyi %20 tüketir. Tek bir göreve kilitlen.`,`Walker: REM uykusu duygusal travmaları törpüler ve yaratıcı nöral bağları kurar.`,`McGonigal: İrade tükenebilir bir kaynak değil, egzersizle güçlenen bir beyin kasıdır.`,`Kox (PNAS 2014): Kontrollü hiperventilasyon inflamatuar sitokinleri baskılar.`,`Duhigg: Rutini değiştirebilirsin ama ipucu ve ödülü sabit tutmalısın.`,`Goggins: %40 bariyerini aş; zihnin bittiğini söylediğinde aslında yolun başındasın.`,`Marcus Aurelius: Sabah kalkmakta zorlandığında: Bir insanın yapması gereken işi yapmak için uyanıyorum de.`,`Lally (UCL): 16. gün: Alışkanlığın ilk nöral patikaları oluşmaya başladı; direnç kırılıyor.`,`Huberman: Kafeini uyandıktan 90-120 dakika sonra tüketmek öğleden sonra çöküşünü önler.`,`Attia: VO2 Max seviyen, 10 yıl sonraki hayatta kalma oranının en güçlü tahmincisidir.`,`Baumeister: Karar yorgunluğunu önlemek için sabah rutinini önceden otomatize et.`,`Lally (UCL): Bir gün kaçırmak eğriyi bozmaz; ertesi gün kesinlikle geri dön.`,`Faz 1 Sona Eriyor (Gün 21): Yıkım evresi tamamlandı. Sinaptik filizlenme başlıyor!`,`Faz 2 Başlıyor (Gün 22): Yeni nöronal devreler kuruluyor. Ritim kazanma zamanı.`,`Cialdini: Kendini 'Avcı' olarak etiketlediğinde beynin bu kimliğe uygun davranır.`,`Kahneman: Sistem 1 (otomatik) yavaş yavaş kontrolü Sistem 2'den (çaba) devralıyor.`,`Epiktetos: Ne kadar süre bekleyeceksin kendini en iyisine layık görmek için?`,`Lally: 26. gün: Günlük sürtünme %35 azaldı. Alışkanlık artık daha tanıdık geliyor.`,`Huberman: 40 Hz Gamma ses dalgaları bilişsel bağlanmayı ve mikroglial aktiviteyi uyarır.`,`Clear: Sonuçlara değil, süreç kimliğine odaklan. Sen spor yapan bir insansın.`,`Doidge (The Brain That Changes Itself): Birlikte ateşlenen nöronlar birlikte bağlanır.`,`Lembke: Ucuz dopamin yoksunluğu ilk 2 haftada biter, gerçek hayat renklenmeye başlar.`,`Walker: Her gece aynı saatte yatmak sirkadiyen saat genlerini (CLOCK/BMAL1) senkronize eder.`,`Schoenfeld: Progresif aşırı yükleme: Her hafta 1 tekrar veya 1 kg ekle.`,`Balban: 5 dakikalık nefes seansı günlük kaygıyı %30 azaltır.`,`Seneka: İnsan hayal gücünde gerçekte olduğundan daha fazla acı çeker.`,`Lally: 35. gün: Yolun yarısını aştın. Otomatizm endeksi (SRHI) %50 barajını geçti.`,`Huberman: Sıcak sauna sonrası soğuk duş büyüme hormonu ve ısı şok proteinlerini artırır.`,`Goggins: Kimse gelip seni kurtarmayacak. Kendi kurtarıcın ol.`,`Newport: Sabah 08:00 - 10:00 arası prefrontal korteksin en keskin olduğu saatlerdir.`,`Attia: Kavrama kuvveti (Grip strength) biyolojik yaşlanmanın doğrudan aynasıdır.`,`Lally: 40. gün: Davranış artık dirençle değil, ritimle yapılıyor.`,`Marcus Aurelius: Bir günün kontrolünü kaybettiğinde hemen kendine dön, ritmi terk etme.`,`Lembke: Dopamin dengesi kurulduğunda basit bir yürüyüş bile coşku verir.`,`Huberman: Gözlerini ufka odaklamak (panoramik görüş) amigdala stres yanıtını kapatır.`,`Faz 2 Sona Eriyor (Gün 44): Nöral devreler kuruldu! Şimdi Kimlik İnşası başlıyor.`,`Faz 3 Başlıyor (Gün 45): Efsanevi kimlik evresi. Bu artık bir alışkanlık değil, karakterin.`,`Clear: Bir eylemi 45 kez tekrar ettiğinde bilinçaltı direnci sıfırlanır.`,`Walker: Uykudan 2 saat önce sıcak duş almak vücut çekirdek sıcaklığını düşürür ve uykuya dalar.`,`Lally: 48. gün: Otomatizm plato seviyesine yaklaşıyor. Zihinsel çaba minimumda.`,`Kox: Soğuğa verilen nefes tepkisini kontrol eden kişi, hayatın stresini de kontrol eder.`,`Schoenfeld: Kas hafızası (myonuclei) bir kez kazanıldığında ömür boyu silinmez.`,`Duhigg: Başarı bir dizi keystone (kilit taşı) alışkanlığın yan ürünüdür.`,`Goggins: Aynadaki adamla her gece dürüstçe hesaplaş.`,`Huberman: Akşam 20:00'den sonra loş kırmızı ışık melatonin baskılanmasını önler.`,`Seneka: Yaşam bir savaştır; hazırlıksız yakalananlar ezilir.`,`Lally: 55. gün: Otomatizm seviyesi %85. Eski alışkanlık patikaları budanıyor (synaptic pruning).`,`Attia: Düşük tempo aerobik egzersiz (Zone 2) mitokondriyal yoğunluğu ikiye katlar.`,`Newport: Dijital minimalizm zihninin en derin potansiyelini açığa çıkarır.`,`Marcus Aurelius: Geleceği düşünerek bugünün gücünü tüketme.`,`Lembke: Zorluktan kaçmayan beyin, zevkten sarhoş olmayan beyindir.`,`Lally: 60. gün: Kritik 66 günün eşiğindesin. Nöral otoban tamamlanmak üzere.`,`Huberman: Vagus sinirini güçlendiren kişi duygusal fırtınalarda sarsılmaz kalır.`,`Clear: Küçük alışkanlıklar birikerek bileşik faiz gibi devasa sonuçlar doğurur.`,`Goggins: Zihnin sınırları senin koyduğun sınırlardır.`,`Walker: Düzenli uyku DNA onarım mekanizmalarını maksimize eder.`,`Lally: 65. gün: Yarın 66 günlük nöral mühür tamamlanıyor. Gurur duy!`,`GÜN 66 — NÖROPLASTİSİTE ZAFERİ: Otomatizm tamamlandı! Solo Hunter kimliğin mühürlendi!`],o={box:{name:`Kutu Nefesi (Box Breathing) 4-4-4-4`,sub:`Zihinsel Odak & Berraklık (Navy SEALs)`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan derin nefes al`},{label:`TUT`,sec:4,action:`hold`,instr:`Nefesini ciğerlerinde tut`},{label:`NEFES VER`,sec:4,action:`contract`,instr:`Ağzından yavaşça üfle`},{label:`TUT`,sec:4,action:`hold`,instr:`Boş ciğerle sakin kal`}]},relax:{name:`4-7-8 Tekniği (Dr. Andrew Weil)`,sub:`Sirkadiyen Gevşeme & Hızlı Uyku`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan sessizce nefes al`},{label:`TUT`,sec:7,action:`hold`,instr:`Nefesi ciğerlerinde tut`},{label:`NEFES VER`,sec:8,action:`contract`,instr:`Ağzından seslice nefes ver`}]},sigh:{name:`Fizyolojik İçe Çekiş (Stanford 2023)`,sub:`Anlık Stres Nötralizasyonu & Vagus Frenlemesi (Balban & Huberman)`,phases:[{label:`BURUNDAN AL`,sec:3,action:`expand`,instr:`Burnundan derin bir nefes al`},{label:`TEPE ÇEKİŞ`,sec:1,action:`expand`,instr:`Hızlıca bir nefes daha ekle (Alveolleri aç)`},{label:`UZUN NEFES VER`,sec:6,action:`contract`,instr:`Ağzından yavaşça ve tamamen boşalt`},{label:`SAKİNLİK`,sec:1,action:`hold`,instr:`Nötr sakinlikte bekle`}]},energy:{name:`Wim Hof Tarzı (PNAS 2014)`,sub:`Hücresel Oksijenasyon & Adrenalin Deşarjı`,phases:[{label:`GÜÇLÜ AL`,sec:2,action:`expand`,instr:`Göğüs ve karnını tamamen doldur`},{label:`SERBEST BIRAK`,sec:1,action:`contract`,instr:`Zorlamadan nefesi bırak`},{label:`TUT (SONUNDA)`,sec:15,action:`hold`,instr:`Nefesi tamamen verip tut`}]}},s=[{id:`q_sleep`,title:`Geceleri ortalama kaç saat uyuyorsun?`,subtitle:`Nedergaard (Science): 6 saatin altı gliyomfatik temizliği durdurur.`,options:[{label:`5 saatten az (Aşırı Yorgun)`,score:10,pillar:`VIT`},{label:`5 - 6 saat (Düzensiz)`,score:25,pillar:`VIT`},{label:`7 - 8 saat (Dengeli & Dinç)`,score:50,pillar:`VIT`},{label:`8 saatten fazla (Yüksek)`,score:45,pillar:`VIT`}]},{id:`q_screen`,title:`Günde kaç saat sosyal medya / ekran başındasın?`,subtitle:`Lembke (Stanford): Fazla ekran dopamin baz çizgisini çökertir.`,options:[{label:`4 saatten fazla (Dopamin Bağımlılığı)`,score:10,pillar:`FOC`},{label:`2 - 4 saat (Orta Derece Dağınık)`,score:25,pillar:`FOC`},{label:`1 - 2 saat (Kontrollü)`,score:45,pillar:`FOC`},{label:`1 saatten az (Pürdikkat Usta)`,score:50,pillar:`FOC`}]},{id:`q_exercise`,title:`Haftada kaç gün bilinçli fiziksel egzersiz yapıyorsun?`,subtitle:`Schoenfeld: Kas kuvveti hücresel yaşlanmayı geciktiren en güçlü araçtır.`,options:[{label:`Hemen hemen hiç (Hareketsiz)`,score:10,pillar:`STR`},{label:`Haftada 1-2 gün (Düzensiz)`,score:25,pillar:`STR`},{label:`Haftada 3-4 gün (Aktif Sporcu)`,score:45,pillar:`STR`},{label:`Haftada 5+ gün (Elit Disiplin)`,score:50,pillar:`STR`}]},{id:`q_willpower`,title:`Zor bir işle karşılaştığında erteleme eğilimin nedir?`,subtitle:`McGonigal: İrade kas gibi eğitilebilir (aMCC hipertrofisi).`,options:[{label:`Sürekli ertelerim, son ana bırakırım`,score:10,pillar:`WIL`},{label:`Bazen ertelerim, zorlanırım`,score:25,pillar:`WIL`},{label:`Genelde planlı hareket ederim`,score:45,pillar:`WIL`},{label:`Ertelemeyi reddederim, derhal başlarım`,score:50,pillar:`WIL`}]},{id:`q_goal`,title:`Bu 66 günde en çok hangi kimliği inşa etmek istiyorsun?`,subtitle:`James Clear: Sonuçlara değil, yeni kimliğine odaklan.`,options:[{label:`Demir İradeli Solo Hunter (Disiplin & Güç)`,score:50,pillar:`DIS`},{label:`Keskin Odaklı Zihin Ustası (Biliş & Çalışma)`,score:50,pillar:`MND`},{label:`Yüksek Enerjili Biyo-Optimize Beden (Canlılık)`,score:50,pillar:`VIT`},{label:`Korkusuz & Tavizsiz Karakter (Dönüşüm)`,score:50,pillar:`WIL`}]}],c=`RESET66_SOLO_LEVELING_STATE_V2`;function l(){return{monday:{name:`İtiş Günü (Push)`,exercises:[{id:`ex1`,name:`Şınav / Bench Press`,sets:4,reps:`12`,weight:`Vücut Ağ.`},{id:`ex2`,name:`Omuz Press / Pike Pushup`,sets:3,reps:`10`,weight:`15 kg`},{id:`ex3`,name:`Dips / Triceps Extension`,sets:3,reps:`12`,weight:`Vücut Ağ.`}]},tuesday:{name:`Çekiş Günü (Pull)`,exercises:[{id:`ex4`,name:`Barfiks / Lat Pulldown`,sets:4,reps:`8`,weight:`Vücut Ağ.`},{id:`ex5`,name:`Dumbbell / Barbell Row`,sets:4,reps:`10`,weight:`20 kg`},{id:`ex6`,name:`Biceps Curl`,sets:3,reps:`12`,weight:`12.5 kg`}]},wednesday:{name:`Bacak & Core (Legs)`,exercises:[{id:`ex7`,name:`Squat (Çömelme)`,sets:4,reps:`12`,weight:`40 kg`},{id:`ex8`,name:`Lunge (Adımlama)`,sets:3,reps:`10`,weight:`10 kg`},{id:`ex9`,name:`Plank / Karın Sıkıştırma`,sets:3,reps:`60 sn`,weight:`-`}]},thursday:{name:`Aktif Toparlanma & Mobilite`,exercises:[{id:`ex10`,name:`Hafif Koşu / Tempolu Yürüyüş`,sets:1,reps:`30 dk`,weight:`-`},{id:`ex11`,name:`Tam Vücut Esneme & Mobilite`,sets:1,reps:`20 dk`,weight:`-`}]},friday:{name:`Üst Vücut Güç (Upper Power)`,exercises:[{id:`ex12`,name:`Ağır İtiş & Çekiş Kombinasyonu`,sets:4,reps:`8`,weight:`Kişisel`},{id:`ex13`,name:`Dips & Barfiks Süperseti`,sets:3,reps:`10`,weight:`Vücut Ağ.`}]},saturday:{name:`Alt Vücut & Kondisyon (Lower & HIIT)`,exercises:[{id:`ex14`,name:`Bulgarian Split Squat`,sets:3,reps:`10`,weight:`12 kg`},{id:`ex15`,name:`İp Atlama / Sprint HIIT`,sets:5,reps:`2 dk`,weight:`-`}]},sunday:{name:`Haftalık Dinlenme & Zihin Günü`,exercises:[{id:`ex16`,name:`Doğa Yürüyüşü / Hafif Esneme`,sets:1,reps:`45 dk`,weight:`-`}]}}}var u={currentDay:1,level:1,xp:0,streak:1,hearts:3,hardMode:!1,soundEnabled:!0,hapticsEnabled:!0,onboardingDone:!1,assessmentScore:75,bossHp:n[0].hp,bossMaxHp:n[0].hp,stats:{STR:10,VIT:10,MND:10,WIL:10,FOC:10,DIS:10},todayHabits:t.map(e=>({...e,completed:!1})),history:{},workouts:l(),meditationHistory:[],sleepData:{connected:!1,deviceName:null,totalMinutes:450,deepMinutes:110,remMinutes:95,lightMinutes:245,qualityScore:84,restingHr:62,hasRestBuff:!0,lastSyncTime:null},activeTab:`quests`,activeModal:null},d={...u},f=new Set;function ee(){try{let e=localStorage.getItem(c);if(e){let t=JSON.parse(e);d={...u,...t,stats:{...u.stats,...t.stats||{}},sleepData:{...u.sleepData,...t.sleepData||{}},workouts:t.workouts||l()}}else d={...u}}catch(e){console.error(`State load error, falling back to initial:`,e),d={...u}}return d}function p(){try{localStorage.setItem(c,JSON.stringify(d))}catch(e){console.error(`State save error:`,e)}}function m(){return d}function h(e){return d={...d,...e},p(),f.forEach(e=>{try{e(d)}catch(e){console.error(`Listener error:`,e)}}),d}function te(e){return f.add(e),()=>f.delete(e)}function g(e,t=null){let n=d.xp+e,r=d.level,i={...d.stats};t&&i[t]!==void 0&&(i[t]+=Math.max(1,Math.floor(e/10)));let a=r*100,o=!1;for(;n>=a;)n-=a,r+=1,a=r*100,o=!0,Object.keys(i).forEach(e=>{i[e]+=1});return h({xp:n,level:r,stats:i}),{leveledUp:o,newLevel:r,gainedXP:e}}function ne(){return d={...u},p(),f.forEach(e=>e(d)),d}function re(){return JSON.stringify(d,null,2)}function ie(e){try{let t=JSON.parse(e);return d={...u,...t},p(),f.forEach(e=>e(d)),!0}catch(e){return console.error(`Import failed:`,e),!1}}function ae(){let e=m(),t=oe(e.level),n=e.level*100,r=Math.min(100,Math.round(e.xp/n*100)),i=a[Math.max(0,Math.min(65,e.currentDay-1))]||a[0],o=[,,,].fill(0).map((t,n)=>`<span class="transition-all ${n<e.hearts?`text-rose-500 scale-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]`:`text-slate-700 opacity-40`} text-base">❤️</span>`).join(``);return`
    <header class="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-cyan-500/30 p-4 shadow-[0_0_25px_rgba(6,182,212,0.12)] backdrop-blur-xl">
      <!-- Top Glow Accent Line -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <!-- Hunter Top Bar: Title, Day & Hearts -->
      <div class="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold">
            66
          </span>
          <div>
            <h1 class="text-sm font-black tracking-wider uppercase bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              RESET66 — SOLO HUNTER
            </h1>
            <span class="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest block">
              [ ${t} ]
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Day Badge -->
          <div class="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1">
            <span>📅</span>
            <span>GÜN ${e.currentDay}/66</span>
          </div>

          <!-- Hearts / Shield -->
          <div class="flex items-center gap-0.5 px-2 py-1 rounded-lg bg-slate-950/80 border border-slate-800">
            ${o}
          </div>
        </div>
      </div>

      <!-- Level & XP Bar -->
      <div class="mt-3 space-y-1.5">
        <div class="flex items-center justify-between text-xs font-mono">
          <div class="flex items-center gap-2">
            <span class="text-cyan-400 font-bold text-sm">LVL ${e.level}</span>
            <span class="text-slate-400 text-[11px] font-medium">• Seri: <strong class="text-amber-400 font-bold">🔥 ${e.streak} Gün</strong></span>
          </div>
          <span class="text-slate-400 text-[11px]">${e.xp} / ${n} XP (%${r})</span>
        </div>

        <!-- Progress Bar Track -->
        <div class="h-2 w-full rounded-full bg-slate-950/90 border border-slate-800 overflow-hidden relative p-[1px]">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]" style="width: ${r}%"></div>
        </div>
      </div>

      <!-- Daily Neuroscience Protocol Ticker -->
      <div class="mt-3 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center gap-2.5 shadow-inner">
        <span class="text-base shrink-0 animate-pulse">🧠</span>
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">[ GÜNÜN NÖROBİLİM PROTOKOLÜ ]</span>
            <span class="text-[9px] text-cyan-400/60 font-mono">UCL & Stanford</span>
          </div>
          <p class="text-[11px] text-cyan-200 font-medium leading-snug mt-0.5">
            ${i}
          </p>
        </div>
      </div>
    </header>
  `}function oe(e){return e<5?`E-Seviye Acemi Avcı`:e<10?`D-Seviye Gölge Takipçisi`:e<20?`C-Seviye Zindan Fatihi`:e<35?`B-Seviye Demir İrade`:e<50?`A-Seviye Seçkin Savaşçı`:e<66?`S-Seviye Gölge Lordu`:`Efsanevi Hükümdar (Monarch)`}async function _(e=`light`){if(m().hapticsEnabled){try{let t=window.Capacitor?.Plugins?.Haptics;if(t){e===`light`?await t.impact({style:`LIGHT`}):e===`medium`?await t.impact({style:`MEDIUM`}):e===`heavy`?await t.impact({style:`HEAVY`}):e===`success`?await t.notification({type:`SUCCESS`}):e===`warning`?await t.notification({type:`WARNING`}):e===`error`&&await t.notification({type:`ERROR`});return}}catch{}`vibrate`in navigator&&(e===`light`?navigator.vibrate(15):e===`medium`?navigator.vibrate(35):e===`heavy`?navigator.vibrate(70):e===`success`?navigator.vibrate([20,40,30]):e===`error`&&navigator.vibrate([50,50,50,50]))}}var v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=null,D=null,se=.35;function O(){if(!v){let e=window.AudioContext||window.webkitAudioContext;e&&(v=new e)}return v&&v.state===`suspended`&&v.resume(),v}function k(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime,t=v.createOscillator(),n=v.createGain();t.type=`sine`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(400,e+.04),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(v.destination),t.start(e),t.stop(e+.04)}catch{}}function ce(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=v.createOscillator(),i=v.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.07),i.gain.setValueAtTime(.15,e+n*.07),i.gain.exponentialRampToValueAtTime(.001,e+n*.07+.25),r.connect(i),i.connect(v.destination),r.start(e+n*.07),r.stop(e+n*.07+.25)})}catch{}}function A(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime;[440,554.37,659.25,880,1108.73].forEach((t,n)=>{let r=v.createOscillator(),i=v.createGain();r.type=`sine`,r.frequency.setValueAtTime(t,e+n*.06),i.gain.setValueAtTime(.2,e+n*.06),i.gain.exponentialRampToValueAtTime(.001,e+1.2),r.connect(i),i.connect(v.destination),r.start(e+n*.06),r.stop(e+1.2)})}catch{}}function le(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime,t=v.createOscillator(),n=v.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(35,e+.28),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),t.connect(n),n.connect(v.destination),t.start(e),t.stop(e+.28)}catch{}}function ue(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime,t=v.createOscillator(),n=v.createGain();t.type=`sine`,t.frequency.setValueAtTime(1800,e),t.frequency.linearRampToValueAtTime(2400,e+.15),t.frequency.linearRampToValueAtTime(1900,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(v.destination),t.start(e),t.stop(e+.4)}catch{}}function de(){if(m().soundEnabled)try{if(O(),!v)return;let e=v.currentTime,t=[432,864,1296,433.8],n=[.28,.1,.05,.15],r=[4.8,3.5,2.2,4.5];t.forEach((t,i)=>{let a=v.createOscillator(),o=v.createGain();a.type=`sine`,a.frequency.setValueAtTime(t,e),a.frequency.linearRampToValueAtTime(t+(i===3?-1.5:.8),e+r[i]),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n[i],e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+r[i]),a.connect(o),o.connect(v.destination),a.start(e),a.stop(e+r[i]+.1)})}catch{}}function fe(){try{b&&(b.stop(),b.disconnect(),b=null),x&&(x.stop(),x.disconnect(),x=null),S&&(S.disconnect(),S=null),C&&(C.disconnect(),C=null),y=null}catch{}}function pe(e){if(fe(),e!==`off`)try{if(O(),!v)return;y=e;let t=200,n=10;e===`theta`?(t=150,n=6):e===`delta`?(t=110,n=2):e===`gamma`&&(t=200,n=40);let r=v.currentTime;C=v.createChannelMerger(2),S=v.createGain(),S.gain.setValueAtTime(.12,r),b=v.createOscillator(),b.type=`sine`,b.frequency.setValueAtTime(t,r),x=v.createOscillator(),x.type=`sine`,x.frequency.setValueAtTime(t+n,r);let i=v.createGain(),a=v.createGain();i.gain.value=1,a.gain.value=1,b.connect(i),i.connect(C,0,0),x.connect(a),a.connect(C,0,1),C.connect(S),S.connect(v.destination),b.start(),x.start()}catch(e){console.error(`Binaural beats error:`,e)}}function me(){return y}function he(e,t=5){if(!v)return null;let n=v.sampleRate,r=n*t,i=v.createBuffer(1,r,n),a=i.getChannelData(0);if(e===`pink`){let e=0,t=0,n=0,i=0,o=0,s=0,c=0;for(let l=0;l<r;l++){let r=Math.random()*2-1;e=.99886*e+r*.0555179,t=.99332*t+r*.0750759,n=.969*n+r*.153852,i=.8665*i+r*.3104856,o=.55*o+r*.5329522,s=-.7616*s-r*.016898,a[l]=(e+t+n+i+o+s+c+r*.5362)*.11,c=r*.115926}}else if(e===`brown`){let e=0;for(let t=0;t<r;t++){let n=Math.random()*2-1;a[t]=(e+.02*n)/1.02,e=a[t],a[t]*=3.5}}return i}function ge(){try{T&&(T.stop(),T.disconnect(),T=null),D&&(D.disconnect(),D=null),E&&(E.disconnect(),E=null),w=null}catch{}}function _e(e){if(ge(),e!==`off`)try{if(O(),!v)return;w=e;let t=he(e,5);if(!t)return;T=v.createBufferSource(),T.buffer=t,T.loop=!0,E=v.createGain(),E.gain.setValueAtTime(se,v.currentTime),D=v.createBiquadFilter(),D.type=`lowpass`,D.frequency.setValueAtTime(e===`pink`?2200:850,v.currentTime),T.connect(D),D.connect(E),E.connect(v.destination),T.start()}catch(e){console.error(`Noise audio error:`,e)}}function ve(){return w}function ye(){let t=m(),n=t.todayHabits.filter(e=>e.completed).length,r=t.todayHabits.length,i=Math.round(n/r*100);return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Bento Quick Action Bar (Mini Tools Shortcuts) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        
        <!-- Tool 1: Meditation -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30 text-left transition hover:border-purple-500/70 hover:scale-[1.02] shadow-sm group" data-tool="meditation">
          <div class="flex items-center justify-between">
            <span class="text-xl">🧘</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">ZİHİN</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-purple-300">Meditasyon</span>
          <span class="text-[10px] text-slate-400">4 Ritim & Frekanslar</span>
        </button>

        <!-- Tool 2: Workout -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/30 text-left transition hover:border-amber-500/70 hover:scale-[1.02] shadow-sm group" data-tool="workout">
          <div class="flex items-center justify-between">
            <span class="text-xl">🏋️</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">GÜÇ</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-amber-300">Antrenman</span>
          <span class="text-[10px] text-slate-400">Set & Dinlenme Sayacı</span>
        </button>

        <!-- Tool 3: Focus Pomodoro -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 text-left transition hover:border-indigo-500/70 hover:scale-[1.02] shadow-sm group" data-tool="pomodoro">
          <div class="flex items-center justify-between">
            <span class="text-xl">⏱️</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">ODAK</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-indigo-300">Pürdikkat</span>
          <span class="text-[10px] text-slate-400">25 Dk Derin Blok</span>
        </button>

        <!-- Tool 4: Bio-Sync Sleep -->
        <button type="button" class="btn-open-tool p-3 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-left transition hover:border-cyan-500/70 hover:scale-[1.02] shadow-sm group" data-tool="sleep">
          <div class="flex items-center justify-between">
            <span class="text-xl">⌚</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">BİYO-SENK</span>
          </div>
          <span class="block text-xs font-bold text-white mt-1.5 group-hover:text-cyan-300">Uyku & Nabız</span>
          <span class="text-[10px] text-slate-400" id="bentoSleepStatus">${t.sleepData.hasRestBuff?`⚡ +%15 XP Buff`:`Senkronize Et`}</span>
        </button>

      </div>

      <!-- Daily Quests Section Header -->
      <div class="flex items-center justify-between pt-1">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>⚔️ GÜNLÜK GÖREVLER (DAILY QUESTS)</span>
          </h2>
          <span class="text-[11px] text-slate-400">Gece 00:00 olmadan tamamla, XP ve nitelik kazan.</span>
        </div>
        <span class="text-xs font-mono font-bold ${n===r?`text-emerald-400`:`text-slate-400`}">
          ${n}/${r} (%${i})
        </span>
      </div>

      <!-- Quests Cards List -->
      <div class="space-y-2.5">
        ${t.todayHabits.map((t,n)=>{let r=e[t.pillar]||{name:t.pillar,color:`cyan`,icon:`⚡`},i=t.completed;return`
            <div class="p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${i?`bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]`:`bg-slate-900/80 border-slate-800 hover:border-slate-700`}">
              
              <!-- Left Info -->
              <div class="flex items-center gap-3 min-w-0">
                <span class="text-2xl shrink-0">${r.icon}</span>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold ${i?`line-through text-slate-400`:`text-white`} truncate">
                      ${t.title}
                    </span>
                    <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-bold shrink-0">
                      ${r.name}
                    </span>
                  </div>
                  <p class="text-[11px] text-slate-400 leading-tight truncate mt-0.5">
                    ${t.desc}
                  </p>
                </div>
              </div>

              <!-- Right Checkbox Toggle -->
              <button type="button" class="btn-toggle-habit shrink-0 px-3 py-2 rounded-xl border text-xs font-mono font-bold transition flex items-center gap-1.5 ${i?`bg-emerald-500 text-black border-emerald-400 shadow-md shadow-emerald-500/20`:`bg-slate-950 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/20`}" data-idx="${n}">
                <span>${i?`TAMAMLANDI ✓`:`+${t.xp} XP`}</span>
              </button>

            </div>
          `}).join(``)}
      </div>

      <!-- Hard Mode & Finish Day Row -->
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <button type="button" id="btnToggleHardMode" class="px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition ${t.hardMode?`bg-rose-500/20 text-rose-300 border-rose-500/60 shadow-[0_0_10px_rgba(244,63,94,0.3)]`:`bg-slate-950 text-slate-400 border-slate-800`}">
            ☠️ Zor Mod: ${t.hardMode?`AÇIK (Tavizsiz)`:`KAPALI`}
          </button>
          <span class="text-[11px] text-slate-400">
            ${t.hardMode?`%70 altı tamamlamada -40 XP & Seri Sıfırlanır.`:`Standart alışkanlık takibi modu.`}
          </span>
        </div>

        <button type="button" id="btnCompleteDay" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          GÜNÜ MÜHÜRLE & BOSS'A SALDIR ⚔️
        </button>
      </div>

    </div>
  `}function be(e){document.querySelectorAll(`.btn-open-tool`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-tool`);k(),_(`light`),h({activeModal:n}),e&&e()})}),document.querySelectorAll(`.btn-toggle-habit`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=m(),i=r.todayHabits[n],a=!i.completed,o=[...r.todayHabits];o[n]={...i,completed:a},a?(ce(),_(`medium`),g(i.xp,i.pillar)):(k(),_(`light`)),h({todayHabits:o}),e&&e()})});let t=document.getElementById(`btnToggleHardMode`);t&&t.addEventListener(`click`,()=>{let t=m();k(),_(`medium`),h({hardMode:!t.hardMode}),e&&e()});let n=document.getElementById(`btnCompleteDay`);n&&n.addEventListener(`click`,()=>{let t=m(),n=t.todayHabits.filter(e=>e.completed).length/t.todayHabits.length;t.hardMode&&n<.7?(_(`error`),alert(`☠️ ZOR MOD CEZASI: Görevlerin %70'ini tamamlamadın! Serin sıfırlandı ve 40 XP kaybettin.`),h({streak:1,xp:Math.max(0,t.xp-40),hearts:Math.max(0,t.hearts-1)}),e&&e()):(A(),_(`success`),alert(`🎉 Tebrikler Avcı! Gün ${t.currentDay} başarıyla mühürlendi. Boss zindanına ilerleniyor.`),h({currentDay:Math.min(66,t.currentDay+1),streak:t.streak+1,todayHabits:t.todayHabits.map(e=>({...e,completed:!1})),activeTab:`roadmap`}),e&&e())})}function xe(){let e=m(),t=Math.min(10,Math.ceil(e.currentDay/7)),r=n[t-1]||n[0],i=Math.max(0,Math.min(100,Math.round(e.bossHp/e.bossMaxHp*100)));return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Weekly Shadow Boss Battle Arena -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-rose-500/30 p-4 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚔️</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-widest">[ ${t}. HAFTA ZİNDANI ]</span>
              <h2 class="text-sm font-black text-white">${r.name}</h2>
            </div>
          </div>
          <span class="text-xs font-mono font-bold text-rose-400">${e.bossHp} / ${e.bossMaxHp} HP</span>
        </div>

        <!-- Boss Visual & Status -->
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          
          <!-- Boss Avatar -->
          <div class="relative rounded-xl overflow-hidden border border-rose-500/40 bg-slate-950 h-36 flex items-center justify-center group">
            <img src="./assets/boss.jpg" alt="${r.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" onerror="this.src='./assets/boss.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-2 left-2 right-2">
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold block truncate">
                ${r.archetype}
              </span>
            </div>
          </div>

          <!-- Boss Description & HP Bar -->
          <div class="sm:col-span-2 space-y-2.5">
            <p class="text-xs text-slate-300 leading-relaxed">
              ${r.desc}
            </p>

            <div class="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div class="text-[10px] font-mono text-cyan-400 font-bold">🎯 BİLİMSEL ZAYIFLIK:</div>
              <div class="text-white font-medium">${r.weakness}</div>
            </div>

            <!-- HP Bar -->
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Boss Sağlığı</span>
                <span class="text-rose-400 font-bold">%${i}</span>
              </div>
              <div class="h-2 w-full rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 transition-all duration-300 shadow-[0_0_10px_rgba(244,63,94,0.5)]" style="width: ${i}%"></div>
              </div>
            </div>

            <!-- Attack Button -->
            <button type="button" id="btnAttackBoss" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-xs font-mono uppercase tracking-wider transition active:scale-95 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              💥 KRİTİK FİZİKSEL VURUŞ YAP (-75 HP)
            </button>
          </div>

        </div>

      </div>

      <!-- 66-Day UCL Neuroplasticity Roadmap (3 Phases) -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-4">
        
        <div>
          <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <span>🗺️ 66 GÜNLÜK NÖROPLASTİSİTE YOL HARİTASI</span>
          </h3>
          <p class="text-[11px] text-slate-400">UCL Dr. Phillippa Lally (2010) Otomatizm Evreleri</p>
        </div>

        <!-- 3 Phase Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          <!-- Phase 1 -->
          <div class="p-3 rounded-xl border transition ${e.currentDay<=21?`bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]`:`bg-slate-950/60 border-slate-800 opacity-70`}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-cyan-300">FAZ 1 (Gün 1-21)</span>
              <span class="text-[10px] font-mono text-cyan-400 font-bold">${e.currentDay<=21?`AKTİF`:`TAMAMLANDI ✓`}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Yıkım & Direnç</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Eski konfor nöronlarının kırılması. En yüksek zihinsel sürtünme evresi.
            </p>
          </div>

          <!-- Phase 2 -->
          <div class="p-3 rounded-xl border transition ${e.currentDay>21&&e.currentDay<=44?`bg-purple-950/30 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]`:`bg-slate-950/60 border-slate-800 opacity-70`}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-purple-300">FAZ 2 (Gün 22-44)</span>
              <span class="text-[10px] font-mono text-purple-400 font-bold">${e.currentDay>21&&e.currentDay<=44?`AKTİF`:e.currentDay>44?`TAMAMLANDI ✓`:`KİLİTLİ`}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Kurulum & Ritim</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Yeni sinaptik bağlantıların oluşması. Davranışlar ritim kazanır.
            </p>
          </div>

          <!-- Phase 3 -->
          <div class="p-3 rounded-xl border transition ${e.currentDay>44?`bg-amber-950/30 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]`:`bg-slate-950/60 border-slate-800 opacity-70`}">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
              <span class="font-bold text-amber-300">FAZ 3 (Gün 45-66)</span>
              <span class="text-[10px] font-mono text-amber-400 font-bold">${e.currentDay>44?`AKTİF`:`KİLİTLİ`}</span>
            </div>
            <h4 class="font-bold text-white mt-1.5">Bütünleşme & Kimlik</h4>
            <p class="text-[11px] text-slate-400 leading-snug mt-1">
              Otomatizmin tamamlanması. Efor gerektirmeyen yeni Solo Hunter kimliği.
            </p>
          </div>

        </div>

        <!-- 66 Days Mini Grid -->
        <div class="pt-2">
          <div class="text-[11px] font-mono text-slate-400 mb-2">66 GÜNLÜK NÖRAL MATRİS:</div>
          <div class="grid grid-cols-11 sm:grid-cols-22 gap-1.5">
            ${Array(66).fill(0).map((t,n)=>{let r=n+1,i=r<e.currentDay;return`
                <div class="aspect-square rounded-md flex items-center justify-center text-[9px] font-mono font-bold transition ${r===e.currentDay?`bg-cyan-500 text-black shadow-[0_0_8px_rgba(6,182,212,0.8)] scale-110`:i?`bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`:`bg-slate-950 border border-slate-800 text-slate-600`}">
                  ${r}
                </div>
              `}).join(``)}
          </div>
        </div>

      </div>

    </div>
  `}function Se(e){let t=document.getElementById(`btnAttackBoss`);t&&t.addEventListener(`click`,()=>{let t=m();if(t.bossHp<=0){alert(`🎉 Bu haftanın boss patronu zaten yok edildi!`);return}le(),_(`heavy`);let n=Math.max(0,t.bossHp-75);h({bossHp:n}),n===0&&(A(),_(`success`),alert(`🏆 ZAFER! Boss yok edildi! +100 Bonus XP ve Zafer Rozeti kazandın!`),g(100,`STR`)),e&&e()})}function Ce(){return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Section Header -->
      <div>
        <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
          <span>🧰 BENTO MİNİ ARAÇLAR & STÜDYOLAR</span>
        </h2>
        <span class="text-[11px] text-slate-400">Hayatınızı optimize eden 5 entegre nöro-araç paketi.</span>
      </div>

      <!-- Tools Bento Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <!-- Tool 1: Meditation -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/40 hover:border-purple-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="meditation">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">🧘</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold uppercase">ZİHİN (MND)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-purple-300 transition">
              Meditasyon & Frekans Stüdyosu
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              Kutu Nefesi, 4-7-8, Stanford Physiological Sigh, Wim Hof, 40Hz Gama ve Tibet Çanı.
            </p>
          </div>
          <div class="text-[10px] font-mono text-purple-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Seansı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 2: Workout -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/40 hover:border-amber-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="workout">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">🏋️</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase">GÜÇ (STR)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition">
              Antrenman & Dinlenme Sayacı
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              7 günlük kişisel program, set takibi, otomatik geri sayım sayacı ve Boss hasarı.
            </p>
          </div>
          <div class="text-[10px] font-mono text-amber-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Antrenmanı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 3: Pomodoro -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/40 hover:border-indigo-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="pomodoro">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">⏱️</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold uppercase">ODAK (FOC)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-indigo-300 transition">
              Pürdikkat Odak Blokları (Deep Work)
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              25 ve 50 dakikalık tekil görev blokları. Dikkat kalıntısını sıfırlama.
            </p>
          </div>
          <div class="text-[10px] font-mono text-indigo-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Sayacı Başlat</span>
            <span>➔</span>
          </div>
        </div>

        <!-- Tool 4: Smartwatch Sleep Sync -->
        <div class="btn-launch-tool p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 hover:border-cyan-500/80 transition cursor-pointer group shadow-sm flex flex-col justify-between h-40" data-modal="sleep">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-2xl">⌚</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold uppercase">CANLILIK (VIT)</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-2 group-hover:text-cyan-300 transition">
              Akıllı Saat & Uyku Senkronizasyonu
            </h3>
            <p class="text-[11px] text-slate-400 mt-1 leading-snug">
              BLE nabız, Health Connect, BOS gliyomfatik uyku skoru ve +%15 XP Buff.
            </p>
          </div>
          <div class="text-[10px] font-mono text-cyan-400 font-bold flex items-center justify-between pt-2 border-t border-slate-800/60">
            <span>Senkronizasyonu Aç</span>
            <span>➔</span>
          </div>
        </div>

      </div>

    </div>
  `}function we(e){document.querySelectorAll(`.btn-launch-tool`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-modal`);k(),_(`light`),h({activeModal:n}),e&&e()})})}var j=`Tümü`,Te=[`Tümü`,`Disiplin`,`İrade`,`Odak`,`Güç`,`Bilgelik`,`Özgüven`,`Stoacılık`];function Ee(){let e=j===`Tümü`?i:i.filter(e=>e.category===j||e.color===j);return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>🃏 ZİHİN KARTLARI & KİTAPLIK</span>
          </h2>
          <span class="text-[11px] text-slate-400">Bilişsel Yeniden Çerçeveleme (CBT) & 10 Başyapıt Özeti</span>
        </div>

        <button type="button" id="btnOpenBooksModal" class="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold hover:bg-purple-500/30 transition flex items-center gap-1.5">
          <span>📚 10 Kitap Özeti</span>
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        ${Te.map(e=>`
          <button type="button" class="btn-filter-category px-3 py-1 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap ${e===j?`bg-cyan-500 text-black shadow-md shadow-cyan-500/20`:`bg-slate-900 border border-slate-800 text-slate-400 hover:text-white`}" data-cat="${e}">
            ${e}
          </button>
        `).join(``)}
      </div>

      <!-- Mantra Cards Grid (Interactive 3D Flip) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.map((e,t)=>`
          <div class="mantra-card-wrapper h-44 cursor-pointer perspective-1000 group" data-idx="${t}">
            <div class="mantra-card-inner relative w-full h-full duration-500 transform-style-3d transition-transform rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm hover:border-cyan-500/40 flex flex-col justify-between">
              
              <!-- Front Side -->
              <div class="mantra-card-front absolute inset-0 p-4 backface-hidden flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-bold uppercase">
                      ${e.category}
                    </span>
                    <span class="text-xs text-slate-600">Kart #${e.id}</span>
                  </div>
                  <h3 class="text-sm font-bold text-white mt-2 leading-snug">
                    ${e.title}
                  </h3>
                </div>

                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/60 font-mono">
                  <span>Öğretiyi Gör</span>
                  <span class="text-cyan-400">Döndür ➔</span>
                </div>
              </div>

              <!-- Back Side -->
              <div class="mantra-card-back absolute inset-0 p-4 backface-hidden rotate-y-180 bg-slate-950 border border-cyan-500/50 rounded-2xl flex flex-col justify-between">
                <div>
                  <span class="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    [ BİLİŞSEL YENİDEN ÇERÇEVELEME ]
                  </span>
                  <p class="text-xs text-slate-200 leading-relaxed mt-2 italic font-serif">
                    "${e.quote}"
                  </p>
                </div>
                <div class="text-[10px] text-right font-mono text-cyan-400/80">
                  Tekrar Dokun ↺
                </div>
              </div>

            </div>
          </div>
        `).join(``)}
      </div>

    </div>
  `}function De(){return m().activeModal===`books`?`
    <div id="booksModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">📚</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">10 BİLİM & USTALIK BAŞYAPITI</h2>
              <span class="text-[10px] text-slate-400">Nöroplastisite, Alışkanlık ve Bilişsel Performans</span>
            </div>
          </div>
          <button type="button" id="btnCloseBooksModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Book Summaries List -->
        <div class="space-y-3">
          ${r.map(e=>`
            <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 transition space-y-1.5">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xs font-bold text-white">${e.title}</h3>
                  <span class="text-[10px] text-slate-400">${e.author}</span>
                </div>
                <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold shrink-0">
                  ${e.badge}
                </span>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed">
                ${e.summary}
              </p>
            </div>
          `).join(``)}
        </div>

      </div>
    </div>
  `:``}function Oe(e){document.querySelectorAll(`.btn-filter-category`).forEach(t=>{t.addEventListener(`click`,()=>{j=t.getAttribute(`data-cat`),k(),_(`light`),e&&e()})}),document.querySelectorAll(`.mantra-card-wrapper`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.querySelector(`.mantra-card-inner`);t&&(t.classList.toggle(`flipped`),k(),_(`light`))})});let t=document.getElementById(`btnOpenBooksModal`);t&&t.addEventListener(`click`,()=>{k(),_(`light`),h({activeModal:`books`}),e&&e()});let n=document.getElementById(`btnCloseBooksModal`);n&&n.addEventListener(`click`,()=>{h({activeModal:null}),e&&e()})}function ke(){let t=m(),n=Ae(t.stats);return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Hunter Profile Banner -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] shrink-0">
            <img src="./assets/hero.jpg" alt="Hunter Avatar" class="w-full h-full object-cover" onerror="this.src='./assets/hero.jpg'" />
          </div>
          <div>
            <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">[ SOLO HUNTER PROFİLİ ]</span>
            <h2 class="text-base font-black text-white">Avcı #001</h2>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xs font-mono text-cyan-300 font-bold">Seviye ${t.level}</span>
              <span class="text-xs text-slate-500">•</span>
              <span class="text-xs font-mono text-amber-400 font-bold">🔥 ${t.streak} Günlük Seri</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 6-Pillars Dynamic SVG Radar Chart -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              6 YAŞAM SÜTUNU RADAR GRAFİĞİ
            </h3>
            <span class="text-[10px] text-slate-400">Bütünsel Karakter Dengesi (Hexagonal Stat Map)</span>
          </div>
          <span class="text-xs font-mono text-slate-400 font-bold">Maks: 100</span>
        </div>

        <!-- Radar Canvas -->
        <div class="flex justify-center py-2">
          ${n}
        </div>

        <!-- Stats Breakdown Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
          ${Object.entries(e).map(([e,n])=>{let r=t.stats[e]||10;return`
              <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span>${n.icon}</span>
                  <div>
                    <span class="text-xs font-bold text-white block">${n.code}</span>
                    <span class="text-[9px] text-slate-400">${n.name}</span>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold text-cyan-400">${r}</span>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Settings & Controls -->
      <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 pb-2 border-b border-slate-800">
          ⚙️ UYGULAMA & VERİ AYARLARI
        </h3>

        <!-- Toggles -->
        <div class="space-y-2">
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
            <span class="text-xs text-slate-300 font-medium">🔊 Web Audio Ses Efektleri</span>
            <button type="button" id="btnToggleSound" class="px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${t.soundEnabled?`bg-cyan-500 text-black`:`bg-slate-800 text-slate-500`}">
              ${t.soundEnabled?`AÇIK`:`KAPALI`}
            </button>
          </div>

          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
            <span class="text-xs text-slate-300 font-medium">📳 Haptik Titreşim Geri Bildirimi</span>
            <button type="button" id="btnToggleHaptics" class="px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${t.hapticsEnabled?`bg-purple-500 text-black`:`bg-slate-800 text-slate-500`}">
              ${t.hapticsEnabled?`AÇIK`:`KAPALI`}
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          <button type="button" id="btnReopenAssessment" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-950/30 transition text-center">
            🧬 Yaşam Analizini Tekrar Yap
          </button>
          <button type="button" id="btnExportData" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            💾 Verileri Dışa Aktar (JSON)
          </button>
          <button type="button" id="btnImportData" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            📥 Verileri İçe Aktar (JSON)
          </button>
          <button type="button" id="btnResetAll" class="py-2.5 px-3 rounded-xl bg-slate-950 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold hover:bg-rose-950/30 transition text-center">
            ⚠️ Tüm Verileri Sıfırla
          </button>
        </div>

      </div>

    </div>
  `}function Ae(e){let t=[`STR`,`VIT`,`MND`,`WIL`,`FOC`,`DIS`],n=t.length,r=t.map((t,r)=>{let i=Math.PI*2/n*r-Math.PI/2,a=Math.min(100,Math.max(10,e[t]||10))/100*80,o=110+a*Math.cos(i),s=110+a*Math.sin(i);return`${o.toFixed(1)},${s.toFixed(1)}`}).join(` `);return`
    <svg width="220" height="220" viewBox="0 0 220 220" class="overflow-visible">
      ${[.33,.66,1].map(e=>`<polygon points="${t.map((t,r)=>{let i=Math.PI*2/n*r-Math.PI/2,a=e*80;return`${(110+a*Math.cos(i)).toFixed(1)},${(110+a*Math.sin(i)).toFixed(1)}`}).join(` `)}" fill="none" stroke="rgba(148, 163, 184, 0.15)" stroke-width="1" />`).join(``)}
      <polygon points="${r}" fill="rgba(6, 182, 212, 0.25)" stroke="#06B6D4" stroke-width="2" />
      ${t.map((e,t)=>{let r=Math.PI*2/n*t-Math.PI/2,i=110+98*Math.cos(r),a=110+98*Math.sin(r)+4;return`<text x="${i.toFixed(1)}" y="${a.toFixed(1)}" fill="#94A3B8" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">${e}</text>`}).join(``)}
    </svg>
  `}function je(e){let t=document.getElementById(`btnToggleSound`);t&&t.addEventListener(`click`,()=>{let t=m();k(),_(`light`),h({soundEnabled:!t.soundEnabled}),e&&e()});let n=document.getElementById(`btnToggleHaptics`);n&&n.addEventListener(`click`,()=>{let t=m();k(),_(`medium`),h({hapticsEnabled:!t.hapticsEnabled}),e&&e()});let r=document.getElementById(`btnReopenAssessment`);r&&r.addEventListener(`click`,()=>{k(),_(`light`),h({activeModal:`assessment`}),e&&e()});let i=document.getElementById(`btnExportData`);i&&i.addEventListener(`click`,()=>{let e=re(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reset66_backup_${Date.now()}.json`,r.click(),URL.revokeObjectURL(n),_(`success`)});let a=document.getElementById(`btnImportData`);a&&a.addEventListener(`click`,()=>{let t=prompt(`Dışa aktardığınız JSON yedeğini buraya yapıştırın:`);t&&(ie(t)?(_(`success`),alert(`✅ Veriler başarıyla içe aktarıldı!`),e&&e()):alert(`❌ Geçersiz JSON formatı!`))});let o=document.getElementById(`btnResetAll`);o&&o.addEventListener(`click`,()=>{confirm(`⚠️ DİKKAT: Tüm ilerlemeniz silinecek ve baştan başlayacaksınız. Onaylıyor musunuz?`)&&(ne(),_(`error`),alert(`Tüm veriler sıfırlandı.`),e&&e())})}var Me=[{id:`quests`,label:`Bugün`,icon:`📋`},{id:`roadmap`,label:`Harita`,icon:`🗺️`},{id:`tools`,label:`Stüdyo`,icon:`🧰`},{id:`cards`,label:`Zihin`,icon:`🃏`},{id:`profile`,label:`Profil`,icon:`👤`}];function Ne(){let e=m();return`
    <nav class="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none">
      <div class="max-w-md mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] p-1.5 pointer-events-auto flex items-center justify-around">
        ${Me.map(t=>{let n=e.activeTab===t.id;return`
            <button type="button" class="btn-bottom-tab flex-1 py-1.5 px-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 group ${n?`bg-cyan-500/15 text-cyan-400 font-bold shadow-inner`:`text-slate-400 hover:text-slate-200`}" data-tab="${t.id}">
              <span class="text-lg leading-none transition-transform group-hover:scale-110 ${n?`scale-110`:``}">${t.icon}</span>
              <span class="text-[10px] font-mono mt-0.5 tracking-tight ${n?`text-cyan-300 font-bold`:`text-slate-400`}">${t.label}</span>
            </button>
          `}).join(``)}
      </div>
    </nav>
  `}function Pe(e){document.querySelectorAll(`.btn-bottom-tab`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-tab`);k(),_(`light`),h({activeTab:n}),e&&e()})})}var M=0,Fe=[];function Ie(){let e=m();if(e.onboardingDone&&e.activeModal!==`assessment`)return``;let t=s[M],n=s.length,r=Math.round((M+1)/n*100);return`
    <div id="onboardingModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🧬</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">YAŞAM SIFIRLAMA ANALİZİ</h2>
              <span class="text-[10px] text-slate-400">Adım ${M+1} / ${n}</span>
            </div>
          </div>
          <div class="text-xs font-mono text-cyan-300 font-bold">%${r}</div>
        </div>

        <!-- Progress Bar -->
        <div class="h-1.5 w-full rounded-full bg-slate-950 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300" style="width: ${r}%"></div>
        </div>

        <!-- Question Body -->
        <div class="space-y-2">
          <h3 class="text-base font-bold text-white leading-snug">${t.title}</h3>
          <p class="text-xs text-slate-400 font-medium">${t.subtitle}</p>
        </div>

        <!-- Options -->
        <div class="space-y-2.5 pt-2">
          ${t.options.map((e,t)=>`
            <button type="button" class="onboarding-opt-btn w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-left transition flex items-center justify-between group" data-idx="${t}">
              <span class="text-xs font-semibold text-slate-200 group-hover:text-white">${e.label}</span>
              <span class="text-xs text-slate-600 group-hover:text-cyan-400">➔</span>
            </button>
          `).join(``)}
        </div>

        <!-- Skip / Later button -->
        <div class="pt-2 text-center">
          <button type="button" id="btnSkipOnboarding" class="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition">
            Testi Atla ve Doğrudan Başla ➔
          </button>
        </div>

      </div>
    </div>
  `}function Le(e){document.querySelectorAll(`.onboarding-opt-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=s[M].options[n];Fe.push(r),k(),_(`light`),M<s.length-1?(M++,e&&e()):Re(e)})});let t=document.getElementById(`btnSkipOnboarding`);t&&t.addEventListener(`click`,()=>{h({onboardingDone:!0,activeModal:null}),e&&e()})}function Re(e){A(),_(`success`);let t=0;Fe.forEach(e=>{t+=e.score||30}),h({onboardingDone:!0,assessmentScore:Math.min(100,Math.round(t/(s.length*50)*100)),activeModal:null}),e&&e()}async function N(e=!0){try{let t=window.Capacitor?.Plugins?.KeepAwake;if(t){e?await t.keepAwake():await t.allowSleep();return}}catch{}if(`wakeLock`in navigator)try{e&&!window._screenWakeLockSentinel?window._screenWakeLockSentinel=await navigator.wakeLock.request(`screen`):!e&&window._screenWakeLockSentinel&&(await window._screenWakeLockSentinel.release(),window._screenWakeLockSentinel=null)}catch{}}var P=`box`,F=5,I=300,L=null,R=0,z=0;function ze(){let e=o[P],t=me(),n=ve(),r=Math.floor(I/60),i=I%60,a=`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`;return`
    <div id="meditationModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🧘</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">FARKINDALIK & NEFES STÜDYOSU</h2>
              <span class="text-[10px] text-slate-400" id="medTechSubtitle">${e.sub}</span>
            </div>
          </div>
          <button type="button" id="btnCloseMedModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Techniques Selector -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          ${Object.entries(o).map(([e,t])=>`
              <button type="button" class="btn-med-tech p-2 rounded-xl border text-center transition ${e===P?`bg-purple-500/20 border-purple-500/60 text-purple-200 font-bold shadow-sm`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200`}" data-tech="${e}">
                <span class="block text-[11px] leading-tight truncate">${t.name.split(` `)[0]}</span>
                <span class="text-[9px] text-slate-500 block truncate">${e===`sigh`?`Stanford 2023`:e===`box`?`4-4-4-4`:e===`relax`?`4-7-8`:`Wim Hof`}</span>
              </button>
            `).join(``)}
        </div>

        <!-- Concentric Pulsing Breathing Orb & Live Instructions -->
        <div class="relative py-6 flex flex-col items-center justify-center min-h-[220px]">
          
          <!-- Outer Pulsing Rings -->
          <div id="medOrbRing3" class="absolute w-48 h-48 rounded-full border border-purple-500/20 transition-all duration-1000 scale-100"></div>
          <div id="medOrbRing2" class="absolute w-36 h-36 rounded-full border border-purple-500/30 transition-all duration-1000 scale-100"></div>

          <!-- Core Orb -->
          <div id="medOrbCore" class="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 via-cyan-500 to-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.6)] flex flex-col items-center justify-center transition-all duration-1000 text-center p-2">
            <span id="medPhaseLabel" class="text-xs font-black uppercase text-white tracking-widest">HAZIR</span>
            <span id="medPhaseTimer" class="text-lg font-mono font-bold text-white leading-none mt-0.5">--</span>
          </div>

          <!-- Instruction Text -->
          <p id="medInstructionText" class="mt-4 text-xs font-medium text-cyan-200 text-center max-w-xs transition">
            Nefes egzersizine başlamak için süreyi seç ve başlat butonuna bas.
          </p>

        </div>

        <!-- Timer & Duration Selector -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-400">Kalan Süre:</span>
            <span id="medTimerDisplay" class="text-xl font-bold text-purple-300 font-mono">${a}</span>
          </div>

          <div class="grid grid-cols-4 gap-2">
            ${[3,5,10,15].map(e=>`
              <button type="button" class="btn-med-duration py-1.5 rounded-xl border text-xs font-mono font-bold transition ${e===F?`bg-purple-500 text-black border-purple-400 shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-dur="${e}">
                ${e} Dk
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Web Audio Procedural Frequency Mixer -->
        <div class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
          <div class="flex items-center justify-between text-[11px] font-mono">
            <span class="text-slate-300 font-bold">🎧 Web Audio Frekans Mikseri:</span>
            <span class="text-[10px] text-cyan-400">${t?`${t.toUpperCase()} Açık`:`Kapalı`}</span>
          </div>

          <!-- Binaural & Noise Buttons -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px]">
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${t===`alpha`?`bg-cyan-500/20 text-cyan-300 border-cyan-500/50`:`bg-slate-900 border-slate-800 text-slate-400`}" data-binaural="alpha">
              Alfa 10Hz
            </button>
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${t===`theta`?`bg-purple-500/20 text-purple-300 border-purple-500/50`:`bg-slate-900 border-slate-800 text-slate-400`}" data-binaural="theta">
              Teta 6Hz
            </button>
            <button type="button" class="btn-audio-binaural py-1.5 rounded-lg border text-center transition ${t===`gamma`?`bg-amber-500/20 text-amber-300 border-amber-500/50`:`bg-slate-900 border-slate-800 text-slate-400`}" data-binaural="gamma">
              Gama 40Hz
            </button>
            <button type="button" class="btn-audio-noise py-1.5 rounded-lg border text-center transition ${n===`pink`?`bg-pink-500/20 text-pink-300 border-pink-500/50`:`bg-slate-900 border-slate-800 text-slate-400`}" data-noise="pink">
              Pembe
            </button>
            <button type="button" class="btn-audio-noise py-1.5 rounded-lg border text-center transition ${n===`brown`?`bg-amber-500/20 text-amber-300 border-amber-500/50`:`bg-slate-900 border-slate-800 text-slate-400`}" data-noise="brown">
              Okyanus
            </button>
          </div>

          <!-- Tibetan Bowl Trigger -->
          <div class="pt-1 flex justify-end">
            <button type="button" id="btnPlayTibetBowl" class="text-[10px] font-mono text-purple-300 hover:text-purple-200 transition flex items-center gap-1">
              <span>🔔 432 Hz Tibet Çanı Çal</span>
            </button>
          </div>
        </div>

        <!-- Start / Stop Button -->
        <button type="button" id="btnToggleMedSession" class="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          ${L?`⏸️ MEDİTASYONU DURDUR`:`▶️ MEDİTASYONU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function Be(e){let t=document.getElementById(`btnCloseMedModal`);t&&t.addEventListener(`click`,()=>{B(),h({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-med-tech`).forEach(t=>{t.addEventListener(`click`,()=>{P=t.getAttribute(`data-tech`),k(),_(`light`),He(),e&&e()})}),document.querySelectorAll(`.btn-med-duration`).forEach(t=>{t.addEventListener(`click`,()=>{F=Number(t.getAttribute(`data-dur`)),I=F*60,k(),_(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-binaural`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-binaural`);me()===n?fe():pe(n),_(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-noise`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-noise`);ve()===n?ge():_e(n),_(`light`),e&&e()})});let n=document.getElementById(`btnPlayTibetBowl`);n&&n.addEventListener(`click`,()=>{de(),_(`medium`)});let r=document.getElementById(`btnToggleMedSession`);r&&r.addEventListener(`click`,()=>{L?B():Ve(),e&&e()})}function Ve(){N(!0),de(),_(`medium`),R=0;let e=o[P];z=e.phases[0].sec,L=setInterval(()=>{I--,z--,z<=0&&(R=(R+1)%e.phases.length,z=e.phases[R].sec,_(`light`)),Ue(e.phases[R],z),I<=0&&We()},1e3)}function B(){L&&(clearInterval(L),L=null),N(!1),fe(),ge()}function He(){R=0,z=0,I=F*60}function Ue(e,t){let n=document.getElementById(`medPhaseLabel`),r=document.getElementById(`medPhaseTimer`),i=document.getElementById(`medInstructionText`),a=document.getElementById(`medOrbCore`),o=document.getElementById(`medOrbRing2`),s=document.getElementById(`medOrbRing3`),c=document.getElementById(`medTimerDisplay`);if(n&&(n.textContent=e.label),r&&(r.textContent=`${t}s`),i&&(i.textContent=e.instr),a&&(e.action===`expand`?(a.style.transform=`scale(1.35)`,o&&(o.style.transform=`scale(1.25)`),s&&(s.style.transform=`scale(1.15)`)):e.action===`contract`?(a.style.transform=`scale(0.85)`,o&&(o.style.transform=`scale(0.95)`),s&&(s.style.transform=`scale(0.95)`)):a.style.transform=`scale(1.1)`),c){let e=Math.floor(I/60),t=I%60;c.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}}function We(){B(),de(),_(`success`);let e=F*10;g(e,`MND`),alert(`🧘 Tebrikler! ${F} dakikalık derin farkındalık seansı tamamlandı. +${e} Zihin (MND) XP kazandın!`),h({activeModal:null})}var V=`monday`,H={},U=0,W=null,Ge=60,Ke=[{key:`monday`,label:`Pzt`},{key:`tuesday`,label:`Sal`},{key:`wednesday`,label:`Çar`},{key:`thursday`,label:`Per`},{key:`friday`,label:`Cum`},{key:`saturday`,label:`Cmt`},{key:`sunday`,label:`Paz`}];function qe(){let e=m().workouts[V]||{name:`Özel Antrenman`,exercises:[]};return`
    <div id="workoutModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-amber-500/40 p-5 shadow-[0_0_40px_rgba(245,158,11,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🏋️</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">ANTRENMAN & GELİŞİM STÜDYOSU</h2>
              <span class="text-[10px] text-slate-400">Progresif Yükleme (Schoenfeld) & Set Takibi</span>
            </div>
          </div>
          <button type="button" id="btnCloseWorkoutModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- 7-Day Day Selector Bar -->
        <div class="grid grid-cols-7 gap-1.5">
          ${Ke.map(e=>`
              <button type="button" class="btn-workout-day py-2 rounded-xl border text-center transition ${e.key===V?`bg-amber-500 text-black border-amber-400 font-bold shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-day="${e.key}">
                <span class="block text-xs">${e.label}</span>
              </button>
            `).join(``)}
        </div>

        <!-- Day Program Title & Add Exercise Button -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">PROGRAM PLANI:</span>
            <h3 class="text-sm font-bold text-white">${e.name}</h3>
          </div>
          <button type="button" id="btnAddExerciseBtn" class="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold hover:bg-amber-500/30 transition">
            + Hareket Ekle
          </button>
        </div>

        <!-- Rest Countdown Timer Box (If Active) -->
        <div class="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-300 font-bold">⏱️ Set Arası Dinlenme Sayacı:</span>
            <span id="workoutRestTimerDisplay" class="text-lg font-bold text-amber-400 font-mono">
              ${U>0?`${U}s`:`Hazır`}
            </span>
          </div>

          <!-- Rest presets -->
          <div class="grid grid-cols-4 gap-1.5 text-xs font-mono">
            ${[30,60,90,120].map(e=>`
              <button type="button" class="btn-rest-preset py-1.5 rounded-lg border text-center transition ${e===Ge?`bg-amber-500/30 text-amber-200 border-amber-500/60 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-sec="${e}">
                ${e}s
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Exercise List -->
        <div class="space-y-2.5">
          ${e.exercises.map((e,t)=>{let n=H[e.id]||0;return`
              <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">${e.name}</span>
                  <span class="text-[11px] font-mono text-amber-400 font-semibold">${e.weight}</span>
                </div>

                <!-- Sets Checklist -->
                <div class="flex items-center gap-2">
                  ${Array(e.sets).fill(0).map((t,r)=>{let i=r<n;return`
                      <button type="button" class="btn-toggle-set flex-1 py-1.5 rounded-lg border text-xs font-mono font-bold transition ${i?`bg-amber-500 text-black border-amber-400 shadow-sm`:`bg-slate-900 border-slate-800 text-slate-400 hover:text-white`}" data-ex="${e.id}" data-set="${r}">
                        ${i?`✓`:`Set ${r+1}`}
                      </button>
                    `}).join(``)}
                </div>
              </div>
            `}).join(``)}
        </div>

        <!-- Finish Workout & Deal Boss Damage Button -->
        <button type="button" id="btnFinishWorkout" class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          💥 ANTRENMANI BİTİR & BOSS'A KRİTİK VUR (-80 HP)
        </button>

      </div>
    </div>
  `}function Je(e){let t=document.getElementById(`btnCloseWorkoutModal`);t&&t.addEventListener(`click`,()=>{G(),N(!1),h({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-workout-day`).forEach(t=>{t.addEventListener(`click`,()=>{V=t.getAttribute(`data-day`),k(),_(`light`),e&&e()})}),document.querySelectorAll(`.btn-rest-preset`).forEach(t=>{t.addEventListener(`click`,()=>{Ge=Number(t.getAttribute(`data-sec`)),k(),_(`light`),e&&e()})}),document.querySelectorAll(`.btn-toggle-set`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-ex`),r=Number(t.getAttribute(`data-set`));r>=(H[n]||0)?(H[n]=r+1,k(),_(`medium`),Ye(Ge)):(H[n]=r,_(`light`)),e&&e()})});let n=document.getElementById(`btnAddExerciseBtn`);n&&n.addEventListener(`click`,()=>{let t=prompt(`Hareket adı (Örn: Barbell Bench Press):`);if(!t)return;let n=Number(prompt(`Set sayısı:`,`4`))||3,r=prompt(`Tekrar sayısı (Örn: 10):`,`10`)||`10`,i=prompt(`Hedef ağırlık (Örn: 25 kg):`,`20 kg`)||`Kişisel`,a=m(),o=a.workouts[V],s={id:`ex_`+Date.now(),name:t,sets:n,reps:r,weight:i},c={...o,exercises:[...o.exercises,s]};h({workouts:{...a.workouts,[V]:c}}),e&&e()});let r=document.getElementById(`btnFinishWorkout`);r&&r.addEventListener(`click`,()=>{G(),N(!1),le(),_(`heavy`);let t=m(),n=Math.max(0,t.bossHp-80);g(50,`STR`),g(25,`VIT`),alert(`💥 TEBRİKLER! Antrenman başarıyla tamamlandı. Boss'a 80 Fiziksel Kritik Hasar vuruldu, +50 STR ve +25 VIT XP kazanıldı!`),h({bossHp:n,activeModal:null}),e&&e()})}function Ye(e){G(),N(!0),U=e,W=setInterval(()=>{U--;let e=document.getElementById(`workoutRestTimerDisplay`);e&&(e.textContent=`${U}s`),U<=0&&(G(),ue(),_(`heavy`),e&&(e.textContent=`Dinlenme Bitti! Yeni Sete Başla 🔥`))},1e3)}function G(){W&&(clearInterval(W),W=null),U=0}var K=25,q=1500,J=null;function Xe(){let e=Math.floor(q/60),t=q%60;return`
    <div id="focusModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-3xl bg-slate-900 border border-indigo-500/40 p-5 shadow-[0_0_40px_rgba(99,102,241,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">⏱️</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">PÜRDİKKAT ODAK BLOKLARI</h2>
              <span class="text-[10px] text-slate-400">Cal Newport: Tekil Görev & Sıfır Bölünme</span>
            </div>
          </div>
          <button type="button" id="btnCloseFocusModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Big Circular Countdown Visual -->
        <div class="py-8 flex flex-col items-center justify-center">
          <div class="w-44 h-44 rounded-full border-4 border-indigo-500/40 bg-slate-950 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            <span id="focusTimeDisplay" class="text-4xl font-black font-mono tracking-tight text-white">${`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}</span>
            <span class="text-[10px] font-mono text-indigo-400 font-bold uppercase mt-1 tracking-widest">
              ${J?`ODAK AKTİF`:`DURAKLATILDI`}
            </span>
          </div>
        </div>

        <!-- Duration Presets -->
        <div class="grid grid-cols-3 gap-2 text-xs font-mono">
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${K===25?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="25">
            25 Dk (Klasik)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${K===50?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="50">
            50 Dk (Derin)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${K===90?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="90">
            90 Dk (Huberman)
          </button>
        </div>

        <!-- Start / Pause Button -->
        <button type="button" id="btnToggleFocusTimer" class="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          ${J?`⏸️ ODAK BLOKUNU DURDUR`:`▶️ ODAK BLOKUNU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function Ze(e){let t=document.getElementById(`btnCloseFocusModal`);t&&t.addEventListener(`click`,()=>{$e(),N(!1),h({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-focus-preset`).forEach(t=>{t.addEventListener(`click`,()=>{K=Number(t.getAttribute(`data-min`)),q=K*60,k(),_(`light`),e&&e()})});let n=document.getElementById(`btnToggleFocusTimer`);n&&n.addEventListener(`click`,()=>{J?$e():Qe(),e&&e()})}function Qe(){N(!0),k(),_(`medium`),J=setInterval(()=>{q--;let e=Math.floor(q/60),t=q%60,n=document.getElementById(`focusTimeDisplay`);n&&(n.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`),q<=0&&($e(),A(),_(`success`),g(K,`FOC`),alert(`⏱️ Pürdikkat Odak Seansı Tamamlandı! +${K} Odak (FOC) XP kazandın!`),h({activeModal:null}))},1e3)}function $e(){J&&(clearInterval(J),J=null)}var Y=!1,X=null,Z=null;async function et(e){if(!Y){Y=!0,e&&e(`Bluetooth LE cihazları taranıyor (0x180D)...`);try{let t=window.Capacitor?.Plugins?.BluetoothLe;if(t){await t.initialize();let n=await t.requestDevice({services:[`180d`],optionalServices:[`180f`,`fee0`]});if(n){await t.connect({deviceId:n.deviceId}),X=n.name||`Akıllı Saat / Bant`,Q(X,e),Y=!1;return}}}catch(e){console.warn(`Capacitor BLE failed or not supported, trying Web Bluetooth:`,e)}if(navigator.bluetooth)try{let t=await navigator.bluetooth.requestDevice({filters:[{services:[`heart_rate`]}],optionalServices:[`battery_service`]});await t.gatt.connect(),X=t.name||`BLE Akıllı Bileklik`,Q(X,e),Y=!1;return}catch(e){console.warn(`Web Bluetooth cancelled or unavailable:`,e)}e&&e(`Gerçek cihaz bulunamadı. Akıllı Saat Simülatörü bağlanıyor...`),setTimeout(()=>{X=`Mi Band / Galaxy Watch (Simülatör)`,Q(X,e),Y=!1},1200)}}function Q(e,t){let n=Math.floor(58+Math.random()*8),r=Math.floor(420+Math.random()*60),i=Math.floor(r*.22),a=Math.floor(r*.2),o=r-i-a,s=Math.min(100,Math.floor(75+i/100*15+Math.random()*10)),c={connected:!0,deviceName:e,totalMinutes:r,deepMinutes:i,remMinutes:a,lightMinutes:o,qualityScore:s,restingHr:n,hasRestBuff:s>=80,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})};h({sleepData:c}),t&&t(`Bağlandı: ${e} (Dinlenme Nabzı: ${n} BPM, Uyku Skoru: %${s})`),Z&&clearInterval(Z),Z=setInterval(()=>{let e=Math.floor(Math.random()*5)-2,t=Math.max(50,Math.min(100,c.restingHr+e)),n=document.getElementById(`liveHeartRateText`);n&&(n.textContent=`❤️ ${t} BPM`)},2500)}function tt(){window.location.href=`intent:#Intent;package=com.google.android.apps.healthdata;action=androidx.health.ACTION_HEALTH_CONNECT_SETTINGS;end`}function nt(e){try{let t=JSON.parse(e),n=t.sleepScore||t.quality||Math.floor(75+Math.random()*20),r=t.totalSleepMinutes||t.durationMinutes||460;return{success:!0,qualityScore:n,totalMinutes:r,deepMinutes:Math.floor(r*.22),remMinutes:Math.floor(r*.2),lightMinutes:Math.floor(r*.58),restingHr:t.restingHeartRate||62}}catch{return e.split(`
`).length>1?{success:!0,qualityScore:82,totalMinutes:450,deepMinutes:100,remMinutes:90,lightMinutes:260,restingHr:63}:{success:!1,error:`Dosya formatı anlaşılamadı (JSON veya CSV bekleniyor).`}}}function rt(){let e=m().sleepData,t=(e.totalMinutes/60).toFixed(1),n=(e.deepMinutes/60).toFixed(1),r=(e.remMinutes/60).toFixed(1);return`
    <div id="sleepModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/40 p-5 shadow-[0_0_40px_rgba(6,182,212,0.25)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">⌚</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">AKILLI SAAT & UYKU SENKRONİZASYONU</h2>
              <span class="text-[10px] text-slate-400">Nedergaard (Science): BOS Gliyomfatik Temizlik</span>
            </div>
          </div>
          <button type="button" id="btnCloseSleepModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Connection Status & Sync Actions -->
        <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full ${e.connected?`bg-emerald-500 animate-pulse`:`bg-slate-600`}"></span>
              <span class="text-xs font-bold text-white">${e.connected?e.deviceName:`Cihaz Bağlı Değil`}</span>
            </div>
            <span id="liveHeartRateText" class="text-xs font-mono font-bold text-rose-400">
              ❤️ ${e.restingHr} BPM
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
            <button type="button" id="btnScanBLE" class="py-2.5 px-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition text-center">
              📡 Bluetooth LE Bağla
            </button>
            <button type="button" id="btnHealthConnect" class="py-2.5 px-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition text-center">
              🏥 Health Connect Aç
            </button>
          </div>

          <p id="sleepSyncStatusLog" class="text-[10px] font-mono text-slate-400 truncate">
            ${e.lastSyncTime?`Son Senkronizasyon: ${e.lastSyncTime}`:`Akıllı bileklik veya Health Connect ile bağlanın.`}
          </p>
        </div>

        <!-- Sleep Metrics & Circular Score Dial -->
        <div class="grid grid-cols-2 gap-3 items-center">
          
          <!-- Quality Dial -->
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center">
            <div class="relative w-24 h-24 rounded-full border-4 ${e.qualityScore>=80?`border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]`:`border-amber-500`} flex flex-col items-center justify-center">
              <span class="text-2xl font-black font-mono text-white">%${e.qualityScore}</span>
              <span class="text-[9px] font-mono text-slate-400 font-bold uppercase">SKOR</span>
            </div>
            <span class="text-xs font-bold ${e.qualityScore>=80?`text-emerald-400`:`text-amber-400`} mt-2 block">
              ${e.qualityScore>=80?`⚡ Tam Dinlenmiş`:`Orta Kalite`}
            </span>
          </div>

          <!-- Metrics Bento -->
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-slate-400">Toplam Uyku:</span>
              <span class="font-bold text-white font-mono">${t} Saat</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-purple-400">Derin Uyku:</span>
              <span class="font-bold text-white font-mono">${n} Saat</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span class="text-cyan-400">REM Uykusu:</span>
              <span class="font-bold text-white font-mono">${r} Saat</span>
            </div>
          </div>

        </div>

        <!-- File Upload for Health Data -->
        <div class="p-3 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800 text-center space-y-2">
          <span class="text-[11px] text-slate-400 block">Samsung Health / Apple Health / Takeout İçe Aktar (JSON/CSV)</span>
          <input type="file" id="healthFileInput" accept=".json,.csv" class="hidden" />
          <button type="button" id="btnUploadHealthFile" class="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold">
            📁 Dosya Seç ve Yükle ➔
          </button>
        </div>

        <!-- Apply Buff & Close Button -->
        <button type="button" id="btnClaimSleepBuff" class="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          ⚡ BİYOMETRİK BUFF'I ETKİNLEŞTİR (+%15 XP)
        </button>

      </div>
    </div>
  `}function it(e){let t=document.getElementById(`btnCloseSleepModal`);t&&t.addEventListener(`click`,()=>{h({activeModal:null}),e&&e()});let n=document.getElementById(`btnScanBLE`);n&&n.addEventListener(`click`,()=>{k(),_(`medium`),et(t=>{let n=document.getElementById(`sleepSyncStatusLog`);n&&(n.textContent=t),e&&e()})});let r=document.getElementById(`btnHealthConnect`);r&&r.addEventListener(`click`,()=>{k(),_(`light`),tt()});let i=document.getElementById(`btnUploadHealthFile`),a=document.getElementById(`healthFileInput`);i&&a&&(i.addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,t=>{let n=t.target.files[0];if(!n)return;let r=new FileReader;r.onload=t=>{let r=nt(t.target.result);r.success?(A(),_(`success`),h({sleepData:{...m().sleepData,connected:!0,deviceName:n.name,totalMinutes:r.totalMinutes,deepMinutes:r.deepMinutes,remMinutes:r.remMinutes,lightMinutes:r.lightMinutes,qualityScore:r.qualityScore,restingHr:r.restingHr,hasRestBuff:r.qualityScore>=80,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})}}),alert(`✅ ${n.name} başarıyla ayrıştırıldı! Uyku Kalite Skoru: %${r.qualityScore}`),e&&e()):alert(`Hata: `+r.error)},r.readAsText(n)}));let o=document.getElementById(`btnClaimSleepBuff`);o&&o.addEventListener(`click`,()=>{A(),_(`success`),g(30,`VIT`),g(15,`WIL`),alert(`⚡ Tam Dinlenmiş Buff'ı etkinleştirildi! +30 VIT ve +15 WIL XP kazandın!`),h({activeModal:null}),e&&e()})}function $(){let e=m(),t=document.getElementById(`app`);if(!t)return;let n=``;e.activeTab===`quests`?n=ye():e.activeTab===`roadmap`?n=xe():e.activeTab===`tools`?n=Ce():e.activeTab===`cards`?n=Ee():e.activeTab===`profile`&&(n=ke());let r=``;!e.onboardingDone||e.activeModal===`assessment`?r=Ie():e.activeModal===`meditation`?r=ze():e.activeModal===`workout`?r=qe():e.activeModal===`pomodoro`?r=Xe():e.activeModal===`sleep`?r=rt():e.activeModal===`books`&&(r=De()),t.innerHTML=`
    <div class="min-h-screen bg-[#080B11] text-slate-100 pb-24 selection:bg-cyan-500 selection:text-black">
      
      <!-- Top Glow Aura -->
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-cyan-500/10 blur-[90px] pointer-events-none"></div>

      <!-- Main Shell Container -->
      <main class="max-w-xl mx-auto px-3.5 pt-3.5 space-y-4">
        ${ae()}
        <section id="tabContentContainer" class="min-h-[500px]">
          ${n}
        </section>
      </main>

      <!-- Bottom Dock Navigation -->
      ${Ne()}

      <!-- Modals Container -->
      <div id="modalSlot">
        ${r}
      </div>

    </div>
  `,Pe($),e.activeTab===`quests`?be($):e.activeTab===`roadmap`?Se($):e.activeTab===`tools`?we($):e.activeTab===`cards`?Oe($):e.activeTab===`profile`&&je($),!e.onboardingDone||e.activeModal===`assessment`?Le($):e.activeModal===`meditation`?Be($):e.activeModal===`workout`?Je($):e.activeModal===`pomodoro`?Ze($):e.activeModal===`sleep`?it($):e.activeModal===`books`&&Oe($)}document.addEventListener(`DOMContentLoaded`,()=>{ee(),$(),te(()=>{})});