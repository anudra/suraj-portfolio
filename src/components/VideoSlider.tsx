import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { videosData, Video } from '@/lib/videosData';

export function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videosData.length);
    setIsPlaying(false);
    setHoveredVideo(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videosData.length) % videosData.length);
    setIsPlaying(false);
    setHoveredVideo(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setHoveredVideo(null);
  };

  const handleVideoHover = (videoIndex: number, isHovering: boolean) => {
    const video = videoRefs.current[videoIndex];
    if (video && videoIndex === currentIndex) {
      if (isHovering) {
        setHoveredVideo(videoIndex);
        video.play();
        setIsPlaying(true);
      } else {
        setHoveredVideo(null);
        video.pause();
        video.currentTime = 0; // Reset to beginning
        setIsPlaying(false);
      }
    }
  };

  const togglePlayPause = (videoIndex: number) => {
    const video = videoRefs.current[videoIndex];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videosData.map((video, index) => (
            <div key={video.id} className="w-full flex-shrink-0 relative group">
              {/* Video Container */}
              <div 
                className="aspect-[16/10] bg-gray-900 overflow-hidden relative cursor-pointer"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
              >
                {/* Video Element */}
                <video
                  ref={(el: HTMLVideoElement | null) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.videoUrl || `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`} // Fallback sample video
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                />

                {/* Thumbnail Overlay (shows when not playing) */}
                {hoveredVideo !== index && (
                  <div className="absolute inset-0">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Play/Pause Button */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredVideo === index && isPlaying ? 'opacity-0' : 'opacity-100 bg-black/30'
                  }`}
                  onClick={() => togglePlayPause(index)}
                >
                  <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    {isPlaying && hoveredVideo === index ? (
                      <Pause className="w-6 h-6 text-gray-800" />
                    ) : (
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    )}
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 z-10">
                  <span className="text-white text-sm">{video.duration}</span>
                </div>

                {/* Video Controls Overlay (appears on hover when playing) */}
                {hoveredVideo === index && isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <span className="text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          {video.category}
                        </span>
                      </div>
                      <button 
                        onClick={() => togglePlayPause(index)}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info (Always Visible) */}
              <div className="p-8 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                    {video.category}
                  </span>
                  <span className="text-sm text-gray-500">{video.duration}</span>
                  {video.views && (
                    <span className="text-sm text-gray-500">• {video.views} views</span>
                  )}
                </div>
                <h3 className="text-2xl mb-2 text-black">{video.title}</h3>
                <p className="text-gray-600 leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {videosData.map((_, index) => (
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