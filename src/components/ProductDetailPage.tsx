import { useState } from 'react';
import { products } from '@/lib/products';
import { Product, Material, OrderRequest } from '../types/Product';
import { OrderModal } from './OrderModal';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetailPage({ productId, onBack }: ProductDetailPageProps) {
  const product = products.find(p => p.id === productId);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(product?.materials[0] || null);
  const [customizations, setCustomizations] = useState<Record<string, any>>({});
  const [showOrderModal, setShowOrderModal] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-black mb-4">Product Not Found</h1>
          <button 
            onClick={onBack}
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Products
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
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Additional images if available */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details & Customization */}
          <div className="space-y-8">
            {/* Product Info */}
            <div>
              <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-semibold text-black mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{product.description}</p>
              
              <div className="text-3xl font-bold text-black">
                ${totalPrice.toFixed(2)}
                {totalPrice !== product.basePrice && (
                  <span className="text-lg font-normal text-gray-500 ml-2">
                    (Base: ${product.basePrice})
                  </span>
                )}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Choose Material</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.materials.map((material) => (
                  <div
                    key={material.id}
                    onClick={() => setSelectedMaterial(material)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedMaterial?.id === material.id
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-black">{material.name}</span>
                          <span className="text-sm text-gray-500">
                            {material.priceMultiplier === 1 ? 'Base price' : `+${((material.priceMultiplier - 1) * 100).toFixed(0)}%`}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{material.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customizations */}
            {product.customizations.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Customization Options</h3>
                <div className="space-y-6">
                  {product.customizations.map((customization) => (
                    <div key={customization.id}>
                      <label className="block text-sm font-medium text-black mb-2">
                        {customization.name}
                        {customization.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      
                      {customization.type === 'select' && customization.options && (
                        <select
                          value={customizations[customization.id] || ''}
                          onChange={(e) => handleCustomizationChange(customization.id, e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
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
                            className="w-5 h-5 text-black border-gray-300 rounded focus:ring-black"
                          />
                          <span className="text-gray-700">
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
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleOrder}
                className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Order Now - ${totalPrice.toFixed(2)}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-3">
                You'll provide your email in the next step to receive your order confirmation and updates.
              </p>
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