"use client";
import MagicBento from "../layout/BentoGrid";

export default function GallerySection() {
  return (
    <section className="min-h-screen md:max-w-[85vw] mx-auto">
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </section>
  );
}
