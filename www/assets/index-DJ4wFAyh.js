(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{week:1,name:`Atalet Gölgesi`,archetype:`Statik Sürtünme & Harekete Geçememe`,desc:`Lally (UCL 2010): Başlangıç direnci en yüksek seviyededir. 2 dakika kuralıyla ilk kıvılcımı çak.`,weakness:`Küçük Adımlar & İlk Kıvılcım`,hp:300},{week:2,name:`Erteleme İblisi`,archetype:`Zamansal İskonto & Sahte Yarın Algısı`,desc:`Prefrontal korteks ile amigdala çatışması. Uzak ödülleri anlık mikro-XP ile yakınlaştır.`,weakness:`Geri Sayım & Aciliyet Hissi`,hp:450},{week:3,name:`Ucuz Dopamin Ejderi`,archetype:`Tonik Dopamin Tüketimi & Algoritma Tuzağı`,desc:`Dr. Lembke (Stanford): Fazla uyarım dopamin tabanını çökertir. Ekran detoksuyla reseptörleri yenile.`,weakness:`Dopamin Orucu & Gri Ekran`,hp:600},{week:4,name:`Konfor Alanı Gardiyanı`,archetype:`Amigdala Kaçınma Tepkisi`,desc:`Soğuk su ve zorluk anterior singulat korteksi (irade merkezi) büyüterek gardiyanı ezer.`,weakness:`Soğuk Su Şoku & Bilinçli Zorluk`,hp:800},{week:5,name:`Dağınık Zihin Hayaleti`,archetype:`Dikkat Kalıntısı & Çoklu Görev`,desc:`Cal Newport: Görev geçişleri bilişsel artık bırakır. 25 dk tekil Pomodoro ile hayaleti dağıt.`,weakness:`Pürdikkat Odak Blokları`,hp:1050},{week:6,name:`Şüphe Lordu`,archetype:`Sahtekarlık Sendromu & Negatif İç Ses`,desc:`CBT: Şüphe gerçek değil, savunma refleksidir. Yazılı kanıt günlüğüyle gerçeği gör.`,weakness:`Gelişim Günlüğü & Somut Kanıt`,hp:1350},{week:7,name:`Bahane Golemi`,archetype:`Bilişsel Çelişki & Mantığa Bürüme`,desc:`Beyin rahatsızlığı gidermek için bahaneler üretir. Standartların tavizsiz olsun.`,weakness:`Tavizsiz Disiplin & Standartlar`,hp:1700},{week:8,name:`Uykusuzluk Canavarı`,archetype:`Sirkadiyen Ritmin Bozulması`,desc:`Dr. Walker & Nedergaard: Mavi ışık melatonini 2 saat geciktirir. Gliyomfatik temizliği başlat.`,weakness:`Karanlık Oda & Sabit Uyanış`,hp:2100},{week:9,name:`Kaos Şövalyesi`,archetype:`Stres Altında Eski Rutine Dönme`,desc:`Kriz anlarında hedeflerine değil, alışkanlıklarının seviyesine düşersin. Temel çapayı koru.`,weakness:`Temel Alışkanlık Çapaları`,hp:2600},{week:10,name:`Eski Kimlik Kralı`,archetype:`Ego Savunması & Geri Çekilme`,desc:`Otomatizmin son aşaması. Eski tembel kimliğin öldüğü, yeni Solo Hunter kimliğinin doğuşu.`,weakness:`66 Günlük Nöral Mühür & Yeniden Doğuş`,hp:3200}],t=[{id:`b1`,title:`Atomik Alışkanlıklar`,author:`James Clear`,pillar:`Disiplin`,badge:`Nöroplastisite`,summary:`Her gün %1 daha iyi olmak yıl sonunda seni 37 kat ileri taşır. Alışkanlığı görünür, çekici, kolay ve tatmin edici kıl; 2 dakika kuralıyla ilk kıvılcımı çak.`},{id:`b2`,title:`Dopamin Ulusu`,author:`Dr. Anna Lembke (Stanford)`,pillar:`Odak`,badge:`Nörokimya`,summary:`Zevk ve acı dengesi aynı tahterevallide çalışır. Sürekli dijital uyarım dopamin tabanını çökertir. 30 günlük dopamin orucu reseptör duyarlılığını onarır.`},{id:`b3`,title:`Neden Uyuruz?`,author:`Dr. Matthew Walker (UC Berkeley)`,pillar:`Canlılık`,badge:`Sirkadiyen Biyoloji`,summary:`6 saatin altındaki uyku bilişsel kapasiteyi %40 oranında köreltir. Derin uykuda gliyomfatik sistem toksinleri temizler, REM uykusu ise nöral bağlantıları pekiştirir.`},{id:`b4`,title:`Pürdikkat (Deep Work)`,author:`Cal Newport (Georgetown)`,pillar:`Odak`,badge:`Bilişsel Kapasite`,summary:`Bölünmüş dikkat zihinsel artık (attention residue) bırakır. Günde 90 dakikalık kesintisiz derin odak bloğu, 8 saatlik dağınık çalışmadan daha çok değer üretir.`},{id:`b5`,title:`Alışkanlıkların Gücü`,author:`Charles Duhigg (Harvard)`,pillar:`Disiplin`,badge:`Bazal Gangliyon`,summary:`Nöral Alışkanlık Döngüsü: İpucu (Cue) -> Rutin (Routine) -> Ödül (Reward). Eski alışkanlığı silemezsin; sadece aynı ipucuna yeni bir rutin bağlayabilirsin.`},{id:`b6`,title:`Beni İncitemezsin (Can't Hurt Me)`,author:`David Goggins (Navy SEAL)`,pillar:`İrade`,badge:`Zihinsel Zırh`,summary:`%40 Kuralı: Zihnin pes etmeni haykırdığında aslında fizyolojik kapasitenin sadece %40'ındasındır. Rahatsızlıkla barış ve beynini zorlukla nasırlaştır.`},{id:`b7`,title:`Kendime Düşünceler (Meditations)`,author:`Marcus Aurelius (Roma İmparatoru)`,pillar:`Zihin`,badge:`Stoacılık`,summary:`Kontrol edemediğin dış olayları değil, kendi tepkilerini yönet. Engel, yolun ta kendisidir. Şikayet etmeyi bırak ve eyleme geç.`},{id:`b8`,title:`İrade İçgüdüsü`,author:`Dr. Kelly McGonigal (Stanford)`,pillar:`İrade`,badge:`aMCC Gelişimi`,summary:`İrade sonlu bir kaynak değil, geliştirilebilir bir kastır. Soğuk duş ve kontrollü nefes anterior singulat korteksi (aMCC) büyüterek dürtü denetimini artırır.`},{id:`b9`,title:`Huberman Lab Nörobiyoloji Protokolleri`,author:`Dr. Andrew Huberman (Stanford)`,pillar:`Zihin & Canlılık`,badge:`Otonom Sistem`,summary:`Sabah güneşiyle sirkadiyen ritmi kilitle. Stres anında iki kısa nefes + bir uzun nefes (Fizyolojik İçe Çekiş) ile kalp ritmini saniyeler içinde düşür.`},{id:`b10`,title:`Outlive: Yaşamın Ötesi`,author:`Dr. Peter Attia (Johns Hopkins)`,pillar:`Güç & Ömür`,badge:`Hücresel Yaşlanma`,summary:`Sağlıklı ömür (Healthspan) için en kritik iki belirteç: VO2 Max ve kas kuvvetidir. Kademeli direnç antrenmanı hücresel yaşlanmayı geciktiren en güçlü biyolojik araçtır.`}],n=[{id:`c1`,category:`Disiplin`,title:`Kusursuz Gün Diye Bir Şey Yoktur`,quote:`Motivasyon seni başlatır, disiplin ise 66. güne ulaştırır. Bugün küçük de olsa adımını at.`,color:`cyan`},{id:`c2`,category:`İrade`,title:`Soğuk Suyla Yüzleş (Dopamin +%250)`,quote:`Srámek (2000): Soğuk duş dopamin tabanını saatlerce yükseltir. Sabah zor olanı seç, günün efendisi ol.`,color:`purple`},{id:`c3`,category:`Odak`,title:`Ucuz Dopamini Reddet`,quote:`Lembke: Ekranı her kapattığında beyninin kontrolünü algoritmalardan geri alır, prefrontal korteksini güçlendirirsin.`,color:`emerald`},{id:`c4`,category:`Güç`,title:`Yorgunluk Zihinsel Bir İllüzyondur`,quote:`Goggins: Vücudun pes etmek istediğinde zihnin devreye girer. Bir tekrar daha seni yeni seviyeye taşır.`,color:`amber`},{id:`c5`,category:`Bilgelik`,title:`Sessizlikte Büyü (Günde 15 Sayfa)`,quote:`Yılda 20 kitap eder. Zihnini her gün yüksek kalibreli fikirlerle beslemeden karakterini yükseltemezsin.`,color:`cyan`},{id:`c6`,category:`Özgüven`,title:`Kendine Verdiğin Sözü Tut`,quote:`Özgüven aynada değil, kimse bakmıyorken tamamladığın günlük görevlerde inşa edilir.`,color:`purple`},{id:`c7`,category:`Stoacılık`,title:`Engel Yolun Kendisidir`,quote:`Marcus Aurelius: Eylemin önündeki engel eylemi ilerletir. Yolun üstündeki engel, yolun ta kendisi olur.`,color:`emerald`},{id:`c8`,category:`Nöroplastisite`,title:`Lally 66 Gün Kuralı`,quote:`UCL (2010): Bugün hissettiğin zihinsel sürtünme yeni sinapsların örülme sesidir. Asla durma.`,color:`cyan`},{id:`c9`,category:`Uyku`,title:`BOS Gliyomfatik Sifonu`,quote:`Nedergaard (Science): Derin uyku beynini yıkar. 23:00'te yatağa girmek yarınki odak kapasiteni garantiye alır.`,color:`purple`},{id:`c10`,category:`Odak`,title:`Tekil Görev Hükümdarlığı`,quote:`Cal Newport: Aynı anda iki iş yapan adam hiçbir işi yapamaz. Tek bir hedefe kilitlen ve parçala.`,color:`emerald`},{id:`c11`,category:`İrade`,title:`Tükeniş Bir Sinyaldir, Bitiş Değil`,quote:`Zihinsel bariyer kırıldığında irade kası hipertrofiye uğrar. aMCC bölgesini her gün besle.`,color:`amber`},{id:`c12`,category:`Canlılık`,title:`Hücresel Hidrasyon`,quote:`Vücudundaki %2'lik sıvı kaybı bilişsel hızı %15 yavaşlatır. Su iç, hücrelerini canlandır.`,color:`cyan`},{id:`c13`,category:`Kriz`,title:`Kaos Bir Fırsattır`,quote:`Herkes dağılırken rutinine sadık kalan kişi, zindanı ilk fetheden avcı olur.`,color:`amber`},{id:`c14`,category:`Zihin`,title:`Nefesini Yönet, Beynini Yönet`,quote:`Balban & Huberman (2023): Uzatılmış nefes verme kalbine yavaşlama emri verir. Sakinleş ve hakim ol.`,color:`purple`},{id:`c15`,category:`Disiplin`,title:`Standartlar Duyguların Üstündedir`,quote:`Nasıl hissettiğin önemli değil, protokolün neyi emrettiği önemlidir. Duygularını değil, görevini dinle.`,color:`cyan`},{id:`c16`,category:`Güç`,title:`Mekanik Gerilim Yasası`,quote:`Schoenfeld: Kas da karakter de yalnızca progresif yükleme (progressive overload) altında gelişir.`,color:`amber`},{id:`c17`,category:`Özgüven`,title:`Yarın Diye Bir Şey Yok`,quote:`Erteleme İblisi'nin tek silahı "yarın" yalanıdır. Tek gerçek an şimdidir; ilk seti hemen yap.`,color:`purple`},{id:`c18`,category:`Kimlik`,title:`Gölge Avcısı'nın Uyanışı`,quote:`Eski tembel kimliğin öldü. 66 günlük nöral mühürle yeni benliğini inşa ediyorsun.`,color:`emerald`},{id:`c19`,category:`Stoa`,title:`Dış Dünyanın Gürültüsünü Kapat`,quote:`Seneka: Dünyayı değiştiremezsin ama zihninin kalesini aşılmaz bir sur haline getirebilirsin.`,color:`cyan`},{id:`c20`,category:`Zafer`,title:`66 Günlük Yeniden Doğuş`,quote:`Bu sadece bir alışkanlık takibi değil, zihninin biyolojisini yeniden programlama operasyonudur.`,color:`amber`}],r=[`Lally (UCL 2010): İlk gün sürtünme katsayısı en yüksektir. Eyleme geçmek bitirmekten zordur.`,`Huberman: Uyanışın ilk 60 dakikasında güneş ışığı almak gece melatonini garantiye alır.`,`Srámek (2000): 60 sn soğuk duş, dopamini %250 artırır ve 3 saat sabit taban çizgisi sunar.`,`Nedergaard (Science): Derin uykuda beyin interstisyel alanı %60 genişler ve toksinleri süpürür.`,`Balban & Huberman (2023): Çift içe çekiş ve uzun üfleme (Fizyolojik Sigh) stresi anında sıfırlar.`,`Schoenfeld: Kas hipertrofisi için setleri tükenişe 1-3 tekrar kala (RPE 8) bitir.`,`Clear: Alışkanlık ipucunu ortamda aşırı görünür kıl (örn: su şişesi masanın ortasında).`,`Lembke: Telefonu yatak odasından çıkarmak dopamin reseptörlerinin gece dinlenmesini sağlar.`,`Newport: Görevler arası geçiş bilişsel kapasiteyi %20 tüketir. Tek bir göreve kilitlen.`,`Walker: REM uykusu duygusal travmaları törpüler ve yaratıcı nöral bağları kurar.`,`McGonigal: İrade tükenebilir bir kaynak değil, egzersizle güçlenen bir beyin kasıdır.`,`Kox (PNAS 2014): Kontrollü hiperventilasyon inflamatuar sitokinleri baskılar.`,`Duhigg: Rutini değiştirebilirsin ama ipucu ve ödülü sabit tutmalısın.`,`Goggins: %40 bariyerini aş; zihnin bittiğini söylediğinde aslında yolun başındasın.`,`Marcus Aurelius: Sabah kalkmakta zorlandığında: Bir insanın yapması gereken işi yapmak için uyanıyorum de.`,`Lally (UCL): 16. gün: Alışkanlığın ilk nöral patikaları oluşmaya başladı; direnç kırılıyor.`,`Huberman: Kafeini uyandıktan 90-120 dakika sonra tüketmek öğleden sonra çöküşünü önler.`,`Attia: VO2 Max seviyen, 10 yıl sonraki hayatta kalma oranının en güçlü tahmincisidir.`,`Baumeister: Karar yorgunluğunu önlemek için sabah rutinini önceden otomatize et.`,`Lally (UCL): Bir gün kaçırmak eğriyi bozmaz; ertesi gün kesinlikle geri dön.`,`Faz 1 Sona Eriyor (Gün 21): Yıkım evresi tamamlandı. Sinaptik filizlenme başlıyor!`,`Faz 2 Başlıyor (Gün 22): Yeni nöronal devreler kuruluyor. Ritim kazanma zamanı.`,`Cialdini: Kendini 'Avcı' olarak etiketlediğinde beynin bu kimliğe uygun davranır.`,`Kahneman: Sistem 1 (otomatik) yavaş yavaş kontrolü Sistem 2'den (çaba) devralıyor.`,`Epiktetos: Ne kadar süre bekleyeceksin kendini en iyisine layık görmek için?`,`Lally: 26. gün: Günlük sürtünme %35 azaldı. Alışkanlık artık daha tanıdık geliyor.`,`Huberman: 40 Hz Gamma ses dalgaları bilişsel bağlanmayı ve mikroglial aktiviteyi uyarır.`,`Clear: Sonuçlara değil, süreç kimliğine odaklan. Sen spor yapan bir insansın.`,`Doidge (The Brain That Changes Itself): Birlikte ateşlenen nöronlar birlikte bağlanır.`,`Lembke: Ucuz dopamin yoksunluğu ilk 2 haftada biter, gerçek hayat renklenmeye başlar.`,`Walker: Her gece aynı saatte yatmak sirkadiyen saat genlerini (CLOCK/BMAL1) senkronize eder.`,`Schoenfeld: Progresif aşırı yükleme: Her hafta 1 tekrar veya 1 kg ekle.`,`Balban: 5 dakikalık nefes seansı günlük kaygıyı %30 azaltır.`,`Seneka: İnsan hayal gücünde gerçekte olduğundan daha fazla acı çeker.`,`Lally: 35. gün: Yolun yarısını aştın. Otomatizm endeksi (SRHI) %50 barajını geçti.`,`Huberman: Sıcak sauna sonrası soğuk duş büyüme hormonu ve ısı şok proteinlerini artırır.`,`Goggins: Kimse gelip seni kurtarmayacak. Kendi kurtarıcın ol.`,`Newport: Sabah 08:00 - 10:00 arası prefrontal korteksin en keskin olduğu saatlerdir.`,`Attia: Kavrama kuvveti (Grip strength) biyolojik yaşlanmanın doğrudan aynasıdır.`,`Lally: 40. gün: Davranış artık dirençle değil, ritimle yapılıyor.`,`Marcus Aurelius: Bir günün kontrolünü kaybettiğinde hemen kendine dön, ritmi terk etme.`,`Lembke: Dopamin dengesi kurulduğunda basit bir yürüyüş bile coşku verir.`,`Huberman: Gözlerini ufka odaklamak (panoramik görüş) amigdala stres yanıtını kapatır.`,`Faz 2 Sona Eriyor (Gün 44): Nöral devreler kuruldu! Şimdi Kimlik İnşası başlıyor.`,`Faz 3 Başlıyor (Gün 45): Efsanevi kimlik evresi. Bu artık bir alışkanlık değil, karakterin.`,`Clear: Bir eylemi 45 kez tekrar ettiğinde bilinçaltı direnci sıfırlanır.`,`Walker: Uykudan 2 saat önce sıcak duş almak vücut çekirdek sıcaklığını düşürür ve uykuya dalar.`,`Lally: 48. gün: Otomatizm plato seviyesine yaklaşıyor. Zihinsel çaba minimumda.`,`Kox: Soğuğa verilen nefes tepkisini kontrol eden kişi, hayatın stresini de kontrol eder.`,`Schoenfeld: Kas hafızası (myonuclei) bir kez kazanıldığında ömür boyu silinmez.`,`Duhigg: Başarı bir dizi keystone (kilit taşı) alışkanlığın yan ürünüdür.`,`Goggins: Aynadaki adamla her gece dürüstçe hesaplaş.`,`Huberman: Akşam 20:00'den sonra loş kırmızı ışık melatonin baskılanmasını önler.`,`Seneka: Yaşam bir savaştır; hazırlıksız yakalananlar ezilir.`,`Lally: 55. gün: Otomatizm seviyesi %85. Eski alışkanlık patikaları budanıyor (synaptic pruning).`,`Attia: Düşük tempo aerobik egzersiz (Zone 2) mitokondriyal yoğunluğu ikiye katlar.`,`Newport: Dijital minimalizm zihninin en derin potansiyelini açığa çıkarır.`,`Marcus Aurelius: Geleceği düşünerek bugünün gücünü tüketme.`,`Lembke: Zorluktan kaçmayan beyin, zevkten sarhoş olmayan beyindir.`,`Lally: 60. gün: Kritik 66 günün eşiğindesin. Nöral otoban tamamlanmak üzere.`,`Huberman: Vagus sinirini güçlendiren kişi duygusal fırtınalarda sarsılmaz kalır.`,`Clear: Küçük alışkanlıklar birikerek bileşik faiz gibi devasa sonuçlar doğurur.`,`Goggins: Zihnin sınırları senin koyduğun sınırlardır.`,`Walker: Düzenli uyku DNA onarım mekanizmalarını maksimize eder.`,`Lally: 65. gün: Yarın 66 günlük nöral mühür tamamlanıyor. Gurur duy!`,`GÜN 66 — NÖROPLASTİSİTE ZAFERİ: Otomatizm tamamlandı! Solo Hunter kimliğin mühürlendi!`],i={box:{name:`Kutu Nefesi (Box Breathing) 4-4-4-4`,sub:`Zihinsel Odak & Berraklık (Navy SEALs)`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan derin nefes al`},{label:`TUT`,sec:4,action:`hold`,instr:`Nefesini ciğerlerinde tut`},{label:`NEFES VER`,sec:4,action:`contract`,instr:`Ağzından yavaşça üfle`},{label:`TUT`,sec:4,action:`hold`,instr:`Boş ciğerle sakin kal`}]},relax:{name:`4-7-8 Tekniği (Dr. Andrew Weil)`,sub:`Sirkadiyen Gevşeme & Hızlı Uyku`,phases:[{label:`NEFES AL`,sec:4,action:`expand`,instr:`Burnundan sessizce nefes al`},{label:`TUT`,sec:7,action:`hold`,instr:`Nefesi ciğerlerinde tut`},{label:`NEFES VER`,sec:8,action:`contract`,instr:`Ağzından seslice nefes ver`}]},sigh:{name:`Fizyolojik İçe Çekiş (Stanford 2023)`,sub:`Anlık Stres Nötralizasyonu & Vagus Frenlemesi (Balban & Huberman)`,phases:[{label:`BURUNDAN AL`,sec:3,action:`expand`,instr:`Burnundan derin bir nefes al`},{label:`TEPE ÇEKİŞ`,sec:1,action:`expand`,instr:`Hızlıca bir nefes daha ekle (Alveolleri aç)`},{label:`UZUN NEFES VER`,sec:6,action:`contract`,instr:`Ağzından yavaşça ve tamamen boşalt`},{label:`SAKİNLİK`,sec:1,action:`hold`,instr:`Nötr sakinlikte bekle`}]},energy:{name:`Wim Hof Tarzı (PNAS 2014)`,sub:`Hücresel Oksijenasyon & Adrenalin Deşarjı`,phases:[{label:`GÜÇLÜ AL`,sec:2,action:`expand`,instr:`Göğüs ve karnını tamamen doldur`},{label:`SERBEST BIRAK`,sec:1,action:`contract`,instr:`Zorlamadan nefesi bırak`},{label:`TUT (SONUNDA)`,sec:15,action:`hold`,instr:`Nefesi tamamen verip tut`}]}},a=[{id:`q_sleep`,title:`Geceleri ortalama kaç saat uyuyorsun?`,subtitle:`Nedergaard (Science): 6 saatin altı gliyomfatik temizliği durdurur.`,options:[{label:`5 saatten az (Aşırı Yorgun)`,score:10,pillar:`VIT`},{label:`5 - 6 saat (Düzensiz)`,score:25,pillar:`VIT`},{label:`7 - 8 saat (Dengeli & Dinç)`,score:50,pillar:`VIT`},{label:`8 saatten fazla (Yüksek)`,score:45,pillar:`VIT`}]},{id:`q_screen`,title:`Günde kaç saat sosyal medya / ekran başındasın?`,subtitle:`Lembke (Stanford): Fazla ekran dopamin baz çizgisini çökertir.`,options:[{label:`4 saatten fazla (Dopamin Bağımlılığı)`,score:10,pillar:`FOC`},{label:`2 - 4 saat (Orta Derece Dağınık)`,score:25,pillar:`FOC`},{label:`1 - 2 saat (Kontrollü)`,score:45,pillar:`FOC`},{label:`1 saatten az (Pürdikkat Usta)`,score:50,pillar:`FOC`}]},{id:`q_exercise`,title:`Haftada kaç gün bilinçli fiziksel egzersiz yapıyorsun?`,subtitle:`Schoenfeld: Kas kuvveti hücresel yaşlanmayı geciktiren en güçlü araçtır.`,options:[{label:`Hemen hemen hiç (Hareketsiz)`,score:10,pillar:`STR`},{label:`Haftada 1-2 gün (Düzensiz)`,score:25,pillar:`STR`},{label:`Haftada 3-4 gün (Aktif Sporcu)`,score:45,pillar:`STR`},{label:`Haftada 5+ gün (Elit Disiplin)`,score:50,pillar:`STR`}]},{id:`q_willpower`,title:`Zor bir işle karşılaştığında erteleme eğilimin nedir?`,subtitle:`McGonigal: İrade kas gibi eğitilebilir (aMCC hipertrofisi).`,options:[{label:`Sürekli ertelerim, son ana bırakırım`,score:10,pillar:`WIL`},{label:`Bazen ertelerim, zorlanırım`,score:25,pillar:`WIL`},{label:`Genelde planlı hareket ederim`,score:45,pillar:`WIL`},{label:`Ertelemeyi reddederim, derhal başlarım`,score:50,pillar:`WIL`}]},{id:`q_goal`,title:`Bu 66 günde en çok hangi kimliği inşa etmek istiyorsun?`,subtitle:`James Clear: Sonuçlara değil, yeni kimliğine odaklan.`,options:[{label:`Demir İradeli Solo Hunter (Disiplin & Güç)`,score:50,pillar:`DIS`},{label:`Keskin Odaklı Zihin Ustası (Biliş & Çalışma)`,score:50,pillar:`MND`},{label:`Yüksek Enerjili Biyo-Optimize Beden (Canlılık)`,score:50,pillar:`VIT`},{label:`Korkusuz & Tavizsiz Karakter (Dönüşüm)`,score:50,pillar:`WIL`}]}],o=`RESET66_SOLO_LEVELING_STATE_V2_2`,s=[{id:`q_run`,title:`5.0 KM Koşu / Tempolu Yürüyüş`,desc:`Akıllı bileklikten otomatik veri çeker veya manuel girilir.`,icon:`🏃`,pillar:`VIT`,unit:`km`,target:5,current:0,xp:40,bossDmg:40,completed:!1},{id:`q_workout`,title:`Günün Direnç Antrenmanı (45 Dk)`,desc:`Seçili günün antrenman hareketlerini tamamla.`,icon:`🏋️`,pillar:`STR`,unit:`dk`,target:45,current:0,xp:50,bossDmg:50,completed:!1},{id:`q_reading`,title:`15 Sayfa Kitap Oku (Dahili Kütüphane)`,desc:`Uygulama içindeki Stoacı ve Ustalık başyapıtlarını oku.`,icon:`📖`,pillar:`MND`,unit:`sayfa`,target:15,current:0,xp:35,bossDmg:35,completed:!1},{id:`q_meditation`,title:`10 Dk Bilinçli Meditasyon & Nefes`,desc:`Kutu Nefesi, 4-7-8, Stanford Sigh veya 40Hz frekans.`,icon:`🧘`,pillar:`MND`,unit:`dk`,target:10,current:0,xp:30,bossDmg:30,completed:!1},{id:`q_water`,title:`3.5L Hücresel Hidrasyon (Su)`,desc:`Mitokondrileri sula, toksinleri temizle.`,icon:`💧`,pillar:`VIT`,unit:`L`,target:3.5,current:0,xp:25,bossDmg:25,completed:!1},{id:`q_cold_shower`,title:`60 Saniye Bilinçli Soğuk Duş`,desc:`Dopamin tabanını %250 yükselt, aMCC irade kasını büyüt.`,icon:`🧊`,pillar:`WIL`,unit:`sn`,target:60,current:0,xp:30,bossDmg:30,completed:!1}];function c(){return{monday:{name:`İtiş Günü (Push)`,exercises:[{id:`ex1`,name:`Klasik Şınav (Push-Up)`,sets:4,reps:`12`,weight:`Vücut Ağ.`,equipment:`bodyweight`},{id:`ex2`,name:`Dambıl Bench Press`,sets:4,reps:`10`,weight:`15 kg`,equipment:`dumbbell`},{id:`ex3`,name:`Paralel Bar Dips`,sets:3,reps:`10`,weight:`Vücut Ağ.`,equipment:`bodyweight`}]},tuesday:{name:`Çekiş Günü (Pull)`,exercises:[{id:`ex4`,name:`Barfiks (Pull-Up)`,sets:4,reps:`8`,weight:`Vücut Ağ.`,equipment:`bodyweight`},{id:`ex5`,name:`Tek Kol Dambıl Row`,sets:4,reps:`10`,weight:`18 kg`,equipment:`dumbbell`},{id:`ex6`,name:`Dambıl Biceps Curl`,sets:3,reps:`12`,weight:`12.5 kg`,equipment:`dumbbell`}]},wednesday:{name:`Bacak & Core (Legs & Abs)`,exercises:[{id:`ex7`,name:`Barbell Back Squat / Air Squat`,sets:4,reps:`12`,weight:`30 kg`,equipment:`barbell`},{id:`ex8`,name:`Yürüyüş Lunge (Walking Lunge)`,sets:3,reps:`10`,weight:`10 kg`,equipment:`bodyweight`},{id:`ex9`,name:`Düz Plank (Forearm Plank)`,sets:3,reps:`60 sn`,weight:`-`,equipment:`bodyweight`}]},thursday:{name:`Aktif Toparlanma & Mobilite`,exercises:[{id:`ex10`,name:`Hafif Tempo 5.0 KM Koşu / Yürüyüş`,sets:1,reps:`40 dk`,weight:`-`,equipment:`bodyweight`},{id:`ex11`,name:`Tam Vücut Esneme & Mobilite`,sets:1,reps:`20 dk`,weight:`-`,equipment:`bodyweight`}]},friday:{name:`Üst Vücut Güç (Upper Power)`,exercises:[{id:`ex12`,name:`Dambıl Omuz Press`,sets:4,reps:`10`,weight:`15 kg`,equipment:`dumbbell`},{id:`ex13`,name:`Bant Face Pull (Arka Omuz)`,sets:3,reps:`15`,weight:`Direnç`,equipment:`band`}]},saturday:{name:`Alt Vücut & Kondisyon (Lower & HIIT)`,exercises:[{id:`ex14`,name:`Goblet Squat (Dambıl Çömelme)`,sets:3,reps:`12`,weight:`16 kg`,equipment:`dumbbell`},{id:`ex15`,name:`İp Atlama & Sprint HIIT`,sets:5,reps:`2 dk`,weight:`-`,equipment:`bodyweight`}]},sunday:{name:`Haftalık Zihin & Dinlenme Günü`,exercises:[{id:`ex16`,name:`Doğa Yürüyüşü & Derin Nefes`,sets:1,reps:`45 dk`,weight:`-`,equipment:`bodyweight`}]}}}function l(){let e={};for(let t=1;t<=66;t++)e[t]=t===1?`current`:`locked`;return e}var u={currentDay:1,level:1,xp:0,streak:1,hearts:3,hardMode:!1,soundEnabled:!0,hapticsEnabled:!0,onboardingDone:!1,assessmentScore:75,bossHp:e[0].hp,bossMaxHp:e[0].hp,bossIsEnraged:!1,bossMultiplier:1,chainDays:l(),stats:{STR:10,VIT:10,MND:10,WIL:10,FOC:10,DIS:10},todayHabits:s.map(e=>({...e})),workouts:c(),sleepData:{connected:!1,deviceName:null,totalMinutes:450,deepMinutes:110,remMinutes:95,lightMinutes:245,qualityScore:84,restingHr:62,hasRestBuff:!0,lastDistanceKm:5.2,lastSteps:7850,lastSyncTime:null},activeBookId:`marcus_aurelius`,activeChapterIdx:0,fontSize:`normal`,activeTab:`quests`,activeModal:null},d={...u},f=new Set;function ee(){try{let e=localStorage.getItem(o);if(e){let t=JSON.parse(e);d={...u,...t,stats:{...u.stats,...t.stats||{}},sleepData:{...u.sleepData,...t.sleepData||{}},workouts:t.workouts||c(),chainDays:t.chainDays||l(),todayHabits:t.todayHabits||s.map(e=>({...e}))}}else d={...u}}catch(e){console.error(`State load error, falling back to initial:`,e),d={...u}}return d}function te(){try{localStorage.setItem(o,JSON.stringify(d))}catch(e){console.error(`State save error:`,e)}}function p(){return d}function m(e){return d={...d,...e},te(),f.forEach(e=>{try{e(d)}catch(e){console.error(`Listener error:`,e)}}),d}function ne(e){return f.add(e),()=>f.delete(e)}function h(e,t=null){let n=d.xp+e,r=d.level,i={...d.stats};t&&i[t]!==void 0&&(i[t]+=Math.max(1,Math.floor(e/10)));let a=r*100,o=!1;for(;n>=a;)n-=a,r+=1,a=r*100,o=!0,Object.keys(i).forEach(e=>{i[e]+=1});return m({xp:n,level:r,stats:i}),{leveledUp:o,newLevel:r,gainedXP:e}}function g(e){let t=d.bossHp,n=Math.max(0,t-e);return m({bossHp:n}),{newHp:n,damageDealt:e,isDefeated:n===0}}function re(){let e=Math.max(0,d.hearts-1),t=d.bossMaxHp*2,n={...d.chainDays};n[d.currentDay]=`missed`;let r=Math.min(66,d.currentDay+1);n[r]=`current`;let i=s.map(e=>({...e}));return m({hearts:e,streak:Math.max(1,Math.floor(d.streak/2)),bossIsEnraged:!0,bossMultiplier:2,bossHp:t,bossMaxHp:t,currentDay:r,chainDays:n,todayHabits:i}),{newHearts:e,enragedHp:t}}function ie(){let t={...d.chainDays};t[d.currentDay]=`done`;let n=Math.min(66,d.currentDay+1);n<=66&&(t[n]=`current`);let r=d.streak+1,i=s.map(e=>({...e})),a=e[Math.min(10,Math.ceil(n/7))-1]||e[0];m({currentDay:n,streak:r,bossIsEnraged:!1,bossMultiplier:1,bossHp:a.hp,bossMaxHp:a.hp,chainDays:t,todayHabits:i})}function ae(){return d={...u},te(),f.forEach(e=>e(d)),d}function oe(){return JSON.stringify(d,null,2)}function se(e){try{let t=JSON.parse(e);return d={...u,...t},te(),f.forEach(e=>e(d)),!0}catch(e){return console.error(`Import failed:`,e),!1}}function ce(){let e=p(),t=le(e.level),n=e.level*100,i=Math.min(100,Math.round(e.xp/n*100)),a=r[Math.max(0,Math.min(65,e.currentDay-1))]||r[0],o=[,,,].fill(0).map((t,n)=>`<span class="transition-all ${n<e.hearts?`text-rose-500 scale-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]`:`text-slate-700 opacity-40`} text-base">❤️</span>`).join(``);return`
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
          <span class="text-slate-400 text-[11px]">${e.xp} / ${n} XP (%${i})</span>
        </div>

        <!-- Progress Bar Track -->
        <div class="h-2 w-full rounded-full bg-slate-950/90 border border-slate-800 overflow-hidden relative p-[1px]">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 transition-all duration-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]" style="width: ${i}%"></div>
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
            ${a}
          </p>
        </div>
      </div>
    </header>
  `}function le(e){return e<5?`E-Seviye Acemi Avcı`:e<10?`D-Seviye Gölge Takipçisi`:e<20?`C-Seviye Zindan Fatihi`:e<35?`B-Seviye Demir İrade`:e<50?`A-Seviye Seçkin Savaşçı`:e<66?`S-Seviye Gölge Lordu`:`Efsanevi Hükümdar (Monarch)`}var _=null,ue=null,v=null,y=null,b=null,x=null,de=null,S=null,C=null,w=null,fe=.35;function T(){if(!_){let e=window.AudioContext||window.webkitAudioContext;e&&(_=new e)}return _&&_.state===`suspended`&&_.resume(),_}function E(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime,t=_.createOscillator(),n=_.createGain();t.type=`sine`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(400,e+.04),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(_.destination),t.start(e),t.stop(e+.04)}catch{}}function pe(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=_.createOscillator(),i=_.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.07),i.gain.setValueAtTime(.15,e+n*.07),i.gain.exponentialRampToValueAtTime(.001,e+n*.07+.25),r.connect(i),i.connect(_.destination),r.start(e+n*.07),r.stop(e+n*.07+.25)})}catch{}}function D(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime;[440,554.37,659.25,880,1108.73].forEach((t,n)=>{let r=_.createOscillator(),i=_.createGain();r.type=`sine`,r.frequency.setValueAtTime(t,e+n*.06),i.gain.setValueAtTime(.2,e+n*.06),i.gain.exponentialRampToValueAtTime(.001,e+1.2),r.connect(i),i.connect(_.destination),r.start(e+n*.06),r.stop(e+1.2)})}catch{}}function O(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime,t=_.createOscillator(),n=_.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(35,e+.28),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),t.connect(n),n.connect(_.destination),t.start(e),t.stop(e+.28)}catch{}}function me(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime,t=_.createOscillator(),n=_.createGain();t.type=`sine`,t.frequency.setValueAtTime(1800,e),t.frequency.linearRampToValueAtTime(2400,e+.15),t.frequency.linearRampToValueAtTime(1900,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(_.destination),t.start(e),t.stop(e+.4)}catch{}}function he(){if(p().soundEnabled)try{if(T(),!_)return;let e=_.currentTime,t=[432,864,1296,433.8],n=[.28,.1,.05,.15],r=[4.8,3.5,2.2,4.5];t.forEach((t,i)=>{let a=_.createOscillator(),o=_.createGain();a.type=`sine`,a.frequency.setValueAtTime(t,e),a.frequency.linearRampToValueAtTime(t+(i===3?-1.5:.8),e+r[i]),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n[i],e+.06),o.gain.exponentialRampToValueAtTime(1e-4,e+r[i]),a.connect(o),o.connect(_.destination),a.start(e),a.stop(e+r[i]+.1)})}catch{}}function ge(){try{v&&(v.stop(),v.disconnect(),v=null),y&&(y.stop(),y.disconnect(),y=null),b&&(b.disconnect(),b=null),x&&(x.disconnect(),x=null),ue=null}catch{}}function _e(e){if(ge(),e!==`off`)try{if(T(),!_)return;ue=e;let t=200,n=10;e===`theta`?(t=150,n=6):e===`delta`?(t=110,n=2):e===`gamma`&&(t=200,n=40);let r=_.currentTime;x=_.createChannelMerger(2),b=_.createGain(),b.gain.setValueAtTime(.12,r),v=_.createOscillator(),v.type=`sine`,v.frequency.setValueAtTime(t,r),y=_.createOscillator(),y.type=`sine`,y.frequency.setValueAtTime(t+n,r);let i=_.createGain(),a=_.createGain();i.gain.value=1,a.gain.value=1,v.connect(i),i.connect(x,0,0),y.connect(a),a.connect(x,0,1),x.connect(b),b.connect(_.destination),v.start(),y.start()}catch(e){console.error(`Binaural beats error:`,e)}}function ve(){return ue}function ye(e,t=5){if(!_)return null;let n=_.sampleRate,r=n*t,i=_.createBuffer(1,r,n),a=i.getChannelData(0);if(e===`pink`){let e=0,t=0,n=0,i=0,o=0,s=0,c=0;for(let l=0;l<r;l++){let r=Math.random()*2-1;e=.99886*e+r*.0555179,t=.99332*t+r*.0750759,n=.969*n+r*.153852,i=.8665*i+r*.3104856,o=.55*o+r*.5329522,s=-.7616*s-r*.016898,a[l]=(e+t+n+i+o+s+c+r*.5362)*.11,c=r*.115926}}else if(e===`brown`){let e=0;for(let t=0;t<r;t++){let n=Math.random()*2-1;a[t]=(e+.02*n)/1.02,e=a[t],a[t]*=3.5}}return i}function be(){try{S&&(S.stop(),S.disconnect(),S=null),w&&(w.disconnect(),w=null),C&&(C.disconnect(),C=null),de=null}catch{}}function xe(e){if(be(),e!==`off`)try{if(T(),!_)return;de=e;let t=ye(e,5);if(!t)return;S=_.createBufferSource(),S.buffer=t,S.loop=!0,C=_.createGain(),C.gain.setValueAtTime(fe,_.currentTime),w=_.createBiquadFilter(),w.type=`lowpass`,w.frequency.setValueAtTime(e===`pink`?2200:850,_.currentTime),S.connect(w),w.connect(C),C.connect(_.destination),S.start()}catch(e){console.error(`Noise audio error:`,e)}}function Se(){return de}async function k(e=`light`){if(p().hapticsEnabled){try{let t=window.Capacitor?.Plugins?.Haptics;if(t){e===`light`?await t.impact({style:`LIGHT`}):e===`medium`?await t.impact({style:`MEDIUM`}):e===`heavy`?await t.impact({style:`HEAVY`}):e===`success`?await t.notification({type:`SUCCESS`}):e===`warning`?await t.notification({type:`WARNING`}):e===`error`&&await t.notification({type:`ERROR`});return}}catch{}`vibrate`in navigator&&(e===`light`?navigator.vibrate(15):e===`medium`?navigator.vibrate(35):e===`heavy`?navigator.vibrate(70):e===`success`?navigator.vibrate([20,40,30]):e===`error`&&navigator.vibrate([50,50,50,50]))}}var Ce=[{id:`quests`,label:`Bugün`,icon:`📋`},{id:`boss`,label:`Boss & Harita`,icon:`👾`},{id:`workout`,label:`Spor`,icon:`🏋️`},{id:`library`,label:`Kitaplık`,icon:`📖`},{id:`settings`,label:`Ayarlar`,icon:`⚙️`}];function we(){let e=p();return`
    <nav class="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none">
      <div class="max-w-md mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] p-1.5 pointer-events-auto flex items-center justify-around">
        ${Ce.map(t=>{let n=e.activeTab===t.id;return`
            <button type="button" class="btn-bottom-tab flex-1 py-1.5 px-1.5 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 group ${n?`bg-cyan-500/15 text-cyan-400 font-bold shadow-inner`:`text-slate-400 hover:text-slate-200`}" data-tab="${t.id}">
              <span class="text-lg leading-none transition-transform group-hover:scale-110 ${n?`scale-110`:``}">${t.icon}</span>
              <span class="text-[9px] font-mono mt-0.5 tracking-tight ${n?`text-cyan-300 font-bold`:`text-slate-400`}">${t.label}</span>
            </button>
          `}).join(``)}
      </div>
    </nav>
  `}function Te(e){document.querySelectorAll(`.btn-bottom-tab`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-tab`);E(),k(`light`),m({activeTab:n}),e&&e()})})}var A=!1,Ee=null;async function De(e){if(!A){A=!0,e&&e(`🔍 Akıllı bileklik aranıyor & bağlanıyor...`),k(`light`);try{let t=window.Capacitor?.Plugins?.BluetoothLe;if(t){await t.initialize();let n=await t.requestDevice({services:[`180d`],optionalServices:[`180f`,`fee0`]});if(n){await t.connect({deviceId:n.deviceId}),Oe(n.name||`Mi Band / Smart Watch`,e),A=!1;return}}}catch(e){console.warn(`Native BLE fallback:`,e)}if(navigator.bluetooth)try{let t=await navigator.bluetooth.requestDevice({filters:[{services:[`heart_rate`]}],optionalServices:[`battery_service`]});await t.gatt.connect(),Oe(t.name||`BLE Akıllı Saat`,e),A=!1;return}catch(e){console.warn(`Web Bluetooth fallback:`,e)}setTimeout(()=>{Oe(`Mi Fitness / Galaxy Watch (Bağlandı)`,e),A=!1},1e3)}}function Oe(e,t){pe(),k(`success`);let n=p(),r=parseFloat((5+Math.random()*1.5).toFixed(1)),i=Math.floor(r*1400),a=Math.floor(58+Math.random()*8),o=Math.floor(82+Math.random()*12),s=Math.floor(440+Math.random()*50);m({sleepData:{connected:!0,deviceName:e,totalMinutes:s,deepMinutes:Math.floor(s*.24),remMinutes:Math.floor(s*.2),lightMinutes:s-Math.floor(s*.44),qualityScore:o,restingHr:a,hasRestBuff:o>=80,lastDistanceKm:r,lastSteps:i,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})},todayHabits:n.todayHabits.map(e=>e.id===`q_run`&&!e.completed?(g(e.bossDmg),h(e.xp,e.pillar),{...e,current:r,completed:!0}):e)});let c=`✅ Senkronize: ${e} • ${r} KM Koşuldu • ${a} BPM • %${o} Uyku (+%15 Buff)`;t&&t(c),Ee&&clearInterval(Ee),Ee=setInterval(()=>{let e=Math.floor(Math.random()*4)-2,t=Math.max(52,Math.min(95,a+e)),n=document.getElementById(`liveHeartRatePill`);n&&(n.textContent=`❤️ ${t} BPM`)},2200)}function ke(){window.location.href=`intent:#Intent;package=com.google.android.apps.healthdata;action=androidx.health.ACTION_HEALTH_CONNECT_SETTINGS;end`}async function Ae(e){return De(e)}function je(e){try{return JSON.parse(e)}catch{return null}}function Me(){let e=p(),t=e.todayHabits.filter(e=>e.completed).length,n=e.todayHabits.length,r=Math.round(t/n*100),i=e.sleepData;return`
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
            <span class="text-[10px] text-slate-400">Her tamamlanan görev bosstan anlık can götürür!</span>
          </div>
        </div>
        <div class="text-right">
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
  `}function Ne(e){let t=document.getElementById(`btnOneTapSync`);t&&t.addEventListener(`click`,()=>{let t=document.getElementById(`smartBandSyncText`);De(n=>{t&&(t.textContent=n),e&&e()})}),document.querySelectorAll(`.btn-quick-km`).forEach(t=>{t.addEventListener(`click`,()=>{let n=parseFloat(t.getAttribute(`data-add`));m({todayHabits:p().todayHabits.map(e=>{if(e.id===`q_run`){let t=parseFloat(((e.current||0)+n).toFixed(1)),r=t>=e.target;return r&&!e.completed?(g(e.bossDmg),h(e.xp,e.pillar),pe(),k(`success`)):(E(),k(`light`)),{...e,current:t,completed:r}}return e})}),e&&e()})}),document.querySelectorAll(`.btn-open-modal-trigger`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-modal`);E(),k(`light`),m(n===`workout`||n===`workoutTab`||n===`workoutModal`?{activeTab:`workout`,activeModal:null}:{activeModal:n}),e&&e()})}),document.querySelectorAll(`.btn-toggle-habit`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=p(),i=r.todayHabits[n],a=!i.completed,o=[...r.todayHabits];o[n]={...i,completed:a},a?(O(),k(`heavy`),g(i.bossDmg),h(i.xp,i.pillar),alert(`💥 KRİTİK HASAR! ${i.title} tamamlandı. Boss'a ${i.bossDmg} Hasar vuruldu, +${i.xp} XP kazanıldı!`)):(E(),k(`light`)),m({todayHabits:o}),e&&e()})});let n=document.getElementById(`btnSealDaySuccess`);n&&n.addEventListener(`click`,()=>{let t=p();t.todayHabits.filter(e=>e.completed).length<3?alert(`⚠️ En az 3 görevi tamamlamadan günü mühürleyemezsiniz!`):(D(),k(`success`),alert(`🎉 TEBRİKLER! Gün ${t.currentDay} başarıyla mühürlendi. Zinciri kırmadın, yarınki zindana ilerleniyor!`),ie(),m({activeTab:`boss`}),e&&e())});let r=document.getElementById(`btnSkipDayPenalty`);r&&r.addEventListener(`click`,()=>{if(confirm(`⚠️ UYARI: Bir gün atlandığında Boss X2 Güçlenecek (Berserk Modu) ve 1 Canınız (-1 ❤️) azalacak. Onaylıyor musunuz?`)){O(),k(`error`);let t=re();alert(`☠️ GÜN ATLANDI! Boss x2 Güçlendi (${t.enragedHp} HP) ve Canınız Azaldı (Kalan: ${t.newHearts} ❤️)! Zincir haritasında kırmızı mühür vuruldu.`),m({activeTab:`boss`}),e&&e()}})}function Pe(){let t=p(),n=Math.min(10,Math.ceil(t.currentDay/7)),r=e[n-1]||e[0],i=Math.max(0,Math.min(100,Math.round(t.bossHp/t.bossMaxHp*100))),a=[,,,].fill(0).map((e,n)=>`<span class="text-xl ${n<t.hearts?`text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]`:`text-slate-700 opacity-40`}">❤️</span>`).join(` `);return`
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

        <!-- Boss Top Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">👾</span>
            <div>
              <span class="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-widest">[ ${n}. HAFTA ZİNDANI ]</span>
              <h2 class="text-base font-black text-white">${r.name}</h2>
            </div>
          </div>

          <!-- Player Health Hearts -->
          <div class="flex flex-col items-end">
            <span class="text-[9px] font-mono text-slate-400 font-bold uppercase">AVCI CANI</span>
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
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Kırıldı</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span> Bugün</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span> Kilitli</span>
        </div>

        <!-- Chain Links Grid -->
        <div class="grid grid-cols-11 sm:grid-cols-22 gap-2 pt-2">
          ${Array(66).fill(0).map((e,n)=>{let r=n+1,i=t.chainDays[r]||(r<t.currentDay?`done`:r===t.currentDay?`current`:`locked`),a=`bg-slate-950 border-slate-800 text-slate-600`,o=r;return i===`done`?a=`bg-emerald-500/25 border-emerald-500/60 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]`:i===`missed`?a=`bg-rose-500/30 border-rose-500/80 text-rose-300 line-through shadow-[0_0_8px_rgba(244,63,94,0.4)]`:i===`current`&&(a=`bg-cyan-500 text-black border-cyan-400 font-black shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110`),`
              <div class="aspect-square rounded-xl border flex items-center justify-center text-[10px] font-mono font-bold transition-all ${a}">
                ${o}
              </div>
            `}).join(``)}
        </div>

      </div>

    </div>
  `}function Fe(e){let t=document.getElementById(`btnBossManualStrike`);t&&t.addEventListener(`click`,()=>{if(p().bossHp<=0){alert(`🎉 Tebrikler! Bu haftanın patronu zaten yok edildi!`);return}O(),k(`heavy`);let t=g(60);t.isDefeated?(D(),k(`success`),h(100,`STR`),alert(`🏆 ZAFER! Boss yok edildi! +100 STR XP ve Zafer Rozeti kazandın!`)):alert(`💥 Boss'a 60 Hasar vuruldu! Kalan Boss Canı: ${t.newHp} HP`),e&&e()})}var Ie=[{id:`all`,label:`Tümü`},{id:`bodyweight`,label:`Ekipmansız (Evde)`},{id:`dumbbell`,label:`Dambıl`},{id:`barbell`,label:`Halter (Barbell)`},{id:`band`,label:`Direnç Bandı`},{id:`machine`,label:`Spor Salonu / Makine`}],Le=[{id:`all`,label:`Tüm Kaslar`},{id:`chest`,label:`Göğüs`},{id:`back`,label:`Sırt`},{id:`legs`,label:`Bacak`},{id:`shoulders`,label:`Omuz`},{id:`arms`,label:`Kol (Biceps/Triceps)`},{id:`core`,label:`Karın (Core)`}],Re=[{id:`bw_pushup`,name:`Klasik Şınav (Push-Up)`,equipment:`bodyweight`,muscle:`chest`,difficulty:`Başlangıç / Orta`,instructions:`Ellerini omuz genişliğinde yere koy, gövdeni düz bir çizgi halinde tut. Göğsün yere değene kadar in ve güçlüce it.`,targetMuscles:`Göğüs, Triceps, Ön Omuz, Core`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg`},{id:`bw_squat`,name:`Vücut Ağırlığı Squat (Air Squat)`,equipment:`bodyweight`,muscle:`legs`,difficulty:`Başlangıç`,instructions:`Ayaklar omuz genişliğinde açık. Kalçayı geriye doğru sandalyeye oturur gibi indir, dizler parmak ucunu geçmesin.`,targetMuscles:`Quadriceps, Gluteus (Kalça), Hamstrings`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg`},{id:`bw_pullup`,name:`Barfiks (Pull-Up)`,equipment:`bodyweight`,muscle:`back`,difficulty:`İleri Seviye`,instructions:`Barı omuzdan biraz geniş tut. Kürek kemiklerini sıkarak çeneni barın üzerine çek, kontrollü şekilde indir.`,targetMuscles:`Latissimus Dorsi (Kanat), Biceps, Üst Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg`},{id:`bw_dips`,name:`Paralel Bar Dips / Sandalye Dips`,equipment:`bodyweight`,muscle:`arms`,difficulty:`Orta`,instructions:`Kollarını 90 derece bükerek gövdeni aşağı indir. Triceps kaslarını sıkarak başlangıç konumuna yüksel.`,targetMuscles:`Triceps, Alt Göğüs, Ön Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_Chest_Version/0.jpg`},{id:`bw_plank`,name:`Düz Plank (Forearm Plank)`,equipment:`bodyweight`,muscle:`core`,difficulty:`Başlangıç / Orta`,instructions:`Ön kollarının ve ayak parmaklarının üzerinde dur. Kalçayı ne çok kaldır ne düşür, karın kaslarını kilitle.`,targetMuscles:`Transverse Abdominis, Rectus Abdominis, Bel`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg`},{id:`bw_pike_pushup`,name:`Pike Şınav (Omuz Odaklı)`,equipment:`bodyweight`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Kalçayı yukarı kaldırarak ters V şekli al. Başını iki elinin arasına doğru indir ve omuzlarınla it.`,targetMuscles:`Ön ve Yan Deltoid, Üst Göğüs, Triceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg`},{id:`bw_lunges`,name:`Yürüyüş Lunge (Walking Lunge)`,equipment:`bodyweight`,muscle:`legs`,difficulty:`Orta`,instructions:`Bir adım öne at, arka dizin neredeyse yere değecek kadar çök. Ön bacağınla güç alarak kalk ve diğer bacağa geç.`,targetMuscles:`Quadriceps, Kalça, Denge ve Stabilite`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg`},{id:`db_bench_press`,name:`Dambıl Bench Press`,equipment:`dumbbell`,muscle:`chest`,difficulty:`Orta`,instructions:`Düz sehpaya uzan. Dambılları göğüs hizasında tutarak yukarı doğru presle, tepe noktada göğsü sık.`,targetMuscles:`Pectoralis Major (Göğüs), Triceps, Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg`},{id:`db_row`,name:`Tek Kol Dambıl Row (One-Arm Row)`,equipment:`dumbbell`,muscle:`back`,difficulty:`Orta`,instructions:`Bir dizini ve elini sehpaya koy. Dambılı dirseğini arkaya doğru çekerek kaburgana yaklaştır, sırtı sıkıştır.`,targetMuscles:`Latissimus Dorsi, Rhomboids, Biceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg`},{id:`db_shoulder_press`,name:`Dambıl Omuz Press (Overhead Press)`,equipment:`dumbbell`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Dambılları kulak hizasından başının üzerine doğru güçlüce it, kilitlenmeden kontrollü indir.`,targetMuscles:`Ön ve Yan Omuz (Deltoids), Triceps`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg`},{id:`db_bicep_curl`,name:`Dambıl Biceps Curl`,equipment:`dumbbell`,muscle:`arms`,difficulty:`Başlangıç`,instructions:`Dirsekleri gövdeye sabitle. Dambılları sadece ön kolunu bükerek yukarı kaldır, tepe noktada sık.`,targetMuscles:`Biceps Brachii, Brachialis`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg`},{id:`db_goblet_squat`,name:`Goblet Squat (Dambıl Çömelme)`,equipment:`dumbbell`,muscle:`legs`,difficulty:`Orta`,instructions:`Dambılı göğsünün önünde iki elinle dikey tut. Derin bir squat yap, dirseklerin dizlerinin içine doğru insin.`,targetMuscles:`Quadriceps, Kalça, Core`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg`},{id:`db_lateral_raise`,name:`Dambıl Yana Açış (Lateral Raise)`,equipment:`dumbbell`,muscle:`shoulders`,difficulty:`Orta`,instructions:`Hafif dambıllarla kollarını yana doğru omuz hizasına kadar kaldır. Geniş omuz illüzyonunun anahtarıdır.`,targetMuscles:`Lateral Deltoid (Yan Omuz)`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg`},{id:`bb_deadlift`,name:`Barbell Deadlift (Geleneksel)`,equipment:`barbell`,muscle:`back`,difficulty:`İleri Seviye`,instructions:`Beli nötr tut, kalçayı geriye iterek barı kavra. Topuklarından güç alarak dik konuma gel ve kalçayı kilitle.`,targetMuscles:`Tüm Arka Zincir: Bel, Hamstrings, Kalça, Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg`},{id:`bb_squat`,name:`Barbell Back Squat`,equipment:`barbell`,muscle:`legs`,difficulty:`İleri Seviye`,instructions:`Barı trapezius kaslarının üzerine yerleştir. Göğsü dik tutarak paralel veya altına kadar çök ve patlayıcı güçle kalk.`,targetMuscles:`Quadriceps, Kalça, Hamstring, Tüm Bacak`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg`},{id:`bb_bench_press`,name:`Barbell Bench Press`,equipment:`barbell`,muscle:`chest`,difficulty:`Orta`,instructions:`Barı göğüs kemiğine kadar kontrollü indir, ayakları yere basarak göğüs kaslarınla güçlüce tavana it.`,targetMuscles:`Göğüs (Pectoralis), Triceps, Omuz`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg`},{id:`band_facepull`,name:`Bant Face Pull (Postür & Arka Omuz)`,equipment:`band`,muscle:`shoulders`,difficulty:`Başlangıç / Orta`,instructions:`Bandı bir yere sabitle. Dirsekleri yüksekte tutarak bandı burnuna doğru çek, arka omuzları sık.`,targetMuscles:`Arka Deltoid, Rotator Cuff, Üst Sırt`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Face_Pull/0.jpg`},{id:`band_bicep_curl`,name:`Bant Biceps Curl`,equipment:`band`,muscle:`arms`,difficulty:`Başlangıç`,instructions:`Bandın üzerine bas, uçlarından tutarak kolları bük. Bant gerildikçe tepe noktada direnç maksimuma çıkar.`,targetMuscles:`Biceps, Ön Kol`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/1.jpg`},{id:`mac_lat_pulldown`,name:`Lat Pulldown (Geniş Çekiş)`,equipment:`machine`,muscle:`back`,difficulty:`Başlangıç / Orta`,instructions:`Barı geniş tut, göğsü yukarı kaldırarak barı köprücük kemiğine çek. Kanat kaslarını sıkarak yavaşça bırak.`,targetMuscles:`Latissimus Dorsi, Biceps, Kürek Kemiği`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lat_Pulldown/0.jpg`},{id:`mac_leg_press`,name:`Leg Press (Bacak Presi)`,equipment:`machine`,muscle:`legs`,difficulty:`Orta`,instructions:`Ayakları platformun ortasına koy. Ağırlığı 90 dereceye kadar indir, dizleri kilitlemeden yukarı it.`,targetMuscles:`Quadriceps, Gluteus, Hamstrings`,gif:`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg`}];async function j(e=!0){try{let t=window.Capacitor?.Plugins?.KeepAwake;if(t){e?await t.keepAwake():await t.allowSleep();return}}catch{}if(`wakeLock`in navigator)try{e&&!window._screenWakeLockSentinel?window._screenWakeLockSentinel=await navigator.wakeLock.request(`screen`):!e&&window._screenWakeLockSentinel&&(await window._screenWakeLockSentinel.release(),window._screenWakeLockSentinel=null)}catch{}}var M=`all`,N=`all`,P=``,F=`monday`,I={},L=0,R=null,ze=60,Be=[{key:`monday`,label:`Pzt`},{key:`tuesday`,label:`Sal`},{key:`wednesday`,label:`Çar`},{key:`thursday`,label:`Per`},{key:`friday`,label:`Cum`},{key:`saturday`,label:`Cmt`},{key:`sunday`,label:`Paz`}];function Ve(){let e=p().workouts[F]||{name:`Özel Antrenman`,exercises:[]},t=Re.filter(e=>{let t=M===`all`||e.equipment===M,n=N===`all`||e.muscle===N,r=!P||e.name.toLowerCase().includes(P.toLowerCase())||e.targetMuscles.toLowerCase().includes(P.toLowerCase());return t&&n&&r});return`
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
            ${Be.map(e=>`
                <button type="button" class="btn-workout-day py-1.5 rounded-xl border text-center transition ${e.key===F?`bg-amber-500 text-black border-amber-400 font-bold shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-day="${e.key}">
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
                ${L>0?`${L}s`:`Hazır`}
              </span>
            </div>
            <div class="flex items-center gap-1 text-[10px] font-mono">
              ${[30,60,90].map(e=>`
                <button type="button" class="btn-rest-preset px-2 py-1 rounded-lg border transition ${e===ze?`bg-amber-500/30 text-amber-200 border-amber-500/60 font-bold`:`bg-slate-900 border-slate-800 text-slate-400`}" data-sec="${e}">
                  ${e}s
                </button>
              `).join(``)}
            </div>
          </div>
        </div>

        <!-- Current Day Exercises Sets Tracker -->
        <div class="space-y-2.5">
          ${e.exercises.map(e=>{let t=I[e.id]||0;return`
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
            ${Ie.map(e=>`
              <button type="button" class="btn-filter-equip px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===M?`bg-amber-500 text-black shadow-md shadow-amber-500/20`:`bg-slate-950 border border-slate-800 text-slate-400 hover:text-white`}" data-equip="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Muscle Group Filter Row -->
        <div class="space-y-1.5">
          <span class="text-[10px] font-mono text-slate-400 uppercase font-bold">HEDEF KAS GRUBU:</span>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            ${Le.map(e=>`
              <button type="button" class="btn-filter-muscle px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===N?`bg-cyan-500 text-black shadow-md shadow-cyan-500/20`:`bg-slate-950 border border-slate-800 text-slate-400 hover:text-white`}" data-muscle="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative">
          <input type="text" id="exerciseSearchInput" placeholder="Hareket veya kas adı ara (Örn: Şınav, Göğüs, Squat)..." value="${P}" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 font-sans" />
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
                <span>+ Bu Güne Ekle (${Be.find(e=>e.key===F)?.label})</span>
              </button>

            </div>
          `).join(``)}
        </div>

      </div>

    </div>
  `}function He(e){document.querySelectorAll(`.btn-workout-day`).forEach(t=>{t.addEventListener(`click`,()=>{F=t.getAttribute(`data-day`),E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-rest-preset`).forEach(t=>{t.addEventListener(`click`,()=>{ze=Number(t.getAttribute(`data-sec`)),E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-toggle-set`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-ex`),r=Number(t.getAttribute(`data-set`));r>=(I[n]||0)?(I[n]=r+1,E(),k(`medium`),Ue(ze)):(I[n]=r,k(`light`)),e&&e()})}),document.querySelectorAll(`.btn-filter-equip`).forEach(t=>{t.addEventListener(`click`,()=>{M=t.getAttribute(`data-equip`),E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-filter-muscle`).forEach(t=>{t.addEventListener(`click`,()=>{N=t.getAttribute(`data-muscle`),E(),k(`light`),e&&e()})});let t=document.getElementById(`exerciseSearchInput`);t&&t.addEventListener(`input`,t=>{P=t.target.value,e&&e()}),document.querySelectorAll(`.btn-add-exercise-to-plan`).forEach(t=>{t.addEventListener(`click`,()=>{t.getAttribute(`data-id`);let n=t.getAttribute(`data-name`),r=t.getAttribute(`data-equip`),i=p(),a=i.workouts[F],o={id:`ex_`+Date.now(),name:n,sets:4,reps:`10`,weight:r===`bodyweight`?`Vücut Ağ.`:`15 kg`,equipment:r},s={...a,exercises:[...a.exercises,o]};m({workouts:{...i.workouts,[F]:s}}),playQuestCompleteSound(),k(`success`),alert(`✅ "${n}" hareketi ${Be.find(e=>e.key===F)?.label} gününe eklendi!`),e&&e()})});let n=document.getElementById(`btnFinishDayWorkout`);n&&n.addEventListener(`click`,()=>{We(),j(!1),O(),k(`heavy`);let t=p().todayHabits.map(e=>e.id===`q_workout`?{...e,current:45,completed:!0}:e);g(50),h(50,`STR`),alert(`💥 TEBRİKLER! Antrenman başarıyla mühürlendi. Boss'a 50 Fiziksel Hasar vuruldu ve +50 STR XP kazanıldı!`),m({todayHabits:t}),e&&e()})}function Ue(e){We(),j(!0),L=e,R=setInterval(()=>{L--;let e=document.getElementById(`workoutRestTimerDisplay`);e&&(e.textContent=`${L}s`),L<=0&&(We(),me(),k(`heavy`),e&&(e.textContent=`Yeni Sete Başla 🔥`))},1e3)}function We(){R&&(clearInterval(R),R=null),L=0}var Ge=[{id:`marcus_aurelius`,title:`Kendime Düşünceler`,author:`Marcus Aurelius (Roma İmparatoru & Stoacı Filozof)`,category:`Stoacılık & Disiplin`,pagesEstimate:35,summary:`Roma İmparatoru'nun savaş meydanlarında kendi kendine yazdığı samimi günlüğü. Dış dünyayı değil, kendi zihnini yönetmeyi öğretir.`,chapters:[{title:`Bölüm 1: Sabah Uyanışı ve Görev Bilinci`,content:`Sabah yatağından kalkmakta zorlandığında, hemen kendine şunu söyle:
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

İnsanlar paralarına gelince aşırı derecede cimridir; fakat iş zamanlarını başkalarına ya da anlamsız şeylere harcamaya gelince inanılmaz derecede cömert davranırlar. Oysa tek cimri olmamız gereken şey zamandır.`}]}],z=`Tümü`,Ke=[`Tümü`,`Disiplin`,`İrade`,`Odak`,`Güç`,`Bilgelik`,`Özgüven`,`Stoacılık`];function qe(){let e=z===`Tümü`?n:n.filter(e=>e.category===z||e.color===z);return`
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
        ${Ke.map(e=>`
          <button type="button" class="btn-filter-category px-3 py-1 rounded-xl text-xs font-mono font-bold transition whitespace-nowrap ${e===z?`bg-cyan-500 text-black shadow-md shadow-cyan-500/20`:`bg-slate-900 border border-slate-800 text-slate-400 hover:text-white`}" data-cat="${e}">
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
  `}function Je(){return p().activeModal===`books`?`
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
  `:``}function Ye(e){let t=document.getElementById(`btnLaunchInAppReader`);t&&t.addEventListener(`click`,()=>{E(),k(`light`),m({activeModal:`reader`}),e&&e()}),document.querySelectorAll(`.btn-filter-category`).forEach(t=>{t.addEventListener(`click`,()=>{z=t.getAttribute(`data-cat`),E(),k(`light`),e&&e()})}),document.querySelectorAll(`.mantra-card-wrapper`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.querySelector(`.mantra-card-inner`);t&&(t.classList.toggle(`flipped`),E(),k(`light`))})});let n=document.getElementById(`btnOpenBooksModal`);n&&n.addEventListener(`click`,()=>{E(),k(`light`),m({activeModal:`books`}),e&&e()});let r=document.getElementById(`btnCloseBooksModal`);r&&r.addEventListener(`click`,()=>{m({activeModal:null}),e&&e()})}var B=`v2.2.0`,Xe=`https://api.github.com/repos/szgnemin1/reset66/releases/latest`;function Ze(e,t=B){if(!e)return!1;let n=e.replace(/^v/,``).split(`.`).map(e=>parseInt(e,10)||0),r=t.replace(/^v/,``).split(`.`).map(e=>parseInt(e,10)||0);for(let e=0;e<Math.max(n.length,r.length);e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function Qe(){try{let e=await fetch(Xe,{cache:`no-cache`,headers:{Accept:`application/vnd.github.v3+json`}});if(!e.ok)return null;let t=await e.json(),n=t.tag_name,r=(t.assets||[]).find(e=>e.name.endsWith(`.apk`)),i=r?r.browser_download_url:t.html_url;return{tag:n,name:t.name||n,body:t.body||`Performans iyileştirmeleri ve yeni sistem modülleri.`,publishedAt:t.published_at,downloadUrl:i,apkName:r?r.name:`reset66.apk`,apkSize:r?Math.round(r.size/1024/1024*10)/10:null}}catch(e){return console.warn(`GitHub update check failed (offline or network issue):`,e),null}}async function $e(e=!0){let t=await Qe();return t?Ze(t.tag,`v2.2.0`)?(et(t),!0):(e||alert(`✅ Harika! Uygulamanız zaten en güncel sürümde (${B}).`),!1):(e||alert(`⚠️ GitHub sunucularına bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.`),!1)}function et(e){let t=document.getElementById(`inAppUpdateModal`);t&&t.remove(),D(),k(`success`);let n=`
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
            <span class="text-slate-300 font-bold">${B}</span>
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
  `;document.body.insertAdjacentHTML(`beforeend`,n),document.getElementById(`btnApplyUpdateNow`).addEventListener(`click`,()=>{E(),k(`heavy`),window.open(e.downloadUrl,`_system`)}),document.getElementById(`btnDismissUpdate`).addEventListener(`click`,()=>{E(),k(`light`),document.getElementById(`inAppUpdateModal`).remove()})}function tt(){let e=p();return`
    <div class="space-y-4 animate-fadeIn">
      
      <!-- Settings Header Banner -->
      <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div>
          <span class="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-widest">[ SİSTEM AYARLARI ]</span>
          <h2 class="text-base font-black text-white">RESET66 KONTROL MERKEZİ</h2>
          <span class="text-[11px] text-slate-400">Tüm cihaz, ses, titreşim ve yedekleme tercihleri.</span>
        </div>
        <span class="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/40">
          ${B}
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

        <!-- In-App Auto-Update Checker Row -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-cyan-500/30">
          <div>
            <span class="text-xs text-cyan-300 font-bold block">🔄 Otomatik Güncelleme (GitHub)</span>
            <span class="text-[10px] text-slate-400 font-mono">Her açılışta anlık bakar • Sürüm: ${B}</span>
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
  `}function nt(e){let t=document.getElementById(`btnSettingToggleSound`);t&&t.addEventListener(`click`,()=>{let t=p();E(),k(`light`),m({soundEnabled:!t.soundEnabled}),e&&e()});let n=document.getElementById(`btnSettingToggleHaptics`);n&&n.addEventListener(`click`,()=>{let t=p();E(),k(`medium`),m({hapticsEnabled:!t.hapticsEnabled}),e&&e()});let r=document.getElementById(`btnSettingCheckUpdates`);r&&r.addEventListener(`click`,()=>{E(),k(`light`),r.textContent=`Denetleniyor...`,$e(!1).finally(()=>{r.textContent=`Denetle ➔`})});let i=document.getElementById(`btnSettingReopenAssessment`);i&&i.addEventListener(`click`,()=>{E(),k(`light`),m({activeModal:`assessment`}),e&&e()});let a=document.getElementById(`btnSettingExportData`);a&&a.addEventListener(`click`,()=>{let e=oe(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reset66_backup_${Date.now()}.json`,r.click(),URL.revokeObjectURL(n),k(`success`)});let o=document.getElementById(`btnSettingImportData`);o&&o.addEventListener(`click`,()=>{let t=prompt(`Dışa aktardığınız JSON yedeğini yapıştırın:`);t&&(se(t)?(k(`success`),alert(`✅ Veriler başarıyla içe aktarıldı!`),e&&e()):alert(`❌ Geçersiz JSON formatı!`))});let s=document.getElementById(`btnSettingResetAll`);s&&s.addEventListener(`click`,()=>{confirm(`⚠️ DİKKAT: Tüm seviyeniz, streak ve boss ilerlemeniz silinecektir. Emin misiniz?`)&&(ae(),k(`error`),alert(`Tüm veriler sıfırlandı.`),e&&e())})}var rt=`marcus_aurelius`,V=0,H=`normal`;function it(){if(p().activeModal!==`reader`)return``;let e=Ge.find(e=>e.id===rt)||Ge[0],t=e.chapters[V]||e.chapters[0],n=`text-sm leading-relaxed`;return H===`large`&&(n=`text-base leading-loose`),H===`xlarge`&&(n=`text-lg leading-loose`),`
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
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${H===`normal`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="normal">A</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${H===`large`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="large">A+</button>
              <button type="button" class="btn-font-size px-2 py-0.5 rounded ${H===`xlarge`?`bg-purple-500 text-black font-bold`:`text-slate-400`}" data-size="xlarge">A++</button>
            </div>

            <!-- Close Button -->
            <button type="button" id="btnCloseReaderModal" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition">
              ✕
            </button>
          </div>
        </div>

        <!-- Book & Chapter Selectors Bar -->
        <div class="p-2.5 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          ${Ge.map(e=>`
            <button type="button" class="btn-select-book px-3 py-1 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition ${e.id===rt?`bg-purple-500 text-black`:`bg-slate-900 text-slate-400 border border-slate-800`}" data-book="${e.id}">
              ${e.title}
            </button>
          `).join(``)}
        </div>

        <!-- Chapter Selector Pills -->
        <div class="px-3 py-1.5 bg-slate-900/60 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span class="text-slate-500 shrink-0 font-bold">BÖLÜM:</span>
          ${e.chapters.map((e,t)=>`
            <button type="button" class="btn-select-chapter px-2 py-0.5 rounded-md whitespace-nowrap transition ${t===V?`bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40`:`text-slate-400 hover:text-slate-200`}" data-idx="${t}">
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
  `}function at(e){let t=document.getElementById(`btnCloseReaderModal`);t&&t.addEventListener(`click`,()=>{m({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-select-book`).forEach(t=>{t.addEventListener(`click`,()=>{rt=t.getAttribute(`data-book`),V=0,E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-select-chapter`).forEach(t=>{t.addEventListener(`click`,()=>{V=Number(t.getAttribute(`data-idx`)),E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-font-size`).forEach(t=>{t.addEventListener(`click`,()=>{H=t.getAttribute(`data-size`),E(),k(`light`),e&&e()})});let n=document.getElementById(`btnFinishReading`);n&&n.addEventListener(`click`,()=>{pe(),k(`success`);let t=p().todayHabits.map(e=>e.id===`q_reading`?{...e,current:15,completed:!0}:e);g(35),h(35,`MND`),alert(`📖 Tebrikler! 15 sayfalık Stoacı derin okuma tamamlandı. Boss'a 35 Hasar vuruldu ve +35 Zihin (MND) XP kazanıldı!`),m({todayHabits:t,activeModal:null}),e&&e()})}var U=0,ot=[];function st(){let e=p();if(e.onboardingDone&&e.activeModal!==`assessment`)return``;let t=a[U],n=a.length,r=Math.round((U+1)/n*100);return`
    <div id="onboardingModalBackdrop" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div class="w-full max-w-md rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 shadow-[0_0_35px_rgba(6,182,212,0.25)] space-y-5 text-white">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🧬</span>
            <div>
              <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">YAŞAM SIFIRLAMA ANALİZİ</h2>
              <span class="text-[10px] text-slate-400">Adım ${U+1} / ${n}</span>
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
  `}function ct(e){document.querySelectorAll(`.onboarding-opt-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-idx`)),r=a[U].options[n];ot.push(r),E(),k(`light`),U<a.length-1?(U++,e&&e()):lt(e)})});let t=document.getElementById(`btnSkipOnboarding`);t&&t.addEventListener(`click`,()=>{m({onboardingDone:!0,activeModal:null}),e&&e()})}function lt(e){D(),k(`success`);let t=0;ot.forEach(e=>{t+=e.score||30}),m({onboardingDone:!0,assessmentScore:Math.min(100,Math.round(t/(a.length*50)*100)),activeModal:null}),e&&e()}var W=`box`,G=5,K=300,q=null,J=0,Y=0;function ut(){let e=i[W],t=ve(),n=Se(),r=Math.floor(K/60),a=K%60,o=`${String(r).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`;return`
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
              <button type="button" class="btn-med-tech p-2 rounded-xl border text-center transition ${e===W?`bg-purple-500/20 border-purple-500/60 text-purple-200 font-bold shadow-sm`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200`}" data-tech="${e}">
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
              <button type="button" class="btn-med-duration py-1.5 rounded-xl border text-xs font-mono font-bold transition ${e===G?`bg-purple-500 text-black border-purple-400 shadow-md`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-dur="${e}">
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
          ${q?`⏸️ MEDİTASYONU DURDUR`:`▶️ MEDİTASYONU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function dt(e){let t=document.getElementById(`btnCloseMedModal`);t&&t.addEventListener(`click`,()=>{pt(),m({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-med-tech`).forEach(t=>{t.addEventListener(`click`,()=>{W=t.getAttribute(`data-tech`),E(),k(`light`),mt(),e&&e()})}),document.querySelectorAll(`.btn-med-duration`).forEach(t=>{t.addEventListener(`click`,()=>{G=Number(t.getAttribute(`data-dur`)),K=G*60,E(),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-binaural`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-binaural`);ve()===n?ge():_e(n),k(`light`),e&&e()})}),document.querySelectorAll(`.btn-audio-noise`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-noise`);Se()===n?be():xe(n),k(`light`),e&&e()})});let n=document.getElementById(`btnPlayTibetBowl`);n&&n.addEventListener(`click`,()=>{he(),k(`medium`)});let r=document.getElementById(`btnToggleMedSession`);r&&r.addEventListener(`click`,()=>{q?pt():ft(),e&&e()})}function ft(){j(!0),he(),k(`medium`),J=0;let e=i[W];Y=e.phases[0].sec,q=setInterval(()=>{K--,Y--,Y<=0&&(J=(J+1)%e.phases.length,Y=e.phases[J].sec,k(`light`)),ht(e.phases[J],Y),K<=0&&gt()},1e3)}function pt(){q&&(clearInterval(q),q=null),j(!1),ge(),be()}function mt(){J=0,Y=0,K=G*60}function ht(e,t){let n=document.getElementById(`medPhaseLabel`),r=document.getElementById(`medPhaseTimer`),i=document.getElementById(`medInstructionText`),a=document.getElementById(`medOrbCore`),o=document.getElementById(`medOrbRing2`),s=document.getElementById(`medOrbRing3`),c=document.getElementById(`medTimerDisplay`);if(n&&(n.textContent=e.label),r&&(r.textContent=`${t}s`),i&&(i.textContent=e.instr),a&&(e.action===`expand`?(a.style.transform=`scale(1.35)`,o&&(o.style.transform=`scale(1.25)`),s&&(s.style.transform=`scale(1.15)`)):e.action===`contract`?(a.style.transform=`scale(0.85)`,o&&(o.style.transform=`scale(0.95)`),s&&(s.style.transform=`scale(0.95)`)):a.style.transform=`scale(1.1)`),c){let e=Math.floor(K/60),t=K%60;c.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}}function gt(){pt(),he(),k(`success`);let e=G*10;h(e,`MND`),alert(`🧘 Tebrikler! ${G} dakikalık derin farkındalık seansı tamamlandı. +${e} Zihin (MND) XP kazandın!`),m({activeModal:null})}var X=25,Z=1500,Q=null;function _t(){let e=Math.floor(Z/60),t=Z%60;return`
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
              ${Q?`ODAK AKTİF`:`DURAKLATILDI`}
            </span>
          </div>
        </div>

        <!-- Duration Presets -->
        <div class="grid grid-cols-3 gap-2 text-xs font-mono">
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${X===25?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="25">
            25 Dk (Klasik)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${X===50?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="50">
            50 Dk (Derin)
          </button>
          <button type="button" class="btn-focus-preset py-2 rounded-xl border text-center transition ${X===90?`bg-indigo-500 text-black border-indigo-400 font-bold`:`bg-slate-950 border-slate-800 text-slate-400 hover:text-white`}" data-min="90">
            90 Dk (Huberman)
          </button>
        </div>

        <!-- Start / Pause Button -->
        <button type="button" id="btnToggleFocusTimer" class="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-black text-xs font-mono tracking-widest uppercase transition shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          ${Q?`⏸️ ODAK BLOKUNU DURDUR`:`▶️ ODAK BLOKUNU BAŞLAT`}
        </button>

      </div>
    </div>
  `}function vt(e){let t=document.getElementById(`btnCloseFocusModal`);t&&t.addEventListener(`click`,()=>{bt(),j(!1),m({activeModal:null}),e&&e()}),document.querySelectorAll(`.btn-focus-preset`).forEach(t=>{t.addEventListener(`click`,()=>{X=Number(t.getAttribute(`data-min`)),Z=X*60,E(),k(`light`),e&&e()})});let n=document.getElementById(`btnToggleFocusTimer`);n&&n.addEventListener(`click`,()=>{Q?bt():yt(),e&&e()})}function yt(){j(!0),E(),k(`medium`),Q=setInterval(()=>{Z--;let e=Math.floor(Z/60),t=Z%60,n=document.getElementById(`focusTimeDisplay`);n&&(n.textContent=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`),Z<=0&&(bt(),D(),k(`success`),h(X,`FOC`),alert(`⏱️ Pürdikkat Odak Seansı Tamamlandı! +${X} Odak (FOC) XP kazandın!`),m({activeModal:null}))},1e3)}function bt(){Q&&(clearInterval(Q),Q=null)}function xt(){let e=p().sleepData,t=(e.totalMinutes/60).toFixed(1),n=(e.deepMinutes/60).toFixed(1),r=(e.remMinutes/60).toFixed(1);return`
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
  `}function St(e){let t=document.getElementById(`btnCloseSleepModal`);t&&t.addEventListener(`click`,()=>{m({activeModal:null}),e&&e()});let n=document.getElementById(`btnScanBLE`);n&&n.addEventListener(`click`,()=>{E(),k(`medium`),Ae(t=>{let n=document.getElementById(`sleepSyncStatusLog`);n&&(n.textContent=t),e&&e()})});let r=document.getElementById(`btnHealthConnect`);r&&r.addEventListener(`click`,()=>{E(),k(`light`),ke()});let i=document.getElementById(`btnUploadHealthFile`),a=document.getElementById(`healthFileInput`);i&&a&&(i.addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,t=>{let n=t.target.files[0];if(!n)return;let r=new FileReader;r.onload=t=>{let r=je(t.target.result);r.success?(D(),k(`success`),m({sleepData:{...p().sleepData,connected:!0,deviceName:n.name,totalMinutes:r.totalMinutes,deepMinutes:r.deepMinutes,remMinutes:r.remMinutes,lightMinutes:r.lightMinutes,qualityScore:r.qualityScore,restingHr:r.restingHr,hasRestBuff:r.qualityScore>=80,lastSyncTime:new Date().toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`})}}),alert(`✅ ${n.name} başarıyla ayrıştırıldı! Uyku Kalite Skoru: %${r.qualityScore}`),e&&e()):alert(`Hata: `+r.error)},r.readAsText(n)}));let o=document.getElementById(`btnClaimSleepBuff`);o&&o.addEventListener(`click`,()=>{D(),k(`success`),h(30,`VIT`),h(15,`WIL`),alert(`⚡ Tam Dinlenmiş Buff'ı etkinleştirildi! +30 VIT ve +15 WIL XP kazandın!`),m({activeModal:null}),e&&e()})}function $(){let e=p(),t=document.getElementById(`app`);if(!t)return;let n=``;n=e.activeTab===`quests`?Me():e.activeTab===`boss`?Pe():e.activeTab===`workout`?Ve():e.activeTab===`library`||e.activeTab===`cards`?qe():e.activeTab===`settings`?tt():Me();let r=``;!e.onboardingDone||e.activeModal===`assessment`?r=st():e.activeModal===`reader`?r=it():e.activeModal===`meditation`?r=ut():e.activeModal===`focus`||e.activeModal===`pomodoro`?r=_t():e.activeModal===`sleep`?r=xt():e.activeModal===`books`&&(r=Je()),t.innerHTML=`
    <div class="min-h-screen bg-[#080B11] text-slate-100 pb-24 selection:bg-cyan-500 selection:text-black">
      
      <!-- Top Glow Aura -->
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-cyan-500/10 blur-[90px] pointer-events-none"></div>

      <!-- Main Shell Container -->
      <main class="max-w-xl mx-auto px-3.5 pt-3.5 space-y-4">
        ${ce()}
        <section id="tabContentContainer" class="min-h-[500px]">
          ${n}
        </section>
      </main>

      <!-- Bottom Dock Navigation -->
      ${we()}

      <!-- Modals Container -->
      <div id="modalSlot">
        ${r}
      </div>

    </div>
  `,Te($),e.activeTab===`quests`?Ne($):e.activeTab===`boss`?Fe($):e.activeTab===`workout`?He($):e.activeTab===`library`||e.activeTab===`cards`?Ye($):e.activeTab===`settings`&&nt($),!e.onboardingDone||e.activeModal===`assessment`?ct($):e.activeModal===`reader`?at($):e.activeModal===`meditation`?dt($):e.activeModal===`focus`||e.activeModal===`pomodoro`?vt($):e.activeModal===`sleep`?St($):e.activeModal===`books`&&Ye($)}document.addEventListener(`DOMContentLoaded`,()=>{ee(),$(),ne(()=>{}),setTimeout(()=>{$e(!0)},1200),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&$e(!0)})});