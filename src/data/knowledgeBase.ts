import { KisanGKEntry } from "../types";

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
  { pattern: /mrp|msp|samarthan mulya/i, answer: "⚖️ **MSP (Minimum Support Price):** MSP sarkar dwara tay kiya gaya woh 'Nyunatam Samarthan Mulya' hai jis par woh kisan ki fasal kharidti hai, taaki kisan ko bazar mein ghata (loss) na ho." }
];

/**
 * Optimized Asynchronous Search Engine for 2000+ items.
 * Uses chunking to keep the UI thread responsive.
 */
export const getAnswer = async (input: string): Promise<string> => {
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
          matchedAnswers.push(entry.answer);
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
