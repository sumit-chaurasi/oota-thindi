import React from "react";
import { Coffee, Sun, Compass } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { assetUrl } from "../../utils/assetUrl";

export const AmbienceSection: React.FC = () => {
  return (
    <section className="section-shell" id="ambience" aria-labelledby="ambience-title">
      <div className="container">
        <SectionHeading
          eyebrow="Dining Atmosphere"
          title={
            <>
              Heritage Warmth Meets <span className="font-script">Al Fresco Charm</span>
            </>
          }
          subtitle="Designed with terracotta pink arches, vintage brass lanterns, lush snake plant planters, and our charming Thindi Coffee House kiosk in Borivali West."
          align="center"
        />

        <div className="ambience-grid">
          {/* Images Duo */}
          <div className="ambience-gallery-duo">
            <div style={{ position: "relative" }}>
              <img
                src={assetUrl("/assets/restaurant/interior-patio.webp")}
                alt="Evening dining area with Thindi Coffee House kiosk"
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(53, 37, 31, 0.8)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-pill)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Evening Patio & Coffee House
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <img
                src={assetUrl("/assets/restaurant/outdoor-daytime.webp")}
                alt="Daytime al fresco dining terrace"
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(53, 37, 31, 0.8)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-pill)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Sunny Al Fresco Terrace
              </div>
            </div>
          </div>

          {/* Ambience Highlights */}
          <div>
            <div className="glass-card" style={{ padding: "28px", marginBottom: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(146, 47, 43, 0.12)",
                    color: "var(--color-maroon)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Coffee size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "6px", color: "var(--color-ink)" }}>
                    The Thindi Coffee House Kiosk
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                    Watch fresh filter kaapi frothed theatrically between brass davarahs right before your eyes. The intoxicating aroma of roasted Chikmagalur coffee fills the open courtyard.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "28px", marginBottom: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(71, 123, 67, 0.12)",
                    color: "var(--color-leaf-green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sun size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "6px", color: "var(--color-ink)" }}>
                    Terracotta Arches & Garden Planters
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                    Influenced by Chettinad courtyards and Portuguese Mangalore homes, the terracotta archways offer a calm oasis away from the busy streets of Borivali.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(201, 154, 56, 0.15)",
                    color: "var(--color-mustard)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Compass size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "6px", color: "var(--color-ink)" }}>
                    Casual Tiffin & Slow Family Feasts
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                    Whether you are dropping in for a swift morning ghee roast dosa or settling down with family for a 20-dish Onam Sadhya, our seating is thoughtfully arranged for every occasion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
