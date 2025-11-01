'use client';

import { useEffect, useRef, useState } from 'react';
import { Home } from './Home';
import { AboutMe } from './Aboutme';
import { DesignSlider } from './DesignSlider';
import { VideoSlider } from './VideoSlider';
import { ExperienceTimeline } from './ExperienceTimeline';
import { Contact } from './Contact';
import { WorkInProgress } from './WorkInProgress';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PortfolioPageProps {
  currentSection: string;
}

export function PortfolioPage({ currentSection }: PortfolioPageProps) {
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const designHeaderRef = useRef<HTMLDivElement>(null);
  const videoHeaderRef = useRef<HTMLDivElement>(null);
  const designSliderRef = useRef<HTMLDivElement>(null);
  const videoSliderRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const isDesignHeaderVisible = useScrollAnimation(designHeaderRef, 0.1);
  const isVideoHeaderVisible = useScrollAnimation(videoHeaderRef, 0.1);
  const isDesignSliderVisible = useScrollAnimation(designSliderRef, 0.1);
  const isVideoSliderVisible = useScrollAnimation(videoSliderRef, 0.1);
  const isContactVisible = useScrollAnimation(contactRef, 0.1);

  useEffect(() => {
    if (currentSection) {
      const element = document.getElementById(currentSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentSection]);

  if (showWorkInProgress) {
    return <WorkInProgress onBack={() => setShowWorkInProgress(false)} />;
  }

  return (
    <div className="bg-white">
      {/* Home Section */}
      <Home onExploreProducts={() => setShowWorkInProgress(true)} />

      {/* About Section */}
      <AboutMe />

      {/* Experience/Education Section */}
      <div id="experience">
        <ExperienceTimeline />
      </div>

      {/* My Designs/Work Section */}
      <section id="designs" className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)] animate-pulse-glow" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse-glow" style={{animationDelay: '1.8s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={designHeaderRef}
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isDesignHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 animate-shimmer ${isDesignHeaderVisible ? 'animate-bounce-crazy' : ''}`} style={{backgroundSize: '200% auto'}}>
              Engineering Projects
            </h2>
            <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto ${isDesignHeaderVisible ? 'animate-swing-in' : ''}`} style={{animationDelay: '0.3s'}}>
              Innovative drone designs, autonomous systems, and engineering solutions that push the boundaries of technology.
            </p>
          </div>

          <div 
            ref={designSliderRef}
            className={`transition-all duration-1000 delay-200 ${
              isDesignSliderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <DesignSlider />
          </div>
        </div>
      </section>

      {/* Products Video Section */}
      <section id="videos" className="min-h-screen py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Professional layered gradient background with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-stone-50/60 via-transparent to-blue-50/30 animate-gradient-shift" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/50 via-white/40 to-indigo-50/25 animate-gradient-shift" style={{animationDelay: '4s'}}></div>
        
        {/* Subtle animated overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(99,102,241,0.03)_0%,transparent_70%)] animate-pulse-glow" style={{animationDelay: '1.2s', animationDuration: '5s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.025)_0%,transparent_70%)] animate-pulse-glow" style={{animationDelay: '2.8s', animationDuration: '6s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.01)_0%,transparent_80%)] animate-pulse-glow" style={{animationDelay: '0.8s', animationDuration: '7s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={videoHeaderRef}
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isVideoHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-4 animate-shimmer ${isVideoHeaderVisible ? 'animate-jello-bounce' : ''}`} style={{backgroundSize: '200% auto'}}>
              Project Demonstrations
            </h2>
            <p className={`text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto ${isVideoHeaderVisible ? 'animate-wobble-in' : ''}`} style={{animationDelay: '0.3s'}}>
              High-performance drone flights, autonomous systems, and engineering processes in action.
            </p>
          </div>

          <div 
            ref={videoSliderRef}
            className={`transition-all duration-1000 delay-200 ${
              isVideoSliderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <VideoSlider />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div 
        ref={contactRef}
        className={`transition-all duration-1000 ${
          isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <Contact />
      </div>
    </div>
  );
}