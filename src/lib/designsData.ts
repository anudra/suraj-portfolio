export interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const designsData: Design[] = [
  {
    id: 1,
    title: "India's Fastest Drone - 329 km/h",
    description: "Aero-structure design for India's fastest drone that achieved a record-breaking speed of 329 km/h. Focused on aerodynamic optimization, structural integrity, and high-speed performance engineering.",
    category: "Drone Engineering",
    image: "https://drive.google.com/uc?export=view&id=1WI7r0tMjicDE6pBhXpphKi1f3PnByMsI",

  },
  {
    id: 2,
    title: "ADDC Autonomous Drone - 1st Place Winner",
    description: "Designed and developed an autonomous drone for SAE India's ADDC challenge, winning First Place in the Unique Technological Development Award. Features advanced navigation and autonomous flight systems.",
    category: "Autonomous Systems",
    image: "https://drive.google.com/uc?export=view&id=14M8SJ_c0VbJ2Wla2nC_pPea2CkNgFFox",
  },
  {
    id: 3,
    title: "FPV Racing & Freestyle Drones",
    description: "Built and customized high-performance FPV racing and freestyle drones, optimized for speed, agility, and reliability. Custom frame designs and electronics integration.",
    category: "FPV Technology",
    image: "https://drive.google.com/uc?export=view&id=1y6GMdqK5xo1N-4ILtMIWPCEXO1OLZLnt",
  },
  {
    id: 4,
    title: "3D Printed Engineering Prototypes",
    description: "Designed and fabricated custom 3D printed components and engineering prototypes for clients and personal projects. Nationwide service delivery across India.",
    category: "3D Printing Services",
    image: "https://drive.google.com/uc?export=view&id=1k9y8Cr_mc8unBwMUD_QQ8PTOvzolUWAZ"
  }
];