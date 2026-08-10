import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import OmiLogo from '../assets/OmiNext0Logo.png';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 pt-8 pb-5 bg-transparent z-30 pointer-events-auto">
      <div 
        className="flex items-center space-x-3 cursor-pointer group"
        onClick={() => navigate('/')} >
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-500/30 transition-all"></div>
          
          <img 
        src={OmiLogo} 
        alt="OmniNext Logo" 
        className="w-full h-full relative z-10 object-contain select-none mix-blend-screen"/>
        
        </div>
        <div className="flex items-baseline font-sans tracking-wide">
          <span className="text-white font-bold text-xl">Omni</span>
          <span className="text-blue-500 font-semibold text-xl ml-0.5">Next</span>
          <span className="text-teal-400 font-medium text-xl ml-0.5">Tech</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-sm tracking-wide text-gray-200 font-semibold">
        <a href="#home" className="hover:text-white transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all">Home</a>
        <a href="#products" className="hover:text-white transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all">Products</a>
        <a href="#why-omni" className="hover:text-white transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all">Why Omni</a>
        <a href="#voice-playground" className="hover:text-white transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all">Voice Playground</a>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer"
        >
          <LogIn size={16} />
          <span>Login</span>
        </button>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm px-6 py-2.5 rounded-full flex items-center space-x-2 transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] cursor-pointer transform hover:-translate-y-0.5">
          <span>View Products</span>
          <span className="text-lg font-light leading-none">→</span>
        </button>
      </div>
    </nav>
  );
}