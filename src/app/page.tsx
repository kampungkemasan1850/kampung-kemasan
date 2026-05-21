"use client";

import Hero from "../components/homepage/hero";
import Feature from "../components/homepage/highlight";
import Narrative from "../components/homepage/about";
import Events from "../components/homepage/event";
import VideoSection from "../components/homepage/video";
import Location from "../components/homepage/maps";
import Explore from "@/components/homepage/explore";
import Testimonials from "../components/homepage/testimonial";

import heroImg from "../../public/assets/images/rumah-img.jpg";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#F6F6EC] overflow-x-hidden selection:bg-[#C9A051] selection:text-white">
      <Hero heroImg={heroImg} t={t} />
      <Feature t={t} />
      <Narrative t={t} heroImg={heroImg} />
      <Events t={t} />
      <VideoSection />
      <Location />
      <Explore />
      <Testimonials />
    </main>
  );
}
