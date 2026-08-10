import React from 'react';
import OmiLogo from '../assets/OmiNext0Logo.png';
import imageEarth from '../assets/imageEarth.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] text-white pt-6 pb-8 px-6 md:px-12 lg:px-24 relative overflow-hidden select-none">
      
      {/* Background Star Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12%" cy="15%" r="1" fill="#ffffff" />
          <circle cx="35%" cy="45%" r="1.5" fill="#ffffff" opacity="0.7" />
          <circle cx="70%" cy="25%" r="1" fill="#ffffff" />
          <circle cx="85%" cy="60%" r="1.2" fill="#ffffff" opacity="0.5" />
          <circle cx="50%" cy="15%" r="1" fill="#ffffff" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] pointer-events-none z-0 flex items-end justify-center opacity-85">
        <div className="absolute bottom-[-50px] w-[500px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.2)_0%,transparent_70%)] blur-3xl"></div>
        
        <img 
          src={imageEarth} 
          alt="Earth Grid Background" 
          className="w-[550px] h-auto object-contain mix-blend-screen"
          style={{ 
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between">
        
        <div className="w-full text-center mb-12 max-w-4xl mx-auto px-4">
          <h2 className="text-white italic font-normal text-xl md:text-[28px] leading-snug tracking-tight opacity-95">
            OmniNext Tech delivers AI-powered business automation that actually works together. One platform. One login. Complete control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-start w-full mb-12">
          <div className="md:col-span-5 flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <div className="w-16 h-16">
                <img 
                  src={OmiLogo} 
                  alt="OmniNext Logo" 
                  className="w-full h-full object-contain select-none mix-blend-screen"
                />
              </div>
              <div className="flex items-baseline font-sans tracking-wide">
                <span className="text-white font-bold text-xl">Omni</span>
                <span className="text-blue-500 font-semibold text-xl ml-0.5">Next</span>
                <span className="text-teal-400 font-medium text-xl ml-0.5">Tech</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>1309 Coffeen Ave Ste 1200 Sheridan, WY 82801</span>
            </div>

            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-[#00f2fe] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.155-.44.01-1.29.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>(888) 851-9283</span>
            </div>

            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-[#00f2fe] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@omninexttech.com" className="hover:text-[#00f2fe] transition-colors duration-200">info@omninexttech.com</a>
            </div>

            <div className="flex items-center space-x-4 pt-2 text-[#00f2fe]">
              <a href="#facebook" className="hover:text-white transition-colors duration-200">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#instagram" className="hover:text-white transition-colors duration-200">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.74.054 2.106.096 3.14 1.122 3.236 3.236.044.955.054 1.31.054 3.74v1.41c0 2.43-.01 2.784-.054 3.74-.096 2.106-1.122 3.14-3.236 3.236-.955.044-1.31.054-3.74.054H11.685c-2.43 0-2.784-.01-3.74-.054-2.106-.096-3.14-1.122-3.236-3.236C4.66 14.784 4.65 14.43 4.65 12v-1.41c0-2.43.01-2.784.054-3.74.096-2.106 1.122-3.14 3.236-3.236.955-.044 1.31-.054 3.74-.054H12.315zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" /></svg>
              </a>
              <a href="#linkedin" className="hover:text-white transition-colors duration-200">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="#tiktok" className="hover:text-white transition-colors duration-200">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.01 1.62 4.2 1.01.06 2.03-.01 3.04-.03v3.32c-1.2-.01-2.4-.3-3.48-.86-.17 2.61-.1 5.23-.27 7.84-.24 2.59-1.8 5.01-4.22 6-2.61 1.12-5.78.69-7.96-1.12-2.33-1.88-3.19-5.15-2.09-7.92 1-2.63 3.73-4.43 6.55-4.32.12 1.25.02 2.51.02 3.77-1.42-.09-2.89.5-3.61 1.75-.89 1.48-.56 3.53.76 4.67 1.34 1.18 3.48 1.07 4.69-.27.76-1.02.77-2.38.74-3.6-.04-3.52-.02-7.05-.03-10.58z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-3 md:pl-8">
            <span className="text-white font-semibold text-[15px] tracking-wide">Links</span>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-[#00f2fe] transition-colors duration-200">Home</a></li>
              <li><a href="#products" className="hover:text-[#00f2fe] transition-colors duration-200">Products</a></li>
              <li><a href="#why-omni" className="hover:text-[#00f2fe] transition-colors duration-200">Why Omni</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <button className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-950/40 via-cyan-900/30 to-transparent border border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm px-7 py-3 rounded-full hover:border-[#00f2fe]/70 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="tracking-wide">Explore the Platform</span>
              <svg className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
        </div>
        <div className="w-full border-t border-slate-900/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-slate-500 text-sm">
          <p>&copy; 2026 OmniNext Tech. Powered by OmniCore</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}