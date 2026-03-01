'use client';

import React from 'react';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-glass-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LOCKHIVE
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Empowering citizens with the knowledge and tools to navigate the digital world safely. Stay aware, stay secure.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#scams" className="hover:text-primary transition-colors">Scam Categories</a></li>
              <li><a href="#simulation" className="hover:text-primary transition-colors">Simulation Lab</a></li>
              <li><a href="#toolkit" className="hover:text-primary transition-colors">Prevention Toolkit</a></li>
              <li><a href="#alerts" className="hover:text-primary transition-colors">Latest Alerts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Cyber Crime Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} LOCKHIVE Cyber Security Awareness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
