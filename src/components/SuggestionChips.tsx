import React from "react";
import { motion } from "motion/react";

interface Props {
  onChipClick: (text: string) => void;
}

const SuggestionChips = ({ onChipClick }: Props) => {
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

export default SuggestionChips;
