import React from "react";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "../../data/menu";
import { SectionHeading } from "../common/SectionHeading";

interface CulinaryCategoriesProps {
  onSelectCategory: (id: string) => void;
}

export const CulinaryCategories: React.FC<CulinaryCategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (e: React.MouseEvent, categoryId: string) => {
    e.preventDefault();
    onSelectCategory(categoryId);
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-shell" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeading
          eyebrow="Culinary Repertoire"
          title={
            <>
              From Sacred Tiffins to <span className="font-script">Royal Feasts</span>
            </>
          }
          subtitle="Explore the breadth of Southern vegetarian cooking. Each section is rooted in regional culinary traditions, handcrafted daily with authentic ingredients."
          align="center"
        />

        <div className="category-grid">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={(e) => handleCategoryClick(e, category.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCategoryClick(e as any, category.id);
                }
              }}
            >
              <div className="category-card__image-wrap">
                <img
                  src={category.coverImage}
                  alt={category.name}
                  loading="lazy"
                />
                <div className="category-card__overlay" />
                {category.tamilKannadaTitle && (
                  <span className="category-card__vernacular">
                    {category.tamilKannadaTitle}
                  </span>
                )}
              </div>

              <div className="category-card__body">
                <h3>{category.name}</h3>
                <p>{category.description}</p>

                <div className="category-card__footer">
                  <span>Explore Items</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
