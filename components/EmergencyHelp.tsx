'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldAlert, Landmark, FileText, AlertCircle } from 'lucide-react';

export const EmergencyHelp = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-500/5" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel border-red-500/30 bg-red-500/5 p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/20 rounded-full blur-[100px]" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-red-500 font-bold mb-6 animate-pulse">
                <AlertCircle className="w-6 h-6" />
                <span className="uppercase tracking-[0.2em]">Emergency Protocol</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                BEING SCAMMED <br />
                <span className="text-red-500">RIGHT NOW?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Every second counts. Follow these steps immediately to minimize damage and secure your assets.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:1930" 
                  className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                  <Phone className="w-6 h-6" /> Call 1930
                </a>
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10">
                  Report to Cyber Portal
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { icon: Phone, title: "Call 1930", desc: "National Cyber Crime Helpline (India)", color: "text-red-500" },
                { icon: Landmark, title: "Block Bank Card", desc: "Call your bank or use mobile app instantly", color: "text-blue-400" },
                { icon: ShieldAlert, title: "Cyber Portal", desc: "File a complaint at cybercrime.gov.in", color: "text-purple-400" },
                { icon: FileText, title: "Save Evidence", desc: "Take screenshots of chats and transactions", color: "text-emerald-400" }
              ].map((step, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-red-500/50 transition-all">
                  <step.icon className={`w-8 h-8 ${step.color} mb-4`} />
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
