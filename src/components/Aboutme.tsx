import Image from 'next/image';
import { aboutData } from '@/lib/aboutData';

export function AboutMe() {
  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Character */}
          <div className="relative animate-fade-in-up order-2 lg:order-1" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              <div className="animate-float">
                <Image 
                  src={aboutData.image}
                  alt="About Suraj TP"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-white to-gray-100 border border-gray-300 rounded-lg p-2 sm:p-3 shadow-lg animate-bounce hover:animate-pulse group cursor-pointer transition-all duration-800">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-black group-hover:text-gray-800 transition-colors">Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{aboutData.title}</h2>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 lg:py-6">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in-up hover:scale-110 transition-all duration-300 cursor-pointer" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-gray-200 group-hover:to-white transition-all duration-300">{stat.number}</div>
                  <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">Skills & Expertise</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {aboutData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 transform hover:scale-105 cursor-default shadow-lg animate-fade-in-up text-sm sm:text-base"
                    style={{animationDelay: `${0.1 + index * 0.05}s`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 font-medium transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}