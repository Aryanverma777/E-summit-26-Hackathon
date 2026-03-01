'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldAlert, Clock, PhoneCall } from 'lucide-react';

const stats = [
  {
    label: 'Awareness Improvement',
    value: '98%',
    icon: Users,
    color: 'text-primary',
  },
  {
    label: 'Reported Cases',
    value: '5000+',
    icon: ShieldAlert,
    color: 'text-secondary',
  },
  {
    label: 'Fraud Alert System',
    value: '24/7',
    icon: Clock,
    color: 'text-accent',
  },
  {
    label: 'Emergency Helpline',
    value: '1930',
    icon: PhoneCall,
    color: 'text-red-500',
  },
];

export const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-500"
            >
              <div className={stat.color}>
                <stat.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
