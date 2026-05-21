"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/assets/images/hero-img.jpg";
import { FaArrowRight } from "react-icons/fa";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function EventPage() {
  const { t } = useTranslation();

  const annualEvents = [
    {
      title: "Pasar Bandeng Festive",
      period: "Jelang Idul Fitri",
      description:
        "Pasar Bandeng Festive merupakan salah satu tradisi tahunan yang paling dinantikan di Gresik, khususnya menjelang Hari Raya Idul Fitri. Festival ini menjadi ajang unik di mana ikan bandeng hasil budidaya para petambak lokal dilelang, menciptakan suasana yang meriah dan penuh antusiasme.",
      listTitle: "Pengalaman Menarik Pengunjung:",
      listItems: [
        "Bazar UMKM dengan beragam produk lokal",
        "Festival kuliner khas berbahan dasar ikan bandeng",
        "Jual beli ikan segar hasil tambak",
        "Kompetisi memasak olahan bandeng",
      ],
      extraDescription:
        "Beragam stan makanan juga tersedia, menjadikannya tempat yang sempurna untuk dinikmati bersama pasangan, teman, maupun keluarga. Lebih dari sekadar festival, Pasar Bandeng Gresik memiliki makna sosial yang mendalam. Masyarakat dari berbagai daerah, baik dari pusat kota maupun desa sekitar, berkumpul untuk berbelanja, bersilaturahmi, dan menghabiskan waktu bersama. Suasana hangat dan penuh kebersamaan ini mencerminkan nilai kekompakan serta tradisi yang terus hidup di tengah masyarakat Gresik. Pasar Bandeng bukan hanya tentang kuliner dan perdagangan, tetapi juga tentang kebersamaan dan identitas budaya yang menjadikannya pengalaman tak terlupakan bagi setiap pengunjung.",
    },
    {
      title: "Festival Badoghan",
      period: "Akhir Tahun",
      description:
        "Festival Badoghan merupakan perayaan tahunan yang biasanya diselenggarakan pada akhir tahun, dengan tujuan mempererat kebersamaan antara warga desa dan para nelayan lokal. Dalam festival ini, hasil tangkapan ikan dari nelayan setempat diolah dan disajikan sebagai bagian dari tradisi berbagi dan kebersamaan. Acara ini diinisiasi oleh mahasiswa dari Universitas Muhammadiyah Malang bersama Pokdarwis (Kelompok Sadar Wisata), sebagai upaya membangun ikatan sosial serta menghidupkan potensi wisata berbasis komunitas.",
      listTitle: "Rangkaian Kegiatan Festival:",
      listItems: [
        "Pentas budaya kolosal yang menampilkan kekayaan tradisi lokal",
        "Lebih dari 60 tenant kuliner dan budaya",
        "Partisipasi dari 5 kelurahan: Kroman, Sukodono, Pekelingan, Kemuteran, dan Kramatinggil",
        "Kolaborasi dengan Badan Keswadayaan Masyarakat (BKM) 79 Kabupaten Gresik",
      ],
      menusTitle:
        "Mengusung tagline “Gresik Ono Roso” (Gresik Ada Rasa), nikmati hidangan khas seperti:",
      menus: [
        "Nasi Krawu",
        "Ndok-ndokan (aneka olahan telur)",
        "Ubus",
        "Mie Kenyol",
        "Es Sinom",
        "Pudak",
      ],
      extraDescription:
        "Di tengah maraknya makanan modern, Festival Badoghan tetap berkomitmen mengangkat kuliner tradisional khas Gresik. Antusiasme masyarakat yang tinggi menunjukkan bahwa cita rasa lokal tetap memiliki tempat istimewa di hati warga. Lebih dari sekadar festival, Festival Badoghan adalah simbol kebersamaan, budaya, dan kebanggaan lokal yang memberikan pengalaman hangat dan autentik bagi setiap pengunjung.",
    },
  ];

  return (
    <div className="min-h-screen text-zinc-900 pb-24">
      {/* Header Section */}
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            {t("events.title", "Halaman Acara")}
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            {t("events.subtitle", "Acara Tahunan di Kampung Kemasan")}
          </p>
        </div>
      </section>

      {/* Main Events - Section 1: Festival */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C9A051] mb-6">
              01. Acara Tahunan
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Perayaan tahunan yang menjadi denyut nadi kehidupan sosial di
              Kampung Kemasan, menggabungkan potensi maritim, tradisi, dan
              kekayaan kuliner Gresik.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {annualEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-zinc-300 pb-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#C9A051] transition-colors">
                    {event.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-black text-white uppercase tracking-tighter shrink-0">
                    {event.period}
                  </span>
                </div>

                <p className="text-zinc-600 leading-relaxed mb-6 font-light">
                  {event.description}
                </p>

                <div className="mb-6 bg-zinc-100 p-6 rounded-sm">
                  <p className="font-bold text-sm uppercase tracking-widest mb-4">
                    {event.listTitle}
                  </p>
                  <ul className="space-y-3">
                    {event.listItems.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-zinc-600 text-sm md:text-base"
                      >
                        <span className="w-1.5 h-1.5 bg-[#C9A051] rounded-full mt-2 shrink-0"></span>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {event.menus && (
                  <div className="mb-6">
                    <p className="text-sm text-zinc-600 font-light mb-4 italic">
                      {event.menusTitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.menus.map((menu, i) => (
                        <span
                          key={i}
                          className="border border-zinc-300 bg-white px-4 py-2 text-[11px] uppercase font-bold tracking-widest text-zinc-700 shadow-sm"
                        >
                          {menu}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-zinc-600 leading-relaxed text-sm md:text-base font-light">
                  {event.extraDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Art & Culture Exhibition (MTN Lab Focus) */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[70vh] grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src={heroImg}
                alt="MTN Lab Exhibition"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C9A051] p-8 hidden md:block">
                <p className="text-black font-bold text-4xl tracking-tighter">
                  1–14 Sept &apos;25
                </p>
                <p className="text-black/70 text-xs font-bold uppercase tracking-widest">
                  MTN Lab Residency
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-2">
                Pameran Seni & Budaya <br />{" "}
                <span className="text-[#C9A051] text-3xl md:text-4xl">
                  (Art & Culture Exhibition)
                </span>
              </h2>
              <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
                <p>
                  Kota Gresik dikenal sebagai kota dagang, kota santri,
                  sekaligus kota industri. Namun di balik dinamika tersebut,
                  terdapat ruang-ruang bersejarah yang menyimpan kekayaan budaya
                  yang luar biasa—salah satunya adalah Kampung Kemasan, kawasan
                  lama yang dahulu menjadi titik pertemuan para saudagar,
                  pengrajin, dan pendatang dari berbagai latar etnis.
                </p>
                <p>
                  Dalam semangat tersebut, Kampung Kemasan menjadi tuan rumah
                  MTN Lab (Manajemen Talenta Nasional Lab) pada 1–14 September
                  2025, sebuah program inisiatif Kementerian Kebudayaan Republik
                  Indonesia. Puluhan seniman dari berbagai daerah berkumpul,
                  tinggal bersama, dan berkolaborasi dalam ruang kreatif yang
                  kaya akan sejarah dan identitas budaya.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-800">
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    Jadwal
                  </h4>
                  <p className="text-sm text-zinc-300">1–14 September 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    Inisiator
                  </h4>
                  <p className="text-sm text-zinc-300">
                    Kementerian Kebudayaan RI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Kelanjutan Program MTN Lab */}
      <section className="bg-zinc-900 text-white px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border-t border-zinc-700 pt-8">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-white">
                Rangkaian Kegiatan
              </h3>
              <p className="text-zinc-400 font-light mb-6 leading-relaxed">
                Selama dua minggu, para peserta mengikuti berbagai kegiatan
                seperti residensi, inkubasi karya, lokakarya, hingga
                masterclass. Proses ini tidak hanya berfokus pada pengembangan
                keterampilan seni, tetapi juga bagaimana seni berinteraksi
                dengan kehidupan masyarakat serta sejarah ruang di sekitarnya.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                MTN Lab juga menghadirkan workshop film bersama komunitas lokal,
                diskusi kuratorial, hingga persiapan pameran yang memperkaya
                pengalaman para seniman muda dalam membangun perjalanan karier
                mereka ke depan.
              </p>
            </div>

            <div className="border-t border-zinc-700 pt-8">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-white">
                Ruang Afirmasi & Inspirasi
              </h3>
              <p className="text-zinc-400 font-light mb-6 leading-relaxed">
                Program ini menjadi wadah penting bagi seniman muda untuk
                berkembang dan mendapatkan pengalaman langsung dari para
                praktisi. Selain itu, MTN Lab juga menjadi ruang afirmasi bagi
                talenta lokal, termasuk seniman dari Gresik yang berpartisipasi
                dalam berbagai medium seperti seni lukis, kriya, hingga seni
                berbasis komunitas.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Lebih dari sekadar pameran, Art & Culture Exhibition di Kampung
                Kemasan menghadirkan cara baru untuk melihat kota—bagaimana
                arsitektur, kehidupan sehari-hari, hingga budaya lokal menjadi
                sumber inspirasi karya seni. Dari Kampung Kemasan, semangat
                kreatif ini kemudian menyebar ke berbagai kota lain di
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="mt-16 text-center py-24 border-t border-zinc-200">
        <p className="text-zinc-400 uppercase tracking-[0.5em] text-xs mb-8">
          Makna Kebudayaan
        </p>
        <h2 className="text-3xl md:text-5xl font-light italic mb-12 text-zinc-800 px-4 leading-tight">
          &quot;Seni selalu tumbuh dari ruang hidup{" "}
          <br className="hidden md:block" /> yang dekat dengan masyarakat.&quot;
        </h2>
        <div className="flex flex-row justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] transition-all duration-500"
          >
            Kolaborasi Event
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
