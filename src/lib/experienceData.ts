export type TimelineItem = {
  role: string;
  period: string;
  description: string;
  skills: string[];
  type: "experience" | "education";
};

export const timelineData: TimelineItem[] = [
  {
    role: "B.E. Electronics and Communication Engineering",
    period: "2023 – Present",
    description:
      "Currently pursuing Bachelor of Engineering in Electronics and Communication (3rd year). Specializing in embedded systems, communication hardware, and electronic circuit design with focus on drone technology applications.",
    skills: ["Electronics Engineering", "Embedded Systems", "PCB Design"],
    type: "education",
  },
  {
    role: "3D Printing Service Provider",
    period: "2021 – Present",
    description:
      "Running a nationwide 3D printing service across India, delivering prototypes and custom parts for clients. Expertise in additive manufacturing, rapid prototyping, and engineering solutions.",
    skills: ["3D Printing", "Rapid Prototyping", "Client Services"],
    type: "experience",
  },
  {
    role: "FPV Drone Piloting",
    period: "2020 – Present",
    description: "Flying and building FPV drones with 5+ years of experience in custom design, tuning, and advanced piloting. Specialized in freestyle and cinematic flying, with expertise in drone assembly, electronics integration, and flight optimization.",
    skills: ["FPV Piloting", "Drone Assembly", "Flight Optimization"],
    type: "experience",
  },
  {
    role: "India's Fastest Drone Project",
    period: "2024",
    description:
      "Designed aero-structure for India's fastest drone that achieved a record-breaking speed of 329 km/h. Focused on aerodynamic optimization, structural integrity, and high-speed performance engineering.",
    skills: ["Aero-structure Design", "High-Speed Aerodynamics", "Performance Engineering"],
    type: "experience",
  },
  {
    role: "Final Year Project - Flower-Dropping Drone",
    period: "2024",
    description:
      "Developed an innovative drone combining 3D printed parts with carbon fiber for optimal strength and lightweight efficiency. Focused on precision dropping mechanisms and flight stability.",
    skills: ["Carbon Fiber Integration", "3D Design", "Flight Mechanics"],
    type: "experience",
  },
  {
    role: "ADDC SAE India - 1st Place Winner",
    period: "2023",
    description:
      "Designed and developed an autonomous drone for the Autonomous Drone Development Challenge, winning First Place in the Unique Technological Development Award. Integrated advanced flight systems and autonomous navigation.",
    skills: ["Autonomous Systems", "Drone Development", "Flight Systems"],
    type: "experience",
  },
];