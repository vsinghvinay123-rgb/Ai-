import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language } from "../../types";

interface Props {
  data: any;
  language: Language;
}

const RecoveryMatrix = ({ data, language }: Props) => {
  const [activeTab, setActiveTab] = useState<"chemical" | "organic" | "prevention">("chemical");

  const isIndic = language === "Hindi" || language === "Marwadi";

  const tabs = {
    chemical: { label: isIndic ? "💊 रसायनिक" : "💊 Chemical", content: data.chemical },
    organic: { label: isIndic ? "🌿 जैविक/देशी" : "🌿 Organic/Desi", content: data.organic },
    prevention: { label: isIndic ? "🛡️ बचाव" : "🛡️ Prevention", content: data.prevention }
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
                ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20" 
                : "bg-gray-50 text-gray-400 border-gray-100 hover:border-gray-200"
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
           className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
        >
          <p className="text-sm leading-relaxed text-gray-700">
            {tabs[activeTab].content.split("'").map((part: string, i: number) => {
              // Highlight dosages and chemicals in single quotes
              if (i % 2 === 1) {
                return (
                  <span key={i} className="inline-block px-2 py-0.5 mx-1 bg-emerald-50 text-emerald-700 font-mono text-[10px] rounded-lg border border-emerald-100 font-bold">
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="space-y-4 pt-4 border-t border-gray-50">
        <h4 className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">Recovery Timeline</h4>
        <div className="relative flex justify-between">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100" />
          {[
            { step: 1, label: "Immediate Action", detail: "First spray" },
            { step: 2, label: "Observation", detail: "3-5 days wait" },
            { step: 3, label: "Recovery Boost", detail: "NPK Dose" }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-2 group w-1/3">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all ${
                  idx === 0 ? "bg-emerald-600 border-emerald-50 text-white shadow-lg shadow-emerald-600/20" : "bg-white border-gray-100 text-gray-400"
                }`}
              >
                {item.step}
              </motion.div>
              <div className="text-center">
                 <p className="text-[9px] font-black text-gray-900 uppercase leading-none mb-1">{item.label}</p>
                 <p className="text-[8px] text-gray-400 font-bold">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RecoveryMatrix;
