"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  image: StaticImageData;
  t: (key: string) => string;
};

export default function Hero({ image, t }: HeroProps) {
  
  const textColor = "text-[#ffe88b]";

  return (
    <div className="h-[95vh] w-full relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="Kampoeng Kemasan"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover brightness-90"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        <div className="absolute top-[12%] md:top-[15%] left-[5%] md:left-[10%] flex flex-col items-start pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="ml-8 md:ml-10 z-20 mb-4"
          >
            <span
              className={`inline-block border-2 border-[#ffe88b] ${textColor} rounded-[50%] px-6 py-2 text-sm md:text-xl font-bold tracking-widest shadow-sm `}
            >
              {t("hero.est")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={`font-luxurious-script ${textColor} text-6xl md:text-[13rem] font-semibold tracking-wide leading-[0.8] drop-shadow-2xl text-left`}
          >
            Kampoeng
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={`ml-24 font-luxurious-script ${textColor} text-6xl md:text-[13rem] font-semibold tracking-wide leading-[0.8] drop-shadow-2xl text-left`}
          >
            Kemasan
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`absolute bottom-[10%] md:bottom-[15%] w-full text-center px-4 ${textColor} text-base md:text-xl font-sans tracking-wide drop-shadow-lg pointer-events-auto`}
        >
         &quot;{t("hero.tagline")} &quot;
        </motion.p>
      </div>
    </div>
  );
}
