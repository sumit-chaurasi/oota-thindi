import { GalleryItem } from "../types";
import { assetUrl } from "../utils/assetUrl";

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-spread",
    title: "Grand Dakshin Feast Spread",
    category: "feast",
    image: assetUrl("/assets/food/grand-feast-spread.jpg"),
    alt: "A grand South Indian vegetarian banquet on a tiled restaurant table at The Oota Thindi",
    caption:
      "A celebration of southern flavours: Malabar Parotta, Appam, Idiyappam, Avial, Stew, Sambar, Medu Vadai, Masala Vadai, and brass filter kaapi tumblers.",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-patio",
    title: "The Dining Room & Thindi Coffee House",
    category: "ambience",
    image: assetUrl("/assets/restaurant/interior-patio.webp"),
    alt: "Pink arched architectural facade and Thindi Coffee House kiosk inside Oota Thindi in Borivali West",
    caption:
      "Warm ambient brass lanterns, charming terracotta hues, snake plants, and comfortable artisanal dining seating in Borivali West.",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-benne-dosa",
    title: "Davangere Benne Dosa with Melting Butter",
    category: "food",
    image: assetUrl("/assets/food/benne-dosa.jpg"),
    alt: "Golden crisp Davangere Benne Dosa with melting white butter, served on banana leaf brass thali",
    caption:
      "Our signature Benne Dosa: golden crisp exterior, cloud-soft buttery interior, paired with fresh coconut and tomato-onion chutneys.",
    aspect: "tall",
    featured: true,
  },
  {
    id: "gal-sadhya",
    title: "Traditional Banana Leaf Onam Sadhya",
    category: "feast",
    image: assetUrl("/assets/food/onam-sadhya-leaf.webp"),
    alt: "Authentic 24-item Onam Sadhya served on a fresh plantain leaf with red matta rice and curries",
    caption:
      "A visual and culinary tapestry: red matta rice, avial, olan, thoran, pachadi, crispy pappadam, sharkara varatti, and pradhaman payasams.",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-thali",
    title: "Royal South Indian Thali",
    category: "feast",
    image: assetUrl("/assets/food/south-indian-thali.webp"),
    alt: "Royal Dakshin thali with Malabar parotta, vadai, kesari, and varied curries in brass bowls",
    caption:
      "Every texture and flavor of the South harmonized in a single brass platter with parotta, vadas, payasam, and sambar.",
    aspect: "square",
    featured: true,
  },
  {
    id: "gal-cone-dosa",
    title: "Ghee Roast Cone Dosa Platter",
    category: "food",
    image: assetUrl("/assets/food/cone-dosa.jpg"),
    alt: "Tall crispy cone ghee roast dosa with potato bhaji, drumstick sambar, and trio of chutneys",
    caption:
      "Sculpted to a golden cone and roasted in pure desi ghee, served with potato masala and tempered chutneys.",
    aspect: "tall",
  },
  {
    id: "gal-uttapam",
    title: "Thindi Onion-Tomato Uttapam",
    category: "food",
    image: assetUrl("/assets/food/uttapam-thali.jpg"),
    alt: "Thick spongy Onion Tomato Uttapam on bronze thali with banana leaf, drumstick sambar, and two chutneys",
    caption:
      "Thick, spongy griddled uttapam topped with caramelised red onions, tomatoes, and coriander leaves.",
    aspect: "tall",
  },
  {
    id: "gal-masala-dosa",
    title: "Classic Rolled Masala Dosa",
    category: "food",
    image: assetUrl("/assets/food/masala-dosa-roll.jpg"),
    alt: "Crisp rolled masala dosa with spiced potato filling, chutneys, and temple sketches",
    caption:
      "Golden crispy roll filled with seasoned mustard-tempered potato masala.",
    aspect: "tall",
  },
  {
    id: "gal-halwa",
    title: "Tirunelveli Ghee Halwa with Pistachios & Rose",
    category: "food",
    image: assetUrl("/assets/food/ghee-halwa.jpg"),
    alt: "Glistening wheat ghee halwa topped with pistachios, slivered almonds, and rose petals on silver dish",
    caption:
      "Slow-cooked wheat halwa rich with pure country ghee, garnished with toasted nuts and dried rose petals.",
    aspect: "tall",
  },
  {
    id: "gal-payasam",
    title: "Semiya Payasam in Brass Uruli",
    category: "food",
    image: assetUrl("/assets/food/semiya-payasam.jpg"),
    alt: "Rich vermicelli Semiya Payasam in a traditional antique brass Uruli with roasted cashews",
    caption:
      "Fragrant with green cardamom, golden raisins, and whole fried cashews in traditional brass cookware.",
    aspect: "tall",
  },
  {
    id: "gal-pongal",
    title: "Sakkarai Pongal in Earthen Clay Matka",
    category: "food",
    image: assetUrl("/assets/food/sakkarai-pongal.jpg"),
    alt: "Traditional sweet jaggery Sakkarai Pongal in an earthen clay pot on banana leaf",
    caption:
      "Cooked in clay earthenware with organic jaggery, nutmeg, roasted cashews, and coconut slivers.",
    aspect: "tall",
  },
  {
    id: "gal-potatoes",
    title: "Crispy Urulai Baby Potato Pepper Fry",
    category: "food",
    image: assetUrl("/assets/food/urulai-potato-roast.jpg"),
    alt: "Crispy spiced baby potato fry in brass kadai with curry leaves and rasam",
    caption:
      "Baby potatoes slow-roasted with cracked black Tellicherry pepper and curry leaves.",
    aspect: "tall",
  },
  {
    id: "gal-daytime",
    title: "Al Fresco Dining Terrace",
    category: "ambience",
    image: assetUrl("/assets/restaurant/outdoor-daytime.webp"),
    alt: "Bright daytime view of the al fresco dining area and arched facade at The Oota Thindi",
    caption:
      "Sunny, breezy al fresco seating framed by lush greenery and heritage archways.",
    aspect: "wide",
  },
  {
    id: "gal-menu-index",
    title: "The Oota Thindi 18-Category Culinary Index",
    category: "menu",
    image: assetUrl("/assets/menu/menu-index.webp"),
    alt: "The official printed menu index listing all 18 categories of South Indian specialties",
    caption:
      "Official menu index showing the expansive range from Idli and Dosas to Chettinad specials and Biryanis.",
    aspect: "tall",
  },
  {
    id: "gal-menu-dosa",
    title: "Printed Menu: Thindi Dosa Varieties",
    category: "menu",
    image: assetUrl("/assets/menu/menu-thindi-dosa.webp"),
    alt: "Physical menu page 3 showing Dosa items with pricing and descriptions",
    caption:
      "Verified menu page featuring Sada Dosa, Ghee Roast, Mysore Dosa, and Butter Masala Dosa.",
    aspect: "tall",
  },
  {
    id: "gal-menu-combo",
    title: "Printed Menu: Combo Meals & Sadhya",
    category: "menu",
    image: assetUrl("/assets/menu/menu-combo-meals.webp"),
    alt: "Physical menu page 13 showing Combo Meals with pricing and descriptions",
    caption:
      "Verified menu page featuring Appam with Stew, Malabar Parotta, Nei Chor, and Puttu.",
    aspect: "tall",
  },
];
