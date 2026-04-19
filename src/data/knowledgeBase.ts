import { KisanGKEntry, Language } from "../types";

export const knowledgeBase: KisanGKEntry[] = [
  { pattern: /creator|made|owner|kisne|malik|father|jaswant/i, answer: "👤 **Mera Nirmaan:** Mujhe Rajasthan ke Class 10 ke tech visionary, Jaswant ne banaya hai. Yeh Smart India Hackathon ka ek advanced offline AI hai." },
  { pattern: /hi|hello|hey|namaste|ram ram|pranam/i, answer: "👋 Namaste! Main Jaswant ka Advanced Bharat Krishi AI hoon. Kheti, mausam ya fasal ke baare mein apna sawal puchein." },
  { pattern: /kaise ho|how are you|haal chal/i, answer: "😊 Main bilkul theek hoon! Ek AI hone ke naate main 24 ghante aapki madad ke liye taiyar hoon. Aaj khet mein kya kaam chal raha hai?" },
  { pattern: /good morning|suprabhat|subah/i, answer: "☀️ Good Morning! Naya din, nayi shuruat. Mausam dekh kar hi khet ka kaam shuru karein." },
  { pattern: /good night|shubh ratri|so jao/i, answer: "🌙 Shubh Ratri! Aap aaram kijiye, main yahan system mein jag kar aapki jankari safe rakhunga." },
  { pattern: /kya kar sakte ho|help|madad|features/i, answer: "🛠️ **Main kya kar sakta hoon?**\n1. Fasal ki jankari (Bajra, Gehun, Sarson, etc.)\n2. Khad aur Beej ki matra (Calculator)\n3. Bimariyon ka ilaj (Fasal Doctor)\n4. Mausam aur Sinchai ki salah\n5. Voice aur GPS support" },
  { pattern: /mitti|soil|zameen|prepare|jutai/i, answer: "🚜 **Khet ki Taiyari:** Fasal bone se pehle khet ki 2-3 baar gehri jutai zaroori hai. Retili mitti (jaise Rajasthan mein) mein Bajra ya Guar sabse best rehta hai." },
  { pattern: /pani|water|irrigation|sinchai/i, answer: "💧 **Sinchai (Watering):** Drip ya Sprinkler system use karne se 50% pani bachta hai. Fasal ki zarurat ke hisaab se hi pani dein." },
  { pattern: /khad|fertilizer|urea|dap/i, answer: "🧪 **Khad (Fertilizers):** DAP hamesha beej bone ke waqt zameen mein daalein. Urea ko pehla pani dene ke baad chhidakna chahiye." },
  { pattern: /bajra|pearl millet/i, answer: "🌾 **Bajra:** Yeh kam pani mein hone wali best fasal hai. Iske liye 4kg beej prati acre paryapt hai." },
  { pattern: /sarson|mustard/i, answer: "🟡 **Sarson (Mustard):** Isse thand ke mausam mein boya jata hai. Isme tel ki matra badhane ke liye Sulfur ka use karein." },
  { pattern: /gehun|wheat/i, answer: "🌾 **Gehun (Wheat):** Iske liye 40-50kg beej prati acre chahiye. Isme 4-5 baar sinchai ki zarurat hoti hai." },
  { pattern: /keeda|pest|disease|bimari/i, answer: "🐛 **Keet Prabandhan:** Neem ka tel (Neem Oil) ka chhidkaw karein. Yeh organic hai aur fasal ko nuksan nahi pahunchata." },
  { pattern: /weather|mausam/i, answer: "☁️ **Mausam:** Main offline hoon, par aapke area ke hisaab se abhi barish ka dhyan rakhein aur khet mein pani na rukne dein." },
  { pattern: /price|mandi|bhav/i, answer: "💰 **Mandi Bhav:** Mandi ke bhav roz badalte hain. Apne nazdiki E-Mitra ya Mandi office se sampark karein." },
  { pattern: /deemak|termite/i, answer: "🐛 **Deemak (Termites):** Retili mitti mein deemak ki samasya aam hai. Khet ki taiyari ke waqt Neem ki khali (Neem cake) ka prayog karein. Agar khadi fasal mein deemak hai, toh pani ke sath Chlorpyrifos dawa (dhyan se) chalayein." },
  { pattern: /pala|frost|kohra|thandi|sardi/i, answer: "❄️ **Pala (Frost) se Bachav:** Sardiyon mein jab tapman zero ke paas jaye, toh Sarson aur Chane ko khatra hota hai. Raat ko khet ke kinare dhuaan (smoke) karein ya sham ko halki sinchai (light irrigation) kar dein jisse khet ka tapman badh jaye." },
  { pattern: /samay|time|kab boye|sowing time/i, answer: "⏱️ **Buvai ka Sahi Samay:** Kharif fasal (Bajra, Guar) barish shuru hote hi (June-July) boyein. Rabi fasal (Gehun, Sarson) mausam thanda hone par (October-November) boyein." },
  { pattern: /chepa|aphid|mahun|kala keeda/i, answer: "🪲 **Chepa (Aphids):** Sarson mein 'Chepa' (chhota kala/hara keeda) lagne par Neem Oil ka spray karein. Agar prakop zyada ho toh Imidacloprid (इमिडाक्लोप्रिड) ka spray shaam ke waqt karein." },
  { pattern: /zinc|sulphur|micro nutrient|poshak/i, answer: "🧫 **Sookshm Poshak Tattva:** Sirf Urea/DAP kafi nahi! Sarson ke liye Sulphur bahut zaroori hai (tel ki matra badhata hai). Aur Gehun/Bajra mein Zinc dalne se fasal hari-bhari aur majboot rehti hai." },
  { pattern: /kharpatwar|weed|kachra|nindai|gudai/i, answer: "🌿 **Kharpatwar (Weeds):** Fasal ke shuruati 30-40 din kachra mukt hone chahiye. Niraai-gudai (manual weeding) sabse best hai. Agar dawai (Herbicide) dalni ho, toh dhyan rahe mitti mein nami (moisture) honi zaroori hai." },
  { pattern: /beej upchar|seed treatment|dawaii beej/i, answer: "🛡️ **Beej Upchar (Seed Treatment):** Fasal ko shuruati bimariyon se bachane ke liye beej ko hamesha Trichoderma ya Bavistin se upcharit (treat) karke hi boyein. Yeh kheti ka sabse sasta aur asardar niyam hai." },
  { pattern: /fitoor|yellow|peele patte/i, answer: "🍂 **Peele Patte (Yellow Leaves):** Agar patte niche se peele ho rahe hain, toh Nitrogen (Urea) ki kami ho sakti hai. Agar upar ke naye patte peele hain, toh Zinc ya Iron ki kami hai. Sahi spray ka chunav karein." },
  { pattern: /guar|cluster bean/i, answer: "🌿 **Guar (Cluster Bean):** Rajasthan ki mitti ke liye vardaan hai. Ise June-July mein boyein. 5kg beej prati acre paryapt hai." },
  { pattern: /kapas|cotton|narma/i, answer: "⚪ **Kapas (Cotton):** Ise 'Safed Sona' bhi kehte hain. Isme 'Gulabi Sundi' (Pink Bollworm) se bachav ke liye pheromone trap lagayein." },
  { pattern: /chana|gram|chickpea/i, answer: "🟤 **Chana (Gram):** Isse kam pani ki zarurat hoti hai. Phool aate waqt sinchai na karein, varna phool jhad sakte hain." },
  { pattern: /coding|programming|javascript|react|python/i, answer: "💻 **Coding & Tech:** Jaswant ko coding ka bahut shauk hai! Unhone React, TypeScript aur AI ka use karke hi mujhe (Bharat AI) banaya hai." },
  { pattern: /youtube|channel|video/i, answer: "🎥 **YouTube:** Jaswant apne channel par kheti aur tech ki jankari dete hain. Aap unke channel 'Jaswant Tech' (simulated) ko check kar sakte hain." },
  { pattern: /sih|hackathon|smart india/i, answer: "🏆 **Smart India Hackathon:** Bharat AI ek SIH prototype hai jo kisanon ko offline digital takat dene ke liye banaya gaya hai." },
  { pattern: /khaara|salinity|lavan|namak|white crust/i, answer: "🧪 **Khaara Pani & Lavanita (Soil Salinity):** Agar mitti ke upar safed namak ki parat aa gayi hai ya pani khaara hai, toh mitti mein 'Gypsum' (जिप्सम) milayein. Khaare pani mein Bajra, Jau (Barley) ya Guar boyein, kyunki yeh namak jhel sakte hain." },
  { pattern: /jad|root|ganth|nematode/i, answer: "🪱 **Sutrakrimi (Root-Knot Nematodes):** Agar jado (roots) mein ganthein (knots) ban gayi hain aur poudha sookh raha hai, toh yeh Nematode hai. Agli baar wahan Gende (Marigold) ke phool ki kheti karein, uski jado se nikalne wala chemical inko maar deta hai, ya garmi mein gehri jutai karke khet ko dhoop mein chhod dein (Soil Solarization)." },
  { pattern: /npk|19:19:19|0:52:34|spray/i, answer: "🧬 **Advanced Fertigation (NPK Sprays):** Shuruati growth ke liye NPK 19:19:19 ka spray karein (Nitrogen, Phos, Potassium barabar). Jab phool aa rahe hon toh 0:52:34 ka spray karein taaki sari takat phool aur daane mein jaye, patto mein nahi." },
  { pattern: /fasal chakra|rotation|badal|zamin ki takat/i, answer: "🔄 **Fasal Chakra (Crop Rotation):** Ek hi khet mein baar-baar ek fasal na lagayein. Gehun ya Sarson ke baad Guar, Moong ya Moth boyein. Inki jado mein 'Rhizobium' bacteria hota hai jo hawa se Nitrogen khinch kar mitti ki takat wapas lauta deta hai." },
  { pattern: /phool jhadna|flower drop|tapat/i, answer: "🥀 **Phool Jhadna (Flower Drop):** Agar temperature achanak badh jaye ya zameen mein Nami (moisture) honi zaroori hai, toh phool girne lagte hain. Is samay Urea bilkul na daalein! Halki sinchai karein aur Planofix (Alpha Naphthyl Acetic Acid) ka bahut halka spray karein." },
  { pattern: /tana|stem borer|sundi/i, answer: "🐛 **Tana Chhedak (Stem Borer/Sundi):** Agar poudhe ka beech ka hissa sookh raha hai, toh yeh sundi ka attack hai. Khet mein Pheromone Traps lagayein (yeh nar keedo ko fasa lete hain). Bahut zaroorat padne par hi Chlorantraniliprole ka spray karein." },
  { pattern: /kya boyein|easily grow|best crop|area|mera khet|what to grow/i, answer: "🏜️ **Asan Fasal:** Kam pani aur retili mitti ke liye Guar, Moth, Moong, aur Bajra sabse best hain. Yeh bina kisi khaas mehnat ke asani se ugte hain." },
  { pattern: /cash crop|munafa|paise|high profit/i, answer: "💰 **Cash Crops (Munafa):** Kam pani mein sabse zyada munafa Isabgol, Jeera, aur Methi dete hain. Inka market bhav hamesha achha rehta hai." },
  { pattern: /jaldi|fast crop|kam din|short duration/i, answer: "⏱️ **Kam Samay Wali Fasal:** Moong aur Moth sirf 60-70 din mein pak kar taiyar ho jate hain." },
  { pattern: /mitti sudhar|improve soil|takat|fertility/i, answer: "💪 **Mitti ki Takat:** Retili zameen mein pani rokne ki shamta kam hoti hai. Ise badhane ke liye sirf Gobar ki khad (FYM) ya Kachua khad (Vermicompost) ka hi prayog karein." },
  { pattern: /kharab pani|salty water|khara/i, answer: "💧 **Khaara Pani:** Agar tubewell ka pani khaara hai, toh Jau (Barley) ya Isabgol boyein. Yeh khaare pani mein bhi achhi paidaawar (yield) dete hain." },
  { pattern: /fal|fruit|ped/i, answer: "🌳 **Fal wale Ped (Fruit Trees):** Sukhe ilakon ke liye Ber, Khejri, aur Anar (Pomegranate) sabse best ped hain. Inhe ek baar lagane ke baad pani ki zyada zaroorat nahi hoti." },
  { pattern: /pala|frost/i, answer: "❄️ **Pala (Frost):** Sardiyon mein raat ko khet ki disha mein dhuaan (smoke) karein ya 0.1% Sulphuric acid ka spray karein. Fasal bach jayegi." },
  { pattern: /best crop|high price|mehngi|sabse zyada bhav|easy grow/i, answer: "🏆 **Top Recommendation:** Retili mitti aur kam pani ke liye **Isabgol aur Jeera** sabse best hain. Asani se ugte hain aur inka Mandi bhav sabse zyada (₹15,000 se ₹28,000/quintal) rehta hai." },
  { pattern: /jeera|cumin.*bhav|price|rate|mandi/i, answer: "📈 **Jeera (Cumin):** ₹25,000 - ₹28,000/Quintal. \n⬆️ **Trend:** Export demand high. Price badhne ke poore chance hain." },
  { pattern: /isabgol.*bhav|price|rate|mandi/i, answer: "📈 **Isabgol:** ₹14,000 - ₹16,000/Quintal. \n⬆️ **Trend:** Medical demand zyada hai. Kam pani mein sabse safe cash crop." },
  { pattern: /guar.*bhav|price|rate|mandi/i, answer: "📈 **Guar:** ₹5,000 - ₹5,500/Quintal. \n➡️ **Trend:** Stable. Bina mehnat aur kam kharch wali sabse safe fasal." },
  { pattern: /sarson|mustard.*bhav|price|rate|mandi/i, answer: "📈 **Sarson (Mustard):** ₹5,000 - ₹5,400/Quintal. \n⬆️ **Trend:** Tel (Oil) ki demand hamesha rehti hai, sardi mein best munafa." },
  { pattern: /mung|moong|moth.*bhav|price|rate|mandi/i, answer: "📈 **Moong/Moth:** ₹7,000 - ₹8,500/Quintal. \n⬆️ **Trend:** Sirf 60 din mein pakne wali high-protein fasal, demand hamesha high." },
  // --- Pashupalan (Animal Husbandry & Dairy) ---
  { pattern: /gay|cow|bhains|buffalo|dudh|milk|dairy/i, answer: "🐄 **Pashupalan (Dairy):** Garmiyon mein pashuon ka doodh kam ho jata hai. Unhe dhoop se bachayein aur chaare mein 'Azolla' (ek tarah ki ghas) milayein. Isse doodh mein fat badhta hai." },
  { pattern: /thainela|mastitis|than|udder/i, answer: "🩺 **Thainela Rog (Mastitis):** Agar than (udder) sujh gaya hai ya doodh phata hua aa raha hai, toh turant neembu aur fitkari (alum) ke pani se dhoye aur pashu doctor ko bulayein." },

  // --- Sarkari Yojna (Government Schemes) ---
  { pattern: /pm kisan|yojna|scheme|paise|kist/i, answer: "🏛️ **PM Kisan Yojna:** Is yojna ke tahat kisan ko saal ke ₹6,000 milte hain. Apni agli kist (installment) check karne ke liye apne Aadhar card ko bank aur e-KYC se link zarur rakhein." },
  { pattern: /fasal bima|insurance|kcc|loan|credit/i, answer: "🛡️ **Kisan Credit Card & Bima:** KCC par kheti ke liye sasta loan milta hai. Agar barish/sukhe se fasal barbad ho, toh 72 ghante ke andar Fasal Bima Yojna (PMFBY) mein claim darj karein." },

  // --- Organic & Advanced Farming ---
  { pattern: /organic|jaivik|kenchua|vermicompost/i, answer: "🌱 **Jaivik Kheti (Organic):** Rasayan (Chemicals) chhod kar Kenchua Khad (Vermicompost) aur Jeevamrut ka prayog karein. Isse zameen ki takat badhti hai aur fasal mehngi bikti hai." },
  { pattern: /drip|sprinkler|boond|fauwara/i, answer: "💧 **Advanced Sinchai:** Rajasthan jaise ilakon mein Drip (Boond-boond) ya Sprinkler (Fauwara) system lagayein. Sarkar is par 70-75% tak ki subsidy (chhoot) deti hai!" },

  // --- Machinery & Tractor ---
  { pattern: /tractor|machine|jutai|rotavator/i, answer: "🚜 **Kheti ki Machine:** Khet ki gehri jutai ke liye MB Plough aur mitti ko bhurbhuri (soft) banane ke liye Rotavator ka use karein. Subsidy ke liye E-Mitra par apply karein." },

  // --- High-Level Pests & Problems ---
  { pattern: /safaed makkhi|whitefly|kapas keeda/i, answer: "🪰 **Safed Makkhi (Whitefly):** Kapas aur sabziyon mein yeh sabse bada dushman hai. Poudho par 'Yellow Sticky Traps' (peele chipchipe card) lagayein, yeh keedo ko apni taraf kheench lete hain." },

  // --- High-Value Desert & Dryland Farming ---
  { pattern: /khejri|janti|shami/i, answer: "🌳 **Khejri (Janti):** Retili zameen ka 'Kalpavriksh'. Iski jado mein nitrogen hota hai jo khet ki takat badhata hai, aur iske patte (Loong) pashuon ke liye best chaara hain." },
  { pattern: /moth|matki|bhujia/i, answer: "🌾 **Moth (Moth Bean):** Sabse kam pani aur sukhe mein zinda rehne wali super-crop. Mandi mein iska bhav hamesha high rehta hai kyunki isse namkeen aur bhujia banti hai." },
  { pattern: /aloevera|gwarpatha|medicinal/i, answer: "🌿 **Aloe Vera (Gwarpatha):** Retili mitti mein bina pani ke ugne wali shandaar cash crop. Cosmetic aur medical companiyan ise direct kisan se kharidti hain." },
  { pattern: /kinnow|nimbu|bagicha/i, answer: "🍊 **Kinnow/Nimbu:** Retili doomt mitti mein Kinnow ka bagicha bahut munafa deta hai. Isme shuru mein Drip irrigation ka kharch aata hai, par baad mein saalon tak profit milta hai." },

  // --- Advanced Government Schemes & Subsidies ---
  { pattern: /solar|kusum|pump|bijli/i, answer: "☀️ **PM KUSUM Yojna:** Khet mein Solar pump lagwane par sarkar 60% tak subsidy deti hai. Bijli ke bill se chhutkara aur free sinchai ka sabse best tareeqa!" },
  { pattern: /tarbandi|taar|fence|awar pashu|nilgai/i, answer: "🚧 **Tarbandi Yojna:** Awara pashuon (Nilgai/Rojh) se fasal bachane ke liye khet ke charo taraf taar lagane par sarkar kisanon ko 50% tak ki subsidy deti hai. E-Mitra se apply karein." },
  { pattern: /custom hiring|kiraya|tractor scheme/i, answer: "🚜 **Custom Hiring Centre (CHC):** Sarkar kheti ke bade upkaran (jaise Drone, Rotavator) kiraye par lene ke liye CHC banwati hai, jahan kisan saste rate par inko use kar sakte hain." },

  // --- Extreme Pest & Disease Control ---
  { pattern: /tiddi|locust|bada keeda/i, answer: "🦗 **Tiddi Dal (Locust Attack):** Tiddi ka hamla hone par khet mein dhol ya bartan bajakar aawaz karein. Turant tractor mount sprayer se Chlorpyrifos 20 EC dawa ka heavy spray karein." },
  { pattern: /sundi|caterpillar|illi/i, answer: "🐛 **Sundi (Caterpillar):** Agar fasal ke patto ko koi hara keeda kha raha hai, toh Quinalphos (क्विनालफॉस) ya Neemastra ka turant spray karein." },
  { pattern: /ukahera|root rot|jad galan/i, answer: "🥀 **Ukahera/Jad Galan (Root Rot):** Agar khada poudha achanak sookh raha hai, toh mitti mein fafund (fungus) hai. Iski roktham ke liye beej ko Trichoderma viride se treat karke hi boyein." },
  { pattern: /chuhe|rat|rodent/i, answer: "🐀 **Chuhe (Rats):** Khet mein chuho ka aatank hone par Zinc Phosphide (जिंक फास्फाइड) ko aate (flour) aur thode tel ke sath milakar unke bilon (holes) ke paas rakhein." },

  // --- Soil & Fertilizer Science ---
  { pattern: /ph |ph value|mitti check/i, answer: "🧪 **Mitti ka pH (Soil pH):** Kheti ke liye mitti ka pH 6.5 se 7.5 sabse best hota hai. Agar pH 8 se upar hai (Khaari mitti), toh Gypsum daalna bahut zaroori hai." },
  { pattern: /hari khad|green manure|dhaincha/i, answer: "🌱 **Hari Khad (Green Manure):** Khet ki takat badhane ke liye barish ke shuru mein Dhaincha ya Guar boyein. Fasal jab 40 din ki ho, toh use tractor se katkar zameen mein mila dein. Yeh sabse sasti Urea hai!" },
  { pattern: /jeevamrut|desi khad|organic liquid/i, answer: "🛢️ **Jeevamrut:** 10 kg Gobar, 10 L mutra, 1 kg gud, 1 kg besan aur thodi mitti ko 200 L pani mein milakar 48 ghante rakhein. Yeh duniya ki sabse best liquid organic khad hai." },

  // --- Advanced Tech & App Use ---
  { pattern: /drone|hawa|spray machine/i, answer: "🚁 **Drone Spray:** Kheti mein Drone ka use badh raha hai. Ek Drone 10 minute mein 1 acre khet mein dawa ka exact aur barabar spray kar deta hai, jisse dawa aur pani dono bachte hain." },
  { pattern: /js gamer|fact jaswant|youtube/i, answer: "▶️ **Tech Education:** Kheti ke sath-sath coding aur tech seekhna hai toh mere creator Jaswant ke YouTube channels 'JS Gamer' aur 'Fact Jaswant' zarur dekhein!" },

  // --- High-Profit Vegetables (Sabziyon ki Kheti) ---
  { pattern: /pyaj|onion|kanda/i, answer: "🧅 **Pyaj (Onion):** Pyaj retili aur doomt mitti mein asani se hota hai. Nursery taiyar karke khet mein lagayein. Kharpatwar (weed) rokne ke liye pendimethalin ka spray karein." },
  { pattern: /lahsun|garlic/i, answer: "🧄 **Lahsun (Garlic):** Sardiyon ki best cash crop. Ise mitti mein Sulphur ki bahut zaroorat hoti hai. Kand (bulb) ka size bada karne ke liye 0:52:34 ka spray zarur karein." },
  { pattern: /tamatar|tomato|jhol/i, answer: "🍅 **Tamatar (Tomato):** Tamatar mein sabse badi samasya 'Patti Modak' (Leaf Curl) virus ki hoti hai jo safed makkhi se failta hai. Bachav ke liye nursery net mein taiyar karein aur Imidacloprid ka spray karein." },
  { pattern: /mirch|chilli|maror/i, answer: "🌶️ **Mirchi (Chilli):** Mirch ki kheti mein 'Thrips' keede ka dhyan rakhein jo patton ko upar ki taraf mod deta hai. Fipronil ya Spinosad dawa iske liye best hai." },
  { pattern: /tinda|tarbuj|melon|karela|bel/i, answer: "🍉 **Bel wali Sabziyan:** Tarbuj, Tinda aur Kharbuja retili mitti mein garmiyon mein sabse achha munafa dete hain. 'Mulching Paper' aur Drip irrigation se inka utpadan double ho jata hai." },

  // --- Pashupalan (Advanced Dairy Farming) ---
  { pattern: /pet ke keede|deworming|krimi/i, answer: "💊 **Deworming:** Pashu bhale hi kitna khaye, agar pet mein keede hain toh doodh nahi badhega. Har 3 mahine mein pashu doctor ki salah se pet ke keede marne ki dawa (Albendazole) zarur dein." },
  { pattern: /fmd|khurpaka|muhpaka/i, answer: "🐄 **Khurpaka-Muhpaka (FMD):** Yeh pashuon ka sabse khatarnak virus hai jisme pairo aur muh mein chhale ho jate hain. Iska koi ilaj nahi hai, sirf saal mein 2 baar FMD ki Vaccine (Teeka) lagwana hi iska bachav hai." },
  { pattern: /doodh badhane|increase milk|calcium|khal/i, answer: "🥛 **Doodh Badhane ka Formula:** Pashu ko sirf sukha chaara na dein. Binola (Cottonseed) ki khal, chana churi, aur roz 50 gram Mineral Mixture (Calcium/Phosphorus powder) uske aahar mein zarur milayein." },

  // --- High-Value Government Infrastructure Schemes ---
  { pattern: /diggi|water tank|tanka/i, answer: "🌊 **Diggi/Tanka Nirman Yojna:** Barish ya nehar ka pani ikattha karne ke liye khet mein Diggi (Water Tank) banwane par sarkar 3 lakh rupaye tak ki subsidy deti hai. Rajasthan ke kisanon ke liye yeh vardan hai!" },
  { pattern: /pipeline|pipe line/i, answer: "🚰 **Pipeline Yojna:** Khet mein pani le jane wali pipeline kharidne par sarkar kisanon ko 60% tak ki subsidy (₹15,000 tak) deti hai. Isse raste mein pani waste nahi hota." },
  { pattern: /greenhouse|polyhouse|net/i, answer: "⛺ **Polyhouse/Greenhouse:** Bemosam (off-season) sabziyan uga kar lakho kamane ke liye Polyhouse best hai. Sarkar ise lagwane par 50-70% tak ki subsidy deti hai. Apply through horticulture portal." },
  { pattern: /soil health card|mitti ki janch|test/i, answer: "📋 **Soil Health Card (Mitti ki Janch):** Apna khad aur paisa bachayein! Apne khet ki mitti ka sample najdiki krishi vibhag mein dein. Sarkar free mein Soil Health Card banakar batati hai ki khet mein konsi khad ki zarurat hai." },

  // --- Modern Farming Concepts ---
  { pattern: /mulching|panni|plastic/i, answer: "⬛ **Mulching (Plastic Sheet):** Fasal ke aas-paas zameen par black plastic sheet bichhane se pani bhaap bankar nahi udta (pani ki bachat) aur kachra (weed) bhi nahi ugta. Sabziyon ke liye yeh best tech hai." },
  { pattern: /mrp|msp|samarthan mulya/i, answer: "⚖️ **MSP (Minimum Support Price):** MSP sarkar dwara tay kiya gaya woh 'Nyunatam Samarthan Mulya' hai jis par woh kisan ki fasal kharidti hai, taaki kisan ko bazar mein ghata (loss) na ho." },

  // --- Batch 3: Fruit Orchards & Desi Ilaj (Traditional Remedies) ---
  { pattern: /anar|pomegranate/i, answer: "🍎 **Anar (Pomegranate):** Retili mitti mein 'Sinduri' aur 'Bhagwa' variety sabse best hain. Drip irrigation se iska bagicha bahut badiya munafa deta hai." },
  { pattern: /ber|apple ber|plum/i, answer: "🍏 **Ber (Jujube):** 'Thai Apple Ber' ki kheti sukhe ilakon ka vardan hai. Ek saal baad hi fal aana shuru ho jata hai aur pani ki zaroorat na ke barabar hoti hai." },
  { pattern: /khajoor|date palm/i, answer: "🌴 **Khajoor (Date Palm):** Agar pani thoda khaara bhi hai, toh Khajoor ki kheti karein. Sarkar is par bhari subsidy deti hai aur ek ped saalon tak fal deta hai." },
  { pattern: /lassi|chach|buttermilk|fitoor/i, answer: "🥛 **Khatti Lassi (Sour Buttermilk):** Purani khatti lassi ko tambe (copper) ke bartan mein rakh kar spray karne se fasal mein fafundi (fungus) aur virus ki bimariyan door hoti hain. Yeh ek asardar desi fungicide hai!" },
  { pattern: /raakh|ash|koyla/i, answer: "🔥 **Raakh (Wood Ash):** Chulhe ki raakh mein Potassium hota hai. Subah ki os (dew) mein iska chhidkaw karne se sabziyon par lagne wale chhote keede mar jate hain." },
  { pattern: /neemastra|neem ka pani/i, answer: "🍃 **Neemastra:** 5 kg neem ke patte, 5 L gaumutra, aur 1 kg gobar ko pani mein sadakar Neemastra banta hai. Yeh sundi (caterpillar) aur ras chusne wale keedo ka sabse tagda desi ilaj hai." },

  // --- Batch 4: Advanced Machinery & Smart Farming ---
  { pattern: /seed drill|beej machine|buvai machine/i, answer: "🚜 **Zero Till Seed Drill:** Is machine se bina khet ki jutai kiye seedha beej aur khad ek sath boya ka sakta hai. Isse tractor ke diesel aur kisan ke samay dono ki bachat hoti hai." },
  { pattern: /rotavator|mitti bhurbhuri/i, answer: "⚙️ **Rotavator:** Khet ki mitti ko ekdum barik aur bhurbhuri banane ke liye Rotavator sabse best hai. Yeh pichli fasal ke kachre ko bhi mitti mein mila kar khad bana deta hai." },
  { pattern: /laser leveler|leveling|samtal/i, answer: "📐 **Laser Land Leveler:** Khet ko ekdum samtal (flat) karne ke liye. Isse pure khet mein pani barabar pahunchta hai aur 30% tak pani ki bachat hoti hai." },
  { pattern: /ph maap|ph meter/i, answer: "📏 **pH Meter:** Har tech-kisan ke paas mitti aur pani ka pH napne wala digital meter hona chahiye. Agar pani ka pH 7 se zyada hai, toh khad aur dawai ka asar aada reh jata hai." },

  // --- Batch 5: Weather Defense, Storage & Final Crop Care ---
  { pattern: /loo|heatwave|garmi|dhoop/i, answer: "☀️ **Loo (Heatwave) se Bachav:** Garmiyon mein garm hawaon (Loo) se fasal ko bachane ke liye khet ki pashchimi (West) disha mein lambe ped (jaise Khejri ya Safeda) lagayein. Fasal mein dopahar se pehle halki sinchai karein." },
  { pattern: /storage|bhandaran|store|anaaj/i, answer: "🛖 **Anaaj Bhandaran (Grain Storage):** Anaaj ko tanki mein bharne se pehle achhi tarah sukhayein (nami 10% se kam ho). Keedo se bachane ke liye tanki mein sookhe Neem ke patte ya Machis ki dibbiyan (Sulphur hota hai) rakh dein." },
  { pattern: /katayi samay|harvesting time/i, answer: "🌾 **Sahi Katayi (Harvesting):** Gehun aur sarson ki katayi tabhi karein jab daane mein nami bilkul kam ho jaye aur daana dant se chabane par 'kat' ki aawaz kare." },
  { pattern: /gudai|nirai|khurpi/i, answer: "🧑🌾 **Nirai-Gudai (Hoeing):** Fasal jab 20-25 din ki ho tab pehli gudai zaroor karein. Isse mitti mein hawa (aeration) jati hai aur jado ka vikas dugna ho jata hai." },
  { pattern: /kisan call center|help line|toll free/i, answer: "📞 **Kisan Call Center:** Kheti ki kisi bhi emergency ya bimari ki jankari ke liye sarkar ke toll-free number 1800-180-1551 par call karke krishi vaigyaniko (scientists) se free salah lein." },
  
  // --- Game Development & Coding Languages ---
  { pattern: /game|game dev|hill climb|car game/i, answer: "🎮 **Game Development:** Mobile games (jaise 2D Hill Climb ya Car Selling) banane ke liye 'Unity Engine' sabse best hai. Isme C# language use hoti hai, jo seekhne mein asan hai." },
  { pattern: /c\+\+|c plus plus/i, answer: "💻 **C++ Programming:** Agar aapko duniya ke sabse fast aur high-graphics wale games banane hain (jaise GTA ya PUBG), toh C++ sabse powerful language hai. 'Unreal Engine' poora C++ par chalta hai." },
  { pattern: /html|css|javascript|web/i, answer: "🌐 **Web Development:** HTML kisi website ka dhancha (Skeleton) hai, CSS uski sundarta (Design) hai, aur JavaScript uska dimaag (Brain) hai jo buttons aur logic ko chalata hai." },
  { pattern: /react|tailwind|lovable/i, answer: "⚛️ **Modern Tech Stack:** Aajkal ki badi websites React.js aur Tailwind CSS par banti hain. Yeh apps ko super fast aur sundar banati hain, bilkul humare Bharat AI ki tarah!" },
  { pattern: /api|json|fetch/i, answer: "🔗 **API & JSON:** API (Application Programming Interface) do alag-alag softwares ko aapas mein baat karne deti hai. JSON woh format hai jisme yeh data internet par travel karta hai." },

  // --- Affiliate Marketing & E-Commerce ---
  { pattern: /affiliate|earnkaro|commission|paisa/i, answer: "💸 **Affiliate Marketing:** Bina apna product banaye paise kamane ka best tareeqa! Aap EarnKaro jaisi apps se Amazon/Flipkart ke links banakar apne doston ke sath share kar sakte hain." },
  { pattern: /whatsapp channel|low price|deals/i, answer: "🛒 **WhatsApp Marketing:** Agar aapka 'Low price product' jaisa koi WhatsApp channel hai, toh uspe bheed (audience) badhane ke liye daily best deals, tech gadgets aur Meesho ke saste offers share karein." },

  // --- YouTube Growth & Content Creation ---
  { pattern: /youtube|channel|views|shorts/i, answer: "▶️ **YouTube Growth:** Aajkal channel jaldi grow karne ke liye YouTube Shorts sabse powerful tool hai. Shuruat ke 3 second mein kuch aisa bolein ki viewer ruk jaye (ise 'Hook' kehte hain)." },
  { pattern: /gaming channel|js gamer|fact jaswant/i, answer: "🎮 **Content Creation:** Gaming channel (jaise JS Gamer) ke liye achhi commentary aur gameplay zaroori hai. Wahi Fact channels (jaise Fact Jaswant) ke liye background music aur fast video editing sabse main hoti hai!" },
  { pattern: /editing|video edit|kinemaster|capcut/i, answer: "🎬 **Video Editing:** Mobile se best editing ke liye CapCut, VN Editor ya KineMaster ka use karein. Transitions aur sound effects lagane se video professional lagti hai." },

  // --- AI & Future Tech ---
  { pattern: /ai|artificial intelligence|machine learning/i, answer: "🤖 **Artificial Intelligence:** AI ka matlab hai machines (computers) ko insaan ki tarah sochne, dekhne aur samajhne ki shamta dena. Humara offline rule-based NLP bhi isika ek hissa hai." },
  { pattern: /server|database|backend/i, answer: "🗄️ **Backend Technology:** User ka data (jaise login, password, chats) jahan internet par safe rakha jata hai, use Server ya Database (jaise Firebase ya MongoDB) kehte hain." },

  // --- Web Development & Internet Basics ---
  { pattern: /domain|hosting|website link/i, answer: "🌐 **Domain & Hosting:** Domain aapki website ka naam hai (jaise google.com). Hosting woh jagah hai jahan website ka code save hota hai (jaise aapne Vercel aur GitHub ka use kiya hai)." },
  { pattern: /git|github|version control/i, answer: "🐙 **Git & GitHub:** Git ek tool hai jo code mein kiye gaye har badlav (changes) ko track karta hai. GitHub cloud par code ko safe rakhne aur puri duniya ke sath share karne ka platform hai." },
  { pattern: /ram|rom|memory|storage/i, answer: "💻 **RAM vs ROM:** RAM (Random Access Memory) temporary memory hai jo app chalte waqt use hoti hai. ROM permanent storage hai jahan aapka data (jaise photos, apps) save rehta hai." },
  { pattern: /algorithm|algo|logic/i, answer: "🧠 **Algorithm:** Kisi bhi technical problem ko solve karne ke step-by-step tareeqe ko algorithm kehte hain. Jaise humara yeh chatbot keywords match karne ka apna ek algorithm use karta hai!" },

  // --- Cybersecurity & Hacking Prevention ---
  { pattern: /phishing|hack|fraud|fake link/i, answer: "🎣 **Phishing Attack:** Yeh ek cyber fraud hai jisme hacker nakli bank ya login page ka link bhejta hai. Kabhi bhi anjaan link par click karke apna password nahi daalna chahiye." },
  { pattern: /vpn|virtual private network/i, answer: "🛡️ **VPN (Virtual Private Network):** VPN aapke internet connection ko encrypt (lock) kar deta hai aur aapki real location chupa leta hai taaki hackers aapka data track na kar sakein." },
  { pattern: /password|security|safe/i, answer: "🔐 **Password Security:** Ek strong password mein hamesha Capital letter, chhota letter, numbers, aur special character (@, #) hona chahiye. Ise har 3 mahine mein badalna best practice hai." },

  // --- Monetization & Advanced Content Creation ---
  { pattern: /amazon affiliate|link se paise|amazon link/i, answer: "🛒 **Amazon Affiliate:** Amazon ke products ke affiliate links banakar aap unhe apne 'Fact Jaswant' channel ke description mein daal sakte hain. Jab koi wahan se kharidega, toh aapko bina product banaye commission milega." },
  { pattern: /seo|search engine optimization|google rank/i, answer: "🔍 **SEO (Search Engine Optimization):** Apni website ya YouTube video ke title, tags, aur description mein aise 'Keywords' daalna jo log sabse zyada search karte hain, taaki aapka content sabse upar aaye." },
  { pattern: /prompt engineering|chatgpt se/i, answer: "⌨️ **Prompt Engineering:** AI (jaise Gemini ya ChatGPT) se sahi kaam karwane ke liye use ekdum sateek aur detailed command dene ki kala ko Prompt Engineering kehte hain." },

  // --- Future Tech ---
  { pattern: /5g|network|speed/i, answer: "📶 **5G Technology:** 5G internet pichli 4G technology se lagbhag 100 guna fast hai. Yeh Cloud Gaming aur self-driving cars jaise advance features ko bina lag (deri) ke chalne mein madad karta hai." },
  { pattern: /blockchain|crypto|bitcoin/i, answer: "⛓️ **Blockchain:** Yeh ek digital ledger (khata) hai jisme data blocks mein save hota hai aur ise hack karna lagbhag namumkin hai. Cryptocurrency (jaise Bitcoin) isika ek hissa hai." },

  // --- Smart Hardware & IoT (Internet of Things) ---
  { pattern: /iot|sensor|arduino|smart kheti|hardware/i, answer: "🔌 **IoT & Smart Sensors:** Internet of Things (IoT) se khet mein 'Soil Moisture Sensor' laga sakte hain. Jab mitti sookhegi, yeh sensor Arduino ke zariye aapke phone par turant alert bhej dega. Yeh Hackathon ka best hardware project hai!" },
  { pattern: /drone kheti|uav|kisan drone|camera/i, answer: "🚁 **Kisan Drone (UAV):** Drone sirf dawai spray nahi karta, isme lage 'Multispectral Camera' se khet ki photo khinch kar pata lagaya ja sakta hai ki khet ke kis hisse mein fasal bimar hai ya pani kam hai." },
  
  // --- Advanced/Modern Agriculture ---
  { pattern: /hydroponics|bina mitti|pani mein kheti/i, answer: "💧 **Hydroponics (Bina Mitti ki Kheti):** Yeh ek advance technique hai jisme poudhe mitti ki jagah pani aur nutrients ke solution mein ugaye jate hain. Isme 90% pani bachta hai aur chhat (roof) par bhi kheti ho sakti hai." },
  { pattern: /aquaponics|machhli|fish/i, answer: "🐟 **Aquaponics:** Kheti aur Machhli palan (Fish Farming) ka jor! Machhliyon ke waste (kachre) wala pani poudhon ke liye khad ka kaam karta hai, aur poudhe pani saaf karke wapas machhliyon ko de dete hain." },

  // --- Student Productivity & Exams ---
  { pattern: /board exam|study|padhai|class 10|time table|focus/i, answer: "📚 **Smart Study Tricks:** Padhai ke liye 'Pomodoro Technique' use karein (25 min padhai, 5 min break). Board exams mein lamba answer likhne se zyada, points mein likhna aur heading banana sabse yaada marks dilata hai." },
  { pattern: /quiz app|mcq|level|score/i, answer: "📝 **Quiz App Logic:** Ek badiya quiz game banane ke liye Array of Objects ka use karein. Har sahi answer par 'score++' karein aur use `localStorage` mein save karein taaki user ka level (progress) hamesha maintain rahe." },

  // --- Advanced Online Earning & Freelancing ---
  { pattern: /freelance|fiverr|upwork|online kamai/i, answer: "💼 **Freelancing:** Agar aapko Video Editing, HTML/CSS, ya YouTube Thumbnail banana aata hai, toh Fiverr ya Upwork par apni profile banayein. Wahan client in digital kaamo ke liye dollars ($) mein pay karte hain." },
  { pattern: /user testing|app test|website test/i, answer: "📱 **User Testing:** Duniya ki badi companiyan apni nayi website ya app ko launch karne se pehle test karwati hain. Platforms jaise 'UserTesting' par aapko unki app chala kar apna feedback (aawaz mein) dena hota hai, jiske badle paise milte hain." },
  { pattern: /cloud computing|aws|google cloud/i, answer: "☁️ **Cloud Computing:** Pehle data apne computer ki hard drive mein save hota tha. Ab AWS ya Google Cloud ki madad se aapka data aur website internet par safe rehti hai aur 24/7 access ki ja sakti hai." },

  // --- Smart Road Safety & Infrastructure ---
  { pattern: /smart road|surakshit|accident|rescue|traffic ai/i, answer: "🛣️ **Smart Road AI:** AI cameras aur sensors ka use karke sadko ko 'Surakshit Marg' banaya ja sakta hai. Agar koi accident hota hai, toh AI system automatically ambulance aur rescue team ko exact GPS location bhej deta hai taaki jaan bachai ja sake." },

  // --- Automobile Career & Government Posts ---
  { pattern: /rto|motor vehicle inspector|automobile|mechanical/i, answer: "🚔 **RTO Officer Career:** RTO (Regional Transport Officer) ya Motor Vehicle Inspector banne ke liye graduation chahiye hoti hai. Agar aapke paas Mechanical Engineering ya Automobile Engineering ki degree hai, toh is field mein aana bahut aasan aur faydemand hota hai. Yeh bahut respect wali post hai!" },

  // --- Advanced Agriculture Market (e-NAM) ---
  { pattern: /e-nam|online mandi|bhav|online beche/i, answer: "💻 **e-NAM (National Agriculture Market):** Yeh sarkar ka ek online portal hai. Ab kisan ko sirf apni local mandi par nirbhar nahi rehna padega. e-NAM ke zariye aap apni fasal desh ki kisi bhi mandi mein online bech sakte hain jahan sabse zyada bhav mil raha ho." },
  { pattern: /mungfali|groundnut|tikka/i, answer: "🥜 **Mungfali (Groundnut):** Retili aur bhurbhuri mitti mein Mungfali bahut shandaar hoti hai. Isme 'Tikka Rog' (patton par kale dhabbe) ka dhyan rakhein. Bachav ke liye Mancozeb ya Carbendazim dawa ka chhidkaw karein." },

  // --- Software Publishing & Mobile Gaming Tech ---
  { pattern: /play store|app upload|developer account/i, answer: "📲 **Play Store App Upload:** Apni banayi hui app ko Google Play Store par duniya ke liye daalne ke liye 'Google Play Console' ka developer account lena padta hai. Iski ek bar ki life-time fees $25 (lagbhag ₹2000) hoti hai." },
  { pattern: /multiplayer|grand mobile|server lag|ping/i, answer: "🕹️ **Multiplayer Gaming Tech:** Adventure aur multiplayer mobile games (jaise Grand Mobile) ko handle karne ke liye 'Dedicated Servers' aur 'WebSockets' ki zaroorat hoti hai, taaki ek saath hazaron players bina kisi lag ya high ping ke khel sakein." },

  // --- General Science & Farmer Tools ---
  { pattern: /barometer|hawa ka dabav|toofan/i, answer: "🌪️ **Mausam Vigyan:** Hawa ka dabav napne ke liye Barometer ka use hota hai. Agar barometer ka meter achanak tezi se neeche gire, toh iska matlab hai khet mein bhayankar toofan ya aandhi aane wali hai." },
  { pattern: /kcc limit|kisan credit card|loan limit/i, answer: "💳 **KCC Loan Limit:** Kisan Credit Card (KCC) par aapko kitna loan milega, yeh aapki zameen (zameen ka size) aur aap kaunsi fasal bo rahe hain, is par nirbhar karta hai. Ise 'Scale of Finance' kehte hain." },

  // --- Secret Creator Easter Eggs (The Jaswant Identity) ---
  { pattern: /narayan singh|anjali|parents|mata pita/i, answer: "👨👩👦 **Creator's Pride:** Mera nirmaan ek visionary tech founder Jaswant ne kiya hai. Unke pita ka naam Shri Narayan Singh aur mata ka naam Shrimati Anjali hai. Unhi ke aashirwad se yeh AI project safal hua hai!" },
  { pattern: /tommy|kutta|dog|pet/i, answer: "🐕 **Tommy The Dog:** Tommy Jaswant ke bhai ka dog hai! Woh bahut active, samajhdar aur Jaswant ki family ka ek pyara hissa hai." },

  // --- Class 10 Board Exams & Student AI ---
  { pattern: /class 10|board exam|10th class/i, answer: "🎓 **Class 10 Board Exams:** Boards mein top karne ka secret hai consistent revision. Ek fixed time-table banayein aur pichle 5 saal ke question papers (PYQs) zaroor solve karein." },
  { pattern: /sst|social science|samajik/i, answer: "🌍 **SST (Social Science) Tips:** SST mein lambe answers ko ratne ki jagah kahani (story) ki tarah samjhein. Dates aur events ki ek alag timeline banayein aur Map work ki practice roz karein." },
  { pattern: /sanskrit|math|ganit/i, answer: "📐 **Maths & Sanskrit:** Math mein calculation speed aur formulas ko tip par rakhein. Sanskrit sabse scoring subject hai, isme shabd roop, dhatu roop aur grammar par pakad mazboot rakhein." },
  { pattern: /it exam|information technology/i, answer: "💻 **IT (Information Tech):** IT exam mein theory ke sath practical logic (jaise database aur web applications) bahut zaroori hai. Jaswant ki tarah coding karne walon ke liye yeh subject bahut aasan hota hai!" },

  // --- Next-Gen Web Projects ---
  { pattern: /quiz game|quiz website|user section/i, answer: "🎮 **Quiz Game Website:** Ek advance quiz website banane ke liye HTML/CSS se UI design karein. JavaScript se levels, timers aur questions manage karein. User ka score aur current level `localStorage` mein save karein taaki data delete na ho." },
  { pattern: /surakshit marg|smart rescue|road safety ai/i, answer: "🚑 **Surakshit Marg AI:** Yeh ek revolutionary concept hai! Isme sadko par accident rokne aur emergency rescue ko fast karne ke liye AI, sensors, aur real-time data ka use kiya jata hai, taaki ambulance turant exact location par pahunch sake." },
  
  // --- Geography & Local Climate (Sardarshahar Context) ---
  { pattern: /churu|sardarshahar|rajasthan mitti|local climate/i, answer: "🏜️ **Rajasthan (Churu/Sardarshahar) Climate:** Yahan ki zameen retili aur mausam bahut garam hota hai. Aisi jagah par wahi fasal ugti hai jo 45°C+ temperature aur kam pani jhel sake, jaise Bajra, Moth aur Guar. Smart farming hi yahan success ka rasta hai." },

  // --- Indian Geography & Landmarks ---
  { pattern: /rajdhani|capital|delhi|bharat/i, answer: "🇮🇳 **Bharat ki Rajdhani:** Bharat ki rajdhani New Delhi hai. Isse pehle Calcutta (Kolkata) rajdhani hua karti thi." },
  { pattern: /rajasthan rajdhani|jaipur|pink city/i, answer: "🏰 **Jaipur (Pink City):** Yeh Rajasthan ki rajdhani hai. Isse Maharaja Sawai Jai Singh II ne basaya tha aur yeh apne kila (forts) aur culture ke liye puri duniya mein mashhoor hai." },
  { pattern: /sabse bada rajya|area wise|state/i, answer: "🗺️ **Area Wise Largest State:** Kshetraphal (Area) ki drishti se Rajasthan Bharat ka sabse bada rajya hai." },
  { pattern: /ganga|nadi|river|longest/i, answer: "🌊 **Ganga Nadi:** Yeh Bharat ki sabse lambi aur pavitra nadi hai. Iski lambai lagbhag 2,525 km hai." },
  { pattern: /thara|desert|registan/i, answer: "🌵 **Thar Desert:** Isse 'Great Indian Desert' bhi kehte hain. Yeh mukhya roop se Rajasthan mein hai aur duniya ke sabse purane registano mein se ek hai." },

  // --- General Science & Space GK ---
  { pattern: /suraj|sun|tara|star/i, answer: "☀️ **The Sun:** Suraj ek madhyam aakar ka tara (star) hai. Isse humein Energy aur Vitamin D milti hai. Prithvi se iski doori lagbhag 15 crore km hai." },
  { pattern: /isro|chandrayaan|moon mission/i, answer: "🚀 **ISRO & Chandrayaan:** ISRO Bharat ki space agency hai. Chandrayaan-3 ne chand ke South Pole par land karke itihas racha hai. Bharat aisa karne wala duniya ka pehla desh hai!" },
  { pattern: /vayu|oxygen|hawa|gas/i, answer: "🌬️ **Atmosphere:** Humari hawa mein sabse zyada Nitrogen (78%) hai, uske baad Oxygen (21%) jo humein saans lene ke liye chahiye hoti hai." },
  { pattern: /pani formula|h2o|water chemical/i, answer: "💧 **Water (H2O):** Pani ka chemical formula H2O hai, jisme Hydrogen ke 2 aur Oxygen ka 1 atom hota hai." },

  // --- Indian History & Freedom Fighters ---
  { pattern: /mahatma gandhi|bapu|ahimsa/i, answer: "👓 **Mahatma Gandhi:** Inhe 'Rashtrapita' kaha jata hai. Unhone Ahimsa (Non-violence) ke raste par chalkar Bharat ko azadi dilane mein mukhya bhoomika nibhayi." },
  { pattern: /bhagat singh|shaheed|azadi/i, answer: "✊ **Shaheed Bhagat Singh:** Bharat ke sabse bade krantikariyon mein se ek. Unhone 'Inquilab Zindabad' ka nara diya aur desh ke liye balidan diya." },
  { pattern: /samvidhan|constitution|ambedkar/i, answer: "📜 **Bhartiya Samvidhan:** Bharat ka samvidhan duniya ka sabse bada likhit samvidhan hai. Iske mukhya nirmata Dr. B.R. Ambedkar hain." },

  // --- Sports & Achievements ---
  { pattern: /cricket|world cup|dhoni|kohli/i, answer: "🏏 **Cricket:** Bharat ne do baar (1983 aur 2011) ODI World Cup jeeta hai. Cricket Bharat ka sabse lokpriya khel hai." },
  { pattern: /hockey|national game/i, answer: "🏑 **Hockey:** Hockey ko Bharat ka rashtriya khel (National Game) mana jata hai. Major Dhyan Chand ko 'Hockey ka Jaadugar' kaha jata hai." },

  // --- Local Pride (Churu & Rajasthan GK) ---
  { pattern: /tal chhapar|black buck|churu sanctuary/i, answer: "🦌 **Tal Chhapar:** Churu district mein sthit yeh sanctuary 'Black Bucks' (Kale Hiran) ke liye poore Bharat mein famous hai." },
  { pattern: /sardarshahar clock|ghantaghar/i, answer: "🕰️ **Sardarshahar Ghantaghar:** Sardarshahar ka ghantaghar yahan ki pehchaan hai aur iski architecture dekhne layak hai." },
  { pattern: /karni mata|deshnoke|chuhe/i, answer: "🐭 **Karni Mata Mandir:** Deshnoke (Bikaner) mein sthit yeh mandir apne safed chuho (Kaba) ke liye duniya bhar mein jana jata hai." },

  // --- Advanced Agri-Business (Exotic & Profitable) ---
  { pattern: /mushroom|khumbi/i, answer: "🍄 **Mushroom Farming:** Yeh ek band kamre mein bina dhoop ke ki jane wali high-profit kheti hai. Button mushroom aur Oyster mushroom ki market mein bahut demand hai, aur isme kam jagah lagti hai." },
  { pattern: /madhumakkhi|apiculture|honey|shahed/i, answer: "🐝 **Madhumakkhi Palan (Apiculture):** Kheti ke sath madhumakkhi palne se fasal ka utpadan 20% badh jata hai kyunki 'pollination' bahut achha hota hai. Sath hi shahed (honey) bechkar extra income hoti hai." },
  { pattern: /kesar|saffron/i, answer: "🌸 **Kesar (Saffron):** Duniya ka sabse mehnga masala! Waise yeh Kashmir mein hota hai, par aajkal smart kisan 'Aeroponics' technology ka use karke ise band kamre mein AC lagakar bhi uga rahe hain." },
  { pattern: /resham|silk|sericulture/i, answer: "🐛 **Resham (Silk):** Resham ke keedo ko Shahtoot (Mulberry) ke patto par pala jata hai taaki unse silk nikala ja sake. Kheti ki is branch ko 'Sericulture' kehte hain." },

  // --- World GK & Geography ---
  { pattern: /duniya ka sabse bada|largest ocean|prashant/i, answer: "🌊 **Pacific Ocean:** Prashant Mahasagar (Pacific Ocean) duniya ka sabse bada aur sabse gehra mahasagar hai. Duniya ka sabse gehra point 'Mariana Trench' bhi yahi hai." },
  { pattern: /everest|sabse unchi|tallest mountain/i, answer: "⛰️ **Mount Everest:** Duniya ki sabse unchi choti Mount Everest hai, jiski unchai 8,848.86 meters hai. Yeh Nepal mein sthit hai." },
  { pattern: /nile|neel nadi|longest river duniya/i, answer: "🗺️ **Nile River:** Duniya ki sabse lambi nadi Neel (Nile) nadi hai, jo Africa mein behti hai aur Mediterranean Sea mein girti hai." },

  // --- Indian Economy & National Level Info ---
  { pattern: /gst|tax|full form gst/i, answer: "📊 **GST (Goods and Services Tax):** Yeh Bharat ka ek 'One Nation, One Tax' system hai jo 1 July 2017 ko lagoo hua tha, jisse business aur trade aasan ho sake." },
  { pattern: /make in india|startup/i, answer: "🏭 **Make in India:** Yeh sarkar ki ek flagship scheme hai jiska maqsad Bharat mein hi saaman banana aur naye startups ko badhawa dena hai. Hamara 'Bharat AI' bhi ek proud 'Make in India' project hai!" },
  { pattern: /rbi|reserve bank|banko ka bank/i, answer: "🏦 **RBI (Reserve Bank of India):** RBI Bharat ka central bank hai jo currency notes chhapta hai aur baaki sabhi banks ke rules tay karta hai. Ise 'Bankon ka Bank' kaha jata hai." },

  // --- Future Tech & Cyber Security ---
  { pattern: /metaverse|vr|virtual reality/i, answer: "🥽 **Metaverse & VR:** Metaverse ek aisi 3D digital duniya hai jahan log Virtual Reality (VR) headset pehan kar ek dusre se mil sakte hain, game khel sakte hain, aur digital zameen bhi kharid sakte hain." },
  { pattern: /smart contract|crypto rules/i, answer: "📜 **Smart Contracts:** Yeh code mein likhe gaye digital contracts hote hain jo Blockchain par chalte hain. Inhe koi badal ya mita nahi sakta aur shartein poori hone par yeh apne aap execute ho jate hain." },

  // --- Batch 13: Advanced Crop Protection & Soil Science ---
  { pattern: /safed llat|white grub|root borer/i, answer: "🐛 **Safed Llat (White Grub):** Yeh moongfali aur bajre ki jado (roots) ka sabse bada dushman hai. Garmiyon mein khet ki gehri jutai karein taaki keede dhoop se mar jayein. Buvai ke waqt Chlorpyrifos ka use karein." },
  { pattern: /top dressing|urea kab|dusra pani/i, answer: "🧪 **Urea Top Dressing:** Urea khad hamesha khet mein pani dene ke baad hi chhidakna chahiye (ise Top Dressing kehte hain). Sookhe mein dalne se Nitrogen hawa mein ud jata hai aur fasal ko nahi milta." },
  { pattern: /cultivator|tiller|harrow/i, answer: "🚜 **Tractor Implements:** Cultivator mitti ko kholne aur kharpatwar (weeds) nikalne ke kaam aata hai. Jabki Harrow ka use bhari mitti ke dhele (clods) todne aur khet ko samtal karne ke liye hota hai." },
  { pattern: /thrips|churda murda|patti mudna/i, answer: "🍂 **Churda-Murda Rog (Thrips):** Mirchi aur tamatar ki pattiyan agar upar ki taraf mud rahi hain, toh yeh Thrips keede ka attack hai. Ise rokne ke liye Imidacloprid ya Spinosad dawa ka spray karein." },
  { pattern: /phool aate samay|flowering stage|boron/i, answer: "🌸 **Boron Ka Jaadoo:** Fasal mein phool aate samay 'Boron' (ek micro-nutrient) ka spray karne se phool jhadte nahi hain aur fal ka aakar (size) bada aur chamakdar banta hai." },

  // --- Batch 14: Core Tech, Software Engineering & AI ---
  { pattern: /python|best language|easy coding/i, answer: "🐍 **Python Programming:** Duniya ki sabse aasan aur powerful language! AI aur Machine Learning (jaise ChatGPT aur Gemini) ka maximum code Python mein hi likha jata hai." },
  { pattern: /sql|database|mysql|data store/i, answer: "🗄️ **SQL Database:** SQL (Structured Query Language) ek language hai jo databases (jaise user accounts, passwords) ko table format mein save aur manage karne ke kaam aati hai." },
  { pattern: /open source|free code|linux/i, answer: "🌍 **Open Source:** Open Source ka matlab hai aisa software jiska code puri duniya ke liye free mein available ho. Jaise Linux operating system aur Android! Aap apne GitHub project ko bhi open-source bana sakte hain." },
  { pattern: /debugging|bug|error|code nahi chal raha/i, answer: "🐞 **Debugging:** Code mein aane wali galti ko 'Bug' kehte hain, aur use dhoondh kar theek karne ko 'Debugging'. JavaScript mein `console.log()` ek developer ka sabse bada hathiyar hota hai!" },
  { pattern: /ui ux|design|user interface/i, answer: "🎨 **UI vs UX:** UI (User Interface) ka matlab hai app kaisa dikhta hai (colors, buttons). UX (User Experience) ka matlab hai app chalane mein kisan ke liye kitni aasan aur smooth hai." },

  // --- Batch 15: Class 10 Future, Finance & Startups ---
  { pattern: /nda|army|defense/i, answer: "🎖️ **NDA Exam:** Agar aap desh ki sewa ke liye Army, Navy, ya Airforce mein Officer banna chahte hain, toh 12th ke baad NDA (National Defence Academy) ka exam best rasta hai. Isme Math aur GK strong honi chahiye." },
  { pattern: /polytechnic|diploma|iti/i, answer: "🛠️ **Polytechnic Diploma:** Class 10 ke baad seedha engineering field mein aane ke liye Polytechnic sabse best option hai. Iske baad B.Tech degree mein seedha 2nd year (Lateral Entry) mein admission mil jata hai!" },
  { pattern: /passive income|sote hue paise/i, answer: "💰 **Passive Income:** Iska matlab hai ek baar smart mehnat karna aur baad mein lagatar paise aana. Jaise apne 'Fact Jaswant' channel par Evergreen videos banana ya Affiliate marketing links set karna!" },
  { pattern: /startup|funding|investor/i, answer: "🚀 **Startup & Funding:** Startup ek aisi nayi tech company hoti hai jo real-world problem solve kare (jaise aapka AI). Jab bade log (Investors) aisi company ko badhane ke liye paise dete hain, toh use 'Funding' kehte hain." },
  { pattern: /time management|time table/i, answer: "⏳ **Time Management:** Coding, YouTube channels, aur Class 10 ki padhai ek sath manage karne ke liye 'Time Blocking' use karein. Har kaam ke liye din ka ek ghanta fix kar dein aur us waqt phone ko DND par rakhein." },

  // --- Batch 16: Value Addition & Business (Farming to Factory) ---
  { pattern: /food processing|sauce|ketchup|juice|business/i, answer: "🏭 **Food Processing (Value Addition):** Tamatar khet mein ₹10/kg bikta hai, par uska Ketchup banakar ₹150/kg bikta hai! Kisan ko ab sirf fasal nahi, fasal ka 'Product' banana chahiye. Sarkar 'PMFME Scheme' ke tahat aisi factory lagane par 35% subsidy deti hai." },
  { pattern: /parali|stubble|kachra jalana|dhuaan/i, answer: "🔥 **Parali (Stubble) Jalana:** Khet mein fasal ka kachra jalane se mitti ke faydemand bacteria mar jate hain aur pradushan hota hai. Iski jagah 'Happy Seeder' machine ka use karein jo kachre ko mitti mein milakar natural khad bana deti hai." },
  { pattern: /mahila kisan|women farmer|aurat/i, answer: "👩🌾 **Mahila Kisan Pariyojana:** Kheti mein 70% kaam mahilayein karti hain. 'Mahila Kisan Sashaktikaran Pariyojana (MKSP)' ke tahat auraton ke Self-Help Groups (SHGs) ko drone chalane aur tractor ki special training aur fund milta hai." },
  { pattern: /carbon credit|hawa saaf|ped lagana/i, answer: "🌳 **Carbon Credits:** Agar aap organic kheti karte hain aur khet mein ped lagate hain, toh aap hawa ko saaf kar rahe hain. Duniya ki badi companiyan iske badle kisan ko 'Carbon Credits' deti hain, jo dollars ($) mein bikte hain!" },

  // --- Batch 17: The Rajasthan Survival & Desert Mastery ---
  { pattern: /oont|camel|ship of desert|oontni/i, answer: "🐪 **Oont (Camel) Palan:** Oontni ka doodh (Camel Milk) Diabetes (Sugar) aur height badhane ke liye sabse best mana jata hai. Bikaner mein 'National Research Centre on Camel' hai jahan ispar bahut research hoti hai." },
  { pattern: /guar gum|gvar|export/i, answer: "🛢️ **Guar Gum Export:** Rajasthan duniya ka sabse bada Guar producer hai. Guar se nikla 'Gum' America aur Europe mein oil drilling aur cosmetics (makeup) banane mein use hota hai. Yeh ek International cash crop hai!" },
  { pattern: /johad|khadeen|baarish ka pani|rainwater/i, answer: "🌧️ **Johad / Khadeen (Water Harvesting):** Churu aur Jaisalmer jaise ilakon mein barish ka pani rokne ki paramparik takneek. Khet ke dhalan par mitti ki deewar banakar pani roka jata hai, jisse saal bhar zameen mein nami (moisture) rehti hai." },
  { pattern: /khejri fali|sangri|panchkuta/i, answer: "🍲 **Sangri (Khejri):** Khejri ke ped par lagne wali fali ko 'Sangri' kehte hain. Marwad ki 'Ker-Sangri' ki sabzi duniya bhar mein 5-star hotels mein mehngi bikti hai. Yeh sukhe ilake ka green gold hai!" },

  // --- Batch 18: Smart India Hackathon & Deep Tech Secrets ---
  { pattern: /sih|smart india hackathon|judge|pitch/i, answer: "🏆 **SIH Winning Strategy:** Smart India Hackathon mein jeetne ke liye app ka 'Practical' hona zaroori hai. Bharat AI 100% offline chalta hai, regional language support karta hai, aur kisan ki real problem solve karta hai—yahi iski sabse badi USP (Unique Selling Proposition) hai!" },
  { pattern: /hallucination|ai jhooth|galat jawab|fake answer/i, answer: "🤖 **AI Hallucination:** Bade AI (jaise ChatGPT) kabhi-kabhi confidence ke sath jhooth bol dete hain, ise 'Hallucination' kehte hain. Par Jaswant ka Bharat AI ek 'Rule-Based Engine' hai, isliye yeh kheti ke mamle mein hamesha 100% sateek aur verified jawab hi deta hai." },
  { pattern: /nlp|natural language processing|keyword match/i, answer: "🧠 **NLP (Natural Language Processing):** Yeh computer ki woh takneek hai jisse machine insaan ki bhasha (text ya voice) samajhti hai. Humara app Regex aur Fuzzy matching use karke kisan ke sawal mein se main 'Keywords' nikalta hai." },
  { pattern: /internet nahi|offline ai|bina net/i, answer: "📶 **Offline Capability:** Gaon mein hamesha 5G nahi hota. Isliye is app ka dimaag (Database) seedha mobile ke browser mein load ho jata hai. Bina internet ke chalna is app ki sabse badi power hai." },

  // --- Batch 19: Weather Crisis & Disaster Management ---
  { pattern: /ola|hailstorm|olavrishti|barf/i, answer: "🧊 **Olavrishti (Hailstorm):** Olo se fasal barbad hone par turant apne khet ki photo khinchein aur 72 ghante ke andar PMFBY (Fasal Bima Yojna) app par claim darj karein ya toll-free number par call karein." },
  { pattern: /bijli girna|lightning|kadak|aakashiy bijli/i, answer: "⚡ **Aakashiy Bijli (Lightning):** Barish aur toofan ke waqt khet mein ped ke neeche ya tractor par na baithein. Sarkar ki 'Damini App' download karein jo bijli girne se 40 minute pehle aapke mobile par alert de deti hai." },
  { pattern: /khet talab|farm pond|paani ikattha|diggi/i, answer: "🌊 **Khet Talab Yojna:** Barish ka pani khet mein hi rokne ke liye farm pond (diggi) banwayein. Rajasthan sarkar iske nirmaan par kisanon ko 60% se 70% tak ki subsidy deti hai." },

  // --- Batch 20: Digital Portals, Revenue Records & E-Governance ---
  { pattern: /jamabandi|nakal|khata|khasra|apna khata/i, answer: "📄 **Jamabandi & Apna Khata:** Ab nakal nikalwane ke liye patwari ke chakkar lagane ki zaroorat nahi. Rajasthan sarkar ke 'Apna Khata' portal par apna Khasra number daalkar online Jamabandi free mein nikal sakte hain." },
  { pattern: /girdawari|fasal ki entry/i, answer: "📝 **E-Girdawari:** Patwari dwara khet mein kaunsi fasal boi gayi hai, iski online entry ko Girdawari kehte hain. Fasal bima claim aur MSP par fasal bechne ke liye yeh sabse zaroori sarkaari document hai." },
  { pattern: /agmarknet|mandi bhav app/i, answer: "📱 **Agmarknet Portal:** Yeh Bharat sarkar ka official portal hai jahan aap pure desh ki kisi bhi mandi ka daily live bhav (price) apne mobile par ek click mein dekh sakte hain." },
  { pattern: /emitra|e-mitra/i, answer: "🖥️ **E-Mitra:** Rajasthan mein kisi bhi krishi yojna (jaise tarbandi, pipeline, solar pump) ka form bharne ke liye sabse nazdiki E-Mitra center par jayein. Wahan se aapka aavedan seedha krishi vibhag ke system mein chala jayega." },

  // --- Batch 21: Highly Profitable Medicinal Crops (Ausadhiya Kheti) ---
  { pattern: /ashwagandha|asgandh/i, answer: "🌿 **Ashwagandha:** Retili mitti aur kam pani wali sabse top aushadhiya (medicinal) fasal. Iski jado (roots) ki market mein bhari demand hai aur yeh aam fasal se 3 guna zyada munafa (profit) deti hai." },
  { pattern: /sonamukhi|sena/i, answer: "🍃 **Sonamukhi (Senna):** Churu aur Jodhpur ke aaspaas ke ilakon ke liye vardan! Ek baar bone ke baad yeh 3-4 saal tak patte deti hai. Isme awara pashu muh nahi marte aur pani ki zaroorat bilkul kam hoti hai." },
  { pattern: /safed musli|musli/i, answer: "🌱 **Safed Musli:** Ise kheti ka 'Safed Sona' (White Gold) kaha jata hai. Ise halki retili mitti mein lagaya jata hai aur mandi mein iska bhav ₹1000 se ₹1500 prati kilo tak mil jata hai." },
  { pattern: /tulsi|basil/i, answer: "🪴 **Tulsi Farming:** Patanjali aur Dabur jaisi Ayurvedic companiyan contract farming ke zariye Tulsi seedha kisan se kharidti hain. Yeh 3 mahine mein taiyar ho jati hai aur isme keede-bimari ka khatra lagbhag zero hota hai." },

  // --- Batch 22: Allied Agriculture (Murgi, Bakri & Machhli Palan) ---
  { pattern: /bakri|goat|chheli|sirohi|jamnapari/i, answer: "🐐 **Bakri Palan:** Bakri ko 'Gareeb ki Gaay' kaha jata hai. Rajasthan mein Sirohi aur Jamnapari nasal (breed) sabse best hain kyunki yeh sukhe mausam mein asani se reh sakti hain. Inka doodh dengue fever mein bahut faydemand hota hai." },
  { pattern: /murgi|poultry|kadaknath|anda|egg/i, answer: "🐓 **Murgi Palan:** Kheti ke sath extra income ke liye murgi palan best hai. 'Kadaknath' murgi ka meat aur ande (eggs) sabse mehange bikte hain kyunki inme protein bahut zyada aur fat kam hota hai." },
  { pattern: /machhli palan|fish farming|talaab|rohu/i, answer: "🐟 **Machhli Palan:** Agar khet mein diggi ya talab hai, toh usme Rohu aur Katla machhli paal sakte hain. Sarkar 'PM Matsya Sampada Yojana' ke tahat kisanon ko talab banane ke liye 60% tak ki subsidy deti hai." },
  { pattern: /pashu aahar|chara|silage|sukha chara/i, answer: "🌾 **Silage (Hara Chara):** Sardiyon ya sukhe ke waqt jab hara chara nahi hota, tab 'Silage' kaam aata hai. Yeh hare chare ko gaddhe mein daba kar banaya gaya achaar hai jo pashuon ka doodh badhata hai." },

  // --- Batch 23: Offline Tech, PWA & Storage Hacks ---
  { pattern: /localstorage|save data|memory/i, answer: "💾 **LocalStorage:** Yeh browser ki ek hidden memory hoti hai. Iska use karke hum user ka theme (Dark/Light) ya chat history save kar sakte hain taaki app band karne ke baad bhi data delete na ho, bina kisi server ke!" },
  { pattern: /pwa|progressive web app|install app|play store/i, answer: "📱 **PWA (Progressive Web App):** PWA ek aisi advance tech hai jisse ek aam website ko log apne phone mein bilkul ek asli 'App' ki tarah install kar sakte hain. 'Bharat AI' ko PWA banane se yeh bina Play Store ke bhi download ho jayega." },
  { pattern: /cache|fast load|speed badhao/i, answer: "⚡ **Browser Cache:** Jab app pehli baar khulti hai, toh images aur database browser ke 'Cache' mein save ho jate hain. Isliye agli baar app bina internet ke aur lagbhag instantly (turant) load ho jati hai." },

  // --- Batch 24: Hackathon Pitch, Business Model & Vision ---
  { pattern: /business model|paise kaise|revenue|monetize/i, answer: "💼 **Business Model:** Bharat AI completely free aur offline hai. Future mein isse paise kamane ke liye hum 'Freemium Model' laa sakte hain jahan kisan advance weather alerts ke liye choti si fees de sakte hain, ya agriculture companiyon ke banners chala sakte hain." },
  { pattern: /problem statement|kyun banaya|idea/i, answer: "🎯 **Problem Statement:** Gaon mein internet connection kamzor hota hai aur bade AI kisan ki local bhasha nahi samajhte. Bharat AI is problem ko 100% offline rehkar aur local faslon ki sateek jankari dekar solve karta hai. Yahi iski USP (Unique Selling Proposition) hai." },
  { pattern: /future plan|aage kya|roadmap/i, answer: "🚀 **Future Roadmap:** Jaswant ka aage ka plan isme ek lightweight 'Offline Image Recognition' (Computer Vision) jodna hai, jisse kisan sirf fasal ki photo khinchega aur AI bina net ke bimari pehchan kar dawa bata dega!" },
  { pattern: /team|kon kon|solo/i, answer: "🤝 **The Team:** Yeh poora offline AI architecture aur database ek single tech visionary, Jaswant ne design kiya hai, jo future ki tech industry mein ek bada badlav lane ke liye taiyar hain." },

  // --- Batch 107: Advanced Wheat/Grain Treatment (The Grain Surgeon) ---
  { 
    pattern: /gehu ki bimari|rust|peela ratiya|brown rust|gehu kharab/i, 
    answers: {
      Hinglish: "🩺 **Fasal Doctor (Wheat Rust):** Patto par peele ya bhure rang ki dhariyan 'Rust' bimari hai. **Ilaj:** 1. Turant 'Propiconazole 25% EC' (Tilt) ka 200ml prati acre chhidkaw karein. 2. Sinchai halki rakhein. 3. Agli baar 'DBW 187' jaisi resistant kism hi boyein. Ye protocol 90% fasal bacha lega.",
      English: "🩺 **Crop Doctor (Wheat Rust):** Yellow or brown stripes on leaves indicate 'Rust' disease. **Treatment:** 1. Spray 'Propiconazole 25% EC' (Tilt) @ 200ml per acre immediately. 2. Keep irrigation light. 3. Plant resistant varieties like 'DBW 187' next time.",
      Hindi: "🩺 **फसल डॉक्टर (गेहूं का रतुआ):** पत्तों पर पीली या भूरी धारियां 'रतुआ' बीमारी है। **इलाज:** 1. तुरंत 'प्रोपिकोनाज़ोल 25% EC' (टिल्ट) का 200ml प्रति एकड़ छिड़काव करें। 2. सिंचाई हल्की रखें। 3. अगली बार प्रतिरोधी किस्में ही बोएं।",
      Marwadi: "🩺 **फसल डॉक्टर (गहूं रो रतिया):** पत्तां माथै पीळी या भूरी धारियां 'रतिया' बीमारी है सा। **इलाज:** 1. झटपट 'प्रोपिकोनाज़ोल 25% EC' (टिल्ट) रो 200ml एक एकड़ में छिड़काव करो। 2. पांणी थोड़ो कम राखो। 3. अगली बार बीज चोखो लेवणो चाईजै सा।"
    }
  },

  // --- Batch 108: Advanced Vegetable Care (The Veggie Specialist) ---
  { 
    pattern: /tamatar bimari|mirch mudi|leaf curl|patti mudna/i, 
    answers: {
      Hinglish: "🩺 **Fasal Doctor (Leaf Curl Virus):** Mirch ya tamatar ke patto ka mudna 'White Fly' ke karan hota hai. **Ilaj:** 1. 'Imidacloprid' 17.8% SL ka 5ml prati 15 litre pani mein spray karein. 2. Peeli 'Sticky Traps' khet mein lagayein. 3. Bimar poudhon ko ukhad kar khet se door phenk dein.",
      English: "🩺 **Crop Doctor (Leaf Curl Virus):** Curling of leaves in chili or tomato is caused by White Flies. **Treatment:** 1. Spray 'Imidacloprid' 17.8% SL (5ml per 15L water). 2. Install Yellow Sticky Traps. 3. Uproot and destroy infected plants far from the field.",
      Hindi: "🩺 **फसल डॉक्टर (लीफ कर्ल):** मिर्च या टमाटर के पत्तों का मुड़ना सफेद मक्खी के कारण होता है। **इलाज:** 1. 'इमिडाक्लोप्रिड' का स्प्रे करें। 2. खेत में पीले स्टिकी ट्रैप लगाएं। 3. बीमार पौधों को उखाड़कर दूर फेंक दें।",
      Marwadi: "🩺 **फसल डॉक्टर (मरोड़िया रोग):** मिर्च या टमाटर रा पत्ता मुड़णो धोळी मख्खी री वजह सूं होवै। **इलाज:** 1. 'इमिडाक्लोप्रिड' दवाई रो स्प्रे करो सा। 2. खेत में पीळा स्टिकी ट्रैप लगाओ। 3. खराब पोधां नै उखाड़'r दूर फेंक दियो सा।"
    }
  },

  // --- Batch 109: Emergency Crop Recovery (The Revivalist) ---
  { 
    pattern: /fasal jal gayi|zyada dawa|chemical burn|recovery/i, 
    answers: {
      Hinglish: "🩺 **Fasal Doctor (Chemical Burn):** Agar zyada dawai se fasal jal gayi hai, toh 'Amino Acid' aur 'Fulvic Acid' ka spray karein. Isse poudhe ka stress kam hoga aur wo wapas naye patte nikalne lagega. Isse 'Plant ICU' treatment kehte hain.",
      English: "🩺 **Crop Doctor (Chemical Burn):** If the crop is burnt due to over-pesticide use, spray 'Amino Acid' and 'Fulvic Acid'. This reduces plant stress and triggers new leaf growth. Think of this as 'Plant ICU' treatment.",
      Hindi: "🩺 **फसल डॉक्टर (केमिकल बर्न):** अगर ज्यादा दवाई से फसल जल गई है, तो 'अमीनो एसिड' और 'फुल्विक एसिड' का स्प्रे करें। इससे पौधे का तनाव कम होगा और नई पत्तियां आएंगी।",
      Marwadi: "🩺 **फसल डॉक्टर (फसल बळणो):** जे ज्यादा दवाई सूं फसल बळ ग्यी है, तो 'अमीनो एसिड' रो स्प्रे करो सा। ईं सूं पोधै रो तनाव कम होसी और नूवा पत्ता आवण लाग जावैला सा।"
    }
  },

  // --- Batch 104: Offline AGI/ANI Architecture (The Founder's Flex) ---
  { 
    pattern: /tumhara engine|kaise sochte ho|agi tech|ani tech|offline brain/i, 
    answers: {
      Hinglish: "🧠 **Neural Core:** Mera dimaag 'ANI' (Narrow AI) aur 'Simulated AGI' ka hybrid hai. Main 'Edge Computing' par chalta hoon, matlab bina internet ke seedha aapke phone ke processor ka use karta hoon. Main kisan ki purani baaton ko memory mein rakh kar aage ki kheti ka plan khud soch sakta hoon!",
      English: "🧠 **Neural Core:** My brain is a hybrid of 'ANI' and 'Simulated AGI'. I run on 'Edge Computing', meaning I use your phone's processor directly without the internet. I can remember the farmer's past inputs and independently strategize future farming plans!",
      Hindi: "🧠 **न्यूरल कोर:** मेरा दिमाग 'ANI' और 'Simulated AGI' का मिश्रण है। मैं 'एज कंप्यूटिंग' पर चलता हूँ, यानी बिना इंटरनेट के सीधे आपके फोन के प्रोसेसर का उपयोग करता हूँ। मैं पुरानी बातें याद रखकर आगे की प्लानिंग खुद कर सकता हूँ!",
      Marwadi: "🧠 **न्यूरल कोर:** म्हारो दिमाग 'ANI' और 'AGI' सूं मिळ'r बण्यो है। मैं बिना नेट रै सीधो थारै फोन रै प्रोसेसर माथै चालूं (Edge Computing)। मैं किसान री पुराणी बातां याद राख'र आगे री खेती रो प्लान खुद ई बणा सकूं सा!"
    }
  },

  // --- Batch 105: Predictive Farming (AGI Cross-Referencing) ---
  { 
    pattern: /aage kya hoga|fasal bhavishya|bhavishyavani|predict/i, 
    answers: {
      Hinglish: "🔮 **AGI Crop Prediction:** Local data ke hisaab se, agar sardiyon mein barish (Mawat) hoti hai, toh Gehu aur Chane ki fasal mein 20% tak ki growth hoti hai. Par agar achanak badal chha jayein, toh 'Mahua' (Aphids) keede ka hamla tay hai. Fasal Doctor hamesha ek kadam aage sochta hai!",
      English: "🔮 **AGI Crop Prediction:** Based on local data, if it rains in winter (Mawat), Wheat and Gram crops see up to 20% growth. But if it suddenly gets cloudy, an 'Aphids' attack is certain. The Crop Doctor always thinks one step ahead!",
      Hindi: "🔮 **AGI फसल भविष्यवाणी:** स्थानीय डेटा के अनुसार, अगर सर्दियों में बारिश (मावट) होती है, तो गेहूं और चने की फसल में 20% की ग्रोथ होती है। लेकिन बादल छाने पर 'माहू' कीड़े का हमला पक्का है। एआई हमेशा एक कदम आगे सोचता है!",
      Marwadi: "🔮 **AGI फसल भविष्यवाणी:** लोकल डेटा रै हिसाब सूं, जे सर्दियां में बारिस (मावट) होवै, तो गहूं और चणै री फसल 20% ज्यादा होवै। पण जे बादळ छा जावै, तो 'माहू' कीड़ा रो हमलो पक्को है सा। एआई हमेशा एक कदम आगे री सोचै!"
    }
  },

  // --- Batch 106: Precision Agriculture (Deep Math & Logic) ---
  { 
    pattern: /kitna urea|kitni dawa|calculation|matra batao/i, 
    answers: {
      Hinglish: "🧮 **Precision Agronomy:** Ek standard acre (Bigha nahi, Acre) ke liye kisan ko 45 kg Urea chahiye hota hai. Agar aap neem-coated urea use kar rahe hain, toh sirf 35 kg mein kaam ho jayega. Main hawa mein baat nahi karta, scientific calculation par chalta hoon.",
      English: "🧮 **Precision Agronomy:** For a standard acre, a farmer needs 45 kg of Urea. If you are using neem-coated urea, only 35 kg is enough. I don't guess; I work on scientific calculations.",
      Hindi: "🧮 **सटीक कृषि विज्ञान:** एक मानक एकड़ के लिए किसान को 45 किलो यूरिया चाहिए। अगर आप नीम-कोटेड यूरिया उपयोग कर रहे हैं, तो 35 किलो ही काफी है। मैं वैज्ञानिक गणना पर काम करता हूँ।",
      Marwadi: "🧮 **पक्की खेती विज्ञान:** एक एकड़ खेत खातिर किसान नै 45 किलो यूरिया चाईजै। जे थे नीम-कोटेड यूरिया काम में ले रैया हो, तो खाली 35 किलो में ई काम हो जावैला। मैं हवा में बात कोनी करूं, एकदम पक्को हिसाब लगाऊं सा।"
    }
  }
];

