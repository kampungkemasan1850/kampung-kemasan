"use client";

import { useState, useEffect } from "react";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutImg = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about.webp`;
const AboutImg2 = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about2.webp`;
const AboutImg3 = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about3.webp`;
const VisionImg = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/visi.webp`;
const AboutSubImg1 = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about-sub1.webp`;
const AboutSubImg2 = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about-sub2.webp`;
const AboutSubImg3 = `${process.env.NEXT_PUBLIC_STORAGE_URL}/gallery/about-sub3.webp`;
const carouselImages = [
  { src: AboutImg, alt: "Kampung Kemasan Heritage 1" },
  { src: AboutImg2, alt: "Kampung Kemasan Heritage 2" },
  { src: AboutImg3, alt: "Kampung Kemasan Heritage 3" },
];

export default function AboutPage() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen w-[90vw] mx-auto flex flex-col items-center justify-between relative">
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-lg md:text-xl font-bold uppercase text-[#A63011] tracking-wider leading-tight pr-4">
                {t("about.intro.more_title")}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 focus:outline-none shrink-0"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto space-y-4">
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p1")}
              </p>
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p2")}
              </p>
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p3")}
              </p>
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p4")}
              </p>
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p5")}
              </p>
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium">
                {t("about.intro.more_p6")}
              </p>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-zinc-300 transition-colors bg-black/50 hover:bg-black/80 rounded-full p-3 focus:outline-none z-70"
            >
              <FaTimes size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto px-4 pt-8 pb-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border-l-8 border-black pl-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-zinc-900 text-3xl md:text-4xl font-semibold uppercase mt-4">
            Kampung Kemasan
          </p>
          <p className="text-gray-500 mt-2 text-sm font-light tracking-[0.15em] uppercase">
            {t("about.description")}
          </p>
          <p className="text-zinc-500 mt-2 text-sm">{t("about.location")}</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-xl relative w-full h-[60vh] shadow-sm bg-zinc-100 group"
        >
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                fill
                priority={currentImageIndex === 0}
                className="object-cover"
                sizes="(max-width: 1200px) 90vw, 1200px"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImageIndex
                    ? "w-8 h-2.5 bg-white shadow-md"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <motion.div
              variants={fadeInUp}
              className="md:col-span-3 flex flex-col items-start"
            >
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-zinc-900">
                {t("about.intro.more_title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("about.intro.more_p1")} {t("about.intro.more_p2")}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8B2615] hover:text-black transition-colors"
              >
                {t("about.read_more")} <FaChevronRight className="w-3 h-3" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 mt-4 border-t border-gray-100">
                <div
                  className="relative h-48 md:h-40 w-full rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => setSelectedImage(AboutSubImg1)}
                >
                  <Image
                    src={AboutSubImg1}
                    alt="About Sub Image 1"
                    width={400}
                    height={300}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className="relative h-48 md:h-40 w-full rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => setSelectedImage(AboutSubImg2)}
                >
                  <Image
                    src={AboutSubImg2}
                    alt="About Sub Image 2"
                    width={400}
                    height={300}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className="relative h-48 md:h-40 w-full rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => setSelectedImage(AboutSubImg3)}
                >
                  <Image
                    src={AboutSubImg3}
                    alt="About Sub Image 3"
                    width={400}
                    height={300}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 flex flex-col justify-end"
            >
              <p className="text-gray-600 leading-relaxed text-lg italic border-b border-zinc-200 pb-6">
                {t("about.intro.p1")}
              </p>
              <p
                className="text-zinc-500 mt-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("about.intro.p2") }}
              />
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
                  {t("about.stats.year_label")}
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">3</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  {t("about.stats.culture_label")}
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">170+</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  {t("about.stats.heritage_label")}
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8 bg-zinc-50 border border-zinc-100">
              <h3 className="text-lg font-bold mb-4">
                {t("about.history.title")}
              </h3>
              <div className="space-y-6 text-zinc-700">
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item1_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item1_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item2_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item2_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item3_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item3_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item4_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item4_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.chinese_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.chinese_desc")}</p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.dutch_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.dutch_desc")}</p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.javanese_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.javanese_desc")}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 w-full relative overflow-hidden rounded-3xl shadow-xl flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 bg-[#8B2615] p-8 md:p-16 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
                Our{" "}
                <span className="font-sans not-italic font-bold uppercase">
                  Vision
                </span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-12">
                {t("about.vision_mission.vision_desc")}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={VisionImg}
                  alt="Vision"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

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

          <div className="md:w-1/2 bg-[#F5F8DF] p-8 md:p-16 text-zinc-900 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12">
              Our{" "}
              <span className="font-sans not-italic font-bold uppercase">
                Mission
              </span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    1
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission1")}
                </p>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    2
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission2")}
                </p>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    3
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission3")}
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
            {t("about.closing_quote")}
          </h2>
          <Link
            href="/contact"
            className="group flex flex-row items-center text-black font-bold uppercase tracking-[0.2em] text-sm transition-all"
          >
            {t("about.contact")}
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
