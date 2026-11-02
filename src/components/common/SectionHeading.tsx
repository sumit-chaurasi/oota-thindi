import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`section-header ${
        align === "center" ? "section-header--center" : ""
      } ${className}`}
    >
      <div className="eyebrow">
        <span className="eyebrow__dot" />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
