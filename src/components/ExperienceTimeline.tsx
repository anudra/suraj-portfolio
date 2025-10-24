'use client';

import React, { useRef } from "react";
import { timelineData, TimelineItem } from '@/lib/experienceData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ExperienceTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useScrollAnimation(headerRef, 0.1);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-20 relative overflow-hidden">
      {/* Professional layered gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-gray-100 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-50/50 via-transparent to-gray-50/40 animate-gradient-shift" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/30 to-indigo-50/20 animate-gradient-shift" style={{animationDelay: '4s'}}></div>
      
      {/* Enhanced pattern overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.03)_0%,transparent_70%)] animate-pulse-glow" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.02)_0%,transparent_70%)] animate-pulse-glow" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(0,0,0,0.015)_0%,transparent_80%)] animate-pulse-glow" style={{animationDelay: '0.5s', animationDuration: '7s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-4 animate-shimmer ${isHeaderVisible ? 'animate-flip-in-horizontal' : ''}`} style={{backgroundSize: '200% auto'}}>Professional Journey</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my professional experience and educational background
          </p>
        </div>

        {/* Desktop Layout - Three Column */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Center vertical line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const itemRef = useRef<HTMLDivElement>(null);
                const isItemVisible = useScrollAnimation(itemRef, 0.2);
                
                return (
                  <div 
                    key={index} 
                    ref={itemRef}
                    className={`grid grid-cols-[2fr_auto_2fr] gap-8 items-center transition-all duration-1000 ${
                      isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{transitionDelay: `${index * 0.15}s`}}
                  >
                    {/* Left Column - Timeline Item Info */}
                    <div className={`text-right pr-8 group ${isItemVisible ? 'animate-swing-in' : ''}`} style={{animationDelay: `${index * 0.15}s`}}>
                      <div className="mb-3" style={{animationDelay: `${index * 0.15 + 0.1}s`}}>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg hover-jelly-wobble cursor-pointer ${
                          item.type === 'experience' 
                            ? 'bg-black text-white hover:bg-gray-800' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}>
                          {item.type === 'experience' ? 'Professional Experience' : 'Education'}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300 hover-wiggle cursor-default">{item.role}</h3>
                      <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">{item.period}</p>
                      <div className="mt-4 flex flex-wrap justify-end gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={`text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 cursor-default hover-scale-pulse-rotate ${isItemVisible ? 'animate-pop-in' : ''}`}
                            style={{animationDelay: `${index * 0.15 + 0.2 + skillIndex * 0.05}s`}}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Center Column - Timeline Dot */}
                    <div className="flex justify-center relative px-4">
                      {/* Vertical line connector - only show for items that aren't the last */}
                      {index < timelineData.length - 1 && (
                        <div className="absolute top-6 w-0.5 h-16 bg-gradient-to-b from-gray-400 to-gray-200 z-0"></div>
                      )}
                      {/* Timeline dot with enhanced animation */}
                      <div className={`relative z-10 w-12 h-12 rounded-full border-4 border-white shadow-xl transition-all duration-700 hover-spin-bounce cursor-pointer ${isItemVisible ? 'animate-spin-grow' : ''} ${
                        index === 0 ? 'bg-black hover:bg-gray-800 animate-pulse-glow' : 'bg-gray-400 hover:bg-gray-600'
                      }`} style={{animationDelay: `${index * 0.15 + 0.3}s`}}></div>
                    </div>

                    {/* Right Column - Description */}
                    <div className={`pl-8 ${isItemVisible ? 'animate-wobble-in' : ''}`} style={{animationDelay: `${index * 0.15 + 0.1}s`}}>
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-gray-400 group cursor-default hover-tilt-right">
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Left Timeline */}
        <div className="lg:hidden relative">
          {/* Left vertical line with gradient */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10">
            {timelineData.map((item, index) => {
              const mobileItemRef = useRef<HTMLDivElement>(null);
              const isMobileItemVisible = useScrollAnimation(mobileItemRef, 0.2);
              
              return (
                <div 
                  key={index} 
                  ref={mobileItemRef}
                  className={`relative flex items-start transition-all duration-1000 ${
                    isMobileItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  {/* Timeline Dot with animation */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-3 border-white shadow-lg transition-all duration-700 hover-heartbeat cursor-pointer animate-bounce-in ${
                      index === 0 ? 'bg-black animate-pulse-glow' : 'bg-gray-400'
                    }`} style={{animationDelay: `${index * 0.1}s`}}></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="ml-3 sm:ml-4 flex-1">
                    <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-gray-400 group hover-tilt-left">
                      {/* Badge */}
                      <div className="mb-3 sm:mb-4 hidden sm:block">
                        <span className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 hover-jelly-wobble cursor-pointer ${
                          item.type === 'experience' 
                            ? 'bg-black text-white hover:bg-gray-800' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}>
                          {item.type === 'experience' ? 'Experience' : 'Education'}
                        </span>
                      </div>
                      
                      {/* Title and Period */}
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.role}</h3>
                      <p className="text-sm sm:text-base text-gray-600 font-medium mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300">{item.period}</p>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                      
                      {/* Skills - Hidden on mobile */}
                      <div className="hidden sm:flex flex-wrap gap-1 sm:gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 cursor-default animate-fade-in-up hover-scale-pulse-rotate"
                            style={{animationDelay: `${index * 0.1 + 0.2 + skillIndex * 0.05}s`}}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

