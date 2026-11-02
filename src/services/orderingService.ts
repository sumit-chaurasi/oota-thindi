export const restaurantContacts = {
  phone: "+91 82915 33533",
  whatsappNumber: "918291533533",
  address: "Shop 1, Prem Ratan CHSL, Building 8, MCF Road, opposite Natural Ice Cream, Prem Nagar, Borivali West, Mumbai 400092",
};

export const orderingService = {
  // Direct WhatsApp Table Booking URL
  getWhatsAppTableBookingUrl: (details?: {
    guests?: number;
    date?: string;
    time?: string;
    seating?: string;
  }): string => {
    let message = "Hello The Oota Thindi! 🙏 I would like to reserve a table for dine-in at your Borivali West restaurant.";
    if (details) {
      const parts = [];
      if (details.guests) parts.push(`• Guests: ${details.guests}`);
      if (details.date) parts.push(`• Date: ${details.date}`);
      if (details.time) parts.push(`• Time: ${details.time}`);
      if (details.seating) parts.push(`• Seating: ${details.seating}`);
      if (parts.length > 0) {
        message += "\n\nReservation Details:\n" + parts.join("\n") + "\n\nPlease confirm table availability.";
      }
    }
    return `https://wa.me/${restaurantContacts.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  // Direct WhatsApp Order / Takeaway URL
  getWhatsAppOrderUrl: (dishName?: string): string => {
    const text = dishName
      ? `Hello The Oota Thindi, I would like to order "${dishName}" for takeaway / delivery.`
      : "Hello The Oota Thindi, I would like to view today's live specials and place an order for takeaway.";
    return `https://wa.me/${restaurantContacts.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  // Direct Phone Call
  getPhoneCallUrl: (): string => `tel:${restaurantContacts.phone.replace(/\s+/g, "")}`,

  // Online Platforms
  getZomatoOrderUrl: (): string => "https://www.zomato.com/mumbai/oota-thindi-borivali-west/order",
  getDeliveryLink: (dishName?: string): string => {
    const base = "https://www.zomato.com/mumbai/oota-thindi-borivali-west/order";
    return dishName ? `${base}?search=${encodeURIComponent(dishName)}` : base;
  },
  getDistrictUrl: (): string => "https://www.district.in/dining/mumbai/oota-thindi-borivali-west",
  getJustdialUrl: (): string => "https://jsdl.in/DT-431JE8KNCIF",

  // Directions
  getDirectionsUrl: (): string =>
    "https://www.google.com/maps/search/?api=1&query=Oota+Thindi+Prem+Ratan+CHSL+MCF+Road+Borivali+West+Mumbai+400092",
};
