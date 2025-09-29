'use client';

import { useState } from 'react';
import { PortfolioPage } from '@/components/PortfolioPage';
import { ResponsiveNavigation } from '@/components/ResponsiveNavigation';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentSection(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavigation 
        currentPage={currentSection} 
        onPageChange={handlePageChange} 
      />
      <main>
        <PortfolioPage currentSection={currentSection} />
      </main>
    </div>
  );
}