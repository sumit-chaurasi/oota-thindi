import React from "react";
import { ArrowUp, Compass } from "lucide-react";
import { restaurantData } from "../../data/restaurant";
import { assetUrl } from "../../utils/assetUrl";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "facebook":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      case "youtube":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
          </svg>
        );
      default:
        return <Compass size={18} />;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src={assetUrl("/assets/brand/logo-small.jpg")}
                alt="The Oota Thindi"
                width="160"
                height="200"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid var(--color-mustard)",
                }}
              />
              <div>
                <h3 style={{ color: "#fff", fontSize: "1.4rem" }}>The Oota Thindi</h3>
                <span style={{ fontSize: "0.75rem", color: "var(--color-mustard-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Dakshin Home Cooked Food
                </span>
              </div>
            </div>

            <p style={{ color: "rgba(244, 233, 201, 0.8)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "20px" }}>
              A sanctuary of authentic South Indian vegetarian cuisine in Prem Nagar, Borivali West. Bringing ancient recipes of Karnataka, Kerala, and Tamil Nadu together.
            </p>

            <div className="footer-social-links">
              {restaurantData.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label={`The Oota Thindi on ${s.platform}`}
                >
                  {getSocialIcon(s.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#story">Our story</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#sadhya">Sadhya</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book or order</a></li>
              <li><a href="#visit">Visit us</a></li>
            </ul>
          </div>

          {/* Visit & Inquiries */}
          <div className="footer-col">
            <h4>Visit Us</h4>
            <p style={{ color: "rgba(244, 233, 201, 0.8)", fontSize: "0.88rem", marginBottom: "12px" }}>
              Shop 1, Prem Ratan CHSL, Building 8, MCF Road, opposite Natural Ice Cream, Prem Nagar, Borivali West, Mumbai 400092
            </p>
            <p style={{ color: "rgba(244, 233, 201, 0.8)", fontSize: "0.88rem" }}>
              Listed Phone: <a href={`tel:${restaurantData.phoneDisplay}`} style={{ color: "var(--color-mustard-light)" }}>{restaurantData.phoneDisplay}</a>
            </p>
            <div style={{ marginTop: "16px" }}>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--secondary btn--sm"
                style={{ color: "#fff", borderColor: "rgba(255, 255, 255, 0.3)" }}
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} The Oota Thindi. All rights reserved. 100% Pure Vegetarian.
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "rgba(244, 233, 201, 0.5)" }}>
              Traditional Dakshin Dining · Borivali West
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn--icon btn--secondary"
              style={{ width: "36px", height: "36px", color: "var(--color-parchment)" }}
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
