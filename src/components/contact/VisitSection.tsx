import React from "react";
import { MapPin, Phone, Clock, Navigation, AlertCircle, Sparkles } from "lucide-react";
import { restaurantData } from "../../data/restaurant";
import { SectionHeading } from "../common/SectionHeading";
interface VisitSectionProps {
  onOpenBooking?: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = () => {
  return (
    <section className="section-shell" id="visit" aria-labelledby="visit-title">
      <div className="container">
        <SectionHeading
          eyebrow="Find Our Courtyard"
          title={
            <>
              There is a Place for You <span className="font-script">at Our Table.</span>
            </>
          }
          subtitle="Join us in Prem Nagar, Borivali West for fresh morning tiffins, lazy afternoon Sadhyas, or warm evening filter kaapi."
          align="left"
        />

        <div className="visit-grid">
          {/* Left Column: Location & Contact Cards */}
          <div className="visit-info-card glass-panel">
            {/* Address Item */}
            <div className="visit-detail-item">
              <div className="visit-detail-icon">
                <MapPin size={22} />
              </div>
              <div className="visit-detail-text">
                <h4>Restaurant Address</h4>
                <p>
                  <strong>The Oota Thindi</strong>
                  <br />
                  {restaurantData.address}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "6px",
                    fontSize: "0.82rem",
                    color: "var(--color-maroon)",
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={14} />
                  <span>Landmark: {restaurantData.landmark}</span>
                </div>
              </div>
            </div>

            {/* Phone & Inquiries */}
            <div className="visit-detail-item">
              <div className="visit-detail-icon">
                <Phone size={22} />
              </div>
              <div className="visit-detail-text">
                <h4>Phone & WhatsApp</h4>
                <p>
                  <a
                    href={`tel:${restaurantData.phoneDisplay}`}
                    style={{ color: "var(--color-maroon)", fontWeight: 700, textDecoration: "none" }}
                  >
                    {restaurantData.phoneDisplay}
                  </a>
                </p>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-ink-subtle)",
                    marginTop: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <AlertCircle size={13} />
                  <span>{restaurantData.phoneStatusNote}</span>
                </div>
              </div>
            </div>

            {/* Timings Note */}
            <div className="visit-detail-item">
              <div className="visit-detail-icon">
                <Clock size={22} />
              </div>
              <div className="visit-detail-text">
                <h4>Service Hours</h4>
                <p style={{ fontSize: "0.9rem" }}>
                  Morning Tiffin & Coffee: <strong>8:00 AM – 11:30 AM</strong>
                  <br />
                  Afternoon Meals & Sadhya: <strong>12:00 PM – 3:30 PM</strong>
                  <br />
                  Evening Tiffin & Dinner: <strong>5:00 PM – 10:30 PM</strong>
                </p>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--color-ink-subtle)",
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  * Hours subject to seasonal festival changes.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                <Navigation size={18} />
                <span>Get Google Maps Directions</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
