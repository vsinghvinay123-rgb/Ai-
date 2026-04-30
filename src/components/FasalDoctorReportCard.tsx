import React, { useRef } from "react";
import { motion } from "motion/react";
import { Download, CheckCircle2, AlertTriangle, Activity } from "lucide-react";
import { Language } from "../types";

// Dynamic translation for PDF card
const reportTranslation = {
  English: { download: "Download PDF Report", disease: "Disease Detected", health: "Crop Health", action: "Urgent Action Required" },
  Hindi: { download: "पीडीएफ रिपोर्ट डाउनलोड करें", disease: "बीमारी का पता चला", health: "फसल का स्वास्थ्य", action: "तत्काल कार्रवाई की आवश्यकता" },
  Hinglish: { download: "PDF Report Download Karein", disease: "Bimari ka Pata Chala", health: "Fasal Health", action: "Urgent Action Jaruri Hai" },
  Marwadi: { download: "पीडीएफ रिपोर्ट डाउनलोड करो सा", disease: "बीमारी रो पातो लाग्यो", health: "फसल रो स्वास्थ", action: "बैगा ही काम करो सा" }
};

interface Props {
  reportId: string;
  content: string;
  language: Language;
}

const FasalDoctorReportCard = ({ reportId, content, language }: Props) => {
  const reportRef = useRef<HTMLDivElement>(null);
  const t = reportTranslation[language] || reportTranslation.English;

  const statusMatch = content.match(/Status:\s*([A-Z]+)/i);
  const status = statusMatch ? statusMatch[1].toUpperCase() : "NORMAL";
  
  const healthMatch = content.match(/Health:\s*(\d+)%/i);
  const healthPercentage = healthMatch ? parseInt(healthMatch[1]) : 100;

  const downloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;
    
    // Lazy load html2pdf ONLY when button is clicked
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        margin: 10,
        filename: `BharatAI_Report_${reportId}.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
      };
      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF Generation failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      <motion.div 
        ref={reportRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white text-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4">
          <div className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest border ${
            status === 'CRITICAL' ? 'bg-red-50 text-red-600 border-red-100' : 
            status === 'WARNING' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
            'bg-emerald-50 text-emerald-600 border-emerald-100'
          }`}>
            {status}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100 shadow-sm">
            <Activity className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-tighter">Bharat AI Diagnostic</h3>
            <p className="text-[10px] text-gray-400 font-mono">ID: {reportId.slice(0,8).toUpperCase()}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-bold uppercase">{t.health}</span>
            <span className="font-black text-emerald-600">{healthPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${healthPercentage}%` }}
              className={`h-full ${healthPercentage < 40 ? 'bg-red-500' : healthPercentage < 70 ? 'bg-orange-500' : 'bg-emerald-500'}`}
            />
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
           <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1" />
              <div className="text-xs leading-relaxed text-gray-700">
                {content.split('\n').map((line, i) => (
                  <p key={i} className={line.startsWith('#') || line.startsWith('**') ? 'font-bold text-gray-900 mb-1' : 'mb-1'}>
                    {line.replace(/\*+/g, '')}
                  </p>
                ))}
              </div>
           </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-50">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Verified by Fasal Engine v4</span>
           </div>
           <p className="text-[9px] text-gray-400 font-mono italic">Signature: JASWANT_RAJH</p>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={downloadPDF}
        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-gray-800 transition-all border-b-4 border-gray-700 active:border-b-0"
      >
        <Download className="w-5 h-5 text-emerald-400" />
        {t.download}
      </motion.button>
    </div>
  );
};

export default FasalDoctorReportCard;
