import { useState } from 'react';
import { products } from '../lib/products';
import { Product } from '../types/Product';
import { CustomQuoteModal } from './CustomQuoteModal';

interface ProductsPageProps {
  onProductSelect: (productId: string) => void;
}

export function ProductsPage({ onProductSelect }: ProductsPageProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-transparent to-gray-600/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05)_0%,transparent_70%)] animate-pulse" style={{animationDuration: '6s', animationDelay: '0s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(156,163,175,0.04)_0%,transparent_70%)] animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(0,0,0,0.3)_0%,transparent_60%)] animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              My <span className="underline decoration-blue-400/50">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Discover my collection of high-quality 3D printed components, custom prototypes, and engineering solutions. 
              Precision-crafted designs for the modern innovator.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => setSelectedCategory('All Products')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'All Products'
                  ? 'bg-gradient-to-r from-white to-gray-200 text-gray-900 shadow-lg shadow-gray-500/25'
                  : 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 border border-gray-600'
              }`}
            >
              All Products
            </button>
            {categories.map((category, index) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-white to-gray-200 text-gray-900 shadow-lg shadow-gray-500/25'
                    : 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 border border-gray-600'
                }`}
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={() => onProductSelect(product.id)}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-3xl p-12 border border-gray-700/50 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 to-gray-600/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Don't See What You're Looking For?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We specialize in custom drone components and engineering prototypes. Get in touch to discuss your unique requirements.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-white to-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-300"
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
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

// ProductCard component with enhanced dark theme styling
interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  index: number;
}

function ProductCard({ product, onSelect, index }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-700/50 backdrop-blur-sm transform hover:scale-105 animate-fade-in-up"
      style={{animationDelay: `${0.9 + index * 0.1}s`}}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="relative overflow-hidden" onClick={onSelect}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-500/30">
              {product.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-600/50 group-hover:from-white/80 group-hover:to-gray-200/80 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6 relative">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ${product.basePrice}
              <span className="text-sm font-normal text-gray-500 ml-1">starting from</span>
            </div>
            
            <button 
              onClick={onSelect}
              className="bg-gradient-to-r from-white to-gray-200 text-gray-900 px-6 py-2 rounded-full font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-300"
            >
              Customize
            </button>
          </div>

          {/* Material Preview */}
          <div className="pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Materials:</span>
              <div className="flex gap-2">
                {product.materials.slice(0, 3).map((material) => (
                  <div 
                    key={material.id}
                    className="w-4 h-4 rounded-full border border-gray-600 ring-1 ring-gray-500/30 hover:ring-gray-300/50 transition-all duration-300"
                    style={{ backgroundColor: material.color }}
                    title={material.name}
                  />
                ))}
                {product.materials.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.materials.length - 3}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    </div>
  );
}