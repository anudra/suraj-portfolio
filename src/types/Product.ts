export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  images: string[];
  materials: Material[];
  customizations: Customization[];
}

export interface Material {
  id: string;
  name: string;
  priceMultiplier: number;
  description: string;
  color?: string;
}

export interface Customization {
  id: string;
  name: string;
  type: 'select' | 'input' | 'checkbox';
  options?: CustomizationOption[];
  priceModifier?: number;
  required?: boolean;
}

export interface CustomizationOption {
  id: string;
  name: string;
  priceModifier: number;
}

export interface OrderRequest {
  productId: string;
  selectedMaterial: string;
  customizations: Record<string, any>;
  totalPrice: number;
  customerEmail: string;
}