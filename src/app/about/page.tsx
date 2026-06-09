"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
// about image not used in this layout
import headImg from "../../../public/assets/images/rumah-img.jpg";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
// Content uses static Indonesian text; i18n translations removed for this page

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-[90vw] mx-auto flex flex-col items-center justify-between">
      <div className="mx-auto px-4 pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border-l-8 border-black pl-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
            TENTANG
          </h1>
          <p className="text-zinc-900 text-2xl md:text-3xl font-semibold mt-4">
            Kampung Kemasan
          </p>
          <p className="text-gray-500 mt-2 text-sm font-light tracking-[0.15em] uppercase">
            Di mana sejarah hidup di setiap sudutnya
          </p>
          <p className="text-zinc-500 mt-2 text-sm">Jawa Timur, Indonesia</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-lg"
        >
          <Image
            src={headImg}
            alt="Kampung Kemasan Heritage"
            loading="eager"
            className="w-full h-[60vh] object-cover shadow-sm "
          />
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-zinc-900">
                Di jantung kota pelabuhan bersejarah Gresik, tersimpan harta
                kebudayaan yang mencerminkan peradaban perdagangan, tradisi, dan
                keindahan arsitektur pada masanya.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 flex flex-col justify-end"
            >
              <p className="text-gray-600 leading-relaxed text-lg italic border-b border-zinc-200 pb-6">
                Menelusuri Kampung Kemasan berarti menjelajahi lorong-lorong
                waktu — di mana bangunan kolonial yang masih terawat dengan baik
                berdiri tegak, kuliner lokal otentik menyambut setiap
                pengunjung, dan nuansa kejayaan masa silam hadir nyata di setiap
                sudut.
              </p>
              <p className="text-zinc-500 mt-6 leading-relaxed">
                Kampung Kemasan Gresik adalah salah satu destinasi wisata paling
                ikonik di Jawa Timur. Dikenal dengan gaya arsitekturnya yang
                unik, kawasan ini menawarkan perpaduan harmonis antara pengaruh
                budaya Tionghoa, Arab, dan Jawa — sebuah cermin peradaban yang
                lahir dari jalur perdagangan berabad-abad lamanya.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">1855</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  Tahun Berdiri
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">3</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  Pengaruh Budaya Arsitektur
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">170+</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  Tahun Warisan Terjaga
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8 bg-zinc-50 border border-zinc-100">
              <h3 className="text-lg font-bold mb-4">Perjalanan Sejarah</h3>
              <div className="space-y-6 text-zinc-700">
                <div>
                  <h4 className="font-bold">
                    Tahun 1855 — Asal-Usul Nama &quot;Kemasan&quot;
                  </h4>
                  <p className="text-sm mt-2">
                    Nama &quot;Kemasan&quot; diyakini berasal dari kata emas,
                    merujuk pada para pedagang emas yang dahulu menetap dan
                    berkembang di kawasan ini. Komunitas saudagar kaya ini
                    menjadi fondasi awal bagi identitas budaya dan ekonomi
                    kawasan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    Tahun 1896 — Industri Penyamakan Kulit H. Oemar Bin Achmad
                  </h4>
                  <p className="text-sm mt-2">
                    H. Oemar Bin Achmad mendirikan usaha penyamakan kulit di
                    Kampung Kemasan — sebuah tonggak industri yang menggerakkan
                    roda perekonomian kota Gresik. Dibantu para pengrajin
                    Tionghoa yang bermukim di kawasan ini, usaha tersebut
                    kemudian dikembangkan oleh kelima putra beliau.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    Akhir Abad ke-19 — Era Bangunan Megah Para Saudagar
                  </h4>
                  <p className="text-sm mt-2">
                    Para pedagang kaya seperti H. Oemar Bin Achmad membangun
                    rumah-rumah megah sebagai lambang kemakmuran dan status
                    sosial. Bangunan-bangunan ini memadukan struktur kolonial
                    Belanda, ornamen Tionghoa Peranakan, serta sentuhan
                    kerajinan tradisional Jawa — menciptakan harmoni arsitektur
                    yang tak tertandingi.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    Hingga Kini — Kawasan Cagar Budaya yang Dilindungi
                  </h4>
                  <p className="text-sm mt-2">
                    Berkat kesadaran dan dedikasi masyarakat setempat, Kampung
                    Kemasan berhasil bertahan di tengah arus modernisasi. Kini
                    kawasan ini berdiri kokoh sebagai cagar budaya resmi kota
                    Gresik, menghadirkan kembali keagungan masa lalu yang masih
                    bisa dinikmati oleh setiap pengunjung.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">Tionghoa</h4>
                <p className="text-sm">
                  Ornamen Peranakan — ukiran halus, warna merah-emas, dan
                  dekorasi khas Cina Peranakan yang menjadi penanda identitas
                  komunitas pedagang Tionghoa yang pernah menetap di sini.
                </p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  Kolonial Belanda
                </h4>
                <p className="text-sm">
                  Struktur Eropa — pilar-pilar kokoh, jendela tinggi berpanel
                  kaca, dan tata ruang bergaya Eropa abad ke-19 yang
                  mencerminkan pengaruh kuat era kolonial dalam lanskap urban
                  Gresik.
                </p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">Jawa</h4>
                <p className="text-sm">
                  Kerajinan Tradisional — sentuhan motif batik, ukiran kayu
                  bergaya Jawa, dan filosofi ruang yang berakar pada kearifan
                  lokal — menjadikan setiap bangunan sebagai ekspresi identitas
                  budaya Nusantara.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* vision and mission */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 w-full relative overflow-hidden rounded-3xl shadow-xl flex flex-col md:flex-row"
        >
          {/* Left Side: Vision */}
          <div className="md:w-1/2 bg-[#8B2615] p-8 md:p-16 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
                OUR{" "}
                <span className="font-sans not-italic font-bold">Vision</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-12">
                Melestarikan Kampung Kemasan sebagai simbol kerukunan
                multikultural dan kebanggaan sejarah di Gresik.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={headImg}
                  alt="Vision"
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Decorative Ampersand for Desktop */}
            <div className="hidden md:block absolute top-1/6 -right-8 transform -translate-y-1/2 z-20">
              <span className="text-[10rem] font-imperial-script font-semibold text-[#E9C46A] opacity-90">
                &
              </span>
            </div>
            <div className="hidden md:block absolute top-1/6 -right-10 transform -translate-y-1/2 z-20">
              <span className="text-[10rem] font-imperial-script font-semibold text-[#8B2615] opacity-90">
                &
              </span>
            </div>
          </div>

          {/* Right Side: Mission */}
          <div className="md:w-1/2 bg-[#E9C46A] p-8 md:p-16 text-zinc-900">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12 ml-4">
              Our{" "}
              <span className="font-sans not-italic font-bold uppercase">
                Mission
              </span>
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={headImg}
                    alt="Mission 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium leading-tight pt-2">
                  Melestarikan arsitektur bersejarah
                </p>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={headImg}
                    alt="Mission 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium leading-tight pt-2">
                  Mengembangkan edukasi dan pemahaman bagi generasi mendatang
                </p>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={headImg}
                    alt="Mission 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium leading-tight pt-2">
                  Mendorong pengembangan pariwisata berbasis warisan budaya yang
                  berkelanjutan
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[40vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light italic mb-8 text-zinc-800">
            &quot;More than just old buildings, Kampung Kemasan is a living
            legacy.&quot;
          </h2>
          <Link
            href="/contact"
            className="group flex flex-row items-center text-black font-bold uppercase tracking-[0.2em] text-sm transition-all"
          >
            Contact Us
            <span className="text-xs ml-3 flex flex-row">
              <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              <FaChevronRight className="transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
