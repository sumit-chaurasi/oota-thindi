export type MenuCategory = {
  id: string;
  label: string;
  items: string[];
};

// These names are public-listing examples from the research brief, not a
// confirmed live menu. Keep the visible draft notice until the owner verifies them.
export const menuCategories: MenuCategory[] = [
  {
    id: "tiffin",
    label: "Tiffin favourites",
    items: ["Steamed Rice Idli", "Kumbakonam Idli Kadapa", "Ven Milagu Pongal"],
  },
  {
    id: "benne-dosa",
    label: "Benne dosa",
    items: ["Benne Podi Dosa", "Benne Beetroot Pachadi Dosa", "Benne Mushroom Roast Dosa"],
  },
  {
    id: "regional",
    label: "Regional plates",
    items: ["Bise Bele Bath", "Kovil Puliyogare Rice", "Thayir Sadam"],
  },
  {
    id: "kerala-chettinad",
    label: "Kerala & Chettinad",
    items: ["Appam with Stew", "Neer Dosa", "Puttu with Kadala Curry"],
  },
  {
    id: "sweet-kaapi",
    label: "Sweets & kaapi",
    items: ["Ghee Pineapple Kesari", "Elaneer Payasam", "Madras Filter Kaapi"],
  },
];

export const featuredDishes = [
  {
    name: "Benne Podi Dosa",
    note: "A listing example — confirm the current menu.",
    asset: "food-benne-podi-dosa.jpg",
    color: "mango",
  },
  {
    name: "Appam with Stew",
    note: "A listing example — confirm the current menu.",
    asset: "food-appam-stew.jpg",
    color: "leaf",
  },
  {
    name: "Ghee Pineapple Kesari",
    note: "A listing example — confirm the current menu.",
    asset: "food-pineapple-kesari.jpg",
    color: "berry",
  },
];

export const gallerySlots = [
  { title: "A table of favourites", asset: "food-spread.jpg", ratio: "wide" },
  { title: "Inside Oota Thindi", asset: "interior-main.jpg", ratio: "portrait" },
  { title: "Filter kaapi moment", asset: "drink-filter-kaapi.jpg", ratio: "square" },
  { title: "The Oota Thindi storefront", asset: "storefront.jpg", ratio: "square" },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/theootathindi/" },
  { label: "Facebook", href: "https://www.facebook.com/theootathindi" },
  { label: "YouTube", href: "https://www.youtube.com/@theootathindi" },
  { label: "Pinterest", href: "https://pin.it/6fGCSRjWz" },
];

export const restaurantAddress =
  "Shop 1, Prem Ratan CHSL, Building 8, Ward R/C, MCF Road, opposite Natural Ice Cream, Prem Nagar, Borivali West, Mumbai, Maharashtra 400092, India";

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantAddress)}`;
