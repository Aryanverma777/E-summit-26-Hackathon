'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ExternalLink, Calendar } from 'lucide-react';

const alerts = [
  {
    title: "New 'Electricity Bill' SMS Scam Circulating",
    category: "Government Warning",
    date: "Oct 24, 2023",
    description: "Fraudsters are sending fake disconnection notices to trick users into downloading malicious APK files.",
    severity: "High"
  },
  {
    title: "Fake AI-Generated Investment Ads on Social Media",
    category: "Trending Fraud",
    date: "Oct 22, 2023",
    description: "Deepfake videos of celebrities promoting high-return crypto schemes are being reported across platforms.",
    severity: "Critical"
  },
  {
    title: "UPI 'Refund' Request Scam Targeting E-commerce Users",
    category: "Recent Alert",
    date: "Oct 20, 2023",
    description: "Scammers posing as customer support are sending 'Collect' requests disguised as refunds.",
    severity: "Medium"
  }
];

export const FraudAlerts = () => {
  return (
    <section id="alerts" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Latest <span className="text-secondary">Fraud Alerts</span></h2>
            <p className="text-gray-400">Stay updated with the most recent threats identified by our security team.</p>
          </div>
          <button className="px-6 py-3 border border-glass-border rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
            View All Alerts <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 border-t-4 border-t-secondary/50 hover:border-t-secondary transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                  {alert.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                  alert.severity === 'Critical' ? 'bg-red-500/20 text-red-500' : 
                  alert.severity === 'High' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'
                }`}>
                  {alert.severity}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{alert.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">{alert.description}</p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Calendar className="w-3 h-3" /> {alert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
