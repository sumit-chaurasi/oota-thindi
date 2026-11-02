import React, { useMemo, useState } from "react";
import { galleryItems } from "../../data/gallery";
import { GalleryItem } from "../../types";
import { SectionHeading } from "../common/SectionHeading";
import { LightboxModal } from "./LightboxModal";
import { Eye } from "lucide-react";

interface GallerySectionProps {
  initialFilter?: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ initialFilter = "all" }) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const filters = [
    { id: "all", label: "All Photographs" },
    { id: "food", label: "Culinary Dishes" },
    { id: "feast", label: "Grand Feasts & Sadhya" },
    { id: "ambience", label: "Patio & Ambience" },
    { id: "menu", label: "Original Printed Menu" },
  ];

  const filteredItems: GalleryItem[] = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="section-shell" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          eyebrow="The Visual Narrative"
          title={
            <>
              Glimpses of <span className="font-script">Table & Hearth</span>
            </>
          }
          subtitle="Explore authentic photography of our signature dishes, the charming Borivali al fresco courtyard, festive banana leaf feasts, and original printed menu pages."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`menu-tab-btn ${
                activeFilter === f.id ? "menu-tab-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => handleOpenLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleOpenLightbox(item);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-card__overlay">
                <span className="gallery-card__category">{item.category}</span>
                <h3 className="gallery-card__title">{item.title}</h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.82rem",
                    marginTop: "8px",
                  }}
                >
                  <Eye size={15} />
                  <span>Click to expand image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== -1}
          onClose={() => setLightboxIndex(-1)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};
