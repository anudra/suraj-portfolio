import { useState } from 'react';
import { Product, Material, OrderRequest } from '../types/Product';

interface OrderModalProps {
  product: Product;
  selectedMaterial: Material;
  customizations: Record<string, any>;
  totalPrice: number;
  onClose: () => void;
}

export function OrderModal({ product, selectedMaterial, customizations, totalPrice, onClose }: OrderModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    const orderRequest: OrderRequest = {
      productId: product.id,
      selectedMaterial: selectedMaterial.id,
      customizations,
      totalPrice,
      customerEmail: email
    };

    // In a real app, you would send this to your backend
    console.log('Order Request:', orderRequest);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setOrderSubmitted(true);

    // Auto-close after success
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const formatCustomizations = () => {
    return product.customizations.map(customization => {
      const value = customizations[customization.id];
      if (!value) return null;

      let displayValue = value;
      if (customization.type === 'select' && customization.options) {
        const option = customization.options.find(opt => opt.id === value);
        displayValue = option?.name || value;
      } else if (customization.type === 'checkbox') {
        displayValue = value ? 'Yes' : 'No';
      }

      return {
        name: customization.name,
        value: displayValue
      };
    }).filter(Boolean);
  };

  if (orderSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-black mb-2">Order Submitted!</h3>
          <p className="text-gray-600 mb-4">
            We've received your order request and will contact you at <strong>{email}</strong> within 24 hours 
            with a detailed quote and production timeline.
          </p>
          <p className="text-sm text-gray-500">
            This window will close automatically in a few seconds.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-black">Complete Your Order</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-black mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium text-black">{product.name}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Material:</span>
                <span className="font-medium text-black">{selectedMaterial.name}</span>
              </div>

              {formatCustomizations().map((custom, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{custom?.name}:</span>
                  <span className="font-medium text-black">{custom?.value}</span>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-3 mt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-black">Total:</span>
                  <span className="text-2xl font-bold text-black">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">
                We'll use this email to send you order updates, quotes, and delivery information.
              </p>
            </div>

            {/* Important Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Order Process</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• We'll review your order and send a detailed quote within 24 hours</li>
                    <li>• Production typically takes 3-7 business days</li>
                    <li>• Payment is required before we begin production</li>
                    <li>• Shipping costs will be calculated based on your location</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting Order...
                </>
              ) : (
                <>
                  Submit Order Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}