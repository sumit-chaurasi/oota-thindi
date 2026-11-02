import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { assetUrl } from "./utils/assetUrl";

export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark--small" : ""}`} aria-hidden="true">
      <i className="brand-mark__bar brand-mark__bar--coral" />
      <i className="brand-mark__bar brand-mark__bar--mango" />
      <i className="brand-mark__bar brand-mark__bar--leaf" />
      <i className="brand-mark__bar brand-mark__bar--berry" />
    </span>
  );
}

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className="camera-icon">
      <path d="M7 11.5h5l2-3h8l2 3h5v16H7z" />
      <circle cx="18" cy="19.5" r="5" />
    </svg>
  );
}

export function PhotoSlot({
  asset,
  label,
  className = "",
  priority = false,
}: {
  asset: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const source = assetUrl(`/assets/${asset}`);

  return (
    <div className={`photo-slot ${className}${failed ? " photo-slot--fallback" : ""}`}>
      {!failed && (
        <img
          src={source}
          alt={label}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
      {failed && (
        <div className="photo-slot__fallback" aria-label={`Approved photo needed: ${label}`}>
          <div className="photo-slot__shape photo-slot__shape--one" />
          <div className="photo-slot__shape photo-slot__shape--two" />
          <span className="photo-slot__icon"><CameraIcon /></span>
          <span className="photo-slot__label">Add approved photo</span>
          <span className="photo-slot__caption">{label}</span>
        </div>
      )}
    </div>
  );
}

export function Reveal({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.revealed = "true";
      return;
    }
    if (!("IntersectionObserver" in window)) {
      node.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} data-revealed="false">{children}</div>;
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = [
    { label: "Instagram", href: "https://www.instagram.com/theootathindi/", glyph: "ig" },
    { label: "Facebook", href: "https://www.facebook.com/theootathindi", glyph: "f" },
    { label: "YouTube", href: "https://www.youtube.com/@theootathindi", glyph: "▶" },
    { label: "Pinterest", href: "https://pin.it/6fGCSRjWz", glyph: "p" },
  ];
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`Oota Thindi on ${link.label}`}>
          <span aria-hidden="true">{link.glyph}</span>
          {!compact && <span>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
