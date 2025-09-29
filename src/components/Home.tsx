import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { homeData } from '@/lib/homeData';

export function Home() {
  const router = useRouter();

  const handleExploreProducts = () => {
    router.push('/products');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 relative overflow-hidden">
      {/* Professional layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/40 via-white/20 to-slate-100/30"></div>
      
      {/* Subtle pattern overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.04)_0%,transparent_60%)] animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.03)_0%,transparent_60%)] animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.02)_0%,transparent_80%)] animate-pulse" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">
          {/* Title First on Mobile */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-4 py-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-black font-medium text-sm">{homeData.greeting}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {homeData.title}
            </h1>
          </div>
          
          {/* Character Image Second on Mobile */}
          <div className="relative animate-fade-in-up max-w-xs mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="relative z-10 animate-float">
              <Image 
                src={homeData.image}
                alt="Suraj TP - Character"
                width={250}
                height={250}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            {/* Experience Badge Hidden on Mobile */}
          </div>
          
          {/* Remaining Content Last on Mobile */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
              {homeData.description}
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              <button 
                onClick={handleExploreProducts}
                className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {homeData.buttons.primary}
                <ExternalLink className="w-4 h-4" />
              </button>
              
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white hover:border-transparent px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105">
                {homeData.buttons.secondary}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-6 py-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-black font-medium">{homeData.greeting}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {homeData.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                {homeData.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={handleExploreProducts}
                className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
              >
                {homeData.buttons.primary}
                <ExternalLink className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white hover:border-transparent px-8 py-4 rounded-full transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1">
                {homeData.buttons.secondary}
              </button>
            </div>
          </div>

          {/* Right Content - Character */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Character Image with floating animation */}
              <div className="relative z-10 animate-float">
                <Image 
                  src={homeData.image}
                  alt="Suraj TP - Character"
                  width={400}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Experience Badge with enhanced animations */}
              <div className="absolute top-4 right-4 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group cursor-pointer">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 transform transition-transform duration-200 group-hover:scale-110 animate-fade-in-up" fill="currentColor" viewBox="0 0 20 20" style={{animationDelay: `${i * 0.1}s`}}>
                        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors">{homeData.stats.experience}</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}