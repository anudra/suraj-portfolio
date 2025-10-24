'use client';

import { useState } from 'react';
import { ProductsPage } from '@/components/ProductsPage';
import { useRouter } from 'next/navigation';

export default function ProductsPageRoute() {
  const router = useRouter();

  const handleProductSelect = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <ProductsPage onProductSelect={handleProductSelect} />
      </main>
    </div>
  );
}