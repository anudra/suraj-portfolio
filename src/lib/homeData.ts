export interface HomeData {
  greeting: string;
  title: string;
  description: string;
  image: string;
  stats: {
    experience: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
}

export const homeData: HomeData = {
  greeting: "Hello!",
  title: "I'm Suraj TP, Engineering Innovator",
  description: "Passionate about drones, prototyping, and innovative design. Specializing in 3D CAD modeling, FPV drone technology, and turning ideas into high-performance solutions.",
  image: '/Icon 28.png',
  stats: {
    experience: "5+ Years",
  },
  buttons: {
    primary: "Explore Products",
    secondary: "View Portfolio"
  }
};