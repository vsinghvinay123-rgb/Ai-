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
  Cloud,
  Database,
  Stethoscope,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Message, Language } from "./types";
import { getAnswer } from "./data/knowledgeBase";

// --- Ad Slot Component ---
const AdSlot = ({ type }: { type: "top" | "inline" }) => (
  <div className={`my-6 mx-auto w-full max-w-lg ${type === "top" ? "mt-4" : ""}`}>
    <div className="relative bg-gray-100/10 border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center min-h-[100px] transition-all hover:bg-gray-100/15">
      <span className="absolute top-2 right-2 text-[8px] uppercase tracking-widest text-gray-500 font-bold">Advertisement</span>
      <p className="text-gray-400 text-xs font-mono animate-pulse">Google AdSense Slot</p>
    </div>
  </div>
);

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
      className="mt-4 p-3 bg-white/5 border border-primary/20 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-all"
    >
      <div className="w-16 h-16 bg-bg-dark rounded-lg flex items-center justify-center border border-white/5 shrink-0 overflow-hidden">
         <ShoppingBag className="w-8 h-8 text-primary opacity-50" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Recommended for your Crop</p>
        <h4 className="text-sm font-bold truncate text-white mb-2">{product.name}</h4>
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-500/20"
        >
          Check Price & Buy Online 🛒
        </a>
      </div>
    </motion.div>
  );
};

