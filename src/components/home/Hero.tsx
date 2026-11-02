import React, { useState } from "react";
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Utensils } from "lucide-react";
import { restaurantData } from "../../data/restaurant";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  const heroImages = [
    {
      src: "/assets/food/grand-feast-spread.jpg",
      srcSet: "/assets/food/grand-feast-spread-400.jpg 400w, /assets/food/grand-feast-spread.jpg 736w",
      width: 736,
      height: 920,
      title: "Royal Dakshin Feast",
      subtitle: "Authentic Sadhya table spread in our Borivali dining room",
    },
    {
      src: "/assets/food/benne-dosa.jpg",
      srcSet: "/assets/food/benne-dosa-400.jpg 400w, /assets/food/benne-dosa.jpg 736w",
      width: 736,
      height: 920,
      title: "Davangere Benne Dosa",
      subtitle: "Melted butter over crisp golden roast with fresh chutneys",
    },
    {
      src: "/assets/restaurant/interior-patio.webp",
      width: 1360,
      height: 766,
      title: "The Oota Thindi Patio & Coffee House",
      subtitle: "Warm lanterns, terracotta pink arches, and fresh filter brews",
    },
  ];

  const currentImage = heroImages[heroImageIdx];

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="hero-content">
            <div className="hero-badges">
              <span className="glass-pill">
                <Sparkles size={14} style={{ color: "var(--color-mustard)" }} />
                <span>Prem Nagar · Borivali West, Mumbai</span>
              </span>
              <span className="glass-pill">
                <ShieldCheck size={14} style={{ color: "var(--color-leaf-green)" }} />
                <span>100% Pure Vegetarian & Jain</span>
              </span>
            </div>

            <h1 id="hero-title" className="hero-headline">
              A Journey of Taste, <br />
              <em>From </em>
              <span className="font-script">South to Soul...</span>
            </h1>

            <p className="hero-lead">
              Immerse in the timeless culinary heritage of the South. From golden butter-laden Davangere Benne Dosas and lacy Rava roasts to Kerala vegetable stews and royal banana leaf feasts—crafted with authentic home-cooked warmth in Mumbai.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="btn btn--primary">
                <Utensils size={18} />
                <span>Explore Verified Menu</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--secondary"
              >
                <MapPin size={18} />
                <span>Get Directions</span>
              </a>

            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="hero-visual">
            {/* Main Visual Card */}
            <div className="hero-visual-card">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                srcSet={currentImage.srcSet}
                sizes="(max-width: 600px) calc(100vw - 36px), 50vw"
                width={currentImage.width}
                height={currentImage.height}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero-visual__gradient" />
              <div className="hero-visual__caption">
                <h3>{currentImage.title}</h3>
                <p>{currentImage.subtitle}</p>
                {/* Thumbnails switcher */}
                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                  {heroImages.map((img, idx) => (
                    <button
                      key={img.title}
                      type="button"
                      onClick={() => setHeroImageIdx(idx)}
                      style={{
                        width: "36px",
                        height: "4px",
                        borderRadius: "2px",
                        border: "none",
                        backgroundColor: heroImageIdx === idx ? "var(--color-mustard)" : "rgba(255, 255, 255, 0.4)",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      aria-label={`Show image: ${img.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
