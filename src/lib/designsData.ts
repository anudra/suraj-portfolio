export interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  year: string;
}

export const designsData: Design[] = [
  {
    id: 1,
    title: "World's Fastest Drone - 329 km/h",
    description: "Aero-structure design for the world's fastest drone that achieved a record-breaking speed of 329 km/h. Focused on aerodynamic optimization, structural integrity, and high-speed performance engineering.",
    category: "Drone Engineering",
    image: "/images/fastest-drone.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "Flower-Dropping Drone System",
    description: "Final year project combining 3D printed parts with carbon fiber for strength and lightweight efficiency. Features precision dropping mechanism and advanced flight stability systems.",
    category: "Final Year Project",
    image: "/images/flower-drone.jpg",
    year: "2024"
  },
  {
    id: 3,
    title: "ADDC Autonomous Drone - 1st Place Winner",
    description: "Designed and developed an autonomous drone for SAE India's ADDC challenge, winning First Place in the Unique Technological Development Award. Features advanced navigation and autonomous flight systems.",
    category: "Autonomous Systems",
    image: "/images/addc-drone.jpg",
    year: "2023"
  },
  {
    id: 4,
    title: "FPV Racing & Freestyle Drones",
    description: "Built and customized high-performance FPV racing and freestyle drones, optimized for speed, agility, and reliability. Custom frame designs and electronics integration.",
    category: "FPV Technology",
    image: "/images/fpv-drones.jpg",
    year: "2023"
  },
  {
    id: 5,
    title: "3D Printed Engineering Prototypes",
    description: "Designed and fabricated custom 3D printed components and engineering prototypes for clients and personal projects. Nationwide service delivery across India.",
    category: "3D Printing Services",
    image: "/images/3d-prototypes.jpg",
    year: "2024"
  }
];