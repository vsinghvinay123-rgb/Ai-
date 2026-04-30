import React from "react";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

interface Props {
  keyword: string;
}

const AffiliateProductCard = ({ keyword }: Props) => {
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

export default AffiliateProductCard;
