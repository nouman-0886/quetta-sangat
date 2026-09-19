export type PortionType = 'single' | 'half' | 'full';

export interface PortionPrice {
  single?: number;
  half?: number;
  full?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  urduName: string;
  category: 'specials' | 'karahi' | 'bbq' | 'chaye' | 'parathas' | 'sides';
  description: string;
  price: PortionPrice;
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
  tags?: string[];
}

export interface MenuCategory {
  id: 'all' | 'specials' | 'karahi' | 'bbq' | 'chaye' | 'parathas' | 'sides';
  name: string;
  urduName: string;
  description: string;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  portion: PortionType;
  price: number;
  quantity: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  highlightDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'family_hall' | 'baithak_dastarkhwan' | 'open_air_courtyard' | 'vip_executive';
  specialRequests?: string;
}
