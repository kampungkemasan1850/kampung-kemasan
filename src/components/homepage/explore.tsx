"use client";

import { useState } from "react";
import {
  FaCamera,
  FaMapMarkedAlt,
  FaUtensils,
  FaBed,
  FaCar,
  FaBus,
  FaTrain,
  FaPlane,
  FaBicycle,
  FaShoppingBag,
  FaCoffee,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const exploreTabs = [
  {
    id: "transportasi",
    title: "Transportasi",
    icon: FaMapMarkedAlt,
    desc: "Akses dari berbagai kota dan pilihan transportasi.",
  },
  {
    id: "aktivitas",
    title: "Aktivitas",
    icon: FaCamera,
    desc: "Workshop, walking tour, dan spot foto heritage.",
  },
  {
    id: "kuliner",
    title: "Kuliner",
    icon: FaUtensils,
    desc: "Cita rasa otentik Gresik dan tempat nongkrong.",
  },
  {
    id: "akomodasi",
    title: "Akomodasi",
    icon: FaBed,
    desc: "Penginapan heritage hemat & nyaman.",
  },
];

export default function Explore() {
  const [activeExplore, setActiveExplore] = useState("transportasi");

  const renderContent = () => {
    switch (activeExplore) {
      case "transportasi":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#C9A051] mb-3">
                Akses & Peta Lokasi
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Kampung Kemasan terletak strategis di pusat Kota Gresik,
                sehingga mudah dijangkau dari berbagai kota di sekitarnya.
                Lokasinya hanya sekitar{" "}
                <strong>20 kilometer dari Surabaya</strong> dan sekitar{" "}
                <strong>145 kilometer dari Malang</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#C9A051] p-2 rounded-lg text-white">
                    <FaCar />
                  </div>
                  <h4 className="font-bold text-zinc-800">Dengan Mobil</h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Dari Surabaya: Ambil jalur tol Surabaya–Gresik
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Ikuti petunjuk arah menuju pusat Kota Gresik
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Tiba dalam waktu sekitar 40–50 menit
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Area parkir tersedia di sekitar lokasi
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#C9A051] p-2 rounded-lg text-white">
                    <FaBus />
                  </div>
                  <h4 className="font-bold text-zinc-800">Dengan Bus</h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Dari terminal Bungurasih ke Gresik
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Gunakan Bus Transjatim (Rp 5.000 – Rp 15.000)
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Tiba dalam 40–50 menit (turun halte Transjatim)
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#C9A051] p-2 rounded-lg text-white">
                    <FaTrain />
                  </div>
                  <h4 className="font-bold text-zinc-800">Dengan Kereta</h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Perjalanan menuju stasiun di Surabaya
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Lanjutkan ke Gresik dengan mobil / transportasi online
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#C9A051] p-2 rounded-lg text-white">
                    <FaPlane />
                  </div>
                  <h4 className="font-bold text-zinc-800">
                    Dari Bandara Juanda
                  </h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Taksi / transportasi online (sekitar 1 jam)
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#C9A051] mt-1 shrink-0" />{" "}
                    Atau shuttle bandara ke Surabaya, lanjut ke Gresik
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#C9A051] mb-4 flex items-center gap-2">
                <FaBicycle /> Transportasi Wisata Lokal
              </h4>
              <p className="text-sm text-zinc-600 mb-3">
                Pilihan kendaraan untuk berkeliling area Kampung Kemasan:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  Dokar (Kereta Kuda)
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  Becak
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  Bus Macito Gresik
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  Bus Susun (Bandar Grisse)
                </span>
              </div>
            </div>
          </div>
        );

      case "aktivitas":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#C9A051] mb-3">
                Aktivitas di Kampung Kemasan
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Jangan sia-siakan waktu kalau belum mencoba berbagai kegiatan
                menarik dan mengabadikan momen di sekitar kawasan heritage ini!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="font-bold text-lg text-zinc-800 mb-4 border-b pb-2">
                  Kegiatan Eksplorasi
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                      <FaUtensils />
                    </div>
                    <span className="font-medium">
                      Workshop Kerajinan Lokal
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <FaMapMarkedAlt />
                    </div>
                    <span className="font-medium">
                      Walking Tour Kawasan Heritage
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <FaBus />
                    </div>
                    <span className="font-medium">
                      Keliling Kota Lama (Bus Macito)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="font-bold text-lg text-zinc-800 mb-4 border-b pb-2">
                  Dokumentasi Estetik
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">
                      Swafoto di Arsitektur Klasik
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">Video Blogging (Vlog)</span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">Sesi Foto Pre-wedding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "kuliner":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#C9A051] mb-3">
                Eksplorasi Rasa & Budaya
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Setelah menjelajahi keindahan jalan-jalan bersejarah, lanjutkan
                perjalanan dengan menikmati beragam kuliner khas. Mulai dari
                hidangan gurih hingga camilan manis tradisional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="text-[#C9A051] mb-3">
                  <FaUtensils size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  Makanan Populer
                </h4>
                <ul className="text-sm text-zinc-600 space-y-3">
                  <li>
                    <strong>Nasi Krawu:</strong> Suwiran daging sapi lezat
                    dengan sambal pedas khas.
                  </li>
                  <li>
                    <strong>Otak-otak Bandeng:</strong> Olahan ikan unik dengan
                    bumbu kaya rasa.
                  </li>
                  <li>
                    <strong>Pudak:</strong> Camilan manis tradisional dari
                    tepung beras & santan.
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="text-[#C9A051] mb-3">
                  <FaShoppingBag size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  Oleh-oleh Ikonik
                </h4>
                <div className="text-sm text-zinc-600">
                  <p className="font-bold text-zinc-800 mb-1">
                    Batik Gajah Mungkur
                  </p>
                  <p>
                    Batik khas Gresik yang dibuat di rumah warisan budaya Gajah
                    Mungkur peninggalan H. Oemar, dekat Kampung Kemasan.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 md:col-span-2 xl:col-span-1">
                <div className="text-[#C9A051] mb-3">
                  <FaCoffee size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  Tempat Nongkrong
                </h4>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Sualoka Hub
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Kamari
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Gresiknesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "akomodasi":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#C9A051] mb-3">
                Tempat Menginap
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Bagi Anda yang merencanakan singgah lebih lama untuk eksplorasi,
                terdapat pilihan penginapan praktis yang sarat nilai sejarah.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-6 lg:p-8 border border-zinc-100 flex flex-col gap-6">
              <div className="space-y-4">
                <div className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-1">
                  Rekomendasi
                </div>
                <h4 className="text-3xl font-extrabold text-zinc-800">
                  The Bahagia Hotel
                </h4>
                <p className="text-2xl font-semibold text-[#C9A051]">
                  IDR 150.000{" "}
                  <span className="text-sm text-zinc-400 font-normal">
                    / malam
                  </span>
                </p>
                <div className="h-px w-full bg-zinc-200 my-4" />
                <p className="text-zinc-600 leading-relaxed">
                  Dikenal sebagai salah satu hotel tertua di area ini, The
                  Bahagia Hotel menjadi akomodasi terdekat dari Kampung Kemasan.
                  <br />
                  <br />
                  Hotel ini sangat populer di kalangan <em>
                    solo traveler
                  </em>{" "}
                  dan <em>backpacker</em>. Dengan suasana sederhana, ramah di
                  kantong, dan nyaman, penginapan ini adalah pilihan ideal bagi
                  wisatawan yang mengutamakan efisiensi istirahat setelah
                  seharian berjalan-jalan di kawasan heritage Gresik.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10">
        <div className="w-full lg:w-1/3 xl:w-[30%] flex flex-col gap-4 lg:gap-6 shrink-0">
          <div className="text-center lg:text-left mb-2 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-[#C9A051] leading-tight capitalize">
              Jelajahi <br className="hidden lg:block" />
              <span className="text-zinc-800 text-2xl font-bold">
                Kampung Kemasan
              </span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2 lg:mt-3 leading-relaxed hidden lg:block">
              Pilih menu di bawah untuk melihat panduan lengkap perjalanan,
              tempat menarik, hingga akomodasi di sekitar kota lama Gresik.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:flex lg:flex-col lg:gap-3">
            {exploreTabs.map((tab) => {
              const isActive = activeExplore === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveExplore(tab.id)}
                  className={`relative p-2 lg:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-center lg:justify-start lg:gap-4 text-left group overflow-hidden
                    ${
                      isActive
                        ? "bg-[#C9A051] border-[#C9A051] shadow-lg shadow-[#C9A051]/20 lg:scale-[1.02]"
                        : "bg-white border-zinc-200 shadow-sm hover:border-[#C9A051]/30 hover:bg-zinc-50"
                    }`}
                >
                  <div
                    className={`p-3 lg:p-4 rounded-xl transition-colors duration-300 shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-[#C9A051] group-hover:bg-[#C9A051]/10"
                    }`}
                  >
                    <tab.icon className="text-2xl" />
                  </div>

                  <div className="hidden lg:block">
                    <span
                      className={`block text-base font-extrabold uppercase tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-zinc-800"
                      }`}
                    >
                      {tab.title}
                    </span>
                    <p
                      className={`mt-1 text-xs line-clamp-2 transition-colors ${
                        isActive ? "text-white/80" : "text-zinc-500"
                      }`}
                    >
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-w-0 bg-white rounded-4xl border border-zinc-200 p-6 md:p-10 lg:p-12 shadow-xl shadow-zinc-200/40">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
