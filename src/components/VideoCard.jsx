import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const DEFAULT_THUMBNAIL = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";
const DEFAULT_VIDEO = "https://videos.pexels.com/video-files/3129881/3129881-hd_1920_1080_30fps.mp4";

export default function VideoCard({ variant = 1, videoUrl, thumbnailUrl, title, description }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(thumbnailUrl || DEFAULT_THUMBNAIL);
  const videoRef = useRef(null);

  useEffect(() => {
    setThumbSrc(thumbnailUrl || DEFAULT_THUMBNAIL);
  }, [thumbnailUrl]);

  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => {
        console.warn(err);
      });
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleImageError = () => {
    setThumbSrc(DEFAULT_THUMBNAIL);
  };

  const renderVideoMedia = () => (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        src={videoUrl || DEFAULT_VIDEO}
        poster={thumbSrc}
        onEnded={handleVideoEnded}
        onError={(e) => {
          if (e.target.src !== DEFAULT_VIDEO) {
            e.target.src = DEFAULT_VIDEO;
          }
        }}
        className="w-full h-full object-cover cursor-pointer"
        onClick={handlePlayPause}
      />

      <div 
        onClick={handlePlayPause}
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
          isPlaying ? 'opacity-0 hover:opacity-100 bg-black/10' : 'opacity-100'
        }`}
      >
        {variant === 1 && (
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-400 text-black hover:scale-110 transition-all shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer">
            {isPlaying ? (
              <Pause size={24} fill="currentColor" />
            ) : (
              <Play size={24} fill="currentColor" className="ml-1" />
            )}
          </button>
        )}

        {variant === 2 && (
          <div className="relative flex items-center h-12">
            <button className="z-20 w-14 h-10 flex items-center justify-center rounded-xl bg-cyan-400 text-black hover:scale-110 transition-all shadow-[0_0_25px_rgba(6,182,212,0.7)] cursor-pointer">
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" className="ml-0.5" />
              )}
            </button>
          </div>
        )}

        {variant === 3 && (
          <button className="w-16 h-10 bg-cyan-400 rounded-xl flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer text-[#02050c]">
            {isPlaying ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" className="ml-0.5" />
            )}
          </button>
        )}
      </div>

      {thumbSrc && (
        <img 
          src={thumbSrc} 
          onError={handleImageError} 
          className="hidden" 
          alt="" 
        />
      )}
    </div>
  );

  if (variant === 1) {
    return (
      <div className="mt-16 w-full max-w-4xl px-4 pr-6 pb-6 relative z-10 mx-auto">
        <div className="relative">
          <div className="absolute top-2 left-2 -right-3 -bottom-3 rounded-2xl border-b-[6px] border-r-[6px] border-cyan-400 shadow-[5px_5px_20px_rgba(34,211,238,0.25)] pointer-events-none z-0"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 bg-[#070e17] z-10 aspect-video">
            {renderVideoMedia()}
          </div>
        </div>
        {title && <h3 className="mt-4 text-xl font-bold text-white text-center">{title}</h3>}
        {description && <p className="text-gray-400 text-sm text-center mt-1">{description}</p>}
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="mt-16 w-full max-w-4xl px-4 pb-20 relative z-10 mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl border border-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.2)] pointer-events-none z-20"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 bg-[#070e17] z-10 aspect-[2/1]">
            {renderVideoMedia()}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-purple-950/30 pointer-events-none" />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[92%] h-16 pointer-events-none overflow-hidden mix-blend-screen z-0">
            <svg className="w-full h-full" viewBox="0 0 800 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grid-fade-glow" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0" />
                </linearGradient>
                <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <g filter="url(#soft-blur)">
                <path d="M0 2C200 30 600 30 800 2" stroke="url(#grid-fade-glow)" strokeWidth="10" opacity="0.8" />
                <path d="M60 8C240 34 560 34 740 8" stroke="url(#grid-fade-glow)" strokeWidth="6" opacity="0.4" />
              </g>
            </svg>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-6 bg-cyan-400/30 blur-xl rounded-full"></div>
          </div>
        </div>
        {title && <h3 className="mt-4 text-xl font-bold text-white text-center">{title}</h3>}
        {description && <p className="text-gray-400 text-sm text-center mt-1">{description}</p>}
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className="w-full lg:w-[48%] relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-900/50 shadow-2xl mx-auto">
        {renderVideoMedia()}
      </div>
    );
  }
}