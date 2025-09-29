'use client';

import { ProductDetailPage } from '@/components/ProductDetailPage';
import { ResponsiveNavigation } from '@/components/ResponsiveNavigation';
import { useRouter } from 'next/navigation';

interface ProductDetailRouteProps {
  params: {
    id: string;
  };
}

export default function ProductDetailRoute({ params }: ProductDetailRouteProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/products');
  };

  const handlePageChange = (page: string) => {
    if (page === 'products') {
      router.push('/products');
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
        <ProductDetailPage 
          productId={params.id} 
          onBack={handleBack} 
        />
      </main>
    </div>
  );
}