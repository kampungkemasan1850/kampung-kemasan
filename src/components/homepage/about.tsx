"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type AboutSectionProps = {
  t: (key: string) => string;
  image: string | StaticImageData;
};

export default function AboutSection({ t, image }: AboutSectionProps) {
  return (
    <section className="bg-[#FAFAFA] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter uppercase">
            {t("narrative.title")}
          </h2>
          <p className="text-zinc-600 font-light text-lg leading-relaxed">
            {t("narrative.description")}
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 font-bold uppercase tracking-widest text-sm transition-all hover:border-[#C9A051] hover:text-[#C9A051]"
            >
              {t("narrative.cta")}
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[60vh] w-full min-h-125 md:h-full"
        >
          <Image
            src={image}
            alt="Architecture Detail"
            fill
            sizes="60vh"
            className="object-cover transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
