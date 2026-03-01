'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ShieldCheck, Search, BrainCircuit, MousePointer2 } from 'lucide-react';

const labs = [
  {
    title: "Email Detection Demo",
    description: "Can you spot the phishing attempt? Analyze headers and links in real-time.",
    icon: Search,
    tag: "Interactive"
  },
  {
    title: "Phishing Simulator",
    description: "Experience a simulated attack to understand how hackers manipulate emotions.",
    icon: MousePointer2,
    tag: "Simulation"
  },
  {
    title: "Awareness Quiz",
    description: "Test your knowledge on the latest cyber threats and earn your safety badge.",
    icon: ShieldCheck,
    tag: "Assessment"
  },
  {
    title: "AI Fraud Assistant",
    description: "Our AI analyzes suspicious messages to determine the probability of fraud.",
    icon: BrainCircuit,
    tag: "AI Powered"
  }
];

export const SimulationLab = () => {
  return (
    <section id="simulation" className="py-24 relative bg-primary/5">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Beaker className="w-4 h-4" /> Experimental Lab
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Scam <span className="text-secondary">Simulation</span> Lab
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Step into our controlled environment where you can experience and identify cyber attacks without the risk. Our interactive modules prepare you for real-world scenarios.
              </p>
              <button className="px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/80 transition-all neon-glow-purple">
                Enter the Lab
              </button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {labs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 hover:bg-white/5 transition-all group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <lab.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">
                    {lab.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{lab.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {lab.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
