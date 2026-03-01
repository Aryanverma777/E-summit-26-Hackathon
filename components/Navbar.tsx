'use client';

import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-glass-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LOCKHIVE
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Scams', 'Simulation', 'Toolkit', 'Alerts', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary/20 border border-primary/50 text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 neon-glow-purple">
                Report Fraud
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-glass-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Scams', 'Simulation', 'Toolkit', 'Alerts', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
