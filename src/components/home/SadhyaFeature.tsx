import React from "react";
import { Sparkles, CalendarCheck, MessageSquare } from "lucide-react";
import { orderingService } from "../../services/orderingService";
import { assetUrl } from "../../utils/assetUrl";

interface SadhyaFeatureProps {
  onOpenBooking?: () => void;
}

export const SadhyaFeature: React.FC<SadhyaFeatureProps> = () => {
  return (
    <section className="section-shell" id="sadhya" aria-labelledby="sadhya-title">
      <div className="container">
        <div className="sadhya-feature-card">
          <div className="sadhya-feature-grid">
            {/* Visual Column */}
            <div className="sadhya-feature-image-wrap">
              <img
                src={assetUrl("/assets/food/onam-sadhya-leaf.webp")}
                alt="Traditional Banana Leaf Onam Sadhya Feast at The Oota Thindi"
                width="1360"
                height="1020"
                loading="lazy"
                decoding="async"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(53, 37, 31, 0.85)",
                  backdropFilter: "blur(8px)",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-pill)",
                  color: "#fff",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={14} style={{ color: "var(--color-mustard)" }} />
                <span>24-Item Traditional Banana Leaf Banquet</span>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <div className="eyebrow">
                <span className="eyebrow__dot" />
                Festive Heritage Dining
              </div>

              <h2 id="sadhya-title" style={{ marginBottom: "16px" }}>
                The Grand Sadhya & <br />
                <span className="font-script">Royal Dakshin Feast</span>
              </h2>

              <p style={{ marginBottom: "20px" }}>
                In the South, a meal is an act of communion. Served on fresh emerald plantain leaves, our signature feast brings together red matta rice, aromatic Kerala avial, pachadi, crispy pappadam, sharkara varatti, drumstick sambar, pepper rasam, and twin slow-cooked payasams.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                <div className="glass-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-maroon)", fontSize: "0.95rem" }}>
                    Banana Leaf Service
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-ink-muted)" }}>
                    Traditional eco-conscious dining
                  </div>
                </div>

                <div className="glass-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-leaf-green)", fontSize: "0.95rem" }}>
                    Festival Celebrations
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-ink-muted)" }}>
                    Onam, Pongal, Ugadi & Weekends
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a
                  href={orderingService.getWhatsAppTableBookingUrl({
                    seating: "Traditional Banana Leaf Sadhya",
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  <MessageSquare size={18} />
                  <span>Book Sadhya Table on WhatsApp</span>
                </a>

                <a
                  href={orderingService.getWhatsAppOrderUrl("Grand Sadhya / Catering Inquiry")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary"
                >
                  <MessageSquare size={18} />
                  <span>Catering & Bulk Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
