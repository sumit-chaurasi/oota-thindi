import React from "react";

export const MarqueeBand: React.FC = () => {
  const phrases = [
    "A Journey of Taste, From South to Soul",
    "Traditional Home Cooked Dakshin Food",
    "Ancient Southern Secrets · Now Plating Up in Mumbai",
    "Golden Davangere Benne Dosa & Lacy Rava Roast",
    "Authentic Onam Sadhya & Royal South Indian Feast",
    "Fresh Chikmagalur Filter Kaapi & Cool Nannari Sharbat",
    "100% Pure Vegetarian & Jain Preparations",
    "Shop 1, Prem Ratan CHSL, Borivali West",
  ];

  return (
    <div className="marquee-container" aria-label="Brand Highlights Ticker">
      <div className="marquee-content">
        {/* Repeat twice for continuous loop */}
        {[...phrases, ...phrases].map((text, idx) => (
          <span key={idx} className="marquee-item">
            <span>{text}</span>
            <b aria-hidden="true">✳</b>
          </span>
        ))}
      </div>
    </div>
  );
};
