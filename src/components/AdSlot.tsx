import React from "react";
import AdSenseBanner from "./AdSenseBanner";

interface Props {
  type: "top" | "inline" | "anchor";
}

const AdSlot = ({ type }: Props) => (
  <div className={`mx-auto w-full max-w-lg ${
    type === "top" ? "py-2 mb-1" : 
    type === "anchor" ? "fixed bottom-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-md border-t border-gray-100" : 
    "py-8 my-4"
  }`}>
    <div className={`relative bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all hover:bg-white ${
      type === "top" ? "h-[70px]" : 
      type === "anchor" ? "min-h-[60px]" : 
      "min-h-[120px]"
    }`}>
      <span className="absolute top-1 right-2 text-[7px] uppercase tracking-widest text-gray-300 font-bold">Advertisement</span>
      <AdSenseBanner format={type === "top" || type === "anchor" ? "horizontal" : "auto"} />
    </div>
  </div>
);

export default AdSlot;
