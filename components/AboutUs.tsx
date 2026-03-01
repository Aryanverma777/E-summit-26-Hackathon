'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users2, ShieldCheck } from 'lucide-react';

const team = [
  { name: "Dr. Aryan Sharma", role: "Cyber Security Lead", icon: ShieldCheck },
  { name: "Priya Verma", role: "Awareness Strategist", icon: Users2 },
  { name: "Vikram Singh", role: "Technical Architect", icon: Target }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              To create a fraud-free digital India through awareness and technology. We believe that the strongest firewall is an informed user. LOCKHIVE is dedicated to bridging the gap between complex cyber threats and everyday digital safety.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Vision</h4>
                  <p className="text-gray-500">A secure digital ecosystem where every citizen can transact and communicate without fear of exploitation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary h-fit">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Goal</h4>
                  <p className="text-gray-500">To reduce digital fraud incidents by 50% through proactive education and real-time threat intelligence.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 flex items-center gap-6 hover:bg-white/5 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <member.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h4>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
