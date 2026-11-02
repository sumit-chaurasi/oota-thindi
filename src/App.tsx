/// <reference types="vite/client" />
import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { BrandStory } from "./components/home/BrandStory";
import { SadhyaFeature } from "./components/home/SadhyaFeature";
import { MenuExplorer } from "./components/menu/MenuExplorer";
import { GallerySection } from "./components/gallery/GallerySection";
import { BookingSection } from "./components/booking/BookingSection";
import { VisitSection } from "./components/contact/VisitSection";
import { Footer } from "./components/layout/Footer";
import "./styles.css";

export default function App() {
  const [selectedMenuCategory, setSelectedMenuCategory] = useState("all");

  const handleOpenMenuGallery = () => {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Accessibility: Skip to Content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Main Glassmorphic Navigation with clean, reduced buttons */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Signature Editorial Hero with direct WhatsApp Table Booking */}
        <Hero />

        {/* Brand Heritage & Story */}
        <BrandStory />

        {/* Grand Onam Sadhya & Banana Leaf Feast Feature */}
        <SadhyaFeature />

        {/* Interactive Verified Menu Explorer */}
        <MenuExplorer
          selectedCategoryId={selectedMenuCategory}
          onSelectCategoryId={setSelectedMenuCategory}
          onOpenMenuGallery={handleOpenMenuGallery}
        />

        {/* Dedicated Offline & Online Booking Section (WhatsApp, Phone, Zomato, District, Justdial) */}
        <BookingSection />

        {/* Interactive Photo & Printed Menu Gallery with Lightbox */}
        <GallerySection />

        {/* Location, Directions & Contact */}
        <VisitSection />
      </main>

      {/* Refined Brand Footer */}
      <Footer />
    </>
  );
}
