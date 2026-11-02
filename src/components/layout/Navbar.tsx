import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "story", "menu", "sadhya", "gallery", "booking", "visit"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navItems = [
    { label: "Our Story", href: "#story", id: "story" },
    { label: "Menu", href: "#menu", id: "menu" },
    { label: "Royal Sadhya", href: "#sadhya", id: "sadhya" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Visit Us", href: "#visit", id: "visit" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`site-navbar ${isScrolled ? "site-navbar--scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="brand-link"
              onClick={(e) => handleLinkClick(e, "#home")}
              aria-label="The Oota Thindi Home"
            >
              <img
                src="/assets/brand/logo-small.jpg"
                alt="The Oota Thindi Logo"
                className="brand-logo-img"
                width="160"
                height="200"
              />
              <div className="brand-name">
                <span className="brand-name__main">The Oota Thindi</span>
                <span className="brand-name__sub">Dakshin Cuisine · Borivali</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="nav-menu" aria-label="Main Navigation">
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`nav-link ${
                        activeSection === item.id ? "nav-link--active" : ""
                      }`}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Single Action (Reduced to single primary button) */}
            <div className="nav-actions">
              <a
                href="#booking"
                className="btn btn--primary btn--sm"
                onClick={(e) => handleLinkClick(e, "#booking")}
              >
                <span>Book & Order</span>
                <ArrowRight size={15} />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer__overlay ${
          mobileOpen ? "mobile-drawer__overlay--open" : ""
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <nav id="mobile-navigation" className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`} aria-label="Mobile navigation" aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <div className="mobile-drawer__header">
          <div className="brand-link">
            <img
              src="/assets/brand/logo-small.jpg"
              alt="The Oota Thindi"
              className="brand-logo-img"
              width="160"
              height="200"
            />
            <div className="brand-name">
              <span className="brand-name__main">The Oota Thindi</span>
              <span className="brand-name__sub">Borivali West, Mumbai</span>
            </div>
          </div>
          <button
            type="button"
            className="btn btn--icon btn--secondary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="mobile-drawer__link"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__actions">
          <a
            href="#booking"
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={(e) => handleLinkClick(e, "#booking")}
          >
            <span>Book a Table / Order Online</span>
            <ArrowRight size={16} />
          </a>

        </div>
      </nav>
    </>
  );
};
