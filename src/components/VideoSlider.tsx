import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { videosData, Video } from '@/lib/videosData';

export function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % videosData.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + videosData.length) % videosData.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-2xl bg-white border border-gray-200 shadow-lg perspective-1000">
        <div 
          className="flex transition-all duration-700"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {videosData.map((video, index) => (
            <div 
              key={video.id} 
              className="w-full flex-shrink-0 relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Video Container */}
              <div 
                className="aspect-[16/9] bg-gray-900 overflow-hidden relative"
              >
                {/* Google Drive iframe */}
                <iframe
                  src={video.videoUrl ? video.videoUrl.replace('/uc?export=view&id=', '/file/d/').replace(/id=([^&]+)/, 'file/d/$1/preview') : ''}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              {/* Video Info (Always Visible) */}
              <div className="p-1.5 sm:p-3 lg:p-4 bg-white">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1 flex-wrap">
                  <span className="lg:text-xs sm:text-[10px] text-gray-500 bg-gray-100 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-0.5">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm lg:text-xl font-medium mb-0.5 sm:mb-1 text-black leading-tight">{video.title}</h3>
                <p className="lg:text-[14px]/6 sm:text-xs text-gray-600 leading-relaxed line-clamp-1 sm:line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-20 hover:scale-110 hover:-rotate-12 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronBack className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-20 hover:scale-110 hover:rotate-12 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-2 sm:mt-3 lg:mt-4">
        {videosData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 hover:scale-150 hover:rotate-180 disabled:cursor-not-allowed ${
              index === currentIndex 
                ? 'bg-black scale-125 animate-pulse' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}