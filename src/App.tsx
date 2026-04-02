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
  VolumeX
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Message, Language } from "./types";
import { getAnswer } from "./data/knowledgeBase";

// --- Main Component ---
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! Main Bharat AI hoon. Aaj main aapki kheti mein kaise madad kar sakta hoon?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState<Language>("English");
  const [isScanning, setIsScanning] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [scannedImage, setScannedImage] = useState<string | null>(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  
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
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      
      // Try to find a Hindi voice if possible
      const hindiVoice = voices.find(v => v.lang.includes("hi"));
      if (hindiVoice) utterance.voice = hindiVoice;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // Toggle voice and stop speaking if muted
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

    // Bot Response Logic
    const answer = await getAnswer(text);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: answer,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
    speak(answer);
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
        
        <div className="relative">
          <button 
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            {language}
            <ChevronDown className="w-3 h-3" />
          </button>
          
          <AnimatePresence>
            {showLanguageMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-32 glass-morphism rounded-xl overflow-hidden shadow-2xl z-20"
              >
                {(["English", "Hindi", "Hinglish", "Marwadi"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors ${language === lang ? 'text-primary font-bold' : 'text-gray-300'}`}
                  >
                    {lang}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-32 scrollbar-hide">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] relative ${msg.sender === "user" ? "order-1" : "order-2"}`}>
              <div className={`p-4 rounded-2xl ${
                msg.sender === "user" 
                  ? "bg-primary text-bg-dark font-medium rounded-tr-none" 
                  : "glass-morphism text-white rounded-tl-none border-l-2 border-l-primary"
              }`}>
                {msg.type === "report" ? (
                  <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {msg.text}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                )}
                
                {msg.sender === "bot" && (
                  <div className="mt-3 flex justify-end">
                    <button 
                      onClick={() => shareOnWhatsApp(msg.text)}
                      className="p-1.5 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
              <p className={`text-[10px] mt-1 text-gray-500 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
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
        <div className="glass-morphism rounded-2xl p-2 flex items-center gap-2 border border-white/10">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Kuch puchiye (Ask something)..."
            className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-sm placeholder:text-gray-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className={`p-2.5 rounded-xl transition-all ${
              inputText.trim() ? "bg-primary text-bg-dark" : "bg-white/5 text-gray-600"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
