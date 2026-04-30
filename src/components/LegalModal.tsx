import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const LegalModal = ({ isOpen, onClose, title, content }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl relative z-10"
          >
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
                {content}
              </pre>
            </div>
            <div className="px-8 py-4 bg-gray-50 flex justify-end">
               <button 
                 onClick={onClose}
                 className="px-6 py-2 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-600/20"
               >
                 Close Logic
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
