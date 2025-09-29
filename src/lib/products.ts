import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 'miniature-figurine',
    name: 'Custom Miniature Figurine',
    description: 'Personalized miniature figurines perfect for gaming, collectibles, or gifts. High-detail printing with multiple material options.',
    basePrice: 25.99,
    category: 'Collectibles',
    images: [
      'https://images.unsplash.com/photo-1605895770262-c72b353f9090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50aW5nJTIwbWluaWF0dXJlJTIwZmlndXJpbmV8ZW58MXx8fHwxNzU3MTc2MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'pla',
        name: 'PLA Plastic',
        priceMultiplier: 1.0,
        description: 'Standard biodegradable plastic, great for beginners',
        color: '#ffffff'
      },
      {
        id: 'petg',
        name: 'PETG',
        priceMultiplier: 1.3,
        description: 'Strong, clear plastic with excellent durability',
        color: '#e0e0e0'
      },
      {
        id: 'resin',
        name: 'High-Detail Resin',
        priceMultiplier: 2.0,
        description: 'Ultra-high detail resin for intricate features',
        color: '#f5f5f5'
      }
    ],
    customizations: [
      {
        id: 'size',
        name: 'Figure Size',
        type: 'select',
        required: true,
        options: [
          { id: 'small', name: '28mm (Small)', priceModifier: 0 },
          { id: 'medium', name: '32mm (Medium)', priceModifier: 5 },
          { id: 'large', name: '54mm (Large)', priceModifier: 15 }
        ]
      },
      {
        id: 'base',
        name: 'Include Base',
        type: 'checkbox',
        priceModifier: 3
      },
      {
        id: 'custom_text',
        name: 'Custom Name/Text',
        type: 'input',
        priceModifier: 5
      }
    ]
  },
  {
    id: 'decorative-vase',
    name: 'Geometric Decorative Vase',
    description: 'Modern geometric vases that combine art and functionality. Perfect for home decor with customizable patterns.',
    basePrice: 35.99,
    category: 'Home Decor',
    images: [
      'https://images.unsplash.com/photo-1748599327993-3e8b4f18c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NTcxNzYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'pla',
        name: 'PLA Plastic',
        priceMultiplier: 1.0,
        description: 'Standard biodegradable plastic',
        color: '#ffffff'
      },
      {
        id: 'wood_fill',
        name: 'Wood-Filled PLA',
        priceMultiplier: 1.5,
        description: 'Wood fiber infused for natural texture',
        color: '#8B4513'
      },
      {
        id: 'marble_fill',
        name: 'Marble-Filled PLA',
        priceMultiplier: 1.7,
        description: 'Marble powder for elegant finish',
        color: '#F5F5DC'
      }
    ],
    customizations: [
      {
        id: 'size',
        name: 'Vase Size',
        type: 'select',
        required: true,
        options: [
          { id: 'small', name: '15cm Height', priceModifier: 0 },
          { id: 'medium', name: '20cm Height', priceModifier: 10 },
          { id: 'large', name: '25cm Height', priceModifier: 20 }
        ]
      },
      {
        id: 'pattern',
        name: 'Pattern Style',
        type: 'select',
        required: true,
        options: [
          { id: 'geometric', name: 'Geometric', priceModifier: 0 },
          { id: 'organic', name: 'Organic Curves', priceModifier: 5 },
          { id: 'minimalist', name: 'Minimalist', priceModifier: 0 }
        ]
      }
    ]
  },
  {
    id: 'jewelry-pendant',
    name: 'Custom Jewelry Pendant',
    description: 'Unique 3D printed jewelry pendants with intricate designs. Lightweight and durable for everyday wear.',
    basePrice: 18.99,
    category: 'Jewelry',
    images: [
      'https://images.unsplash.com/photo-1690124815040-6604fbc46254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBqZXdlbHJ5JTIwcGVuZGFudHxlbnwxfHx8fDE3NTcxNzYxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'resin',
        name: 'Premium Resin',
        priceMultiplier: 1.0,
        description: 'High-quality resin for jewelry',
        color: '#ffffff'
      },
      {
        id: 'metal_fill',
        name: 'Metal-Filled Resin',
        priceMultiplier: 2.5,
        description: 'Resin with metal particles for premium feel',
        color: '#C0C0C0'
      }
    ],
    customizations: [
      {
        id: 'design',
        name: 'Design Style',
        type: 'select',
        required: true,
        options: [
          { id: 'celtic', name: 'Celtic Knot', priceModifier: 0 },
          { id: 'floral', name: 'Floral Pattern', priceModifier: 2 },
          { id: 'geometric', name: 'Geometric', priceModifier: 0 },
          { id: 'custom', name: 'Custom Design', priceModifier: 10 }
        ]
      },
      {
        id: 'chain',
        name: 'Include Chain',
        type: 'checkbox',
        priceModifier: 8
      }
    ]
  },
  {
    id: 'architectural-model',
    name: 'Architectural Scale Model',
    description: 'Precise architectural models for presentations, education, or display. Professional quality with fine detail.',
    basePrice: 89.99,
    category: 'Professional',
    images: [
      'https://images.unsplash.com/photo-1727833369293-fbc74e2819cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBhcmNoaXRlY3R1cmFsJTIwbW9kZWx8ZW58MXx8fHwxNzU3MTc2MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'pla',
        name: 'PLA Plastic',
        priceMultiplier: 1.0,
        description: 'Standard plastic for basic models',
        color: '#ffffff'
      },
      {
        id: 'petg',
        name: 'PETG',
        priceMultiplier: 1.3,
        description: 'Clear, strong plastic for professional use',
        color: '#e0e0e0'
      },
      {
        id: 'abs',
        name: 'ABS Plastic',
        priceMultiplier: 1.2,
        description: 'Durable plastic for handling',
        color: '#f0f0f0'
      }
    ],
    customizations: [
      {
        id: 'scale',
        name: 'Model Scale',
        type: 'select',
        required: true,
        options: [
          { id: '1_100', name: '1:100', priceModifier: 0 },
          { id: '1_50', name: '1:50', priceModifier: 25 },
          { id: '1_25', name: '1:25', priceModifier: 50 }
        ]
      },
      {
        id: 'base',
        name: 'Display Base',
        type: 'checkbox',
        priceModifier: 15
      },
      {
        id: 'landscape',
        name: 'Include Landscape',
        type: 'checkbox',
        priceModifier: 20
      }
    ]
  },
  {
    id: 'phone-case',
    name: 'Custom Phone Case',
    description: 'Personalized phone cases with your own design or text. Perfect fit guaranteed for your device model.',
    basePrice: 22.99,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1747228983994-60a79f4b4e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBjdXN0b20lMjBwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzU3MTc2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'tpu',
        name: 'Flexible TPU',
        priceMultiplier: 1.0,
        description: 'Flexible, shock-absorbing material',
        color: '#000000'
      },
      {
        id: 'petg',
        name: 'Hard PETG',
        priceMultiplier: 1.1,
        description: 'Rigid protection with clear finish',
        color: '#e0e0e0'
      }
    ],
    customizations: [
      {
        id: 'phone_model',
        name: 'Phone Model',
        type: 'select',
        required: true,
        options: [
          { id: 'iphone14', name: 'iPhone 14', priceModifier: 0 },
          { id: 'iphone14pro', name: 'iPhone 14 Pro', priceModifier: 0 },
          { id: 'samsungs23', name: 'Samsung Galaxy S23', priceModifier: 0 },
          { id: 'pixel7', name: 'Google Pixel 7', priceModifier: 0 }
        ]
      },
      {
        id: 'design_upload',
        name: 'Upload Custom Design',
        type: 'checkbox',
        priceModifier: 8
      },
      {
        id: 'text_engraving',
        name: 'Text Engraving',
        type: 'input',
        priceModifier: 5
      }
    ]
  },
  {
    id: 'toy-robot',
    name: 'Articulated Toy Robot',
    description: 'Fun, poseable robot toys with moving joints. Great for kids and collectors alike.',
    basePrice: 28.99,
    category: 'Toys',
    images: [
      'https://images.unsplash.com/photo-1740625942947-26caf3a16d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjB0b3klMjByb2JvdHxlbnwxfHx8fDE3NTcxNzYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    materials: [
      {
        id: 'pla',
        name: 'PLA Plastic',
        priceMultiplier: 1.0,
        description: 'Safe, non-toxic plastic for toys',
        color: '#ffffff'
      },
      {
        id: 'petg',
        name: 'PETG',
        priceMultiplier: 1.3,
        description: 'More durable for active play',
        color: '#e0e0e0'
      }
    ],
    customizations: [
      {
        id: 'size',
        name: 'Robot Size',
        type: 'select',
        required: true,
        options: [
          { id: 'small', name: '10cm (Small)', priceModifier: 0 },
          { id: 'medium', name: '15cm (Medium)', priceModifier: 8 },
          { id: 'large', name: '20cm (Large)', priceModifier: 18 }
        ]
      },
      {
        id: 'color_scheme',
        name: 'Color Scheme',
        type: 'select',
        required: true,
        options: [
          { id: 'classic', name: 'Classic Silver', priceModifier: 0 },
          { id: 'colorful', name: 'Multi-Color', priceModifier: 5 },
          { id: 'custom', name: 'Custom Colors', priceModifier: 10 }
        ]
      },
      {
        id: 'accessories',
        name: 'Include Accessories',
        type: 'checkbox',
        priceModifier: 7
      }
    ]
  }
];