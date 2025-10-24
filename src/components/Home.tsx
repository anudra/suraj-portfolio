'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiExternalLink } from 'react-icons/hi';
import { homeData } from '@/lib/homeData';
import { useMouseParallax } from '@/hooks/useScrollAnimation';

export function Home() {
  const router = useRouter();
  const mousePosition = useMouseParallax();
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Check if animations have already run in this session
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('home-animated') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Mark animations as completed after first render
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('home-animated', 'true');
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  const handleExploreProducts = () => {
    router.push('/products');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Professional layered gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/20 animate-gradient-shift" style={{animationDelay: '1s'}}></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/40 via-white/20 to-slate-100/30 animate-gradient-shift" style={{animationDelay: '2s'}}></div>
      
      {/* Enhanced pattern overlays with parallax effect */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.04)_0%,transparent_60%)] animate-pulse-glow" 
        style={{
          animationDuration: '4s',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.03)_0%,transparent_60%)] animate-pulse-glow" 
        style={{
          animationDelay: '2s', 
          animationDuration: '5s',
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.02)_0%,transparent_80%)] animate-pulse-glow" 
        style={{
          animationDelay: '1s', 
          animationDuration: '6s',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">
          {/* Title First on Mobile */}
          <div className={`space-y-4 ${!hasAnimated ? 'animate-fade-in-down' : ''}`}>
            <div className={`inline-block bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-4 py-2 hover:shadow-lg transition-all duration-500 hover-jelly-wobble cursor-pointer ${!hasAnimated ? 'animate-bounce-in' : ''}`}>
              <span className="text-black font-medium text-sm">{homeData.greeting}</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight hover-wiggle cursor-default ${!hasAnimated ? 'animate-scale-in' : ''}`} style={!hasAnimated ? {animationDelay: '0.2s'} : {}}>
              {homeData.title}
            </h1>
          </div>
          
          {/* Character Image Second on Mobile */}
          <div className={`relative max-w-xs mx-auto ${!hasAnimated ? 'animate-rotate-in' : ''}`} style={!hasAnimated ? {animationDelay: '0.4s'} : {}}>
            <div 
              className="relative z-10 animate-float-bounce cursor-pointer"
              onClick={(e) => {
                e.currentTarget.classList.add('animate-rubber-band');
                setTimeout(() => e.currentTarget.classList.remove('animate-rubber-band'), 700);
              }}
            >
              <Image 
                src={homeData.image}
                alt="Suraj TP - Character"
                width={350}
                height={350}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
          
          {/* Remaining Content Last on Mobile */}
          <div className={`space-y-6 ${!hasAnimated ? 'animate-slide-up-fade' : ''}`} style={!hasAnimated ? {animationDelay: '0.6s'} : {}}>
            <p className="text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
              {homeData.description}
            </p>
            
            <div className={`flex flex-col gap-4 pt-4 ${!hasAnimated ? 'animate-slide-up-fade' : ''}`} style={!hasAnimated ? {animationDelay: '0.6s'} : {}}>
              <button 
                onClick={handleExploreProducts}
                className={`group bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-800 hover:to-black shadow-lg hover:shadow-2xl transition-all duration-300 font-medium flex items-center justify-center gap-2 hover-squeeze-bounce ${!hasAnimated ? 'animate-glow-pulse' : ''}`}
              >
                {homeData.buttons.primary}
                <HiExternalLink className="w-4 h-4 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${!hasAnimated ? 'animate-fade-in-left' : ''}`}>
            <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-6 py-2 hover:shadow-xl transition-all duration-500 animate-bounce-in hover-jelly-wobble cursor-pointer">
              <span className="text-black font-medium">{homeData.greeting}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight hover-wiggle cursor-default ${!hasAnimated ? 'animate-scale-in' : ''}`} style={!hasAnimated ? {animationDelay: '0.2s'} : {}}>
                {homeData.title}
              </h1>
              <p className={`text-xl text-gray-700 leading-relaxed max-w-md hover-tilt cursor-default ${!hasAnimated ? 'animate-fade-in-up' : ''}`} style={!hasAnimated ? {animationDelay: '0.4s'} : {}}>
                {homeData.description}
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8 ${!hasAnimated ? 'animate-slide-up-fade' : ''}`} style={!hasAnimated ? {animationDelay: '0.6s'} : {}}>
              <button 
                onClick={handleExploreProducts}
                className={`group bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-black shadow-xl hover:shadow-2xl transition-all duration-300 font-medium flex items-center gap-2 hover-squeeze-bounce ${!hasAnimated ? 'animate-glow-pulse' : ''}`}
              >
                {homeData.buttons.primary}
                <HiExternalLink className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Character */}
          <div className={`relative ${!hasAnimated ? 'animate-fade-in-right' : ''}`} style={!hasAnimated ? {animationDelay: '0.8s'} : {}}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Character Image with enhanced floating animation */}
              <div 
                className="relative z-10 animate-float-bounce cursor-pointer"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
                onClick={(e) => {
                  e.currentTarget.classList.add('animate-rubber-band');
                  setTimeout(() => e.currentTarget.classList.remove('animate-rubber-band'), 700);
                }}
              >
                <Image 
                  src={homeData.image}
                  alt="Suraj TP - Character"
                  width={700}
                  height={700}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Experience Badge with enhanced animations */}
              <div className={`absolute top-4 right-4 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer hover-rotate-bounce ${!hasAnimated ? 'animate-bounce-in' : ''}`} style={!hasAnimated ? {animationDelay: '1s'} : {}}>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 text-yellow-400 transform transition-transform duration-300 group-hover:scale-150 group-hover:rotate-[360deg] ${!hasAnimated ? 'animate-bounce-in' : ''}`} fill="currentColor" viewBox="0 0 20 20" style={!hasAnimated ? {animationDelay: `${1.1 + i * 0.1}s`} : {}}>
                        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">{homeData.stats.experience}</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}