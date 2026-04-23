import React, { useState, useEffect, useRef } from "react";
import { 
  Mic, 
  MapPin, 
  Camera, 
  Send, 
  Share2, 
  Globe, 
  Smartphone,
  Loader2,
  X,
  ChevronDown,
  Leaf,
  Brain,
  Volume2,
  VolumeX,
  Download,
  CheckCircle2,
  AlertTriangle,
  Cloud,
  Database,
  Stethoscope,
  ShoppingBag,
  Calculator,
  TrendingUp,
  Coins,
  Trash2,
  AlertCircle,
  Zap,
  Activity,
  History,
  Search,
  Plus,
  Edit2,
  Folder,
  User,
  Cpu,
  Book,
  Calendar
} from "lucide-react";
import { Chat, Topic } from "./types";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Message, Language } from "./types";
import { getAnswer } from "./data/knowledgeBase";
import AdSenseBanner from "./components/AdSenseBanner";

// --- UI Translations ---
const uiTranslation = {
  English: {
    greeting: "Hello, I am Jaswant's Bharat AI. Ask me about crops, weather, or agriculture.",
    botPrefix: "🌾 **Bharat AI says:**\n\n",
    fallback: "I'm sorry, I don't have information about that. Please ask about crops, farming, or Jaswant. 🙏",
    searchPlaceholder: "Search discussions...",
    inputPlaceholder: "Type your agricultural query...",
    emptyHistory: "No discussions yet. Start a new one!",
    today: "Today",
    yesterday: "Yesterday",
    thisWeek: "This Week",
    older: "Older"
  },
  Hindi: {
    greeting: "नमस्ते, मैं जसवंत का भारत AI हूँ। फसल, मौसम या खेती के बारे में पूछें।",
    botPrefix: "🌾 **भारत AI का जवाब:**\n\n",
    fallback: "माफ़ करें, मेरे पास इसके बारे में जानकारी नहीं है। कृपया फसल, खेती या जसवंत के बारे में पूछें। 🙏",
    searchPlaceholder: "चर्चा खोजें...",
    inputPlaceholder: "अपनी खेती से जुड़ी समस्या लिखें...",
    emptyHistory: "अभी तक कोई चर्चा नहीं। नई शुरू करें!",
    today: "आज",
    yesterday: "कल",
    thisWeek: "इस सप्ताह",
    older: "पुराने"
  },
  Hinglish: {
    greeting: "Namaste! Main Jaswant ka Bharat AI hoon. Fasal, mausam ya kheti ke baare mein puchein.",
    botPrefix: "🌾 **Bharat AI says:**\n\n",
    fallback: "Maaf kijiye, mujhe iske baare mein jankari nahi hai. Kripya kheti, fasal ya Jaswant ke baare mein puchein. 🙏",
    searchPlaceholder: "Discussions search karein...",
    inputPlaceholder: "Apni kheti ki samasya likhein...",
    emptyHistory: "Abhi koi discussion nahi hai. Naya shuru karein!",
    today: "Aaj",
    yesterday: "Kal",
    thisWeek: "Is Hafte",
    older: "Purane"
  },
  Marwadi: {
    greeting: "खम्मा घणी! मैं जसवंत रो भारत AI हूँ। खेती-बाड़ी या मौसम रै बारे में पूछो सा।",
    botPrefix: "🌾 **भारत AI रो जवाब:**\n\n",
    fallback: "माफ़ करजो सा, म्नै इण बारे में ठा कोनी। थे खेती या जसवंत रै बारे में पूछ सको हो। 🙏",
    searchPlaceholder: "बातचीत खोजो...",
    inputPlaceholder: "आपरै खेत री कोई भी बात लिखो सा...",
    emptyHistory: "अजे तई कोई बातचीत कोनी। नई शुरू करो सा!",
    today: "आज",
    yesterday: "काले",
    thisWeek: "इण हफ्ते",
    older: "पुराणा"
  }
};
import html2pdf from "html2pdf.js";
import { getCropDiagnosis } from "./services/geminiService";

