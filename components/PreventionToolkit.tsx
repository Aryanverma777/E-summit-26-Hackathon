'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Globe, 
  MailCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const tools = [
  {
    title: "Password Strength Checker",
    description: "Analyze your password's entropy and crack-time against brute-force attacks.",
    icon: Lock,
    color: "text-purple-400",
  },
  {
    title: "URL Scanner",
    description: "Instantly verify if a link is safe or leads to a known phishing domain.",
    icon: Globe,
    color: "text-blue-400",
  },
  {
    title: "Email Phishing Detector",
    description: "Upload suspicious email headers to identify spoofing and malicious origins.",
    icon: MailCheck,
    color: "text-pink-400",
  },
  {
    title: "Cyber Hygiene Checklist",
    description: "A step-by-step guide to securing your digital footprint and accounts.",
    icon: CheckCircle2,
    color: "text-emerald-400",
  }
];

export const PreventionToolkit = () => {
  return (
    <section id="toolkit" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6"
          >
            <ShieldCheck className="w-4 h-4" /> Prevention is Better Than Cure
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prevention <span className="text-primary">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Equip yourself with our suite of security tools designed to keep you one step ahead of cyber criminals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 group hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <tool.icon className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className={`${tool.color} mb-6`}>
                  <tool.icon className="w-12 h-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  {tool.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Launch Tool <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
