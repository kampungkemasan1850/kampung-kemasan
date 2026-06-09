"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import img from '../../../public/assets/images/hero.webp'

const CircleArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 text-[#A82E13]"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Reusable Room Card Component
type RoomCardProps = {
  image: string | StaticImageData;
  price: string;
  title: string;
};

const RoomCard = ({ image, price, title }: RoomCardProps) => (
  <div className="flex flex-col bg-white w-full ">
    <div className="relative w-full h-45 md:h-50 mb-2">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-5 flex flex-col text-left border border-gray-300 shadow-sm">
      <span className="text-[#A82E13] font-black tracking-[0.2em] text-lg mb-1">
        {price}
      </span>
      <span className="text-gray-800 font-medium text-base">{title}</span>
      <div className="text-[10px] text-gray-500 leading-tight mt-4">
        Mulai dari Rp1.890.000 per malam
        <br />2 orang dewasa | 1 anak di bawah 7 tahun
      </div>
    </div>
  </div>
);

const Akomodasi = () => {
  return (
    <div className="relative w-full py-16 bg-white overflow-hidden font-sans">
      {/* Background Dotted Pattern (Fading out at the bottom) */}
      <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(#666_1px,transparent_1px)] bg-size-[4px_4px] opacity-40"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, black 60%, transparent 100%)",
          }}
        ></div>
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-center text-[#A82E13] uppercase tracking-widest drop-shadow-sm mb-12">
          Akomodasi
        </h1>

        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Card 1 */}
          <RoomCard
            image={img}
            price="IDR 100.000"
            title="Kamar Mewah"
          />

          {/* Card 2 */}
          <RoomCard
            image={img}
            price="IDR 100.000"
            title="Kamar Mewah"
          />

          {/* Action Buttons Column */}
          <div className="flex flex-col gap-6 md:pl-4">
            <button className="bg-[#A82E13] text-white py-4 px-6 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm shadow-md hover:bg-[#85230e] transition">
              Opsi Penginapan
            </button>

            <button className="bg-[#faedb3] text-[#A82E13] py-4 px-6 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm shadow-xl flex flex-col items-center gap-2 hover:bg-[#f3e198] transition">
              Hotel Bahagia
              <CircleArrowRight />
            </button>

            <button className="bg-[#faedb3] text-[#A82E13] py-4 px-6 rounded-2xl font-bold tracking-[0.2em] uppercase text-sm shadow-xl flex flex-col items-center gap-2 hover:bg-[#f3e198] transition">
              Hotel Batik
              <CircleArrowRight />
            </button>
          </div>
        </div>

        {/* Bottom Section Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Left Column: Active Button + Card */}
          <div className="flex flex-col gap-6">
            {/* Active Button with Purple/Indigo border outline as seen in image */}
            <div className="w-full md:w-11/12">
              <button className="w-full bg-[#faedb3] text-[#A82E13] py-4 px-6 rounded-xl font-bold tracking-[0.2em] uppercase text-sm shadow-xl flex flex-col items-center gap-2">
                Hotel Bahagia
                <CircleArrowRight />
              </button>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-11/12">
              <RoomCard
                image={img}
                price="IDR 90.000/ IDR 100.000"
                title="Kamar Mewah"
              />
            </div>
          </div>

          {/* Right Column: Information Description Card */}
          <div className="bg-[#faedb3] rounded-3xl p-8 md:p-12 shadow-2xl h-full flex items-center">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify font-medium">
              Salah satu pilihan akomodasi terdekat dari Kampung Kemasan adalah
              The Bahagia Hotel, yang dikenal sebagai salah satu hotel tertua di
              area ini.
              <br />
              <br />
              Hotel ini cukup populer di kalangan solo traveler dan backpacker,
              baik untuk singgah sebentar maupun menginap selama satu hingga dua
              hari. Suasananya sederhana namun nyaman, cocok bagi Anda yang
              mencari tempat istirahat praktis setelah menjelajahi kawasan
              heritage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Akomodasi;