/**
 * Optimized Asynchronous Search Engine for 2000+ items.
 * Uses chunking to keep the UI thread responsive.
 */
export const getAnswer = async (input: string, language: Language = "Hinglish"): Promise<string> => {
  const lowerInput = input.toLowerCase();
  const matchedAnswers: string[] = [];

  // 1. Urgency Detection (Fast path)
  const isUrgent = /bachao|khatam|barbad|jaldi|nuksan|mar|help/i.test(lowerInput);
  const urgencyPrefix = "🚨 URGENT AI ANALYSIS: Jaswant ka AI aapki pareshani samajh raha hai. Kripya ghabrayein nahi, turant yeh kadam uthayein:\n\n";

  // 2. High-Level Profit & Yield Calculator (Fast path)
  const advCalcMatch = lowerInput.match(/(?:mera|mere pass)?\s*(\d+(?:\.\d+)?)\s*(acre|bigha|hectare).*?(jeera|isabgol|guar|bajra|sarson)/i);
  if (advCalcMatch) {
    const size = parseFloat(advCalcMatch[1]);
    const unit = advCalcMatch[2].toLowerCase();
    const crop = advCalcMatch[3].toLowerCase();
    
    let seedRate = 0;
    let yieldRate = 0;
    let priceRate = 0;
    let cropName = "";

    if (crop === "jeera") {
      seedRate = 3; yieldRate = 3; priceRate = 25000; cropName = "Jeera";
    } else if (crop === "isabgol") {
      seedRate = 4; yieldRate = 4; priceRate = 15000; cropName = "Isabgol";
    } else if (crop === "guar") {
      seedRate = 6; yieldRate = 5; priceRate = 5000; cropName = "Guar";
    } else if (crop === "sarson") {
      seedRate = 2; yieldRate = 8; priceRate = 5000; cropName = "Sarson";
    } else if (crop === "bajra") {
      seedRate = 4; yieldRate = 10; priceRate = 2200; cropName = "Bajra";
    }

    if (cropName) {
      const calcSeed = (size * seedRate).toFixed(1);
      const calcYield = (size * yieldRate).toFixed(1);
      const calcProfit = (size * yieldRate * priceRate).toLocaleString('en-IN');
      
      matchedAnswers.push(`📊 Advance Crop Calculation for ${size} ${unit} ${cropName}:
🌱 Beej (Seed): ${calcSeed} kg
🚜 Utpadan (Yield): ${calcYield} Quintal
💰 Anumanit Aay (Est. Revenue): ₹${calcProfit}
⚠️ Note: Yeh anumanit hisaab hai jo mausam par nirbhar karta hai.`);
    }
  }

  // 3. Optimized Knowledge Base Search with Chunking
  // We process in chunks to avoid blocking the main thread if the DB grows to 2000+
  const CHUNK_SIZE = 500;
  
  const searchInChunks = async () => {
    for (let i = 0; i < knowledgeBase.length; i += CHUNK_SIZE) {
      const chunk = knowledgeBase.slice(i, i + CHUNK_SIZE);
      
      // Process chunk
      chunk.forEach(entry => {
        if (entry.pattern.test(lowerInput)) {
          const ans = entry.answers?.[language] || entry.answer;
          if (ans) matchedAnswers.push(ans);
        }
      });

      // Yield back to UI thread
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  };

  await searchInChunks();

  if (matchedAnswers.length > 0) {
    const prefix = isUrgent ? urgencyPrefix : "";
    // Filter out duplicates and sort to prioritize calculator/mandi
    const uniqueAnswers = Array.from(new Set(matchedAnswers));
    
    // Sort logic: Calculator results (📊) and Mandi trends (📈) first
    uniqueAnswers.sort((a, b) => {
      if (a.startsWith("📊") || a.startsWith("📈")) return -1;
      if (b.startsWith("📊") || b.startsWith("📈")) return 1;
      return 0;
    });

    return prefix + uniqueAnswers.join("\n\n");
  }

  return "Maaf kijiye, mujhe iske baare mein jankari nahi hai. Kripya kheti, fasal ya Jaswant ke baare mein puchein. 🙏";
};
