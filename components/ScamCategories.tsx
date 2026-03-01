'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Mail, 
  Key, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Fingerprint, 
  CreditCard,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    title: "UPI Fraud",
    description: "Fake payment requests and QR code scams targeting digital wallets.",
    icon: Smartphone,
    color: "text-purple-400",
    border: "hover:border-purple-500/50"
  },
  {
    title: "Phishing Attacks",
    description: "Deceptive emails and websites designed to steal sensitive credentials.",
    icon: Mail,
    color: "text-pink-400",
    border: "hover:border-pink-500/50"
  },
  {
    title: "OTP Scams",
    description: "Social engineering tactics to trick users into sharing one-time passwords.",
    icon: Key,
    color: "text-blue-400",
    border: "hover:border-blue-500/50"
  },
  {
    title: "Fake Job Offers",
    description: "Fraudulent recruitment schemes promising high pay for minimal work.",
    icon: Briefcase,
    color: "text-emerald-400",
    border: "hover:border-emerald-500/50"
  },
  {
    title: "Investment & Crypto",
    description: "High-return promises in fake trading platforms and crypto tokens.",
    icon: TrendingUp,
    color: "text-yellow-400",
    border: "hover:border-yellow-500/50"
  },
  {
    title: "Social Media Fraud",
    description: "Impersonation, account takeovers, and romance-based scams.",
    icon: Users,
    color: "text-indigo-400",
    border: "hover:border-indigo-500/50"
  },
  {
    title: "Identity Theft",
    description: "Stealing personal data to commit fraud or open unauthorized accounts.",
    icon: Fingerprint,
    color: "text-red-400",
    border: "hover:border-red-500/50"
  },
  {
    title: "Loan App Fraud",
    description: "Predatory lending apps with hidden charges and harassment tactics.",
    icon: CreditCard,
    color: "text-cyan-400",
    border: "hover:border-cyan-400/50"
  }
];

export const ScamCategories = () => {
  return (
    <section id="scams" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Scam <span className="text-primary">Categories</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Identify the most common digital threats and learn how to spot them before they strike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass-panel p-6 group transition-all duration-300 ${category.border} hover:bg-white/5`}
            >
              <div className={`${category.color} mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
