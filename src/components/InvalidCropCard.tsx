import React from "react";
import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

interface Props {
  content: string;
}

const InvalidCropCard = ({ content }: Props) => (
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

export default InvalidCropCard;
