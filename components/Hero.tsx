'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Live Threat Monitoring Active</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Empowering <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Secure Digital Lives
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn about cyber scams, fraud techniques, and protect yourself with real-world awareness tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-primary text-white rounded-xl font-bold overflow-hidden transition-all hover:scale-105 neon-glow-purple">
              <span className="relative z-10 flex items-center gap-2">
                Explore Scams <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-glass border border-glass-border text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Report a Fraud
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <ShieldCheck className="w-full h-full text-primary relative z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
