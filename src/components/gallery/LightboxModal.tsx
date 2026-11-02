import React, { useEffect } from "react";
import { GalleryItem } from "../../types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="lightbox-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Navigation Button */}
        <button
          type="button"
          className="lightbox-nav-btn lightbox-nav-btn--prev"
          onClick={onPrev}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image Container */}
        <div className="lightbox-image-wrap">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
          />
        </div>

        {/* Next Navigation Button */}
        <button
          type="button"
          className="lightbox-nav-btn lightbox-nav-btn--next"
          onClick={onNext}
          aria-label="Next photograph"
        >
          <ChevronRight size={28} />
        </button>

        {/* Caption & Counter */}
        <div className="lightbox-caption-box">
          <div style={{ fontSize: "0.82rem", color: "var(--color-mustard-light)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Photograph {currentIndex + 1} of {items.length} · {currentItem.category}
          </div>
          <h3>{currentItem.title}</h3>
          <p>{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
