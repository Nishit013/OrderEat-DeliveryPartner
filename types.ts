
export interface Address {
  id: string;
  type: string;
  houseNo: string;
  area: string;
  landmark?: string;
  lat?: number;
  lng?: number;
}

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  addresses?: Address[];
  createdAt?: number;
  isAdmin?: boolean;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleType: 'Bike' | 'Scooter' | 'Car' | 'Cycle';
  vehicleNumber: string;
  licenseNumber: string;
  imageUrl?: string;
  isApproved: boolean; // Admin approval
  isOnline: boolean;   // Partner toggle
  joinedAt: number;
  currentLocation?: {
      lat: number;
      lng: number;
      updatedAt: number;
  };
  // Active Time Tracking
  lastOnlineAt?: number;      // Timestamp when they last went online
  dailyActiveMs?: number;     // Total milliseconds active today (stored)
  lastActiveDate?: string;    // Date string to check for daily reset
  upiId?: string;             // For Payouts
}

export interface AdminSettings {
  taxRate: number; // Global GST %
  deliveryBaseFee: number; // Base fee for first 2km
  deliveryPerKm: number; // Additional per km after 2km
  platformCommission: number; // Default % taken from restaurant
  freeDeliveryOrderValue?: number; // Minimum order value for free delivery
}

export enum OrderStatus {
  PLACED = 'PLACED',
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface Variant {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: string;
  imageUrl?: string;
  rating?: number;
  votes?: number;
  variants?: Variant[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isVeg: boolean;
  restaurantId: string;
  selectedVariant?: Variant;
}

export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: number;
  deliveryAddress: string;
  customerLat?: number;
  customerLng?: number;
  paymentMethod: 'COD' | 'ONLINE';
  
  // Delivery Specifics
  deliveryPartnerId?: string;
  deliveryPartner?: {
    id: string;
    name: string;
    phone: string;
    vehicleNumber: string;
  };
  partnerPayout?: number; // Calculated amount for partner
  ratings?: {
      restaurant: number;
      delivery?: number;
  };
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  lat?: number;
  lng?: number;
  phone: string;
  imageUrl?: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  cuisine: string[];
  promoted?: boolean;
  discount?: string;
  isApproved?: boolean;
  menu?: Record<string, MenuItem>;
  
  // Financial Overrides
  customTaxRate?: number;
  customDeliveryFee?: number;
  commissionRate?: number;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'FLAT' | 'PERCENTAGE';
  value: number;
  minOrder: number;
  maxDiscount?: number;
  validForFirstOrder?: boolean;
}

export interface FilterState {
  sortBy: 'Relevance' | 'Rating' | 'DeliveryTime' | 'CostLow' | 'CostHigh';
  rating: number | null;
  isVeg: boolean;
  hasOffers: boolean;
  costRange: [number, number] | null;
  cuisines: string[];
  deliveryTimeMax?: number;
}

export interface InspirationItem {
  id: string;
  name: string;
  image: string;
}

export interface GlobalOffer {
  isActive: boolean;
  text: string;
  subText: string;
  gradientStart: string;
  gradientEnd: string;
  actionText: string;
  textColor: string;
}
