import { useState } from 'react';
import { products } from '../lib/products';
import { Product } from '../types/Product';
import { CustomQuoteModal } from './CustomQuoteModal';

interface ProductsPageProps {
  onProductSelect: (productId: string) => void;
}

export function ProductsPage({ onProductSelect }: ProductsPageProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-semibold text-black mb-4">
            3D Printing <span className="underline">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of high-quality 3D printed products. From custom figurines to architectural models, 
            we bring your ideas to life with precision and creativity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium">
            All Products
          </button>
          {categories.map((category) => (
            <button 
              key={category}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={() => onProductSelect(product.id)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-black text-white rounded-3xl p-12">
            <h2 className="text-4xl font-semibold mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We specialize in custom 3D printing projects. Get in touch to discuss your unique requirements.
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors border-2 border-white"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* Custom Quote Modal */}
      <CustomQuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
      <div className="relative overflow-hidden" onClick={onSelect}>
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2 group-hover:underline transition-all">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">
            ${product.basePrice}
            <span className="text-sm font-normal text-gray-500 ml-1">starting from</span>
          </div>
          
          <button 
            onClick={onSelect}
            className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Customize
          </button>
        </div>

        {/* Material Preview */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Materials:</span>
            <div className="flex gap-2">
              {product.materials.slice(0, 3).map((material) => (
                <div 
                  key={material.id}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: material.color }}
                  title={material.name}
                />
              ))}
              {product.materials.length > 3 && (
                <span className="text-xs text-gray-400">+{product.materials.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}