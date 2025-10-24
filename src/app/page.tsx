'use client';

import { useState } from 'react';
import { PortfolioPage } from '@/components/PortfolioPage';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <main>
        <PortfolioPage currentSection={currentSection} />
      </main>
    </div>
  );
}