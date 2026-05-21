"use client";

import "../../i18n";
import { useTranslation } from "react-i18next";
import GallerySection from "@/components/gallery/gallery";

export default function GalleryPage() {

  const { t } = useTranslation();
  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 bg-[#F6F6EC]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            {t("gallery.title")}
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            Galeri kami menghadirkan pesona, sejarah, dan kehidupan di Kampung
            Kemasan Gresik dalam setiap sudutnya.
          </p>
        </div>

        <GallerySection />
      </div>
    </div>
  );
}
