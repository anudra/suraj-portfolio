import { useState } from 'react';
import { products } from '@/lib/products';
import { Product, Material, OrderRequest } from '../types/Product';
import { OrderModal } from './OrderModal';
import { IoArrowBack } from 'react-icons/io5';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetailPage({ productId, onBack }: ProductDetailPageProps) {
  const product = products.find(p => p.id === productId);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(product?.materials[0] || null);
  const [customizations, setCustomizations] = useState<Record<string, any>>({});
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !product) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next image
      setSelectedImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      // Swipe right - previous image
      setSelectedImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen relative overflow-hidden pt-20 pb-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-semibold text-white mb-8">Product Not Found</h1>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600/50 hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:scale-105 mx-auto"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Products</span>
          </button>
        </div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    let totalPrice = product.basePrice;
    
    if (selectedMaterial) {
      totalPrice *= selectedMaterial.priceMultiplier;
    }

    product.customizations.forEach(customization => {
      const value = customizations[customization.id];
      if (value) {
        if (customization.type === 'select' && customization.options) {
          const option = customization.options.find(opt => opt.id === value);
          if (option) totalPrice += option.priceModifier;
        } else if (customization.type === 'checkbox' && value === true) {
          totalPrice += customization.priceModifier || 0;
        } else if (customization.type === 'input' && value.trim()) {
          totalPrice += customization.priceModifier || 0;
        }
      }
    });

    return totalPrice;
  };

  const handleCustomizationChange = (customizationId: string, value: any) => {
    setCustomizations(prev => ({
      ...prev,
      [customizationId]: value
    }));
  };

  const handleOrder = () => {
    setShowOrderModal(true);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 pb-16">
      {/* Professional Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-transparent to-gray-600/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(156,163,175,0.05)_0%,transparent_70%)] animate-pulse" style={{animationDuration: '6s', animationDelay: '0s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(156,163,175,0.04)_0%,transparent_70%)] animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in-up">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border border-gray-600/50 hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            <IoArrowBack className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Products</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image Display */}
            <div 
              className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 group touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={product.images[selectedImageIndex]} 
                alt={`${product.name} - View ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                draggable={false}
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImageIndex + 1} / {product.images.length}
                  </div>
                </>
              )}
            </div>
            
            {/* Thumbnail Images - Responsive horizontal scroll */}
            {product.images.length > 1 && (
              <div className="relative">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                        selectedImageIndex === index 
                          ? 'border-white shadow-lg shadow-white/20' 
                          : 'border-gray-700/50 hover:border-gray-500'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-white/10"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Details & Customization */}
          <div className="space-y-6 sm:space-y-8">
            {/* Product Info */}
            <div>
              <div className="inline-block bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-gray-500/30">
                {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-tight">{product.name}</h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">{product.description}</p>
              
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ${totalPrice.toFixed(2)}
                {totalPrice !== product.basePrice && (
                  <span className="text-sm sm:text-base md:text-lg font-normal text-gray-400 ml-2">
                    (Base: ${product.basePrice})
                  </span>
                )}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Choose Material</h3>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {product.materials.map((material) => (
                  <div
                    key={material.id}
                    onClick={() => setSelectedMaterial(material)}
                    className={`p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedMaterial?.id === material.id
                        ? 'border-white bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg'
                        : 'border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 flex-shrink-0"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-white text-sm sm:text-base truncate">{material.name}</span>
                          <span className="text-xs sm:text-sm text-gray-400 flex-shrink-0">
                            {material.priceMultiplier === 1 ? 'Base price' : `+${((material.priceMultiplier - 1) * 100).toFixed(0)}%`}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 line-clamp-1">{material.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customizations */}
            {product.customizations.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Customization Options</h3>
                <div className="space-y-4 sm:space-y-6">
                  {product.customizations.map((customization) => (
                    <div key={customization.id}>
                      <label className="block text-sm sm:text-base font-medium text-white mb-2">
                        {customization.name}
                        {customization.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      
                      {customization.type === 'select' && customization.options && (
                        <select
                          value={customizations[customization.id] || ''}
                          onChange={(e) => handleCustomizationChange(customization.id, e.target.value)}
                          className="w-full p-3 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:ring-2 focus:ring-white focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          {customization.options.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name} {option.priceModifier > 0 && `(+$${option.priceModifier})`}
                            </option>
                          ))}
                        </select>
                      )}
                      
                      {customization.type === 'checkbox' && (
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={customizations[customization.id] || false}
                            onChange={(e) => handleCustomizationChange(customization.id, e.target.checked)}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white border-gray-600 bg-gray-800 rounded focus:ring-white"
                          />
                          <span className="text-sm sm:text-base text-gray-300">
                            Include {customization.name.toLowerCase()}
                            {customization.priceModifier && ` (+$${customization.priceModifier})`}
                          </span>
                        </label>
                      )}
                      
                      {customization.type === 'input' && (
                        <input
                          type="text"
                          value={customizations[customization.id] || ''}
                          onChange={(e) => handleCustomizationChange(customization.id, e.target.value)}
                          placeholder={`Enter ${customization.name.toLowerCase()}`}
                          className="w-full p-3 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Button */}
            <div className="pt-4 sm:pt-6 border-t border-gray-700/50">
              <button
                onClick={handleOrder}
                className="w-full bg-gradient-to-r from-white to-gray-200 text-gray-900 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-300 flex items-center justify-center gap-2"
              >
                <span>Order Now - ${totalPrice.toFixed(2)}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <p className="text-xs sm:text-sm text-gray-400 text-center mt-2 sm:mt-3 px-2">
                You'll provide your email in the next step to receive your order confirmation and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && selectedMaterial && (
        <OrderModal
          product={product}
          selectedMaterial={selectedMaterial}
          customizations={customizations}
          totalPrice={totalPrice}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </div>
  );
}