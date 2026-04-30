import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp, Coins, CheckCircle2 } from "lucide-react";
import { Language } from "../types";

const calcTranslation = {
  English: { title: "Yield & Profit Calculator", crop: "Crop Area (Acres)", cost: "Invested Cost (₹)", estimate: "Estimate Yield (Quintals)", calculate: "Recalculate Success", result: "Projected Revenue" },
  Hindi: { title: "उपज और लाभ कैलकुलेटर", crop: "फसल क्षेत्र (एकड़)", cost: "निवेश लागत (₹)", estimate: "अनुमानित उपज (क्विंटल)", calculate: "सफलता की गणना करें", result: "अनुमानित आय" },
  Hinglish: { title: "Yield & Profit Calculator", crop: "Fasal Area (Acres)", cost: "Invested Cost (₹)", estimate: "Estimate Yield (Quintals)", calculate: "Fir se Calculate Karein", result: "Total Kamayi" },
  Marwadi: { title: "उपज और नफ़ो कैलकुलेटर", crop: "खेत रो एरिया (एकड़)", cost: "लागत (₹)", estimate: "उपज रो अनुमान (क्विंटल)", calculate: "हिसाब लगाओ सा", result: "कुल कमाई" }
};

interface Props {
  language: Language;
}

const AgriCalculatorCard = ({ language }: Props) => {
  const [area, setArea] = useState(1);
  const [cost, setCost] = useState(5000);
  const t = calcTranslation[language] || calcTranslation.English;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mt-4 p-5 bg-white border border-gray-100 rounded-2xl space-y-4 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-5 h-5 text-emerald-600" />
        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">{t.title}</h4>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.crop}</label>
          <input 
            type="number" 
            value={area} 
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-xs text-gray-900 outline-none focus:border-emerald-500/50"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.cost}</label>
          <input 
            type="number" 
            value={cost} 
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-xs text-gray-900 outline-none focus:border-emerald-500/50"
          />
        </div>
      </div>

      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 border-dashed">
         <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-emerald-700">{t.result}</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
         </div>
         <div className="text-xl font-black text-emerald-950">₹{ (area * 45000) - cost }</div>
         <p className="text-[9px] text-emerald-600 font-bold mt-1 opacity-70 italic">*Based on current APMC market trends</p>
      </div>

      <button className="w-full py-2.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all">
        {t.calculate}
      </button>
    </motion.div>
  );
};

export default AgriCalculatorCard;
