import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

type MapsSectionProps = {
  t: (key: string) => string;
};

const Map: React.FC = () => {
  const src =
    "https://www.google.com/maps?q=Kampung+Kemasan+Gresik&output=embed";

  return (
    <div className="w-full h-full">
      <iframe
        title="Kampung Kemasan Location"
        src={src}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

const MapsSection: React.FC<MapsSectionProps> = ({ t }) => {
  return (
    <section className="px-4 md:px-8 bg-[#EFEDE0] md:bg-[linear-gradient(to_left,#000_50%,#EFEDE0_50%)]">
      <div className="md:max-w-[80vw] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 h-[60vh] w-full shadow-2xl transition-all duration-700"
          >
            <Map />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 text-zinc-900"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tighter uppercase leading-none text-white">
              {t("maps.title")}
            </h2>
            <div className="my-6">
              <p className="text-sm md:text-base text-white mb-4">
                {t("maps.description")}
              </p>
            </div>
            <Link
              href="https://www.instagram.com/p/DZVTp-jGJRx"
              target="_blank"
              className="inline-block border bg-[#8B2615] rounded-full border-white md:border-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] hover:border-[#C9A051] text-white transition-all mb-6"
            >
              {t("maps.cta")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapsSection;
