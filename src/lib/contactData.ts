import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Twitter, LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
  services: string[];
}

export const contactData: ContactData = {
  title: "Let's Work Together",
  subtitle: "Ready to bring your ideas to life? Let's discuss your next project!",
  email: "suraj@example.com",
  phone: "+91 98765 43210",
  location: "Kerala, India",
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/surajtp", icon: Linkedin },
    { name: "Instagram", url: "https://instagram.com/surajtp", icon: Instagram },
    { name: "WhatsApp", url: "https://wa.me/919876543210", icon: MessageCircle },
    { name: "Twitter/X", url: "https://twitter.com/surajtp", icon: Twitter }
  ],
  services: [
    "Drone Design & Development",
    "3D CAD Modeling",
    "3D Printing Services",
    "PCB Design & Manufacturing",
    "Rapid Prototyping",
    "Autonomous Systems Development"
  ]
};