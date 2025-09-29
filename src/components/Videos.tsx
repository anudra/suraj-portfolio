import { VideoSlider } from './VideoSlider';

const videosData = {
  title: "🦇 Videos & Products",
  subtitle: "Showcasing my video content and product demonstrations",
  featured: [
    {
      id: 1,
      title: "Design Process Tutorial",
      description: "Complete walkthrough of my design process from concept to final product",
      thumbnail: "/8d437c2f98710600e1880a19f67dd1f6a408b66f.png",
      duration: "12:34",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Client Project Case Study",
      description: "Deep dive into a successful client project and the challenges we solved",
      thumbnail: "/305ff221a14acf879a586e801a28efee3d8be40e.png",
      duration: "8:45",
      category: "Case Study"
    },
    {
      id: 3,
      title: "Product Demo - Mobile App",
      description: "Live demonstration of a mobile banking app I designed",
      thumbnail: "/68d158cb2b02f5fa77488f744ddbecf0e346b335.png",
      duration: "6:20",
      category: "Product Demo"
    }
  ],
  categories: ["All", "Tutorials", "Case Studies", "Product Demos", "Behind The Scenes"]
};

export function Videos() {
  return (
    <section id="videos" className="min-h-screen py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">{videosData.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {videosData.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {videosData.categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-colors ${
                index === 0 
                  ? 'bg-black text-white' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Slider */}
        <div className="mb-16">
          <VideoSlider />
        </div>

        {/* Featured Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.featured.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-black text-xs px-2 py-1 rounded">
                  {video.category}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}