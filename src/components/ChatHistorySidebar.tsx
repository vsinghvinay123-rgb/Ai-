import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  History, 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Activity,
  Folder,
  User,
  Cpu,
  Book,
  Crop
} from "lucide-react";
import { Chat, Topic } from "../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onDeleteChat: (id: string) => void;
  onRenameChat: (id: string, newTitle: string) => void;
}

const ChatHistorySidebar = ({ 
  isOpen, 
  onClose, 
  chats, 
  activeChatId, 
  onSelectChat, 
  onNewChat,
  onDeleteChat,
  onRenameChat
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Topic | "All">("All");

  const getTopicIcon = (topic: Topic) => {
    switch (topic) {
      case "Agriculture": return <Crop className="w-4 h-4 text-emerald-600" />;
      case "Finance": return <Folder className="w-4 h-4 text-blue-600" />;
      case "Tech": return <Cpu className="w-4 h-4 text-purple-600" />;
      case "Personal": return <User className="w-4 h-4 text-orange-600" />;
      default: return <Book className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredChats = chats.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         chat.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || chat.topic === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const groupedChats = {
    "Today": filteredChats.filter(c => new Date(c.timestamp).toDateString() === new Date().toDateString()),
    "Yesterday": filteredChats.filter(c => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return new Date(c.timestamp).toDateString() === yesterday.toDateString();
    }),
    "Older": filteredChats.filter(c => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return new Date(c.timestamp) < yesterday;
    })
  };

  return (
    <>
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
          </motion.aside>
        </>
      )}
    </>
  );
};

export default ChatHistorySidebar;
