'use client';

import { ProductDetailPage } from '@/components/ProductDetailPage';
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

  return (
    <div className="min-h-screen bg-background">
      <main>
        <ProductDetailPage 
          productId={params.id} 
          onBack={handleBack} 
        />
      </main>
    </div>
  );
}