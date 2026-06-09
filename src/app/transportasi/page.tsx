"use client";

import React from "react";
import Image from "next/image";

// --- Reusable SVG Icons ---
const CircleArrow = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" className="text-white" />
    <path
      d="M10.5 7.5L15 12L10.5 16.5"
      stroke="#9B2A10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowCircle = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="white" />
    <path
      d="M10 8l4 4-4 4"
      stroke="#9B2A10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Reusable UI Components ---
const PillButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-[#9B2A10] text-white w-full py-4 px-6 rounded-full flex justify-between items-center shadow-md hover:bg-[#7a200a] transition uppercase font-bold tracking-widest text-sm"
  >
    <span>{children}</span>
    <CircleArrow />
  </button>
);

const SectionBadge = ({ text }: { text: string }) => (
  <div className="flex justify-center my-10">
    <div className="bg-[#9B2A10] text-white px-10 py-3 rounded-full font-black tracking-widest uppercase shadow-md">
      {text}
    </div>
  </div>
);

type CardProps = {
  title: string;
  image: string;
  hasArrow?: boolean;
  className?: string;
};

const TransportCard = ({
  title,
  image,
  hasArrow = false,
  className = "",
}: CardProps) => (
  <div
    className={`bg-white rounded-4xl shadow-lg overflow-hidden flex flex-col ${className}`}
  >
    <div className="relative w-full h-40 md:h-48">
      <Image src={image} alt={title} fill className="object-cover" />
      {hasArrow && (
        <div className="absolute -bottom-4 right-4 z-10 shadow-lg rounded-full">
          <RightArrowCircle />
        </div>
      )}
    </div>
    <div className="p-6 pt-5">
      <h3 className="text-[#9B2A10] font-bold text-sm uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">
        Royal Blue over Ivory Leather, five speed manual, air-cooled 3.0
        flat-six. Beautifully restored, only 92,000 miles — the open-top icon
        that defined 80s motoring.
      </p>
    </div>
  </div>
);

