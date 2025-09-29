'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Palette, Video, Mail, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface ResponsiveNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'My Education/Experience', icon: Briefcase },
  { id: 'designs', label: 'My Designs/Work', icon: Palette },
  { id: 'videos', label: 'My Products', icon: Video },
  { id: 'contact', label: 'Contact Me', icon: Mail },
];

export function ResponsiveNavigation({ currentPage, onPageChange }: ResponsiveNavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavigation = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  // Desktop Navigation
  if (!isMobile) {
    const leftNavItems = navigationItems.slice(0, 3);
    const rightNavItems = navigationItems.slice(3);

    return (
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="backdrop-blur-md bg-black/90 border border-white/20 rounded-[50px] px-8 py-4">
          <div className="flex items-center gap-6">
            {/* Left Navigation Items */}
            {leftNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-white text-black'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Center Name/Logo */}
            <div className="px-8">
              <h1 className="text-white font-bold text-xl tracking-wider">SURAJ TP</h1>
            </div>

            {/* Right Navigation Items */}
            {rightNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-white text-black'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mobile Navigation (Sidebar)
  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/20">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-white font-bold text-lg">SURAJ TP</h1>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-black/95 border-white/20 backdrop-blur-md">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <h2 className="text-white font-semibold text-lg">Menu</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-300"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex-1 pt-6">
                  <div className="space-y-2">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavigation(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                            currentPage === item.id
                              ? 'bg-white text-black'
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          <IconComponent className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </nav>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/60 text-sm text-center">
                    © 2024 Portfolio Website
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile content spacer */}
      <div className="h-20" />
    </>
  );
}