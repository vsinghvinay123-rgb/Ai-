import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
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
// --- Lazy Loaded Components ---
const InvalidCropCard = lazy(() => import("./components/InvalidCropCard"));
const FasalDoctorReportCard = lazy(() => import("./components/FasalDoctorReportCard"));
const AgriCalculatorCard = lazy(() => import("./components/AgriCalculatorCard"));
const SuggestionChips = lazy(() => import("./components/SuggestionChips"));
const AffiliateProductCard = lazy(() => import("./components/AffiliateProductCard"));
const ChatHistorySidebar = lazy(() => import("./components/ChatHistorySidebar"));
const AdSlot = lazy(() => import("./components/AdSlot"));
const AgentSwarmDashboard = lazy(() => import("./components/Intelligence/AgentSwarmDashboard"));
const RecoveryMatrix = lazy(() => import("./components/Intelligence/RecoveryMatrix"));
const LegalModal = lazy(() => import("./components/LegalModal"));

// --- Loading Fallback ---
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
  </div>
);

import { getCropDiagnosis } from "./services/geminiService";

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
      <Suspense fallback={null}>
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
      </Suspense>

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
      <Suspense fallback={null}>
        <AdSlot type="top" />
      </Suspense>

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
                  <Suspense fallback={<LoadingFallback />}>
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
                  </Suspense>
                  
                  {msg.sender === "bot" && (
                    <div className="mt-4 flex flex-col gap-4">
                      {/* Affiliate Card Injection */}
                      {["spray", "urea", "npk", "tractor", "rotavator", "tools"].some(keyword => 
                        msg.text.toLowerCase().includes(keyword)
                      ) && (
                        <Suspense fallback={null}>
                          <AffiliateProductCard 
                            keyword={["spray", "urea", "npk", "tractor", "rotavator", "tools"].find(keyword => 
                              msg.text.toLowerCase().includes(keyword)
                            ) || "tools"} 
                          />
                        </Suspense>
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
        <Suspense fallback={null}>
          <SuggestionChips onChipClick={(text) => {
            setInputText(text);
            handleSendMessage(text);
          }} />
        </Suspense>

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

      <Suspense fallback={null}>
        {isSwarming && (
          <div className="fixed inset-0 z-50 pointer-events-none p-4 flex flex-col items-center justify-end pb-[200px]">
            <div className="pointer-events-auto w-full max-w-lg">
              <AgentSwarmDashboard states={swarmStates} />
            </div>
          </div>
        )}
      </Suspense>

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
      <Suspense fallback={null}>
        <LegalModal 
          isOpen={activeModal === "privacy"} 
          onClose={() => setActiveModal(null)}
          title="Privacy Policy"
          content={`Privacy Policy for Bharat AI
...`}
        />

        <LegalModal 
          isOpen={activeModal === "terms"} 
          onClose={() => setActiveModal(null)}
          title="Terms & Conditions"
          content={`Terms & Conditions
...`}
        />

        <LegalModal 
          isOpen={activeModal === "about"} 
          onClose={() => setActiveModal(null)}
          title="About Us"
          content={`About Bharat AI
...`}
        />
      </Suspense>
      
      {/* Anchor Ad Slot - Sticky to bottom */}
      <Suspense fallback={null}>
        <AdSlot type="anchor" />
      </Suspense>
    </>
  );
}
