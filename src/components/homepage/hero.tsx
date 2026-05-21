"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  heroImg: StaticImageData;
  t: (key: string) => string;
};

export default function Hero({ heroImg, t }: HeroProps) {
  return (
    <div className="h-[95vh] w-full relative overflow-hidden ">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 "
      >
        <Image
          src={heroImg}
          alt="Hero Image"
          placeholder="blur"
          priority
          fill
          sizes="95vh"
          className="object-cover brightness-[0.65]"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 text-left px-4 md:px-[10vw]">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white text-xs md:text-sm uppercase tracking-[0.4em] bg-[#C9A051]/80 py-2 px-4 backdrop-blur-sm"
        >
          {t("hero.est")}
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white text-5xl md:text-8xl text-center font-bold tracking-tighter leading-none drop-shadow-2xl uppercase"
        >
          {t("hero.title")} <br />
          <span className="italic font-light lowercase">
            {t("hero.subtitle")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-white/80 text-lg md:text-xl font-light italic tracking-wide"
        >
          “{t("hero.tagline")}”
        </motion.p>
      </div>
    </div>
  );
}
