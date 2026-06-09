"use client";

import React from "react";
import Image from "next/image";

const CircleArrowRight = ({ className = "w-8 h-8 text-[#5D1808]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" className="text-white shadow-sm" />
    <path
      d="M10 8l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCard = () => (
  <div className="bg-[#FAF3E0] p-6 md:p-8 flex flex-col justify-between shadow-lg h-full">
    <div>
      <p className="text-[#333] text-xs md:text-sm leading-relaxed font-serif text-justify mb-4">
        Setelah menjelajahi keindahan jalan-jalan bersejarah Kampung Kemasan,
        pengunjung dapat melanjutkan perjalanan dengan menikmati beragam kuliner
        khas di sekitar Gresik.
      </p>
      <p className="text-[#333] text-xs md:text-sm leading-relaxed font-serif text-justify mb-8">
        Mulai dari hidangan gurih hingga camilan tradisional yang manis, Anda
        dapat menemukan berbagai cita rasa otentik tak jauh
      </p>
      <h3 className="text-[#5D1808] font-serif font-bold text-lg md:text-xl uppercase leading-tight mb-4">
        Pilihan Kuliner
        <br />
        Sekitar
      </h3>
    </div>
    <div className="flex flex-col gap-3">
      <button className="bg-[#A42C12] text-white py-3 px-4 text-left font-serif text-sm tracking-widest uppercase shadow-md hover:bg-[#85230e] transition">
        Kuliner Tradisional
      </button>
      <button className="bg-[#A42C12] text-white py-3 px-4 text-left font-serif text-sm tracking-widest uppercase shadow-md hover:bg-[#85230e] transition">
        Kuliner Modern
      </button>
    </div>
  </div>
);

type MenuCardProps = {
  title: string;
  image: string;
  children: React.ReactNode;
  heightClass?: string;
};

const MenuCard = ({
  title,
  image,
  children,
  heightClass = "h-[120px]",
}: MenuCardProps) => (
  <div className="bg-[#FAF3E0] shadow-xl flex flex-col">
    <div className={`relative w-full ${heightClass}`}>
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/60 to-transparent" />
      <h4 className="absolute top-3 left-4 text-[#FAF3E0] font-serif tracking-widest uppercase text-sm md:text-base drop-shadow-md">
        {title}
      </h4>
    </div>
    <div className="p-4 md:p-6 text-[#333] font-serif text-xs md:text-sm flex-1 flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const Kuliner = () => {
  return (
    <div className="w-full bg-[#5D1808] min-h-screen font-sans overflow-hidden">
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/dummy-hero-street.jpg"
          alt="Street View"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black" />
        <div className="absolute bottom-12 left-6 md:bottom-24 md:left-24 max-w-2xl z-10">
          <h2 className="font-luxurious-script italic text-5xl md:text-7xl text-[#F25C29] drop-shadow-lg mb-4">
            Activity & Cuisine
          </h2>
          <p className="text-[#FAF3E0] font-serif text-lg md:text-xl leading-relaxed max-w-xl">
            Make every moment unforgettable by discovering the exciting
            activities and traditional culinary treasures around Kampung
            Kemasan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24">
        <section className="relative">
          <div className="hidden lg:block absolute -top-16 right-10 z-10">
            <h2 className="font-luxurious-script italic text-5xl md:text-7xl text-[#FAF3E0] drop-shadow-sm">
              Kuliner Sekitar
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6">
            <div>
              <InfoCard />
            </div>

            <div className="relative pt-12 lg:pt-0">
              <h2 className="lg:hidden font-luxurious-script italic text-5xl text-[#FAF3E0] mb-6 text-center">
                Kuliner Sekitar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MenuCard
                  title="Krawu"
                  image="/dummy-coffee.jpg"
                  heightClass="h-[140px]"
                >
                  <p className="text-justify leading-tight opacity-90">
                    Nasi Krawu — hidangan khas Gresik yang menyajikan suwiran
                    daging sapi dan parutan daging kelapa di atas nasi, serta
                    disajikan bersama sambal pedas.
                  </p>
                </MenuCard>

                <MenuCard
                  title="Otak-Otak Bandeng"
                  image="/dummy-cookies.jpg"
                  heightClass="h-[140px]"
                >
                  <ul className="space-y-1 opacity-90">
                    <li>• Jam Sandwich — $5.00</li>
                    <li>• Acoustic Waffles — $4.50</li>
                    <li>• Cheesy Fries — $3.75</li>
                    <li>• Spicy Fries — $4.00</li>
                    <li>• Brownie Bar — $2.50</li>
                  </ul>
                </MenuCard>

                <MenuCard
                  title="Pudak"
                  image="/dummy-syrup.jpg"
                  heightClass="h-[140px]"
                >
                  <ul className="space-y-1 opacity-90">
                    <li>• Cinna Roll — $3.00</li>
                    <li>• Choco Cake — $4.00</li>
                    <li>• Lemon Tart — $3.25</li>
                    <li>• Cheesecake — $4.25</li>
                    <li>• Mocha Mousse — $3.75</li>
                  </ul>
                </MenuCard>
              </div>

              <div className="flex justify-end mt-6">
                <button className="hover:scale-110 transition-transform">
                  <CircleArrowRight className="w-10 h-10 text-[#5D1808]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="font-serif text-[#FAF3E0] text-xl md:text-2xl uppercase tracking-widest">
              Pilihan
            </span>
            <span className="font-luxurious-script italic text-5xl md:text-7xl text-[#FAF3E0] drop-shadow-sm">
              Tradisional
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MenuCard
              title="Krawu"
              image="/dummy-coffee.jpg"
              heightClass="h-[220px]"
            >
              <ul className="space-y-2 opacity-90 text-sm md:text-base">
                <li>
                  • Brew Classic — <strong>$3.00</strong>
                </li>
                <li>
                  • Sea Salt Latte — <strong>$3.50</strong>
                </li>
                <li>
                  • Iced Vanilla Latte — <strong>$3.25</strong>
                </li>
                <li>
                  • Mocha Rush — <strong>$3.75</strong>
                </li>
                <li>
                  • Cold Brew — <strong>$4.00</strong>
                </li>
              </ul>
            </MenuCard>

            <MenuCard
              title="Otak-Otak Bandeng"
              image="/dummy-cookies.jpg"
              heightClass="h-[220px]"
            >
              <ul className="space-y-2 opacity-90 text-sm md:text-base">
                <li>
                  • Jam Sandwich — <strong>$5.00</strong>
                </li>
                <li>
                  • Acoustic Waffles — <strong>$4.50</strong>
                </li>
                <li>
                  • Cheesy Fries — <strong>$3.75</strong>
                </li>
                <li>
                  • Spicy Fries — <strong>$4.00</strong>
                </li>
                <li>
                  • Brownie Bar — <strong>$2.50</strong>
                </li>
              </ul>
            </MenuCard>

            <MenuCard
              title="Pudak"
              image="/dummy-syrup.jpg"
              heightClass="h-[220px]"
            >
              <ul className="space-y-2 opacity-90 text-sm md:text-base">
                <li>
                  • Cinna Roll — <strong>$3.00</strong>
                </li>
                <li>
                  • Choco Cake — <strong>$4.00</strong>
                </li>
                <li>
                  • Lemon Tart — <strong>$3.25</strong>
                </li>
                <li>
                  • Cheesecake — <strong>$4.25</strong>
                </li>
                <li>
                  • Mocha Mousse — <strong>$3.75</strong>
                </li>
              </ul>
            </MenuCard>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-end pb-20">
          <div className="relative pt-16 h-full flex flex-col justify-end">
            <div className="absolute top-0 left-0 z-10">
              <h2 className="font-luxurious-script italic text-6xl md:text-8xl text-[#FAF3E0] drop-shadow-sm">
                Aktivitas
              </h2>
            </div>

            <div className="relative w-full h-62.5 md:h-75 mt-12 flex items-end">
              <div className="absolute left-0 bottom-0 w-[45%] h-[85%] bg-black flex flex-col">
                <div className="relative flex-1 opacity-50">
                  <Image
                    src="/dummy-lime-drink.jpg"
                    alt="Solo Set bg"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute top-4 left-4 text-white font-serif text-sm">
                    SOLO SET
                  </span>
                </div>
                <div className="h-10 bg-[#FAF3E0] flex items-center px-4 text-xs font-serif text-[#333]">
                  1 drink + 1 snack
                </div>
              </div>

              <div className="absolute left-[20%] md:left-[25%] bottom-0 w-[65%] h-full bg-black shadow-2xl flex flex-col z-20">
                <div className="relative flex-1">
                  <Image
                    src="/dummy-lime-drink.jpg"
                    alt="Solo Set"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-6 right-6 flex justify-between text-white font-serif tracking-widest items-center">
                    <span>SOLO SET</span>
                    <span>$6.50</span>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 right-4 hover:scale-110 transition-transform cursor-pointer">
                    <CircleArrowRight className="w-10 h-10 text-black" />
                  </div>
                </div>
                <div className="h-14 bg-[#FAF3E0] flex items-center px-6 text-sm md:text-base font-serif text-[#333]">
                  1 drink + 1 snack/dessert
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <InfoCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kuliner;
