export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  duration: string;
  category: string;
  views?: string;
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "329 km/h World Record Drone Flight",
    description: "High-speed flight footage of the world's fastest drone achieving a record-breaking speed of 329 km/h. Showcasing aerodynamic design and performance capabilities.",
    thumbnail: "/images/fastest-drone-flight.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "3:20",
    category: "High-Speed Flight",
    views: "2.8K"
  },
  {
    id: 2,
    title: "Autonomous Drone Navigation Demo",
    description: "ADDC winning autonomous drone demonstrating advanced navigation, obstacle avoidance, and precision landing capabilities in various environments.",
    thumbnail: "/images/autonomous-drone-demo.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "4:15",
    category: "Autonomous Systems",
    views: "1.9K"
  },
  {
    id: 3,
    title: "FPV Drone Racing & Freestyle",
    description: "High-octane FPV drone racing and freestyle footage showcasing custom-built drones optimized for speed, agility, and performance in challenging courses.",
    thumbnail: "/images/fpv-racing.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "5:30",
    category: "FPV Racing",
    views: "3.1K"
  },
  {
    id: 4,
    title: "3D Printing Process & Prototypes",
    description: "Behind-the-scenes look at the 3D printing process for drone components and engineering prototypes, showcasing precision manufacturing and quality control.",
    thumbnail: "/images/3d-printing-process.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "6:45",
    category: "Manufacturing",
    views: "1.4K"
  }
];