import { IconType } from 'react-icons';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
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
  email: "Drprint.3dwork@gmail.com",
  phone: "+91 94492 14905",
  location: "Bengaluru, India",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/suraj-tp-8b056027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: FaLinkedin },
    { name: "Instagram", url: "https://www.instagram.com/dr.print_3d?utm_source=qr&igsh=enRsNzl2ZTMxNXVn", icon: FaInstagram },
    { name: "WhatsApp", url: "https://wa.me/919449214905", icon: FaWhatsapp },
    { name: "Twitter/X", url: "https://twitter.com/surajtp", icon: FaXTwitter }
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