import React from "react";
import { assetUrl } from "../../utils/assetUrl";

export const KolamStar: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span
    className={`inline-block text-mustard select-none ${className}`}
    style={{ color: "var(--color-mustard)", fontStyle: "normal" }}
    aria-hidden="true"
  >
    ✳
  </span>
);

export const TraditionalBorderRibbon: React.FC<{ subtle?: boolean }> = ({ subtle = false }) => (
  <div
    className={`traditional-border-strip ${
      subtle ? "traditional-border-strip--subtle" : ""
    }`}
    aria-hidden="true"
  />
);

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = "",
}) => (
  <div
    className={`relative rounded-full overflow-hidden shrink-0 ${className}`}
    style={{
      width: size,
      height: size,
      border: "2px solid var(--color-mustard)",
      boxShadow: "0 4px 12px rgba(53, 37, 31, 0.15)",
    }}
  >
    <img
      src={assetUrl("/assets/brand/logo.jpg")}
      alt="The Oota Thindi Logo"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);
