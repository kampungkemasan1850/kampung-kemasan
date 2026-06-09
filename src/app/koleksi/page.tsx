"use client";

import React from "react";
import Image from "next/image";

const CircleArrow = ({ bgClass = "bg-white", arrowClass = "text-black" }) => (
  <div
    className={`${bgClass} rounded-full p-2 flex items-center justify-center shrink-0 shadow-md w-10 h-10`}
  >
    <svg
      className={`w-6 h-6 ${arrowClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const Koleksi = () => {
  return (
    <div className="w-full bg-[#F8F9FA] overflow-hidden font-sans pb-20">
      <section className="relative w-full max-w-6xl mx-auto px-4 pt-8 md:pt-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch mx-auto max-w-3xl">
          <div className="flex flex-col rounded-4xl overflow-hidden shadow-xl h-87.5 md:h-100">
            <div className="relative flex-1 w-full">
              <Image
                src="/dummy-house-1.jpg" 
                alt="House Type 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#FDF2CB] h-24 flex items-center justify-center">
              <CircleArrow bgClass="bg-[#A13312]" arrowClass="text-white" />
            </div>
          </div>

          <div className="flex flex-col rounded-4xl overflow-hidden shadow-xl h-87.5 md:h-100">
            <div className="relative flex-1 w-full">
              <Image
                src="/dummy-house-2.jpg" 
                alt="House Type 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#A13312] h-24 flex items-center justify-center">
              <CircleArrow bgClass="bg-white" arrowClass="text-[#A13312]" />
            </div>
          </div>

          <div className="relative flex flex-col rounded-4xl overflow-visible shadow-xl h-87.5 md:h-100">
            <div className="relative flex-1 w-full">
              <Image
                src="/dummy-house-3.jpg"
                alt="House Type 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#F0BB51] h-24 flex items-center justify-center rounded-b-2xl">
              <CircleArrow bgClass="bg-white" arrowClass="text-[#F0BB51]" />
            </div>

            <div className="absolute -bottom-2 -right-8 md:-right-16 z-20 transform rotate-[-5deg]">
              <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                Koleksi rumah{"\n"}
                <span className="ml-8">warisan</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full max-w-6xl mx-auto px-4 md:px-8 mb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-2 md:-left-6 z-20 transform rotate-[-5deg]">
              <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                Koleksi rumah{"\n"}
                <span className="ml-4">warisan</span>
              </span>
            </div>

            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] relative z-10">
              <h1 className="text-2xl md:text-[1.6rem] font-black uppercase leading-tight tracking-tight text-black mb-6">
                Koleksi Rumah Warisan Di
                <br />
                Kampung Kemasan
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-loose text-justify font-medium">
                Berlokasi di Kabupaten Gresik, Jawa Timur, Kampung Kemasan
                Gresik merupakan salah satu destinasi wisata yang paling ikonik
                di daerah tersebut. Kampung ini dikenal dengan gaya
                arsitekturnya yang unik dan cukup berbeda dari beberapa bangunan
                era kolonial pada umumnya. Bagian arsitektur yang ada di Kampung
                Kemasan terpengaruh dari budaya Tionghoa atau Cina, Belanda, dan
                Jawa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src="/dummy-house-grid.jpg" 
                  alt="Rumah Warisan"
                  fill
                  className="object-cover p-2 rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full pt-16 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] bg-size-[5px_5px] opacity-30"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h1 className="text-2xl md:text-[1.6rem] font-black uppercase leading-tight tracking-tight text-black mb-6">
                Fitur Unik Struktural
                <br />
                (Jendela Tipuan)
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-loose text-justify font-medium">
                Jendela tipuan yang terdapat pada rumah-rumah di kawasan Kampung
                kemasan menjadi salah satu ciri khas arsitektur yang unik dan
                menarik. Sekilas, jendela tersebut tampak seperti jendela pada
                umumnya, ternyata itu hanya ornamen rumah. Desain ini dibuat
                sebagai bagian dari sistem keamanan rumah untuk mengelabui
                pencuri, sehingga mereka kesulitan menemukan jalan keluar saat
                memasuki bangunan. Selain memiliki fungsi keamanan, keberadaan
                jendela tipuan ini juga menambah nilai historis dan keunikan
                arsitektur heritage di Kampung Kemasan.
              </p>
            </div>

            <div className="relative flex justify-center items-center h-full">
              <div className="w-full max-w-md flex flex-col rounded-4xl shadow-2xl relative">
                <div className="absolute bottom-[30%] -right-6 md:-right-20 z-30 transform rotate-[-5deg]">
                  <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                    Koleksi rumah{"\n"}
                    <span className="ml-8">warisan</span>
                  </span>
                </div>

                <div className="relative w-full aspect-4/5 rounded-t-4xl overflow-hidden bg-blue-100">
                  <Image
                    src="/dummy-jendela.jpg" 
                    alt="Jendela Tipuan"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-[#A13312] text-white py-5 px-6 rounded-b-4xl w-full text-center z-10">
                  <span className="font-bold tracking-[0.25em] uppercase text-sm md:text-base">
                    Jendela Tipuan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Koleksi;
