'use client';

import Image from 'next/image';
import { aboutData } from '@/lib/aboutData';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isSectionVisible = useScrollAnimation(sectionRef, 0.1);
  const isImageVisible = useScrollAnimation(imageRef, 0.2);
  const isContentVisible = useScrollAnimation(contentRef, 0.2);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Character */}
          <div 
            ref={imageRef}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isImageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-90'
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              <div 
                className={`${isImageVisible ? 'animate-fade-in-left' : ''} animate-float-bounce cursor-pointer hover-elastic`}
                onClick={(e) => {
                  e.currentTarget.classList.add('animate-rubber-band');
                  setTimeout(() => e.currentTarget.classList.remove('animate-rubber-band'), 700);
                }}
              >
                <Image 
                  src={aboutData.image}
                  alt="About Suraj TP"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-2xl transition-all duration-700 hover:scale-110 hover:shadow-3xl"
                />
              </div>
              <div className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-white to-gray-100 border border-gray-300 rounded-lg p-2 sm:p-3 shadow-xl hover:shadow-2xl ${isImageVisible ? 'animate-wiggle-in' : ''} group cursor-pointer transition-all duration-500 hover-rotate-bounce ${isImageVisible ? 'animate-wiggle-in' : ''}`} style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-black group-hover:text-gray-800 transition-colors duration-300">Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 ${
              isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer ${isContentVisible ? 'animate-jello-bounce' : ''}`} style={{backgroundSize: '200% auto'}}>{aboutData.title}</h2>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 lg:py-6">
              {aboutData.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center group cursor-pointer transition-all duration-500 hover-jump ${
                    isContentVisible ? 'opacity-100 translate-y-0 animate-bounce-crazy' : 'opacity-0 translate-y-10'
                  }`}
                  style={{transitionDelay: `${0.1 + index * 0.1}s`, animationDelay: `${0.2 + index * 0.15}s`}}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-gray-200 group-hover:to-white transition-all duration-500 group-hover:scale-110">{stat.number}</div>
                  <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-white ${isContentVisible ? 'animate-swing-in' : ''}`}>Skills & Expertise</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 lg:gap-3">
                {aboutData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`group relative bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-md sm:rounded-lg hover:from-white hover:to-gray-100 hover:border-gray-300 transition-all duration-200 ease-out cursor-pointer shadow-md hover:shadow-xl text-xs sm:text-sm lg:text-base transform hover:-translate-y-1 hover:scale-105 ${
                      isContentVisible ? 'opacity-100 translate-y-0 animate-pop-in' : 'opacity-0 translate-y-10'
                    }`}
                    style={{transitionDelay: `${0.3 + index * 0.05}s`, animationDelay: `${0.4 + index * 0.08}s`}}
                  >
                    {/* Subtle gradient overlay on hover */}
                    <span className="absolute inset-0 rounded-md sm:rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-200"></span>
                    
                    {/* Skill text with smooth color transition */}
                    <span className="relative z-10 inline-block text-white group-hover:text-gray-900 font-normal group-hover:font-semibold transition-all duration-200">
                      {skill}
                    </span>
                    
                    {/* Subtle shine effect */}
                    <span className="absolute inset-0 rounded-md sm:rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <button className={`border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 font-medium hover:shadow-2xl hover-squeeze-bounce ${isContentVisible ? 'animate-wobble-in' : ''}`}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}