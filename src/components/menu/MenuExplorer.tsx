import React, { useMemo, useState } from "react";
import { Search, Leaf, Sparkles, AlertCircle, FileText } from "lucide-react";
import { menuCategories, menuItems } from "../../data/menu";
import { MenuItem } from "../../types";
import { SectionHeading } from "../common/SectionHeading";
import { MenuItemCard } from "./MenuItemCard";
import { MenuDetailModal } from "./MenuDetailModal";

interface MenuExplorerProps {
  selectedCategoryId: string;
  onSelectCategoryId: (id: string) => void;
  onOpenMenuGallery?: () => void;
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  selectedCategoryId,
  onSelectCategoryId,
  onOpenMenuGallery,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jainOnly, setJainOnly] = useState(false);
  const [signatureOnly, setSignatureOnly] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  // Filter logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategoryId !== "all" && item.category !== selectedCategoryId) {
        return false;
      }
      // Jain filter
      if (jainOnly && !item.isJain) {
        return false;
      }
      // Signature filter
      if (signatureOnly && !item.isSignature && !item.isChefSpecial) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchReg = item.regionalName?.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchReg) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategoryId, jainOnly, signatureOnly, searchQuery]);

  return (
    <section className="section-shell" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading
          eyebrow="The Dining Card"
          title={
            <>
              Explore the <span className="font-script">Authentic Menu</span>
            </>
          }
          subtitle="Every item, price, and Jain preparation listed below is directly transcribed from The Oota Thindi official printed restaurant menu."
          align="center"
        />

        {/* Verification Banner */}
        <div
          className="glass-card"
          style={{
            padding: "16px 24px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderLeft: "4px solid var(--color-leaf-green)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "var(--color-leaf-green)" }}>🌿</span>
            <span style={{ fontSize: "0.88rem", color: "var(--color-ink)" }}>
              <strong>Verified Restaurant Menu:</strong> All prices in INR. Taxes as applicable. Jain preparations marked.
            </span>
          </div>

          {onOpenMenuGallery && (
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              onClick={onOpenMenuGallery}
            >
              <FileText size={15} />
              <span>View Original Printed Menu Pages</span>
            </button>
          )}
        </div>

        {/* Search & Filter Controls */}
        <div className="menu-controls">
          <div className="menu-search-bar">
            <div className="search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search dosas, meals, payasam, filter kaapi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search dishes"
              />
            </div>

            <div className="filter-toggles">
              <button
                type="button"
                className={`toggle-chip ${jainOnly ? "toggle-chip--active" : ""}`}
                onClick={() => setJainOnly((prev) => !prev)}
                aria-pressed={jainOnly}
              >
                <Leaf size={14} />
                <span>Jain Available Only</span>
              </button>

              <button
                type="button"
                className={`toggle-chip ${signatureOnly ? "toggle-chip--active" : ""}`}
                onClick={() => setSignatureOnly((prev) => !prev)}
                aria-pressed={signatureOnly}
              >
                <Sparkles size={14} />
                <span>Signatures Only</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="menu-category-tabs" role="tablist" aria-label="Menu categories">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategoryId === "all"}
              className={`menu-tab-btn ${
                selectedCategoryId === "all" ? "menu-tab-btn--active" : ""
              }`}
              onClick={() => onSelectCategoryId("all")}
            >
              All Dishes ({menuItems.length})
            </button>

            {menuCategories.map((cat) => {
              const count = menuItems.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategoryId === cat.id}
                  className={`menu-tab-btn ${
                    selectedCategoryId === cat.id ? "menu-tab-btn--active" : ""
                  }`}
                  onClick={() => onSelectCategoryId(cat.id)}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            fontSize: "0.88rem",
            color: "var(--color-ink-subtle)",
          }}
        >
          <span>
            Showing <strong>{filteredItems.length}</strong> dish
            {filteredItems.length === 1 ? "" : "es"}
          </span>

          {(searchQuery || jainOnly || signatureOnly || selectedCategoryId !== "all") && (
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                color: "var(--color-maroon)",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setSearchQuery("");
                setJainOnly(false);
                setSignatureOnly(false);
                onSelectCategoryId("all");
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-items-grid">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onSelect={setActiveItem} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div
            className="glass-panel"
            style={{
              padding: "48px 24px",
              textAlign: "center",
              maxWidth: "500px",
              margin: "40px auto",
            }}
          >
            <AlertCircle
              size={48}
              style={{ color: "var(--color-mustard)", margin: "0 auto 16px" }}
            />
            <h3>No dishes found</h3>
            <p style={{ marginTop: "8px", marginBottom: "20px" }}>
              We couldn't find any dishes matching your search "{searchQuery}" with the active filters.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setSearchQuery("");
                setJainOnly(false);
                setSignatureOnly(false);
                onSelectCategoryId("all");
              }}
            >
              Reset search filters
            </button>
          </div>
        )}

        {/* Active Dish Details Modal */}
        <MenuDetailModal item={activeItem} onClose={() => setActiveItem(null)} />
      </div>
    </section>
  );
};
