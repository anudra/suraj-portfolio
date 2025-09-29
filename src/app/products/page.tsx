'use client';

import { useState } from 'react';
import { ProductsPage } from '@/components/ProductsPage';
import { ResponsiveNavigation } from '@/components/ResponsiveNavigation';
import { useRouter } from 'next/navigation';

export default function ProductsPageRoute() {
  const router = useRouter();

  const handleProductSelect = (id: string) => {
    router.push(`/products/${id}`);
  };

  const handlePageChange = (page: string) => {
    if (page === 'products') {
      // Already on products page
      return;
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavigation 
        currentPage="products" 
        onPageChange={handlePageChange} 
      />
      <main>
        <ProductsPage onProductSelect={handleProductSelect} />
      </main>
    </div>
  );
}