// --- Main Page Component ---
const Transportation = () => {
  return (
    <div className="w-full bg-[#F3F0E9] min-h-screen py-16 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-black text-center text-[#9B2A10] uppercase tracking-widest mb-12 drop-shadow-sm">
          Transportasi
        </h1>

        {/* Top Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TransportCard
              title="Transportasi Modern"
              image="/dummy-train.jpg"
            />
            <TransportCard
              title="Transportasi Tradisional"
              image="/dummy-becak.jpg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <PillButton>Modern</PillButton>
            <PillButton>Tradisional</PillButton>
            <PillButton>Bus Wisata</PillButton>
          </div>
        </div>
      </div>

      {/* Bus Wisata Full-width Banner */}
      <div className="w-full bg-[#751B05] text-white py-16 px-4 md:px-8 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Text & Social Stories */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif italic text-4xl md:text-5xl leading-tight">
              Bus wisata
              <br />
              Bandar Grissee
            </h2>
            <p className="text-sm text-white/80 leading-relaxed text-justify">
              Bus wisata Bandar Grissee ini merupakan bus tingkat yang mana
              dapat menampung 40 penumpang untuk lantai bawah dan 30 penumpang
              untuk lantai atas.
            </p>
            <button className="border border-white/50 rounded-full px-6 py-2 flex items-center justify-between w-max gap-4 hover:bg-white/10 transition">
              <span className="text-sm font-medium">Link to Register</span>
              <CircleArrow className="w-5 h-5" />
            </button>

            {/* Social Media Stack Layout */}
            <div className="relative h-32 mt-6">
              <div className="absolute left-0 top-0 w-20 h-28 bg-gray-300 rounded-xl overflow-hidden shadow-lg transform -rotate-6">
                <Image
                  src="/dummy-story1.jpg"
                  alt="story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-16 top-4 w-20 h-28 bg-gray-400 rounded-xl overflow-hidden shadow-lg z-10">
                <Image
                  src="/dummy-story2.jpg"
                  alt="story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-40 top-12 border border-white/50 rounded-full px-4 py-2 hover:bg-white/10 transition cursor-pointer">
                <span className="text-xs">
                  Our social media
                  <br />
                  story
                </span>
              </div>
            </div>
          </div>

          {/* Center: Bus Image */}
          <div className="relative w-full h-62.5 md:h-87.5">
            {/* Note: Use a transparent PNG of the bus for the exact effect */}
            <Image
              src="/dummy-bus.png"
              alt="Bus Wisata"
              fill
              className="object-contain drop-shadow-2xl scale-125"
            />
          </div>

          {/* Right: Prices & Schedule */}
          <div className="flex flex-col gap-6 font-bold tracking-wider">
            <div className="text-right">
              <div className="text-xs uppercase opacity-80">(Normal)</div>
              <div className="text-xl">IDR 5.000/PERSON</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase opacity-80">(Student)</div>
              <div className="text-xl">IDR 3.000/PERSON</div>
            </div>

            {/* Schedule Cards */}
            <div className="bg-[#F3F0E9] text-[#751B05] p-5 rounded-2xl shadow-lg mt-4">
              <h4 className="text-center font-black mb-3">WEEKDAY</h4>
              <div className="text-xs uppercase opacity-70 text-center mb-2">
                OPERATIONAL HOURS
              </div>
              <ul className="text-sm space-y-1">
                <li>Batch 1 (12.00 - 18.00 WIB)</li>
                <li>Batch 2 (16.30 - 18.30 WIB)</li>
                <li>Batch 3 (19.30 - 21.30 WIB)</li>
              </ul>
            </div>

            <div className="bg-[#F3F0E9] text-[#751B05] p-5 rounded-2xl shadow-lg">
              <h4 className="text-center font-black mb-3">WEEKEND</h4>
              <div className="text-xs uppercase opacity-70 text-center mb-2">
                OPERATIONAL HOURS
              </div>
              <ul className="text-sm space-y-1">
                <li>Batch 1 (08.00 - 10.00 WIB)</li>
                <li>Batch 2 (16.00 - 18.00 WIB)</li>
                <li>Batch 3 (19.00 - 21.00 WIB)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Categories */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-20">
        {/* Tradisional Category */}
        <section>
          <SectionBadge text="Tradisional" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Centering 2 items in a 3 col grid trick */}
            <div className="lg:col-start-1 lg:col-span-1 flex justify-end">
              <TransportCard
                title="(OJEK/Motor Heritage)"
                image="/dummy-ojek.jpg"
                className="w-full max-w-sm"
              />
            </div>
            <div className="lg:col-start-2 lg:col-span-1 flex justify-start">
              <TransportCard
                title="Becak (Pedicap)"
                image="/dummy-becak.jpg"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </section>

        {/* Modern Category Row 1 */}
        <section>
          <SectionBadge text="Modern" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TransportCard title="Kereta" image="/dummy-train.jpg" hasArrow />
            <TransportCard title="Bus" image="/dummy-bus-modern.jpg" hasArrow />
            <TransportCard title="Mobil" image="/dummy-car.jpg" hasArrow />
          </div>
        </section>

        {/* Modern Category Row 2 */}
        <section>
          <SectionBadge text="Modern" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <div className="lg:col-start-1 lg:col-span-1 flex justify-end">
              <TransportCard
                title="Pesawat"
                image="/dummy-plane.jpg"
                hasArrow
                className="w-full max-w-sm"
              />
            </div>
            <div className="lg:col-start-2 lg:col-span-1 flex justify-start">
              <TransportCard
                title="Sepeda Motor"
                image="/dummy-motor.jpg"
                hasArrow
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </section>

        {/* Simulated Carousel (Bottom) */}
        <section className="pt-10 pb-20 overflow-visible">
          <div className="relative w-full h-112.5 flex justify-center items-center">
            {/* Background Left Card */}
            <div className="absolute left-0 md:left-12 transform scale-90 opacity-60 z-0 w-full max-w-xs md:max-w-sm pointer-events-none transition-all duration-300">
              <TransportCard title="Pesawat" image="/dummy-plane.jpg" />
            </div>

            {/* Center Active Card */}
            <div className="absolute z-10 w-full max-w-sm md:max-w-md transform scale-105 shadow-2xl transition-all duration-300">
              <TransportCard
                title="Sepeda Motor"
                image="/dummy-train.jpg"
                hasArrow
              />
            </div>

            {/* Background Right Card */}
            <div className="absolute right-0 md:right-12 transform scale-90 opacity-60 z-0 w-full max-w-xs md:max-w-sm pointer-events-none transition-all duration-300">
              <TransportCard title="Pesawat" image="/dummy-plane.jpg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transportation;
