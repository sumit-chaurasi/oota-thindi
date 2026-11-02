import React from "react";
import { MenuItem } from "../../types";
import { Leaf, Flame, Sparkles, Plus } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onSelect }) => {
  return (
    <div
      className="menu-item-card"
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(item);
        }
      }}
    >
      <div>
        <div className="menu-item-card__header">
          <div className="menu-item-card__title-wrap">
            {item.regionalName && (
              <span className="menu-item-card__regional">{item.regionalName}</span>
            )}
            <h3>{item.name}</h3>
          </div>
          <div className="menu-item-card__price">₹{item.price}</div>
        </div>

        <p className="menu-item-card__desc">{item.description}</p>

        {item.serving && (
          <div className="menu-item-card__serving">
            <span>✨</span>
            <span>{item.serving}</span>
          </div>
        )}
      </div>

      <div className="menu-item-card__footer">
        <div className="menu-item-card__tags">
          {item.isJain && (
            <span className="dietary-tag dietary-tag--jain">
              <Leaf size={12} />
              <span>Jain Available</span>
            </span>
          )}

          {item.isSignature && (
            <span className="dietary-tag dietary-tag--signature">
              <Sparkles size={12} />
              <span>{item.badge || "Signature"}</span>
            </span>
          )}

          {item.spiciness === "spicy" && (
            <span className="dietary-tag dietary-tag--spicy">
              <Flame size={12} />
              <span>Spicy</span>
            </span>
          )}
        </div>

        <button
          type="button"
          className="btn btn--secondary btn--sm"
          style={{ padding: "6px 12px", fontSize: "0.8rem", borderRadius: "var(--radius-pill)" }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          aria-label={`View details for ${item.name}`}
        >
          <Plus size={14} />
          <span>Details</span>
        </button>
      </div>
    </div>
  );
};