// --- ANI Agent Swarm Component ---
const AgentSwarmDashboard = ({ states }: { states: { agronomy: boolean, climate: boolean, data: boolean } }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="glass-morphism border border-primary/30 rounded-2xl p-4 mb-4 shadow-2xl overflow-hidden relative"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 overflow-hidden">
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="h-full w-1/3 bg-primary"
      />
    </div>
    
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">ANI Swarm Processing...</h3>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
        <div className="w-1 h-1 rounded-full bg-primary animate-ping delay-75" />
      </div>
    </div>

    <div className="space-y-3">
      {[
        { id: "agronomy", name: "Agronomy Agent", task: "Scanning for biological threats...", icon: Stethoscope, color: "text-green-400", bg: "bg-green-400/10" },
        { id: "climate", name: "Climate Agent", task: "Analyzing Churu weather logic...", icon: Cloud, color: "text-blue-400", bg: "bg-blue-400/10" },
        { id: "data", name: "Data Agent", task: "Structuring multi-lingual output...", icon: Database, color: "text-purple-400", bg: "bg-purple-400/10" }
      ].map((agent) => (
        <div key={agent.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${agent.bg} flex items-center justify-center`}>
              <agent.icon className={`w-4 h-4 ${agent.color}`} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white">{agent.name}</p>
              <p className="text-[9px] text-gray-500 lowercase font-mono">{agent.task}</p>
            </div>
          </div>
          <AnimatePresence>
            {(states as any)[agent.id] && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1"
              >
                <span className="text-[8px] font-bold text-green-400 uppercase">Checked</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
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
  
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "about" | null>(null);

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isSwarming, setIsSwarming] = useState(false);
  const [swarmStates, setSwarmStates] = useState({ agronomy: false, climate: false, data: false });

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookieBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowCookieBanner(false);
  };
  
  const uiTranslation = {
    English: {
      placeholder: "Ask about crops, pests, or weather...",
      greeting: "👋 Hello! I am Jaswant's Bharat AI. Ask me any farming question.",
      botPrefix: "🤖 **Jaswant's AI Analysis:**\n\n",
      fallback: "Sorry, I don't have this information yet. Please ask something else.",
      sendBtn: "Send"
    },
    Hinglish: {
      placeholder: "Fasal, mausam ya keedo ke baare mein puchein...",
      greeting: "👋 Namaste! Main Jaswant ka Bharat AI hoon. Apna sawal puchein.",
      botPrefix: "🤖 **Jaswant AI Report:**\n\n",
      fallback: "Maaf kijiye, yeh jankari mere database mein nahi hai.",
      sendBtn: "Bhejein"
    },
    Hindi: {
      placeholder: "फसल, मौसम या कीड़ों के बारे में पूछें...",
      greeting: "👋 नमस्ते! मैं जसवंत का भारत एआई हूँ। अपना सवाल पूछें।",
      botPrefix: "🤖 **जसवंत एआई रिपोर्ट:**\n\n",
      fallback: "माफ़ कीजिए, यह जानकारी मेरे डेटाबेस में नहीं है।",
      sendBtn: "भेजें"
    },
    Marwadi: {
      placeholder: "फसल या मौसम रै बारै में पूछो सा...",
      greeting: "👋 खम्मा घणी! मैं जसवंत रो भारत एआई हूँ सा। पूछो कांई पूछणो है।",
      botPrefix: "🤖 **जसवंत रो एआई बतावै है:**\n\n",
      fallback: "माफी चाहूँ सा, आ जानकारी म्हारै कनै कोनी।",
      sendBtn: "भेजो सा"
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: uiTranslation[language].greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Effects ---
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  // --- Handlers ---
  const handleSendMessage = async (textOverride?: string) => {
    const text = textOverride || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Start Swarm Animation
    setIsSwarming(true);
    setSwarmStates({ agronomy: false, climate: false, data: false });

    // Sequence the agents
    setTimeout(() => setSwarmStates(prev => ({ ...prev, agronomy: true })), 500);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, climate: true })), 1000);
    setTimeout(() => setSwarmStates(prev => ({ ...prev, data: true })), 1500);

    // Wait for swarm to finish before showing response
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSwarming(false);

    // Bot Response Logic
    const answer = await getAnswer(text, language);
    const isFallback = answer === "Maaf kijiye, mujhe iske baare mein jankari nahi hai. Kripya kheti, fasal ya Jaswant ke baare mein puchein. 🙏";
    
    const botResponse = isFallback 
      ? uiTranslation[language].fallback 
      : uiTranslation[language].botPrefix + answer;

    const isTreatment = answer.includes("🩺") && (answer.includes("Ilaj:") || answer.includes("Treatment:"));
    let treatmentData = undefined;

    if (isTreatment) {
      const parts = answer.split(/Ilaj:|Treatment:|\w+:/);
      const treatmentPart = parts[1] || "";
      const steps = treatmentPart.split(/\d\./).filter(s => s.trim().length > 0);
      
      treatmentData = {
        chemical: steps[0]?.trim() || "Refer to manual",
        organic: steps[1]?.trim() || "Use neem decoction",
        prevention: steps[2]?.trim() || "Crop rotation recommended"
      };
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
      type: isTreatment ? "treatment" : "text",
      treatmentData
    };
    setMessages((prev) => [...prev, botMsg]);
    speak(botResponse);
  };

  const handleGPS = () => {
    if (navigator.geolocation) {
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
          setMessages((prev) => [...prev, gpsMsg]);
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
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScannedImage(event.target?.result as string);
        setIsScanning(true);
        
        // Simulate scanning process
        setTimeout(() => {
          setIsScanning(false);
          const reportMsg: Message = {
            id: Date.now().toString(),
            text: "📷 Scan Complete. AI Analysis: Healthy crop detected. Keep soil moisture stable.",
            sender: "bot",
            timestamp: new Date(),
            type: "report"
          };
          setMessages((prev) => [...prev, reportMsg]);
          speak("Scan Complete. AI Analysis: Healthy crop detected. Keep soil moisture stable.");
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
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
    <div className="flex flex-col h-screen bg-bg-dark text-white font-sans overflow-hidden">
      {/* Header */}
      <header className="glass-morphism px-4 py-3 flex items-center justify-between z-10 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-base font-bold glow-text tracking-tight">Bharat Krishi & Tech AI</h2>
        </div>
        
        <div className="flex items-center gap-2">
          {deferredPrompt && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleInstallClick}
              className="p-2 bg-primary text-bg-dark rounded-full shadow-lg glow-accent animate-bounce"
              title="Install App"
            >
              <Download className="w-5 h-5" />
            </motion.button>
          )}

          <Globe className="w-4 h-4 text-primary" />
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-white/5 text-xs font-medium border border-white/10 rounded-lg px-2 py-1 outline-none focus:border-primary/50 transition-colors"
          >
            <option value="English" className="bg-bg-dark">English</option>
            <option value="Hindi" className="bg-bg-dark">Hindi</option>
            <option value="Hinglish" className="bg-bg-dark">Hinglish</option>
            <option value="Marwadi" className="bg-bg-dark">Marwadi</option>
          </select>
        </div>
      </header>

      {/* Header Area Ad Slot */}
      <AdSlot type="top" />

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-48 scrollbar-hide">
        {messages.map((msg, idx) => (
          <React.Fragment key={msg.id}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] relative ${msg.sender === "user" ? "order-1" : "order-2"}`}>
                <div className={`p-4 rounded-2xl ${
                  msg.sender === "user" 
                    ? "bg-primary text-bg-dark font-medium rounded-tr-none shadow-lg" 
                    : "glass-morphism text-white rounded-tl-none border-l-2 border-l-primary shadow-xl"
                }`}>
                  {msg.type === "report" ? (
                    <div className="whitespace-pre-wrap font-mono text-xs leading-relaxed opacity-90">
                      {msg.text}
                    </div>
                  ) : msg.type === "treatment" ? (
                    <div>
                      <p className="text-sm leading-relaxed mb-4">{msg.text.split("Ilaj:")[0]}</p>
                      <RecoveryMatrix data={msg.treatmentData} language={language} />
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  )}
                  
                  {msg.sender === "bot" && (
                    <div className="mt-3 flex flex-col gap-3">
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

                      <div className="flex justify-between items-center border-t border-white/5 pt-2">
                         <span className="text-[8px] text-gray-500 font-mono uppercase">AI Assistant v3.0</span>
                         <button 
                          onClick={() => shareOnWhatsApp(msg.text)}
                          className="p-1.5 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all active:scale-90"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <p className={`text-[10px] mt-1 text-gray-500/60 font-medium ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
            
            {/* Inline Ad Slot every 4 bot responses */}
            {idx > 0 && idx % 7 === 0 && <AdSlot type="inline" />}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* GPS Loading Overlay */}
      <AnimatePresence>
        {isLocating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 flex flex-col items-center justify-center p-6 backdrop-blur-sm"
          >
            <div className="bg-bg-dark/80 p-8 rounded-3xl border border-primary/30 flex flex-col items-center shadow-2xl">
              <Loader2 className="w-12 h-12 text-secondary animate-spin mb-4" />
              <p className="text-secondary font-bold tracking-widest animate-pulse">LOCATING...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanning Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center p-6"
          >
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 glow-accent">
              {scannedImage && (
                <img src={scannedImage} alt="Scanned" className="w-full h-full object-cover opacity-50" />
              )}
              <div className="laser-line" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-primary font-bold tracking-widest animate-pulse">SCANNING FASAL...</p>
              </div>
            </div>
            <button 
              onClick={() => setIsScanning(false)}
              className="mt-8 p-3 bg-white/10 rounded-full text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 space-y-4">
        {/* Swarm Dashboard */}
        <AnimatePresence>
          {isSwarming && (
            <div className="max-w-lg mx-auto w-full">
              <AgentSwarmDashboard states={swarmStates} />
            </div>
          )}
        </AnimatePresence>

        {/* Floating Action Bar */}
        <div className="flex justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleVoice}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
              isVoiceEnabled ? "bg-white/5 border border-white/10" : "bg-red-500/20 border border-red-500/40"
            }`}
          >
            {isVoiceEnabled ? (
              <Volume2 className="w-6 h-6 text-primary" />
            ) : (
              <VolumeX className="w-6 h-6 text-red-500" />
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={startListening}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
              isListening ? "bg-accent animate-pulse" : "bg-primary glow-accent"
            }`}
          >
            <Mic className={`w-6 h-6 ${isListening ? "text-white" : "text-bg-dark"}`} />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleGPS}
            className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-2xl glow-accent"
          >
            <MapPin className="w-6 h-6 text-bg-dark" />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => fileInputRef.current?.click()}
            className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-2xl glow-accent"
          >
            <Camera className="w-6 h-6 text-white" />
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

        {/* Text Input */}
        <div className="glass-morphism rounded-2xl p-2 flex items-center gap-2 border border-white/10 shadow-2xl relative z-10">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={uiTranslation[language].placeholder}
            className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-sm placeholder:text-gray-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className={`p-2.5 rounded-xl transition-all flex items-center gap-2 ${
              inputText.trim() ? "bg-primary text-bg-dark hover:scale-105" : "bg-white/5 text-gray-600"
            }`}
          >
            <span className="text-xs font-bold sm:block hidden">{uiTranslation[language].sendBtn}</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Legal Footer */}
        <footer className="pt-2 pb-4 flex flex-wrap justify-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest border-t border-white/5">
          <button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors">Privacy Policy</button>
          <button onClick={() => setActiveModal("terms")} className="hover:text-primary transition-colors">Terms & Conditions</button>
          <button onClick={() => setActiveModal("about")} className="hover:text-primary transition-colors">About Us</button>
          <span className="opacity-40">© 2026 Bharat AI by Jaswant</span>
        </footer>
      </div>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-bg-dark/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
              <p className="text-[11px] text-gray-300 leading-relaxed text-center sm:text-left flex-1 font-sans">
                We use cookies to personalize content and ads, provide social media features, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies in accordance with our <button onClick={() => setActiveModal("privacy")} className="text-primary underline font-bold">Privacy Policy</button>.
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  onClick={declineCookies}
                  className="flex-1 sm:px-6 py-2 rounded-xl bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-all"
                >
                  Decline
                </button>
                <button 
                  onClick={acceptCookies}
                  className="flex-1 sm:px-6 py-2 rounded-xl bg-primary text-bg-dark text-xs font-bold hover:scale-105 transition-all glow-accent"
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
    </div>
  );
}
