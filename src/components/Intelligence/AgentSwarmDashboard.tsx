import React from "react";
import { motion } from "motion/react";
import { Activity, Stethoscope, Cloud, Database, AlertCircle } from "lucide-react";

interface Props {
  states: any;
}

const AgentSwarmDashboard = ({ states }: Props) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="bg-white border border-gray-100 rounded-3xl p-6 mb-6 shadow-xl overflow-hidden relative"
  >
    {/* Animated scanning background */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-30" />
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-50 overflow-hidden">
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="h-full w-1/3 bg-emerald-600 shadow-[0_0_15px_rgba(5,150,105,0.5)]"
      />
    </div>
    
    <div className="flex justify-between items-center mb-6 relative z-10">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600">ANI Swarm Control Panel</h3>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping delay-100" />
      </div>
    </div>

    <div className="space-y-5 relative z-10">
      {[
        { id: "agronomy", name: "Agronomy Expert", task: "Biological Threat Audit", icon: Stethoscope, color: "text-emerald-600", bg: "bg-emerald-50" },
        { id: "climate", name: "Climate Analyst", task: "Met-Data Synthesis", icon: Cloud, color: "text-blue-600", bg: "bg-blue-50" },
        { id: "data", name: "Logic Structurer", task: "Multi-modal Formatting", icon: Database, color: "text-purple-600", bg: "bg-purple-50" }
      ].map((agent) => {
        const state = states[agent.id] || { progress: 0, status: "idle", conflict: false };
        return (
          <div key={agent.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${agent.bg} flex items-center justify-center border border-gray-100 shadow-sm`}>
                  <agent.icon className={`w-5 h-5 ${agent.color} ${state.progress > 0 && state.progress < 100 ? "animate-bounce" : ""}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-black text-gray-900 uppercase tracking-tight">{agent.name}</p>
                    {state.conflict && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1 bg-red-50 px-1.5 py-0.5 rounded border border-red-100"
                      >
                        <AlertCircle className="w-2.5 h-2.5 text-red-500" />
                        <span className="text-[7px] font-bold text-red-500 uppercase">Conflict Resolved</span>
                      </motion.div>
                    )}
                  </div>
                  <p className="text-[9px] text-gray-400 font-mono italic">{agent.task}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[10px] font-black ${state.progress === 100 ? "text-emerald-600" : "text-emerald-600"}`}>
                  {state.progress}%
                </p>
                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">{state.status}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${state.progress}%` }}
                className={`h-full ${state.conflict ? "bg-orange-500" : state.progress === 100 ? "bg-emerald-500" : "bg-emerald-600"} relative shadow-sm`}
              />
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default AgentSwarmDashboard;
