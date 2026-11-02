export interface MenuItem {
  id: string;
  name: string;
  regionalName?: string;
  category: MenuCategoryId;
  price: number;
  description: string;
  isJain: boolean;
  isSignature?: boolean;
  isChefSpecial?: boolean;
  image?: string;
  serving?: string;
  badge?: string;
  spiciness?: "mild" | "medium" | "spicy";
}

export type MenuCategoryId =
  | "thindi-dosa"
  | "rava-dosa"
  | "combo-meals"
  | "chettinad"
  | "biryani"
  | "sweets"
  | "cold-beverages"
  | "hot-beverages";

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  tamilKannadaTitle?: string;
  description: string;
  servingNote?: string;
  coverImage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "food" | "ambience" | "feast" | "menu";
  image: string;
  alt: string;
  caption: string;
  aspect?: "wide" | "tall" | "square";
  featured?: boolean;
}

export interface RestaurantInfo {
  name: string;
  subtitle: string;
  tagline: string;
  fullTagline: string;
  announcement: string;
  address: string;
  landmark: string;
  area: string;
  pincode: string;
  phoneDisplay: string;
  phoneStatusNote: string;
  spendForTwoListing: string;
  cuisineDescription: string;
  cuisineTags: string[];
  googleMapsUrl: string;
  socials: {
    platform: string;
    url: string;
    handle: string;
  }[];
  hoursNotice: string;
  orderPartners: {
    name: string;
    url: string;
    status: "active" | "coming_soon";
    badge: string;
  }[];
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  seatingPreference: "indoor" | "patio" | "any";
}
