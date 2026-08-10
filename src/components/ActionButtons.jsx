import React from 'react';

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
      <button className="relative inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_35%_50%,rgba(6,182,212,0.25)_0%,rgba(6,182,212,0.03)_60%,transparent_100%)] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-500/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        <span>Explore the Platform</span>
        <svg 
          className="w-4 h-4 text-white ml-0.5 transform transition-transform duration-200" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          viewBox="0 0 24 24"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <button className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.02]">
        View Products
      </button>
      
    </div>
  );
}