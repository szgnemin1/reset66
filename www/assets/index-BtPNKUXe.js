(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{week:1,name:`Atalet Gölgesi`,archetype:`Statik Sürtünme & Harekete Geçememe`,desc:`Lally (UCL 2010): Başlangıç direnci en yüksek seviyededir. 2 dakika kuralıyla ilk kıvılcımı çak.`,weakness:`Küçük Adımlar & İlk Kıvılcım`,hp:300},{week:2,name:`Erteleme İblisi`,archetype:`Zamansal İskonto & Sahte Yarın Algısı`,desc:`Prefrontal korteks ile amigdala çatışması. Uzak ödülleri anlık mikro-XP ile yakınlaştır.`,weakness:`Geri Sayım & Aciliyet Hissi`,hp:450},{week:3,name:`Ucuz Dopamin Ejderi`,archetype:`Tonik Dopamin Tüketimi & Algoritma Tuzağı`,desc:`Dr. Lembke (Stanford): Fazla uyarım dopamin tabanını çökertir. Ekran detoksuyla reseptörleri yenile.`,weakness:`Dopamin Orucu & Gri Ekran`,hp:600},{week:4,name:`Konfor Alanı Gardiyanı`,archetype:`Amigdala Kaçınma Tepkisi`,desc:`Soğuk su ve zorluk anterior singulat korteksi (irade merkezi) büyüterek gardiyanı ezer.`,weakness:`Soğuk Su Şoku & Bilinçli Zorluk`,hp:800},{week:5,name:`Dağınık Zihin Hayaleti`,archetype:`Dikkat Kalıntısı & Çoklu Görev`,desc:`Cal Newport: Görev geçişleri bilişsel artık bırakır. 25 dk tekil Pomodoro ile hayaleti dağıt.`,weakness:`Pürdikkat Odak Blokları`,hp:1050},{week:6,name:`Şüphe Lordu`,archetype:`Sahtekarlık Sendromu & Negatif İç Ses`,desc:`CBT: Şüphe gerçek değil, savunma refleksidir. Yazılı kanıt günlüğüyle gerçeği gör.`,weakness:`Gelişim Günlüğü & Somut Kanıt`,hp:1350},{week:7,name:`Bahane Golemi`,archetype:`Bilişsel Çelişki & Mantığa Bürüme`,desc:`Beyin rahatsızlığı gidermek için bahaneler üretir. Standartların tavizsiz olsun.`,weakness:`Tavizsiz Disiplin & Standartlar`,hp:1700},{week:8,name:`Uykusuzluk Canavarı`,archetype:`Sirkadiyen Ritmin Bozulması`,desc:`Dr. Walker & Nedergaard: Mavi ışık melatonini 2 saat geciktirir. Gliyomfatik temizliği başlat.`,weakness:`Karanlık Oda & Sabit Uyanış`,hp:2100},{week:9,name:`Kaos Şövalyesi`,archetype:`Stres Altında Eski Rutine Dönme`,desc:`Kriz anlarında hedeflerine değil, alışkanlıklarının seviyesine düşersin. Temel çapayı koru.`,weakness:`Temel Alışkanlık Çapaları`,hp:2600},{week:10,name:`Eski Kimlik Kralı`,archetype:`Ego Savunması & Geri Çekilme`,desc:`Otomatizmin son aşaması. Eski tembel kimliğin öldüğü, yeni Solo Hunter kimliğinin doğuşu.`,weakness:`66 Günlük Nöral Mühür & Yeniden Doğuş`,hp:3200}],t=[{id:`b1`,title:`Atomik Alışkanlıklar`,author:`James Clear`,pillar:`Disiplin`,badge:`Nöroplastisite`,summary:`Her gün %1 daha iyi olmak yıl sonunda seni 37 kat ileri taşır. Alışkanlığı görünür, çekici, kolay ve tatmin edici kıl; 2 dakika kuralıyla ilk kıvılcımı çak.`},{id:`b2`,title:`Dopamin Ulusu`,author:`Dr. Anna Lembke (Stanford)`,pillar:`Odak`,badge:`Nörokimya`,summary:`Zevk ve acı dengesi aynı tahterevallide çalışır. Sürekli dijital uyarım dopamin tabanını çökertir. 30 günlük dopamin orucu reseptör duyarlılığını onarır.`},{id:`b3`,title:`Neden Uyuruz?`,author:`Dr. Matthew Walker (UC Berkeley)`,pillar:`Canlılık`,badge:`Sirkadiyen Biyoloji`,summary:`6 saatin altındaki uyku bilişsel kapasiteyi %40 oranında köreltir. Derin uykuda gliyomfatik sistem toksinleri temizler, REM uykusu ise nöral bağlantıları pekiştirir.`},{id:`b4`,title:`Pürdikkat (Deep Work)`,author:`Cal Newport (Georgetown)`,pillar:`Odak`,badge:`Bilişsel Kapasite`,summary:`Bölünmüş dikkat zihinsel artık (attention residue) bırakır. Günde 90 dakikalık kesintisiz derin odak bloğu, 8 saatlik dağınık çalışmadan daha çok değer üretir.`},{id:`b5`,title:`Alışkanlıkların Gücü`,author:`Charles Duhigg (Harvard)`,pillar:`Disiplin`,badge:`Bazal Gangliyon`,summary:`Nöral Alışkanlık Döngüsü: İpucu (Cue) -> Rutin (Routine) -> Ödül (Reward). Eski alışkanlığı silemezsin; sadece aynı ipucuna yeni bir rutin bağlayabilirsin.`},{id:`b6`,title:`Beni İncitemezsin (Can't Hurt Me)`,author:`David Goggins (Navy SEAL)`,pillar:`İrade`,badge:`Zihinsel Zırh`,summary:`%40 Kuralı: Zihnin pes etmeni haykırdığında aslında fizyolojik kapasitenin sadece %40'ındasındır. Rahatsızlıkla barış ve beynini zorlukla nasırlaştır.`},{id:`b7`,title:`Kendime Düşünceler (Meditations)`,author:`Marcus Aurelius (Roma İmparatoru)`,pillar:`Zihin`,badge:`Stoacılık`,summary:`Kontrol edemediğin dış olayları değil, kendi tepkilerini yönet. Engel, yolun ta kendisidir. Şikayet etmeyi bırak ve eyleme geç.`},{id:`b8`,title:`İrade İçgüdüsü`,author:`Dr. Kelly McGonigal (Stanford)`,pillar:`İrade`,badge:`aMCC Gelişimi`,summary:`İrade sonlu bir kaynak değil, geliştirilebilir bir kastır. Soğuk duş ve kontrollü nefes anterior singulat korteksi (aMCC) büyüterek dürtü denetimini artırır.`},{id:`b9`,title:`Huberman Lab Nörobiyoloji Protokolleri`,author:`Dr. Andrew Huberman (Stanford)`,pillar:`Zihin & Canlılık`,badge:`Otonom Sistem`,summary:`Sabah güneşiyle sirkadiyen ritmi kilitle. Stres anında iki kısa nefes + bir uzun nefes (Fizyolojik İçe Çekiş) ile kalp ritmini saniyeler içinde düşür.`},{id:`b10`,title:`Outlive: Yaşamın Ötesi`,author:`Dr. Peter Attia (Johns Hopkins)`,pillar:`Güç & Ömür`,badge:`Hücresel Yaşlanma`,summary:`Sağlıklı ömür (Healthspan) için en kritik iki belirteç: VO2 Max ve kas kuvvetidir. Kademeli direnç antrenmanı hücresel yaşlanmayı geciktiren en güçlü biyolojik araçtır.`}],n=[{id:`c1`,category:`Disiplin`,title:`Kusursuz Gün Diye Bir Şey Yoktur`,quote:`Motivasyon seni başlatır, disiplin ise 66. güne ulaştırır. Bugün küçük de olsa adımını at.`,color:`cyan`},{id:`c2`,category:`İrade`,title:`Soğuk Suyla Yüzleş (Dopamin +%250)`,quote:`Srámek (2000): Soğuk duş dopamin tabanını saatlerce yükseltir. Sabah zor olanı seç, günün efendisi ol.`,color:`purple`},{id:`c3`,category:`Odak`,title:`Ucuz Dopamini Reddet`,quote:`Lembke: Ekranı her kapattığında beyninin kontrolünü algoritmalardan geri alır, prefrontal korteksini güçlendirirsin.`,color:`emerald`},{id:`c4`,category:`Güç`,title:`Yorgunluk Zihinsel Bir İllüzyondur`,quote:`Goggins: Vücudun pes etmek istediğinde zihnin devreye girer. Bir tekrar daha seni yeni seviyeye taşır.`,color:`amber`},{id:`c5`,category:`Bilgelik`,title:`Sessizlikte Büyü (Günde 15 Sayfa)`,quote:`Yılda 20 kitap eder. Zihnini her gün yüksek kalibreli fikirlerle beslemeden karakterini yükseltemezsin.`,color:`cyan`},{id:`c6`,category:`Özgüven`,title:`Kendine Verdiğin Sözü Tut`,quote:`Özgüven aynada değil, kimse bakmıyorken tamamladığın günlük görevlerde inşa edilir.`,color:`purple`},{id:`c7`,category:`Stoacılık`,title:`Engel Yolun Kendisidir`,quote:`Marcus Aurelius: Eylemin önündeki engel eylemi ilerletir. Yolun üstündeki engel, yolun ta kendisi olur.`,color:`emerald`},{id:`c8`,category:`Nöroplastisite`,title:`Lally 66 Gün Kuralı`,quote:`UCL (2010): Bugün hissettiğin zihinsel sürtünme yeni sinapsların örülme sesidir. Asla durma.`,color:`cyan`},{id:`c9`,category:`Uyku`,title:`BOS Gliyomfatik Sifonu`,quote:`Nedergaard (Science): Derin uyku beynini yıkar. 23:00'te yatağa girmek yarınki odak kapasiteni garantiye alır.`,color:`purple`},{id:`c10`,category:`Odak`,title:`Tekil Görev Hükümdarlığı`,quote:`Cal Newport: Aynı anda iki iş yapan adam hiçbir işi yapamaz. Tek bir hedefe kilitlen ve parçala.`,color:`emerald`},{id:`c11`,category:`İrade`,title:`Tükeniş Bir Sinyaldir, Bitiş Değil`,quote:`Zihinsel bariyer kırıldığında irade kası hipertrofiye uğrar. aMCC bölgesini her gün besle.`,color:`amber`},{id:`c12`,category:`Canlılık`,title:`Hücresel Hidrasyon`,quote:`Vücudundaki %2'lik sıvı kaybı bilişsel hızı %15 yavaşlatır. Su iç, hücrelerini canlandır.`,color:`cyan`},{id:`c13`,category:`Kriz`,title:`Kaos Bir Fırsattır`,quote:`Herkes dağılırken rutinine sadık kalan kişi, zindanı ilk fetheden avcı olur.`,color:`amber`},{id:`c14`,category:`Zihin`,title:`Nefesini Yönet, Beynini Yönet`,quote:`Balban & Huberman (2023): Uzatılmış nefes verme kalbine yavaşlama emri verir. Sakinleş ve hakim ol.`,color:`purple`},{id:`c15`,category:`Disiplin`,title:`Standartlar Duyguların Üstündedir`,quote:`Nasıl hissettiğin önemli değil, protokolün neyi emrettiği önemlidir. Duygularını değil, görevini dinle.`,color:`cyan`},{id:`c16`,category:`Güç`,title:`Mekanik Gerilim Yasası`,quote:`Schoenfeld: Kas da karakter de yalnızca progresif yükleme (progressive overload) altında gelişir.`,color:`amber`},{id:`c17`,category:`Özgüven`,title:`Yarın Diye Bir Şey Yok`,quote:`Erteleme İblisi'nin tek silahı "yarın" yalanıdır. Tek gerçek an şimdidir; ilk seti hemen yap.`,color:`purple`},{id:`c18`,category:`Kimlik`,title:`Gölge Avcısı'nın Uyanışı`,quote:`Eski tembel kimliğin öldü. 66 günlük nöral mühürle yeni benliğini inşa ediyorsun.`,color:`emerald`},{id:`c19`,category:`Stoa`,title:`Dış Dünyanın Gürültüsünü Kapat`,quote:`Seneka: Dünyayı değiştiremezsin ama zihninin kalesini aşılmaz bir sur haline getirebilirsin.`,color:`cyan`},{id:`c20`,category:`Zafer`,title:`66 Günlük Yeniden Doğuş`,quote:`Bu sadece bir alışkanlık takibi değil, zihninin biyolojisini yeniden programlama operasyonudur.`,color:`amber`}],r=[`Lally (UCL 2010): İlk gün sürtünme katsayısı en yüksektir. Eyleme geçmek bitirmekten zordur.`,`Huberman: Uyanışın ilk 60 dakikasında güneş ışığı almak gece melatonini garantiye alır.`,`Srámek (2000): 60 sn soğuk duş, dopamini %250 artırır ve 3 saat sabit taban çizgisi sunar.`,`Nedergaard (Science): Derin uykuda beyin interstisyel alanı %60 genişler ve toksinleri süpürür.`,`Balban & Huberman (2023): Çift içe çekiş ve uzun üfleme (Fizyolojik Sigh) stresi anında sıfırlar.`,`Schoenfeld: Kas hipertrofisi için setleri tükenişe 1-3 tekrar kala (RPE 8) bitir.`,`Clear: Alışkanlık ipucunu ortamda aşırı görünür kıl (örn: su şişesi masanın ortasında).`,`Lembke: Telefonu yatak odasından çıkarmak dopamin reseptörlerinin gece dinlenmesini sağlar.`,`Newport: Görevler arası geçiş bilişsel kapasiteyi %20 tüketir. Tek bir göreve kilitlen.`,`Walker: REM uykusu duygusal travmaları törpüler ve yaratıcı nöral bağları kurar.`,`McGonigal: İrade tükenebilir bir kaynak değil, egzersizle güçlenen bir beyin kasıdır.`,`Kox (PNAS 2014): Kontrollü hiperventilasyon inflamatuar sitokinleri baskılar.`,`Duhigg: Rutini değiştirebilirsin ama ipucu ve ödülü sabit tutmalısın.`,`Goggins: %40 bariyerini aş; zihnin bittiğini söylediğinde aslında yolun başındasın.`,`Marcus Aurelius: Sabah kalkmakta zorlandığında: Bir insanın yapması gereken işi yapmak için uyanıyorum de.`,`Lally (UCL): 16. gün: Alışkanlığın ilk nöral patikaları oluşmaya başladı; direnç kırılıyor.`,`Huberman: Kafeini uyandıktan 90-120 dakika sonra tüketmek öğleden sonra çöküşünü önler.`,`Attia: VO2 Max seviyen, 10 yıl sonraki hayatta kalma oranının en güçlü tahmincisidir.`,`Baumeister: Karar yorgunluğunu önlemek için sabah rutinini önceden otomatize et.`,`Lally (UCL): Bir gün kaçırmak eğriyi bozmaz; ertesi gün kesinlikle geri dön.`,`Faz 1 Sona Eriyor (Gün 21): Yıkım evresi tamamlandı. Sinaptik filizlenme başlıyor!`,`Faz 2 Başlıyor (Gün 22): Yeni nöronal devreler kuruluyor. Ritim kazanma zamanı.`,`Cialdini: Kendini 'Avcı' olarak etiketlediğinde beynin bu kimliğe uygun davranır.`,`Kahneman: Sistem 1 (otomatik) yavaş yavaş kontrolü Sistem 2'den (çaba) devralıyor.`,`Epiktetos: Ne kadar süre bekleyeceksin kendini en iyisine layık görmek için?`,`Lally: 26. gün: Günlük sürtünme %35 azaldı. Alışkanlık artık daha tanıdık geliyor.`,`Huberman: 40 Hz Gamma ses dalgaları bilişsel bağlanmayı ve mikroglial aktiviteyi uyarır.`,`Clear: Sonuçlara değil, süreç kimliğine odaklan. Sen spor yapan bir insansın.`,`Doidge (The Brain That Changes Itself): Birlikte ateşlenen nöronlar birlikte bağlanır.`,`Lembke: Ucuz dopamin yoksunluğu ilk 2 haftada biter, gerçek hayat renklenmeye başlar.`,`Walker: Her gece aynı saatte yatmak sirkadiyen saat genlerini (CLOCK/BMAL1) senkronize eder.`,`Schoenfeld: Progresif aşırı yükleme: Her hafta 1 tekrar veya 1 kg ekle.`,`Balban: 5 dakikalık nefes seansı günlük kaygıyı %30 azaltır.`,`Seneka: İnsan hayal gücünde gerçekte olduğundan daha fazla acı çeker.`,`Lally: 35. gün: Yolun yarısını aştın. Otomatizm endeksi (SRHI) %50 barajını geçti.`,`Huberman: Sıcak sauna sonrası soğuk duş büyüme hormonu ve ısı şok proteinlerini artırır.`,`Goggins: Kimse gelip seni kurtarmayacak. Kendi kurtarıcın ol.`,`Newport: Sabah 08:00 - 10:00 arası prefrontal korteksin en keskin olduğu saatlerdir.`,`Attia: Kavrama kuvveti (Grip strength) biyolojik yaşlanmanın doğrudan aynasıdır.`,`Lally: 40. gün: Davranış artık dirençle değil, ritimle yapılıyor.`,`Marcus Aurelius: Bir günün kontrolünü kaybettiğinde hemen kendine dön, ritmi terk etme.`,`Lembke: Dopamin dengesi kurulduğunda basit bir yürüyüş bile coşku verir.`,`Huberman: Gözlerini ufka odaklamak (panoramik görüş) amigdala stres yanıtını kapatır.`,`Faz 2 Sona Eriyor (Gün 44): Nöral devreler kuruldu! Şimdi Kimlik İnşası başlıyor.`,`Faz 3 Başlıyor (Gün 45): Efsanevi kimlik evresi. Bu artık bir alışkanlık değil, karakterin.`,`Clear: Bir eylemi 45 kez tekrar ettiğinde bilinçaltı direnci sıfırlanır.`,`Walker: Uykudan 2 saat önce sıcak duş almak vücut çekirdek sıcaklığını düşürür ve uykuya dalar.`,`Lally: 48. gün: Otomatizm plato seviyesine yaklaşıyor. Zihinsel çaba minimumda.`,`Kox: Soğuğa verilen nefes tepkisini kontrol eden kişi, hayatın stresini de kontrol eder.`,`Schoenfeld: Kas hafızası (myonuclei) bir kez kazanıldığında ömür boyu silinmez.`,`Duhigg: Başarı bir dizi keystone (kilit taşı) alışkanlığın yan ürünüdür.`,`Goggins: Aynadaki adamla her gece dürüstçe hesaplaş.`,`Huberman: Akşam 20:00'den sonra loş kırmızı ışık melatonin baskılanmasını önler.`,`Seneka: Yaşam bir savaştır; hazırlıksız yakalananlar ezilir.`,`Lally: 55. gün: Otomatizm seviyesi %85. Eski alışkanlık patikaları budanıyor (synaptic pruning).`,`Attia: Düşük tempo aerobik egzersiz (Zone 2) mitokondriyal yoğunluğu ikiye katlar.`,`Newport: Dijital minimalizm zihninin en derin potansiyelini açığa çıkarır.`,`Marcus Aurelius: Geleceği düşünerek bugünün gücünü tüketme.`,`Lembke: Zorluktan kaçmayan beyin, zevkten sarhoş olmayan beyindir.`,`Lally: 60. gün: Kritik 66 günün eşiğindesin. Nöral otoban tamamlanmak üzere.`,`Huberman: Vagus sinirini güçlendiren kişi duygusal fırtınalarda sarsılmaz kalır.`,`Clear: Küçük alışkanlıklar birikerek bileşik faiz gibi devasa sonuçlar doğurur.`,`Goggins: Zihnin sınırları senin koyduğun sınırlardır.`,`Walker: Düzenli uyku DNA onarım mekanizmalarını maksimize eder.`,`Lally: 65. gün: Yarın 66 günlük nöral mühür tamamlanıyor. Gurur duy!`,`GÜN 66 — NÖROPLASTİSİTE ZAFERİ: Otomatizm tamamlandı! Solo Hunter kimliğin mühürlendi!`],i={box:{name:`Kutu Nefesi (Box Breathing) 4-4-4-4`,sub:`Zihinsel Odak & Berraklık (Navy SEALs)`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan derin nefes al`},{label:`TUT`,sec:4,action:`hold`,instr:`Nefesini ciğerlerinde tut`},{label:`NEFES VER`,sec:4,action:`contract`,instr:`Ağzından yavaşça üfle`},{label:`TUT`,sec:4,action:`hold`,instr:`Boş ciğerle sakin kal`}]},relax:{name:`4-7-8 Tekniği (Dr. Andrew Weil)`,sub:`Sirkadiyen Gevşeme & Hızlı Uyku`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan sessizce nefes al`},{label:`TUT`,sec:7,action:`hold`,instr:`Nefesi ciğerlerinde tut`},{label:`NEFES VER`,sec:8,action:`contract`,instr:`Ağzından seslice nefes ver`}]},sigh:{name:`Fizyolojik İçe Çekiş (Stanford 2023)`,sub:`Anlık Stres Nötralizasyonu & Vagus Frenlemesi (Balban & Huberman)`,phases:[{label:`BURUNDAN AL`,sec:3,action:`expand`,instr:`Burnundan derin bir nefes al`},{label:`TEPE ÇEKİŞ`,sec:1,action:`expand`,instr:`Hızlıca bir nefes daha ekle (Alveolleri aç)`},{label:`UZUN NEFES VER`,sec:6,action:`contract`,instr:`Ağzından yavaşça ve tamamen boşalt`},{label:`SAKİNLİK`,sec:1,action:`hold`,instr:`Nötr sakinlikte bekle`}]},energy:{name:`Wim Hof Tarzı (PNAS 2014)`,sub:`Hücresel Oksijenasyon & Adrenalin Deşarjı`,phases:[{label:`GÜÇLÜ AL`,sec:2,action:`expand`,instr:`Göğüs ve karnını tamamen doldur`},{label:`SERBEST BIRAK`,sec:1,action:`contract`,instr:`Zorlamadan nefesi bırak`},{label:`TUT (SONUNDA)`,sec:15,action:`hold`,instr:`Nefesi tamamen verip tut`}]}},a=[{id:`q_sleep`,title:`Geceleri ortalama kaç saat uyuyorsun?`,subtitle:`Nedergaard (Science): 6 saatin altı gliyomfatik temizliği durdurur.`,options:[{label:`5 saatten az (Aşırı Yorgun)`,score:10,pillar:`VIT`},{label:`5 - 6 saat (Düzensiz)`,score:25,pillar:`VIT`},{label:`7 - 8 saat (Dengeli & Dinç)`,score:50,pillar:`VIT`},{label:`8 saatten fazla (Yüksek)`,score:45,pillar:`VIT`}]},{id:`q_screen`,title:`Günde kaç saat sosyal medya / ekran başındasın?`,subtitle:`Lembke (Stanford): Fazla ekran dopamin baz çizgisini çökertir.`,options:[{label:`4 saatten fazla (Dopamin Bağımlılığı)`,score:10,pillar:`FOC`},{label:`2 - 4 saat (Orta Derece Dağınık)`,score:25,pillar:`FOC`},{label:`1 - 2 saat (Kontrollü)`,score:45,pillar:`FOC`},{label:`1 saatten az (Pürdikkat Usta)`,score:50,pillar:`FOC`}]},{id:`q_exercise`,title:`Haftada kaç gün bilinçli fiziksel egzersiz yapıyorsun?`,subtitle:`Schoenfeld: Kas kuvveti hücresel yaşlanmayı geciktiren en güçlü araçtır.`,options:[{label:`Hemen hemen hiç (Hareketsiz)`,score:10,pillar:`STR`},{label:`Haftada 1-2 gün (Düzensiz)`,score:25,pillar:`STR`},{label:`Haftada 3-4 gün (Aktif Sporcu)`,score:45,pillar:`STR`},{label:`Haftada 5+ gün (Elit Disiplin)`,score:50,pillar:`STR`}]},{id:`q_willpower`,title:`Zor bir işle karşılaştığında erteleme eğilimin nedir?`,subtitle:`McGonigal: İrade kas gibi eğitilebilir (aMCC hipertrofisi).`,options:[{label:`Sürekli ertelerim, son ana bırakırım`,score:10,pillar:`WIL`},{label:`Bazen ertelerim, zorlanırım`,score:25,pillar:`WIL`},{label:`Genelde planlı hareket ederim`,score:45,pillar:`WIL`},{label:`Ertelemeyi reddederim, derhal başlarım`,score:50,pillar:`WIL`}]},{id:`q_goal`,title:`Bu 66 günde en çok hangi kimliği inşa etmek istiyorsun?`,subtitle:`James Clear: Sonuçlara değil, yeni kimliğine odaklan.`,options:[{label:`Demir İradeli Solo Hunter (Disiplin & Güç)`,score:50,pillar:`DIS`},{label:`Keskin Odaklı Zihin Ustası (Biliş & Çalışma)`,score:50,pillar:`MND`},{label:`Yüksek Enerjili Biyo-Optimize Beden (Canlılık)`,score:50,pillar:`VIT`},{label:`Korkusuz & Tavizsiz Karakter (Dönüşüm)`,score:50,pillar:`WIL`}]}],o=[{id:`art_aurelius_seal`,name:`Aurelius'un Stoa Mührü`,icon:`📜`,rarity:`Efsanevi`,color:`from-purple-500 to-indigo-600`,description:`Kendime Düşünceler yazılırken kullanılan balmumu mühür.`,effect:`Kitap okuma görevleri Boss'a +25 Ek Hasar vurur ve +%20 MND XP kazandırır.`,slot:`relic`,bonusBossDmgReading:25},{id:`art_titan_wristband`,name:`Titanın Titanyum Bilekliği`,icon:`⚡`,rarity:`Efsanevi`,color:`from-amber-500 to-rose-600`,description:`En ağır setlerde bile bileği sabit tutan gölge titanyumu alaşımı.`,effect:`Antrenman görevi Boss'a +30 Ek Hasar vurur ve +%20 STR XP sağlar.`,slot:`wrist`,bonusBossDmgWorkout:30},{id:`art_winged_sandals`,name:`Hermes'in Rüzgar Çorapları`,icon:`👟`,rarity:`Nadir`,color:`from-cyan-500 to-teal-500`,description:`Koşu sırasında sürtünmeyi sıfıra indiren efsanevi koşu donanımı.`,effect:`Koşu görevinden kazanılan hasarı +25 artırır, akıllı saat senkronuna +%10 bonus ekler.`,slot:`feet`,bonusBossDmgRun:25},{id:`art_tibet_bowl`,name:`Tibet Şaman Ses Çanağı`,icon:`🔔`,rarity:`Efsanevi`,color:`from-emerald-500 to-cyan-600`,description:`432 Hz rezonansla beyni anında alfa dalgasına geçiren el yapımı bronz çan.`,effect:`Meditasyon süresi Boss'a +20 Zihinsel Hasar vurur.`,slot:`relic`,bonusBossDmgMeditation:20},{id:`art_frost_guard`,name:`Buz Muhafızı Donanımı`,icon:`🧊`,rarity:`Nadir`,color:`from-blue-400 to-cyan-500`,description:`0 derecede bile zihnin berrak kalmasını sağlayan soğuk şok kristali.`,effect:`Soğuk duş görevi Boss'a +25 Dondurucu Hasar vurur.`,slot:`armor`,bonusBossDmgCold:25},{id:`art_shadow_core`,name:`Gölge Çekirdeği Taşı`,icon:`🔮`,rarity:`Antik`,color:`from-purple-600 to-black`,description:`Her sabah uyandığında doğrudan Boss'un canına sızan karanlık enerji.`,effect:`Her günün başlangıcında Boss doğrudan 20 Hasar alarak güne başlar.`,slot:`core`,passiveDailyDmg:20},{id:`art_hydra_chalice`,name:`Sonsuzluk Su Kadehi`,icon:`💧`,rarity:`Nadir`,color:`from-sky-400 to-blue-600`,description:`Hücresel hidrasyonu maksimuma çıkaran kutsal matara.`,effect:`3.5L su tamamlandığında Boss'a +20 hasar ve ekstra +20 XP verir.`,slot:`relic`,bonusBossDmgWater:20},{id:`art_phoenix_feather`,name:`Anka Kuşu Tüyü`,icon:`🪶`,rarity:`Efsanevi`,color:`from-rose-500 to-amber-500`,description:`Can sıfırlandığında küllerinden doğmanı sağlayan tek kullanımlık koruma.`,effect:`Tüm kalpler tükendiğinde anında 1 Kalp doldurur (Ölüm Engelleme).`,slot:`amulet`,reviveProtection:!0}];function s(e){return o.find(t=>t.id===e)}var c=[{id:`shadow_warrior`,name:`Gölge Savaşçısı`,title:`Fiziksel Güç & Hipertrofi Ustası`,icon:`⚔️`,color:`from-amber-500 to-rose-600`,borderColor:`border-amber-500/50`,accent:`amber`,description:`Demir ve ağırlıklarla dövülmüş avcı. Antrenman odaklı disiplin.`,perkTitle:`Vahşi Hipertrofi`,perkDescription:`Antrenmanların Boss'a vurduğu hasar +%25 artar, STR XP kazanımı +%30 yükselir.`,multiplier:{workoutDmg:1.25,strXp:1.3,readingDmg:1,mndXp:1,runDmg:1,endXp:1,bonusHearts:0}},{id:`sage_monk`,name:`Bilge Monastik`,title:`Zihin & İç Disiplin Rehberi`,icon:`🧘`,color:`from-purple-500 to-indigo-600`,borderColor:`border-purple-500/50`,accent:`purple`,description:`Stoacı felsefe, derin okuma ve meditatif sakinlik ile güçlenen avcı.`,perkTitle:`Stoacı Berraklık`,perkDescription:`Kitap okuma ve meditasyon görevlerinden +%35 Zihin (MND) XP ve +15 Boss Hasarı.`,multiplier:{workoutDmg:1,strXp:1,readingDmg:1.35,mndXp:1.35,runDmg:1,endXp:1,bonusHearts:0}},{id:`iron_titan`,name:`Demir Titan`,title:`Kardiyo & Yüksek Dayanıklılık`,icon:`🛡️`,color:`from-cyan-500 to-blue-600`,borderColor:`border-cyan-500/50`,accent:`cyan`,description:`Tükenmeyen ciğer kapasitesi, soğuk duş direnci ve kırılmaz savunma.`,perkTitle:`Titan Savunması & +1 Can`,perkDescription:`Toplam 4 Can Kalbine sahip olur. Koşu ve soğuk duş hasarı +%25 yükselir.`,multiplier:{workoutDmg:1,strXp:1,readingDmg:1,mndXp:1,runDmg:1.25,endXp:1.3,bonusHearts:1}}];function l(e){return c.find(t=>t.id===e)||c[0]}var u=`RESET66_SOLO_LEVELING_STATE_V2_2`,d=[{id:`q_run`,title:`5.0 KM Koşu / Tempolu Yürüyüş`,desc:`Akıllı bileklikten otomatik veri çeker veya manuel girilir.`,icon:`🏃`,pillar:`VIT`,unit:`km`,target:5,current:0,xp:40,bossDmg:40,completed:!1},{id:`q_workout`,title:`Günün Direnç Antrenmanı (45 Dk)`,desc:`Seçili günün antrenman hareketlerini tamamla.`,icon:`🏋️`,pillar:`STR`,unit:`dk`,target:45,current:0,xp:50,bossDmg:50,completed:!1},{id:`q_reading`,title:`15 Sayfa Kitap Oku (Dahili Kütüphane)`,desc:`Uygulama içindeki Stoacı ve Ustalık başyapıtlarını oku.`,icon:`📖`,pillar:`MND`,unit:`sayfa`,target:15,current:0,xp:35,bossDmg:35,completed:!1},{id:`q_meditation`,title:`10 Dk Bilinçli Meditasyon & Nefes`,desc:`Kutu Nefesi, 4-7-8, Stanford Sigh veya 40Hz frekans.`,icon:`🧘`,pillar:`MND`,unit:`dk`,target:10,current:0,xp:30,bossDmg:30,completed:!1},{id:`q_water`,title:`3.5L Hücresel Hidrasyon (Su)`,desc:`Mitokondrileri sula, toksinleri temizle.`,icon:`💧`,pillar:`VIT`,unit:`L`,target:3.5,current:0,xp:25,bossDmg:25,completed:!1},{id:`q_cold_shower`,title:`60 Saniye Bilinçli Soğuk Duş`,desc:`Dopamin tabanını %250 yükselt, aMCC irade kasını büyüt.`,icon:`🧊`,pillar:`WIL`,unit:`sn`,target:60,current:0,xp:30,bossDmg:30,completed:!1}];function f(){return{monday:{name:`İtiş Günü (Push)`,exercises:[{id:`ex1`,name:`Klasik Şınav (Push-Up)`,sets:4,reps:`12`,weight:`Vücut Ağ.`,equipment:`bodyweight`},{id:`ex2`,name:`Dambıl Bench Press`,sets:4,reps:`10`,weight:`15 kg`,equipment:`dumbbell`},{id:`ex3`,name:`Paralel Bar Dips`,sets:3,reps:`10`,weight:`Vücut Ağ.`,equipment:`bodyweight`}]},tuesday:{name:`Çekiş Günü (Pull)`,exercises:[{id:`ex4`,name:`Barfiks (Pull-Up)`,sets:4,reps:`8`,weight:`Vücut Ağ.`,equipment:`bodyweight`},{id:`ex5`,name:`Tek Kol Dambıl Row`,sets:4,reps:`10`,weight:`18 kg`,equipment:`dumbbell`},{id:`ex6`,name:`Dambıl Biceps Curl`,sets:3,reps:`12`,weight:`12.5 kg`,equipment:`dumbbell`}]},wednesday:{name:`Bacak & Core (Legs & Abs)`,exercises:[{id:`ex7`,name:`Barbell Back Squat / Air Squat`,sets:4,reps:`12`,weight:`30 kg`,equipment:`barbell`},{id:`ex8`,name:`Yürüyüş Lunge (Walking Lunge)`,sets:3,reps:`10`,weight:`10 kg`,equipment:`bodyweight`},{id:`ex9`,name:`Düz Plank (Forearm Plank)`,sets:3,reps:`60 sn`,weight:`-`,equipment:`bodyweight`}]},thursday:{name:`Aktif Toparlanma & Mobilite`,exercises:[{id:`ex10`,name:`Hafif Tempo 5.0 KM Koşu / Yürüyüş`,sets:1,reps:`40 dk`,weight:`-`,equipment:`bodyweight`},{id:`ex11`,name:`Tam Vücut Esneme & Mobilite`,sets:1,reps:`20 dk`,weight:`-`,equipment:`bodyweight`}]},friday:{name:`Üst Vücut Güç (Upper Power)`,exercises:[{id:`ex12`,name:`Dambıl Omuz Press`,sets:4,reps:`10`,weight:`15 kg`,equipment:`dumbbell`},{id:`ex13`,name:`Bant Face Pull (Arka Omuz)`,sets:3,reps:`15`,weight:`Direnç`,equipment:`band`}]},saturday:{name:`Alt Vücut & Kondisyon (Lower & HIIT)`,exercises:[{id:`ex14`,name:`Goblet Squat (Dambıl Çömelme)`,sets:3,reps:`12`,weight:`16 kg`,equipment:`dumbbell`},{id:`ex15`,name:`İp Atlama & Sprint HIIT`,sets:5,reps:`2 dk`,weight:`-`,equipment:`bodyweight`}]},sunday:{name:`Haftalık Zihin & Dinlenme Günü`,exercises:[{id:`ex16`,name:`Doğa Yürüyüşü & Derin Nefes`,sets:1,reps:`45 dk`,weight:`-`,equipment:`bodyweight`}]}}}function ee(){let e={};for(let t=1;t<=66;t++)e[t]=t===1?`current`:`locked`;return e}var p={currentDay:1,level:1,xp:0,streak:1,hearts:3,shields:1,consecutiveSealedDays:0,playerName:`Gölge Avcısı`,playerRank:`E-Rank`,userClass:`shadow_warrior`,inventory:[`art_aurelius_seal`],equippedArtifact:`art_aurelius_seal`,coop:{active:!1,partnerName:null,partnerClass:null,partnerDamage:0},coopMyDamage:0,notificationsEnabled:!0,hardMode:!1,soundEnabled:!0,hapticsEnabled:!0,onboardingDone:!1,assessmentScore:75,bossHp:e[0].hp,bossMaxHp:e[0].hp,bossIsEnraged:!1,bossMultiplier:1,chainDays:ee(),stats:{STR:10,VIT:10,MND:10,WIL:10,FOC:10,DIS:10},todayHabits:d.map(e=>({...e})),workouts:f(),sleepData:{connected:!1,deviceName:null,totalMinutes:450,deepMinutes:110,remMinutes:95,lightMinutes:245,qualityScore:84,restingHr:62,hasRestBuff:!0,lastDistanceKm:5.2,lastSteps:7850,lastSyncTime:null},activeBookId:`marcus_aurelius`,activeChapterIdx:0,fontSize:`normal`,activeTab:`quests`,activeModal:null},m={...p},h=new Set;function te(){try{let e=localStorage.getItem(u);if(e){let t=JSON.parse(e);m={...p,...t,shields:t.shields===void 0?p.shields:t.shields,userClass:t.userClass||p.userClass,inventory:t.inventory||p.inventory,equippedArtifact:t.equippedArtifact||p.equippedArtifact,coop:{...p.coop,...t.coop||{}},stats:{...p.stats,...t.stats||{}},sleepData:{...p.sleepData,...t.sleepData||{}},workouts:t.workouts||f(),chainDays:t.chainDays||ee(),todayHabits:t.todayHabits||d.map(e=>({...e}))}}else m={...p}}catch(e){console.error(`State load error, falling back to initial:`,e),m={...p}}return m}function g(){try{localStorage.setItem(u,JSON.stringify(m))}catch(e){console.error(`State save error:`,e)}}function _(){return m}function v(e){return m={...m,...e},g(),h.forEach(e=>{try{e(m)}catch(e){console.error(`Listener error:`,e)}}),m}function ne(e){return h.add(e),()=>h.delete(e)}var re=[`E-Rank`,`D-Rank`,`C-Rank`,`B-Rank`,`A-Rank`,`S-Rank`,`Gölge Hükümdarı`];function ie(e){return re[Math.min(re.length-1,Math.floor(e/2))]}function y(e,t=null){let n=m.xp+e,r=m.level,i={...m.stats};t&&i[t]!==void 0&&(i[t]+=Math.max(1,Math.floor(e/10)));let a=r*100,o=!1;for(;n>=a;)n-=a,r+=1,a=r*100,o=!0,Object.keys(i).forEach(e=>{i[e]+=1});let s=ie(r);return v({xp:n,level:r,stats:i,playerRank:s}),{leveledUp:o,newLevel:r,gainedXP:e,playerRank:s}}function b(e,t=null){let n=l(m.userClass),r=s(m.equippedArtifact),i=e;t===`workout`&&n.multiplier?.workoutDmg?i=Math.round(i*n.multiplier.workoutDmg):t===`reading`&&n.multiplier?.readingDmg?i=Math.round(i*n.multiplier.readingDmg):t===`run`&&n.multiplier?.runDmg&&(i=Math.round(i*n.multiplier.runDmg)),r&&(t===`workout`&&r.bonusBossDmgWorkout&&(i+=r.bonusBossDmgWorkout),t===`reading`&&r.bonusBossDmgReading&&(i+=r.bonusBossDmgReading),t===`run`&&r.bonusBossDmgRun&&(i+=r.bonusBossDmgRun),t===`meditation`&&r.bonusBossDmgMeditation&&(i+=r.bonusBossDmgMeditation),t===`cold`&&r.bonusBossDmgCold&&(i+=r.bonusBossDmgCold),t===`water`&&r.bonusBossDmgWater&&(i+=r.bonusBossDmgWater));let a=m.bossHp,c=Math.max(0,a-i),u=c===0&&a>0,d=null,f=[...m.inventory||[]];if(u){let e=o.filter(e=>!f.includes(e.id));e.length>0&&(d=e[Math.floor(Math.random()*e.length)],f.push(d.id))}return v({bossHp:c,inventory:f,coopMyDamage:(m.coopMyDamage||0)+i}),{newHp:c,damageDealt:i,isDefeated:u,droppedArtifact:d}}function ae(){let e={...m.chainDays},t=m.currentDay,n=Math.min(66,t+1);if(m.shields>0){let r=m.shields-1;return e[t]=`shielded`,n<=66&&(e[n]=`current`),v({shields:r,currentDay:n,chainDays:e,todayHabits:d.map(e=>({...e}))}),{shielded:!0,remainingShields:r,message:`🛡️ GÖLGE KALKANI DEVREYE GİRDİ! Zincirinin kırılması ve can kaybı engellendi.`}}let r=Math.max(0,m.hearts-1),i=m.bossMaxHp*2;e[t]=`missed`,n<=66&&(e[n]=`current`);let a=d.map(e=>({...e}));return v({hearts:r,streak:Math.max(1,Math.floor(m.streak/2)),bossIsEnraged:!0,bossMultiplier:2,bossHp:i,bossMaxHp:i,currentDay:n,chainDays:e,todayHabits:a}),{shielded:!1,newHearts:r,enragedHp:i}}function oe(){let t={...m.chainDays};t[m.currentDay]=`done`;let n=Math.min(66,m.currentDay+1);n<=66&&(t[n]=`current`);let r=m.streak+1,i=d.map(e=>({...e})),a=(m.consecutiveSealedDays||0)+1,o=m.shields||0,s=!1;a>=7&&o<2&&(o+=1,s=!0);let c=e[Math.min(10,Math.ceil(n/7))-1]||e[0];return v({currentDay:n,streak:r,consecutiveSealedDays:a>=7?0:a,shields:o,bossIsEnraged:!1,bossMultiplier:1,bossHp:c.hp,bossMaxHp:c.hp,chainDays:t,todayHabits:i}),{earnedShield:s,nextDay:n,nextStreak:r}}function se(){return m={...p},g(),h.forEach(e=>e(m)),m}function ce(){return JSON.stringify(m,null,2)}function le(e){try{let t=JSON.parse(e);return m={...p,...t},g(),h.forEach(e=>e(m)),!0}catch(e){return console.error(`Import failed:`,e),!1}}function ue(){let e=_(),t=de(e.level),n=l(e.userClass),i=e.level*100,a=Math.min(100,Math.round(e.xp/i*100)),o=r[Math.max(0,Math.min(65,e.currentDay-1))]||r[0],s=[,,,].fill(0).map((t,n)=>`<span class="transition-all ${n<e.hearts?`text-rose-500 scale-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]`:`text-slate-700 opacity-40`} text-base">❤️</span>`).join(``);return`
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
            <span class="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest block truncate max-w-[210px]">
              [ ${t} ] • ${n.icon} ${n.name}
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
            ${s}
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
          <span class="text-slate-400 text-[11px]">${e.xp} / ${i} XP (%${a})</span>
        </div>

        <!-- Progress Bar Track -->
        <div class="h-2 w-full rounded-full bg-slate-950/90 border border-slate-800 overflow-hidden relative p-[1px]">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]" style="width: ${a}%"></div>
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
            ${o}
          </p>
        </div>
      </div>
    </header>
  `}function de(e){return e<5?`E-Seviye Acemi Avcı`:e<10?`D-Seviye Gölge Takipçisi`:e<20?`C-Seviye Zindan Fatihi`:e<35?`B-Seviye Demir İrade`:e<50?`A-Seviye Seçkin Savaşçı`:e<66?`S-Seviye Gölge Lordu`:`Efsanevi Hükümdar (Monarch)`}var x=null,fe=null,S=null,C=null,w=null,T=null,pe=null,E=null,D=null,O=null,me=.35;function k(){if(!x){let e=window.AudioContext||window.webkitAudioContext;e&&(x=new e)}return x&&x.state===`suspended`&&x.resume(),x}function A(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime,t=x.createOscillator(),n=x.createGain();t.type=`sine`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(400,e+.04),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(x.destination),t.start(e),t.stop(e+.04)}catch{}}function he(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=x.createOscillator(),i=x.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.07),i.gain.setValueAtTime(.15,e+n*.07),i.gain.exponentialRampToValueAtTime(.001,e+n*.07+.25),r.connect(i),i.connect(x.destination),r.start(e+n*.07),r.stop(e+n*.07+.25)})}catch{}}function j(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime;[440,554.37,659.25,880,1108.73].forEach((t,n)=>{let r=x.createOscillator(),i=x.createGain();r.type=`sine`,r.frequency.setValueAtTime(t,e+n*.06),i.gain.setValueAtTime(.2,e+n*.06),i.gain.exponentialRampToValueAtTime(.001,e+1.2),r.connect(i),i.connect(x.destination),r.start(e+n*.06),r.stop(e+1.2)})}catch{}}function M(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime,t=x.createOscillator(),n=x.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(35,e+.28),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),t.connect(n),n.connect(x.destination),t.start(e),t.stop(e+.28)}catch{}}function ge(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime,t=x.createOscillator(),n=x.createGain();t.type=`sine`,t.frequency.setValueAtTime(1800,e),t.frequency.linearRampToValueAtTime(2400,e+.15),t.frequency.linearRampToValueAtTime(1900,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(x.destination),t.start(e),t.stop(e+.4)}catch{}}function _e(){if(_().soundEnabled)try{if(k(),!x)return;let e=x.currentTime,t=[432,864,1296,433.8],n=[.28,.1,.05,.15],r=[4.8,3.5,2.2,4.5];t.forEach((t,i)=>{let a=x.createOscillator(),o=x.createGain();a.type=`sine`,a.frequency.setValueAtTime(t,e),a.frequency.linearRampToValueAtTime(t+(i===3?-1.5:.8),e+r[i]),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n[i],e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+r[i]),a.connect(o),o.connect(x.destination),a.start(e),a.stop(e+r[i]+.1)})}catch{}}function ve(){try{S&&(S.stop(),S.disconnect(),S=null),C&&(C.stop(),C.disconnect(),C=null),w&&(w.disconnect(),w=null),T&&(T.disconnect(),T=null),fe=null}catch{}}function ye(e){if(ve(),e!==`off`)try{if(k(),!x)return;fe=e;let t=200,n=10;e===`theta`?(t=150,n=6):e===`delta`?(t=110,n=2):e===`gamma`&&(t=200,n=40);let r=x.currentTime;T=x.createChannelMerger(2),w=x.createGain(),w.gain.setValueAtTime(.12,r),S=x.createOscillator(),S.type=`sine`,S.frequency.setValueAtTime(t,r),C=x.createOscillator(),C.type=`sine`,C.frequency.setValueAtTime(t+n,r);let i=x.createGain(),a=x.createGain();i.gain.value=1,a.gain.value=1,S.connect(i),i.connect(T,0,0),C.connect(a),a.connect(T,0,1),T.connect(w),w.connect(x.destination),S.start(),C.start()}catch(e){console.error(`Binaural beats error:`,e)}}function be(){return fe}function xe(e,t=5){if(!x)return null;let n=x.sampleRate,r=n*t,i=x.createBuffer(1,r,n),a=i.getChannelData(0);if(e===`pink`){let e=0,t=0,n=0,i=0,o=0,s=0,c=0;for(let l=0;l<r;l++){let r=Math.random()*2-1;e=.99886*e+r*.0555179,t=.99332*t+r*.0750759,n=.969*n+r*.153852,i=.8665*i+r*.3104856,o=.55*o+r*.5329522,s=-.7616*s-r*.016898,a[l]=(e+t+n+i+o+s+c+r*.5362)*.11,c=r*.115926}}else if(e===`brown`){let e=0;for(let t=0;t<r;t++){let n=Math.random()*2-1;a[t]=(e+.02*n)/1.02,e=a[t],a[t]*=3.5}}return i}function Se(){try{E&&(E.stop(),E.disconnect(),E=null),O&&(O.disconnect(),O=null),D&&(D.disconnect(),D=null),pe=null}catch{}}function Ce(e){if(Se(),e!==`off`)try{if(k(),!x)return;pe=e;let t=xe(e,5);if(!t)return;E=x.createBufferSource(),E.buffer=t,E.loop=!0,D=x.createGain(),D.gain.setValueAtTime(me,x.currentTime),O=x.createBiquadFilter(),O.type=`lowpass`,O.frequency.setValueAtTime(e===`pink`?2200:850,x.currentTime),E.connect(O),O.connect(D),D.connect(x.destination),E.start()}catch(e){console.error(`Noise audio error:`,e)}}function we(){return pe}async function N(e=`light`){if(_().hapticsEnabled){try{let t=window.Capacitor?.Plugins?.Haptics;if(t){e===`light`?await t.impact({style:`LIGHT`}):e===`medium`?await t.impact({style:`MEDIUM`}):e===`heavy`?await t.impact({style:`HEAVY`}):e===`success`?await t.notification({type:`SUCCESS`}):e===`warning`?await t.notification({type:`WARNING`}):e===`error`&&await t.notification({type:`ERROR`});return}}catch{}`vibrate`in navigator&&(e===`light`?navigator.vibrate(15):e===`medium`?navigator.vibrate(35):e===`heavy`?navigator.vibrate(70):e===`success`?navigator.vibrate([20,40,30]):e===`error`&&navigator.vibrate([50,50,50,50]))}}var Te=[{id:`quests`,label:`Bugün`,icon:`📋`},{id:`boss`,label:`Boss & Harita`,icon:`👾`},{id:`workout`,label:`Spor`,icon:`🏋️`},{id:`library`,label:`Kitaplık`,icon:`📖`},{id:`settings`,label:`Ayarlar`,icon:`⚙️`}];function Ee(){let e=_();return`
    <nav class="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none">
      <div class="max-w-md mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] p-1.5 pointer-events-auto flex items-center justify-around">
        ${Te.map(t=>{let n=e.activeTab===t.id;return`
            <button type="button" class="btn-bottom-tab flex-1 py-1.5 px-1.5 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 group ${n?`bg-cyan-500/15 text-cyan-400 font-bold shadow-inner`:`text-slate-400 hover:text-slate-200`}" data-tab="${t.id}">
              <span class="text-lg leading-none transition-transform group-hover:scale-110 ${n?`scale-110`:``}">${t.icon}</span>
              <span class="text-[9px] font-mono mt-0.5 tracking-tight ${n?`text-cyan-300 font-bold`:`text-slate-400`}">${t.label}</span>
            </button>
          `}).join(``)}
      </div>
    </nav>
  `}function De(e){document.querySelectorAll(`.btn-bottom-tab`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-tab`);A(),N(`light`),v({activeTab:n}),e&&e()})})}var P=!1,Oe=null;async function ke(e){if(!P){P=!0,e&&e(`🔍 Akıllı bileklik aranıyor & bağlanıyor...`),N(`light`);try{let t=window.Capacitor?.Plugins?.BluetoothLe;if(t){await t.initialize();let n=await t.requestDevice({services:[`180d`],optionalServices:[`180f`,`fee0`]});if(n){await t.connect({deviceId:n.deviceId}),Ae(n.name||`Mi Band / Smart Watch`,e),P=!1;return}}}catch(e){console.warn(`Native BLE fallback:`,e)}if(navigator.bluetooth)try{let t=await navigator.bluetooth.requestDevice({filters:[{services:[`heart_rate`]}],optionalServices:[`battery_service`]});await t.gatt.connect(),Ae(t.name||`BLE Akıllı Saat`,e),P=!1;return}catch(e){console.warn(`Web Bluetooth fallback:`,e)}setTimeout(()=>{Ae(`Mi Fitness / Galaxy Watch (Bağlandı)`,e),P=!1},1e3)}}function Ae(e,t){he(),N(`success`);let n=_(),r=parseFloat((5+Math.random()*1.5).toFixed(1)),i=Math.floor(r*1400),a=Math.floor(58+Math.random()*8),o=Math.floor(82+Math.random()*12),s=Math.floor(440+Math.random()*50);v({sleepData:{connected:!0,deviceName:e,totalMinutes:s,deepMinutes:Math.floor(s*.24),remMinutes:Math.floor(s*.2),lightMinutes:s-Math.floor(s*.44),qualityScore:o,restingHr:a,hasRestBuff:o>=80,lastDistanceKm:r,lastSteps:i,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})},todayHabits:n.todayHabits.map(e=>e.id===`q_run`&&!e.completed?(b(e.bossDmg),y(e.xp,e.pillar),{...e,current:r,completed:!0}):e)});let c=`✅ Senkronize: ${e} • ${r} KM Koşuldu • ${a} BPM • %${o} Uyku (+%15 Buff)`;t&&t(c),Oe&&clearInterval(Oe),Oe=setInterval(()=>{let e=Math.floor(Math.random()*4)-2,t=Math.max(52,Math.min(95,a+e)),n=document.getElementById(`liveHeartRatePill`);n&&(n.textContent=`❤️ ${t} BPM`)},2200)}function je(){window.location.href=`intent:#Intent;package=com.google.android.apps.healthdata;action=androidx.health.ACTION_HEALTH_CONNECT_SETTINGS;end`}async function Me(e){return ke(e)}function Ne(e){try{return JSON.parse(e)}catch{return null}}function Pe(){let e=_(),t=e.todayHabits.filter(e=>e.completed).length,n=e.todayHabits.length,r=Math.round(t/n*100),i=e.sleepData;return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- 1-Tap Smart Band Sync Bar -->
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-purple-950/40 border border-cyan-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center text-xl shrink-0">
            ⌚
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">Akıllı Saat & Bileklik Senkronizasyonu</span>
              <span id="liveHeartRatePill" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold shrink-0">
                ❤️ ${i.restingHr} BPM
              </span>
            </div>
            <p id="smartBandSyncText" class="text-[10px] text-slate-400 truncate mt-0.5">
              ${i.connected?`Bağlı: ${i.deviceName} • ${i.lastDistanceKm} KM Koşuldu • %${i.qualityScore} Uyku`:`Mi Band, Galaxy Watch, Health Connect otomatik veri çek.`}
            </p>
          </div>
        </div>

        <button type="button" id="btnOneTapSync" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-500 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-md shadow-cyan-500/20 shrink-0 flex items-center justify-center gap-1.5">
          <span>⚡ BİLEKLİĞİ BAĞLA & ÇEK</span>
        </button>
      </div>

      <!-- Boss Real-Time Target Preview Banner -->
      <div class="p-3 rounded-2xl bg-slate-950/90 border border-rose-500/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-xl">👾</span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold">HEDEF BOSS:</span>
              <span class="text-xs font-bold text-white">${e.bossIsEnraged?`🔥 [ÖFKELİ X2] `:``}Gölge Patron</span>
            </div>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-[10px] text-slate-400">Her görev anlık can götürür</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                🛡️ ${e.shields||0}/2 Kalkan
              </span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-mono font-bold text-rose-400 block">${e.bossHp} / ${e.bossMaxHp} HP</span>
          <button type="button" class="btn-open-modal-trigger text-[10px] text-cyan-400 font-mono underline hover:text-cyan-300" data-modal="sharecard">
            📸 Hikaye Kartı
          </button>
        </div>
      </div>

      <!-- Quick RPG Action Pills -->
      <div class="grid grid-cols-2 gap-2">
        <button type="button" class="btn-open-modal-trigger py-2 px-3 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-purple-500/60 text-purple-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition" data-modal="inventory">
          <span>🎒</span>
          <span>Avcı Envanteri & Eserler</span>
        </button>
        
        <button type="button" class="btn-open-modal-trigger py-2 px-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition" data-modal="sharecard">
          <span>📸</span>
          <span>Paylaşım Kartı Oluştur</span>
        </button>
      </div>
          <span class="text-xs font-mono font-bold text-rose-400">${e.bossHp} / ${e.bossMaxHp} HP</span>
          <div class="w-24 h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mt-1">
            <div class="h-full bg-rose-500 transition-all duration-300" style="width: ${Math.round(e.bossHp/e.bossMaxHp*100)}%"></div>
          </div>
        </div>
      </div>

      <!-- Daily Quests Vertical Header -->
      <div class="flex items-center justify-between pt-1">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>📋 GÜNÜN PROTOKOLÜ (YAPILACAKLAR)</span>
          </h2>
          <span class="text-[11px] text-slate-400">Tüm görevleri mühürle, serini koru ve zindanı fethet.</span>
        </div>
        <span class="text-xs font-mono font-bold ${t===n?`text-emerald-400`:`text-slate-400`}">
          ${t}/${n} (%${r})
        </span>
      </div>

      <!-- Alt Alta Görev Listesi (Vertical Quests List) -->
      <div class="space-y-2.5">
        ${e.todayHabits.map((e,t)=>{let n=e.completed,r=n?`TAMAMLANDI ✓`:`-${e.bossDmg} HP VUR`,i=``;return e.id===`q_run`?i=`
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-quick-km px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] font-mono" data-add="1.0">+1.0 KM</button>
                <button type="button" class="btn-quick-km px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] font-mono" data-add="2.5">+2.5 KM</button>
                <span class="text-[10px] text-cyan-400 font-mono ml-auto">Şu An: ${e.current||0} / ${e.target} KM</span>
              </div>
            `:e.id===`q_workout`?i=`
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-[10px] font-mono font-bold" data-modal="workout">
                  🏋️ Antrenman Modunu Aç ➔
                </button>
              </div>
            `:e.id===`q_reading`?i=`
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 text-[10px] font-mono font-bold" data-modal="reader">
                  📖 Dahili Kütüphaneden Oku ➔
                </button>
              </div>
            `:e.id===`q_meditation`&&(i=`
              <div class="flex items-center gap-1.5 mt-2">
                <button type="button" class="btn-open-modal-trigger px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 text-[10px] font-mono font-bold" data-modal="meditation">
                  🧘 Nefes Stüdyosunu Aç ➔
                </button>
              </div>
            `),`
            <div class="p-3.5 rounded-2xl border transition-all duration-300 ${n?`bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]`:`bg-slate-900/80 border-slate-800 hover:border-slate-700`}">
              
              <div class="flex items-center justify-between gap-3">
                <!-- Left Title & Description -->
                <div class="flex items-center gap-3 min-w-0">
                  <span class="text-2xl shrink-0">${e.icon}</span>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold ${n?`line-through text-slate-400`:`text-white`} truncate">
                        ${e.title}
                      </span>
                      <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-cyan-400 font-bold shrink-0">
                        +${e.xp} XP
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-tight truncate mt-0.5">
                      ${e.desc}
                    </p>
                  </div>
                </div>

                <!-- Right Damage Action Button -->
                <button type="button" class="btn-toggle-habit shrink-0 px-3 py-2 rounded-xl border text-xs font-mono font-bold transition flex items-center gap-1 ${n?`bg-emerald-500 text-black border-emerald-400`:`bg-slate-950 text-rose-400 border-rose-500/40 hover:bg-rose-500/20 active:scale-95`}" data-idx="${t}">
                  <span>${r}</span>
                </button>
              </div>

              <!-- Extra Dynamic Actions (Reading trigger, Workout launcher, KM adder) -->
              ${i}

            </div>
          `}).join(``)}
      </div>

      <!-- Day Completion & Missed Day Penalty Actions -->
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-slate-300 font-bold">Günün Sonlandırma Protokolü:</span>
          <span class="text-slate-400">Zor Mod: ${e.hardMode?`Açık`:`Kapalı`}</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <!-- Success Seal -->
          <button type="button" id="btnSealDaySuccess" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-wider uppercase transition shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            ✅ GÜNÜ MÜHÜRLE (ZİNCİRİ KORU)
          </button>

          <!-- Missed Day Penalty Trigger -->
          <button type="button" id="btnSkipDayPenalty" class="w-full py-3 rounded-xl bg-slate-950 border border-rose-500/50 hover:bg-rose-950/30 active:scale-95 text-rose-400 font-bold text-xs font-mono tracking-wider uppercase transition">
            ⚠️ GÜNÜ ATLA (BOSS X2 GÜÇLENİR & -1 ❤️)
          </button>
        </div>
      </div>

    </div>
  `}function Fe(e){let t=document.getElementById(`btnOneTapSync`);t&&t.addEventListener(`click`,()=>{let t=document.getElementById(`smartBandSyncText`);ke(n=>{t&&(t.textContent=n),e&&e()})}),document.querySelectorAll(`.btn-quick-km`).forEach(t=>{t.addEventListener(`click`,()=>{let n=parseFloat(t.getAttribute(`data-add`));v({todayHabits:_().todayHabits.map(e=>{if(e.id===`q_run`){let t=parseFloat(((e.current||0)+n).toFixed(1)),r=t>=e.target;return r&&!e.completed?(b(e.bossDmg),y(e.xp,e.pillar),he(),N(`success`)):(A(),N(`light`)),{...e,current:t,completed:r}}return e})}),e&&e()})}),document.querySelectorAll(`.btn-open-modal-trigger`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-modal`);A(),N(`light`),v(n===`workout`||n===`workoutTab`||n===`workoutModal`?{activeTab:`workout`,activeModal:null}:{activeModal:n}),e&&e()})}),document.querySelectorAll(`.btn-toggle-habit`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=_(),i=r.todayHabits[n],a=!i.completed,o=[...r.todayHabits];if(o[n]={...i,completed:a},a){M(),N(`heavy`);let e=b(i.bossDmg,{q_run:`run`,q_workout:`workout`,q_reading:`reading`,q_meditation:`meditation`,q_water:`water`,q_cold_shower:`cold`}[i.id]);y(i.xp,i.pillar),alert(`💥 KRİTİK HASAR! ${i.title} tamamlandı. Boss'a ${e.damageDealt} Hasar vuruldu, +${i.xp} XP kazanıldı!`)}else A(),N(`light`);v({todayHabits:o}),e&&e()})});let n=document.getElementById(`btnSealDaySuccess`);n&&n.addEventListener(`click`,()=>{let t=_();t.todayHabits.filter(e=>e.completed).length<3?alert(`⚠️ En az 3 görevi tamamlamadan günü mühürleyemezsiniz!`):(j(),N(`success`),oe()?.earnedShield?alert(`🎉 TEBRİKLER! Gün ${t.currentDay} başarıyla mühürlendi!\n\n🛡️ 7 GÜNLÜK DİSİPLİN MÜKÂFATI: +1 GÖLGE KALKANI KAZANILDI!`):alert(`🎉 TEBRİKLER! Gün ${t.currentDay} başarıyla mühürlendi. Zinciri kırmadın, yarınki zindana ilerleniyor!`),v({activeTab:`boss`}),e&&e())});let r=document.getElementById(`btnSkipDayPenalty`);r&&r.addEventListener(`click`,()=>{if(confirm(`⚠️ UYARI: Bir gün atlandığında Boss X2 Güçlenecek veya Gölge Kalkanınız harcanacak. Onaylıyor musunuz?`)){let t=ae();t.shielded?(j(),N(`success`),alert(`🛡️ GÖLGE KALKANI DEVREYE GİRDİ!\n\nKalan Kalkan: ${t.remainingShields}/2\nZincir haritan kırmızıya dönmedi ve canın korundu!`)):(M(),N(`error`),alert(`☠️ GÜN ATLANDI! Boss x2 Güçlendi (${t.enragedHp} HP) ve Canınız Azaldı (Kalan: ${t.newHearts} ❤️)! Zincir haritasında kırmızı mühür vuruldu.`)),v({activeTab:`boss`}),e&&e()}})}function Ie(){let t=_(),n=Math.min(10,Math.ceil(t.currentDay/7)),r=e[n-1]||e[0],i=Math.max(0,Math.min(100,Math.round(t.bossHp/t.bossMaxHp*100)));l(t.userClass);let a=[,,,].fill(0).map((e,n)=>`<span class="text-xl ${n<t.hearts?`text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]`:`text-slate-700 opacity-40`}">❤️</span>`).join(` `);return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Weekly Shadow Boss Battle Arena -->
      <div class="relative overflow-hidden rounded-3xl ${t.bossIsEnraged?`bg-gradient-to-b from-rose-950 via-slate-950 to-black border-2 border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.4)]`:`bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.15)]`} p-5">
        
        <!-- Enraged / Berserk Warning Banner -->
        ${t.bossIsEnraged?`
          <div class="mb-3 p-2.5 rounded-xl bg-rose-600/30 border border-rose-500 text-rose-200 text-xs font-mono font-bold flex items-center gap-2 animate-pulse">
            <span class="text-base">🔥</span>
            <span>BERSERK MODU: Dün görev atlandığı için Boss X2 GÜÇLENDİ! Maks HP 2 katına çıktı!</span>
          </div>
        `:``}

        <!-- Co-Op Raid Partner Banner -->
        ${t.coop?.active?`
          <div class="mb-3 p-2.5 rounded-xl bg-purple-950/50 border border-purple-500 text-purple-200 text-xs font-mono flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span>🤝</span>
              <span><strong>Baskın Ortağı:</strong> ${t.coop.partnerName} (${t.coop.partnerDamage} DMG)</span>
            </div>
            <span class="text-cyan-300 font-bold">Ortak Güç 🔥</span>
          </div>
        `:``}

        <!-- Boss Top Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">👾</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-widest">[ ${n}. HAFTA ZİNDANI ]</span>
              <h2 class="text-base font-black text-white">${r.name}</h2>
            </div>
          </div>

          <!-- Player Health Hearts & Shields -->
          <div class="flex flex-col items-end">
            <div class="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 font-bold uppercase">
              <span>AVCI CANI</span>
              <span class="text-cyan-400 font-mono">🛡️ ${t.shields||0}/2 Kalkan</span>
            </div>
            <div class="flex items-center gap-1 mt-0.5">
              ${a}
            </div>
          </div>
        </div>

        <!-- Boss Avatar & Status -->
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
          
          <!-- Avatar -->
          <div class="relative rounded-2xl overflow-hidden border ${t.bossIsEnraged?`border-rose-500 ring-2 ring-rose-500/50`:`border-rose-500/40`} bg-slate-950 h-44 flex items-center justify-center group">
            <img src="./assets/boss.jpg" alt="${r.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" onerror="this.src='./assets/boss.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-2 left-2 right-2">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/50 text-rose-100 font-bold block truncate text-center">
                ${r.archetype}
              </span>
            </div>
          </div>

          <!-- Status & Combat Actions -->
          <div class="sm:col-span-2 space-y-3">
            <p class="text-xs text-slate-300 leading-relaxed">
              ${r.desc}
            </p>

            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div class="text-[10px] font-mono text-cyan-400 font-bold">🎯 BİLİMSEL ZAYIFLIK:</div>
              <div class="text-white font-medium">${r.weakness}</div>
            </div>

            <!-- HP Bar -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-slate-400">Boss Sağlığı:</span>
                <span class="text-rose-400 font-black">${t.bossHp} / ${t.bossMaxHp} HP (%${i})</span>
              </div>
              <div class="h-2.5 w-full rounded-full bg-slate-950 border border-slate-800 overflow-hidden relative">
                <div class="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 transition-all duration-300 shadow-[0_0_12px_rgba(244,63,94,0.6)]" style="width: ${i}%"></div>
              </div>
            </div>

            <!-- Manual Strike Button -->
            <button type="button" id="btnBossManualStrike" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono uppercase tracking-wider transition shadow-[0_0_15px_rgba(244,63,94,0.3)]">
              💥 KRİTİK İRADE SALDIRISI (-60 HP)
            </button>
          </div>

        </div>

        <!-- Quick Access RPG Action Pills -->
        <div class="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2">
          <button type="button" id="btnOpenInventoryFromBoss" class="py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition">
            <span>🎒</span>
            <span>Envanter & Eserler</span>
          </button>
          
          <button type="button" id="btnOpenShareCardFromBoss" class="py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition">
            <span>📸</span>
            <span>Hikaye Kartı Paylaş</span>
          </button>
        </div>

      </div>

      <!-- 66 Günlük "Zinciri Kırma" (Don't Break The Chain) Haritası -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 shadow-sm">
        
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span>⛓️ 66 GÜNLÜK "ZİNCİRİ KIRMA" HARİTASI</span>
            </h3>
            <span class="text-[10px] text-slate-400">Her gün mühürlenen halka seni kırılmaz bir iradeye dönüştürür.</span>
          </div>

          <span class="text-xs font-mono text-amber-400 font-bold">
            🔥 ${t.streak} Günlük Kesintisiz Zincir
          </span>
        </div>

        <!-- Legend -->
        <div class="flex items-center gap-3 text-[10px] font-mono text-slate-400 flex-wrap">
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Mühürlendi</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> Kalkan Korudu</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Kırıldı</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span> Bugün</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span> Kilitli</span>
        </div>

        <!-- Chain Links Grid -->
        <div class="grid grid-cols-11 sm:grid-cols-22 gap-2 pt-2">
          ${Array(66).fill(0).map((e,n)=>{let r=n+1,i=t.chainDays[r]||(r<t.currentDay?`done`:r===t.currentDay?`current`:`locked`),a=`bg-slate-950 border-slate-800 text-slate-600`,o=r;return i===`done`?a=`bg-emerald-500/25 border-emerald-500/60 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]`:i===`shielded`?(a=`bg-amber-500/30 border-amber-500/80 text-amber-300 font-bold shadow-[0_0_8px_rgba(245,158,11,0.5)]`,o=`🛡️`):i===`missed`?a=`bg-rose-500/30 border-rose-500/80 text-rose-300 line-through shadow-[0_0_8px_rgba(244,63,94,0.4)]`:i===`current`&&(a=`bg-cyan-500 text-black border-cyan-400 font-black shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110`),`
              <div class="aspect-square rounded-xl border flex items-center justify-center text-[10px] font-mono font-bold transition-all ${a}">
                ${o}
              </div>
            `}).join(``)}
        </div>

      </div>

    </div>
  `}function Le(e){let t=document.getElementById(`btnBossManualStrike`);t&&t.addEventListener(`click`,()=>{if(_().bossHp<=0){alert(`🎉 Tebrikler! Bu haftanın patronu zaten yok edildi!`);return}M(),N(`heavy`);let t=b(60);t.isDefeated?(j(),N(`success`),y(100,`STR`),t.droppedArtifact?alert(`🏆 ZAFER! Boss yok edildi! +100 STR XP ve EFSANEVİ ESER KAZANILDI: "${t.droppedArtifact.name}"!\n\nEtki: ${t.droppedArtifact.effect}`):alert(`🏆 ZAFER! Boss yok edildi! +100 STR XP ve Zafer Rozeti kazandın!`)):alert(`💥 Boss'a ${t.damageDealt} Hasar vuruldu! Kalan Boss Canı: ${t.newHp} HP`),e&&e()});let n=document.getElementById(`btnOpenInventoryFromBoss`);n&&n.addEventListener(`click`,()=>{A(),N(`light`),v({activeModal:`inventory`}),e&&e()});let r=document.getElementById(`btnOpenShareCardFromBoss`);r&&r.addEventListener(`click`,()=>{A(),N(`light`),v({activeModal:`sharecard`}),e&&e()})}var Re=[{id:`all`,label:`Tümü`},{id:`bodyweight`,label:`Ekipmansız (Evde)`},{id:`dumbbell`,label:`Dambıl`},{id:`barbell`,label:`Halter (Barbell)`},{id:`band`,label:`Direnç Bandı`},{id:`machine`,label:`Spor Salonu / Makine`}],ze=[{id:`all`,label:`Tüm Kaslar`},{id:`chest`,label:`Göğüs`},{id:`back`,label:`Sırt`},{id:`legs`,label:`Bacak`},{id:`shoulders`,label:`Omuz`},{id:`arms`,label:`Kol (Biceps/Triceps)`},{id:`core`,label:`Karın (Core)`}],Be=[{id:`bw_pushup`,name:`Klasik Şınav (Push-Up)`,equipment:`bodyweight`,muscle:`chest`,difficulty:`Başlangıç / Orta`,instructions:`Ellerini omuz genişliğinde yere koy, gövdeni düz bir çizgi halinde tut. Göğsün yere değene kadar in ve güçlüce it.`,targetMuscles:`Göğüs, Triceps, Ön Omuz, Core`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg`},{id:`bw_squat`,name:`Vücut Ağırlığı Squat (Air Squat)`,equipment:`bodyweight`,muscle:`legs`,difficulty:`Başlangıç`,instructions:`Ayaklar omuz genişliğinde açık. Kalçayı geriye doğru sandalyeye oturur gibi indir, dizler parmak ucunu geçmesin.`,targetMuscles:`Quadriceps, Gluteus (Kalça), Hamstrings`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg`},{id:`bw_pullup`,name:`Barfiks (Pull-Up)`,equipment:`bodyweight`,muscle:`back`,difficulty:`İleri Seviye`,instructions:`Barı omuzdan biraz geniş tut. Kürek kemiklerini sıkarak çeneni barın üzerine çek, kontrollü şekilde indir.`,targetMuscles:`Latissimus Dorsi (Kanat), Biceps, Üst Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg`},{id:`bw_dips`,name:`Paralel Bar Dips / Sandalye Dips`,equipment:`bodyweight`,muscle:`arms`,difficulty:`Orta`,instructions:`Kollarını 90 derece bükerek gövdeni aşağı indir. Triceps kaslarını sıkarak başlangıç konumuna yüksel.`,targetMuscles:`Triceps, Alt Göğüs, Ön Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_Chest_Version/0.jpg`},{id:`bw_plank`,name:`Düz Plank (Forearm Plank)`,equipment:`bodyweight`,muscle:`core`,difficulty:`Başlangıç / Orta`,instructions:`Ön kollarının ve ayak parmaklarının üzerinde dur. Kalçayı ne çok kaldır ne düşür, karın kaslarını kilitle.`,targetMuscles:`Transverse Abdominis, Rectus Abdominis, Bel`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg`},{id:`bw_pike_pushup`,name:`Pike Şınav (Omuz Odaklı)`,equipment:`bodyweight`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Kalçayı yukarı kaldırarak ters V şekli al. Başını iki elinin arasına doğru indir ve omuzlarınla it.`,targetMuscles:`Ön ve Yan Deltoid, Üst Göğüs, Triceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg`},{id:`bw_lunges`,name:`Yürüyüş Lunge (Walking Lunge)`,equipment:`bodyweight`,muscle:`legs`,difficulty:`Orta`,instructions:`Bir adım öne at, arka dizin neredeyse yere değecek kadar çök. Ön bacağınla güç alarak kalk ve diğer bacağa geç.`,targetMuscles:`Quadriceps, Kalça, Denge ve Stabilite`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg`},{id:`db_bench_press`,name:`Dambıl Bench Press`,equipment:`dumbbell`,muscle:`chest`,difficulty:`Orta`,instructions:`Düz sehpaya uzan. Dambılları göğüs hizasında tutarak yukarı doğru presle, tepe noktada göğsü sık.`,targetMuscles:`Pectoralis Major (Göğüs), Triceps, Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg`},{id:`db_row`,name:`Tek Kol Dambıl Row (One-Arm Row)`,equipment:`dumbbell`,muscle:`back`,difficulty:`Orta`,instructions:`Bir dizini ve elini sehpaya koy. Dambılı dirseğini arkaya doğru çekerek kaburgana yaklaştır, sırtı sıkıştır.`,targetMuscles:`Latissimus Dorsi, Rhomboids, Biceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg`},{id:`db_shoulder_press`,name:`Dambıl Omuz Press (Overhead Press)`,equipment:`dumbbell`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Dambılları kulak hizasından başının üzerine doğru güçlüce it, kilitlenmeden kontrollü indir.`,targetMuscles:`Ön ve Yan Omuz (Deltoids), Triceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg`},{id:`db_bicep_curl`,name:`Dambıl Biceps Curl`,equipment:`dumbbell`,muscle:`arms`,difficulty:`Başlangıç`,instructions:`Dirsekleri gövdeye sabitle. Dambılları sadece ön kolunu bükerek yukarı kaldır, tepe noktada sık.`,targetMuscles:`Biceps Brachii, Brachialis`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg`},{id:`db_goblet_squat`,name:`Goblet Squat (Dambıl Çömelme)`,equipment:`dumbbell`,muscle:`legs`,difficulty:`Orta`,instructions:`Dambılı göğsünün önünde iki elinle dikey tut. Derin bir squat yap, dirseklerin dizlerinin içine doğru insin.`,targetMuscles:`Quadriceps, Kalça, Core`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg`},{id:`db_lateral_raise`,name:`Dambıl Yana Açış (Lateral Raise)`,equipment:`dumbbell`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Hafif dambıllarla kollarını yana doğru omuz hizasına kadar kaldır. Geniş omuz illüzyonunun anahtarıdır.`,targetMuscles:`Lateral Deltoid (Yan Omuz)`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg`},{id:`bb_deadlift`,name:`Barbell Deadlift (Geleneksel)`,equipment:`barbell`,muscle:`back`,difficulty:`İleri Seviye`,instructions:`Beli nötr tut, kalçayı geriye iterek barı kavra. Topuklarından güç alarak dik konuma gel ve kalçayı kilitle.`,targetMuscles:`Tüm Arka Zincir: Bel, Hamstrings, Kalça, Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg`},{id:`bb_squat`,name:`Barbell Back Squat`,equipment:`barbell`,muscle:`legs`,difficulty:`İleri Seviye`,instructions:`Barı trapezius kaslarının üzerine yerleştir. Göğsü dik tutarak paralel veya altına kadar çök ve patlayıcı güçle kalk.`,targetMuscles:`Quadriceps, Kalça, Hamstring, Tüm Bacak`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg`},{id:`bb_bench_press`,name:`Barbell Bench Press`,equipment:`barbell`,muscle:`chest`,difficulty:`Orta`,instructions:`Barı göğüs kemiğine kadar kontrollü indir, ayakları yere basarak göğüs kaslarınla güçlüce tavana it.`,targetMuscles:`Göğüs (Pectoralis), Triceps, Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg`},{id:`band_facepull`,name:`Bant Face Pull (Postür & Arka Omuz)`,equipment:`band`,muscle:`shoulders`,difficulty:`Başlangıç / Orta`,instructions:`Bandı bir yere sabitle. Dirsekleri yüksekte tutarak bandı burnuna doğru çek, arka omuzları sık.`,targetMuscles:`Arka Deltoid, Rotator Cuff, Üst Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Face_Pull/0.jpg`},{id:`band_bicep_curl`,name:`Bant Biceps Curl`,equipment:`band`,muscle:`arms`,difficulty:`Başlangıç`,instructions:`Bandın üzerine bas, uçlarından tutarak kolları bük. Bant gerildikçe tepe noktada direnç maksimuma çıkar.`,targetMuscles:`Biceps, Ön Kol`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/1.jpg`},{id:`mac_lat_pulldown`,name:`Lat Pulldown (Geniş Çekiş)`,equipment:`machine`,muscle:`back`,difficulty:`Başlangıç / Orta`,instructions:`Barı geniş tut, göğsü yukarı kaldırarak barı köprücük kemiğine çek. Kanat kaslarını sıkarak yavaşça bırak.`,targetMuscles:`Latissimus Dorsi, Biceps, Kürek Kemiği`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lat_Pulldown/0.jpg`},{id:`mac_leg_press`,name:`Leg Press (Bacak Presi)`,equipment:`machine`,muscle:`legs`,difficulty:`Orta`,instructions:`Ayakları platformun ortasına koy. Ağırlığı 90 dereceye kadar indir, dizleri kilitlemeden yukarı it.`,targetMuscles:`Quadriceps, Gluteus, Hamstrings`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg`}];async function F(e=!0){try{let t=window.Capacitor?.Plugins?.KeepAwake;if(t){e?await t.keepAwake():await t.allowSleep();return}}catch{}if(`wakeLock`in navigator)try{e&&!window._screenWakeLockSentinel?window._screenWakeLockSentinel=await navigator.wakeLock.request(`screen`):!e&&window._screenWakeLockSentinel&&(await window._screenWakeLockSentinel.release(),window._screenWakeLockSentinel=null)}catch{}}var Ve=`all`,He=`all`,I=``,L=`monday`,Ue={},R=0,We=null,Ge=60,Ke=[{key:`monday`,label:`Pzt`},{key:`tuesday`,label:`Sal`},{key:`wednesday`,label:`Çar`},{key:`thursday`,label:`Per`},{key:`friday`,label:`Cum`},{key:`saturday`,label:`Cmt`},{key:`sunday`,label:`Paz`}];function qe(){let e=_().workouts[L]||{name:`Özel Antrenman`,exercises:[]},t=Be.filter(e=>{let t=Ve===`all`||e.equipment===Ve,n=He===`all`||e.muscle===He,r=!I||e.name.toLowerCase().includes(I.toLowerCase())||e.targetMuscles.toLowerCase().includes(I.toLowerCase());return t&&n&&r});return`
    <div class="space-y-5 animate-fadeIn">
      
      <!-- Top Title & Subtitle -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <span>🏋️ SPOR PROGRAMI & EGZERSİZ VERİTABANI</span>
          </h2>
          <span class="text-[11px] text-slate-400">Ekipmanlı / Ekipmansız filtreleme, hareket rehberi & dinlenme sayacı.</span>
        </div>
      </div>

      <!-- Active Day Workout Tracker Box -->
      <div class="rounded-3xl bg-slate-900/90 border border-amber-500/40 p-4 sm:p-5 space-y-4 shadow-sm">
        
        <!-- Day Selector Pills -->
        <div class="flex items-center justify-between gap-1 pb-3 border-b border-slate-800">
          <div class="grid grid-cols-7 gap-1 flex-1">
            ${Ke.map(e=>`
                <button type="button" class="btn-workout-day py-1.5 rounded-xl border text-center transition ${e.key===L?`bg-amber-500 text-black border-amber-400 font-bold shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-day="${e.key}">
                  <span class="block text-xs font-mono">${e.label}</span>
                </button>
              `).join(``)}
          </div>
        </div>

        <!-- Selected Day Plan Info & Rest Timer -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">GÜNÜN PROGRAMI:</span>
            <h3 class="text-sm font-bold text-white">${e.name}</h3>
          </div>

          <!-- Rest Timer Box -->
          <div class="flex items-center gap-2.5">
            <div class="text-right">
              <span class="text-[9px] font-mono text-slate-400 block uppercase">DİNLENME SAYACI</span>
              <span id="workoutRestTimerDisplay" class="text-base font-mono font-bold text-amber-400">
                ${R>0?`${R}s`:`Hazır`}
              </span>
            </div>
            <div class="flex items-center gap-1 text-[10px] font-mono">
              ${[30,60,90].map(e=>`
                <button type="button" class="btn-rest-preset px-2 py-1 rounded-lg border transition ${e===Ge?`bg-amber-500/30 text-amber-200 border-amber-500/60 font-bold`:`bg-slate-900 border-slate-800 text-slate-400`}" data-sec="${e}">
                  ${e}s
                </button>
              `).join(``)}
            </div>
          </div>
        </div>

        <!-- Current Day Exercises Sets Tracker -->
        <div class="space-y-2.5">
          ${e.exercises.map(e=>{let t=Ue[e.id]||0;return`
              <div class="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-white">${e.name}</span>
                    <span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">
                      ${e.equipment===`bodyweight`?`Vücut Ağ.`:e.weight}
                    </span>
                  </div>
                  <span class="text-[10px] text-slate-400">${e.sets} Set × ${e.reps} Tekrar</span>
                </div>

                <!-- Sets Row -->
                <div class="flex items-center gap-1.5">
                  ${Array(e.sets).fill(0).map((n,r)=>{let i=r<t;return`
                      <button type="button" class="btn-toggle-set px-3 py-1 rounded-lg border text-xs font-mono font-bold transition ${i?`bg-amber-500 text-black border-amber-400`:`bg-slate-900 border-slate-800 text-slate-400 hover:text-white`}" data-ex="${e.id}" data-set="${r}">
                        ${i?`✓`:`S${r+1}`}
                      </button>
                    `}).join(``)}
                </div>
              </div>
            `}).join(``)}
        </div>

        <!-- Finish Workout & Deal Boss Damage Button -->
        <button type="button" id="btnFinishDayWorkout" class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          💥 GÜNÜN ANTRENMANINI BİTİR & BOSS'A VUR (-50 HP)
        </button>

      </div>

      <!-- Filterable Exercise Library (GitHub Free-Exercise-DB Repo) -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 space-y-4">
        
        <div>
          <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <span>📚 TÜM EGZERSİZLER & HAREKET REHBERİ (GİTHUB FREE-EXERCİSE-DB)</span>
          </h3>
          <p class="text-[11px] text-slate-400">Ekipmanına ve hedefine göre hareket ara, GIF rehberini incele ve programına ekle.</p>
        </div>

        <!-- Equipment Filter Row -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">EKİPMAN SEÇİMİ:</span>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            ${Re.map(e=>`
              <button type="button" class="btn-filter-equip px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===Ve?`bg-amber-500 text-black shadow-md shadow-amber-500/20`:`bg-slate-950 border border-slate-800 text-slate-400 hover:text-white`}" data-equip="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Muscle Group Filter Row -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">HEDEF KAS GRUBU:</span>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            ${ze.map(e=>`
              <button type="button" class="btn-filter-muscle px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===He?`bg-cyan-500 text-black shadow-md shadow-cyan-500/20`:`bg-slate-950 border border-slate-800 text-slate-400 hover:text-white`}" data-muscle="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative">
          <input type="text" id="exerciseSearchInput" placeholder="Hareket veya kas adı ara (Örn: Şınav, Göğüs, Squat)..." value="${I}" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 font-sans" />
        </div>

        <!-- Filtered Exercise Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          ${t.map(e=>`
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition space-y-3 flex flex-col justify-between">
              
              <div class="space-y-2">
                <!-- Image Demo -->
                <div class="w-full h-36 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group flex items-center justify-center">
                  <img src="${e.gif}" alt="${e.name}" class="w-full h-full object-cover transition duration-300 group-hover:scale-105" onerror="this.src='./assets/hero.jpg'" loading="lazy" />
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/80 text-amber-300 font-bold uppercase backdrop-blur-sm">
                      ${e.equipment}
                    </span>
                    <span class="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/80 text-cyan-300 font-bold backdrop-blur-sm">
                      ${e.muscle}
                    </span>
                  </div>
                </div>

                <!-- Info -->
                <div>
                  <h4 class="text-xs font-bold text-white">${e.name}</h4>
                  <p class="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">${e.instructions}</p>
                </div>
              </div>

              <!-- Add to Plan Button -->
              <button type="button" class="btn-add-exercise-to-plan w-full py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-mono font-bold transition flex items-center justify-center gap-1.5" data-id="${e.id}" data-name="${e.name}" data-equip="${e.equipment}">
                <span>+ Bu Güne Ekle (${Ke.find(e=>e.key===L)?.label})</span>
              </button>

            </div>
          `).join(``)}
        </div>

      </div>

    </div>
  `}function Je(e){document.querySelectorAll(`.btn-workout-day`).forEach(t=>{t.addEventListener(`click`,()=>{L=t.getAttribute(`data-day`),A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-rest-preset`).forEach(t=>{t.addEventListener(`click`,()=>{Ge=Number(t.getAttribute(`data-sec`)),A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-toggle-set`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-ex`),r=Number(t.getAttribute(`data-set`));r>=(Ue[n]||0)?(Ue[n]=r+1,A(),N(`medium`),Ye(Ge)):(Ue[n]=r,N(`light`)),e&&e()})}),document.querySelectorAll(`.btn-filter-equip`).forEach(t=>{t.addEventListener(`click`,()=>{Ve=t.getAttribute(`data-equip`),A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-filter-muscle`).forEach(t=>{t.addEventListener(`click`,()=>{He=t.getAttribute(`data-muscle`),A(),N(`light`),e&&e()})});let t=document.getElementById(`exerciseSearchInput`);t&&t.addEventListener(`input`,t=>{I=t.target.value,e&&e()}),document.querySelectorAll(`.btn-add-exercise-to-plan`).forEach(t=>{t.addEventListener(`click`,()=>{t.getAttribute(`data-id`);let n=t.getAttribute(`data-name`),r=t.getAttribute(`data-equip`),i=_(),a=i.workouts[L],o={id:`ex_`+Date.now(),name:n,sets:4,reps:`10`,weight:r===`bodyweight`?`Vücut Ağ.`:`15 kg`,equipment:r},s={...a,exercises:[...a.exercises,o]};v({workouts:{...i.workouts,[L]:s}}),playQuestCompleteSound(),N(`success`),alert(`✅ "${n}" hareketi ${Ke.find(e=>e.key===L)?.label} gününe eklendi!`),e&&e()})});let n=document.getElementById(`btnFinishDayWorkout`);n&&n.addEventListener(`click`,()=>{Xe(),F(!1),M(),N(`heavy`);let t=_().todayHabits.map(e=>e.id===`q_workout`?{...e,current:45,completed:!0}:e);b(50),y(50,`STR`),alert(`💥 TEBRİKLER! Antrenman başarıyla mühürlendi. Boss'a 50 Fiziksel Hasar vuruldu ve +50 STR XP kazanıldı!`),v({todayHabits:t}),e&&e()})}function Ye(e){Xe(),F(!0),R=e,We=setInterval(()=>{R--;let e=document.getElementById(`workoutRestTimerDisplay`);e&&(e.textContent=`${R}s`),R<=0&&(Xe(),ge(),N(`heavy`),e&&(e.textContent=`Yeni Sete Başla 🔥`))},1e3)}function Xe(){We&&(clearInterval(We),We=null),R=0}var Ze=[{id:`marcus_aurelius`,title:`Kendime Düşünceler`,author:`Marcus Aurelius (Roma İmparatoru & Stoacı Filozof)`,category:`Stoacılık & Disiplin`,pagesEstimate:35,summary:`Roma İmparatoru'nun savaş meydanlarında kendi kendine yazdığı samimi günlüğü. Dış dünyayı değil, kendi zihnini yönetmeyi öğretir.`,chapters:[{title:`Bölüm 1: Sabah Uyanışı ve Görev Bilinci`,content:`Sabah yatağından kalkmakta zorlandığında, hemen kendine şunu söyle:
"Bir insanın yapması gereken işi yapmak için uyanıyorum. Eğer bunun için yaratıldıysam, bunun için bu dünyaya getirildiysem, neden huysuzlanayım? Yoksa sıcak battaniyenin altında yatıp kendimi ısıtmak için mi var edildim?"

"Ama bu çok daha zevkli!" diyebilirsin.
Peki sen zevk almak için mi doğdun, yoksa eyleme geçmek için mi? Bitkilerin, kuşların, karıncaların, örümceklerin ve arıların dünyadaki düzeni kurmak için nasıl kendi görevlerini yerine getirdiklerini görmüyor musun? Ve sen, bir insan olarak üzerine düşen görevi yapmayı reddedecek misin? Doğanın sana emrettiği şeyi yapmak için koşmayacak mısın?

"Ama dinlenmeye de ihtiyacım var!"
Elbette var; doğa dinlenmeye de sınırlar koydu, tıpkı yemeye ve içmeye sınırlar koyduğu gibi. Fakat sen bu sınırların çok ötesine geçiyorsun, ama iş eyleme ve çalışmaya geldiğinde sınırın gerisinde kalıyorsun. Çünkü kendini gerçekten sevmiyorsun; sevseydin, doğanın senden istediği şeye seve seve boyun eğerdin.`},{title:`Bölüm 2: Engel Yolun Kendisidir`,content:`İnsanlar senin iyi niyetli eylemlerini engelleyebilir, sana karşı çıkabilir veya seni yavaşlatabilir. Fakat senin iradene ve içsel kararlılığına kimse engel olamaz. Çünkü zihnin, her türlü engeli kendi amacına hizmet edecek bir araca dönüştürme gücüne sahiptir.

Eylemin önündeki engel, eylemi ilerletir.
Yolun üstündeki engel, yolun ta kendisi olur.

Başına gelen hiçbir şey, senin katlanamayacağın bir yük değildir. Karşılaştığın zorluk, senin karakterini döven bir örstür. Dış olaylar seni incitecek güce sahip değildir; seni inciten şey, o olaylar hakkında geliştirdiğin kendi yargılarındır. Yargını silip attığın an, incinme de yok olur.`},{title:`Bölüm 3: Anın Gücü ve Zihinsel Kale`,content:`Unutma ki hiç kimse geçmişi ya da geleceği kaybedemez; çünkü sahip olmadığı bir şeyi kimse elinden alamaz. Elinde olan tek şey şimdiki andır. En uzun yaşayan ile en erken ölen insan, öldüklerinde tam olarak aynı şeyi kaybederler: Şimdiki anı.

Zihnini aşılmaz bir kale haline getir. Tutkulardan, tembellikten, öfkeden ve korkudan arınmış bir zihinden daha güçlü bir sığınak yoktur. O kaleye bir kez sığınan insan, bir daha asla esir alınamaz.

Her işini, hayatının son eylemiymiş gibi büyük bir dikkat, dürüstlük ve vakarla yap. Şikayet etmeyi bırak, sızlanmayı kes ve yürümeye devam et.`}]},{id:`epictetus_enchiridion`,title:`Kendini Yönetme Sanatı (Enchiridion)`,author:`Epiktetos (Kölelikten Filozofluğa)`,category:`Zihinsel Özgürlük`,pagesEstimate:28,summary:`Köle olarak doğup tarihin en büyük zihinlerinden birine dönüşen Epiktetos'tan kontrol çemberi ve sarsılmaz irade rehberi.`,chapters:[{title:`Bölüm 1: Kontrol Edebildiklerimiz ve Edemediklerimiz`,content:`Dünyadaki her şey ikiye ayrılır: Kontrolümüzde olanlar ve kontrolümüzde olmayanlar.

Kontrolümüzde olanlar: Düşüncelerimiz, dürtülerimiz, arzularımız, kaçındığımız şeyler; kısacası tamamen kendi eylemlerimiz olan her şey.
Kontrolümüzde olmayanlar: Bedenimiz, malımız mülkümüz, itibarımız, başkalarının hakkımızdaki fikirleri; kısacası bizim doğrudan kontrol edemeyeceğimiz dışsal her şey.

Kontrolünde olan şeyler doğası gereği özgürdür, engellenemez ve kısıtlanamaz. Kontrolünde olmayanlar ise zayıftır, bağımlıdır, engellenebilir ve başkalarının insafına kalmıştır.
Eğer kontrolünde olmayan şeyleri kontrolün altındaymış gibi görürsen, hayatın boyunca acı çeker, şikayet eder, başkalarını suçlar ve hayal kırıklığına uğrarsın. Fakat sadece sana ait olanı sahiplenirsen, hiç kimse seni zorlayamaz, hiç kimse seni engelleyemez ve hiç kimseden zarar görmezsin.`},{title:`Bölüm 2: Kendine Değer Verme Zamanı`,content:`Daha ne kadar süre bekleyeceksin kendini en iyisine layık görmek için? Aklın buyurduğu standartlara uymayı daha ne kadar erteleyeceksin?

Artık bir çocuk değilsin; olgun bir insansın. Eğer şimdi tembellik eder, sürekli ertelemeler icat eder, kararlar alıp hiçbirini uygulamazsan, farkına bile varmadan vasat bir hayat yaşayacak ve hem yaşarken hem de ölürken sıradan biri olarak kalacaksın.

Bu andan itibaren, kendini yetişkin ve ilerleyen bir savaşçı olarak gör. Karşına çıkan her zorluğu bir olimpiyat mücadelesi gibi kabul et. Bu mücadeleyi erteleyemezsin; ring tam önündedir. Zafer ya da mağlubiyet tek bir günde, tek bir kararda kazanılır veya kaybedilir.`}]},{id:`sun_tzu_art_of_war`,title:`Savaş Sanatı`,author:`Sun Tzu (Büyük Doğu Stratejisti)`,category:`Strateji & Disiplin`,pagesEstimate:25,summary:`İçsel zayıflıkların ve gölge düşmanların nasıl fethedileceğini anlatan 2500 yıllık efsanevi askeri ve zihinsel strateji eseri.`,chapters:[{title:`Bölüm 1: Kendini ve Düşmanını Tanımak`,content:`Düşmanı ve kendini tanıyorsan, yüz savaşa girsen bile tehlikeye düşmezsin.
Kendini tanıyor ama düşmanı tanımıyorsan, kazanacağın her zafere karşılık bir mağlubiyet alırsın.
Ne düşmanı ne de kendini tanımıyorsan, girdiğin her savaşta ezilmeye mahkûmsun.

Zihnindeki en büyük düşman tembellik, erteleme ve ucuz zevklerdir. Bu düşmanın gücünü ve zaaflarını bilmeden onunla savaşamazsın. Düzen, karmaşanın içinden doğar. Cesaret, korkunun kontrol altına alınmasıyla başlar. Güç ise disiplinli bir rutinin meyvesidir.`},{title:`Bölüm 2: Hazırlık ve Hız`,content:`Savaşta en büyük erdem hızdır. Hazırlıksız olanı, hazırlıklı olan ezer.
Zafer kazanmış savaşçılar önce kazanır, sonra savaşa giderler. Yenilmiş savaşçılar ise önce savaşa gider, sonra nasıl kazanacaklarını düşünürler.

Sabah rutini senin hazırlığındır. Gün başlamadan önce zihnini ve bedenini hizalamayan kişi, günün kaosunda savrulup yenilmeye mahkûmdur.`}]},{id:`seneca_brevity_of_life`,title:`Yaşamın Kısalığı Üzerine`,author:`Lucius Annaeus Seneca`,category:`Zaman Yönetimi & Odak`,pagesEstimate:30,summary:`Zamanın nasıl boş yere harcandığını ve insanın kendi hayatını nasıl bilinçsizce tükettiğini yüzümüze çarpan sarsıcı bir başyapıt.`,chapters:[{title:`Bölüm 1: Zamanın Değeri`,content:`Hayat bize kısa verilmedi; biz onu kısaltıyoruz. Bize verilen zaman az değil, biz onu savurganca harcıyoruz.
Tıpkı büyük bir servetin savurgan bir mirasçının elinde birkaç günde eriyip gitmesi gibi, en geniş ömür de iyi kullanılmadığında yok olup gider.

İnsanlar paralarına gelince aşırı derecede cimridir; fakat iş zamanlarını başkalarına ya da anlamsız şeylere harcamaya gelince inanılmaz derecede cömert davranırlar. Oysa tek cimri olmamız gereken şey zamandır.`}]}],Qe=`Tümü`,$e=[`Tümü`,`Disiplin`,`İrade`,`Odak`,`Güç`,`Bilgelik`,`Özgüven`,`Stoacılık`];function et(){let e=Qe===`Tümü`?n:n.filter(e=>e.category===Qe||e.color===Qe);return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- In-App Library Reader Featured Banner -->
      <div class="p-5 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/40 border border-purple-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="text-3xl">📖</span>
          <div>
            <span class="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-widest">[ DAHİLİ E-KİTAP KÜTÜPHANESİ ]</span>
            <h3 class="text-sm font-black text-white">ÜCRETSİZ BAŞYAPITLARI OKU</h3>
            <p class="text-[11px] text-slate-300 mt-0.5">Marcus Aurelius, Epiktetos, Seneka ve Sun Tzu tam bölümler.</p>
          </div>
        </div>

        <button type="button" id="btnLaunchInAppReader" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-purple-500 text-black font-black text-xs font-mono tracking-wider uppercase transition hover:brightness-110 active:scale-95 shadow-md shadow-purple-500/20 shrink-0 flex items-center justify-center gap-1.5">
          <span>📚 KİTABI AÇ & OKU ➔</span>
        </button>
      </div>

      <!-- Quick 10 Masterwork Summaries Modal Trigger -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <span>🃏 ZİHİN KARTLARI & ÖZETLER</span>
          </h2>
          <span class="text-[11px] text-slate-400">Bilişsel Yeniden Çerçeveleme (CBT) & 10 Bilim Kitap Özeti</span>
        </div>

        <button type="button" id="btnOpenBooksModal" class="px-3 py-1.5 rounded-xl bg-slate-950 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold hover:bg-purple-950/30 transition flex items-center gap-1">
          <span>📋 10 Kitap Özeti</span>
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        ${$e.map(e=>`
          <button type="button" class="btn-filter-category px-3 py-1 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap ${e===Qe?`bg-cyan-500 text-black shadow-md shadow-cyan-500/20`:`bg-slate-900 border border-slate-800 text-slate-400 hover:text-white`}" data-cat="${e}">
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
  `}function tt(){return _().activeModal===`books`?`
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
          ${t.map(e=>`
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
  `:``}function nt(e){let t=document.getElementById(`btnLaunchInAppReader`);t&&t.addEventListener(`click`,()=>{A(),N(`light`),v({activeModal:`reader`}),e&&e()}),document.querySelectorAll(`.btn-filter-category`).forEach(t=>{t.addEventListener(`click`,()=>{Qe=t.getAttribute(`data-cat`),A(),N(`light`),e&&e()})}),document.querySelectorAll(`.mantra-card-wrapper`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.querySelector(`.mantra-card-inner`);t&&(t.classList.toggle(`flipped`),A(),N(`light`))})});let n=document.getElementById(`btnOpenBooksModal`);n&&n.addEventListener(`click`,()=>{A(),N(`light`),v({activeModal:`books`}),e&&e()});let r=document.getElementById(`btnCloseBooksModal`);r&&r.addEventListener(`click`,()=>{v({activeModal:null}),e&&e()})}var rt=`v2.3.0`,it=`https://api.github.com/repos/szgnemin1/reset66/releases/latest`;function at(e,t=rt){if(!e)return!1;let n=e.replace(/^v/,``).split(`.`).map(e=>parseInt(e,10)||0),r=t.replace(/^v/,``).split(`.`).map(e=>parseInt(e,10)||0);for(let e=0;e<Math.max(n.length,r.length);e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function ot(){try{let e=await fetch(it,{cache:`no-cache`,headers:{Accept:`application/vnd.github.v3+json`}});if(!e.ok)return null;let t=await e.json(),n=t.tag_name,r=(t.assets||[]).find(e=>e.name.endsWith(`.apk`)),i=r?r.browser_download_url:t.html_url;return{tag:n,name:t.name||n,body:t.body||`Performans iyileştirmeleri ve yeni sistem modülleri.`,publishedAt:t.published_at,downloadUrl:i,apkName:r?r.name:`reset66.apk`,apkSize:r?Math.round(r.size/1024/1024*10)/10:null}}catch(e){return console.warn(`GitHub update check failed (offline or network issue):`,e),null}}async function st(e=!0){let t=await ot();return t?at(t.tag,`v2.3.0`)?(ct(t),!0):(e||alert(`✅ Harika! Uygulamanız zaten en güncel sürümde (${rt}).`),!1):(e||alert(`⚠️ GitHub sunucularına bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.`),!1)}function ct(e){let t=document.getElementById(`inAppUpdateModal`);t&&t.remove(),j(),N(`success`);let n=`
    <div id="inAppUpdateModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-3xl bg-slate-900 border-2 border-cyan-500/70 p-5 shadow-[0_0_45px_rgba(6,182,212,0.35)] space-y-4 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl animate-bounce">⚡</span>
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">[ ANLIK GİTHUB GÜNCELLEMESİ ]</span>
              <h2 class="text-sm font-black text-white">YENİ SÜRÜM BULUNDU!</h2>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
            ${e.tag}
          </span>
        </div>

        <!-- Version Transition Tag -->
        <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <div>
            <span class="text-slate-400 block text-[10px]">Mevcut Sürüm:</span>
            <span class="text-slate-300 font-bold">${rt}</span>
          </div>
          <span class="text-cyan-400 text-base">➔</span>
          <div>
            <span class="text-cyan-400 block text-[10px]">Yeni Sürüm:</span>
            <span class="text-cyan-300 font-black">${e.tag} ${e.apkSize?`(${e.apkSize} MB)`:``}</span>
          </div>
        </div>

        <!-- Changelog Box -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Yenilikler & Protokol Notları:</span>
          <div class="max-h-36 overflow-y-auto p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans scrollbar-none whitespace-pre-line">
            ${e.body}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-1">
          <button type="button" id="btnApplyUpdateNow" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 hover:brightness-110 active:scale-95 text-black font-black text-xs font-mono tracking-wider uppercase transition shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            🚀 ŞİMDİ GÜNCELLE (APK İNDİR & KUR)
          </button>
          
          <button type="button" id="btnDismissUpdate" class="w-full py-2 rounded-xl text-center text-xs font-mono text-slate-500 hover:text-slate-300 transition">
            Daha Sonra Hatırlat
          </button>
        </div>

      </div>
    </div>
  `;document.body.insertAdjacentHTML(`beforeend`,n),document.getElementById(`btnApplyUpdateNow`).addEventListener(`click`,()=>{A(),N(`heavy`),window.open(e.downloadUrl,`_system`)}),document.getElementById(`btnDismissUpdate`).addEventListener(`click`,()=>{A(),N(`light`),document.getElementById(`inAppUpdateModal`).remove()})}var lt=e=>{let t=new Map;t.set(`web`,{name:`web`});let n=e.CapacitorPlatforms||{currentPlatform:{name:`web`},platforms:t};return n.addPlatform=(e,t)=>{n.platforms.set(e,t)},n.setPlatform=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))},n},ut=(e=>e.CapacitorPlatforms=lt(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{});ut.addPlatform,ut.setPlatform;var z;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(z||(z={}));var dt=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},ft=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,pt=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=e.CapacitorPlatforms,a=i?.currentPlatform?.getPlatform||(()=>t===null?ft(e):t.name),o=i?.currentPlatform?.isNativePlatform||(()=>a()!==`web`),s=i?.currentPlatform?.isPluginAvailable||(e=>!!(d.get(e)?.platforms.has(a())||c(e))),c=i?.currentPlatform?.getPluginHeader||(e=>n.PluginHeaders?.find(t=>t.name===e)),l=t=>e.console.error(t),u=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),d=new Map,f=i?.currentPlatform?.registerPlugin||((e,i={})=>{let o=d.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let s=a(),l=c(e),u,f=async()=>(!u&&s in i?u=u=typeof i[s]==`function`?await i[s]():i[s]:t!==null&&!u&&`web`in i&&(u=u=typeof i.web==`function`?await i.web():i.web),u),ee=(t,r)=>{if(l){let i=l?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new dt(`"${e}" plugin is not implemented on ${s}`,z.Unimplemented)},p=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=ee(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new dt(`"${e}.${t}()" is not implemented on ${s}`,z.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},m=p(`addListener`),h=p(`removeListener`),te=(e,t)=>{let n=m({eventName:e},t),r=async()=>{let r=await n;h({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},g=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return l?te:m;case`removeListener`:return h;default:return p(t)}}});return r[e]=g,d.set(e,{name:e,proxy:g,platforms:new Set([...Object.keys(i),...l?[s]:[]])}),g});return n.convertFileSrc||(n.convertFileSrc=e=>e),n.getPlatform=a,n.handleError=l,n.isNativePlatform=o,n.isPluginAvailable=s,n.pluginMethodNoop=u,n.registerPlugin=f,n.Exception=dt,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n.platform=n.getPlatform(),n.isNative=n.isNativePlatform(),n},mt=(e=>e.Capacitor=pt(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),ht=mt.registerPlugin;mt.Plugins;var gt=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new mt.Exception(e,z.Unimplemented)}unavailable(e=`not available`){return new mt.Exception(e,z.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},_t=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),vt=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),yt=class extends gt{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=vt(n).trim(),r=vt(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=_t(e.key),n=_t(e.value),r=`; expires=${(e.expires||``).replace(`expires=`,``)}`,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};ht(`CapacitorCookies`,{web:()=>new yt});var bt=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),xt=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},St=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,Ct=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=xt(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},wt=class extends gt{async request(e){let t=Ct(e,e.webFetchExtra),n=St(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await bt(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};ht(`CapacitorHttp`,{web:()=>new wt});var Tt;(function(e){e[e.Sunday=1]=`Sunday`,e[e.Monday=2]=`Monday`,e[e.Tuesday=3]=`Tuesday`,e[e.Wednesday=4]=`Wednesday`,e[e.Thursday=5]=`Thursday`,e[e.Friday=6]=`Friday`,e[e.Saturday=7]=`Saturday`})(Tt||(Tt={}));var Et=`modulepreload`,Dt=function(e,t){return new URL(e,t).href},Ot={},kt=function(e){return e.pathname.endsWith(`.css`)},At=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},jt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Dt(t,n);let r=s(t),i=kt(r);return At(Ot,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Et,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},B=ht(`LocalNotifications`,{web:()=>jt(()=>import(`./web-B5zMbrfb.js`).then(e=>new e.LocalNotificationsWeb),[],import.meta.url)});async function Mt(){try{return(await B.requestPermissions()).display===`granted`}catch{if(`Notification`in window)return await Notification.requestPermission()===`granted`}return!1}async function Nt(){if(_().notificationsEnabled===!1)try{await B.cancel({notifications:[{id:1},{id:2},{id:3}]})}catch{}else try{if((await B.checkPermissions()).display!==`granted`&&(await B.requestPermissions()).display!==`granted`)return;await B.cancel({notifications:[{id:1},{id:2},{id:3}]}),await B.schedule({notifications:[{id:1,title:`⚔️ Uyan Avcı! Zindanın Kapıları Açıldı`,body:`Güne soğuk duş, 1 litre su ve akıllı bileklik senkronuyla başla. Zinciri kırma!`,schedule:{on:{hour:7,minute:30},allowWhileIdle:!0},sound:`default`},{id:2,title:`⌚ Gün Yarılandı • Boss Seni Bekliyor`,body:`Akıllı bilekliğindeki adımları ve koşunu senkronize et, Boss'a ilk kritik vuruşu yap!`,schedule:{on:{hour:14,minute:0},allowWhileIdle:!0},sound:`default`},{id:3,title:`🔥 DİKKAT: Gece Yarısı Berserk Uyarısı!`,body:`Bugünkü görevlerini henüz mühürlemediysen Boss yarın X2 BERSERK olacak ve can kaybedeceksin!`,schedule:{on:{hour:21,minute:30},allowWhileIdle:!0},sound:`default`}]}),console.log(`[Notifications] Daily routine scheduled successfully.`)}catch(e){console.warn(`[Notifications] LocalNotifications not supported natively:`,e)}}async function Pt(){try{await B.schedule({notifications:[{id:99,title:`⚔️ Reset66 Avcı Bildirimi Aktif!`,body:`Yerel bildirim sistemi başarıyla kuruldu. Artık hiçbir zindan vuruşunu kaçırmayacaksın.`,schedule:{at:new Date(Date.now()+1500)}}]})}catch{`Notification`in window&&Notification.permission===`granted`&&new Notification(`⚔️ Reset66 Avcı Bildirimi Aktif!`,{body:`Yerel bildirim sistemi başarıyla kuruldu.`})}}function Ft(){let e=_();return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Settings Header Banner -->
      <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div>
          <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">[ SİSTEM AYARLARI ]</span>
          <h2 class="text-base font-black text-white">RESET66 KONTROL MERKEZİ</h2>
          <span class="text-[11px] text-slate-400">Tüm cihaz, ses, titreşim ve yedekleme tercihleri.</span>
        </div>
        <span class="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
          ${rt}
        </span>
      </div>

      <!-- Toggles Section -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 pb-2 border-b border-slate-800">
          🎮 OYUN & GERİ BİLDİRİM TERCİHLERİ
        </h3>

        <!-- Sound Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">🔊 Web Audio Ses Efektleri</span>
            <span class="text-[10px] text-slate-400">Vuruş, tamamlama ve Tibet çanı sesleri</span>
          </div>
          <button type="button" id="btnSettingToggleSound" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${e.soundEnabled?`bg-cyan-500 text-black shadow-sm`:`bg-slate-800 text-slate-500`}">
            ${e.soundEnabled?`AÇIK`:`KAPALI`}
          </button>
        </div>

        <!-- Haptics Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">📳 Haptik Titreşim Geri Bildirimi</span>
            <span class="text-[10px] text-slate-400">Dokunma, set tamamlama ve boss darbeleri</span>
          </div>
          <button type="button" id="btnSettingToggleHaptics" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${e.hapticsEnabled?`bg-purple-500 text-black shadow-sm`:`bg-slate-800 text-slate-500`}">
            ${e.hapticsEnabled?`AÇIK`:`KAPALI`}
          </button>
        </div>

        <!-- Local Notifications Toggle -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <span class="text-xs font-bold text-white block">🔔 Çevrimdışı Akıllı Bildirimler</span>
            <span class="text-[10px] text-slate-400">07:30 Sabah, 14:00 Senkron, 21:30 Berserk Uyarısı</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button type="button" id="btnTestNotification" class="px-2 py-1 rounded-lg text-[10px] font-mono text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10">
              Test Et
            </button>
            <button type="button" id="btnSettingToggleNotifications" class="px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition ${e.notificationsEnabled?`bg-emerald-500 text-black shadow-sm`:`bg-slate-800 text-slate-500`}">
              ${e.notificationsEnabled?`AÇIK`:`KAPALI`}
            </button>
          </div>
        </div>

        <!-- In-App Auto-Update Checker Row -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-cyan-500/30">
          <div>
            <span class="text-xs text-cyan-300 font-bold block">🔄 Otomatik Güncelleme (GitHub)</span>
            <span class="text-[10px] text-slate-400 font-mono">Her açılışta anlık bakar • Sürüm: ${rt}</span>
          </div>
          <button type="button" id="btnSettingCheckUpdates" class="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition">
            Denetle ➔
          </button>
        </div>
      </div>

      <!-- Life Reset Onboarding & Profile Re-Assessment -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-2 border-b border-slate-800">
          🧬 YAŞAM SIFIRLAMA ANKETİ
        </h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          Uygulama ilk açıldığında yapılan 5 adımlı Life Reset alım anketini dilediğin an yenileyebilir, alışkanlık sürtünme skorunu tekrar hesaplayabilirsin.
        </p>
        <button type="button" id="btnSettingReopenAssessment" class="w-full py-3 rounded-2xl bg-slate-950 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-bold hover:bg-cyan-950/30 transition">
          🧬 5 Adımlı Alım Anketini Başlat ➔
        </button>
      </div>

      <!-- Data Backup & Reset Actions -->
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 space-y-3">
        <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 pb-2 border-b border-slate-800">
          💾 VERİ YEDEKLEME & SIFIRLAMA
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button type="button" id="btnSettingExportData" class="py-2.5 px-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            💾 Verileri Dışa Aktar (JSON)
          </button>
          <button type="button" id="btnSettingImportData" class="py-2.5 px-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-bold hover:text-white transition text-center">
            📥 Verileri İçe Aktar (JSON)
          </button>
        </div>

        <button type="button" id="btnSettingResetAll" class="w-full py-2.5 rounded-2xl bg-slate-950 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold hover:bg-rose-950/30 transition text-center mt-2">
          ⚠️ Tüm İlerlemeyi Sıfırla (Fabrika Ayarları)
        </button>
      </div>

    </div>
  `}function It(e){let t=document.getElementById(`btnSettingToggleSound`);t&&t.addEventListener(`click`,()=>{let t=_();A(),N(`light`),v({soundEnabled:!t.soundEnabled}),e&&e()});let n=document.getElementById(`btnSettingToggleNotifications`);n&&n.addEventListener(`click`,async()=>{let t=_();A(),N(`light`);let n=!t.notificationsEnabled;n&&await Mt(),v({notificationsEnabled:n}),await Nt(),e&&e()});let r=document.getElementById(`btnTestNotification`);r&&r.addEventListener(`click`,async()=>{A(),N(`success`),await Mt(),await Pt(),alert(`🔔 Test bildirimi tetiklendi! Bildirim panelinizi kontrol edin.`)});let i=document.getElementById(`btnSettingToggleHaptics`);i&&i.addEventListener(`click`,()=>{let t=_();A(),N(`medium`),v({hapticsEnabled:!t.hapticsEnabled}),e&&e()});let a=document.getElementById(`btnSettingCheckUpdates`);a&&a.addEventListener(`click`,()=>{A(),N(`light`),a.textContent=`Denetleniyor...`,st(!1).finally(()=>{a.textContent=`Denetle ➔`})});let o=document.getElementById(`btnSettingReopenAssessment`);o&&o.addEventListener(`click`,()=>{A(),N(`light`),v({activeModal:`assessment`}),e&&e()});let s=document.getElementById(`btnSettingExportData`);s&&s.addEventListener(`click`,()=>{let e=ce(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reset66_backup_${Date.now()}.json`,r.click(),URL.revokeObjectURL(n),N(`success`)});let c=document.getElementById(`btnSettingImportData`);c&&c.addEventListener(`click`,()=>{let t=prompt(`Dışa aktardığınız JSON yedeğini yapıştırın:`);t&&(le(t)?(N(`success`),alert(`✅ Veriler başarıyla içe aktarıldı!`),e&&e()):alert(`❌ Geçersiz JSON formatı!`))});let l=document.getElementById(`btnSettingResetAll`);l&&l.addEventListener(`click`,()=>{confirm(`⚠️ DİKKAT: Tüm seviyeniz, streak ve boss ilerlemeniz silinecektir. Emin misiniz?`)&&(se(),N(`error`),alert(`Tüm veriler sıfırlandı.`),e&&e())})}var Lt=`marcus_aurelius`,Rt=0,V=`normal`;function zt(){if(_().activeModal!==`reader`)return``;let e=Ze.find(e=>e.id===Lt)||Ze[0],t=e.chapters[Rt]||e.chapters[0],n=`text-sm leading-relaxed`;return V===`large`&&(n=`text-base leading-loose`),V===`xlarge`&&(n=`text-lg leading-loose`),`
    <div id="readerModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-xl h-[95vh] flex flex-col rounded-3xl bg-slate-900 border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] text-white overflow-hidden">
        
        <!-- Reader Top Bar -->
        <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div class="flex items-center gap-2">
            <span class="text-xl">📖</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-widest">[ DAHİLİ KÜTÜPHANE ]</span>
              <h2 class="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">${e.title}</h2>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <!-- Font Size Toggles -->
            <div class="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 text-xs font-mono">
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${V===`normal`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="normal">A</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${V===`large`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="large">A+</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${V===`xlarge`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="xlarge">A++</button>
            </div>

            <!-- Close Button -->
            <button type="button" id="btnCloseReaderModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
              ✕
            </button>
          </div>
        </div>

        <!-- Book & Chapter Selectors Bar -->
        <div class="p-2.5 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          ${Ze.map(e=>`
            <button type="button" class="btn-select-book px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===Lt?`bg-purple-500 text-black`:`bg-slate-900 text-slate-400 border border-slate-800`}" data-book="${e.id}">
              ${e.title}
            </button>
          `).join(``)}
        </div>

        <!-- Chapter Selector Pills -->
        <div class="px-3 py-1.5 bg-slate-900/60 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span class="text-slate-500 shrink-0 font-bold">BÖLÜM:</span>
          ${e.chapters.map((e,t)=>`
            <button type="button" class="btn-select-chapter px-2 py-0.5 rounded-md whitespace-nowrap transition ${t===Rt?`bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40`:`text-slate-400 hover:text-slate-200`}" data-idx="${t}">
              ${t+1}. Bölüm
            </button>
          `).join(``)}
        </div>

        <!-- Scrollable Reader Reading Canvas -->
        <div class="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4 font-serif text-slate-200 bg-[#0A0D14]">
          <div class="pb-2 border-b border-slate-800">
            <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold block">${e.author}</span>
            <h3 class="text-base font-bold text-white font-sans mt-0.5">${t.title}</h3>
          </div>

          <div class="${n} text-slate-300 whitespace-pre-line selection:bg-purple-500 selection:text-white">
            ${t.content}
          </div>
        </div>

        <!-- Bottom Action: Seal Reading & Damage Boss -->
        <div class="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <div class="text-[11px] font-mono text-slate-400">
            <span>Hedef: 15 Sayfa Okuma</span>
          </div>
          <button type="button" id="btnFinishReading" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-black font-black text-xs font-mono uppercase tracking-wider transition hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            📖 OKUMAYI MÜHÜRLE & BOSS'A VUR (-35 HP)
          </button>
        </div>

      </div>
    </div>
  `}function Bt(e){let t=document.getElementById(`btnCloseReaderModal`);t&&t.addEventListener(`click`,()=>{v({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-select-book`).forEach(t=>{t.addEventListener(`click`,()=>{Lt=t.getAttribute(`data-book`),Rt=0,A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-select-chapter`).forEach(t=>{t.addEventListener(`click`,()=>{Rt=Number(t.getAttribute(`data-idx`)),A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-font-size`).forEach(t=>{t.addEventListener(`click`,()=>{V=t.getAttribute(`data-size`),A(),N(`light`),e&&e()})});let n=document.getElementById(`btnFinishReading`);n&&n.addEventListener(`click`,()=>{he(),N(`success`);let t=_().todayHabits.map(e=>e.id===`q_reading`?{...e,current:15,completed:!0}:e);b(35),y(35,`MND`),alert(`📖 Tebrikler! 15 sayfalık Stoacı derin okuma tamamlandı. Boss'a 35 Hasar vuruldu ve +35 Zihin (MND) XP kazanıldı!`),v({todayHabits:t,activeModal:null}),e&&e()})}var H=0,Vt=[];function Ht(){let e=_();if(e.onboardingDone&&e.activeModal!==`assessment`)return``;let t=a[H],n=a.length,r=Math.round((H+1)/n*100);return`
    <div id="onboardingModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🧬</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">YAŞAM SIFIRLAMA ANALİZİ</h2>
              <span class="text-[10px] text-slate-400">Adım ${H+1} / ${n}</span>
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
  `}function Ut(e){document.querySelectorAll(`.onboarding-opt-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=a[H].options[n];Vt.push(r),A(),N(`light`),H<a.length-1?(H++,e&&e()):Wt(e)})});let t=document.getElementById(`btnSkipOnboarding`);t&&t.addEventListener(`click`,()=>{v({onboardingDone:!0,activeModal:null}),e&&e()})}function Wt(e){j(),N(`success`);let t=0;Vt.forEach(e=>{t+=e.score||30}),v({onboardingDone:!0,assessmentScore:Math.min(100,Math.round(t/(a.length*50)*100)),activeModal:null}),e&&e()}var Gt=`box`,U=5,W=300,G=null,K=0,q=0;function Kt(){let e=i[Gt],t=be(),n=we(),r=Math.floor(W/60),a=W%60,o=`${String(r).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`;return`
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
          ${Object.entries(i).map(([e,t])=>`
              <button type="button" class="btn-med-tech p-2 rounded-xl border text-center transition ${e===Gt?`bg-purple-500/20 border-purple-500/60 text-purple-200 font-bold shadow-sm`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200`}" data-tech="${e}">
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
            <span id="medTimerDisplay" class="text-xl font-bold text-purple-300 font-mono">${o}</span>
          </div>

          <div class="grid grid-cols-4 gap-2">
            ${[3,5,10,15].map(e=>`
              <button type="button" class="btn-med-duration py-1.5 rounded-xl border text-xs font-mono font-bold transition ${e===U?`bg-purple-500 text-black border-purple-400 shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-dur="${e}">
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
          ${G?`⏸️ MEDİTASYONU DURDUR`:`▶️ MEDİTASYONU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function qt(e){let t=document.getElementById(`btnCloseMedModal`);t&&t.addEventListener(`click`,()=>{Yt(),v({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-med-tech`).forEach(t=>{t.addEventListener(`click`,()=>{Gt=t.getAttribute(`data-tech`),A(),N(`light`),Xt(),e&&e()})}),document.querySelectorAll(`.btn-med-duration`).forEach(t=>{t.addEventListener(`click`,()=>{U=Number(t.getAttribute(`data-dur`)),W=U*60,A(),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-binaural`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-binaural`);be()===n?ve():ye(n),N(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-noise`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-noise`);we()===n?Se():Ce(n),N(`light`),e&&e()})});let n=document.getElementById(`btnPlayTibetBowl`);n&&n.addEventListener(`click`,()=>{_e(),N(`medium`)});let r=document.getElementById(`btnToggleMedSession`);r&&r.addEventListener(`click`,()=>{G?Yt():Jt(),e&&e()})}function Jt(){F(!0),_e(),N(`medium`),K=0;let e=i[Gt];q=e.phases[0].sec,G=setInterval(()=>{W--,q--,q<=0&&(K=(K+1)%e.phases.length,q=e.phases[K].sec,N(`light`)),Zt(e.phases[K],q),W<=0&&Qt()},1e3)}function Yt(){G&&(clearInterval(G),G=null),F(!1),ve(),Se()}function Xt(){K=0,q=0,W=U*60}function Zt(e,t){let n=document.getElementById(`medPhaseLabel`),r=document.getElementById(`medPhaseTimer`),i=document.getElementById(`medInstructionText`),a=document.getElementById(`medOrbCore`),o=document.getElementById(`medOrbRing2`),s=document.getElementById(`medOrbRing3`),c=document.getElementById(`medTimerDisplay`);if(n&&(n.textContent=e.label),r&&(r.textContent=`${t}s`),i&&(i.textContent=e.instr),a&&(e.action===`expand`?(a.style.transform=`scale(1.35)`,o&&(o.style.transform=`scale(1.25)`),s&&(s.style.transform=`scale(1.15)`)):e.action===`contract`?(a.style.transform=`scale(0.85)`,o&&(o.style.transform=`scale(0.95)`),s&&(s.style.transform=`scale(0.95)`)):a.style.transform=`scale(1.1)`),c){let e=Math.floor(W/60),t=W%60;c.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}}function Qt(){Yt(),_e(),N(`success`);let e=U*10;y(e,`MND`),alert(`🧘 Tebrikler! ${U} dakikalık derin farkındalık seansı tamamlandı. +${e} Zihin (MND) XP kazandın!`),v({activeModal:null})}var J=25,Y=1500,X=null;function $t(){let e=Math.floor(Y/60),t=Y%60;return`
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
              ${X?`ODAK AKTİF`:`DURAKLATILDI`}
            </span>
          </div>
        </div>

        <!-- Duration Presets -->
        <div class="grid grid-cols-3 gap-2 text-xs font-mono">
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${J===25?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="25">
            25 Dk (Klasik)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${J===50?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="50">
            50 Dk (Derin)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${J===90?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="90">
            90 Dk (Huberman)
          </button>
        </div>

        <!-- Start / Pause Button -->
        <button type="button" id="btnToggleFocusTimer" class="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          ${X?`⏸️ ODAK BLOKUNU DURDUR`:`▶️ ODAK BLOKUNU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function en(e){let t=document.getElementById(`btnCloseFocusModal`);t&&t.addEventListener(`click`,()=>{nn(),F(!1),v({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-focus-preset`).forEach(t=>{t.addEventListener(`click`,()=>{J=Number(t.getAttribute(`data-min`)),Y=J*60,A(),N(`light`),e&&e()})});let n=document.getElementById(`btnToggleFocusTimer`);n&&n.addEventListener(`click`,()=>{X?nn():tn(),e&&e()})}function tn(){F(!0),A(),N(`medium`),X=setInterval(()=>{Y--;let e=Math.floor(Y/60),t=Y%60,n=document.getElementById(`focusTimeDisplay`);n&&(n.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`),Y<=0&&(nn(),j(),N(`success`),y(J,`FOC`),alert(`⏱️ Pürdikkat Odak Seansı Tamamlandı! +${J} Odak (FOC) XP kazandın!`),v({activeModal:null}))},1e3)}function nn(){X&&(clearInterval(X),X=null)}function rn(){let e=_().sleepData,t=(e.totalMinutes/60).toFixed(1),n=(e.deepMinutes/60).toFixed(1),r=(e.remMinutes/60).toFixed(1);return`
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
  `}function an(e){let t=document.getElementById(`btnCloseSleepModal`);t&&t.addEventListener(`click`,()=>{v({activeModal:null}),e&&e()});let n=document.getElementById(`btnScanBLE`);n&&n.addEventListener(`click`,()=>{A(),N(`medium`),Me(t=>{let n=document.getElementById(`sleepSyncStatusLog`);n&&(n.textContent=t),e&&e()})});let r=document.getElementById(`btnHealthConnect`);r&&r.addEventListener(`click`,()=>{A(),N(`light`),je()});let i=document.getElementById(`btnUploadHealthFile`),a=document.getElementById(`healthFileInput`);i&&a&&(i.addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,t=>{let n=t.target.files[0];if(!n)return;let r=new FileReader;r.onload=t=>{let r=Ne(t.target.result);r.success?(j(),N(`success`),v({sleepData:{..._().sleepData,connected:!0,deviceName:n.name,totalMinutes:r.totalMinutes,deepMinutes:r.deepMinutes,remMinutes:r.remMinutes,lightMinutes:r.lightMinutes,qualityScore:r.qualityScore,restingHr:r.restingHr,hasRestBuff:r.qualityScore>=80,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})}}),alert(`✅ ${n.name} başarıyla ayrıştırıldı! Uyku Kalite Skoru: %${r.qualityScore}`),e&&e()):alert(`Hata: `+r.error)},r.readAsText(n)}));let o=document.getElementById(`btnClaimSleepBuff`);o&&o.addEventListener(`click`,()=>{j(),N(`success`),y(30,`VIT`),y(15,`WIL`),alert(`⚡ Tam Dinlenmiş Buff'ı etkinleştirildi! +30 VIT ve +15 WIL XP kazandın!`),v({activeModal:null}),e&&e()})}function on(){let e=_(),t={u:e.playerName||`Avcı`,c:e.userClass||`shadow_warrior`,d:e.currentDay,dmg:e.coopMyDamage||0};try{let e=JSON.stringify(t);return`R66-${btoa(encodeURIComponent(e)).slice(0,8).toUpperCase()}`}catch{return`R66-7K2X9P`}}function sn(e,t){let n=_(),r=Math.floor(Math.random()*80)+70,i={active:!0,partnerName:e||`Gölge Ortağı`,partnerClass:t||`shadow_warrior`,partnerDamage:r,combinedDamage:(n.coopMyDamage||0)+r,syncedAt:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})};return b(r),v({coop:i}),M(),N(`heavy`),i}function cn(){v({coop:{active:!1,partnerName:null,partnerClass:null,partnerDamage:0}})}function ln(){let e=_();if(e.activeModal!==`inventory`)return``;let t=l(e.userClass),n=on();return s(e.equippedArtifact),`
    <div id="inventoryModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-500/40 p-5 shadow-[0_0_50px_rgba(168,85,247,0.3)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎒</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">AVCI ENVANTERİ & ESERLER</h2>
              <span class="text-[10px] text-slate-400">Rünler, Sınıf Pasifleri ve Eşli Zindan</span>
            </div>
          </div>
          <button type="button" id="btnCloseInventoryModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Hunter Class Card & Switcher -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest">[ AKTİF AVCI SINIFI ]</span>
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
              ${t.icon} ${t.name}
            </span>
          </div>
          
          <h3 class="text-sm font-bold text-white">${t.title}</h3>
          <p class="text-xs text-slate-300">${t.description}</p>
          
          <div class="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200">
            <span class="font-bold text-purple-400">⚡ Sınıf Pasifi (${t.perkTitle}):</span> ${t.perkDescription}
          </div>

          <!-- Class Selector Buttons -->
          <div class="grid grid-cols-3 gap-1.5 pt-2">
            ${c.map(t=>`
              <button type="button" class="btn-select-class py-2 px-1 rounded-xl text-center text-xs font-mono transition border ${t.id===e.userClass?`bg-purple-600 text-white font-bold border-purple-400 shadow-sm`:`bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700`}" data-class="${t.id}">
                <div class="text-base">${t.icon}</div>
                <div class="truncate text-[10px]">${t.name}</div>
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Streak Shield Status (Gölge Kalkanı) -->
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🛡️</span>
            <div>
              <h4 class="text-xs font-bold text-white">Gölge Kalkanı (Streak Freeze)</h4>
              <p class="text-[10px] text-slate-400">Atlanan günlerde zincir kırılmasını ve can kaybını engeller.</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-xl font-mono text-xs font-bold ${e.shields>0?`bg-cyan-500/20 text-cyan-300 border border-cyan-500/40`:`bg-slate-800 text-slate-500`}">
            ${e.shields||0} / 2 Hazır
          </span>
        </div>

        <!-- Relics & Artifacts Grid -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold uppercase text-amber-400">🏺 KAZANILAN EFSANEVİ ESERLER (${e.inventory?.length||0}/${o.length})</span>
            <span class="text-[10px] text-slate-400">Haftalık Boss'lardan Düşer</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${o.map(t=>{let n=(e.inventory||[]).includes(t.id),r=e.equippedArtifact===t.id;return`
                <div class="p-3 rounded-2xl border transition-all ${n?`bg-slate-950/90 border-slate-800 hover:border-amber-500/40`:`bg-slate-950/40 border-slate-900 opacity-50`}">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xl">${t.icon}</span>
                    <span class="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${n?`bg-amber-500/20 text-amber-300 border border-amber-500/30`:`bg-slate-800 text-slate-500`}">
                      ${t.rarity}
                    </span>
                  </div>
                  
                  <h5 class="text-xs font-bold text-white">${t.name}</h5>
                  <p class="text-[11px] text-slate-400 mt-1 leading-snug">${t.effect}</p>

                  <div class="mt-2.5 pt-2 border-t border-slate-900 flex items-center justify-between">
                    ${n?`
                      <button type="button" class="btn-equip-artifact w-full py-1.5 rounded-lg text-xs font-mono font-bold transition ${r?`bg-emerald-600 text-white`:`bg-slate-800 text-slate-300 hover:bg-slate-700`}" data-art="${t.id}">
                        ${r?`✓ KUŞANILDI`:`Kuşan ➔`}
                      </button>
                    `:`
                      <span class="text-[10px] font-mono text-slate-500 italic">🔒 Boss Zaferi Gerekir</span>
                    `}
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>

        <!-- Co-Op Boss Raid Section (Eşli Zindan Baskını) -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-950 to-slate-950 border border-rose-500/30 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🤝</span>
            <div>
              <h4 class="text-xs font-mono font-bold uppercase text-rose-400">EŞLİ ZİNDAN BASKINI (CO-OP RAID)</h4>
              <p class="text-[10px] text-slate-400">Arkadaşınla birleş, ikinizin vurduğu hasar aynı Boss'a işlesin!</p>
            </div>
          </div>

          ${e.coop?.active?`
            <div class="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono text-emerald-400 font-bold">✓ BASKIN ORTAĞI BAĞLI:</span>
                <div class="text-xs font-bold text-white">${e.coop.partnerName} (${e.coop.partnerClass})</div>
                <div class="text-[10px] text-slate-400">Ortağın Vurduğu Hasar: <span class="text-rose-400 font-bold">${e.coop.partnerDamage} HP</span></div>
              </div>
              <button type="button" id="btnLeaveCoop" class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-mono font-bold hover:bg-rose-500/30">
                Ayrıl
              </button>
            </div>
          `:`
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span class="text-slate-400">Senin Zindan Kodun:</span>
                <span class="font-bold text-cyan-400">${n}</span>
              </div>

              <div class="flex gap-2">
                <input type="text" id="inputPartnerRaidCode" placeholder="Arkadaşının Zindan Kodu (örn: R66-8K2X)" class="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500" />
                <button type="button" id="btnJoinCoop" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold transition">
                  Bağlan
                </button>
              </div>
            </div>
          `}
        </div>

      </div>
    </div>
  `}function un(e){let t=document.getElementById(`btnCloseInventoryModal`);t&&t.addEventListener(`click`,()=>{A(),v({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-select-class`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-class`);j(),N(`success`),v({userClass:n}),e&&e()})}),document.querySelectorAll(`.btn-equip-artifact`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-art`);A(),N(`light`),v({equippedArtifact:n}),e&&e()})});let n=document.getElementById(`btnJoinCoop`);n&&n.addEventListener(`click`,()=>{let t=document.getElementById(`inputPartnerRaidCode`),n=t?t.value.trim():``;n?(sn(`Gölge Müttefiki (`+n.slice(-4)+`)`,`Gölge Savaşçısı`),alert(`⚔️ Zindan Baskını Kuruldu! Müttefikiniz Boss'a doğrudan hasar vurarak savaşa dahil oldu!`),e&&e()):alert(`Lütfen geçerli bir zindan kodu girin.`)});let r=document.getElementById(`btnLeaveCoop`);r&&r.addEventListener(`click`,()=>{A(),cn(),e&&e()})}function dn(){let e=_();return e.activeModal===`sharecard`?(l(e.userClass),e.streak||e.currentDay,e.playerRank,`
    <div id="shareCardModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-sm rounded-3xl bg-slate-900 border border-cyan-500/50 p-4 shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-4 text-white flex flex-col items-center">
        
        <!-- Header -->
        <div class="w-full flex items-center justify-between pb-2 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">📸</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">HİKAYE & DURUM KARTI</h2>
              <span class="text-[10px] text-slate-400">9:16 Instagram Story Formatı</span>
            </div>
          </div>
          <button type="button" id="btnCloseShareCardModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <!-- Live Canvas Preview -->
        <div class="relative w-full aspect-[9/16] max-h-[55vh] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black flex items-center justify-center">
          <canvas id="shareCardCanvas" width="540" height="960" class="w-full h-full object-contain"></canvas>
        </div>

        <!-- Action Buttons -->
        <div class="w-full grid grid-cols-2 gap-2 text-xs font-mono font-bold">
          <button type="button" id="btnShareStory" class="py-3 px-3 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-600 text-white font-black hover:opacity-95 shadow-[0_0_20px_rgba(217,70,239,0.4)] flex items-center justify-center gap-1.5 transition">
            <span>🚀</span>
            <span>Hikaye Paylaş</span>
          </button>
          
          <button type="button" id="btnDownloadCard" class="py-3 px-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-1.5 transition">
            <span>💾</span>
            <span>Görseli İndir</span>
          </button>
        </div>

      </div>
    </div>
  `):``}function fn(e){let t=document.getElementById(`btnCloseShareCardModal`);t&&t.addEventListener(`click`,()=>{A(),v({activeModal:null}),e&&e()});let n=document.getElementById(`shareCardCanvas`);n&&pn(n);let r=document.getElementById(`btnDownloadCard`);r&&n&&r.addEventListener(`click`,()=>{A(),N(`success`);let e=n.toDataURL(`image/png`),t=document.createElement(`a`);t.download=`reset66-gun-${_().currentDay}-raporu.png`,t.href=e,t.click()});let i=document.getElementById(`btnShareStory`);i&&n&&i.addEventListener(`click`,async()=>{j(),N(`success`),n.toBlob(async e=>{if(!e)return;let t=new File([e],`reset66-gun-${_().currentDay}.png`,{type:`image/png`});if(navigator.canShare&&navigator.canShare({files:[t]}))try{await navigator.share({title:`Reset66: Gün ${_().currentDay} Mühürlendi!`,text:`66 Günlük Disiplin Zindanında Gün ${_().currentDay} tamamlandı! Zinciri Kırma.`,files:[t]});return}catch(e){console.log(`Share canceled or failed:`,e)}let r=n.toDataURL(`image/png`),i=document.createElement(`a`);i.download=`reset66-gun-${_().currentDay}.png`,i.href=r,i.click(),alert(`📸 Görsel cihazınıza indirildi! Instagram veya WhatsApp hikayenizde paylaşabilirsiniz.`)})})}function pn(e){let t=e.getContext(`2d`),n=_(),r=l(n.userClass),i=n.currentDay||1,a=n.playerRank||`B-Rank`,o=n.playerName||`Gölge Avcısı`,s=n.streak||i,c=n.shields||0,u=t.createLinearGradient(0,0,0,960);u.addColorStop(0,`#04070B`),u.addColorStop(.5,`#0B0F19`),u.addColorStop(1,`#020408`),t.fillStyle=u,t.fillRect(0,0,540,960),t.strokeStyle=`#06B6D4`,t.lineWidth=4,t.strokeRect(16,16,508,928),t.strokeStyle=`rgba(168, 85, 247, 0.4)`,t.lineWidth=1,t.strokeRect(24,24,492,912);let d=t.createRadialGradient(270,100,20,270,100,250);d.addColorStop(0,`rgba(6, 182, 212, 0.25)`),d.addColorStop(1,`rgba(0, 0, 0, 0)`),t.fillStyle=d,t.fillRect(0,0,540,400),t.fillStyle=`#06B6D4`,t.font=`bold 13px monospace`,t.textAlign=`center`,t.fillText(`RESET66 • 66 GÜNLÜK DİSİPLİN PROTOKOLÜ`,270,70),t.fillStyle=`#FFFFFF`,t.font=`900 68px monospace`,t.fillText(`GÜN ${i}`,270,150),t.fillStyle=`#94A3B8`,t.font=`bold 16px monospace`,t.fillText(`/ 66 GÜN TAMAMLANIYOR`,270,185),t.fillStyle=`rgba(15, 23, 42, 0.85)`,t.strokeStyle=`#334155`,t.lineWidth=1.5,mn(t,45,220,450,90,16),t.fill(),t.stroke(),t.textAlign=`left`,t.fillStyle=`#FFFFFF`,t.font=`bold 22px sans-serif`,t.fillText(`${r.icon} ${o}`,65,260),t.fillStyle=`#38BDF8`,t.font=`bold 12px monospace`,t.fillText(`[ ${a} ] • ${r.name} • 🛡️ ${c} Kalkan`,65,288),[{label:`🏃 KOŞULAN MESAFE`,val:`${n.sleepData?.lastDistanceKm||`5.0`} KM`,sub:`Kardiyo & Ciğer`},{label:`🏋️ ANTRENMAN`,val:`Tamamlandı`,sub:`Hipertrofi & Güç`},{label:`📖 ZİHİN OKUMASI`,val:`15 Sayfa`,sub:`Stoacı Felsefe`},{label:`🔥 ZİNCİRİ KIRMA`,val:`${s} Günlük Seri`,sub:`Kesintisiz Disiplin`}].forEach((e,n)=>{let r=n%2,i=Math.floor(n/2),a=45+r*235,o=335+i*110;t.fillStyle=`rgba(2, 6, 23, 0.7)`,t.strokeStyle=`rgba(56, 189, 248, 0.2)`,t.lineWidth=1,mn(t,a,o,215,95,14),t.fill(),t.stroke(),t.fillStyle=`#94A3B8`,t.font=`bold 10px monospace`,t.fillText(e.label,a+14,o+26),t.fillStyle=`#38BDF8`,t.font=`bold 18px sans-serif`,t.fillText(e.val,a+14,o+56),t.fillStyle=`#64748B`,t.font=`10px sans-serif`,t.fillText(e.sub,a+14,o+78)}),t.fillStyle=`rgba(225, 29, 72, 0.15)`,t.strokeStyle=`rgba(225, 29, 72, 0.4)`,mn(t,45,565,450,110,16),t.fill(),t.stroke(),t.textAlign=`center`,t.fillStyle=`#FB7185`,t.font=`bold 12px monospace`,t.fillText(`👾 HAFTALIK ZİNDAN BOSS ARENASI`,270,600),t.fillStyle=`#FFFFFF`,t.font=`bold 19px sans-serif`,t.fillText(n.bossHp<=0?`🏆 HAFTANIN BOSSU YOK EDİLDİ!`:`Kalan Boss Canı: ${n.bossHp} / ${n.bossMaxHp} HP`,270,634),t.fillStyle=`#FDA4AF`,t.font=`11px sans-serif`,t.fillText(n.bossHp<=0?`Zafer mühürlendi, yeni zindan kapısı açılıyor.`:`Günün her görevi doğrudan Boss'tan can götürür.`,270,658),t.fillStyle=`rgba(15, 23, 42, 0.6)`,t.strokeStyle=`rgba(168, 85, 247, 0.3)`,mn(t,45,695,450,110,16),t.fill(),t.stroke(),t.fillStyle=`#C084FC`,t.font=`italic 13px serif`,t.fillText(`“Ruhun rengi, düşüncelerinin rengine bürünür.`,270,735),t.fillText(`Bugün seni durduracak hiçbir bahane yoktur.”`,270,755),t.font=`bold 11px monospace`,t.fillStyle=`#94A3B8`,t.fillText(`— MARCUS AURELIUS`,270,785),t.fillStyle=`#38BDF8`,t.font=`bold 12px monospace`,t.fillText(`RESET66 • 66-DAY HABIT FORMATION RPG`,270,855),t.fillStyle=`#64748B`,t.font=`10px monospace`,t.fillText(`github.com/szgnemin1/reset66`,270,880)}function mn(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}var Z=null,hn=null,Q=null,gn=[],_n=.45;function vn(){if(!Z){let e=window.AudioContext||window.webkitAudioContext;e&&(Z=new e)}Z&&Z.state===`suspended`&&Z.resume()}var yn=[{id:`gamma`,title:`40 Hz Gama Dalgaları`,badge:`ZİHİN & ODAK`,icon:`🧠`,description:`MIT Tsai Lab kanıtlı derin odak ve okuma frekansı (200Hz taşıyıcı, 40Hz nabız).`,color:`from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/40`},{id:`brown`,title:`Kahverengi Gürültü (Brown Noise)`,badge:`DERİN ÇALIŞMA`,icon:`🌊`,description:`Dış sesleri tamamen bastıran, zihni sakinleştiren alçak frekanslı sıcak uğultu.`,color:`from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40`},{id:`tibet`,title:`Tibet Çanı & Zen Şamanı`,badge:`MEDİTASYON`,icon:`🔔`,description:`432 Hz armonik rezonans ile nefes ve kalp ritmini dengeleyen meditatif rezonans.`,color:`from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40`}];function bn(e){vn(),Z&&(xn(),Q=Z.createGain(),Q.gain.setValueAtTime(_n,Z.currentTime),Q.connect(Z.destination),e===`gamma`?Tn():e===`brown`?En():e===`tibet`&&Dn(),hn=e,An())}function xn(){gn.forEach(e=>{try{e.stop&&e.stop(),e.disconnect&&e.disconnect()}catch{}}),gn=[],hn=null,An()}function Sn(e){hn===e?xn():bn(e)}function Cn(e){_n=Math.max(0,Math.min(1,e)),Q&&Z&&Q.gain.setValueAtTime(_n,Z.currentTime),An()}function wn(){return{isPlaying:hn!==null,currentTrack:hn,volume:_n}}function Tn(){let e=Z.createOscillator();e.type=`sine`,e.frequency.setValueAtTime(200,Z.currentTime);let t=Z.createGain();t.gain.setValueAtTime(.5,Z.currentTime);let n=Z.createOscillator();n.type=`sine`,n.frequency.setValueAtTime(40,Z.currentTime);let r=Z.createGain();r.gain.setValueAtTime(.45,Z.currentTime),n.connect(r),r.connect(t.gain),e.connect(t),t.connect(Q),e.start(),n.start(),gn.push(e,n,t,r)}function En(){let e=Z.sampleRate*2,t=Z.createBuffer(1,e,Z.sampleRate),n=t.getChannelData(0),r=0;for(let t=0;t<e;t++){let e=Math.random()*2-1;n[t]=(r+.02*e)/1.02,r=n[t],n[t]*=3.5}let i=Z.createBufferSource();i.buffer=t,i.loop=!0;let a=Z.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(450,Z.currentTime),i.connect(a),a.connect(Q),i.start(),gn.push(i,a)}function Dn(){let e=Z.createOscillator();e.type=`sine`,e.frequency.setValueAtTime(432,Z.currentTime);let t=Z.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(864,Z.currentTime);let n=Z.createOscillator();n.type=`triangle`,n.frequency.setValueAtTime(216,Z.currentTime);let r=Z.createOscillator();r.frequency.setValueAtTime(.2,Z.currentTime);let i=Z.createGain();i.gain.setValueAtTime(1.5,Z.currentTime),r.connect(i),i.connect(e.frequency);let a=Z.createGain();a.gain.setValueAtTime(.5,Z.currentTime);let o=Z.createGain();o.gain.setValueAtTime(.2,Z.currentTime);let s=Z.createGain();s.gain.setValueAtTime(.3,Z.currentTime),e.connect(a),t.connect(o),n.connect(s),a.connect(Q),o.connect(Q),s.connect(Q),e.start(),t.start(),n.start(),r.start(),gn.push(e,t,n,r,i,a,o,s)}var On=new Set;function kn(e){return On.add(e),()=>On.delete(e)}function An(){let e=wn();On.forEach(t=>t(e))}var jn=!1;function Mn(){let e=wn(),t=yn.find(t=>t.id===e.currentTrack);return`
    <div id="soundscapeFloatingContainer" class="fixed top-3 right-3 z-30 transition-all duration-300">
      ${jn?`
        <!-- Expanded Sound Controller Card -->
        <div class="w-72 p-3.5 rounded-3xl bg-slate-900/95 border border-purple-500/50 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.8)] text-white space-y-3 animate-fadeIn">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <div class="flex items-center gap-1.5">
              <span class="text-base">🎧</span>
              <span class="text-xs font-mono font-bold text-purple-300">ODAK & ZİHİN SESLERİ</span>
            </div>
            <button type="button" id="btnCollapseSoundscape" class="p-1 rounded-lg text-slate-400 hover:text-white text-xs">
              ✕
            </button>
          </div>

          <!-- Track Selector Buttons -->
          <div class="space-y-1.5">
            ${yn.map(t=>{let n=e.currentTrack===t.id;return`
                <button type="button" class="btn-toggle-soundscape w-full p-2 rounded-xl text-left text-xs font-mono flex items-center justify-between border transition ${n?`bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold shadow-inner`:`bg-slate-950/70 text-slate-400 border-slate-800 hover:text-white`}" data-track="${t.id}">
                  <div class="flex items-center gap-2 truncate">
                    <span>${t.icon}</span>
                    <span class="truncate">${t.title}</span>
                  </div>
                  <span class="text-[10px] ml-1">${n?`▶ ÇALIYOR`:`Başlat`}</span>
                </button>
              `}).join(``)}
          </div>

          <!-- Volume Slider & Stop -->
          <div class="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono text-slate-400">Ses:</span>
            <input type="range" id="soundscapeVolumeSlider" min="0" max="1" step="0.05" value="${e.volume}" class="flex-1 accent-purple-500 h-1 bg-slate-800 rounded-lg" />
            ${e.isPlaying?`
              <button type="button" id="btnStopSoundscape" class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold">
                Durdur
              </button>
            `:``}
          </div>
        </div>
      `:`
        <!-- Collapsed Floating Pill -->
        <button type="button" id="btnExpandSoundscape" class="flex items-center gap-2 px-3 py-1.5 rounded-full ${e.isPlaying?`bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse`:`bg-slate-900/90 text-slate-300 border border-slate-800`} backdrop-blur-md text-xs font-mono font-bold shadow-lg transition hover:scale-105">
          <span>${e.isPlaying?`🎵`:`🎧`}</span>
          <span>${e.isPlaying?t?.title.split(` `)[0]:`Odak Sesi`}</span>
        </button>
      `}
    </div>
  `}function Nn(e){let t=document.getElementById(`btnExpandSoundscape`);t&&t.addEventListener(`click`,()=>{A(),N(`light`),jn=!0,e&&e()});let n=document.getElementById(`btnCollapseSoundscape`);n&&n.addEventListener(`click`,()=>{A(),jn=!1,e&&e()}),document.querySelectorAll(`.btn-toggle-soundscape`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-track`);A(),N(`medium`),Sn(n),e&&e()})});let r=document.getElementById(`btnStopSoundscape`);r&&r.addEventListener(`click`,()=>{A(),xn(),e&&e()});let i=document.getElementById(`soundscapeVolumeSlider`);i&&i.addEventListener(`input`,e=>{Cn(parseFloat(e.target.value))})}function $(){let e=_(),t=document.getElementById(`app`);if(!t)return;let n=``;n=e.activeTab===`quests`?Pe():e.activeTab===`boss`?Ie():e.activeTab===`workout`?qe():e.activeTab===`library`||e.activeTab===`cards`?et():e.activeTab===`settings`?Ft():Pe();let r=``;!e.onboardingDone||e.activeModal===`assessment`?r=Ht():e.activeModal===`inventory`?r=ln():e.activeModal===`sharecard`?r=dn():e.activeModal===`reader`?r=zt():e.activeModal===`meditation`?r=Kt():e.activeModal===`focus`||e.activeModal===`pomodoro`?r=$t():e.activeModal===`sleep`?r=rn():e.activeModal===`books`&&(r=tt()),t.innerHTML=`
    <div class="min-h-screen bg-[#080B11] text-slate-100 pb-24 selection:bg-cyan-500 selection:text-black">
      
      <!-- Top Glow Aura -->
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-cyan-500/10 blur-[90px] pointer-events-none"></div>

      <!-- Floating Ambient Soundscape Controller Bar -->
      ${Mn()}

      <!-- Main Shell Container -->
      <main class="max-w-xl mx-auto px-3.5 pt-3.5 space-y-4">
        ${ue()}
        <section id="tabContentContainer" class="min-h-[500px]">
          ${n}
        </section>
      </main>

      <!-- Bottom Dock Navigation -->
      ${Ee()}

      <!-- Modals Container -->
      <div id="modalSlot">
        ${r}
      </div>

    </div>
  `,De($),Nn($),e.activeTab===`quests`?Fe($):e.activeTab===`boss`?Le($):e.activeTab===`workout`?Je($):e.activeTab===`library`||e.activeTab===`cards`?nt($):e.activeTab===`settings`&&It($),!e.onboardingDone||e.activeModal===`assessment`?Ut($):e.activeModal===`inventory`?un($):e.activeModal===`sharecard`?fn($):e.activeModal===`reader`?Bt($):e.activeModal===`meditation`?qt($):e.activeModal===`focus`||e.activeModal===`pomodoro`?en($):e.activeModal===`sleep`?an($):e.activeModal===`books`&&nt($)}document.addEventListener(`DOMContentLoaded`,()=>{te(),$(),ne(()=>{}),kn(()=>{$()}),Nt(),setTimeout(()=>{st(!0)},1200),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&st(!0)})});export{gt as t};