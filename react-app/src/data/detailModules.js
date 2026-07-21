/* detail.js modül verisinin birebir kopyası */
export const MODULE_ICONS = {
  m0: '<path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6"/>',
  m1: '<path d="M8 11l3 3 5-6"/><path d="M3 18c0-3 2-4 4-4M21 18c0-3-2-4-4-4"/><circle cx="12" cy="6" r="3"/>',
  m2: '<circle cx="12" cy="12" r="9"/><path d="M12 7l2.5 5L12 17l-2.5-5z" fill="currentColor"/>',
  m3: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18" /><path d="M5 7c3 2 11 2 14 0M5 17c3-2 11-2 14 0"/>',
  m4: '<path d="M4 20V12a8 8 0 0116 0v8M4 20h16M9 20v-5h6v5M12 4v0"/>',
  m5: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10.5" r="2.2"/>',
  m6: '<path d="M12 3v5M6 8h12M5 21c0-4 3-7 7-7s7 3 7 7"/><circle cx="12" cy="3" r="1.4" fill="currentColor"/>',
  m7: '<path d="M5 13l4 4L19 7"/>',
};

export const MODULES = [
  {
    id: 'm0', num: 'Modül 0', name: 'Mesleğin İzinde', theme: 'Meslek Adamları ve Tecrübe Aktarımı', spine: true,
    aim: 'Farklı meslek alanlarından ustaların tecrübeleriyle öğrencilerde mesleğe, sorumluluğa ve insana dair farkındalık oluşturmak. Ana modüllerin altından geçen destekleyici bir omurga modülüdür.',
    lessons: ['Mesleğin İzinde-1: Mesleki Bilinç', 'Mesleğin İzinde-2: İçimizdeki Anlam Arayışı', 'Mesleğin İzinde-3: Dünden Bugüne Dünyayı Anlamak', 'Mesleğin İzinde-4: Dijital Perde', 'Mesleğin İzinde-5: Mana ve Mecra', 'Mesleğin İzinde-6: Duruş ve Değerler'],
  },
  {
    id: 'm1', num: 'Modül 1', name: 'Mesleki Bilinç', theme: 'Tanışma, Mesleki Farkındalık ve Ahilik',
    aim: 'Öğrencilerin programı tanıması, grup içinde iletişim kurması, meslek bilinci ve Ahilik ekseninde insan-toplum-meslek ilişkisini kavraması.',
    lessons: ['Hamilik Felsefesi ve Ahilik', 'Buz Kırma - Drama Etkinliği', 'Üniversite ve Varlığı Anlamak', 'Evrenin Merkezindeki Varlık Olarak İnsan'],
  },
  {
    id: 'm2', num: 'Modül 2', name: 'İçimizdeki Anlam Arayışı', theme: 'Varlık, Yaratılış ve İlişkimiz',
    aim: 'Öğrencilerin kendilerine, varlığa ve yaratılış gayesine dair düşünmesini; fıtrat merkezli bir içsel yolculuğa yönelmesini sağlamak.',
    lessons: ['Keşfe Çıkarken - Kâşifin Yolculuğu', 'İnsanın Fıtratı, Yaratılışı ve Gayesi', 'İnsanın Kendini Anlama Atölyesi', 'Tematik Drama Etkinliği'],
  },
  {
    id: 'm3', num: 'Modül 3', name: 'Dünden Bugüne Dünyayı Anlamak', theme: 'Geçmişi Kavrayarak Bugünde Yerini Bulmak',
    aim: 'Tarihsel krizler, liderlik örnekleri ve toplumsal dönüşümler üzerinden öğrencilerin dünyayı kavramsal düzeyde okuyabilmesini sağlamak.',
    lessons: ['Tarihsel Krizler ve Bugüne Yansımaları', 'Zaman Yolculuğu Uygulama Atölyeleri', 'Farklılık Oluşturanlar Semineri', 'Zorluklar Karşısında Liderlik'],
    leaders: ['Fatih Sultan Mehmet', 'Malcolm X', 'Alaaddin Keykubat', 'Selahaddin Eyyubi', 'Ahi Evran', 'Aliya İzzetbegoviç'],
  },
  {
    id: 'm4', num: 'Modül 4', name: 'Mana ve Mecra', theme: 'İnanç Estetiğinin Yolculuğu',
    aim: 'Öğrencilerin inanç, estetik, sanat, mimari ve anlam ilişkisini kavraması.',
    lessons: ['İnancın Estetiği – İslam Sanatında Anlam ve Sembolizm', 'Mekân ve Mâbed – İnancın Mimariye Yansıması', 'Kitap Tahlili', 'İnsan ve Sanat - Anlayıştan İcraya'],
  },
  {
    id: 'm5', num: 'Modül 5', name: 'Dijital Perde', theme: 'Görünenin Ötesini Görmek',
    aim: 'Dijital dünyanın kimlik, dikkat, zaman ve anlam üzerindeki etkilerini fark ettirmek.',
    lessons: ['Dijital Gelecekte İnsan Kalabilmek', 'Sosyal Medyada Kimliğin İnşası', 'Dijital Bağımlılık ve Yorgunluk', 'Doğa - Gözlem - Sessizlik Atölyesi'],
  },
  {
    id: 'm6', num: 'Modül 6', name: 'Duruş ve Değerler', theme: 'Karakter, Söz ve Sorumlulukla İnşa Edilen Birlik',
    aim: 'Öğrencilerin zor zamanlarda dayanıklılık gösterebilen, söz ve davranışlarında değerlerle uyumlu bir duruş geliştirmesi.',
    lessons: ['Mesleki Dayanıklılık ve İnsan Psikolojisi', 'Davranış ve Konuşma Usulleri', 'İletişimin Boyutları', 'Duruş ve Sorumluluk'],
  },
  {
    id: 'm7', num: 'Modül 7', name: 'Kapanış, Mezuniyet ve Etki Takibi', theme: 'Program Kapanış Alanı',
    aim: 'Program sonunda mezuniyet, değerlendirme, geri bildirim ve uzun vadeli etki takibiyle öğrencinin gelişim yolculuğunu tamamlamak.',
    lessons: ['Mezuniyet ve Sertifikasyon', 'Süreç Değerlendirmesi', 'Geri Bildirim Toplama', '3 Aylık Etki Takibi'],
  },
];
