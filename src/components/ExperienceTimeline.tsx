import React from "react";
import { timelineData, TimelineItem } from '@/lib/experienceData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-20 relative overflow-hidden">
      {/* Professional layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-50/50 via-transparent to-gray-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/30 to-indigo-50/20"></div>
      
      {/* Subtle pattern overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.03)_0%,transparent_70%)] animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.02)_0%,transparent_70%)] animate-pulse" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(0,0,0,0.015)_0%,transparent_80%)] animate-pulse" style={{animationDelay: '0.5s', animationDuration: '7s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-4">Professional Journey</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my professional experience and educational background
          </p>
        </div>

        {/* Desktop Layout - Three Column */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-8 items-center">
                  {/* Left Column - Timeline Item Info */}
                  <div className="text-right pr-8">
                    <div className="mb-3">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        item.type === 'experience' 
                          ? 'bg-black text-white' 
                          : 'bg-gray-200 text-gray-800'
                      }`}>
                        {item.type === 'experience' ? 'Professional Experience' : 'Education'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">{item.role}</h3>
                    <p className="text-gray-600 font-medium">{item.period}</p>
                    <div className="mt-4 flex flex-wrap justify-end gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center Column - Timeline Dot */}
                  <div className="flex justify-center relative">
                    {/* Vertical line connector - only show for items that aren't the last */}
                    {index < timelineData.length - 1 && (
                      <div className="absolute top-6 w-0.5 h-16 bg-gray-300 z-0"></div>
                    )}
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full border-4 border-white shadow-lg ${
                      index === 0 ? 'bg-black' : 'bg-gray-400'
                    }`}></div>
                  </div>

                  {/* Right Column - Description */}
                  <div className="pl-8">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300">
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Left Timeline */}
        <div className="lg:hidden relative">
          {/* Left vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg ${
                    index === 0 ? 'bg-black' : 'bg-gray-400'
                  }`}></div>
                </div>
                
                {/* Content Container */}
                <div className="ml-6 flex-1">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                        item.type === 'experience' 
                          ? 'bg-black text-white' 
                          : 'bg-gray-200 text-gray-800'
                      }`}>
                        {item.type === 'experience' ? 'Experience' : 'Education'}
                      </span>
                    </div>
                    
                    {/* Title and Period */}
                    <h3 className="text-xl font-bold text-black mb-2">{item.role}</h3>
                    <p className="text-gray-600 font-medium mb-4">{item.period}</p>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

