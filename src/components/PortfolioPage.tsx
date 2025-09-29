import { useEffect } from 'react';
import { Home } from './Home';
import { AboutMe } from './Aboutme';
import { DesignSlider } from './DesignSlider';
import { VideoSlider } from './VideoSlider';
import { ExperienceTimeline } from './ExperienceTimeline';
import { Contact } from './Contact';

interface PortfolioPageProps {
  currentSection: string;
}

export function PortfolioPage({ currentSection }: PortfolioPageProps) {
  useEffect(() => {
    if (currentSection) {
      const element = document.getElementById(currentSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentSection]);

  return (
    <div className="bg-white">
      {/* Home Section */}
      <Home />

      {/* About Section */}
      <AboutMe />

      {/* Experience/Education Section */}
      <div id="experience">
        <ExperienceTimeline />
      </div>

      {/* My Designs/Work Section */}
      <section id="designs" className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1.8s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
              Engineering <span className="underline decoration-gray-400">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative drone designs, autonomous systems, and engineering solutions that push the boundaries of technology.
            </p>
          </div>

          <DesignSlider />
        </div>
      </section>

      {/* Products Video Section */}
      <section id="videos" className="min-h-screen py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Professional layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-stone-50/60 via-transparent to-blue-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/50 via-white/40 to-indigo-50/25"></div>
        
        {/* Subtle animated overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(99,102,241,0.03)_0%,transparent_70%)] animate-pulse" style={{animationDelay: '1.2s', animationDuration: '5s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.025)_0%,transparent_70%)] animate-pulse" style={{animationDelay: '2.8s', animationDuration: '6s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.01)_0%,transparent_80%)] animate-pulse" style={{animationDelay: '0.8s', animationDuration: '7s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-4">
              Project <span className="underline decoration-gray-600">Demonstrations</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              High-performance drone flights, autonomous systems, and engineering processes in action.
            </p>
          </div>

          <VideoSlider />
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}