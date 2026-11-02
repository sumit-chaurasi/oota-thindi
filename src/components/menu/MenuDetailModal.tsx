import React, { useEffect } from "react";
import { MenuItem } from "../../types";
import { X, Utensils, MessageSquare, Leaf, Sparkles, Flame, Check } from "lucide-react";
import { orderingService } from "../../services/orderingService";

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div style={{ marginBottom: "16px" }}>
          <div className="eyebrow" style={{ marginBottom: "4px" }}>
            <span className="eyebrow__dot" />
            Verified Menu Item
          </div>
          {item.regionalName && (
            <div style={{ color: "var(--color-mustard)", fontSize: "0.9rem", fontWeight: 700 }}>
              {item.regionalName}
            </div>
          )}
          <h2 style={{ fontSize: "1.8rem", color: "var(--color-ink)", marginTop: "4px" }}>
            {item.name}
          </h2>
        </div>

        {item.image && (
          <div
            style={{
              width: "100%",
              height: "220px",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              marginBottom: "20px",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-maroon)" }}>
            ₹{item.price}
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--color-ink-subtle)" }}>
            Taxes as applicable
          </span>
        </div>

        <p style={{ fontSize: "0.98rem", lineHeight: 1.6, color: "var(--color-ink)", marginBottom: "20px" }}>
          {item.description}
        </p>

        {item.serving && (
          <div
            className="glass-card"
            style={{
              padding: "14px 18px",
              marginBottom: "24px",
              borderLeft: "3px solid var(--color-leaf-green)",
            }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-leaf-green)", textTransform: "uppercase" }}>
              Accompaniments & Serving
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--color-ink)", marginTop: "2px" }}>
              {item.serving}
            </div>
          </div>
        )}

        {/* Dietary Attributes */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
          <span className="glass-pill" style={{ color: "var(--color-leaf-green)" }}>
            <Check size={14} />
            <span>100% Pure Vegetarian</span>
          </span>

          {item.isJain && (
            <span className="glass-pill" style={{ color: "var(--color-deep-green)" }}>
              <Leaf size={14} />
              <span>Jain Preparation Available</span>
            </span>
          )}

          {item.isSignature && (
            <span className="glass-pill" style={{ color: "var(--color-maroon)" }}>
              <Sparkles size={14} />
              <span>{item.badge || "Chef Signature"}</span>
            </span>
          )}

          {item.spiciness && (
            <span className="glass-pill" style={{ color: "var(--color-deep-red)" }}>
              <Flame size={14} />
              <span>{item.spiciness === "spicy" ? "Spicy South Indian Roast" : "Mild & Comforting"}</span>
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <a
            href={orderingService.getDeliveryLink(item.name)}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            <Utensils size={18} />
            <span>Order on Zomato</span>
          </a>

          <a
            href={orderingService.getWhatsAppOrderUrl(item.name)}
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};