// --- Invalid Crop Card Component ---
const InvalidCropCard = ({ content }: { content: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-4 p-6 bg-orange-50 border border-orange-100 rounded-2xl flex flex-col items-center text-center gap-4 relative overflow-hidden"
  >
    {/* Decorative background icon */}
    <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12">
      <AlertTriangle className="w-24 h-24 text-orange-500" />
    </div>

    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
      <AlertTriangle className="w-7 h-7 text-orange-500" />
    </div>
    <div className="space-y-2 relative z-10">
      <h4 className="text-orange-600 font-black uppercase tracking-widest text-sm">Validation Error</h4>
      <p className="text-xs text-gray-600 leading-relaxed max-w-[250px]">
        {content.replace("[INVALID_CROP]", "").trim()}
      </p>
    </div>
    <div className="px-3 py-1 bg-orange-100 rounded-full border border-orange-200">
      <span className="text-[9px] font-bold text-orange-600 uppercase">Crop Not Detected</span>
    </div>
  </motion.div>
);

// --- Fasal Doctor Report Component ---
const FasalDoctorReportCard = ({ reportId, content, language }: { reportId: string, content: string, language: Language }) => {
  const reportRef = useRef<HTMLDivElement>(null);
  
  const statusMatch = content.match(/Status:\s*([A-Z]+)/i);
  const status = statusMatch ? statusMatch[1].toUpperCase() : "NORMAL";
  
  const healthMatch = content.match(/Health:\s*(\d+)%/i);
  const healthPercentage = healthMatch ? parseInt(healthMatch[1]) : 100;

  const downloadPDF = () => {
    const element = reportRef.current;
    if (!element) return;

    const opt = {
      margin: 10,
      filename: `Fasal_Doctor_Report_${reportId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as const;

    html2pdf().set(opt).from(element).save();
  };

  const getStatusStyles = () => {
    if (status === "CRITICAL") return { backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' };
    if (status === "WARNING") return { backgroundColor: '#fef9c3', color: '#854d0e', border: '1px solid #fef08a' };
    return { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' };
  };

  const statusStyle = getStatusStyles();

  return (
    <div className="mt-4 space-y-4">
      <div 
        ref={reportRef}
        className="bg-white text-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
      >
        {/* Lab Styling Watermark */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <Stethoscope className="w-32 h-32 rotate-12" />
        </div>

        {/* Report Header */}
        <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900">Fasal Doctor™</h3>
            <p style={{ color: '#6b7280' }} className="text-[9px] font-bold uppercase tracking-widest">Diagnostic Lab Report • AI Analysis</p>
          </div>
          <div className="text-right">
            <p style={{ color: '#9ca3af' }} className="text-[10px] font-mono">ID: #{reportId}</p>
            <p style={{ color: '#9ca3af' }} className="text-[10px] font-mono">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div 
            style={statusStyle}
            className={`px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 ${status === "CRITICAL" ? 'animate-pulse' : ''}`}
          >
             {status === "CRITICAL" ? "🚨 " : status === "WARNING" ? "⚠️ " : "✅ "}
             {status}
          </div>
          <div className="flex-1">
             <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
               <span style={{ color: '#4b5563' }}>Crop Health Score</span>
               <span style={{ color: '#1f2937' }}>{healthPercentage}%</span>
             </div>
             <div style={{ backgroundColor: '#f3f4f6' }} className="h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${healthPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ backgroundColor: healthPercentage < 40 ? '#ef4444' : healthPercentage < 70 ? '#eab308' : '#22c55e' }}
                  className="h-full"
                />
             </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="space-y-4 text-sm leading-relaxed whitespace-pre-wrap">
          {content.replace("[CROP_REPORT]", "").split("\n\n").map((section, idx) => (
            <div 
              key={idx} 
              style={section.includes("**") ? { backgroundColor: '#f9fafb', borderLeftColor: 'rgba(0, 255, 136, 0.4)' } : {}}
              className={section.includes("**") ? "p-3 rounded-lg border-l-4" : ""}
            >
               {section}
            </div>
          ))}
        </div>

        {/* Certification */}
        <div style={{ borderTopColor: '#f3f4f6' }} className="mt-8 pt-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span style={{ color: '#9ca3af' }} className="text-[9px] font-bold uppercase tracking-widest italic">Certified by Bharat AI Agronomy Engine</span>
          </div>
          <Leaf className="w-6 h-6 text-emerald-500/10" />
        </div>
      </div>

      {/* Action Button - NOT part of the ref to avoid rendering in PDF */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={downloadPDF}
        className="w-full bg-white text-gray-900 font-black py-4 rounded-xl flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 transition-all border border-gray-200"
      >
        <Download className="w-5 h-5" />
        {language === "Hindi" ? "📄 रिपोर्ट डाउनलोड करें (PDF)" : "📄 Download Full Report (PDF)"}
      </motion.button>
    </div>
  );
};

// --- Agri Calculator Card Component ---
const AgriCalculatorCard = ({ language }: { language: Language }) => {
  const [crop, setCrop] = useState("Wheat");
  const [area, setArea] = useState(1);
  const [unit, setUnit] = useState("Acre");

  const CROP_DATA: Record<string, { seed: number, yield: number, price: number }> = {
    "Wheat": { seed: 45, yield: 18, price: 2275 },
    "Mustard": { seed: 1.75, yield: 9, price: 5650 },
    "Bajra": { seed: 1.8, yield: 11, price: 2500 },
    "Cotton": { seed: 1.5, yield: 10, price: 7020 },
    "Moong": { seed: 9, yield: 4.5, price: 8558 },
  };

  const currentCrop = CROP_DATA[crop] || CROP_DATA["Wheat"];
  const multiplier = unit === "Bigha" ? 0.4 : 1; 
  
  const totalAreaInAcre = area * multiplier;
  const totalSeed = (currentCrop.seed * totalAreaInAcre).toFixed(1);
  const totalYield = (currentCrop.yield * totalAreaInAcre).toFixed(1);
  const totalRevenue = Math.round(currentCrop.price * (currentCrop.yield * totalAreaInAcre)).toLocaleString('en-IN');

  const t = {
    English: { title: "Agri-Calculator", crop: "Crop", area: "Area", unit: "Unit", seed: "Seed Requirement", yield: "Expected Yield", revenue: "Potential Revenue" },
    Hindi: { title: "कृषि-कैलकुलेटर", crop: "फसल", area: "क्षेत्रफल", unit: "इकाई", seed: "बीज की आवश्यकता", yield: "संभावित पैदावार", revenue: "अनुमानित आय" },
    Hinglish: { title: "Agri-Calculator", crop: "Fasal", area: "Area", unit: "Unit", seed: "Beej ki Zarurat", yield: "Expected Yield", revenue: "Potential Revenue" },
    Marwadi: { title: "खेती-कैलकुलेटर", crop: "फसल", area: "जमीन", unit: "इकाई", seed: "बीज री जरुरत", yield: "पैदावार", revenue: "अनुमानित कमाई" }
  }[language];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 p-5 bg-white border border-gray-100 rounded-2xl space-y-4 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2 border-b border-gray-50 pb-3">
        <Calculator className="w-5 h-5 text-emerald-600" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 font-mono">{t.title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase font-bold">{t.crop}</label>
          <select 
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-2 py-2 text-xs text-gray-900 outline-none focus:border-emerald-500/50"
          >
            {Object.keys(CROP_DATA).map(c => <option key={c} value={c} className="bg-white">{c}</option>)}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-gray-400 uppercase font-bold">{t.unit}</label>
          <select 
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-2 py-2 text-xs text-gray-900 outline-none focus:border-emerald-500/50"
          >
            <option value="Acre" className="bg-white">Acre</option>
            <option value="Bigha" className="bg-white">Bigha</option>
          </select>
        </div>
        <div className="col-span-2 space-y-1">
          <label className="text-[10px] text-gray-400 uppercase font-bold">{t.area}</label>
          <input 
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-xs text-gray-900 outline-none focus:border-emerald-500/50"
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center border border-emerald-200">
              <Leaf className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-xs text-gray-600">{t.seed}</span>
          </div>
          <span className="text-sm font-bold text-gray-900">{totalSeed} kg</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center border border-blue-200">
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600">{t.yield}</span>
          </div>
          <span className="text-sm font-bold text-gray-900">{totalYield} Qt</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100 shadow-sm shadow-emerald-500/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center">
              <Coins className="w-4 h-4 text-emerald-700" />
            </div>
            <span className="text-xs text-emerald-700 font-bold">{t.revenue}</span>
          </div>
          <span className="text-sm font-black text-emerald-700">₹{totalRevenue}*</span>
        </div>
      </div>

      <p className="text-[8px] text-gray-400 italic mt-2">* Market prices are approximate MSP-linked values. Real rates may vary.</p>
    </motion.div>
  );
};

// --- Ad Slot Component ---
const AdSlot = ({ type }: { type: "top" | "inline" | "anchor" }) => (
  <div className={`mx-auto w-full max-w-lg ${
    type === "top" ? "py-2 mb-1" : 
    type === "anchor" ? "fixed bottom-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-md border-t border-gray-100" : 
    "py-8 my-4"
  }`}>
    <div className={`relative bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all hover:bg-white ${
      type === "top" ? "h-[70px]" : 
      type === "anchor" ? "min-h-[60px]" : 
      "min-h-[120px]"
    }`}>
      <span className="absolute top-1 right-2 text-[7px] uppercase tracking-widest text-gray-300 font-bold">Advertisement</span>
      <AdSenseBanner format={type === "top" || type === "anchor" ? "horizontal" : "auto"} />
    </div>
  </div>
);

// --- Suggestion Chips Component ---
const SuggestionChips = ({ onChipClick }: { onChipClick: (text: string) => void }) => {
  const chips = [
    { label: "💰 Best Mutual Funds", query: "Best Mutual Funds" },
    { label: "💻 Cloud Web Hosting", query: "Cloud Web Hosting" },
    { label: "🛡️ Term Insurance Plan", query: "Term Insurance Plan" },
    { label: "🚀 Digital Marketing", query: "Digital Marketing" },
    { label: "🚜 Modern Agri Tech", query: "Modern Agri Tech" }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-1">
      {chips.map((chip, idx) => (
        <motion.button
          key={idx}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChipClick(chip.query)}
          className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all flex items-center gap-2 shadow-sm"
        >
          {chip.label}
        </motion.button>
      ))}
    </div>
  );
};

// --- Affiliate Product Card Component ---
const AffiliateProductCard = ({ keyword }: { keyword: string }) => {
  const products: Record<string, { name: string, price: string, link: string }> = {
    "spray": { name: "Organic Neem Oil Spray (250ml)", price: "₹249", link: "https://www.amazon.in/s?k=neem+oil+for+plants" },
    "urea": { name: "Neem Coated Urea Fertilizer", price: "₹350", link: "https://www.amazon.in/s?k=urea+fertilizer" },
    "npk": { name: "NPK 19:19:19 Soluble Fertilizer", price: "₹180", link: "https://www.amazon.in/s?k=npk+19+19+19" },
    "tractor": { name: "Kisan Professional Torch / Tractor Light", price: "₹899", link: "https://www.amazon.in/s?k=kisan+torch" },
    "rotavator": { name: "Heavy Duty Rotavator Blades (Set)", price: "₹1,200", link: "https://www.amazon.in/s?k=agriculture+tools" },
    "tools": { name: "Professional Agriculture Hand Tool Kit", price: "₹599", link: "https://www.amazon.in/s?k=agriculture+hand+tools" }
  };

  const key = keyword.toLowerCase();
  const product = products[key] || products["tools"];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 p-3 bg-gray-50 border border-emerald-100 rounded-xl flex items-center gap-4 group hover:bg-emerald-50 transition-all"
    >
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-100 shrink-0 overflow-hidden shadow-sm">
         <ShoppingBag className="w-8 h-8 text-emerald-600 opacity-50" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">Recommended for your Crop</p>
        <h4 className="text-sm font-bold truncate text-gray-900 mb-2">{product.name}</h4>
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 shadow-md shadow-emerald-600/10"
        >
          Check Price & Buy Online 🛒
        </a>
      </div>
    </motion.div>
);
};

// --- Chat History Sidebar Component ---
const ChatHistorySidebar = ({ 
  chats, 
  activeChatId, 
  onSelectChat, 
  onNewChat, 
  onDeleteChat, 
  onRenameChat,
  isOpen,
  onClose
}: { 
  chats: Chat[], 
  activeChatId: string | null, 
  onSelectChat: (id: string) => void, 
  onNewChat: () => void, 
  onDeleteChat: (id: string) => void,
  onRenameChat: (id: string, newTitle: string) => void,
  isOpen: boolean,
  onClose: () => void
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Topic | "All">("All");

  const filteredChats = chats
    .filter(chat => 
      (activeFilter === "All" || chat.topic === activeFilter) &&
      (chat.title.toLowerCase().includes(searchQuery.toLowerCase()) || chat.summary.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  const groupChatsByTime = (chatList: Chat[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() - 7);

    const groups: { [key: string]: Chat[] } = {
      Today: [],
      Yesterday: [],
      "This Week": [],
      Older: []
    };

    chatList.forEach(chat => {
      const chatDate = new Date(chat.timestamp);
      if (chatDate >= today) groups.Today.push(chat);
      else if (chatDate >= yesterday) groups.Yesterday.push(chat);
      else if (chatDate >= thisWeek) groups["This Week"].push(chat);
      else groups.Older.push(chat);
    });

    return groups;
  };

  const groupedChats = groupChatsByTime(filteredChats);

  const getTopicIcon = (topic: Topic) => {
    switch (topic) {
      case "Agriculture": return <Leaf className="w-3.5 h-3.5 text-green-400" />;
      case "Finance": return <Coins className="w-3.5 h-3.5 text-yellow-400" />;
      case "Tech": return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      case "Personal": return <User className="w-3.5 h-3.5 text-pink-400" />;
      default: return <Folder className="w-3.5 h-3.5 text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
          <motion.aside 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[320px] bg-white border-r border-gray-100 z-50 flex flex-col shadow-2xl lg:relative lg:translate-x-0"
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
                    <History className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-gray-900 tracking-tight uppercase italic">Bharat Archives</h2>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Session Logic History</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-1 px-2 border border-gray-200 rounded-md text-xs font-mono text-gray-400 lg:hidden">ESC</button>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { onNewChat(); onClose(); }}
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/10 hover:bg-emerald-700 transition-all"
              >
                <Plus className="w-5 h-5" />
                New Discussion
              </motion.button>
            </div>

            {/* Filters & Search */}
            <div className="px-6 py-4 space-y-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search interactions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 outline-none focus:border-emerald-500/40 transition-all focus:bg-white"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["All", "Agriculture", "Finance", "Tech", "Personal"].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter as any)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap border transition-all ${
                      activeFilter === filter ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200 hover:text-gray-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-6">
              {Object.entries(groupedChats).map(([group, list]) => (
                list.length > 0 && (
                  <div key={group} className="mb-6">
                    <div className="px-3 mb-3 flex items-center gap-2">
                       <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{group}</p>
                       <div className="flex-1 h-px bg-gray-50" />
                    </div>
                    <div className="space-y-1.5">
                      {list.map(chat => (
                        <div 
                          key={chat.id}
                          className={`group relative p-3 rounded-2xl border transition-all cursor-pointer ${
                            activeChatId === chat.id 
                              ? "bg-emerald-50 border-emerald-100" 
                              : "bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100"
                          }`}
                          onClick={() => { onSelectChat(chat.id); onClose(); }}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 p-2 rounded-lg border transition-all ${activeChatId === chat.id ? "bg-emerald-100 border-emerald-200" : "bg-gray-50 border-gray-100 group-hover:bg-white"}`}>
                              {getTopicIcon(chat.topic)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-0.5">
                                <h4 className={`text-xs font-bold truncate ${activeChatId === chat.id ? "text-emerald-950" : "text-gray-700 group-hover:text-gray-900"}`}>
                                  {chat.title}
                                </h4>
                                <span className="text-[8px] font-mono text-gray-400 whitespace-nowrap">
                                  {new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              </div>
                              <p className="text-[10px] text-gray-500 truncate leading-relaxed">
                                {chat.summary}
                              </p>
                            </div>
                          </div>

                          {/* Quick Actions (Hover) */}
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center scale-0 group-hover:scale-100 transition-transform origin-right">
                            <button 
                              onClick={(e) => { e.stopPropagation(); const t = prompt("Rename session:", chat.title); if(t) onRenameChat(chat.id, t); }}
                              className="p-1.5 hover:bg-white rounded-lg text-gray-400 hover:text-emerald-600 shadow-sm border border-transparent hover:border-gray-100"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); onDeleteChat(chat.id); }}
                              className="p-1.5 hover:bg-white rounded-lg text-gray-400 hover:text-red-500 shadow-sm border border-transparent hover:border-gray-100"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}

              {filteredChats.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center px-6">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-gray-700" />
                  </div>
                  <h5 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1 italic">No records found</h5>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-sans">
                    Aapka chat itihas (history) yahan dikhayi dega. Naya session shuru karein.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                  <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase tracking-tighter">Verified Farmer</p>
                  <p className="text-[8px] text-primary font-bold uppercase tracking-widest">Active Session</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
// --- Agent Swarm Dashboard Component ---
const AgentSwarmDashboard = ({ states }: { states: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="glass-morphism border border-primary/30 rounded-3xl p-6 mb-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative"
  >
    {/* Animated scanning background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30" />
    <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="h-full w-1/3 bg-primary glow-accent"
      />
    </div>
    
    <div className="flex justify-between items-center mb-6 relative z-10">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-primary animate-pulse" />
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">ANI Swarm Control Panel</h3>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
        <div className="w-2 h-2 rounded-full bg-secondary animate-ping delay-100" />
      </div>
    </div>

    <div className="space-y-5 relative z-10">
      {[
        { id: "agronomy", name: "Agronomy Expert", task: "Biological Threat Audit", icon: Stethoscope, color: "text-green-400", bg: "bg-green-400/10" },
        { id: "climate", name: "Climate Analyst", task: "Met-Data Synthesis", icon: Cloud, color: "text-blue-400", bg: "bg-blue-400/10" },
        { id: "data", name: "Logic Structurer", task: "Multi-modal Formatting", icon: Database, color: "text-purple-400", bg: "bg-purple-400/10" }
      ].map((agent) => {
        const state = states[agent.id] || { progress: 0, status: "idle", conflict: false };
        return (
          <div key={agent.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${agent.bg} flex items-center justify-center border border-white/5`}>
                  <agent.icon className={`w-5 h-5 ${agent.color} ${state.progress > 0 && state.progress < 100 ? "animate-spin-slow" : ""}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-black text-white uppercase tracking-tight">{agent.name}</p>
                    {state.conflict && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1 bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30"
                      >
                        <AlertCircle className="w-2.5 h-2.5 text-red-500" />
                        <span className="text-[7px] font-bold text-red-500 uppercase">Conflict Resolved</span>
                      </motion.div>
                    )}
                  </div>
                  <p className="text-[9px] text-gray-500 font-mono italic">{agent.task}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[10px] font-black ${state.progress === 100 ? "text-green-400" : "text-primary"}`}>
                  {state.progress}%
                </p>
                <p className="text-[8px] text-gray-600 font-bold uppercase">{state.status}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${state.progress}%` }}
                className={`h-full ${state.conflict ? "bg-orange-500" : state.progress === 100 ? "bg-green-400" : "bg-primary"} relative`}
              >
                {state.progress > 0 && state.progress < 100 && (
                  <motion.div 
                    animate={{ left: ["-10%", "110%"] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute top-0 bottom-0 w-4 bg-white/30 blur-sm"
                  />
                )}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Conflict Notification Overlay */}
    <AnimatePresence>
      {Object.values(states).some((s: any) => s.conflict) && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="mt-4 p-3 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center gap-3"
        >
          <Zap className="w-4 h-4 text-secondary animate-bounce" />
          <p className="text-[9px] text-secondary font-bold uppercase tracking-tighter">
            Logical Conflict Detected: Resolving via ANI Multi-Chain Synthesis...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// --- Recovery Matrix Component ---
const RecoveryMatrix = ({ data, language }: { data: any, language: Language }) => {
  const [activeTab, setActiveTab] = useState<"chemical" | "organic" | "prevention">("chemical");

  const tabs = {
    chemical: { label: language === "Hindi" || language === "Marwadi" ? "💊 रसायनिक" : "💊 Chemical", content: data.chemical },
    organic: { label: language === "Hindi" || language === "Marwadi" ? "🌿 जैविक/देशी" : "🌿 Organic/Desi", content: data.organic },
    prevention: { label: language === "Hindi" || language === "Marwadi" ? "🛡️ बचाव" : "🛡️ Prevention", content: data.prevention }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-4 space-y-4"
    >
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(tabs).map(([id, tab]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              activeTab === id 
                ? "bg-primary text-bg-dark border-primary" 
                : "bg-white/5 text-gray-400 border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={activeTab}
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -10 }}
           className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <p className="text-sm leading-relaxed text-gray-200">
            {tabs[activeTab].content.split("'").map((part: string, i: number) => {
              // Highlight dosages and chemicals in single quotes
              if (i % 2 === 1) {
                return (
                  <span key={i} className="inline-block px-1.5 py-0.5 mx-0.5 bg-yellow-400/20 text-yellow-400 font-mono text-[10px] rounded border border-yellow-400/30">
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="space-y-4 pt-4 border-t border-white/5">
        <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold">Recovery Timeline</h4>
        <div className="relative flex justify-between">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/5" />
          {[
            { step: 1, label: "Immediate Action", detail: "First spray" },
            { step: 2, label: "Observation", detail: "3-5 days wait" },
            { step: 3, label: "Recovery Boost", detail: "NPK Dose" }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-2 group w-1/3">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                className="w-8 h-8 rounded-full bg-bg-dark border border-primary/50 flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-bg-dark transition-colors"
              >
                {item.step}
              </motion.div>
              <span className="text-[9px] font-bold text-center text-gray-400">{item.label}</span>
              <span className="text-[8px] text-center text-gray-600 hidden sm:block">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-2">
        <div className="px-2 py-1 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-[8px] font-bold text-primary tracking-tighter uppercase">Verified by Bharat AI - ANI Logic</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Legal Modal Component ---
const LegalModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-bg-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
        >
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
            <h3 className="text-xl font-bold glow-text">{title}</h3>
            <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto custom-scrollbar text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
            {content}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main Component ---
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState<Language>("Hinglish");
  const [isScanning, setIsScanning] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [scannedImage, setScannedImage] = useState<string | null>(null);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "about" | null>(null);

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isSwarming, setIsSwarming] = useState(false);
  const [swarmStates, setSwarmStates] = useState<any>({
    agronomy: { progress: 0, status: "idle", conflict: false },
    climate: { progress: 0, status: "idle", conflict: false },
    data: { progress: 0, status: "idle", conflict: false }
  });

  const [chats, setChats] = useState<Chat[]>(() => {
    const oldHistory = localStorage.getItem("chatHistory");
    const savedSessions = localStorage.getItem("chatSessions");
    
    let initialChats: Chat[] = [];

    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions);
        initialChats = parsed.map((chat: any) => ({
          ...chat,
          timestamp: new Date(chat.timestamp),
          messages: chat.messages.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }))
        }));
      } catch (e) { console.error("Failed to parse chat sessions", e); }
    }
    
    if (oldHistory && initialChats.length === 0) {
      try {
        const messages = JSON.parse(oldHistory).map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
        const migratedChat: Chat = {
          id: "migrated-" + Date.now(),
          title: "Previous Discussion History",
          summary: "Old chat records migrated successfully.",
          topic: "Agriculture",
          timestamp: new Date(),
          messages
        };
        initialChats = [migratedChat];
        localStorage.removeItem("chatHistory");
      } catch (e) { console.error("Failed to migrate history", e); }
    }
    
    return initialChats;
  });

  const [activeChatId, setActiveChatId] = useState<string | null>(() => {
    return localStorage.getItem("activeChatId");
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeChat = chats.find(c => c.id === activeChatId) || null;
  const messages = activeChat?.messages || [];
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") setDeferredPrompt(null);
      });
    }
  };

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowCookieBanner(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Speech Synthesis ---
  const speak = (text: string) => {
    if (!isVoiceEnabled) {
      window.speechSynthesis.cancel();
      return;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes("hi"));
      if (hindiVoice) utterance.voice = hindiVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleVoice = () => {
    const newState = !isVoiceEnabled;
    setIsVoiceEnabled(newState);
    if (!newState) {
      window.speechSynthesis.cancel();
    }
  };

  // --- Speech Recognition ---
  const startListening = () => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language === "Hindi" || language === "Hinglish" ? "hi-IN" : "en-IN";
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = async (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        await handleSendMessage(transcript);
      };
      recognition.start();
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  const updateActiveChatMessages = (newMessages: Message[]) => {
    setChats(prev => {
      const chatId = activeChatId;
      if (!chatId) return prev;
      const idx = prev.findIndex(c => c.id === chatId);
      if (idx === -1) return prev;
      const next = [...prev];
      const updatedChat = { ...next[idx], messages: newMessages, timestamp: new Date() };
      
      // Auto-generate title & summary from first user message
      const userMsgs = newMessages.filter(m => m.sender === "user");
      if (userMsgs.length === 1 && updatedChat.title === "New Discussion") {
        const firstUserText = userMsgs[0].text;
        updatedChat.title = firstUserText.slice(0, 30) + (firstUserText.length > 30 ? "..." : "");
        updatedChat.summary = firstUserText.slice(0, 60) + (firstUserText.length > 60 ? "..." : "");
        
        if (/beej|khet|fasal|farming|crop|soil|agri/i.test(firstUserText)) updatedChat.topic = "Agriculture";
        else if (/paisa|bank|loan|finance|invest|mandi/i.test(firstUserText)) updatedChat.topic = "Finance";
        else if (/code|tech|program|ai|data|logic/i.test(firstUserText)) updatedChat.topic = "Tech";
        else updatedChat.topic = "Personal";
      }
      
      next[idx] = updatedChat;
      return next;
    });
  };

  const handleSendMessage = async (textOverride?: string) => {
    const text = textOverride || inputText;
    if (!text.trim()) return;

    let chatId = activeChatId;
    let currentChats = [...chats];

    // Create new chat if none active
    if (!chatId) {
      chatId = Date.now().toString();
      const newChat: Chat = {
        id: chatId,
        title: "New Discussion",
        summary: "Starting a new conversation...",
        topic: "Other",
        timestamp: new Date(),
        messages: [{
           id: "greeting-" + Date.now(),
           text: uiTranslation[language].greeting,
           sender: "bot",
           timestamp: new Date()
        }]
      };
      currentChats = [newChat, ...currentChats];
      setChats(currentChats);
      setActiveChatId(chatId);
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    const activeChatNow = currentChats.find(c => c.id === chatId);
    if (!activeChatNow) return;

    const updatedMessages = [...activeChatNow.messages, userMsg];
    updateActiveChatMessages(updatedMessages);
    setInputText("");

    // Start Swarm Animation
    setIsSwarming(true);
    setSwarmStates({
      agronomy: { progress: 10, status: "thinking", conflict: false },
      climate: { progress: 0, status: "queued", conflict: false },
      data: { progress: 0, status: "queued", conflict: false }
    });

    // Sequence the agents
    setTimeout(() => setSwarmStates(prev => ({ ...prev, agronomy: { progress: 60, status: "auditing", conflict: false } })), 400);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, agronomy: { progress: 100, status: "complete", conflict: false }, climate: { progress: 30, status: "analyzing", conflict: false } })), 800);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, climate: { progress: 80, status: "conflicted", conflict: true } })), 1200);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, climate: { progress: 100, status: "resolved", conflict: true }, data: { progress: 40, status: "structuring", conflict: false } })), 1600);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, data: { progress: 100, status: "complete", conflict: false } })), 2000);

    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsSwarming(false);

    let answer = await getAnswer(text, language);
    let isFallback = answer === "Maaf kijiye, mujhe iske baare mein jankari nahi hai. Kripya kheti, fasal ya Jaswant ke baare mein puchein. 🙏" || answer === uiTranslation[language].fallback;
    const diagnosticIntent = /report|diagnosis|health|bimari|pest|keeda|patti|patte|leaf|sukh raha|mar raha/i.test(text);
    const calculatorIntent = /calculator|hisaab|calculate|kitna beej|seed rate|yield|revenue|kilowatt|area|acre|bigha/i.test(text);

    if (isFallback || diagnosticIntent || calculatorIntent) {
      const realAIResponse = await getCropDiagnosis(text);
      if (realAIResponse.includes("[CROP_REPORT]") || realAIResponse.includes("[INVALID_CROP]") || realAIResponse.includes("[CALCULATOR]") || isFallback) {
        answer = realAIResponse;
        isFallback = false;
      }
    }
    
    const botResponse = isFallback ? uiTranslation[language].fallback : (answer.includes("[CROP_REPORT]") || answer.includes("[INVALID_CROP]")) ? answer : uiTranslation[language].botPrefix + answer;
    const isTreatment = answer.includes("🩺") && (answer.includes("Ilaj:") || answer.includes("Treatment:"));
    const isReport = answer.includes("[CROP_REPORT]");
    const isCalc = answer.includes("📊") || answer.includes("[CALCULATOR]");
    let treatmentData = undefined;

    if (isTreatment && !isReport) {
      treatmentData = {
        chemical: answer.split("💊")[1]?.split("🌿")[0]?.trim() || "No detailed chemical info",
        organic: answer.split("🌿")[1]?.split("🛡️")[0]?.trim() || "No detailed organic info",
        prevention: answer.split("🛡️")[1]?.split("⚠️")[0]?.trim() || "No detailed prevention info"
      };
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
      type: isReport ? "report" : isCalc ? "calculator" : isTreatment ? "treatment" : "text",
      treatmentData,
    };

    setChats(prev => {
      const idx = prev.findIndex(c => c.id === chatId);
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = { ...next[idx], messages: [...next[idx].messages, botMsg], timestamp: new Date() };
      return next;
    });
    speak(botResponse);
  };

  const handleGPS = () => {
    if (activeChatId && navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocating(false);
          const gpsMsg: Message = {
            id: Date.now().toString(),
            text: "📍 Location Detected: Rajasthan / Semi-Arid Zone. Jaswant's AI recommends Bajra or Mustard for this specific soil type.",
            sender: "bot",
            timestamp: new Date(),
          };
          updateActiveChatMessages([...messages, gpsMsg]);
          speak("Location Detected: Rajasthan / Semi-Arid Zone. Jaswant's AI recommends Bajra or Mustard for this specific soil type.");
        },
        () => {
          setIsLocating(false);
          alert("Unable to retrieve your location.");
        }
      );
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeChatId) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Data = event.target?.result as string;
        setScannedImage(base64Data);
        setIsScanning(true);
        try {
          const base64Image = base64Data.split(',')[1];
          const diagnosis = await getCropDiagnosis("Analyze this crop and provide a diagnostic report.", base64Image, file.type);
          setIsScanning(false);
          const reportMsg: Message = {
            id: Date.now().toString(),
            text: diagnosis,
            sender: "bot",
            timestamp: new Date(),
            type: "report"
          };
          updateActiveChatMessages([...messages, reportMsg]);
          speak(diagnosis.replace(/\[CROP_REPORT\]|\[INVALID_CROP\]/g, "").trim());
        } catch (error) {
          setIsScanning(false);
          console.error("Diagnosis error:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const updateLanguage = (newLang: Language) => {
    setLanguage(newLang);
    // Update initial message if it was just the greeting
    if (messages.length === 1 && messages[0].id === "1") {
      updateActiveChatMessages([{
        ...messages[0],
        text: uiTranslation[newLang].greeting
      }]);
    }
  };

  const clearHistory = () => {
    if (window.confirm("Kripya pushti karein (Confirm): Kya aap poora chat mitaana chahte hain?")) {
      const initialMsg: Message = {
        id: "1",
        text: uiTranslation[language].greeting,
        sender: "bot",
        timestamp: new Date(),
      };
      if (activeChatId) {
        setChats(prev => prev.map(c => c.id === activeChatId ? { ...c, messages: [initialMsg], timestamp: new Date() } : c));
      }
    }
  };

  const handleNewChat = () => {
    setActiveChatId(null); // Will trigger creation on first message
  };

  const handleDeleteChat = (id: string) => {
    if (window.confirm("SURE? Yeh session hamesha ke liye delete ho jayega.")) {
      setChats(prev => prev.filter(c => c.id !== id));
      if (activeChatId === id) setActiveChatId(null);
    }
  };

  const handleRenameChat = (id: string, newTitle: string) => {
    setChats(prev => prev.map(c => c.id === id ? { ...c, title: newTitle } : c));
  };

  const shareOnWhatsApp = (text: string) => {
    const url = `whatsapp://send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // --- Render Helpers ---
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-bg-dark flex flex-col items-center justify-center z-50 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          <div className="relative w-32 h-32 mb-8 mx-auto">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 rounded-full glow-accent">
              <div className="relative">
                <Leaf className="w-12 h-12 text-primary absolute -top-4 -left-4" />
                <Brain className="w-12 h-12 text-secondary absolute -bottom-4 -right-4" />
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2 glow-text tracking-tight">
              Bharat Krishi & Tech AI
            </h1>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-[10px] opacity-80">
              Empowering Farmers
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500 mt-12 text-xs font-mono"
          >
            Created by Jaswant
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Sidebar Overlay Integration */}
      <ChatHistorySidebar 
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={(id) => setActiveChatId(id)}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        onRenameChat={handleRenameChat}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex flex-col h-screen bg-white text-gray-900 font-sans overflow-hidden lg:flex-row">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full relative bg-gray-50/50">
          
          {/* Header */}
          <header className="bg-white px-4 py-3 flex items-center justify-between z-10 border-b border-gray-100 shadow-sm">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-gray-50 rounded-xl transition-all active:scale-95 text-emerald-600"
              >
                <History className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900 tracking-tight leading-tight">Bharat AI</h2>
                  {activeChat && <p className="text-[9px] text-gray-400 truncate max-w-[150px] font-mono">{activeChat.title}</p>}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {deferredPrompt && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleInstallClick}
                  className="p-2 bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/20 animate-bounce"
                  title="Install App"
                >
                  <Download className="w-5 h-5" />
                </motion.button>
              )}

              <Globe className="w-4 h-4 text-emerald-600" />
              <select 
                value={language} 
                onChange={(e) => updateLanguage(e.target.value as Language)}
                className="bg-gray-50 text-xs font-medium border border-gray-200 rounded-lg px-2 py-1 outline-none focus:border-emerald-500/50 transition-colors"
              >
                <option value="English" className="bg-white text-gray-900">English</option>
                <option value="Hindi" className="bg-white text-gray-900">Hindi</option>
                <option value="Hinglish" className="bg-white text-gray-900">Hinglish</option>
                <option value="Marwadi" className="bg-white text-gray-900">Marwadi</option>
              </select>

              <button 
                onClick={clearHistory}
                className="p-2 bg-gray-50 rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 transition-all active:scale-95"
                title="Clear Chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </header>

      {/* Top Ad Area */}
      <AdSlot type="top" />

      {/* Main Container - Chat Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
        {messages.map((msg, idx) => (
          <React.Fragment key={msg.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[90%] relative ${msg.sender === "user" ? "order-1" : "order-2"}`}>
                <div className={`${
                  msg.sender === "user" 
                    ? "p-4 bg-gray-100 text-gray-900 rounded-2xl rounded-tr-none shadow-sm border border-gray-200" 
                    : "p-0 text-gray-800"
                }`}>
                  {msg.type === "report" ? (
                    msg.text.includes("[INVALID_CROP]") ? (
                      <InvalidCropCard content={msg.text} />
                    ) : (
                      <FasalDoctorReportCard 
                        reportId={msg.id} 
                        content={msg.text.replace(uiTranslation[language].botPrefix, "")} 
                        language={language} 
                      />
                    )
                  ) : msg.type === "calculator" ? (
                    <div>
                      <p className="text-sm leading-relaxed mb-2">{msg.text.split("📊")[0]}</p>
                      <AgriCalculatorCard language={language} />
                    </div>
                  ) : msg.type === "treatment" ? (
                    <div>
                      <p className="text-sm leading-relaxed mb-4">{msg.text.split("Ilaj:")[0]}</p>
                      <RecoveryMatrix data={msg.treatmentData} language={language} />
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.text.replace(uiTranslation[language].botPrefix, "")}</p>
                  )}
                  
                  {msg.sender === "bot" && (
                    <div className="mt-4 flex flex-col gap-4">
                      {/* Affiliate Card Injection */}
                      {["spray", "urea", "npk", "tractor", "rotavator", "tools"].some(keyword => 
                        msg.text.toLowerCase().includes(keyword)
                      ) && (
                        <AffiliateProductCard 
                          keyword={["spray", "urea", "npk", "tractor", "rotavator", "tools"].find(keyword => 
                            msg.text.toLowerCase().includes(keyword)
                          ) || "tools"} 
                        />
                      )}

                      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                         <span className="text-[8px] text-gray-400 font-mono uppercase font-bold tracking-widest">Bharat Engine v4.0</span>
                         <button 
                          onClick={() => shareOnWhatsApp(msg.text)}
                          className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all active:scale-90 shadow-sm border border-emerald-100"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <p className={`text-[8px] mt-1.5 text-gray-400 font-bold uppercase tracking-wider ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
            
            {/* Inline Ad Slot setiap 5 respons bot (tidak termasuk pertama) */}
            {idx > 0 && msg.sender === "bot" && messages.filter((m, i) => i <= idx && m.sender === "bot").length % 5 === 0 && <AdSlot type="inline" />}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </main>

          {/* New Chat Empty State Integration */}
          {(!activeChat || activeChat.messages.length <= 1) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-white border border-gray-100 rounded-[40px] p-10 shadow-2xl shadow-emerald-500/5 relative overflow-hidden"
              >
                  {/* Decorative faint background element */}
                  <div className="absolute -right-10 -bottom-10 opacity-[0.03] rotate-12 pointer-events-none">
                    <Leaf className="w-40 h-40 text-emerald-600" />
                  </div>

                  <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                    <Zap className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 uppercase italic tracking-tighter">New Discussion Ready</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans mb-8">
                     Pardesi Kisan, main Jaswant AI hoon. Fasal, mandi bhav aur rish-kheti ke baare mein puchein.
                  </p>
                  
                  {chats.length > 0 && (
                    <div className="pt-6 border-t border-gray-50">
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-4">Suggest Continuing:</p>
                      <div className="space-y-2 pointer-events-auto">
                        {chats.slice(0, 2).map(chat => (
                          <button 
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-emerald-50 hover:border-emerald-100 transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                               <Calendar className="w-4 h-4 text-gray-300 group-hover:text-emerald-500" />
                               <span className="text-xs text-gray-600 font-bold truncate group-hover:text-emerald-700">{chat.title}</span>
                            </div>
                            <Plus className="w-3 h-3 text-gray-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
              </motion.div>
            </div>
          )}

      {/* Fixed Bottom UI Area */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-100 px-4 pt-3 pb-[80px] space-y-4 z-30">
        
        {/* Suggestion Chips - Fixed Row Above Input */}
        <SuggestionChips onChipClick={(text) => {
          setInputText(text);
          handleSendMessage(text);
        }} />

        {/* Action Bar - Grouped (Mic, GPS, Camera, Voice Toggle) */}
        <div className="max-w-lg mx-auto w-full px-1">
          <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100 w-fit shadow-sm">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={startListening}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isListening ? "bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/20" : "bg-emerald-50 text-emerald-600 border border-emerald-100"
              }`}
              title="Voice Input"
            >
              <Mic className={`w-5 h-5 ${isListening ? "text-white" : ""}`} />
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleGPS}
              className="w-10 h-10 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center transition-all hover:bg-blue-100 shadow-sm"
              title="GPS Location"
            >
              <MapPin className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => fileInputRef.current?.click()}
              className="w-10 h-10 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl flex items-center justify-center transition-all hover:bg-rose-100 shadow-sm"
              title="Camera Scan"
            >
              <Camera className="w-5 h-5" />
            </motion.button>

            <div className="w-px h-6 bg-gray-200 mx-1" />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleVoice}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                isVoiceEnabled ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
              }`}
              title="Speech Toggle"
            >
              {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </motion.button>

            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              capture="camera"
              onChange={handleFileUpload}
            />
          </div>
        </div>

        {/* Input area: [Input | Send] */}
        <div className="flex items-center gap-3 max-w-lg mx-auto w-full">
          {/* Chat Input Field Container */}
          <div className="flex-1 bg-white rounded-2xl flex items-center border border-gray-200 px-4 py-1.5 focus-within:border-emerald-500/40 transition-all shadow-lg shadow-gray-200/20 min-w-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={uiTranslation[language].inputPlaceholder}
              className="flex-1 bg-transparent border-none outline-none py-2.5 text-sm text-gray-900 placeholder:text-gray-400 min-w-0 font-medium"
            />
          </div>

          {/* Chat Send Button - High Visibility */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shrink-0 shadow-lg ${
              inputText.trim() 
                ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:scale-105" 
                : "bg-gray-100 text-gray-400 border border-gray-200 opacity-50"
            }`}
          >
            <Send className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Legal Footer */}
        <footer className="flex flex-wrap justify-center gap-4 text-[9px] text-gray-400 font-bold uppercase tracking-widest opacity-80 overflow-hidden whitespace-nowrap">
          <button onClick={() => setActiveModal("privacy")} className="hover:text-emerald-600 transition-colors">Privacy</button>
          <button onClick={() => setActiveModal("terms")} className="hover:text-emerald-600 transition-colors">Terms</button>
          <button onClick={() => setActiveModal("about")} className="hover:text-emerald-600 transition-colors">About</button>
          <span className="opacity-40">© 2026 Bharat AI</span>
        </footer>
      </div>
    </div>
  </div>

      {/* Overlays / Modals */}
      <AnimatePresence>
        {isLocating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/80 flex flex-col items-center justify-center p-6 backdrop-blur-md"
          >
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col items-center shadow-2xl">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 border border-blue-100">
                 <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
              </div>
              <p className="text-blue-600 font-black tracking-widest animate-pulse uppercase italic">Locating Area...</p>
              <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Detecting Soil & Climate Zone</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
          >
            <div className="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl mb-12">
              {scannedImage && (
                <img src={scannedImage} alt="Scanned" className="w-full h-full object-cover" />
              )}
              <div className="laser-line" />
              <div className="absolute inset-0 bg-emerald-900/10 flex flex-col items-center justify-center backdrop-blur-[1px]">
                <div className="w-20 h-20 bg-white/90 rounded-3xl flex items-center justify-center shadow-xl border border-emerald-100 mb-4">
                  <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
                </div>
                <p className="text-white font-black tracking-[0.2em] shadow-sm uppercase text-xs">AI Vision Analysis...</p>
              </div>
            </div>
            <button 
              onClick={() => setIsScanning(false)}
              className="p-5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-all active:scale-95 shadow-sm border border-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSwarming && (
          <div className="fixed inset-0 z-50 pointer-events-none p-4 flex flex-col items-center justify-end pb-[200px]">
            <div className="pointer-events-auto w-full max-w-lg">
              <AgentSwarmDashboard states={swarmStates} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
          >
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
              <p className="text-[11px] text-gray-500 leading-relaxed text-center sm:text-left flex-1 font-sans font-medium">
                We use cookies to personalize content and ads, provide social media features, and analyze our traffic. By clicking 'Accept', you consent to our <button onClick={() => setActiveModal("privacy")} className="text-emerald-600 underline font-black">Privacy Policy</button>.
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={declineCookies}
                  className="flex-1 sm:px-6 py-2.5 rounded-xl bg-gray-50 text-gray-500 text-xs font-bold hover:bg-gray-100 transition-all border border-gray-200"
                >
                  Decline
                </button>
                <button 
                  onClick={acceptCookies}
                  className="flex-1 sm:px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:scale-105 transition-all shadow-lg shadow-emerald-600/20"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legal Modals */}
      <LegalModal 
        isOpen={activeModal === "privacy"} 
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={`Privacy Policy for Bharat AI

This Privacy Policy describes how Bharat AI collects, uses, and shares information when you use our application.

Information We Collect:
As an offline-first AI, most of your data stays on your device. However, for AdSense optimization and traffic analysis, we use standard web technologies.

Cookies and Web Beacons:
Bharat AI uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. 

Google DoubleClick DART Cookie:
Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our app and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads

Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.
Users may opt out of personalized advertising by visiting Ads Settings.

Data Security:
We take your data security seriously and follow industry-standard practices to protect your information.` }
      />

      <LegalModal 
        isOpen={activeModal === "terms"} 
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
        content={`Terms & Conditions

1. Acceptance of Terms: By using Bharat AI, you agree to these terms.
2. Use License: You are granted a limited, personal use license for educational and agricultural reference.
3. Disclaimer: Bharat AI provides advice for educational purposes. Always consult local agricultural experts before applying chemical treatments.
4. AdSense: You agree to see advertisements served by Google AdSense which help keep this app free for farmers.`}
      />

      <LegalModal 
        isOpen={activeModal === "about"} 
        onClose={() => setActiveModal(null)}
        title="About Us"
        content={`About Bharat AI

Created by Jaswant, a Class 10 tech visionary from Rajasthan.
Bharat AI is a revolutionary offline-first application designed to empower farmers with expert agricultural knowledge without the need for high-speed internet.

Our Mission:
To bridge the digital divide between high-tech AI and the hard-working farmers of India.`}
      />
      
      {/* Anchor Ad Slot - Sticky to bottom */}
      <AdSlot type="anchor" />
    </>
  );
}
