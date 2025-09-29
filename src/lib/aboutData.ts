export interface AboutData {
  title: string;
  description: string;
  image: string;
  skills: string[];
  stats: {
    number: string;
    label: string;
  }[];
}

export const aboutData: AboutData = {
  title: "About Me",
  description: "I'm a third-year Electronics and Communication Engineering student with a passion for drones, prototyping, and innovative design. With over five years of experience in 3D CAD modelling, 3D printing, and FPV drone technology, I specialize in blending creativity with engineering precision. From providing professional 3D printing services across India to developing advanced aerial platforms, my journey has been about turning ideas into functional, high-performance solutions.",
  image: 'https://drive.google.com/uc?export=view&id=1qleaGbussXQJuk3caGNPlu7KgahQwSAj',
  skills: [
    "Drone Technology", 
    "3D CAD Design", 
    "FPV Systems", 
    "3D Printing", 
    "PCB Design", 
    "Fusion 360", 
    "Autonomous Systems",
    "Aero-structure Design",
    "Carbon Fiber Integration",
    "Electronics & Embedded Systems",
    "Rapid Prototyping",
    "C Programming"
  ],
  stats: [
    { number: "329", label: "km/h Record Speed" },
    { number: "5+", label: "Years 3D Printing" },
    { number: "1st", label: "Place ADDC Award" }
  ]
};