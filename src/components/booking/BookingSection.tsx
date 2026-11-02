import React, { useEffect, useState } from "react";
import { MessageSquare, Phone, Utensils, Compass, ExternalLink, Calendar, Users, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { orderingService, restaurantContacts } from "../../services/orderingService";
import { SectionHeading } from "../common/SectionHeading";

export const BookingSection: React.FC = () => {
  // Quick prefill state for WhatsApp table booking
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");

  useEffect(() => {
    const tomorrow = new Date(Date.now() + 86400000);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);
  const [slot, setSlot] = useState("Evening Dinner (7:30 PM)");
  const [seating, setSeating] = useState("Al Fresco Patio");

  // Dynamic WhatsApp URL with prefilled options
  const directWhatsAppUrl = orderingService.getWhatsAppTableBookingUrl({
    guests,
    date,
    time: slot,
    seating,
  });

  return (
    <section className="section-shell" id="booking" aria-labelledby="booking-title">
      <div className="container">
        <SectionHeading
          eyebrow="Reservations & Ordering Hub"
          title={
            <>
              Book a Table or <span className="font-script">Order Online</span>
            </>
          }
          subtitle="Reserve your table directly via WhatsApp or phone call for offline dine-in, or order delivery through our authorized digital platforms."
          align="center"
        />

        <div className="booking-hubs-grid">
          {/* =========================================================================
              HUB 1: OFFLINE TABLE BOOKING & DINE-IN (DIRECT WHATSAPP & PHONE)
              ========================================================================= */}
          <div className="booking-hub-card glass-panel booking-hub-card--dinein">
            <div className="booking-hub-header">
              <div className="booking-badge booking-badge--whatsapp">
                <MessageSquare size={14} />
                <span>Instant Offline Table Booking</span>
              </div>
              <h3>Dine-in Table Booking</h3>
              <p>
                Direct offline reservation for casual tiffins, family gatherings, or weekend Grand Sadhyas. Connect directly to our host on WhatsApp with zero middlemen.
              </p>
            </div>

            {/* Interactive WhatsApp Configurator */}
            <div className="booking-configurator glass-card">
              <div className="configurator-title">
                <Sparkles size={16} style={{ color: "var(--color-mustard)" }} />
                <span>Customise Your Table Request:</span>
              </div>

              <div className="config-grid">
                <div className="config-field">
                  <label htmlFor="cfg-guests">
                    <Users size={14} /> Guests:
                  </label>
                  <select
                    id="cfg-guests"
                    className="config-select"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="config-field">
                  <label htmlFor="cfg-date">
                    <Calendar size={14} /> Date:
                  </label>
                  <input
                    id="cfg-date"
                    type="date"
                    className="config-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="config-field">
                  <label htmlFor="cfg-slot">
                    <Clock size={14} /> Service:
                  </label>
                  <select
                    id="cfg-slot"
                    className="config-select"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                  >
                    <option value="Morning Tiffin (9:00 AM)">Morning Tiffin (9:00 AM)</option>
                    <option value="Morning Tiffin (10:30 AM)">Morning Tiffin (10:30 AM)</option>
                    <option value="Afternoon Sadhya / Lunch (1:00 PM)">Afternoon Sadhya (1:00 PM)</option>
                    <option value="Afternoon Sadhya / Lunch (2:30 PM)">Afternoon Sadhya (2:30 PM)</option>
                    <option value="Evening Dinner (7:30 PM)">Evening Dinner (7:30 PM)</option>
                    <option value="Evening Dinner (8:45 PM)">Evening Dinner (8:45 PM)</option>
                    <option value="Night Dinner (9:45 PM)">Night Dinner (9:45 PM)</option>
                  </select>
                </div>

                <div className="config-field">
                  <label htmlFor="cfg-seating">
                    <Compass size={14} /> Seating:
                  </label>
                  <select
                    id="cfg-seating"
                    className="config-select"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                  >
                    <option value="Al Fresco Patio / Courtyard">Al Fresco Patio / Courtyard</option>
                    <option value="Indoor Dining Room">Indoor Dining Room</option>
                    <option value="First Available Table">First Available Table</option>
                  </select>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary booking-btn-whatsapp"
              >
                <MessageSquare size={20} />
                <span>Book Table on WhatsApp</span>
                <ExternalLink size={16} />
              </a>
              <span className="booking-btn-hint">
                ✓ Directly opens WhatsApp with your reservation details prefilled
              </span>
            </div>

            {/* Direct Telephone Action */}
            <div className="offline-call-row">
              <div className="offline-call-info">
                <span className="offline-call-label">Prefer to speak directly?</span>
                <span className="offline-call-number">{restaurantContacts.phone}</span>
              </div>
              <a
                href={orderingService.getPhoneCallUrl()}
                className="btn btn--secondary btn--sm"
              >
                <Phone size={15} />
                <span>Call Restaurant</span>
              </a>
            </div>

            <div className="walkin-note">
              <CheckCircle2 size={15} style={{ color: "var(--color-leaf-green)", flexShrink: 0 }} />
              <span>
                <strong>Walk-ins Welcome:</strong> We always preserve seating for walk-in guests at Shop 1, Prem Ratan CHSL, Borivali West.
              </span>
            </div>
          </div>

          <div className="booking-hub-card glass-panel booking-hub-card--online">
            <div className="booking-hub-header">
              <div className="booking-badge booking-badge--online">
                <Utensils size={14} />
                <span>Takeaway & Delivery</span>
              </div>
              <h3>Choose how to order</h3>
              <p>
                Get delivery through Zomato or arrange a takeaway directly with the restaurant.
              </p>
            </div>

            <div className="order-options">
              <a href={orderingService.getZomatoOrderUrl()} target="_blank" rel="noreferrer" className="order-option glass-card">
                <span className="platform-card__icon platform-card__icon--zomato">Z</span>
                <span><strong>Delivery with Zomato</strong><small>Browse the delivery menu</small></span>
                <ExternalLink size={16} />
              </a>
              <a href={orderingService.getWhatsAppOrderUrl()} target="_blank" rel="noreferrer" className="order-option glass-card">
                <span className="platform-card__icon platform-card__icon--whatsapp"><MessageSquare size={18} /></span>
                <span><strong>Takeaway on WhatsApp</strong><small>Arrange pickup with the restaurant</small></span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
