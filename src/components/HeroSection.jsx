import React from 'react';
import roiSwirlBg from '../assets/roi-swirl-bg.png';
import elevenLabsLogo from '../assets/ElevenLabs_Logo_03.svg.webp';
import twilioLogo from '../assets/Twilio-logo-red.svg.webp';
import image from '../assets/image.png';
import HeroText from './HeroText';
import ActionButtons from './ActionButtons';
import VideoCard from './VideoCard';
import AnthropicLogo from "../assets/Anthropic_logo.svg";
import imageEarth from '../assets/imageEarth.png';
import greyNetworkBg from '../assets/GREY.avif';

export default function HeroSection() {
  const products = [
    {
      title: 'OmniVoice',
      description: 'AI-powered voice calls and phone automation that never miss revenue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-cyan-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.29.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-500'
    },
    {
      title: 'OmniMail',
      description: 'Email campaigns and follow-ups that convert—automatically.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-blue-700 to-indigo-500'
    },
    {
      title: 'OmniPay',
      description: 'Accept payments instantly—voice, card, or contactless.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-amber-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-yellow-600 to-amber-500'
    },
    {
      title: 'OmniView',
      description: 'Property reports and insights delivered in 60 seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-sky-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-sky-600 to-blue-500'
    },
    {
      title: 'Plugins',
      description: 'Extend functionality with pre-built integrations that work instantly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A1.5 1.5 0 0 0 19.62 19.62l-5.83-5.83m-1.37 1.37a2.25 2.25 0 1 1-3.18-3.18 2.25 2.25 0 0 1 3.18 3.18ZM15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-teal-600 to-emerald-500'
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-white w-full">
      <section className="relative flex flex-col items-center justify-center text-center pt-36 pb-20 px-4 overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5%" cy="8%" r="1" fill="#ffffff" />
            <circle cx="18%" cy="22%" r="1.5" fill="#ffffff" opacity="0.2" />
            <circle cx="35%" cy="14%" r="1" fill="#ffffff" opacity="0.5" />
            <circle cx="55%" cy="10%" r="1" fill="#ffffff" />
            <circle cx="78%" cy="20%" r="1.5" fill="#ffffff" opacity="0.2" />
            <circle cx="92%" cy="32%" r="1" fill="#ffffff" opacity="0.4" />
            <circle cx="10%" cy="55%" r="1" fill="#ffffff" opacity="0.5" />
            <circle cx="25%" cy="70%" r="1.5" fill="#ffffff" />
            <circle cx="70%" cy="60%" r="1" fill="#ffffff" opacity="0.4" />
            <circle cx="88%" cy="75%" r="1" fill="#ffffff" />
          </svg>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[40vh] max-h-[320px] min-h-[260px] pointer-events-none z-0 overflow-hidden">
          <svg
            className="w-full h-full opacity-[0.5]"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="40%" stopColor="white" stopOpacity="0.6" />
                <stop offset="70%" stopColor="white" stopOpacity="0.15" />
                <stop offset="90%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="fade-mask">
                <rect width="1440" height="300" fill="url(#grid-fade)" />
              </mask>
            </defs>

            <g mask="url(#fade-mask)" stroke="#06b6d4" strokeWidth="1.2" fill="none">
              <line x1="-200" y1="20" x2="1640" y2="20" strokeWidth="1" opacity="0.4" />
              <line x1="-200" y1="70" x2="1640" y2="70" strokeWidth="1" opacity="0.45" />
              <line x1="-200" y1="115" x2="1640" y2="115" strokeWidth="1.1" opacity="0.5" />
              <line x1="-200" y1="155" x2="1640" y2="155" strokeWidth="1.2" opacity="0.55" />
              <line x1="-200" y1="190" x2="1640" y2="190" strokeWidth="1.3" opacity="0.6" />
              <line x1="-200" y1="218" x2="1640" y2="218" strokeWidth="1.4" opacity="0.65" />
              <line x1="-200" y1="240" x2="1640" y2="240" strokeWidth="1.5" opacity="0.7" />
              <line x1="-200" y1="256" x2="1640" y2="256" strokeWidth="1.6" opacity="0.75" />

              <line x1="720" y1="0" x2="720" y2="260" strokeWidth="2" />
              <line x1="800" y1="0" x2="720" y2="260" strokeWidth="1" />
              <line x1="880" y1="0" x2="720" y2="260" strokeWidth="1.2" />
              <line x1="960" y1="0" x2="720" y2="260" strokeWidth="1.5" />
              <line x1="1050" y1="0" x2="720" y2="260" strokeWidth="1.8" />
              <line x1="1150" y1="0" x2="720" y2="260" strokeWidth="2.2" />
              <line x1="1260" y1="0" x2="720" y2="260" strokeWidth="2.6" />
              <line x1="1380" y1="0" x2="720" y2="260" strokeWidth="3" />

              <line x1="640" y1="0" x2="720" y2="260" strokeWidth="1" />
              <line x1="560" y1="0" x2="720" y2="260" strokeWidth="1.2" />
              <line x1="480" y1="0" x2="720" y2="260" strokeWidth="1.5" />
              <line x1="390" y1="0" x2="720" y2="260" strokeWidth="1.8" />
              <line x1="290" y1="0" x2="720" y2="260" strokeWidth="2.2" />
              <line x1="180" y1="0" x2="720" y2="260" strokeWidth="2.6" />
              <line x1="60" y1="0" x2="720" y2="260" strokeWidth="3" />
            </g>
          </svg>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[200px] bg-cyan-950/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          <HeroText />
          <ActionButtons />
<VideoCard
  variant={1}
 videoUrl="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  thumbnailUrl="/src/assets/new-img.webp"
  title="AI Assistant"
  description="A smart helper optimizing workflows."
/></div>
      </section>

      {/* 2ND Page: ECOSYSTEM FEATURE */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <p className="text-cyan-400 font-medium text-sm tracking-wide uppercase mb-3">
          Unified by Design. Intelligent by Default.
        </p>

        <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight max-w-3xl leading-tight">
          Built as an Ecosystem — Not Just Software
        </h2>

        <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl leading-relaxed font-normal">
          OmniCore was designed from the ground up as a connected AI ecosystem, allowing businesses to 
          scale without juggling tools, teams, or fragmented systems.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 w-full max-w-[720px] mx-auto">
          <div className="flex items-center space-x-3 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_25%_50%,rgba(6,182,212,0.22)_0%,rgba(6,182,212,0.02)_60%,transparent_100%)] px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.03)]">
            <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200 font-medium text-sm tracking-wide whitespace-nowrap">Seamless integrations</span>
          </div>

          <div className="flex items-center space-x-3 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_25%_50%,rgba(6,182,212,0.22)_0%,rgba(6,182,212,0.02)_60%,transparent_100%)] px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.03)]">
            <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200 font-medium text-sm tracking-wide whitespace-nowrap">Consistent experience everywhere</span>
          </div>

          <div className="flex items-center space-x-3 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_25%_50%,rgba(6,182,212,0.22)_0%,rgba(6,182,212,0.02)_60%,transparent_100%)] px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.03)]">
            <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200 font-medium text-sm tracking-wide whitespace-nowrap">Centralized workflows that save time</span>
          </div>

          <div className="flex items-center space-x-3 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle_at_25%_50%,rgba(6,182,212,0.22)_0%,rgba(6,182,212,0.02)_60%,transparent_100%)] px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.03)]">
            <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200 font-medium text-sm tracking-wide whitespace-nowrap">Shared intelligence across products</span>
          </div>
        </div>
        <VideoCard
  variant={2}
  videoUrl="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  thumbnailUrl="/src/assets/MyNew.Hero.avif"
  title="Future Interface Control Room"
  description="Holographic projections and digital twin management."
/>
</section>

      {/*3rd Page: POWERED BY OMNICORE */}
      <section className="w-full bg-[#02050c] border-t border-gray-900/40">
        <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-[48%] flex flex-col text-left">
            <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
              Powered by OmniCore
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-6 leading-relaxed font-normal">
              OmniCore orchestrates everything—permissions, data flow, automations, and 
              AI decisions across all OmniNext products.
            </p>
            <p className="text-gray-400 text-sm md:text-base mt-6 leading-relaxed font-normal">
              Instead of managing integrations manually, OmniCore handles the system 
              logic behind the scenes—triggering actions, syncing data, and ensuring 
              everything works as one intelligent system.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="group flex items-center space-x-2 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.02)_80%)] border border-cyan-500/30 text-slate-200 hover:text-white font-medium text-sm px-6 py-3 rounded-full hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.4)]">
                <span className="tracking-wide">Explore the Platform</span>
                <svg className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="border border-gray-800/80 bg-neutral-950/40 text-slate-300 hover:text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-900/60 hover:border-gray-700 transition-all duration-300 cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                View Products
              </button>
            </div> 
          </div> 
        <VideoCard
  variant={3}
  videoUrl="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  thumbnailUrl={greyNetworkBg}
/>
        </div> 
      </section>

      {/*4th Page: AI THAT TAKES ACTION */}
      <section className="w-full bg-[#02050c] border-t border-gray-900/40">
        <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          <VideoCard
            variant={3}
             videoUrl="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
            thumbnailUrl={greyNetworkBg}
          />
          <div className="w-full lg:w-[48%] flex flex-col text-left">
            <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
              AI That Takes Action — Not Just Generates Reports
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-6 leading-relaxed font-normal">
              Traditional AI tools give you reports and insights—then you still do the work. 
              OmniCore AI makes decisions, takes actions, and automates outcomes. It's 
              built into every product as a core system—not a bolt-on feature.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="group flex items-center space-x-2 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.02)_80%)] border border-cyan-500/30 text-slate-200 hover:text-white font-medium text-sm px-6 py-3 rounded-full hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.4)]">
                <span className="tracking-wide">Explore the Platform</span>
                <svg className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="border border-gray-800/80 bg-neutral-950/40 text-slate-300 font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-900/60 hover:border-gray-700 transition-all duration-300 cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                View Products
              </button>
            </div> 
          </div> 
        </div> 
      </section>

      {/*5th Page: ROI */}
      <section className="w-full bg-[#02050c] border-t border-gray-900/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <img src={roiSwirlBg} alt="" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030712]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]/40" />
        </div>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 relative z-10 flex items-center justify-center text-center">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-medium tracking-tight leading-relaxed max-w-4xl px-4 opacity-90 selection:bg-cyan-500/30">
            "Built with a deep understanding of ROI, sales performance, and 
            operational efficiency—so AI does the work, not your team."
          </h2>
        </div>
      </section>

      {/* 6th Page: ONE SYSTEM */}
      <section className="w-full bg-[#030712] border-t border-gray-900/40 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
                One System. Every Revenue Channel.
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed font-normal">
                Choose the products you need now. Add more as you grow. They're all interconnected by design—so your data, AI, and automations scale with you.
              </p>
            </div>
            <button className="self-start md:self-auto border border-gray-800/80 bg-neutral-950/40 text-slate-300 hover:text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-900/60 hover:border-gray-700 transition-all duration-300 cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              View Products
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-[#0b1120] border border-slate-900/80 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-800/60 transition-all duration-300 group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-black/50 ${product.iconBg}`}>
                    <div className="w-full h-full rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2.5">
                    {product.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                    {product.description}
                  </p>
                </div>
                <a href={`#${product.title.toLowerCase()}`} 
                  className="inline-flex items-center gap-2 text-sm text-slate-300 font-medium hover:text-white transition-colors duration-200"
                >
                  Open 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7th Page: SCALE */}
      <section className="w-full bg-[#030712] border-t border-gray-900/40 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-12">
            Scale Revenue Without Adding Complexity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            <div className="flex items-center space-x-4 rounded-xl border border-slate-900 bg-[#0b1120]/40 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
              <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5m0-16.5h16.5m-16.5 0v16.5m16.5-16.5v16.5M3.75 20.25h16.5M7.5 7.5h9m-9 4.5h9m-9 4.5h9" />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-base tracking-wide">One intelligent system handles all products</span>
            </div>

            <div className="flex items-center space-x-4 rounded-xl border border-slate-900 bg-[#0b1120]/40 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
              <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-base tracking-wide">Centralized billing and usage tracking saves hours</span>
            </div>

            <div className="flex items-center space-x-4 rounded-xl border border-slate-900 bg-[#0b1120]/40 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
              <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-base tracking-wide">No disconnected tools or duplicate workflows</span>
            </div>

            <div className="flex items-center space-x-4 rounded-xl border border-slate-900 bg-[#0b1120]/40 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
              <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-base tracking-wide">Product-specific entry points with shared infrastructure</span>
            </div>

            <div className="flex items-center space-x-4 rounded-xl border border-slate-900 bg-[#0b1120]/40 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] md:col-span-2 md:max-w-[calc(50%-8px)]">
              <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="text-slate-200 font-medium text-base tracking-wide">Built for sustainable long-term growth</span>
            </div>

          </div>
        </div>
      </section>
      
      {/* 8th Page: TRUSTED TECHNOLOGY & DATA ECOSYSTEM */}
      <section className="w-full bg-[#030712] border-t border-gray-900/40 py-24 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
            Trusted Technology & Data Ecosystem
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mt-4 mb-16 leading-relaxed font-light opacity-80">
            OmniNext is built on a connected ecosystem of leading AI, cloud, communication, payment, data, media, and industry platforms.
          </p>

          <div className="w-full flex flex-nowrap items-center justify-center gap-x-6 md:gap-x-12 lg:gap-x-14 pt-8 border-t border-slate-900/40 overflow-x-auto whitespace-nowrap scrollbar-none">
            
            <span className="text-white font-medium text-base md:text-lg tracking-wide shrink-0 opacity-90">
              Built on Industry-Leading Technology:
            </span>

            <div className="h-7 flex items-center justify-center shrink-0">
              <img 
                src={twilioLogo} 
                alt="Twilio Logo" 
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="h-7 flex items-center justify-center shrink-0">
              <img 
                src={image} 
                alt="Vapi Logo" 
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>

            <div className="h-7 flex items-center justify-center shrink-0">
              <img 
                src={elevenLabsLogo} 
                alt="ElevenLabs Logo" 
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>

            <div className="h-6 flex items-center justify-center shrink-0">
              <img 
                src={AnthropicLogo} 
                alt="Anthropic Logo" 
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>

          </div>
        </div>
      </section>
      
  {/* 9th Page: CALL TO ACTION */}
      <section className="w-full bg-[#030712] border-t border-gray-900/40 pt-24 pb-6 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col justify-center">
        
        <div className="absolute top-0 left-0 right-0 h-[60px] pointer-events-none z-0 opacity-40">
          <div className="w-full h-[1px] bg-cyan-500/30 shadow-[0_0_25px_6px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none opacity-35">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5%" cy="15%" r="1" fill="#ffffff" opacity="0.3" />
            <circle cx="38%" cy="48%" r="1" fill="#ffffff" opacity="0.6" />
            <circle cx="55%" cy="22%" r="1" fill="#ffffff" opacity="0.2" />
            <circle cx="72%" cy="52%" r="1" fill="#ffffff" opacity="0.5" />
            <circle cx="92%" cy="30%" r="1" fill="#ffffff" opacity="0.4" />
            <circle cx="20%" cy="80%" r="1" fill="#ffffff" opacity="0.2" />
            <circle cx="62%" cy="85%" r="1" fill="#ffffff" opacity="0.4" />
            <circle cx="85%" cy="75%" r="1" fill="#ffffff" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 text-left">
          <h2 className="text-white font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-6">
            One System. Every Revenue Channel.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed font-normal mb-8 opacity-80">
            Choose the products you need now. Add more as you grow. They're all interconnected by design—so your data, AI, and automations scale with you.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="group flex items-center space-x-2 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.02)_80%)] border border-cyan-500/30 text-slate-200 hover:text-white font-medium text-sm px-7 py-3.5 rounded-full hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.4)]">
              <span className="tracking-wide">Explore the Platform</span>
              <svg className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="border border-slate-900 bg-neutral-950/40 text-slate-300 hover:text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-neutral-900/60 hover:border-gray-700 transition-all duration-300 cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              View Products
            </button>
          </div>
        </div>
      </section>
  
    </div>
  );
}