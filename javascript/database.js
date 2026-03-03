// database.js
window.quizDatabase = {
    "1": {
        question: "Bankdan gəldiyini deyən SMS-də link var və deyir: 'TƏCİLİ kliklə, yoxsa hesabın bağlanacaq!' Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Banklar heç vaxt tələsdirərək link vasitəsilə şəxsi məlumat tələb etmir. Bu, 'Phishing' hücumudur!"
    },
    "2": {
        question: "Link belədir: https://instagram.com və brauzerdə kilid işarəsi var. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Bu rəsmi ünvandır və 'https' bağlantının təhlükəsiz olduğunu göstərir."
    },
    "3": {
        question: "Link belədir: http://instagrarn.com (m yerinə rn yazılıb). Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Diqqətli ol! Fırıldaqçılar hərfləri dəyişərək (m -> rn) saxta saytlar yaradırlar (Typosquatting)."
    },
    "4": {
        question: "Tanımadığın biri sənə hədiyyə qazandığını deyir və kart məlumatlarını istəyir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Heç kim durduq yerə pul hədiyyə etmir. Kart məlumatlarını vermək birbaşa oğurluğa yol açır."
    },
    "5": {
        question: "Müəllimin məktəbin rəsmi emailindən sənə tapşırıq göndərir. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Rəsmi korporativ və ya təhsil emailləri adətən etibarlıdır."
    },
    "6": {
        question: "Email ünvanı belədir: support@paypa1.com (l yerinə 1 yazılıb). Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Saxta domen adlarına diqqət yetir! 'paypa1' rəsmi 'paypal' deyil."
    },
    "7": {
        question: "Saytın ünvanı https:// ilə başlayır və hər şey düzgün yazılıb. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Düzgün yazılış və HTTPS protokolunun olması saytın autentifikasiya olunduğunu göstərir."
    },
    "9": {
        question: "Sayt səndən şifrəni və SMS kodunu eyni anda istəyir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "SMS kodu yalnız giriş anında istənilir. Hər ikisini eyni anda istəyən sayt çox vaxt saxtadır."
    },
    "10": {
        question: "Google-da axtarıb rəsmi sayta özün daxil olursan. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Özün axtarıb daxil olmağın, kənar linklərə klikləməkdən qat-qat təhlükəsizdir."
    },
    "11": {
        question: "Küçədə divara yapışdırılmış bir elanda 'Pulu saniyələr içində qazan' yazılıb və yanında QR kod var. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Naməlum QR kodlar səni zərərli saytlara yönləndirə və ya telefonuna casus proqram yükləyə bilər (Quishing)."
    },
    "12": {
        question: "Kafe və ya hava limanında şifrəsiz, 'Free_Public_WiFi' adlı şəbəkəyə qoşulursan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Açıq şəbəkələrdə fırıldaqçılar sənin daxil etdiyin şifrələri və şəxsi məlumatları asanlıqla izləyə bilər."
    },
    "13": {
        question: "Instagram-da bir reklam görürsən: 'iPhone 15 cəmi 100 AZN! Tələsin, son 3 ədəd qaldı!' Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Real qiymətindən çox ucuz təkliflər adətən kart məlumatlarını oğurlamaq üçün qurulan tələlərdir."
    },
    "14": {
        question: "Telefonuna bir tətbiq yükləyirsən (məsələn: Fənər tətbiqi) və o səndən 'Kontaktlar' və 'Mikrofon' icazəsi istəyir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Sadə bir tətbiqin funksiyasına aid olmayan icazələr istəməsi onun casus proqram olduğundan xəbər verir."
    },
    "15": {
        question: "Dövlət qurumunun (məsələn: e-gov.az) rəsmi saytına daxil olursan. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Dövlət portalı (.gov.az) təhlükəsizdir və şəxsi məlumatlarınızı qorumaq üçün sertifikatlara malikdir."
    },
    "16": {
        question: "Sənə WhatsApp-dan xarici nömrə yazır: 'Səhvən sənin nömrənə pul göndərdim, mənə gələn kodu deyə bilərsən?' Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu, sənin hesabını ələ keçirmək üçün istifadə olunan 'Təsdiq Kodu' fırıldağıdır. Kodu heç vaxt paylaşma!"
    },
    "17": {
        question: "Kompüterində pəncərə açılır: 'Virus tapıldı! Təmizləmək üçün bu proqramı dərhal yüklə!' Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Scareware' adlanır. Qorxu yaradaraq sənə əsl virusu yüklətməyə çalışırlar."
    },
    "18": {
        question: "Bir saytda 'Şərtləri Oxudum və Razıyam' düyməsini basmazdan əvvəl linkə klikləyib qaydaları yoxlayırsan. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Şərtləri oxumaq və hara üzv olduğunu bilmək rəqəmsal təhlükəsizliyin ən vacib hissəsidir."
    },
    "19": {
        question: "Email gəlib və qoşmada 'faktura.exe' adlı fayl var. Onu açmaq təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: ".exe sonluğu olan fayllar proqramdır. Email vasitəsilə gələn bu fayllar işə düşən kimi virus yaya bilər."
    },
    "20": {
        question: "Facebook-da tanışın sənə mesaj yazır: 'Təcili pul lazımdır, bu karta 20 manat ata bilərsən?' Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Dostunun hesabı oğurlanmış ola bilər. Belə hallarda mütləq ona zəng edib səsiniduyaraq dəqiqləşdir."
    },
    "21": {
        question: "Instagram-da 'Sənin haqqında pis nəsə yazıblar, bu linkdə bax' deyən mesaj gəlir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu, 'Maraq tələsi'dir. Linkə kliklədikdə Instagram giriş səhifəsinə bənzər saxta bir sayt açılır və şifrənizi oğurlayır."
    },
    "22": {
        question: "Kompüterinə kənar bir USB-fleşka taxırsan və içindəki 'Maaşlar.pdf.exe' faylını açırsan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Faylın sonunda .exe olması onun proqram olduğunu göstərir. Bu, kompüterinə virus salmaq üçün ən qədim yoldur."
    },
    "23": {
        question: "Telefonuna zəng gəlir: 'Mən polisəm, adınız cinayətdə hallanır, təmizə çıxmaq üçün bu koda pul göndərin'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Polis və ya rəsmi qurumlar heç vaxt telefonla pul və ya köçürmə tələb etmir. Bu, telefon fırıldaqçılığıdır (Vishing)."
    },
    "24": {
        question: "Sayta daxil olanda 'Sən 1.000.000-cu ziyarətçisən! iPhone qazandın!' yazısı çıxır. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu, 90-cı illərdən qalan ən məşhur fırıldaqdır. Heç bir sayt təsadüfi ziyarətçiyə bahalı hədiyyə vermir."
    },
    "25": {
        question: "Dostun sənə TikTok-da çox gülməli bir video linki atır. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Əgər link birbaşa rəsmi platformaya (tiktok.com) aiddirsə və dostun həqiqətən onu göndəribsə, adətən təhlükəsizdir."
    },
    "26": {
        question: "Bir tətbiq yükləyərkən Google Play Store və ya App Store-dan istifadə edirsən. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Rəsmi mağazalar tətbiqləri viruslara qarşı yoxlayır. Kənar saytlardan APK yükləməkdən qat-qat təhlükəsizdir."
    },
    "27": {
        question: "Brauzerində 'Şifrəni yadda saxla?' sualına 'Xeyr' deyirsən (xüsusilə başqasının kompüterində). Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Əksinə, bu çox düzgün addımdır! Şifrələri brauzerdə saxlamaq, fiziki giriş imkanı olan hər kəsə şifrəni görmək imkanı verir."
    },
    "28": {
        question: "Sənə WhatsApp-dan mesaj gəlir: 'Sənin nömrən lotereyada 5000 AZN qazanıb, rüsumu ödə ki, pulu göndərək'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Uduş almaq üçün əvvəlcədən ödəniş tələb olunursa, bu 100% fırıldaqdır."
    },
    "29": {
        question: "Tanımadığın bir nömrədən 'Görüş yerimiz bura olsun' deyə bir 'Google Maps' linki gəlir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Tanımadığın adamdan gələn istənilən link IP ünvanını və ya yerini müəyyən etmək üçün istifadə olunan 'IP Logger' ola bilər."
    },
    "30": {
        question: "İki-faktorlu təsdiqləməni (2FA) aktiv edirsən (həm şifrə, həm SMS kodu). Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Bu, hesabının təhlükəsizliyini 2 qat artırır. Şifrən oğurlansa belə, SMS kodu olmadan kimsə daxil ola bilməyəcək."
    },
    "31": {
        question: "Dostunun səsi ilə gələn WhatsApp səsli mesajında deyilir: 'Təcili qəzaya düşmüşəm, bu karta 50 AZN at'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Deepfake' səs texnologiyası ola bilər. Mütləq dostuna zəng edib və ya tanıdığı başqa birindən dəqiqləşdir!"
    },
    "32": {
        question: "Hava limanında USB portu vasitəsilə telefonunu şarj edirsən (kabel birbaşa divardakı porta daxil olur). Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Juice Jacking' adlanır. Həmin portlar vasitəsilə telefonuna gizlicə virus yüklənə və ya məlumatların kopyalana bilər."
    },
    "33": {
        question: "Email gəlir: 'Hesabınıza Rusiyadan giriş edilib. Siz deyilsinizsə, bura klikləyib şifrəni dəyişin'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Fırıldaqçılar qorxu yaradaraq səni saxta giriş səhifəsinə yönləndirir. Həmişə rəsmi tətbiqə daxil olaraq bildirişləri yoxla."
    },
    "34": {
        question: "Instagram-da 'Səni kimlər izləyir' və ya 'Profilinə kim baxıb' tətbiqini yükləyirsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu tətbiqlər sadəcə sənin Instagram şifrəni ələ keçirmək üçün yaradılıb. Instagram belə bir funksiya təqdim etmir."
    },
    "35": {
        question: "Sənə gələn şübhəli linki açmırsan, amma onun sonunun .az ilə bitdiyini görürsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: ".az sonluğu saytın mütləq təhlükəsiz olduğu mənasına gəlmir. Hər kəs bu domenlə saxta sayt aça bilər."
    },
    "36": {
        question: "Google Chrome sənə 'Bu sayt zərərli proqram ehtiva edir' xəbərdarlığı verir, amma sən 'Yenə də daxil ol' basırsan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Brauzer xəbərdarlıqları ciddi təhlükə aşkar edildikdə çıxır. Bu xəbərdarlığa məhəl qoymamaq cihazını riskə atır."
    },
    "37": {
        question: "İş yerində kompüterini kilidləmədən (Win+L basmadan) nahara gedirsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Fiziki giriş ən böyük təhlükədir. Hər kəs bir neçə saniyəyə sənin fayllarını USB-yə köçürə və ya saxta email yaza bilər."
    },
    "38": {
        question: "Saytın ünvanı belədir: https://ebank.az-login.com. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Əsas domen 'az-login.com'-dur, 'ebank' deyil. Rəsmi bank saytları adətən sadəcə bankınadı.az olur."
    },
    "39": {
        question: "Bir onlayn oyun üçün 'Cheat' (hiylə) proqramı yükləyirsən və antivirusu söndürməli olduğunu deyirlər. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Antivirusu söndürmək tələbi o proqramın daxilində 'Trojan' (virus) olduğunun ən böyük sübutudur."
    },
    "40": {
        question: "Bank kartının şəklini çəkib (arxa tərəfi görünmədən) kiməsə göndərirsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Kartın üzərindəki 16 rəqəm və bitmə tarixi belə fırıldaqçılar üçün lazımlı məlumatdır. Heç vaxt kartın şəklini paylaşma."
    },
    "41": {
        question: "Şirkət rəhbərindən təcili email gəlir: 'Mən iclasdayam, bu hesaba təcili 500 AZN köçür'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'CEO Fraud' adlanır. Rəhbərin emaili kiber-cinayətkarlar tərəfindən təqlid edilir (Spoofing)."
    },
    "42": {
        question: "Brauzer pəncərəsində 'Kompüteriniz bloklanıb, açmaq üçün cərimə ödəyin' yazısı çıxır. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu bir 'Ransomware' (fidye yazılımı) hədəsidir. Heç vaxt ödəniş etmə, sadəcə brauzeri bağla və ya antivirusla yoxla."
    },
    "43": {
        question: "İş yerində tanımadığın bir şəxs 'Kuryerəm' deyərək səninlə birlikdə içəri girmək istəyir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Tailgating' adlanır. Kənar şəxslərin ofisə daxil olması daxili şəbəkəyə fiziki hücum riski yaradır."
    },
    "44": {
        question: "Sənə gələn şübhəli emailin içindəki 'Unsubscribe' (Abunəlikdən çıx) düyməsinə basırsan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Spam emaillərdə 'Abunəlikdən çıx' düyməsi çox vaxt sənin emailinin aktiv olduğunu təsdiqləmək üçün bir tələdir."
    },
    "45": {
        question: "Sayt səndən 'Mən robot deyiləm' (CAPTCHA) yoxlamasından keçməyi istəyir. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "CAPTCHA saytları avtomatlaşdırılmış bot hücumlarından qorumaq üçün standart təhlükəsizlik üsuludur."
    },
    "46": {
        question: "Instagram-da dostun sənə bir səsvermə linki atır: 'Mənə səs ver, yarışmada qalib gəlim'. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu link səni saxta giriş səhifəsinə aparıb hesabını ələ keçirmək üçün istifadə olunan ən yaygın üsuldur."
    },
    "47": {
        question: "WhatsApp-da sənə 'İş təklifi: Gündə 100-500 AZN qazanc' mesajı gəlir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Reallığa uyğun olmayan yüksək qazanc vədləri adətən maliyyə piramidaları və ya məlumat oğurluğu üçündür."
    },
    "48": {
        question: "İş emailinə 'Şifrənizin vaxtı bitib, yeniləmək üçün bura klikləyin' mesajı gəlir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Şifrə yeniləmə linklərinə yalnız özün müraciət etdikdə inanmalısan. Gözlənilməz gələn linklər təhlükəlidir."
    },
    "49": {
        question: "Kompüterində vacib faylları 'Bulud' (iCloud, Google Drive, OneDrive) yaddaşına nüsxələyirsən. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Ehtiyat nüsxə (Backup) çıxarmaq kiber-təhlükəsizliyin ən önəmli qaydasıdır. Virus düşsə belə, faylların silinməz."
    },
    "50": {
        question: "Naməlum bir nömrədən gələn zəngə cavab verirsən və qarşı tərəf sadəcə susur. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Ping Calls' ola bilər. Sənin nömrənin aktiv olduğunu yoxlayırlar ki, gələcəkdə daha çox spam və hücum etsinlər."
    },
    "51": {
        question: "Onlayn mağazada ödəniş edərkən sayt səndən kartın PİN kodunu istəyir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Heç bir qanuni onlayn alış-veriş saytı kartın PİN kodunu istəməz. Onlara yalnız CVV (arxadakı 3 rəqəm) lazımdır."
    },
    "52": {
        question: "Telefonuna 'Sistem yenilənməsi' bildirişi gəlir və sən onu rəsmi 'Ayarlar' bölməsindən icra edirsən. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Sistem yeniləmələri cihazındakı təhlükəsizlik boşluqlarını bağlamaq üçün çox vacibdir."
    },
    "53": {
        question: "Sosial mediada 'İlk ev heyvanının adı nə olub?' kimi suallara cavab verirsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu suallar çox vaxt bank və ya email hesablarının 'Təhlükəsizlik sualları'nın cavablarını öyrənmək üçün qoyulur."
    },
    "54": {
        question: "Bir ticarət saytında (məs: Tap.az) satıcı sənə 'Ödənişi bu link vasitəsilə et' deyib kənar link göndərir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Rəsmi platformadan kənara çıxmaq fırıldaqçılıq riskini artırır. Həmişə saytın öz daxili ödəniş sistemindən istifadə et."
    },
    "55": {
        question: "İnternetdə pulsuz film izləmək istəyərkən 'Flash Player yenilənməlidir' yazısı çıxır və fayl yüklənir. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Flash Player artıq istifadə olunmur. Bu adla yüklənən fayllar demək olar ki, hər zaman virusdur."
    },
    "56": {
        question: "İş yerində tapdığın naməlum USB-ni 'görəsən kimindir' deyə öz kompüterinə taxırsan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu 'Baiting' (yemləmə) metodudur. Hackerlər viruslu USB-ni bilərəkdən yerə atırlar ki, kimsə onu maraqdan kompüterinə taxsın."
    },
    "57": {
        question: "Girdiyin saytda ünvanın yanında 'Not Secure' (Təhlükəsiz deyil) xəbərdarlığı görürsən. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu o deməkdir ki, sayt məlumatları şifrələmir. Bura daxil etdiyin hər hansı şifrə və ya məlumat oğurlana bilər."
    },
    "58": {
        question: "Tanımadığın adamdan gələn PDF faylı açmazdan əvvəl onlayn 'VirusTotal' kimi saytlarda yoxlayırsan. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Bu çox ağıllı addımdır! Şübhəli faylları açmadan əvvəl antivirus skanerlərindən keçirmək səni xilas edir."
    },
    "59": {
        question: "WhatsApp-da 'Bu mesajı 10 nəfərə göndər, hədiyyə kartı qazan' mesajını paylaşırsan. Təhlükəlidir?",
        correctAnswer: "yes",
        explanationWrong: "Bu zəncirvari mesajlar adətən spam yaymaq və insanların nömrə bazasını toplamaq üçün istifadə olunur."
    },
    "60": {
        question: "Evdəki Wi-Fi şəbəkəsinin standart şifrəsini (məs: admin123) mürəkkəb şifrə ilə dəyişirsən. Təhlükəlidir?",
        correctAnswer: "no",
        explanationWrong: "Routerin standart şifrəsini dəyişmək qonşuların və ya hackerlərin sənin şəbəkənə daxil olmasının qarşısını alır."
    }
};