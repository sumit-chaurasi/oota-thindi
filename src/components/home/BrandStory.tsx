import React from "react";
import { ArrowRight, Flame, HeartHandshake, Leaf, Coffee } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { assetUrl } from "../../utils/assetUrl";

export const BrandStory: React.FC = () => {
  return (
    <section className="section-shell" id="story" aria-labelledby="story-title">
      <div className="container">
        <div className="story-grid">
          {/* Visual Column */}
          <div className="story-visual-wrap">
            <div className="story-image-card">
              <img
                src={assetUrl("/assets/restaurant/interior-patio.webp")}
                alt="Dining Room and Thindi Coffee House Patio at The Oota Thindi, Borivali West"
                width="1360"
                height="766"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Circular Stamp */}
            <div className="story-stamp">
              <span>TRADITION</span>
              <span style={{ fontSize: "1.1rem" }}>ದಕ್ಷಿಣ</span>
              <span>EST. MUMBAI</span>
            </div>
          </div>

          {/* Editorial Copy Column */}
          <div className="story-content">
            <SectionHeading
              eyebrow="The Oota Thindi Heritage"
              title={
                <>
                  Familiar Flavours, <br />
                  <em>Rooted in </em>
                  <span className="font-script">Dakshin Soul.</span>
                </>
              }
              subtitle="The Oota Thindi brings the comforting warmth of traditional South Indian homes to Prem Nagar, Borivali West. Every recipe celebrates regional culinary depth—from crisp Davangere butter dosas to aromatic Chettinad spices."
              align="left"
            />

            <div className="story-points">
              <div className="story-point-card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <Leaf size={18} style={{ color: "var(--color-leaf-green)" }} />
                  <h4>100% Pure Vegetarian</h4>
                </div>
                <p>
                  Prepared in an exclusively vegetarian kitchen with dedicated Jain modifications across dosas, meals, and sweets.
                </p>
              </div>

              <div className="story-point-card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <Flame size={18} style={{ color: "var(--color-deep-red)" }} />
                  <h4>Authentic Desi Ghee</h4>
                </div>
                <p>
                  Our signature benne dosas and halwas are cooked with pure country butter and desi ghee for rich aroma and golden crispness.
                </p>
              </div>

              <div className="story-point-card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <HeartHandshake size={18} style={{ color: "var(--color-mustard)" }} />
                  <h4>Three Southern States</h4>
                </div>
                <p>
                  A united culinary map honoring Karnataka’s benne dosas, Tamil Nadu’s Chettinad salnas, and Kerala’s coconut stews.
                </p>
              </div>

              <div className="story-point-card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <Coffee size={18} style={{ color: "var(--color-maroon)" }} />
                  <h4>Thindi Coffee House</h4>
                </div>
                <p>
                  Slow-dripped Chikmagalur filter decoction and heritage cooling tonics like Nannari and Panakam pulled fresh to order.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "32px" }}>
              <a href="#menu" className="btn btn--secondary">
                <span>Browse the Complete Menu</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
