import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { designsData, Design } from '@/lib/designsData';

export function DesignSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % designsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + designsData.length) % designsData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {designsData.map((design, index) => (
            <div key={design.id} className="w-full flex-shrink-0 relative group">
              {/* Design Image */}
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img 
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm">{design.category}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">{design.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 max-w-xs sm:max-w-md px-2">{design.description}</p>
                    <div className="mt-3 sm:mt-4">
                      <span className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1">{design.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Info (Always Visible) */}
              <div className="p-4 sm:p-6 lg:p-8 bg-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                  <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                    {design.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">{design.year}</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 text-black leading-tight">{design.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6 lg:mt-8">
        {designsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-black' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}