export interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  category: string;
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "Flower-Dropping Drone",
    description: "Innovative flower-dropping drone combining 3D printed parts with carbon fiber for optimal strength and lightweight efficiency. Features precision dropping mechanism and stable flight control.",
    videoUrl: "https://drive.google.com/file/d/1u5NAXmAiTqhqoyaO84M27e7PXZiHSL_5/preview",
    category: "Drone Projects",
  },
  {
    id: 2,
    title: "India's Fastest Drone",
    description: "Record-breaking high-speed flight footage of India's fastest drone achieving 329 km/h. Showcasing advanced aero-structure design, aerodynamic optimization, and extreme performance engineering.",
    videoUrl: "https://drive.google.com/file/d/12f9W-o0sSKk-FFp7-ybcb8k2xRX4ESq2/preview",
    category: "High-Speed Flight",
  },
  {
    id: 3,
    title: "3D Printing Process & Prototypes",
    description: "Behind-the-scenes look at the 3D printing process for drone components and engineering prototypes, showcasing precision manufacturing and quality control.",
    videoUrl: "https://drive.google.com/file/d/1Ke6QKKZvl7QxA8Fer8WnmW8kfU3PHvtr/preview",
    category: "Manufacturing",
  },
  {
    id: 4,
    title: "Defense Fixed-Wing Platform - Field Validation",
    description: "3D-printed fixed-wing platforms with payload-release mechanism supplied to authorized defense partner in 2025. Field validation of lightweight structural design and rapid prototyping for defensive operations.",
    videoUrl: "https://drive.google.com/file/d/1byF-jnP6e1aT3hKWmYwGR8jsxPknC7w1/preview",
    category: "Defense Systems",
  }
];